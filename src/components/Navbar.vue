<template>
  <div class="navbar">
    <div class="navbar-end">
      <div v-if="auth" class="buttons">
        <router-link to="/posts/new" class="button"> New Post </router-link>
        <button class="button" @click="signOut">Sign Out</button>
      </div>
      <div v-else class="buttons">
        <button data-test="sign-up" class="button" @click="signUp">Sign Up</button>
        <button class="button" @click="signIn">Sign In</button>
      </div>
    </div>
  </div>
  <teleport to="#modal">
    <component :is="component" />
  </teleport>
</template>

<script lang="ts">
import { useStore } from "../store";
import { computed, defineComponent, markRaw } from "vue";
import { useModal } from "../useModal";
import Signup from "./Signup.vue";

export default defineComponent({
  components: {
    Signup,
  },
  setup() {
    const modal = useModal();
    const store = useStore();

    const auth = computed<Boolean>(() => {
      return !!store.getState().authors.currentUserId
    })

    const signIn = () => {}
    const signUp = () => {
      modal.component.value = markRaw(Signup);
      modal.showModal()
    }
    const signOut = () => {}

    return {
      component: modal.component,
      signIn,
      signUp,
      signOut,
      auth,
      show: () => modal.showModal(),
    };
  },
});
</script>