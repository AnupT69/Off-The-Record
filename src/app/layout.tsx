import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Off The Record | CFO × CTO Confessions | The Forum House",
  description:
    "Anonymous CFO and CTO confessions from the people making the decisions behind Finance and Technology. An initiative by The Forum House for The House Of CFO X CTO Summit & Awards 2026.",
  openGraph: {
    title: "OFF THE RECORD — CFO × CTO CONFESSIONS",
    description: "What would you say if nobody knew it was you?",
    type: "website",
    siteName: "The Forum House — Off The Record",
  },
  twitter: {
    card: "summary_large_image",
    title: "OFF THE RECORD — CFO × CTO CONFESSIONS",
    description: "What would you say if nobody knew it was you?",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full bg-[#0A0A0A] text-[#F5F3EE] font-sans">
        {children}
      </body>
    </html>
  );
}
