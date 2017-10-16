<template>
  <ul class="content-detail">
    <li class="content-detail-item" v-for="item in detailData">
      <div class="detail-header">
        <h3 class="detail-title">{{ item.title }} 
            <a v-if="item.previewLink" :href="item.previewLink" target="_black">preview</a>
            <a v-if="item.github" :href="item.github" target="_black">github</a>
        </h3>
        <span class="detail-time">{{ item.time }}</span>
      </div>
      <span class="detail-tips">{{ item.tips }}</span>
      <pre class="detail-content">{{ item.content }}</pre>
      <ul class="detail-labels">
        <li v-for="label in item.labels" class="detail-label-item">{{ label }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'contentDetail',
  props: ['detailData']
}
</script>

<style scoped lang="less">
    .content-detail{
        padding:.4rem 0;
        color:#555;
    }
    .content-detail-item{
        margin-bottom:.4rem;
        .detail-header{
            display:flex;
            justify-content:space-between;
            font-size:.3rem;
        }
        .detail-title{
            flex:2;
            margin-bottom:.05rem;
            a{
                font-size:.18rem;
                color:#3da08e;
                margin-right:5px;
            }
        }
        .detail-time{
            flex:1;
            text-align:right;
            color:#999;
        }
        .detail-tips{
            display:block;
            font-size:.24rem;
            color:#999;
            margin-bottom:.1rem;
        }
        .detail-content{
            font-size:.26rem;
            color:#555;
        }
        .detail-labels{
            margin-top:.1rem;
            margin-bottom: .1rem;
        }
        .detail-label-item{
            display:inline-block;
            padding: .03rem .2rem;
            background: #3da08e;
            color:#fff;
            border-radius: 26px;
            margin-right:.1rem;
        }
    }
</style>