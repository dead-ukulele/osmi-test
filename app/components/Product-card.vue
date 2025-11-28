<template>
  <div class="bg-white border border-[#E8E8E8] rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
    <div class="relative">
      <div class="w-full h-64 bg-[#E8E8E8] relative">
        <img 
          v-if="product.image" 
          :src="product.image" 
          :alt="product.title"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="absolute top-2 left-2 flex flex-row gap-2">
        <div class="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
          </svg>
          {{ product.views }} просмотров
        </div>
        <div class="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
          </svg>
          {{ formatExpireDate(product.expireDays) }}
        </div>
      </div>
    </div>

    <div class="p-4 flex flex-col flex-1">
      <div class="mb-2">
        <span class="text-[#337566] font-bold text-lg">{{ formatPrice(product.price) }}</span>
      </div>

      <h3 class="text-gray-900 font-medium text-base mb-4">{{ product.title }}</h3>

      <div class="pt-4 border-t border-[#E8E8E8] h-[54px]">
        <div v-if="product.status === 'promoted'" class="flex items-center justify-center gap-2 pt-2 text-sm text-[#337566]">
          <span>Объявление продвигается</span>
        </div>

        <div 
         v-else-if="product.status === 'active'"
        class="flex items-center justify-between gap-2 text-sm">
          <span class="text-gray-600">Увеличьте количество просмотров</span>
          <button 
            @click="$emit('promote', product.id)"
            class="bg-[#337566] text-white px-2 py-2 rounded-xl hover:bg-[#337566]/90 transition-colors text-sm font-medium"
          >
            Продвигать
          </button>
        </div>

        <div v-else-if="product.status === 'hidden'" class="flex items-center justify-center pt-2">
          <p class="text-sm text-[#BD3223]">Объявление скрыто</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { pluralize } from '~/utils/pluralize'

export interface Product {
  id: string | number
  image?: string
  price: number
  description: string
  views: number
  expireDays: number
  status: 'promoted' | 'active' | 'hidden'
  title: string
}

const props = defineProps<{
  product: Product
}>()

defineEmits<{
  promote: [id: string | number]
}>()

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

const formatExpireDate = (days: number): string => {
  const form = pluralize(days, ['день', 'дня', 'дней'])
  return `${days} ${form}`
}
</script>

