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
        <el-button type="primary" @click="addPlanOption" size="mini">新增</el-button>
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
			            prop: 'optionCode',
			            label: '选项代码',
			            minWidth: '180',
		            },
		            {
			            prop: 'optionValue',
			            label: '选项值',
			            minWidth: '180',
		            },
	            ], // 表头配置
                tableData: [], // 表格数据
            }
        },
        methods: {
            addPlanOption() {
                this.$router.push({
                    path: '/PlanOptionDetail',
                });
            },
          
            queRecordPage () {
                this.tableData.push(sessionStorage.getItem(`planOptionListItem`));
                console.log('tableData',this.tableData);
			},
	        handleSelectionChange() {},
           
        },
        created() {
            if(sessionStorage.getItem(`planOptionList`)){
                this.tableData = sessionStorage.getItem(`planOptionList`)
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
            sessionStorage.setItem(`planOptionList`, this.tableData);
        }
    }
</script>