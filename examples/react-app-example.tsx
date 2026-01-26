/**
 * Example: Create React App
 * 
 * This example demonstrates how to integrate Vercel Web Analytics
 * in a React application (Create React App or similar).
 * 
 * Note: There is no route support with the plain React implementation.
 */

import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>My React App</h1>
      </header>
      <main>
        {/* Your app content here */}
      </main>
      <Analytics />
    </div>
  );
}
