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
            <el-form-item label="职业类别" class="item" >
                <el-select v-model="planList.occupationLevel" placeholder="请选择职业">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                    <el-option label="5" value="5"></el-option>
                    <el-option label="6" value="6"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="人数" class="item" >
                <el-input v-model="planList.quantity"></el-input>
            </el-form-item>
            <el-form-item label="币种" class="item" >
                <el-select v-model="planList.currencyCode" placeholder="请选择币种">
                    <el-option label="人民币" value="01"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="月工资/人" class="item" >
                <el-input v-model="planList.salary"></el-input>
            </el-form-item>
            <el-form-item label="单人合计保额" class="item" >
                <el-input v-model="planList.eachCoverage"></el-input>
            </el-form-item>
            <el-form-item label="单人合计保费" class="item" >
                <el-input v-model="planList.eachPremium"></el-input>
            </el-form-item>
            <el-form-item label="计划选项列表" class="item" >
                <el-button @click="addPlanOption">添加计划选项</el-button>
            </el-form-item>
            <el-form-item label="人员列表" class="item" >
                <el-button @click="addMember">添加人员</el-button>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="goback">完成</el-button>
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
                currencyCode: '',
                salary: '',
                eachCoverage: '',
                eachPremium: '',
                planOptionList: [],
                employeeList: [],
            }
        }
    },
    methods: {
        addPlanOption() {
            this.$router.push({
                path: '/planOptionList',
            });
        },
        addMember() {
            this.$router.push({
                path: '/memberList',
            });
        },
        goback() {
            this.$router.push({
                path: '/planList',
            });
        }
    },
    created() {
        if(sessionStorage.getItem(`planListItem`)){
            this.planList = JSON.parse(sessionStorage.getItem(`planListItem`))
        }
        if(sessionStorage.getItem(`planOptionList`)){
            this.planList.planOptionList = JSON.parse(sessionStorage.getItem(`planOptionList`))
        }
        if(sessionStorage.getItem(`employeeList`)){
            this.planList.employeeList = JSON.parse(sessionStorage.getItem(`employeeList`))
        }
        console.log('planList',this.planList)
       
    },
    destroyed() {
       sessionStorage.setItem(`planListItem`,JSON.stringify(this.planList));
    },
    
}
</script>>

