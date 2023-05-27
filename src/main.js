import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';

// App Theme
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Add PrimeFlex
import 'primeflex/primeflex.css';

// PrimeVue Components
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Row from "primevue/row";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import Calendar from 'primevue/calendar';
import Password from "primevue/password";
import InputMask from "primevue/inputmask";
import Carousel from "primevue/carousel";
import TabMenu from 'primevue/tabmenu';
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
// Router
import router from "./router/index.js";

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple : true })
    .component('pv-data-table', DataTable)
    .component("pv-column", Column)
    .component('pv-toolbar', Toolbar)
    .component('pv-input-text', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-button', Button)
    .component('pv-row', Row)
    .component('pv-sidebar', Sidebar)
    .component('pv-menu', Menu)
    .component('pv-dialog', Dialog)
    .component('pv-toast', Toast)
    .component('pv-dropdown', Dropdown)
    .component('pv-tag', Tag)
    .component('pv-card', Card)
    .component('pv-calendar', Calendar)
    .component('pv-password', Password)
    .component('pv-input-mask', InputMask)
    .component('pv-carousel', Carousel)
    .component('pv-tab-menu', TabMenu)
    .component('pv-accordion', Accordion)
    .component('pv-accordion-tab', AccordionTab)
    .mount('#app')
