<style scoped>
    .content-box{
        padding: 10px;
        background-color: #fff;
    }
    .table{
        border: 1px solid #eaeaea;
    }
    .el-checkbox-group{
        display: flex;
        flex-wrap: wrap;
    }
    .el-checkbox{
        width: 100px;
    }
    .dialog-footer{
        border-top: 0;
    }
</style>

<template>
    <div class="table-manage">
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
                            <template slot-scope="scope">
                                <div v-if="item.prop == 'operAfter'">
                                    <el-tooltip class="item" effect="dark" placement="top">
                                        <div v-html="ToBreak(scope.row.operAfter)" slot="content"></div>
                                        <div> {{ scope.row.operAfter }} </div>
                                    </el-tooltip>  
                                </div>
                                <div v-else-if="item.prop == 'operBefore'">
                                    <el-tooltip class="item" effect="dark" placement="top">
                                        <div v-html="ToBreak(scope.row.operBefore)" slot="content"></div>
                                        <div> {{ scope.row.operBefore }} </div>
                                    </el-tooltip>  
                                </div>
                                <div v-else> {{ scope.row[item.prop] }} </div>
                            </template>
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
			            prop: 'operType',
			            label: '操作类型',
			            minWidth: '80',
		            },
		            {
			            prop: 'operUser',
			            label: '操作人员',
			            minWidth: '80',
			            "show-overflow-tooltip": true,
		            },
		            {
			            prop: 'businessSort',
			            label: '业务分类',
			            minWidth: '80',
			            "show-overflow-tooltip": true,
		            },
		            {
			            prop: 'operBefore',
			            label: '操作前记录',
			            minWidth: '180',
			            
		            },
		            {
			            prop: 'operAfter',
			            label: '操作后记录',
			            minWidth: '180',
			            
                    },
		            {
			            prop: 'operChange',
			            label: '变更记录',
			            minWidth: '180',
			            "show-overflow-tooltip": true,
                    },
		            {
			            prop: 'operTime',
			            label: '操作时间',
			            minWidth: '150',
			            "show-overflow-tooltip": true,
			            formatter: (row, column) => {
				            let m = '--'
				            if(row.operTime) {
					            m = row.operTime.replace('T', ' ');
				            }
				            return m
			            }
		            },
		            
	            ], // 表头配置
	            tableData: [], // 表格数据
            }
        },
        watch:{
             searArg:{
		        handler(nVal, oVal) {
			        this.option.page = 1; // 重置页码
			        this.queRecordPage(); // 查询列表
		        },
		        deep: true,
	        },
        },
        methods: {
            
            //=================================================================================
            //===========================      基础事件    ====================================
            //=================================================================================
            //翻页
            handleCurrentChange(val) {
                this.option.page = val;
                this.queRecordPage(this.option.page,this.option.pageSize);
            },
            //每页显示数
            handleSizeChange(val) {
                this.option.pageSize=val;
                this.queRecordPage(this.option.page,this.option.pageSize);
            },
            //表格样式重置
            resetStyle() {
                $("#llsTbody").find("tr").each(function(){
                    $(this).removeClass("info");
                    $(this).find("div[name='checkbox']").removeClass("doubleact").addClass("doubledef");
                });
            },
            //浮动框换行,正则替换;为<br/>
            ToBreak(val) {
                return val.replace(/;/g,'<br/>');
            },
           
          
          
            //=================================================================================
            //==============================    初始化     ====================================
            //=================================================================================
            //查询表格分页列表
            queRecordPage () {
			},
	        handleSelectionChange() {},
           
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
        }
    }
</script>