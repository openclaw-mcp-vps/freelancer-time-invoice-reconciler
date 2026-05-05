import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimeSync — Match Time Tracking with Invoices Automatically",
  description: "Sync Toggl, Harvest, and Clockify with QuickBooks, FreshBooks, and Wave to flag unbilled hours and invoice discrepancies instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5e2c81ee-3b50-45eb-8fba-5ba085d470a1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
