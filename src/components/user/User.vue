<template>
  <div class="user">
    <Row>
      <Col span="24">
        <Input v-model="username" placeholder="请输入姓名" style="width:250px"></Input>
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="24">
        <Table stripe border height="400" :columns="columns6" :data="data5"></Table>
      </Col>
    </Row>
    <Modal
      v-model="isVisible"
      title="提示"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>您确定删除？</p>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    var _this = this
    return {
      username: '',
      isVisible: false,
      currentIndex: 0,
      columns6: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age',
          filters: [
            {
              label: '大于25岁',
              value: 1
            },
            {
              label: '小于25岁',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.age > 25
            } else if (value === 2) {
              return row.age < 25
            }
          }
        },
        {
          title: '地址',
          key: 'address',
          filters: [
            {
              label: '北京',
              value: '北京'
            },
            {
              label: '上海',
              value: '上海'
            },
            {
              label: '深圳',
              value: '深圳'
            }
          ],
          filterMethod (value, row) {
            return row.address.indexOf(value) > -1
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render (h, params) {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    _this.show(params.index)
                  }
                },
                style: {
                  marginRight: '5px'
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    _this.remove(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data5: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          date: '2016-10-03'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗',
          date: '2016-10-01'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道',
          date: '2016-10-02'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: '用户信息',
        content: `姓名：${this.data5[index].name}<br>年龄：${this.data5[index].age}<br>地址：${this.data5[index].address}`
      })
    },
    remove (index) {
      this.isVisible = true
      this.currentIndex = index
    },
    ok () {
      this.data5.splice(this.currentIndex, 1)
      this.$Notice.success({
        desc: '已删除'
      })
    },
    cancel () {
      // this.$Message.info('点击了取消')
    }
  }
}
</script>

<style scoped>
  .user{
    margin: 10px 0 0 10px;
  }
</style>
