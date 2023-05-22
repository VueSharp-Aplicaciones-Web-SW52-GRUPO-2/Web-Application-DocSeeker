// Routing Module

import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/home", component:HomeComponent},
        {path:"/", redirect:"/home"},
        {
            path:"/medical-record",
            name:"medical-record",
            component: () => import("../docseeker/pages/medical-history.component.vue")
        },
        {
            path: "/doctor-list",
            name: "doctor-list",
            component: () => import('../shared/components/doctor-list.component.vue')
        },
        {
            path: '/my-profile',
            name: 'my-profile',
            component: () => import('../docseeker/pages/patient-profile.component.vue')
        },
        {
            path: '/personal-information',
            name: 'personal-information',
            component: () => import('../docseeker/pages/personal-information.component.vue')
        },
        {
            path: '/prescriptions',
            name: 'prescriptions',
            component: () => import('../prescriptions/pages/prescriptions.component.vue')
        },
        {
            path: '/appointment-calendar',
            name: 'appointmentCalendar',
            component: () => import('../appointment/pages/appointment-calendar.component.vue')
        },
        {
            path: '/appointment-booking',
            name: 'appointmentHour',
            component: () => import('../appointment/pages/appointment-booking.component.vue')
        },
        {
            path: '/appointment',
            name: 'patient-appointment',
            component: () => import('../docseeker/pages/patient-appoinment.component.vue')
        }
    ]
});

export default router;