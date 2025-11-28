<template>
  <landing :active-tab="activeTab" @tab-change="handleTabChange" />
  <div class='border-t border-[#CCCCCC]'/>
  <main-content :active-tab="activeTab" />
</template>

<script setup lang="ts">
type TabType = 'products' | 'agents' | 'about'

const activeTab = ref<TabType>('products')

const handleTabChange = (tab: TabType) => {
  activeTab.value = tab
}
</script>