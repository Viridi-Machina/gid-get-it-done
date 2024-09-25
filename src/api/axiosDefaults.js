import axios from 'axios';

axios.defaults.baseURL = 'https://gid-api-a5a5270599fa.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true