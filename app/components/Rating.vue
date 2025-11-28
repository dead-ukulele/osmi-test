<template>
  <div class="flex items-center gap-2 flex-wrap">

    <span v-if="!documentsVerified && !rating" class="text-gray-600 text-sm">
      Нет оценок
    </span>

    <template v-else>
      <div v-if="documentsVerified" class="flex items-center gap-1.5">
        <svg 
          class="w-4 h-4 text-[#337566] flex-shrink-0" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fill-rule="evenodd" 
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
            clip-rule="evenodd" 
          />
        </svg>
        <span class="text-gray-700 text-sm whitespace-nowrap">
          <span class="hidden md:inline">Документы проверены</span>
          <span class="md:hidden">{{ gender === 'female' ? 'Проверена' : 'Проверен' }}</span>
        </span>
      </div>

      <div 
        v-if="documentsVerified && rating" 
        class="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"
      ></div>

      <div v-if="rating" class="flex items-center md:gap-1.5">
        <svg 
          class="w-4 h-4 text-[#337566] flex-shrink-0"
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span class="text-gray-700 text-sm whitespace-nowrap">{{ rating }}</span>
      </div>

      <div 
        v-if="rating && reviewsCount" 
        class="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"
      ></div>

      <div v-if="reviewsCount" class="flex items-center">
        <span class="text-gray-700 text-sm whitespace-nowrap">{{ reviewsCountText }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { pluralize } from '~/utils/pluralize'

interface Props {
  documentsVerified?: boolean
  rating?: string | number | null
  reviewsCount?: number | string | null
  gender?: 'male' | 'female'
}

const props = withDefaults(defineProps<Props>(), {
  documentsVerified: false,
  rating: null,
  reviewsCount: null,
  gender: 'male'
})

const reviewsCountText = computed(() => {
  if (!props.reviewsCount) return ''
  const count = typeof props.reviewsCount === 'number' ? props.reviewsCount : Number(props.reviewsCount)
  if (isNaN(count)) return ''
  const form = pluralize(count, ['отзыв', 'отзыва', 'отзывов'])
  return `${count} ${form}`
})
</script>

