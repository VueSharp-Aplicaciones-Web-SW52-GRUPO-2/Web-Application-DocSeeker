import http from "../../shared/services/http-common";

export class PrescriptionsApiService {
    getAll() {
        return http.get('/prescriptions');
    }
}