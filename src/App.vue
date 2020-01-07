<template>
    <div class="l-container">
        <Header></Header>
        <router-view :class="{'is-sidebar': sidebar}" />
        <Sidebar v-if="sidebar"></Sidebar>
        <Footer></Footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sidebar: true
        }
    },
    watch: {
        '$route': function (to, from) {
            if (to.path !== from.path) {
                console.log("LOCATION_PATH : ",location.pathname)
                if(location.pathname.match(/\//g).length !== 1) {
                    this.sidebar = true
                } else {
                    this.sidebar = false
                }
            }
        }
    },
    mounted() {
        if(location.pathname.match(/\//g).length !== 1) {
            this.sidebar = true
        } else {
            this.sidebar = false
        }
    }
}
</script>