/**
 * Example: Other Frameworks
 * 
 * This example demonstrates how to integrate Vercel Web Analytics
 * in other frameworks that don't have a dedicated package export.
 * 
 * The inject function adds the tracking script to your app.
 * This should only be called once in your app, and must run in the client.
 * 
 * Note: There is no route support with the inject function.
 */

import { inject } from "@vercel/analytics";

// Call this in your main app initialization code (client-side only)
inject();
