<style scoped>
.testHome {
  width: 400px;
}
.el-form {
  display: inline-block;
  padding: 16px;
  display:flex;
  flex-direction: column;

}
p {
  margin: 0px;
}
.buttonPost {
  margin-left: 100px;
  margin-bottom: 10px;
  width: 100px;
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
        <p>{{ form.signType }}</p>
         
      </el-form-item>
      <el-form-item label="应用代码" class="item" >
        <p>{{ form.appCode }}</p>
      </el-form-item>
      <el-form-item label="业务代码" class="item" >
        <el-select v-model="form.bizCode" placeholder="请选择发送方" @change="handleBizCode">
          <el-option label="雇主责任险投保申请" value="insureApply" ></el-option>
          <el-option label="投保查询接口" value="insureStatus"></el-option>
          <el-option label="通用业务文件提交" value="insureFile"></el-option>
          <el-option label="保单发票申请" value="invoiceApply"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="签名" class="item" >
        <p>{{ form.sign || "等待返回值" }}</p>
      </el-form-item>
    </el-form> 
    <hr>
    <div v-if="form.bizCode == 'insureApply'">
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
        <el-input v-model="form.bizData.applicantInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="证件类型" class="item" >
        <el-input v-model="form.bizData.applicantInfo.certType"></el-input>
      </el-form-item>
      <el-form-item label="证件号码" class="item" >
        <el-input v-model="form.bizData.applicantInfo.certNo"></el-input>
      </el-form-item>
      <el-form-item label="证件图片" class="item" >
        <el-input v-model="form.bizData.applicantInfo.certFileId"></el-input>
      </el-form-item>
      <el-form-item label="营业性质编码" class="item" >
        <el-input v-model="form.bizData.applicantInfo.industryTypeCode"></el-input>
      </el-form-item>
      <el-form-item label="企业联系人姓名" class="item" >
        <el-input v-model="form.bizData.applicantInfo.contactName"></el-input>
      </el-form-item>
      <el-form-item label="企业联系人电话" class="item" >
        <el-input v-model="form.bizData.applicantInfo.contactNumber"></el-input>
      </el-form-item>
      <el-form-item label="企业联系人邮箱" class="item" >
        <el-input v-model="form.bizData.applicantInfo.contactEmail"></el-input>
      </el-form-item>
      <el-form-item label="经营地址" class="item" >
        <el-input v-model="form.bizData.applicantInfo.businessAddress"></el-input>
      </el-form-item>
      <el-form-item label="省/市" class="item" >
        <area-select type='all' :level='1'  v-model="others.selected" :data="others.pca" @change="initAddress"></area-select>
      </el-form-item>
      <el-form-item label="详细地址" class="item" >
        <el-input v-model="form.bizData.applicantInfo.address"></el-input>
      </el-form-item>
      <el-form-item label="佣金比例" class="item" >
        <el-input v-model="form.bizData.agentRate"></el-input>
      </el-form-item>
      <el-form-item label="加费比率" class="item" >
        <el-input v-model="form.bizData.addRate"></el-input>
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
      <el-form-item label="总保额" class="item" >
        <el-input v-model="form.bizData.totalCoverage"></el-input>
      </el-form-item>
      <el-form-item label="总保费" class="item" >
        <el-input v-model="form.bizData.totalPremium"></el-input>
      </el-form-item>
      <el-form-item label="通知地址" class="item" >
        <el-input v-model="form.bizData.notifyUrl"></el-input>
      </el-form-item>
      <el-form-item label="通知地址" class="item" >
        <el-input v-model="form.bizData.notifyUrl"></el-input>
      </el-form-item>
      <el-form-item label="计费方法" class="item" >
        <el-select v-model="form.bizData.billingMode" placeholder="请选择计费方法">
          <el-option label="按限额" value="quota" ></el-option>
          <el-option label="按工资" value="salary" ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="计划列表" class="item" >
        <el-button @click="addPlan">添加计划</el-button>
      </el-form-item>
     
    </el-form>
    
    </div>
    <div v-else-if="form.bizCode == 'insureStatus'">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="合作方订单ID" class="item" >
          <el-input v-model="statusform.outOrderId"></el-input>
        </el-form-item>
        <el-form-item label="是否请求电子保单文件" class="item" >
          <el-radio v-model="statusform.needPolicyFile" label="1">是</el-radio>
          <el-radio v-model="statusform.needPolicyFile" label="0">否</el-radio>
        </el-form-item>
      </el-form>
    </div>
    <div v-else-if="form.bizCode == 'insureFile'"> 
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="合作方订单ID" class="item" >
          <el-input v-model="fileform.outOrderId"></el-input>
        </el-form-item>
        <el-form-item label="文件类型" class="item" >
          <el-select v-model="fileform.fileType" placeholder="请选择文件类型">
            <el-option label="线下支付图片文件" value="payment_voucher" ></el-option>
            <el-option label="投保凭证图片" value="insure_voucher" ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文件列表" class="item" >
          <el-upload
            class="upload-demo"
            action="#"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :file-list="fileform.fileIdList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="备注" class="item" >
          <el-input v-model="fileform.remark"></el-input>
        </el-form-item>
      </el-form>  
    </div>
    <div v-else-if="form.bizCode == 'invoiceApply'">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="合作方订单ID" class="item" >
            <el-input v-model="statusform.outOrderId"></el-input>
          </el-form-item>
        </el-form>
    </div>
    <el-button type="primary" @click="getSign(form.bizCode)" class="buttonPost" >获取签名</el-button>
    <el-button type="primary" @click="submit(form.bizCode)" class="buttonPost">提交</el-button>
  </div>
</template>

<script>
import 'vue-area-linkage/dist/index.css'
import {pca, pcaa} from 'area-data';
import axios from 'axios'

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
        signType: 'RSA',
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
          addRate:'' ,
          insStartData:'',
          insEndDate: '',
          totalCoverage: '',
          totalPremium: '',
          notifyUrl: '',
          billingMode: '',
          planList: [],
        },
      },
      statusform: {
        outOrderId: '',
        needPolicyFile: '',
      },
      fileform: {
        outOrderId: '',
        fileType: '',
        fileIdList: [],
        remark: '',
      },
      applyform: {
        outOrderId: '',
        type: '',
        isElectronic: '',
        corporateName: '',
        registeredAddress: '',
        bankName: '',
        bankAccount: '',
        invoiceMobile: '',
        creditOrTaxCode: '',
        contactName: '',
        contactNumber: '',
        contactAddress: '',
        zipCode: '',
      },
      res: '',
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
      this.form.bizData.planList = JSON.parse(sessionStorage.getItem(`planList`))
    }
    console.log("form",this.form);
  },
  destroyed () {
     sessionStorage.setItem(`form`,JSON.stringify(this.form));
     sessionStorage.setItem(`others`,JSON.stringify(this.others));
     console.log("billingMode",this.form.bizData.billingMode);
  },
  methods: {
    handleBizCode() {},
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    initAddress() {
      this.form.bizData.applicantInfo.provinceCode = Object.keys(this.others.selected[0])
      this.form.bizData.applicantInfo.cityCode =  Object.keys(this.others.selected[1])
    },
    initDate() {
      this.form.bizData.insStartData = this.others.insuranceDate[0]
      this.form.bizData.insEndDate = this.others.insuranceDate[1]
      console.log("insStartData",this.form.bizData.insStartData)
      console.log("insEndDate",this.form.bizData.insEndDate)
    },
    addPlan() {
      this.$router.push({
        path: '/planList',
      });
    },
    getSign(flag) {
      let arg = {};
      if(flag == "insureApply") {
        arg = this.form;
        // {
        //   gwVer: this.form.gwVer,
        //   sender: this.form.sender,
        //   sendNo: this.form.sendNo,
        //   signType: this.form.signType,
        //   sign: this.form.sign,
        //   appCode: this.form.appCode,
        //   bizCode: this.form.bizCode,
        //   bizData: this.form.bizData,
        // }
      } else if(flag == "insureStatus") {
          arg = {
            gwVer: this.form.gwVer,
            sender: this.form.sender,
            sendNo: this.form.sendNo,
            signType: this.form.signType,
            sign: this.form.sign,
            appCode: this.form.appCode,
            bizCode: this.form.bizCode,
            bizData: this.statusform,
          }
      } else if(flag == "insureFile") {
        arg = {
          gwVer: this.form.gwVer,
          sender: this.form.sender,
          sendNo: this.form.sendNo,
          signType: this.form.signType,
          sign: this.form.sign,
          appCode: this.form.appCode,
          bizCode: this.form.bizCode,
          bizData: this.fileform,
        }

      } else if(flag == "invoiceApply") {
        arg = {
          gwVer: this.form.gwVer,
          sender: this.form.sender,
          sendNo: this.form.sendNo,
          signType: this.form.signType,
          sign: this.form.sign,
          appCode: this.form.appCode,
          bizCode: this.form.bizCode,
          bizData: this.applyform,
        }
      }
      axios.post('http://192.168.1.133:10081/demo/getSign', arg).then(response => {
        console.log('response1',response);
        this.res = response;
        this.form.sign = this.res.data.sign;
        this.form.sendNo = this.res.data.sendNo;
        console.log('sign',this.form.sign);
        console.log('sendNo',this.form.sendNo);

      }).catch(error => {
        console.log('error',error);
        alert('网络错误，无法访问123')
      })
    },
    submit() {
      axios.post('http://192.168.1.133:10081/demo/zuulTest',this.res.data).then(response => {
        console.log('response',response);
        this.res = response.data;
        }).catch(error => {
          console.log('error',error);
          alert('网络错误，无法访问')
        })
    },

  },
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

