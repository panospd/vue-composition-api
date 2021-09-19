import { reactive, readonly, App, inject } from "vue"
import axios from "axios"
import { Post, today, thisMonth, thisWeek } from "./mocks"

interface BaseState<T> {
    ids: string[]
    all: Map<string, T>,
    loaded: boolean
}

export interface User {
    id: string;
    username: string;
    password: string;
}

export type Author = Omit<User, "password">

type PostsState = BaseState<Post>
interface AuthorsState extends BaseState<Author> {
    currentUserId: string | undefined
}

interface State {
    posts: PostsState,
    authors: AuthorsState
}

export const storeKey = Symbol("store")

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
        this.state.posts.all.set(response.data.id, response.data)
        this.state.posts.ids.push(response.data.id)
    }

    async createUser(user: User) {
        const response = await axios.post<Author>("/users", user)
        this.state.authors.all.set(response.data.id, response.data)
        this.state.authors.ids.push(response.data.id)
        this.state.authors.currentUserId = response.data.id
        console.log(this.state.authors)
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

export const store = new Store({
    posts: {
        all: new Map<string, Post>(),
        ids: [],
        loaded: false
    },
    authors: {
        all: new Map<string, Author>(),
        ids: [],
        loaded: false,
        currentUserId: undefined
    }
})

export const useStore = (): Store => {
    const _store = inject<Store>(storeKey)

    if (!_store) {
        throw Error("Did you forgot to call provide?")
    }

    return _store;
}

