<template>
    <main class="userProfileContainer">
        <section class="userInformation w-10">
            <div class="profilePhotoContainer">
                <img class="profilePhoto" :src="this.patient.photo" alt="patient photo">
            </div>

            <div class="userData">
                <h1 class="title">{{ this.patient.name }}</h1>

                <div class="dataField">
                    <i class="pi pi-calendar" style="font-size: 2rem"></i>
                    <h3>{{this.patient.birthday}}</h3>
                </div>

                <div class="dataField">
                    <i class="pi pi-phone" style="font-size: 2rem"></i>
                    <h3>{{ this.patient.phone }}</h3>
                </div>

                <div class="dataField">
                    <i class="pi pi-envelope" style="font-size: 2rem"></i>
                    <h3>{{this.patient.email}}</h3>
                </div>

            </div>
        </section>

        <section class="additionalLinks w-10">

            <div class="leftCol">
                <div class="additionalLinksIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z"/>
                    </svg>
                </div>

                <div class="additionalLinksText">
                    <h2>Prescriptions</h2>
                    <h3>Check all your medications</h3>
                </div>
            </div>

            <div class="additionalLinksGoToLink rightCol">
                <router-link to="/prescriptions"><i class="pi pi-arrow-right" style="font-size: 1.5rem"></i></router-link>
            </div>

        </section>

        <section class="additionalLinks w-10">

            <div class="leftCol">
                <div class="additionalLinksIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>
                </div>

                <div class="additionalLinksText">
                    <h2>Medical History</h2>
                    <h3>Check all your medical history</h3>
                </div>
            </div>

            <div class="additionalLinksGoToLink rightCol">
                <router-link to="/medicalInformation"><i class="pi pi-arrow-right" style="font-size: 1.5rem"></i></router-link>
            </div>
        </section>

        <section class="additionalLinks w-10">

            <div class="leftCol">
                <div class="additionalLinksIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                </div>

                <div class="additionalLinksText">
                    <h2>Personal Information</h2>
                    <h3>Check or edit your personal information</h3>
                </div>
            </div>

            <div class="additionalLinksGoToLink rightCol">
                <router-link to="/personalInformation"><i class="pi pi-arrow-right" style="font-size: 1.5rem" ></i></router-link>
            </div>
        </section>

    </main>
</template>


<script>
import axios from "axios";

export default {
    data() {
        return {
            patient: {
                name: "",
                birthday: "",
                email: "",
                phone: "",
                photo: ""
            }
        };
    },
    created() {
        axios.get('../../../server/db.json').then(response => {
            this.patient = response.data.patient[0];
        });
    },
};
</script>

<style scoped>


.userProfileContainer {
    padding-top: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.userInformation {
    border: 3px solid #505050;
    display: flex;
    justify-content: center;
    padding: 1% 0;
    margin: 0 0 1% 0;
    border-radius: 1rem;
    width: 80%;
}

.profilePhotoContainer {
    width: 250px;
    height: 250px;
    border: 3px solid #2980B9;
    border-radius: 50%;
    overflow: hidden;
}

.profilePhoto {
    width: 100%;
    height: 100%;
}

.userData {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    margin-left: 5%;
}

.dataField {
    display: flex;
}

.dataField h3 {
    margin-left: 1rem;
}

.additionalLinks {
    border: 3px solid #505050;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 0 1%;
}

.additionalLinks {
    margin: 1% 0;
}

.leftCol {
    display: flex;
    width: 30%;
}

.additionalLinksIcon {
    align-self: center;
}

.additionalLinksText {
    margin-left: 5%;
}

.additionalLinksGoToLink {
    align-self: center;
}
.title{
    font-weight: bolder;
}
@media (max-width: 750px){
    .userInformation{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .userData{
        gap: 1rem;
    }
}
</style>