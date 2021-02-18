import Vue from 'vue'
import api from './api'
const globals = [
  {
    API: api
  }
]
globals.forEach((item) => {
  for (var key in item) {
    Vue.prototype.key = item[key]
  }
})