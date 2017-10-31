<template>
  <span class="preview-img">
      <a href="###" class="preview-img-link">previewImg</a>
      <span class="img-container" >
        <img :src="imgSrc"/>
      </span>
  </span>   
</template>

<script>
export default {
  name: 'previewImg',
  props: ['imgSrc'],
  data () {
    return {
      isShow: false
    }
  }
}
</script>
<style scoped lang="less">
.preview-img{
    position:relative;
    font-size:.24rem;
    &:hover{
        .img-container{
            display:block;
        }
    }
    .preview-img-link{
        color:#3da08e;
    }
    .img-container{
        display:none;
        position:absolute;
        bottom:0;
        left:100%;
        border:3px solid #000;
        img{
            max-width:12rem;
        }
    }
}
</style>