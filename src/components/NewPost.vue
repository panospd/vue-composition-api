<template>
    <post-writer 
        :post="newPost" 
        @save="save"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostWriter from "./PostWriter.vue"
import {Post} from "../mocks"
import moment from 'moment';

export default defineComponent({
  name: 'NewPost',
  components: {
      PostWriter
  },
  setup() {
      const newPost: Post = {
          id: "-1",
          title: "Enter your title...",
          created: moment()
      }

      const save = (newPost: Post) => {
          console.log("post", newPost)
      }

      return {
          newPost,
          save
      }
  }
});
</script>

<style>
</style>
