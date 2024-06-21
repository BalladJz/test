import axios, { AxiosRequestConfig } from 'axios'

const defaultConfig = {
    baseURL: 'axiosInstances://some-domain.com/api/',
    timeout: 1000,
    headers: {},

}

const axiosInstance = axios.create(defaultConfig)

axiosInstance.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response) => {
    return response.data
}, (err) => {
    return Promise.reject(err)
})

function http<T = any>(url: string, options: AxiosRequestConfig): Promise<T> {
    const config: AxiosRequestConfig = {
        url,
        ...options
    }

    return new Promise((resolve, reject) => {
        axiosInstance.request(config).then((response: any) => {
            return resolve(response)
        }).catch((err) => {
            return reject(err)
        })
    })

}

export default http