import http from '../../shared/services/http-common.js'

export class PatientsApiServices {
    getById(id) {
        return http.get(`/patients/${id}`);
    }
    getAll(){
        return http.get('/patients')
    }
}
