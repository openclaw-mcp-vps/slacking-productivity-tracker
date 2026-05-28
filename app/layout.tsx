import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slacking — Anonymous Productivity Tracker for Remote Workers",
  description: "Understand your real productivity patterns without employer surveillance. Local-first time tracking with aggregated insights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d48b94fd-9293-4d75-9a54-663ae4134207"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
