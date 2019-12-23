import DefaultLayout from '~/layouts/Default.vue'
import Header from '~/layouts/Header.vue'
import Footer from '~/layouts/Footer.vue'
import Sidebar from '~/layouts/Sidebar.vue'
export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Header', Header)
  Vue.component('Footer', Footer)
  Vue.component('Sidebar', Sidebar)
}
