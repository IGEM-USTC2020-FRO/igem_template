<template>
  <div class="hello">
    <h1>恭喜你看到了这个页面！</h1>
    <p>如果你看到了这个页面，说明你的 router 正常</p>
    <p>
      你现在的运行模式为： {{ env }}
    </p>
    <p>如果你看到了上面的运行模式，说明 vuex 模块正常</p>
    <p>{{ test_rsp }}</p>

    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {testAPI} from '@/axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
      test_rsp: 'axios 似乎有问题...'
    }
  },
  computed:{
    ...mapState(['env'])
  },
  mounted() {
    testAPI().then((rsp)=>{
      this.test_rsp =  rsp.data.data
    }).catch(()=>{
      this.test_rsp = '未能获取数据，可能是未开启 mock 或者 后端'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
