<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @promote="handlePromote"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from './product-card.vue'

defineProps<{
  products: Product[]
}>()

const emit = defineEmits<{
  promote: [id: string | number]
}>()

const handlePromote = (id: string | number) => {
  emit('promote', id)
}
</script>


