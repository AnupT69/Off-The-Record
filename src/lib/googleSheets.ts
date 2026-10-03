import { google } from "googleapis";
import { ConfessionItem } from "@/types/confession";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getAuth() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    return null;
  }

  // Handle various formats of newline escaping in environment variables
  if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
    privateKey = privateKey.slice(1, -1);
  }
  privateKey = privateKey.replace(/\\n/g, "\n");

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  });
}

export async function appendConfessionToSheet(confession: ConfessionItem): Promise<boolean> {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const auth = getAuth();

  if (!auth || !spreadsheetId) {
    console.warn("Google Sheets credentials or SHEET_ID not configured.");
    return false;
  }

  try {
    const sheets = google.sheets({ version: "v4", auth });

    // Ensure header row exists if sheet is completely empty
    const checkHeader = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "A1:G1",
    });

    if (!checkHeader.data.values || checkHeader.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "A1:G1",
        valueInputOption: "RAW",
        requestBody: {
          values: [["ID", "Created At", "Role", "Prompt", "Confession", "Likes", "Approved"]],
        },
      });
    }

    // Append new confession row
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:G",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            confession.id,
            confession.createdAt,
            confession.role || "Other",
            confession.prompt || "",
            confession.confession,
            confession.likesCount ?? 0,
            confession.approved ? "TRUE" : "FALSE",
          ],
        ],
      },
    });

    return true;
  } catch (error) {
    console.error("Error appending confession to Google Sheet:", error);
    return false;
  }
}

export async function getConfessionsFromSheet(): Promise<ConfessionItem[]> {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const auth = getAuth();

  if (!auth || !spreadsheetId) {
    return [];
  }

  try {
    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "A2:G",
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    return rows
      .map((row) => ({
        id: row[0] || `conf-${Math.random()}`,
        createdAt: row[1] || new Date().toISOString(),
        role: (row[2] as any) || "Other",
        prompt: row[3] || undefined,
        confession: row[4] || "",
        likesCount: Number(row[5]) || 0,
        approved: String(row[6]).toUpperCase() === "TRUE",
      }))
      .filter((item) => item.confession.trim().length > 0 && item.approved);
  } catch (error) {
    console.error("Error reading confessions from Google Sheet:", error);
    return [];
  }
}
