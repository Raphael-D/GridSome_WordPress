<template>
  <Layout>
    <div class="l-wrapper">
      <h1>お知らせ一覧</h1>
      <ul class="post-list">
        <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
          <Post :post="node" />
        </li>
      </ul>
      <Pager :info="$page.allWordPressPost.pageInfo"/>
    </div>
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
  }
}
</script>
