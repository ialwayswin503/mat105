# Vercel Web Analytics Setup Guide

This repository contains documentation and examples for implementing Vercel Web Analytics in your projects.

## Quick Start

1. **Enable Web Analytics in Vercel Dashboard**
   - Go to your [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project
   - Click the **Analytics** tab
   - Click **Enable** to activate Web Analytics

2. **Install the package**
   ```bash
   # Choose your package manager
   npm install @vercel/analytics
   # or
   yarn add @vercel/analytics
   # or
   pnpm add @vercel/analytics
   # or
   bun add @vercel/analytics
   ```

3. **Add Analytics to your app**
   - See the framework-specific examples in the `examples/` directory
   - Or refer to `docs/getting-started-analytics.md` for complete documentation

4. **Deploy to Vercel**
   ```bash
   vercel deploy
   ```

## Framework Examples

This repository includes example implementations for the following frameworks:

- **Next.js (Pages Directory)** - `examples/next-js-pages-example.tsx`
- **Next.js (App Directory)** - `examples/next-js-app-example.tsx`
- **Create React App** - `examples/react-app-example.tsx`
- **Remix** - `examples/remix-example.tsx`
- **Vue 3** - `examples/vue-app-example.vue`
- **Nuxt 3** - `examples/nuxt-app-example.vue`
- **SvelteKit** - `examples/sveltekit-layout-example.ts`
- **Astro** - `examples/astro-layout-example.astro`
- **Plain HTML** - `examples/html-example.html`
- **Other Frameworks** - `examples/other-frameworks-example.ts`

## Documentation

For comprehensive documentation, see:
- `docs/getting-started-analytics.md` - Complete getting started guide
- Framework-specific sections with code examples

## Key Features

✅ **Route Tracking** - Automatic route detection for framework support  
✅ **Web Vitals** - Monitors Core Web Vitals  
✅ **Privacy Focused** - GDPR compliant  
✅ **Zero Config** - Works out of the box (for most frameworks)  
✅ **Custom Events** - Track user interactions (Pro/Enterprise)  

## Deployment

After implementing Web Analytics in your project:

1. Commit your changes
2. Push to your repository (if using Git)
3. Deploy using: `vercel deploy` or via Git integration
4. Wait for the deployment to complete
5. Visit your site and check the Network tab for `/_vercel/insights/view` requests

## Verification

Once deployed, verify Web Analytics is working:

1. Open your site in a browser
2. Open Developer Tools (F12)
3. Go to the Network tab
4. Look for requests to `/_vercel/insights/view`
5. Visit multiple pages to generate traffic
6. Check the Analytics tab in your Vercel Dashboard after a few minutes

## Support

For more information:
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Custom Events](https://vercel.com/docs/analytics/custom-events)
- [Filtering Data](https://vercel.com/docs/analytics/filtering)
- [Privacy & Compliance](https://vercel.com/docs/analytics/privacy-policy)
- [Troubleshooting](https://vercel.com/docs/analytics/troubleshooting)

## Notes

- **HTML Implementation**: No package installation needed, but no route support
- **Plain React**: No route support
- **SvelteKit**: Use `injectAnalytics` instead of `<Analytics />`
- **Astro**: Use component (v1.4.0+) or configure in `astro.config.mjs` (earlier versions)
- **Route Support**: Available for Next.js, Remix, Nuxt, SvelteKit, and Astro

## Next Steps

After setting up Web Analytics:
1. Monitor your analytics in the Vercel Dashboard
2. [Set up custom events](https://vercel.com/docs/analytics/custom-events) to track user interactions
3. [Use filtering](https://vercel.com/docs/analytics/filtering) to explore your data
4. [Review pricing and limits](https://vercel.com/docs/analytics/limits-and-pricing)
