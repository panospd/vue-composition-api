<template>
    <div class="columns">
        <div class="column">
            <div class="field">
                <div class="label">New Post</div>
                <input 
                    v-model="title" 
                    type="text" 
                    class="input"
                    data-test="title"
                >
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div 
                contenteditable ref="contentEditable" 
                @input="handleInput" 
                data-test="content"
            />
        </div>
        <div v-html="html" class="column" />
    </div>
    <div class="columns">
        <div class="column">
            <button 
                class="button is-primary is-pulled-right"
                @click="save"
                data-test="submit"
            >
                Submit
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import {Post} from "../mocks"
import {parse} from "marked"
import highlight from "highlight.js"
import debounce from "lodash/debounce"

export default defineComponent({
  name: 'PostWriter',
  props: {
    post: {
        type: Object as () => Post,
        required: true
    },
  },
  emits: {
        save: (post: Post) => {
            return true
        }
  },
  setup(props, ctx) {
      const title = ref(props.post.title)
      const content = ref(props.post.markdown || "")
      const html = ref("")

      const parseHtml = (str: string) => {
          html.value = parse(str, {
              gfm: true,
              breaks: true,
              highlight: (code: string) => {
                  return highlight.highlightAuto(code).value
              }
          })
      }

      watch(content, debounce((newVal) => {
          parseHtml(newVal)
      }, 250), {
          immediate: true
      })

      const contentEditable = ref<HTMLDivElement | null>(null)

      const handleInput = () => {
          if (!contentEditable.value)
          {
              throw Error("This should never happen")
          }

          content.value = contentEditable.value.innerText || ''
      }

      onMounted(() => {
          if (!contentEditable.value)
          {
              throw Error("This should never happen")
          }
          contentEditable.value.innerText = content.value
      })

      const save = () => {
          ctx.emit("save", {
              ...props.post,
              title: title.value,
              html: html.value,
              markdown: content.value
          })
      }

      return {
          title,
          content,
          contentEditable,
          handleInput,
          html,
          save
      }
  }
});
</script>

<style>
.column {
    overflow-y: scroll;
    overflow: hidden;
}
</style>
