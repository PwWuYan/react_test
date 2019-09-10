import myaxios from '../utils/myaxios'

let post = {
    register: (data) => myaxios.post('/buyer/user/register', data),
    login: (data) => myaxios.post('/buyer/user/login', data)
}

export default post