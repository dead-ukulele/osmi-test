<template>
  <header class="sticky top-0 z-50 w-full p-4 h-16 bg-[#FFF7EB]">
    <div class="hidden lg:flex flex-row justify-between items-center h-full">
      <div class="flex items-center gap-5">
        <NuxtLink to="/" class="flex items-center">
          <img src="/Logo.svg" alt="Логотип" />
        </NuxtLink>
        <div class="flex">
          <button class="bg-[#E8E8E8] hover:bg-[#E8E8E8]/90 p-2 rounded-2xl flex flex-row items-center gap-2" style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 15px; line-height: 24px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
              <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/>
              <rect width="7" height="7" x="3" y="14" rx="1"/>
            </svg>
            Все категории
          </button>
        </div>
      </div>
      <div class="flex flex-row justify-between items-center gap-10">
        <div class="flex items-center gap-2 text-base hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Ростов-на-Дону</span>
        </div>
          <div class="border-l-2 h-[32px] border-l-[#CCCCCC]"/>
        <div class="text-[#337566] text-base font-medium hover:cursor-pointer">
          Разместить объявление
        </div>
        <div>
          <button class="bg-[#E8E8E8] hover:bg-[#E8E8E8]/90 rounded-3xl py-1 px-1 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="flex-shrink-0 ml-1">
              <path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>
            </svg>
            <img src="/Avatar.webp" alt="Аватар" class="w-8 h-8 rounded-full object-cover flex-shrink-0"/>
          </button>
        </div>
      </div>
    </div>

    <div class="flex lg:hidden flex-row justify-between items-center relative">
      <button @click="isOpen = !isOpen" class="p-2">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447716 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1ZM0 6C0 6.55228 0.447715 7 1 7H17C17.5523 7 18 6.55228 18 6C18 5.44772 17.5523 5 17 5H1C0.447716 5 0 5.44772 0 6ZM0 11C0 11.5523 0.447715 12 1 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H1C0.447716 10 0 10.4477 0 11Z" fill="#0F0F0F"/>
        </svg>

      </button>
      <NuxtLink to="/" class="flex items-center space-x-2">
        <span class="text-2xl font-bold">Annoncé</span>
      </NuxtLink>
      <button>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12.5" y="0.5" width="15" height="15.001" rx="7.5" fill="#337566"/>
          <rect x="12.5" y="0.5" width="15" height="15.001" rx="7.5" stroke="white"/>
          <path d="M19.6992 12.001V6.94678C19.6992 6.77848 19.701 6.61019 19.7046 6.44189C19.7082 6.2736 19.7135 6.10889 19.7207 5.94775C19.7279 5.78662 19.7368 5.63265 19.7476 5.48584C19.6724 5.5682 19.5793 5.65771 19.4683 5.75439C19.3608 5.85107 19.2445 5.95133 19.1191 6.05518L18.2222 6.7749L17.5884 5.97461L19.9141 4.14844H20.9722V12.001H19.6992Z" fill="#F5F5F5"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12H9ZM7 14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14H15C15 14.5523 15.4477 15 16 15C16.5523 15 17 14.5523 17 14H19V22C19 23.1046 18.1046 24 17 24H7C5.89543 24 5 23.1046 5 22V14H7ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12H19C20.1046 12 21 12.8954 21 14V22C21 24.2091 19.2091 26 17 26H7C4.79086 26 3 24.2091 3 22V14C3 12.8954 3.89543 12 5 12H7Z" fill="#0F0F0F"/>
          <rect x="12.5" y="0.5" width="15" height="15.001" rx="7.5" fill="#337566"/>
          <rect x="12.5" y="0.5" width="15" height="15.001" rx="7.5" stroke="white"/>
          <path d="M19.6992 12.001V6.94678C19.6992 6.77848 19.701 6.61019 19.7046 6.44189C19.7082 6.2736 19.7135 6.10889 19.7207 5.94775C19.7279 5.78662 19.7368 5.63265 19.7476 5.48584C19.6724 5.5682 19.5793 5.65771 19.4683 5.75439C19.3608 5.85107 19.2445 5.95133 19.1191 6.05518L18.2222 6.7749L17.5884 5.97461L19.9141 4.14844H20.9722V12.001H19.6992Z" fill="#F5F5F5"/>
        </svg>
      </button>

      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isOpen"
          class="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-[#E8E8E8] overflow-hidden z-50 max-w-[240px]"
        >
          <div class="p-4 space-y-3">
            <button
              @click="isOpen = false"
              class="w-full p-3 rounded-2xl flex items-center gap-3"
              style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 15px; line-height: 24px;"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
                <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/>
                <rect width="7" height="7" x="3" y="14" rx="1"/>
              </svg>
              <span>Все категории</span>
            </button>


            <div
              class="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#F5F5F5] cursor-pointer"
              style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 15px; line-height: 24px;"
              @click="isOpen = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Ростов-на-Дону</span>
            </div>

            <button
              @click="isOpen = false"
              class="w-full text-[#337566] p-3 rounded-2xl hover:bg-[#F5F5F5] text-center"
              style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 15px; line-height: 24px;"
            >
              Разместить объявление
            </button>
          </div>
        </div>
      </Transition>

      <Transition
        enter-active-class="transition-opacity ease-out duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-in duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-black/20 z-40"
          @click="isOpen = false"
        ></div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

