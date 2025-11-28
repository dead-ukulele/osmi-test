<template>
  <footer class="border-t border-[#DBDBDB] bg-[#F5F5F5]">
    <div class="gap-5 flex flex-col md:flex-row justify-start p-6">
      <p>© Annonce 2023-{{ currentYear }}</p>
      <NuxtLink class="hover:cursor-pointer">Документы</NuxtLink>
      <NuxtLink class="hover:cursor-pointer">О компании</NuxtLink>
      <div class="md:hidden gap-5 flex flex-col md:flex-row justify-start">
        <NuxtLink>Продавцам</NuxtLink>
        <NuxtLink>Покупателям</NuxtLink>
        <NuxtLink>Разместить объявление</NuxtLink>
        <button class="text-left flex items-center rounded gap-2">
          <svg class="w-4 h-3" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
            <g fill-rule="evenodd" stroke-width="1pt">
              <path fill="#fff" d="M0 0h640v480H0z"/>
              <path fill="#0039a6" d="M0 160h640v160H0z"/>
              <path fill="#d52b1e" d="M0 320h640v160H0z"/>
            </g>
          </svg>
          Русский
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>




