<template>
  <div class="content">
    <ul class="content-list">
      <li class="content-item" v-for="item in contentData">
        <h2 class="content-item-title">
          <span class="item-title">{{ item.title }}</span>
        </h2>
        <ContentDetail :detailData="item.detail"></contentDetail>
      </li>
    </ul>
  </div>
</template>

<script>
import ContentDetail from './contentDetail'
export default {
  components: { ContentDetail },
  name: 'myContent',
  props: ['contentData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content{
  background:#fafafa;
  padding:.8rem .8rem;
}
.content-item-title{
  text-align:center;
  border-top:1px solid #eee;
  .item-title{
    position:relative;
    top:-.3rem;
    font-size: .4rem;
    padding: .1rem .24rem;
    background: #eee;
    color:#333;
    border-radius:26px;
    border: .1rem solid #fafafa;
  }
}
</style>