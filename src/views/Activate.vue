<template>
    <div>
        <el-carousel height="260px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="i in 1" :key="i">
           <h1 text="2xl" justify="center" v-if="is_show">{{ item[0] }}</h1>
           <h2 text="2xl" justify="center" v-if="!is_show">{{ item[1] }}</h2>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>
<script>

export default {
    data(){
        return{
            code: '',
            is_show: false,
            item:["成功激活!请点击登录!","激活链接失效或网络不佳!"]
        }
    },
    created() {
        this.code=this.$route.query.code || ''
        this.$axios
        .get(`/api/users/register/${this.code}/`)
        .then(res => {
            if (res.data.code === '001'){
                this.is_show = true
            }
        })
        console.log(this.code)
    },
}
</script>
<style>
.el-carousel__item h2 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item h1 {
  color: #10a65b;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #747981;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
