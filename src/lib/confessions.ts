import { ConfessionItem, CreateConfessionPayload } from "@/types/confession";
import { appendConfessionToSheet, getConfessionsFromSheet } from "./googleSheets";

const INITIAL_CONFESSIONS: ConfessionItem[] = [
  {
    id: "conf-101",
    confession: "We don't have a technology problem. We have a decision-making problem.",
    role: "CFO",
    createdAt: new Date(Date.now() - 3600000 * 24 * 3).toISOString(),
    approved: true,
    likesCount: 42,
  },
  {
    id: "conf-102",
    confession: "Every project is urgent until Finance asks how much it costs.",
    role: "CFO",
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
    approved: true,
    likesCount: 58,
  },
  {
    id: "conf-103",
    confession: "Sometimes tech debt is just yesterday's business decision coming back for payment.",
    role: "Technology Leader",
    createdAt: new Date(Date.now() - 3600000 * 24 * 2.5).toISOString(),
    approved: true,
    likesCount: 64,
  },
  {
    id: "conf-104",
    confession: "We spent $4M on an AI transformation initiative that is essentially a glorified search engine with a chat interface.",
    role: "CTO",
    createdAt: new Date(Date.now() - 3600000 * 24 * 1.5).toISOString(),
    approved: true,
    likesCount: 89,
  },
  {
    id: "conf-105",
    confession: "I approve 60% of enterprise tech spending purely because I don't want our board to think we're falling behind competitor buzzwords.",
    role: "CFO",
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    approved: true,
    likesCount: 37,
  },
  {
    id: "conf-106",
    confession: "Finance asks for 5-year fixed ROI projections on modern software when our own market strategy changes every 90 days.",
    role: "CIO",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    approved: true,
    likesCount: 73,
  },
  {
    id: "conf-107",
    confession: "When Finance asks us to 'optimize cloud costs', we turn off non-prod clusters for a weekend and call it strategic efficiency.",
    role: "CTO",
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
    approved: true,
    likesCount: 51,
  },
  {
    id: "conf-108",
    confession: "Behind every 'quick 2-week feature request' is 4 months of legacy system refactoring we never told the executive committee about.",
    role: "Technology Leader",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    approved: true,
    likesCount: 94,
  },
];

let inMemoryConfessions: ConfessionItem[] = [...INITIAL_CONFESSIONS];

export async function getApprovedConfessions(): Promise<ConfessionItem[]> {
  try {
    const sheetRecords = await getConfessionsFromSheet();
    
    if (sheetRecords && sheetRecords.length > 0) {
      // Merge unique items by id
      const combinedMap = new Map<string, ConfessionItem>();
      
      // Seed with initial / inMemory
      for (const item of inMemoryConfessions) {
        combinedMap.set(item.id, item);
      }
      
      // Override / append from Google Sheets
      for (const item of sheetRecords) {
        combinedMap.set(item.id, item);
      }
      
      return Array.from(combinedMap.values())
        .filter((c) => c.approved)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  } catch (error) {
    console.error("Failed to load confessions from Google Sheets, falling back to local:", error);
  }

  return inMemoryConfessions
    .filter((c) => c.approved)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function createConfession(payload: CreateConfessionPayload): Promise<ConfessionItem> {
  const newConfession: ConfessionItem = {
    id: `conf-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    confession: payload.confession.trim(),
    role: payload.role || "Other",
    prompt: payload.prompt,
    createdAt: new Date().toISOString(),
    approved: true,
    likesCount: 0,
  };

  inMemoryConfessions.unshift(newConfession);

  // Asynchronously append to Google Sheet
  try {
    await appendConfessionToSheet(newConfession);
  } catch (err) {
    console.error("Error saving confession to Google Sheet:", err);
  }

  return newConfession;
}
