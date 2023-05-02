import http from '../../shared/services/http-common.js'

export class NewsApiService {
    getAll(){
        return http.get('/news')
    }
}