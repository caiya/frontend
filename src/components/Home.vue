<template>
    <div class="layout">
        <Header></Header>
        <Left></Left>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './base/Header.vue'
import Footer from './base/Footer.vue'
import Left from './base/Left.vue'
export default {
  components: {
    Header, Footer, Left
  }
}
</script>
