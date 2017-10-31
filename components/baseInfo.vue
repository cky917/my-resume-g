<template>
  <div class="base-info">
    <div class="photo">
      <img :src="baseInfo.photo" alt="本人照片" class="photo-human"/>
      <img v-if="baseInfo.catonPhoto" :src="baseInfo.catonPhoto" alt="卡通照片" class="photo-caton"/>
    </div>
    <div class="introduce">
      <h1 class="introduce-name">{{ baseInfo.name}} 的简历</h1>
      <h2 class="introduce-position">应聘职位：{{ baseInfo.position}}</h2>
      <ul class="introduce-contact">
        <li v-for="item in baseInfo.contact">
          <i :class="item.iconClass || 'icon-bookmark'"></i>
          <label>{{ item.text }}</label>:<span v-if="item.content"> {{ item.content }} </span>
          <a v-if="item.link" :href="item.link" target="_blank"> {{ item.link }}</a>
          <a v-if="item.mailLink" :href="'Mailto:'+item.mailLink" title="给我发邮件"> {{ item.mailLink }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseInfo',
  props: ['baseInfo'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.base-info{
  background:#37a18e;
  width:100%;
  padding: 40px 0;
  color:#dad7d4;
  .photo{
    display:block;
    position: relative;
    overflow: hidden;
    width:4rem;
    height: 4rem;
    margin:0 auto 30px;
    border-radius:50%;
    border:2px solid #6687a6;
    &:hover{
      .photo-caton{
        opacity: 1;
      }
      .photo-human{
        opacity: 0;
      }
    }
    img{
      position: absolute;
      width:4rem;
      height: 4rem;
      border-radius: 50%;
      transition: 1s ease all;
    }
    .photo-human{
      opacity: 1;
    }
    .photo-caton{
      opacity: 0;
    }
  }
  .introduce{
    text-align:center;
  }
  .introduce-name{
    font-size:.4rem;
  }
  .introduce-position{
    font-size:.3rem;
    margin-bottom:10px;
  }
  .introduce-contact{
    li{
      font-size:.2rem;
      line-height: .5rem;
      a{
        color:#dad7d4;
        transition:.2s ease all;
        &:hover{
          color:#000;
        }
      }
    }
  }
}
</style>