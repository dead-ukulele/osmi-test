<template>
  <div class="w-full px-2 md:px-4 py-8">
    <products-section v-if="activeTab === 'products'" />
    <agents-section v-if="activeTab === 'agents'" />
    <about-section v-if="activeTab === 'about'" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activeTab: 'products' | 'agents' | 'about'
}>()
</script>

