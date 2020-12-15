<template>
  <div id="acg-artical">
    <el-drawer
      title="文章编辑"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="文章标题" :label-width="formLabelWidth">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="作者" :label-width="formLabelWidth">
            <el-input v-model="form.author" disabled autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="发表时间" :label-width="formLabelWidth">
            <el-input :value="form.intime | dateFilter" disabled autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item :label-width="formLabelWidth" label="文章标签">
            <el-cascader
              v-model="tabs"
              @change="changeTabs"
              :options="options"
              :props="{ multiple: true, checkStrictly: true,}"
              clearable
              :show-all-levels="false"
            ></el-cascader>
          </el-form-item>

          <el-form-item label="类型" :label-width="formLabelWidth">
            <el-select v-model="form.category" placeholder="请选择文章类型">
              <el-option label="通知" value="1"></el-option>
              <el-option label="活动" value="2"></el-option>
              <el-option label="资料" value="3"></el-option>
              <el-option label="热点" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章内容" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item label="隐私设置" :label-width="formLabelWidth">
            <el-radio-group v-model="form.status" size="medium">
              <el-radio-button label="4">公开发布</el-radio-button>
              <el-radio-button label="5">匿名发布</el-radio-button>
              <el-radio-button label="6">仅自己可见</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button
            type="primary"
            @click="sendForm"
            :loading="loading"
          >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>
    <div class="artical-title">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <div class="pageheader">文章列表</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-button type="info" style="width:100%;" disabled plain>筛选</el-button>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-button
              type="primary"
              style="width:100%;"
              icon="el-icon-edit"
              @click="handleAdd"
            >添加文章</el-button>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-button type="danger" style="width:100%;" icon="el-icon-delete" disabled>批量删除</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <el-divider style="margin:0 !important;"></el-divider> -->
    <div>
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column width="60px" label="Id" prop="id"></el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="作者" prop="author"></el-table-column>

        <el-table-column label="标签" prop="labels">
          <template slot-scope="scope">
            <el-tag v-for="(item,i) in scope.row.labels" :key="i" style="margin:0 2px;">{{item}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="发布时间">
          <template slot-scope="scope">{{scope.row.intime | dateFilter}}</template>
        </el-table-column>
        <el-table-column width="80px" label="类型">
          <template slot-scope="scope">
            <span v-if="scope.row.category==1">通知</span>
            <span v-else-if="scope.row.category==2">活动</span>
            <span v-else-if="scope.row.category==3">资料</span>
            <span v-else-if="scope.row.category==4">热点</span>
          </template>
        </el-table-column>
        <el-table-column width="80px" label="浏览量" prop="visits"></el-table-column>
        <el-table-column width="80px" label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status==1" :type="'danger'" effect="plain">删除</el-tag>
            <el-tag v-else-if="scope.row.status==2" :type="'info'" effect="plain">隐藏</el-tag>
            <el-tag v-else-if="scope.row.status==3" :type="''" effect="plain">审核</el-tag>
            <el-tag v-else-if="scope.row.status==4" :type="'success'" effect="plain">可见</el-tag>
            <el-tag v-else-if="scope.row.status==5" :type="'warning'" effect="plain">匿名</el-tag>
            <el-tag v-else-if="scope.row.status==6" :type="'danger'" effect="plain">仅自己</el-tag>
          </template>
        </el-table-column>

        <el-table-column align="right" width="144px">
          <template slot="header" slot-scope="{}">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top:30px;">
      <el-pagination
        background
        hide-on-single-page
        layout="prev, pager, next"
        :page-size="pages.pageSize"
        :page-count="pages.totalPage"
        :current-page.sync="pages.currentPage"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcgArtical",
  data() {
    return {
      // 0：添加模式。1：修改模式
      drawerMode: 0,
      options: [
        {
          value: 2,
          label: "游戏",
          children: [
            {
              value: 15,
              label: "我的世界"
            },
            {
              value: 16,
              label: "泰拉瑞亚"
            }
          ]
        }
      ],
      tableData: [
        {
          id: 1,
          title: "震惊党！！！！！！！！！！",
          author: "战斗暴龙兽",
          intime: "1598377214387",
          category: "通知",
          visits: 1002,
          status: 1,
          labels: ["原创", "动画/小说/游戏"]
        }
      ],
      form: {
        title: "",
        author: "",
        intime: null,
        tabs: [],
        category: null,
        content: "",
        status: null
      },
      pages: {
        pageSize: 20,
        currentPage: 1,
        totalPage: 10,
        totalData: 0,
        status: 0
      },
      tabs: [],
      rights: "",
      search: "",
      drawer: false,
      direction: "rtl",
      table: false,
      dialog: false,
      loading: false,
      formLabelWidth: "80px",
      timer: null
    };
  },

  created() {
    // this.getData();
    this.handleCurrentChange(1);
  },
  mounted() {},

  methods: {
    goBack() {
      console.log("go back");
    },
    handleAdd(done) {
      let form = {
        title: "",
        author: this.$route.query.nickname,
        intime: this.getTime(),
        tabs: [],
        category: null,
        content: "",
        status: 4
      };
      this.form = form;
      this.dialog = true;
      this.drawerMode = 0;
      if (this.loading) {
        return;
      }
    },
    //修改文章
    handleEdit(index, row) {
      console.log(index, row);
      let form = {
        id: row.id,
        title: row.title,
        author: row.author,
        intime: this.getTime(),
        category: row.category,
        content: row.content,
        status: row.status
      };
      this.form = form;
      this.dialog = true;
      this.drawerMode = 1;
    },
    handleDelete(index, row) {
      console.log(index, row);
       this.$confirm("确定要删除吗？")
        .then(_ => {
          console.log("sendForm", row.id);
          
            const params = this.$qs.stringify({id:row.id}, { indices: false });
            this.$axios.post("/cms/artical/delete", params).then(result => {
              this.$message(result.data.msg);
              if (result.data.code == 2201) {
                
              }
            });
          
          
        })
        .catch(_ => {});
    },
    handleClose(done) {
      this.loading = false;
      this.dialog = false;
    },
    getTime() {
      let a = new Date().getTime();
      return a;
    },
    changeTabs(elem) {
      // let nodesObj = this.$refs['cascader'].getCheckedNodes()
      let arr = this.tabs;
      let _arr = [];
      for (let i in arr) {
        let item = arr[i];
        _arr[i] = item[item.length - 1];
      }
      this.form.tabs = _arr;
    },
    sendForm() {
      this.$confirm("确定要提交表单吗？")
        .then(_ => {
          console.log("sendForm", this.drawerMode);
          if (this.drawerMode == 0) {
            const params = this.$qs.stringify(this.form, { indices: false });
            this.$axios.post("/cms/artical/add", params).then(result => {
              this.$message(result.data.msg);
              if (result.data.code == 2201) {
                this.loading = false;
                this.dialog = false;
              }
            });
          } else if (this.drawerMode == 1) {
            const params = this.$qs.stringify(this.form, { indices: false });
            this.$axios.post("/cms/artical/update", params).then(result => {
              this.$message(result.data.msg);
              if (result.data.code == 2201) {
                this.loading = false;
                this.dialog = false;
              }
            });
          }
          this.loading = true;
        })
        .catch(_ => {});
    },
    handleCurrentChange(curPage) {
      console.log(curPage);

      // const params = this.$qs.stringify(this.pages);
      this.$axios
        .get("/cms/artical/list", { params: this.pages })
        .then(result => {
          console.log(result);
          this.pages.totalData = result.data.data.count;
          
          this.tableData = result.data.data.list;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='sass' scoped>

@import './artical.scss'
</style>
