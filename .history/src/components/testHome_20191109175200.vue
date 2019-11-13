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
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="网关版本号" class="item" >
        <el-select v-model="form.gwVer" placeholder="请选择版本号">
          <el-option label="1.0" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发送方" class="item" >
        <el-select v-model="form.sender" placeholder="请选择发送方">
          <el-option label="AYB" value="AYB"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="请求编码" class="item" >
        <p>{{ form.sendNo || "等待返回值" }}</p>
      </el-form-item>
      <el-form-item label="签名算法" class="item" >
        <p>{{ form.sendType }}</p>
         
      </el-form-item>
      <el-form-item label="应用代码" class="item" >
        <p>{{ form.appCode }}</p>
      </el-form-item>
      <el-form-item label="业务代码" class="item" >
        <el-select v-model="form.bizCode" placeholder="请选择发送方" @change="handleBizCode">
          <el-option lable="insureApply" value="雇主责任险" ></el-option>
          <el-option lable="applyNotify" value="投保单生成通知"></el-option>
          <el-option lable="policyNotify" value="保单生成通知"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="签名" class="item" >
        <p>{{ form.sign || "等待返回值" }}</p>
      </el-form-item>
    </el-form> 
    <hr>
    <div v-if="form.bizCode == '雇主责任险'">
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="产品编码" class="item" >
        <el-input v-model="form.bizData.productCode"></el-input>
      </el-form-item>
      <el-form-item label="方案ID" class="item" >
        <el-input v-model="form.bizData.productPlanId"></el-input>
      </el-form-item>
      <el-form-item label="合作方订单ID" class="item" >
        <el-input v-model="form.bizData.outOrderId"></el-input>
      </el-form-item>
      <el-form-item label="企业名称" class="item" >
        <el-input v-model="form.bizData.name"></el-input>
      </el-form-item>
      <el-form-item label="证件类型" class="item" >
        <el-input v-model="form.bizData.certType"></el-input>
      </el-form-item>
      <el-form-item label="证件图片" class="item" >
        <el-input v-model="form.bizData.certFileId"></el-input>
      </el-form-item>
      <el-form-item label="营业性质编码" class="item" >
        <el-input v-model="form.bizData.industryTypeCode"></el-input>
      </el-form-item>
      <el-form-item label="企业联系人姓名" class="item" >
        <el-input v-model="form.bizData.contactName"></el-input>
      </el-form-item>
      <el-form-item label="企业联系人电话" class="item" >
        <el-input v-model="form.bizData.contactNumber"></el-input>
      </el-form-item>
      <el-form-item label="企业联系人邮箱" class="item" >
        <el-input v-model="form.bizData.contactEmail"></el-input>
      </el-form-item>
      <el-form-item label="经营地址" class="item" >
        <el-input v-model="form.bizData.businessAddress"></el-input>
      </el-form-item>
      <el-form-item label="省/市" class="item" >
        <area-select type='all' :level='1'  v-model="others.selected" :data="others.pca" @change="initAddress"></area-select>
      </el-form-item>
      <el-form-item label="详细地址" class="item" >
        <el-input v-model="form.bizData.address"></el-input>
      </el-form-item>
      <el-form-item label="佣金比例" class="item" >
        <el-input v-model="form.agentRate"></el-input>
      </el-form-item>
      <el-form-item label="保险起止时间" class="item" >
        <el-date-picker
          v-model="others.insuranceDate"
          type="daterange"
          range-separator="至"
          start-placeholder="保险起期"
          end-placeholder="保险止期"
          value-format="yyyy-MM-dd"
          @change="initDate">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="加费比率" class="item" >
        <el-input v-model="form.addRate"></el-input>
      </el-form-item>
      <el-form-item label="计划列表" class="item" >
        <el-button @click="addPlan">添加计划</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="getSign" >获取签名</el-button>
		<el-button type="primary" @click="submit" >提交</el-button>
    </div>
    <div v-else-if="form.bizCode == '投保单生成通知'">
    </div>
    <div v-else-if="form.bizCode == '保单生成通知'">   
    </div>
  </div>
</template>

<script>
import 'vue-area-linkage/dist/index.css'
import {pca, pcaa} from 'area-data';
export default {
  name: 'ykymTest',
  data () {
    return {
      others:{
        pca: pca,
        selected: [],
        insuranceDate:'',
      },
      form: {
        gwVer: '',
        sender: '',
        sendNo: '',
        sendType: 'RSA',
        sign: '',
        appCode: 'ykym',
        bizCode: '',
        bizData: {
          productCode: '',
          productPlanId: '',
          outOrderId: '',
          applicantInfo: {
            name: '',
            certType: '',
            certNo: '',
            certFileId: '',
            industryTypeCode: '',
            contactName: '',
            contactNumber: '',
            contactEmail: '',
            businessAddress: '',
            provinceCode: '',
            cityCode: '',
            address: '',
          },
          agentRate:'',
          addRate:'',
          insStartData:'',
          insEndDate: '',
          totalCoverage: '',
          totalPremium: '',
          notifyUrl: '',
          billingMode: '',
          planList: [],
        },
      },

    }
  },
  created() {
    if(sessionStorage.getItem(`form`)){
      this.form = JSON.parse(sessionStorage.getItem(`form`))
    }
    if(sessionStorage.getItem(`others`)){
      this.others = JSON.parse(sessionStorage.getItem(`others`))
    }
    if(sessionStorage.getItem(`planList`)){
      this.form.planList = JSON.parse(sessionStorage.getItem(`planList`))
    }
    console.log("form",this.form);
  },
  destroyed () {
     sessionStorage.setItem(`form`,JSON.stringify(this.form));
     sessionStorage.setItem(`others`,JSON.stringify(this.others));
  },
  methods: {
    handleBizCode() {},
    initAddress() {
      this.form.bizData.provinceCode = Object.keys(this.others.selected[0])
      this.form.bizData.cityCode =  Object.keys(this.others.selected[1])
    },
    initDate() {
      this.form.insStartData = this.others.insuranceDate[0]
      this.form.insEndDate = this.others.insuranceDate[1]
      console.log("insStartData",this.form.insStartData)
      console.log("insEndDate",this.form.insEndDate)
    },
    addPlan() {
      this.$router.push({
        path: '/planList',
      });
    }
  },
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

