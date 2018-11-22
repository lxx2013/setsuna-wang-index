<template>
  <div id="app">
  <img id="avatar" src="https://avatars2.githubusercontent.com/u/20529542" >
  <el-row id="collapse">
<el-col :span="24"><Collapse></Collapse></el-col>
</el-row>
<!--    公安备案信息-->
    <div id="beian" >
      <div><a target="_blank" style="text-decoration:none;color:black" href="http://www.miitbeian.gov.cn">豫ICP备18006797号</a></div>
                                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102000933" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="beian.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">鄂公网安备 42011102000933号</p></a>
    </div>
  </div>
  
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
