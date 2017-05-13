<template>
  <Page :current="current" :page-size="size" :total="total" simple class="page"></Page>  
</template>
<script>
  export default {
    props: ['total', 'current', 'size']
  }
</script>

<style scoped>
  .page{
    margin-top: 15px;
    float: right;
  }
</style>
