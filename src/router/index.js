// Routing Module

import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/doctorList",
            name: "DoctorList",
            component: () => import('../shared/components/doctor-list.component.vue')
        }
        ,
        {
            path: '/myProfile',
            name: 'myProfiler',
            component: () => import('../docseeker/pages/patient-profile.component.vue')
        }
        ,
        {
            path: '/personalInformation',
            name: 'PersonalInformation',
            component: () => import('../docseeker/pages/personal-information.component.vue')
        }
    ]
});

export default router;