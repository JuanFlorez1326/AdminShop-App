<template>
  <TopMenu />
  <RouterView />
  <CustomFooter />
</template>

<script lang="ts" setup>
import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';
</script>
