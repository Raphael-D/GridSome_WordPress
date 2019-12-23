<template>
    <div>
        <Header></Header>
        <router-view />
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
                // ここに処理を追加します。
                console.log("LOCATION_PATH : ",location.pathname)
                if(location.pathname.match(/\//g).length !== 1) {
                    this.sidebar = true
                } else {
                    this.sidebar = false
                }
            }
        }
    },
    // methods: {
    //     test() {
    //         console.log("Location.pathname:",location.pathname.match(/\//g).length);
    //     }
    // },
    // computed: {
    //     test() {
    //         if(location.pathname.match(/\//g).length === 1) {
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     }    
    // },
    mounted() {
        if(location.pathname.match(/\//g).length !== 1) {
            this.sidebar = true
        } else {
            this.sidebar = false
        }
    }
}
</script>