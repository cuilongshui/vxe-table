import XEUtils from 'xe-utils'
import zhCNLocat from '../lib/locale/lang/zh-CN'
import renderMap from './components/table/src/renderer'

const GlobalConfig = {
  size: null,
  optimized: {
    animat: true,
    // 默认列大于 80 条时自动使用横向 X 滚动渲染
    scrollX: {
      gt: 60,
      oSize: 6,
      rSize: 16,
      vSize: 0
    },
    // 默认数据大于 500 条时自动使用纵向 Y 滚动渲染
    scrollY: {
      gt: 500,
      oSize: 25,
      rSize: 100,
      vSize: 0,
      rHeight: 0
    }
  },
  showAllOverflow: null,
  showHeaderAllOverflow: null,
  contextMenu: null,
  renderMap,
  tooltipConfig: null,
  iconMap: {
    sortAsc: 'vxe-sort--asc-icon',
    sortDesc: 'vxe-sort--desc-icon',
    filter: 'vxe-filter--icon',
    edit: 'vxe-edit--icon',
    tree: 'vxe-tree--node-icon'
  },
  i18n: (key, value) => XEUtils.get(zhCNLocat, key)
}

export default GlobalConfig
