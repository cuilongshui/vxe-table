<template>
  <div>
    <p>使用 vxe-excel 渲染 Excel 表格</p>

    <button class="btn" @click="getValidEvent">获取有效数据</button>
    <button class="btn" @click="getInsertEvent">获取新增</button>
    <button class="btn" @click="getRemoveEvent">获取删除</button>
    <button class="btn" @click="getUpdateEvent">获取修改</button>
    <button class="btn" @click="exportCsvEvent">导出.csv</button>
    <vxe-excel
      ref="xExcel"
      max-height="600"
      :columns="columns"
      :data.sync="tableData">
    </vxe-excel>

    <pre>
      <code>
        | Arrow Up ↑ | 移动到当前活动单元格上面的单元格 |
        | Arrow Down ↓ | 移动到当前活动单元格下面的单元格 |
        | Arrow Left ← | 移动到当前活动单元格左边的单元格 |
        | Arrow Right → | 移动到当前活动单元格右边的单元格 |
        | Tab | 移动到当前选中或活动单元格的右侧单元格，如果到最后一列且存在下一行，则从下一行开始移动 |
        | Enter | 取消编辑并移动到当前活动单元格下面的单元格 |
        | Delete | 清空内容 |
        | Backspace | 清空内容并激活选中单元格为编辑状态 |
        | F2 | 激活单元格编辑 |
        | Esc | 取消单元格编辑 |
        | Ctrl + C | 复制选中的单元格内容 |
        | Ctrl + X | 剪贴选中的单元格内容 |
        | Ctrl + V | 粘贴选中的单元格内容 |
        | Ctrl + A | 选中所有单元格 |
      </code>
    </pre>

    <p class="demo-code">显示代码</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    let columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
    return {
      columns: [
        {
          type: 'index',
          width: 50,
          fixed: 'left',
          align: 'center',
          headerAlign: 'center'
        }
      ].concat(columns.map(name => {
        return {
          prop: name.toLowerCase(),
          label: name,
          width: 76,
          headerAlign: 'center',
          editRender: {
            name: 'cell'
          }
        }
      })),
      tableData: Array.from(new Array(20)).map(() => {
        let item = {}
        columns.forEach(name => {
          item[name.toLowerCase()] = ''
        })
        return item
      }),
      demoCodes: [
        `
        <vxe-excel
          ref="xExcel"
          max-height="600"
          :columns="columns"
          :data.sync="tableData">
        </vxe-excel>
        `,
        `
        export default {
          data () {
            let columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
            return {
              columns: [
                {
                  type: 'index',
                  width: 50,
                  fixed: 'left',
                  align: 'center',
                  headerAlign: 'center'
                }
              ].concat(columns.map(name => {
                return {
                  prop: name.toLowerCase(),
                  label: name,
                  width: 76,
                  headerAlign: 'center',
                  editRender: {
                    name: 'cell'
                  }
                }
              })),
              tableData: Array.from(new Array(20)).map(() => {
                let item = {}
                columns.forEach(name => {
                  item[name.toLowerCase()] = ''
                })
                return item
              })
            }
          }
        }
        `
      ]
    }
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    getValidEvent () {
      let validRecords = this.$refs.xExcel.getRecords().filter(item => Object.keys(item).some(key => item[key]))
      alert(validRecords.length)
    },
    getInsertEvent () {
      let insertRecords = this.$refs.xExcel.getInsertRecords()
      alert(insertRecords.length)
    },
    getRemoveEvent () {
      let removeRecords = this.$refs.xExcel.getRemoveRecords()
      alert(removeRecords.length)
    },
    getUpdateEvent () {
      let updateRecords = this.$refs.xExcel.getUpdateRecords()
      alert(updateRecords.length)
    },
    exportCsvEvent () {
      this.$refs.xExcel.exportCsv()
    }
  }
}
</script>
