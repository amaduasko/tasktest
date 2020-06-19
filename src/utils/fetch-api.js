// const _ = require('lodash')
// const getPosts = async () => {
//     const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => response.json())
//         .then((data) => data)
//     return posts
// }

// const getPostsById = async (id) => {
//     const post = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`)
//         .then((response) => response.json())
//         .then((data) => data)
//     return post
// }

// const getPostsByUserId = async (userId) => {
//     const posts = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//     )
//         .then((response) => response.json())
//         .then((data) => data)
//     return posts
// }

// const getUsers = async () => {
//     const users = await fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((data) => data)
//     return users
// }

// const getUserById = async (id) => {
//     const user = await fetch(`https://jsonplaceholder.typicode.com/users${id}`)
//         .then((response) => response.json())
//         .then((data) => data)
//     return user
// }

const getUsersAndPosts = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => data)
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => data)
    const result = await users.map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id)
        user.posts = userPosts
        return user
    })
    return result
}

export default getUsersAndPosts
