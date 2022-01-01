import axios from "axios";
import qs from "qs"; //处理参数
// import router from '../router'; //引入路由
import { ElLoading, ElMessage } from 'element-plus';
import { json } from "stream/consumers";

let loading = null;



//开始加载动画
function openElLoading() {
  loading = ElLoading.service({
        lock: true,
        text: '拼命加载中...',
        background: 'rgba(0,0,0,.7)'
    });
}

//关闭加载动画
function closeElLoading() {
  loading.close();
}

//添加请求拦截器
axios.interceptors.request.use(
    config => {
        //加载动画
        openElLoading()
        if (localStorage.sessionId) { //如果我的sessionId存在(sessionId其实就是token)
            // 设置统一的请求header
            config.headers.Authorization = localStorage.sessionId //授权（每次请求把sessionId带给后台）
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//添加响应拦截器
axios.interceptors.response.use(
    response => {　　//逻辑处理
        if (response.data.errorCode == -1) { //后端反回的状态值，本应该errorCode是status
            ElMessage({
                type: 'warning',
                duration: 1500,
                showClose: true,
                message: '当前登录已失效，请从新登录！'
            })
            // router.push("/logon")//让用户从新回到登录页面
        }
        return response;
    },
    error => {
        closeElLoading() //请求超时清除加载动画
        return Promise.resolve(error.response);
    }
);


axios.defaults.baseURL = "/api";    // 开发
axios.defaults.withCredentials = true // 携带cookie

axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 6000; //设置请求超时时间

function checkStatus(response: any) {
    return new Promise((resolve, reject) => {
        if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
            try {
                closeElLoading() //关闭加载动画
            } catch (e) {
                //抛出异常
                console.log(e)
            }
            resolve(response.data);
        } else {
            try {
                closeElLoading() //关闭加载动画
            } catch (e) {
                //抛出异常
                console.log(e)
            }
            ElMessage({
                type: 'error',
                showClose: true,
                message: '网络异常，请检查网络连接是否正常！'
            })
        }
    });
}

export default {
    post(url: any, params: any) {
        params = JSON.stringify(params)
        return axios({
            method: "post",
            url,
            data: params
        }).then(response => {
            return checkStatus(response);
        });
    },
    get(url: any, params: any) {
        return axios({
            method: "get",
            url,
            params
        }).then(response => {
            return checkStatus(response);
        });
    }
};