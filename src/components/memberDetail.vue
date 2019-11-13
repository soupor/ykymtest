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
        <el-form ref="form" :model="employeeList" label-width="100px">
            <el-form-item label="姓名" class="item" >
                <el-input v-model="employeeList.name"></el-input>
            </el-form-item>
            <el-form-item label="证件类型" class="item" >
                <el-input v-model="employeeList.idType"></el-input>
            </el-form-item>
            <el-form-item label="证件号码" class="item" >
                <el-input v-model="employeeList.idNo"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="goback">完成</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            employeeList: {
                name: '',
                idType: '',
                idNo: '',
            }
        }
    },
    methods: {
        goback() {
            this.$router.push({
                path: '/memberList',       
            });
        }
    },
    destroyed() {
        sessionStorage.setItem(`employeeListItem`, JSON.stringify(this.employeeList));
    }
    
}
</script>>

