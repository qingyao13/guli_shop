<template>
  <li>
    <a href="javascript:;">
      <div class="info new">
        新品
      </div>
      <img src="/static/image/recommend/peijian2.jpg" alt="">
      <p class="name">小米6 硅胶保护套</p>
      <p class="price">49元</p>
      <p class="counter">372人评价</p>
      <div class="comment">
        <p>发货速度很快！很配小米6！</p>
        <p>来至于mi狼牙的评价</p>
      </div>
    </a>
  </li>
</template>
<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
  li
    width: 234px
    height: 300px
    background-color: #fff
    &:nth-child(1) .bigImg, &:nth-child(6) .bigImg
      width: 100%
      height: 100%
      margin: 0
    &:hover
      box-shadow: 0px 0px 30px #ccc
      .comment
        transform: translateY(0)
    a
      display: flex
      flex-direction: column
      align-items: center
      font-size: 14px
      text-align: center
      width: 100%
      height: 100%
      position: relative
      overflow: hidden
      .info
        width: 65px
        height: 20px
        text-align: center
        line-height: 20px
        color: #fff
        font-size: 10px

      .new
        background-color: #83c44e

      .discount
        background-color: red

      & > p
        height: 25px
        line-height: 25px
        font-size: 14px

      .price
        color: #ff6700

      .counter
        height: 15px
        line-height: 15px
        color: #aaa
        font-size: 12px

      img
        width: 160px
        height: 160px
        margin: 10px 0 20px

      .comment
        position: absolute
        bottom: 0
        left: 0
        right: 0
        transform: translateY(101%)
        transition: transform 0.4s
        box-sizing: border-box
        height: 70px
        padding: 10px 0 0 30px
        background-color: #ff6700
        color: #fff
        text-align: left
        p
          font-size: 12px
          margin-top: 5px
</style>
