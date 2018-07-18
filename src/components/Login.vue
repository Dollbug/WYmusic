<template>
  <div class="login">
   <Header class="login-header">
      <i class="iconfont icon-back">&#xe624;</i>
      <span class="title">手机登陆</span>
   </Header>
   <div class="form">
     <div class="tel">
       <i class="iconfont">&#xe601;</i>
        <input class="tel-input" placeholder="手机号"></input>
     </div>
    <div class="name">
       <i class="iconfont">&#xe819;</i>
     <input class="name-input" placeholder="姓名" :vulue="$store.state.count"></input>
     </div>
    <span class="submit" @click="$store.commit('add')">登陆</span>
   </div>
     
  </div>
</template>

<script>
import store from '@/vuex/store'
import Header from "../public/header.vue";
export default {
  store,
  components: {
    Header
  },
  mounted() {
    this.getMusic();
  },
  data() {
    return {};
  },
  methods: {
    getMusic: function() {
      this.$ajax
        .get("/api/comment/music", { params: { id: 186016, limit: 1 } })
        .then(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.login-header {
  position: relative;
}
.icon-back {
  position: absolute;
  left: 20px;
}
.form {
  width: 90%;
  margin: 0 auto;
  div {
    position: relative;
    display: block;
    height: 90px;
    line-height: 90px;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  i {
    position: absolute;
    left: 0;
    font-size: 50px;
    color: #666;
  }
  input {
    border: 0px;
    outline: none;
    display: block;
    height: 100%;
    padding-left: 60px;
    width: 90%;
    // background: transparent;
  }
}
.submit {
  margin-top: 60px;
  display: block;
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
  background: #ac0a0a;
  font-size: 40px;
  border-radius: 50px;
}
</style>
