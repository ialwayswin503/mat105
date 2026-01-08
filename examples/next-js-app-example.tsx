/**
 * Example: Next.js with App Directory
 * 
 * This example demonstrates how to integrate Vercel Web Analytics
 * in a Next.js application using the app directory (Next.js 13+).
 */

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
