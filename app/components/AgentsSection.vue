<template>
  <div class="space-y-6">
    <div class="flex flex-col items-center gap-6">
      <agent-card
        v-for="agent in agents"
        :key="agent.id"
        :agent="agent"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Agent } from './Agent-card.vue'

const agents = ref<Agent[]>([
  {
    id: 1,
    name: 'Иван Иванов',
    description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    documentsVerified: true,
    rating: '4.7',
    reviewsCount: 19,
    gender: 'male'
  },
  {
    id: 2,
    name: 'Мария Петрова',
    description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    documentsVerified: true,
    rating: '4.9',
    reviewsCount: 32,
    gender: 'female'
  },
  {
    id: 3,
    name: 'Алексей Смирнов',
    description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    documentsVerified: true,
    rating: '4.5',
    reviewsCount: 15,
    gender: 'male'
  },
  {
    id: 4,
    name: 'Елена Козлова',
    description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    documentsVerified: false,
    gender: 'female'
  },
  {
    id: 5,
    name: 'Дмитрий Волков',
    description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    documentsVerified: true,
    gender: 'male'
  },
  {
    id: 6,
    name: 'Анна Новикова',
    description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    documentsVerified: true,
    rating: '4.4',
    reviewsCount: 12,
    gender: 'female'
  }
])
</script>
