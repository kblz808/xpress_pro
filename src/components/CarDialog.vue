<script>
export default {
  props: ["car"],
  data() {
    return {
    }
  },
  methods: {
    handleNextImage() {
    }
  }
}
</script>

<template>
<div>
  <vs-dialog v-model="active" full-screen>
    <template #header>
      <h4>Title</h4>
    </template>

      <div class="container">
      </div>
  </vs-dialog>
</div>
</template>

<style scoped>
</style>