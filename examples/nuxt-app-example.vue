<!--
Example: Nuxt 3

This example demonstrates how to integrate Vercel Web Analytics
in a Nuxt application.
-->

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <div>
    <Analytics />
    <NuxtPage />
  </div>
</template>
