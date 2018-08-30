<template>
  <h1>about!!</h1>
</template>

<script>
import Collapse from "../components/collapse"
export default {
  name: 'app',
  components: {
     Collapse
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#collapse{
  max-width:414px;
  margin:0 auto;
}
#avatar{
  width:50%;
  max-width:200px;
}
</style>
