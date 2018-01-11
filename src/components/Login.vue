<template>
  <div class="hello">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="info">
        <div class="user"><span>账号</span><input type="text" class="str" placeholder="请输入账号"></div>
        <div class="pwd"><span>密码</span><input type="password" class="mm" placeholder="请输入密码"></div>
        <button class="btn" @click="pdd()">登录</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      img:"../assets/logo.png"
    }
  },
  methods:{
    pdd(){
      var str=document.querySelector(".str").value
      var mm=document.querySelector(".mm").value
      console.log("账号为 "+str+"密码为 "+mm)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width:250px;
  height: 400px;
  border:1px solid black;
  margin:auto;

}
.logo{
  padding:15px 25px;
  margin:auto;
}
.logo img{
  display: block;
  width: 200px;
  height: 200px;
}
.info{
  padding:20px 10px;
}
.info span{
  padding-right:10px
}
.info .pwd{
  margin-top:20px;
}
.info input{
  outline: none;
  height: 25px;
  width:173px;
  border:1px solid #777;
}
.info .btn{
  width:70px;
  height:25px;
  margin-top:20px;
}
</style>
