import axios from 'axios';

axios.defaults.baseURL = 'https://gid-api.herokuapp.com/users'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true