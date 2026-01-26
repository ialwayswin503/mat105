/**
 * Example: Next.js with Pages Directory
 * 
 * This example demonstrates how to integrate Vercel Web Analytics
 * in a Next.js application using the pages directory.
 */

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
