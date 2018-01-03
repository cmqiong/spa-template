<template>
  <div>
    <Row :gutter="10" class="margin-top-10">
      <div class="edittable-table-height-con">
        <can-edit-table
            refs="table4"
            v-model="editInlineAndCellData"
            @on-cell-change="handleCellChange"
            @on-change="handleChange"
            :editIncell="true"
            :columns-list="editInlineAndCellColumn"
        ></can-edit-table>
      </div>
    </Row>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="total" show-sizer show-total :current="page" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  import canEditTable from './../../../components/canEditTable.vue';
  import { initItemList } from './../../../config/apis/question.api';

  const editInlineAndCellColumn = [
    {
      title: '序号',
      type: 'index',
      width: 80,
      align: 'center',
    },
    {
      title: '姓名',
      align: 'center',
      key: 'name',
      width: 300,
      editable: true,
    },
    {
      title: '性别',
      align: 'center',
      key: 'sex',
    },
    {
      title: '操作',
      align: 'center',
      width: 200,
      key: 'handle',
      handle: ['edit', 'delete'],
    },
  ];

  export default {
    name: 'editable-table',
    components: {
      canEditTable,
    },
    data() {
      return {
        editInlineAndCellColumn,
        editInlineAndCellData: [],
        // 初始化页码信息
        total: 0,
        limit: 10,
        page: 1,
      };
    },
    methods: {
      getData() {
        initItemList({
          page: this.page - 1,
          limit: this.limit,
        }).then((response) => {
            this.total = response.payload.totalElements;
            this.editInlineAndCellData = response.payload.content;
          }, (error) =>
            console.log(error),
        );
      },
      handleDel(val, index) {
        this.$Message.success(`删除了第${index + 1} 行数据`);
      },
      handleCellChange(val, index, key) {
        this.$Message.success(`修改了第 ${index + 1} 行列名为 ${key} 的数据`);
      },
      handleChange(val, index) {
        this.$Message.success(`修改了第 ${index + 1} 行数据`);
      },
      changePage(index) {
        this.page = index;
        this.getData();
      },
    },
    created() {
      this.getData();
    },
  };
</script>

<style scoped>

</style>
