<script setup lang="ts">
import Nav from './components/nav.vue';
import Message from './pages/Messages.vue'
</script>

<template>
  <div>
    <Nav />
    <div class="container">
      <section class="section">
      <h1 class="title">Welcome to the Vue project</h1>
      <Message />
      </section>
    </div>
  </div>
</template>

<style>
</style>
