<template>
  <div class="relative">
    <button
      ref="buttonRef"
      @click="toggleDropdown"
      class="w-full bg-[#F5F5F5] rounded-xl px-4 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
    >
      <span>{{ selectedScheduleLabel }}</span>
      <svg
        :class="['w-4 h-4 transition-transform flex-shrink-0', isOpen ? 'rotate-180' : '']"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>


    <div
      v-if="isOpen"
      ref="dropdownRef"
      class="absolute top-full mt-2 bg-white border border-[#E8E8E8] rounded-lg shadow-lg z-50 w-full"
    >
      <div class="py-2">
        <button
          v-for="schedule in schedules"
          :key="schedule.date"
          @click="selectSchedule(schedule.date)"
          class="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center justify-between"
        >
          <div class="flex flex-col">
            <span class="font-medium">{{ schedule.label }}</span>
            <span class="text-sm text-gray-600">{{ schedule.time }}</span>
          </div>
          <svg
            v-if="selectedDate === schedule.date"
            class="w-5 h-5 text-[#337566] flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Schedule {
  date: string
  label: string
  time: string
}

const props = defineProps<{
  schedules: Schedule[]
  selectedDate?: string
}>()

const emit = defineEmits<{
  'update:selectedDate': [date: string]
}>()

const isOpen = ref(false)
const selectedDate = ref<string>(props.selectedDate || props.schedules[0]?.date || '')
const dropdownRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLElement | null>(null)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleClickOutside = (event: MouseEvent) => {
  if (isOpen.value) {
    const target = event.target as Node
    if (
      dropdownRef.value && 
      !dropdownRef.value.contains(target) &&
      buttonRef.value &&
      !buttonRef.value.contains(target)
    ) {
      closeDropdown()
    }
  }
}

const selectedScheduleLabel = computed(() => {
  const schedule = props.schedules.find(s => s.date === selectedDate.value)
  return schedule ? `${schedule.label} - ${schedule.time}` : 'Выберите день'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const selectSchedule = (date: string) => {
  selectedDate.value = date
  emit('update:selectedDate', date)
  closeDropdown()
}

watch(() => props.selectedDate, (newValue) => {
  if (newValue) {
    selectedDate.value = newValue
  }
})
</script>
