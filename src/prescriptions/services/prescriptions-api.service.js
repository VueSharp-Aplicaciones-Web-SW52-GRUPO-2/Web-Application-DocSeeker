import http from "../../shared/services/http-common.js"

export class PrescriptionsApiService {
    getAll() {
        return http.get('/prescriptions');
    }
}