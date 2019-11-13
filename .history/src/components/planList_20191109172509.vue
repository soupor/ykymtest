<style scoped>
.table-manage {
    display: inline-block;
    
}
.content-box{
    padding: 10px;
    background-color: #fff;
    
}
.table{
    border: 1px solid #eaeaea;
}
.el-button {
    display: inline-block;
    margin: 0;
}

</style>

<template>
    <div class="table-manage">
        <el-button type="primary" @click="addPlan" size="mini">新增</el-button>
        <el-row class="content-box">
            <el-col :span="24">
                <div class="table">
                    <el-table
                    ref="multipleTable"
                    tooltip-effect="dark"
                    :data="tableData"
                    size="small"
                    style="width: 100%"
                    :height="tableHeight"
                    @selection-change="handleSelectionChange">
                        <el-table-column
                            v-for="(item, index) in tableColumns"
                            :key="index"
                            v-bind="item">
                        </el-table-column>
                    </el-table>
                </div>
            </el-col> 
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'logList',
        data() {
            return {
               
                tableHeight: 0,
                //静态表头
	            tableColumns: [    
		            {
			            prop: 'planNo',
			            label: '编号',
			            minWidth: '80',
		            },
		            {
			            prop: 'workType',
			            label: '工种',
			            minWidth: '80',
			            "show-overflow-tooltip": true,
		            },
		            {
			            prop: 'occupationLevel',
			            label: '职业类别',
			            minWidth: '80',
			            "show-overflow-tooltip": true,
		            },
		            {
			            prop: 'quantity',
			            label: '人数',
			            minWidth: '80',
			            
		            },
		            {
			            prop: 'currencyCode',
			            label: '币种',
			            minWidth: '80',
			            
                    },
		            {
			            prop: 'salary',
			            label: '月工资/人',
			            minWidth: '80',
			            
                    },
		            {
			            prop: 'eachCoverage',
			            label: '单人合计保额',
			            minWidth: '80',
			            
		            },
		            {
			            prop: 'eachPremium',
			            label: '单人合计保费',
			            minWidth: '80',
		            },
		            
	            ], // 表头配置
	            tableData: [], // 表格数据
            }
        },
        methods: {
            addPlan() {
                this.$router.push({
                    path: '/planDetail',
                });
			},
			
            queRecordPage () {
				if(sessionStorage.getItem(`planListItem`)){
                    this.tableData.push(JSON.parse(sessionStorage.getItem(`planListItem`)));
                    console.log('PlanData2',this.tableData);
                }
			},
	        handleSelectionChange() {},
           
		},
		created() {
			if(sessionStorage.getItem(`planList`)){
                this.tableData = JSON.parse(sessionStorage.getItem(`planList`))
                console.log('PlanData1',this.tableData);
            }

		},
        mounted() {
            this.queRecordPage();
	        this.$nextTick(() => {
		        this.tableHeight = window.innerHeight - 85;
		        let tbw = document.querySelector('.el-table').offsetWidth;
		        if(this.tableColumns.length * 120 <= tbw) {
			        this.tableColumns.map(tcItem => {
				        tcItem.width = "";
			        })
		        };
	        });
		},
		destroyed() {
			sessionStorage.setItem(`planList`, JSON.stringify(this.tableData));
		}
    }
</script>