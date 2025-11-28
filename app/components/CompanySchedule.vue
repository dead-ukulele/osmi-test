<template>
  <div class="w-full max-w-[560px]">
    <h3 class="text-xl font-semibold mb-4">Режим работы</h3>
    <schedule-dropdown
      :schedules="schedules"
      :selected-date="selectedDate"
      @update:selected-date="$emit('update:selected-date', $event)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  schedules: Array<{ date: string; label: string; time: string }>
  selectedDate: string
}

defineProps<Props>()

defineEmits<{
  'update:selected-date': [date: string]
}>()
</script>
