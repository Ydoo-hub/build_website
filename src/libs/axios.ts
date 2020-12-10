import axios from 'axios';

const { CancelToken } = axios;

class HttpRequest {
    public baseUrl: string;

    public queue: any;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.queue = {};
    }

    public getInsideConfig() {
        // const token = localRead(config.tokenKey);
        const headers: any = {};
        // if (token) {
        //     headers.Cpl = token;
        // }
        const reqConfig = {
            baseURL: this.baseUrl,
            transformRequest: [
                (oldData: any) => {
                    let newStr = '';
                    if (oldData) {
                        Object.keys(oldData).map((item) => {
                            if (item) {
                                newStr += `${encodeURIComponent(item)}=${encodeURIComponent(
                                    oldData[item]
                                )}&`;
                            }
                            return newStr;
                        });
                        newStr = newStr.slice(0, -1);
                    }
                    return newStr;
                }
            ],
            headers,
            withCredentials: true
        };
        return reqConfig;
    }

    public interceptors(instance: any, url: string) {
        // 请求拦截
        instance.interceptors.request.use(
            (reqConfig: any) => {
                return reqConfig;
            },
            (error: any) => Promise.reject(error)
        );
        // 响应拦截
        instance.interceptors.response.use(
            (res: any) => {
                return Promise.reject(res);
            },
            (error: any) => {
                return Promise.reject(error);
            }
        );
    }

    public request(options: any) {
        const instance = axios.create();
        instance.defaults.timeout = 30 * 1000;
        const opt = Object.assign(this.getInsideConfig(), options);
        let cancel;
        opt.cancelToken = new CancelToken((c) => {
            cancel = c;
        });
        this.interceptors(instance, opt.url);
        const request: any = instance(opt);
        request.cancel = cancel;
        return request;
    }
}
export default HttpRequest;