<template>
  <div class="flex flex-col w-full items-center">
    <company class="hidden md:flex"/>
    <div class="flex gap-2 md:gap-3 my-4">
      <button 
        @click="$emit('tab-change', 'products')"
        :class="[
          'md:p-4 p-1  bg-[#E8E8E8] hover:bg-[#E8E8E8]/80 rounded-xl transition-colors',
          activeTab === 'products' 
            ? 'border border-[#0F0F0F]'
            : ''
        ]"
      >
        Товары и услуги
      </button>
      <button 
        @click="$emit('tab-change', 'agents')"
        :class="[
          'px-2 py-2 bg-[#E8E8E8] hover:bg-[#E8E8E8]/80 rounded-xl transition-colors',
          activeTab === 'agents'
            ? 'border border-[#0F0F0F]'
            : ''
        ]"
      >
        Агенты
      </button>
      <button 
        @click="$emit('tab-change', 'about')"
        :class="[
          'px-2 py-2 bg-[#E8E8E8] hover:bg-[#E8E8E8]/80 rounded-xl transition-colors',
          activeTab === 'about'
            ? 'border border-[#0F0F0F]'
            : ''
        ]"
      >
        О компании
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  activeTab: 'products' | 'agents' | 'about'
}>()

defineEmits<{
  'tab-change': [tab: 'products' | 'agents' | 'about']
}>()
</script>