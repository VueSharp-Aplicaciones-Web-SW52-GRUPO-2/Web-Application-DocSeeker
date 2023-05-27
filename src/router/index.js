import { createRouter, createWebHistory } from "vue-router";

import LoginComponent from "../login/public/pages/login-main.component.vue";
import LoginPatientComponent from "../login/patient/pages/login-patient.component.vue";
import ForgotPasswordPatientComponent from "../login/patient/pages/forgot-password-patient.component.vue";
import RegisterPatientComponent from "../register/patient/pages/register-patient.component.vue";
import HomePatientComponent from "../home/pages/home-patient.component.vue";
import ProfileInformationComponent from "../profile/pages/profile-information.component.vue";
import ListDoctorComponent from "../appointment/pages/appointment-doctor.component.vue";
import MedicalRecordComponent from "../profile/pages/medical-record.component.vue";
import AppointmentMainComponent from "../appointment/pages/appointment-main.component.vue";
import AppointmentNewComponent from "../appointment/components/appointment-new.component.vue";
import AppointmentRecordComponent from "../appointment/components/appointment-record.component.vue";
import NewsMainComponent from "../news/pages/news-main.component.vue";
import PrescriptionsComponent from "../prescriptions/pages/prescriptions.component.vue";
import AppointmentDoctorComponent from "../appointment/pages/appointment-doctor.component.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login", component: LoginComponent
        },
        {
            path: "/", redirect: "/login"
        },
        {
            path: "/login-patient", name: "login-patient"  ,component: LoginPatientComponent
        },
        {
            path: "/forgot-password", name: "forgot-password"  ,component: ForgotPasswordPatientComponent
        },
        {
            path: "/sign-up", name: "register-patient"  ,component: RegisterPatientComponent
        },
        {
            path: "/home", name: "home-patient"  ,component: HomePatientComponent,  meta: { requiresAuth: true }
        },
        {
            path: '/profile', name: 'PersonalInformation', component: ProfileInformationComponent,  meta: { requiresAuth: true }
        },
        {
            path: '/doctors', name: 'appointmentDoctors', component: AppointmentDoctorComponent,  meta: { requiresAuth: true }
        },
        {
            path: '/medical-record', name: 'medicalRecord', component: MedicalRecordComponent,  meta: { requiresAuth: true }
        },
        {
            path: '/appointment', name: 'appointment', component: AppointmentMainComponent,  meta: { requiresAuth: true }
        },
        {
            path: '/appointment-new', name: 'appointmentnew', component: AppointmentNewComponent,  meta: { requiresAuth: true }
        },
        {
            path: '/appointment-records', name: 'appointmentrecord', component: AppointmentRecordComponent,  meta: { requiresAuth: true }
        },
        {
            path: '/news', name: 'news', component: NewsMainComponent,  meta: { requiresAuth: true }
        },
        {
            path: '/prescriptions', name: 'prescriptions', component: PrescriptionsComponent,  meta: { requiresAuth: true }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !authenticatedUser) {

        next({ name: 'login-patient' });
    } else {

        next();
    }
});

export default router;