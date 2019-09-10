import axios from "axios"
const instance = axios.create()

axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    console.log(config)

    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default {
    get: (url, data) => instance.get(url, { params: data }),
    post: (url, data) => instance.post(url, data)
}
// import axios from 'axios'; //引入axios
// var instance = axios.create(); //创建axios实例
// //添加请求拦截器
// instance.interceptors.request.use(function(config) {
//         //判断是不是登陆和注册接口 /api/login
//         console.log(config)
//         let tokenUrl = ['/api/login', '/api/registry'];
//         return tokenUrl.includes(config.url) ? config : {
//             ...config,
//             headers: {
//                 ...config.headers,
//                 token: window.localStorage.getItem('token')
//             }
//         }

//     }),
//     function(error) {
//         return Promise.reject(error);
//     }
// instance.interceptors.response.use(function(response) {
//         return response
//     }),
//     function(error) {
//         let { status } = error.response;
//         if (status < 500) {
//             switch (status) {
//                 case 422:
//                     alert('参数有误')
//                     break;
//                 case 401:
//                     alert('没有权限')
//                     break;
//                 default:
//                     break;
//             }
//         } else {
//             alert("服务端错误")
//         }
//         return Promise.reject(error);
//     }
// export default {
//     post(url, data) {
//         return instance.post(url, data)
//     },
//     get(url, data) {
//         return instance.get(url, { params: data })
//     }
// }