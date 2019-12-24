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
    <section v-html="$page.wordPressPage.content"></section>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  wordPressPage(id: 5) {
    content
  }
  allWordPressPost (page: $page, perPage: 10, filter: {
    categories: {
      id: {
        eq: 1
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
