<template>
  <div class="layout">
    <Top></Top>
    <Left></Left>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Top from './base/Header.vue'
import Bottom from './base/Footer.vue'
import Left from './base/Left.vue'
export default {
  components: {
    Top, Bottom, Left
  }
}
</script>
