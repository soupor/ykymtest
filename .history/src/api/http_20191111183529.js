/**
 * 全站http配置
 *
 * header参数说明
 * isToken是否需要token
 */
import Vue from 'vue';
import api from 'axios';
import Qs from 'qs';
import NProgress from 'nprogress'; // progress bar
import router from '@/router';
import { Message  } from 'element-ui';
import 'nprogress/nprogress.css';

const axios = api.create({
	baseURL: window.location.origin,
	timeout: 30000,
	// headers: {'X-Custom-Header': 'application/x-www-form-urlencoded'}
});

// axios.defaults.retry = 4;
// axios.defaults.retryDelay = 1000;

// 返回其他状态吗
axios.defaults.validateStatus = status => status >= 200 && status <= 500; // 默认的

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

// NProgress Configuration
NProgress.configure({
	showSpinner: false,
});

// HTTP request拦截
axios.interceptors.request.use((config) => {
	// console.log('request', config);
	const configArg = config;
	NProgress.start(); // start progress bar
	return configArg;
}, error => Promise.reject(error));

// HTTP response拦截
axios.interceptors.response.use((response) => {
	NProgress.done();
	const res = response.data;
	if ( res.code === "1303" ) {
		Message({
			showClose: true,
			message: '登录超时',
			type: 'error'
		});
		router.push('/');
	} else if (res.code !== "1000") {
		Message({
			showClose: true,
			message: res.message,
			type: 'error'
		});
		return res;
	} else {
		return res;
	}
}, (error) => {
	NProgress.done();
	Promise.reject(error);
});

export default {
	post(url, json, header) { // body传参
		const arg = json;
		return axios({
			url: url,
			headers: header || {},
			method: 'post',
			data: arg,
		});
	},
	postQs(url, json, header) { // query传参
		const arg = json;
		return axios({
			url: url,
			headers: header || {},
			method: 'post',
			data: Qs.stringify(arg),
		});
	},
	delete(url, json, header) { // body传参
		const arg = json;
		return axios({
			url: url,
			headers: header || {},
			method: 'delete',
			data: arg,
		});
	},
	put(url, json, header) { // body传参
		const arg = json;
		return axios({
			url: url,
			headers: header || {},
			method: 'put',
			data: arg,
		});
	},
	get(url, json) {
		const arg = json;
		return axios({
			url: url,
			headers: {},
			method: 'get',
			params: arg,
		});
	},
	$axios: axios,
};