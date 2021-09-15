import { reactive, readonly } from "vue"
import axios from "axios"
import { Post, today, thisMonth, thisWeek } from "./mocks"

interface State {
    posts: PostsState
}

interface PostsState {
    ids: string[]
    all: Map<string, Post>,
    loaded: boolean
}

class Store {
    private state: State
    constructor(initialState: State) {
        this.state = reactive(initialState)
    }

    getState() {
        return readonly(this.state)
    }

    async createPost(post: Post) {
        const response = await axios.post<Post>("/posts", post)
        this.state.posts.all.set(post.id, response.data)
        this.state.posts.ids.push(post.id)
        console.log(response)
    }

    async fetchPosts() {
        const response = await axios.get<Post[]>("/posts")
        const postsState: PostsState = {
            ids: [],
            all: new Map,
            loaded: true
        }

        for (const post of response.data) {
            postsState.ids.push(post.id);
            postsState.all.set(post.id, post)
        }

        this.state.posts = postsState
    }
}

const all = new Map<string, Post>()

const store = new Store({
    posts: {
        all,
        ids: [],
        loaded: false
    }
})

export const useStore = () => {
    return store
}

