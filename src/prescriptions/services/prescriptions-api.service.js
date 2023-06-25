import http from "../../shared/services/http-common";

export class PrescriptionsApiService {
    getAll() {
        return http.get('https://docseekerapi.azurewebsites.net/api/v1/prescriptions');
    }
    getByPrescriptionId(prescriptionId) {
        return http.get(`https://docseekerapi.azurewebsites.net/api/v1/medicines`);
    }
}