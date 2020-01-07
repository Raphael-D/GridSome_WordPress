<template>
  <Layout>
    <section class="l-section">
      <div class="l-wrapper">
        <h1 class="heading">お知らせ一覧</h1>
        <ul class="post-list">
          <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
            <Post :post="node" />
          </li>
        </ul>
        <Pager :info="$page.allWordPressPost.pageInfo"/>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  
  allWordPressPost (page: $page, perPage: 10, filter: {
    categories: {
      id: {
        eq: 3
      }
    }
  }) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
        categories {
          title
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Welcome to my blog :)'
  },
  mounted() {
    const getDegree = function() {
      const x = 50 ;
      const y = 50 ;
      const radian = Math.atan2( y, x) ;
      const degree = radian * (180 / Math.PI);
      console.log(degree)
    }
    const getMove = function() {
      const distance = 100;
      const angle = -45;
      const x = distance * Math.cos( angle * (Math.PI / 180) ) ;
      const y = distance * Math.sin( angle * (Math.PI / 180) ) ;
      console.log('x-moving : ', x, ' y-moving : ', y);
    }
    getDegree();
    getMove();
  }
}
</script>
<style lang="scss">

</style>
