import Loadable from 'react-loadable';
import Loading from './views/loading';
const login = Loadable({
    loader: () =>
        import ('./views/login/index.jsx'),
    loading: Loading
})
const register = Loadable({
    loader: () =>
        import ("./views/register/index.jsx"),
    loading: Loading
})
const detail = Loadable({
    loader: () =>
        import ('./views/detail/index.jsx'),
    loading: Loading
})
export default [{
    path: '/',
    redirect: '/register',
}, {
    path: '/register',
    component: register
}, {
    path: '/login',
    component: login
}, {
    path: '/detail',
    component: detail
}]