<template>
  <div class="relative flex justify-center w-full max-w-[440px]">
    <button
      ref="buttonRef"
      @click="toggleDropdown"
      class="w-full bg-[#EDEDED] border border-[#E8E8E8] rounded-xl px-4 py-2 flex items-center justify-between gap-2 hover:bg-gray-50 transition-colors"
    >
      <span>{{ selectedCategoryLabel }}</span>
      <svg 
        :class="['w-4 h-4 transition-transform', isOpen ? 'rotate-180' : '']"
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
      class="absolute top-full mt-2 bg-white border border-[#E8E8E8] rounded-lg shadow-lg z-50 w-full max-w-[440px] rounded-xl left-1/2 transform -translate-x-1/2"
    >
      <div class="py-2">
        <button
          @click="selectCategory('all')"
          class="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center justify-between"
        >
          <span>Все товары и услуги</span>
          <svg
            v-if="pendingCategory === 'all'"
            class="w-5 h-5 text-[#337566]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>

        <div>
          <div class="w-full text-left px-4 py-2 text-gray-600 font-normal">
            <span class="text-sm ">Категория 1</span>
          </div>
          <div class="pl-4">
            <button
                @click="selectCategory('category1-1')"
                class="w-full text-left pr-4 py-2 hover:bg-gray-50 flex items-center justify-between text-base"
            >
              <span>Гробы</span>
              <svg
                v-if="pendingCategory === 'category1-1'"
                class="w-5 h-5 text-[#337566]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
            <button
              @click="selectCategory('category1-2')"
              class="w-full text-left pr-4 py-2 hover:bg-gray-50 flex items-center justify-between text-base"
            >
              <span>Урны</span>
              <svg
                v-if="pendingCategory === 'category1-2'"
                class="w-5 h-5 text-[#337566]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <div class="w-full text-left px-4 py-2 text-gray-600 font-normal">
            <span class="text-sm ">Категория 2</span>
          </div>
          <div class="pl-4">
            <button
              @click="selectCategory('category2-1')"
              class="w-full text-left pr-4 py-2 hover:bg-gray-50 flex items-center justify-between text-base"
            >
              <span>Тапки</span>
              <svg
                v-if="pendingCategory === 'category2-1'"
                class="w-5 h-5 text-[#337566]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
            <button
              @click="selectCategory('category2-2')"
              class="w-full text-left pr-4 py-2 hover:bg-gray-50 flex items-center justify-between text-base"
            >
              <span>Покрывало</span>
              <svg
                v-if="pendingCategory === 'category2-2'"
                class="w-5 h-5 text-[#337566]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>


      <div class="hidden md:block p-2">
        <button
          @click="applyFilter"
          class="w-full bg-[#337566] text-white px-4 py-2 rounded-lg hover:bg-[#337566]/90 transition-colors"
        >
          Применить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  selectedCategory: string
}>()

const emit = defineEmits<{
  'update:selectedCategory': [category: string]
  'apply': [category: string]
}>()

const isOpen = ref(false)
const pendingCategory = ref<string>(props.selectedCategory)
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

const categoryLabels: Record<string, string> = {
  'all': 'Все товары и услуги',
  'category1-1': 'Гробы',
  'category1-2': 'Урны',
  'category2-1': 'тапки',
  'category2-2': 'Покрывало'
}

const selectedCategoryLabel = computed(() => {
  return categoryLabels[pendingCategory.value] || 'Все товары и услуги'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    pendingCategory.value = props.selectedCategory
  }
}

const closeDropdown = () => {
  isOpen.value = false
  pendingCategory.value = props.selectedCategory
}

const selectCategory = (category: string) => {
  pendingCategory.value = category
  
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    emit('update:selectedCategory', category)
    emit('apply', category)
    isOpen.value = false
  }
}

const applyFilter = () => {
  emit('update:selectedCategory', pendingCategory.value)
  emit('apply', pendingCategory.value)
  isOpen.value = false
}

watch(() => props.selectedCategory, (newValue) => {
  pendingCategory.value = newValue
})
</script>

