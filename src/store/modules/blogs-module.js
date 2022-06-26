export default {
    namespaced: true,
    state: {
        blogs: []
    },
    getters: {
        categoryBlogs(state)  {
            return categoryId => {
                return state.blogs.filter(blog => blog.categoryId === categoryId)
            }
        }
    }
}