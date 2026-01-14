<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold mb-6">Annales for {{ subjectName }}</h1>
    <p class="text-gray-600">PDF list will appear here once backend is connected.</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    subjectName() {
      const names = { 1: 'Std', 2: 'Python Programming', 3: 'C Programming', 4: 'Java' }
      return names[this.id]
    }
  }
}
</script>
