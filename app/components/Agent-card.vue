<template>
  <div class="w-full max-w-[560px] bg-[#F5F5F5] rounded-xl overflow-hidden hover:shadow-lg transition-shadow p-4 md:p-5">
    <div class="flex md:hidden flex-row items-start gap-3 mb-3">
      <div class="flex-shrink-0">
        <img 
          src="/Avatar.webp"
          :alt="agent.name"
          class="w-16 h-16 md:w-[140px] md:h-[140px] object-cover rounded-xl"
        />
      </div>
      <div class="flex flex-col flex-1 min-w-0">
        <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ agent.name }}</h3>
        <div>
          <rating
            :documents-verified="agent.documentsVerified"
            :rating="agent.rating"
            :reviews-count="agent.reviewsCount"
            :gender="agent.gender"
          />
        </div>
      </div>
    </div>

    <div class="hidden md:flex flex-row items-start gap-4">
      <div class="flex-shrink-0">
        <img 
          src="/Avatar.webp"
          :alt="agent.name"
          class="w-[140px] h-[140px] object-cover rounded-xl"
        />
      </div>
      <div class="flex flex-col flex-1 min-w-0">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ agent.name }}</h3>
        <div class="mb-2">
          <rating
            :documents-verified="agent.documentsVerified"
            :rating="agent.rating"
            :reviews-count="agent.reviewsCount"
            :gender="agent.gender"
          />
        </div>
        <p v-if="agent.description" class="font-normal text-base text-wrap line-clamp-3">
          {{ agent.description }}
        </p>
      </div>
    </div>

    <p v-if="agent.description" class="md:hidden font-normal text-base text-wrap mt-3">
      {{ agent.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
export interface Agent {
  id: string | number
  name: string
  image?: string
  description?: string
  documentsVerified?: boolean
  rating?: string | number | null
  reviewsCount?: number | null
  gender?: 'male' | 'female'
}

defineProps<{
  agent: Agent
}>()

defineEmits<{
  contact: [id: string | number]
}>()
</script>

