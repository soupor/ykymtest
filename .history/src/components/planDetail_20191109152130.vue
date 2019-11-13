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
            <el-form-item label="编号" class="item" >
                <el-input v-model="planList.planNo"></el-input>
            </el-form-item>
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

