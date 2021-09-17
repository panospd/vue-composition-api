import { reactive, readonly, App, inject } from "vue"
import axios from "axios"
import { Post, today, thisMonth, thisWeek } from "./mocks"

export interface User {
    id: string;
    username: string;
    password: string;
}

interface State {
    posts: PostsState
}

export const storeKey = Symbol("store")

interface PostsState {
    ids: string[]
    all: Map<string, Post>,
    loaded: boolean
}

export class Store {
    private state: State
    constructor(initialState: State) {
        this.state = reactive(initialState)
    }

    install(app: App) {
        app.provide(storeKey, this)
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

    async createUser(user: User) {
        console.log(user)
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

export const store = new Store({
    posts: {
        all,
        ids: [],
        loaded: false
    }
})

export const useStore = (): Store => {
    const _store = inject<Store>(storeKey)

    if (!_store) {
        throw Error("Did you forgot to call provide?")
    }

    return _store;
}

