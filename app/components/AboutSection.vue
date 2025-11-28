<template>
  <div class="space-y-6">
    <div class="flex flex-col items-center gap-6">
      <company class="flex md:hidden"/>
      <company-info />
      <company-schedule 
        :schedules="schedules"
        :selected-date="selectedScheduleDate"
        @update:selected-date="selectedScheduleDate = $event"
      />
      <company-location :address="address" :map-url="mapUrl" />
    </div>
  </div>
</template>

<script setup lang="ts">
const getSchedules = (): Array<{ date: string; label: string; time: string }> => {
  const today = new Date()
  const schedules: Array<{ date: string; label: string; time: string }> = []

  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long' })
    const dayOfMonth = date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
    
    let label = ''
    if (i === 0) {
      label = 'Сегодня'
    } else if (i === 1) {
      label = 'Завтра'
    } else {
      label = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
    }

    let time = '8:00 - 23:00'
    if (date.getDay() === 0) {
      time = 'Выходной'
    } else if (date.getDay() === 6) {
      time = '10:00 - 16:00'
    }
    
    const dateString = date.toISOString().split('T')[0]
    if (dateString) {
      schedules.push({
        date: dateString,
        label: `${label}, ${dayOfMonth}`,
        time: time
      })
    }
  }
  
  return schedules
}

const schedules = ref(getSchedules())
const selectedScheduleDate = ref<string>(schedules.value[0]?.date || '')

const address = ref('г. Ростов-на-Дону, Воронежская ул., 42А корп. 1')
const mapUrl = computed(() => {
  const encodedAddress = encodeURIComponent(address.value)
  return `https://www.google.com/maps?q=${encodedAddress}&output=embed`
})
</script>

