import Vue, { VNode } from 'vue'
import App from '../vue-components/App.vue'

new Vue({
  el: '#app',
  render: function (h): VNode {
    return h(App)
  }
})