<!--
  @describe: Echarts基础组件修改
  @author: cpl
  @create: 2021-12-02 14:56:31
-->

<template>
  <div :style="{ width: w, height: h }" />
</template>

<script>
// 按需引入基本模板
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pictorialBar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/graphic'
import 'echarts/lib/component/radar'
import 'echarts/lib/component/tooltip'
import 'echarts-gl'

const unwrap = (obj) => obj && (obj.__v_raw || obj.valueOf() || obj)

export default {
  name: 'Echart',
  props: {
    width: {
      type: [String, Number],
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: 550
    },
    option: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      chartBox: null
    }
  },
  computed: {
    w () {
      return typeof this.width === 'number' ? this.width + 'px' : this.width
    },
    h () {
      return typeof this.height === 'number' ? this.height + 'px' : this.height
    }
  },
  watch: {
    option: {
      handler () {
        this.drawChart()
      },
      immediate: true,
      deep: true
    },
    width (val, oldVal) {
      if (val === oldVal) return
      this.drawChart({ width: val })
    },
    height (val, oldVal) {
      if (val === oldVal) return
      this.drawChart({ height: val })
    }
  },
  beforeDestroy () {
    this.dispose()
  },
  mounted () {
    this.chartBox = echarts.init(this.$el)
    this.$emit('load', this.chartBox)
  },
  methods: {
    drawChart (params = {}) {
      this.$nextTick(() => {
        this.chartBox.clear()
        if (params.width) {
          this.chartBox.resize({
            width: params.width
          })
        }
        if (params.height) {
          this.chartBox.resize({
            height: params.height
          })
        }
        unwrap(this.chartBox).setOption(this.option)
      })
    },

    // 销毁实例
    dispose () {
      if (this.chartBox) {
        this.chartBox.dispose()
        this.chartBox = null
      }
    }
  }
}
</script>
