<template>
  <div class="resume">
    <baseInfo :baseInfo="mydata.baseInfo"></baseInfo>
    <myContent :contentData="mydata.contentData"></myContent>
    <myFooter :baseInfo="mydata.baseInfo"></myFooter>
  </div>
</template>

<script>
import baseInfo from '~/components/baseInfo.vue'
import myContent from '~/components/myContent.vue'
import myFooter from '~/components/footer.vue'
import myData from '~/data/resumeData.json'

export default {
  components: {
    baseInfo,
    myContent,
    myFooter
  },
  data () {
    return {
      mydata: myData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.resume{
  a{
    transition:.2s ease all;
    &:hover{
      color:#000;
    }
  }
}
</style>