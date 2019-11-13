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
        <el-form ref="form" :model="planOptionList" label-width="100px">
            <el-form-item label="选项代码" class="item" >
                <el-input v-model="planOptionList.optionCode"></el-input>
            </el-form-item>
            <el-form-item label="选项值" class="item" >
                <el-input v-model="planOptionList.optionValue"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="goback">完成</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            planOptionList: {
                optionCode: '',
                optionValue: '',
            }
        }
    },
    methods: {
        goback() {
            this.$router.push({
                path: '/PlanOptionList',       
            });
        }
    },
    destroyed() {
        sessionStorage.setItem(`planOptionListItem`, JSON.stringify(this.planOptionList));
    }
    
}
</script>>

