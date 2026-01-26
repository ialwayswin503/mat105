/**
 * Example: SvelteKit
 * 
 * This example demonstrates how to integrate Vercel Web Analytics
 * in a SvelteKit application.
 */

import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";

injectAnalytics({ mode: dev ? "development" : "production" });
