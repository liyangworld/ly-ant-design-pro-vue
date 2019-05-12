<template>
  <div class="footer">
    <div class="links">
      <a href="https://pro.loacg.com/" target="_blank">Antd Pro Vue 首页</a>
      <a
        href="https://github.com/liyangworld/ly-ant-design-pro-vue"
        target="_blank"
      >
        <a-icon type="github" />
      </a>
      <a href="https://ant.design/" target="_blank">Ant Design</a>
      <a href="https://vue.ant.design/docs/vue/introduce-cn/" target="_blank"
        >Antd Vue</a
      >
    </div>
    <div class="copyright">
      <span>Copyright</span>
      <a-icon type="copyright" />
      <span>2019 by liyang</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;

    span {
      margin: 0 2px;
    }
  }
}
</style>
