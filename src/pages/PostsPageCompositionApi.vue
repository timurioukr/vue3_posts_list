<template>
  <div>
    <h3>Page with posts</h3>
    <my-input 
      v-model="searchQuery"
      placeholder="Search..." 
      v-focus
      />

    <div class="app__btns">
      <button class="btn" @click="isDialogVisible = true">Create post</button>
      <my-select v-model="selectedSort" :options="sortOptions"/>
    </div>

    <post-modal v-model:show="isDialogVisible">
      <post-form/>
    </post-modal>

    <hr style="margin: 20px 0px" />

    <posts-list :posts="sortedAndSearchedPosts"/>

    <div class="loader" v-if="!posts.length">
      <img src="../../assets/icons8-крутящийся-круг.gif" alt="" />
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostsList from "@/components/PostsList.vue";
import PostModal from "@/components/ui/PostModal.vue";
import MySelect from "@/components/ui/MySelect.vue";
import MyInput from "@/components/ui/MyInput.vue";
import axios from 'axios';
import {ref} from 'vue'
import {usePosts} from "../hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: { 
    PostForm, 
    PostsList, 
    PostModal, 
    MySelect, 
    MyInput 
  },
  data () {
    return {
      isDialogVisible: false,
      sortOptions: [
        { value: "title", name: "To title" },
        { value: "body", name: "To description" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, totalPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      totalPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.h3 {
  font-weight: 800;
}

.loader {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 50px;
}

.loader img {
  width: 100px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page__wrapper div:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.page__wrapper div:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.page {
  border: 1px solid lightskyblue;
  /* border-radius: 8px; */
  padding: 10px 15px;
  cursor: pointer;
}

.current-page {
  background: rgba(0, 149, 255, 0.055);
}
</style>
