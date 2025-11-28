<template>
  <div class="space-y-6">
    <div class="flex flex-col items-center gap-6">
      <category-filter 
        :selected-category="selectedCategory"
        @update:selected-category="selectedCategory = $event"
        @apply="handleCategoryApply"
      />
    </div>
    <products-grid :products="products" @promote="handlePromote" />
  </div>
</template>

<script setup lang="ts">
import type { Product } from './product-card.vue'
import ProductImage from '~/assets/images/Product-1.jpg'
import SecondProductImage from '~/assets/images/Product-2.jpg'

const selectedCategory = ref<string>('all')

const products = ref<Product[]>([

  {
    id: 1,
    title: 'Синтезатор',
    price: 15000,
    description: 'Качественный товар с отличными характеристиками и долгим сроком службы',
    views: 245,
    expireDays: 3,
    status: 'promoted',
    image: ProductImage
  },
  {
    id: 2,
    title: 'Машина',
    price: 8500,
    description: 'Современное решение для ваших задач по доступной цене',
    views: 128,
    expireDays: 1,
    status: 'active',
    image: SecondProductImage
  },
  {
    id: 3,
    title: 'Синтезатор',
    price: 22000,
    description: 'Премиум качество и надежность в каждом элементе',
    views: 567,
    expireDays: 5,
    status: 'active',
    image: ProductImage
  },
  {
    id: 4,
    title: 'Машина',
    price: 12000,
    description: 'Проверенное временем решение с гарантией качества',
    views: 89,
    expireDays: 2,
    status: 'hidden',
    image: SecondProductImage
  },
  {
    id: 5,
    title: 'Синтезатор',
    price: 18000,
    description: 'Новинка сезона с улучшенными характеристиками',
    views: 312,
    expireDays: 4,
    status: 'promoted',
    image: ProductImage
  },
  {
    id: 6,
    title: 'Машина',
    price: 9500,
    description: 'Идеальное соотношение цены и качества для повседневного использования',
    views: 156,
    expireDays: 1,
    status: 'active',
    image: SecondProductImage
  },
  {
    id: 7,
    title: 'Синтезатор',
    price: 25000,
    description: 'Профессиональное оборудование для серьезных задач',
    views: 423,
    expireDays: 6,
    status: 'active',
    image: ProductImage
  },
  {
    id: 8,
    title: 'Машина',
    price: 13500,
    description: 'Компактное и функциональное решение для дома и офиса',
    views: 201,
    expireDays: 3,
    status: 'promoted',
    image: SecondProductImage
  },
  {
    id: 9,
    title: 'Синтезатор',
    price: 18000,
    description: 'Новинка сезона с улучшенными характеристиками',
    views: 312,
    expireDays: 4,
    status: 'promoted',
    image: ProductImage
  },
  {
    id: 10,
    title: 'Машина',
    price: 9500,
    description: 'Идеальное соотношение цены и качества для повседневного использования',
    views: 156,
    expireDays: 1,
    status: 'active',
    image: SecondProductImage
  },
  {
    id: 11,
    title: 'Синтезатор',
    price: 25000,
    description: 'Профессиональное оборудование для серьезных задач',
    views: 423,
    expireDays: 6,
    status: 'active',
    image: ProductImage
  },
])

const handlePromote = (id: string | number) => {
  const product = products.value.find(p => p.id === id)
  if (product && product.status === 'active') {
    product.status = 'promoted'
  }
}

const handleCategoryApply = (category: string) => {
  selectedCategory.value = category
}

</script>

