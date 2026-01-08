<!--
Example: Vue 3 with Composition API

This example demonstrates how to integrate Vercel Web Analytics
in a Vue 3 application.

Note: Route support is automatically enabled if you're using vue-router.
-->

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <div id="app">
    <header>
      <h1>My Vue App</h1>
    </header>
    <main>
      <!-- Your app content here -->
    </main>
    <Analytics />
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
