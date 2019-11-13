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
            <el-form-item label="工种" class="item" >
                <el-input v-model="planList.workType"></el-input>
            </el-form-item>
            <el-form-item label="编号" class="item" >
                <el-input v-model="planList.planNo"></el-input>
            </el-form-item>
            <el-form-item label="工种" class="item" >
                <el-input v-model="planList.workType"></el-input>
            </el-form-item>
            <el-form-item label="职业类别" class="item" >
                <el-select v-model="form.gwVer" placeholder="请选择职业">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                    <el-option label="5" value="5"></el-option>
                    <el-option label="6" value="6"></el-option>
                </el-select>
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
                workType: '',
                occupationLevel: '',
                quantity: '',
                currencyCode: 01,
                salary: '',
                eachCoverage: '',
                eachPremium: '',
                planOptionList: [],
                employeeList: [],
            }
        }
    }
    
}
</script>>

