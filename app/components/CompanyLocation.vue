<template>
  <div class="w-full max-w-[560px]">
    <h3 class="text-xl font-semibold mb-4">Местоположение</h3>
    <div class="flex flex-col-reverse md:flex-row gap-4">
      <div class="flex-1">
        <p class="text-[#337566]">{{ address }}</p>
      </div>
      <div class="w-full md:w-[280px] h-[200px] bg-[#E8E8E8] rounded-lg overflow-hidden flex-shrink-0">
        <iframe
          :src="mapUrl"
          width="100%"
          height="100%"
          class="border-0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  address: string
  mapUrl: string
}

defineProps<Props>()
</script>

