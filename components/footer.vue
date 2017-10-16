<template>
  <footer>
        © {{ baseInfo.name }} 的简历 Powered by <a href="https://github.com/cky917/me" target="_blank">me,简单的配置化网页简历生成系统</a>
  </footer>
</template>
<script>
export default {
  name: 'footer',
  props: ['baseInfo']
}
</script>

<style scoped lang="less">
    footer{
        color:#fff;
        padding:.5rem 0;
        font-size: .2rem;
        text-align:center;
        background:#37a18e;
        a{
            color:#fff;
        }
    }
</style>