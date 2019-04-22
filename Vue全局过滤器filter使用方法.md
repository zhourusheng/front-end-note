## Vue全局过滤器filter使用方法

```
// main.js

import filters from './assets/utils/filter'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
```

```
// filter.js

/**
 * 商品价格过滤器
 * 价格不能 <= 0 ,格式25.00, false时转成'-'
 */
const PRICE_FILTER = (value) => {
  let numVal = Number(value)
  if (isNaN(value) || !numVal || numVal <= 0) {
    return '-'
  } else {
    // 四舍五入, 保留两位小数, 并且自动小数点, 补0
    let newValue = Math.round(parseFloat(numVal) * 100) / 100
    let val = newValue.toString().indexOf('.')
    let valArr = newValue.toString().split('.')
    if (val < 0) {
      return newValue.toString() + '.00'
    } else if (valArr[1].length === 1) {
      return newValue.toString() + '0'
    } else {
      return newValue.toString()
    }
  }
}

/**
 * 商品销量过滤器
 * 月销量不能 < 0 ,格式25, false时转成0
 */
const COUNT_FILTER = (value) => {
  let numVal = Number(value)
  if (isNaN(value) || !numVal || numVal < 0) {
    return '0'
  } else {
    // 仅保留整数部分
    let newVal = parseInt(numVal)
    return newVal
  }
}

/**
 * 商品折扣过滤器
 * 折扣不能 <= 0 ,格式5折或6.5折, false时转成'-'
 */
const DISCOUNT_FILTER = (value) => {
  let numVal = Number(value)
  if (isNaN(value) || !numVal || numVal < 0) {
    return '-'
  } else {
    // 非整数时保留一位小数，整数时则直接展示整数
    let newValue = Math.round(parseFloat(numVal) * 10) / 10
    return newValue
  }
}

export default {
  PRICE_FILTER,
  COUNT_FILTER,
  DISCOUNT_FILTER
}
```

```
// 在组建中使用
<div class="old-price">
  ¥ {{goodListItem.originalPrice | PRICE_FILTER}}
</div>
```