<style scoped>
.testHome {
  width: 400px;
}
.el-form {
  padding: 16px;
  display:flex;
  flex-direction: column;

}

p {
  margin: 0px;
}
</style>
<template>
    <div class="testHome">
        <el-form ref="form" :model="planList" label-width="100px">
            <el-input v-model="planList.planNo"></el-input>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            planList: {
                planNo: '',

            }
        }
    }
    
}
</script>>

