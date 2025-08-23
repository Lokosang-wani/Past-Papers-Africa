import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Past papers Africa",
  description: "An Online platform for African students to prepare for national certificates exams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
