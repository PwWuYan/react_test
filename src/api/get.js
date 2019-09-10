import myaxios from '../utils/myaxios'
let get = {
    img: (data) => myaxios.get('/buyer/user/captcha', data)
}
export default get