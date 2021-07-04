import axios from  'axios';

//users , posts
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {}
})
const getUsers = () => axiosInstance('');
const getUser = (id) => axiosInstance('/' + id);
const getUserPosts = (id) => axiosInstance('/' + id + '/posts');

//comments
const axiosInstanceComments = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {}
})
const getComments = (postId) => axiosInstanceComments('/' + postId + '/comments')


export {getUsers, getUser, getUserPosts, getComments};

// https://jsonplaceholder.typicode.com/posts/2/comments