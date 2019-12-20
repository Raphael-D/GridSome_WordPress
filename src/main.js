import DefaultLayout from '~/layouts/Default.vue'
import Header from '~/layouts/Header.vue'
import Footer from '~/layouts/Footer.vue'
export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Header', Header)
  Vue.component('Footer', Footer)
}
