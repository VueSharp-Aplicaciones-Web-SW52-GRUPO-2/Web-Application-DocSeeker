<template>
    <div>
        <h1>Doctors</h1>

        <div v-if="doctors.length === 0">No doctors found</div>
        <div v-else>
            <div v-for="doctor in doctors" :key="doctor.id">
                <DoctorCard :doctor="doctor" />
            </div>
        </div>

    </div>

</template>

<script>
import axios from "axios";
import DoctorCard from "../../docseeker/pages/card-doctor.component.vue";

export default {
    components: {
        DoctorCard
    },
    data() {
        return {
            doctors: []
        };
    },
    async created() {
        try {
            const response = await axios.get('../../../server/db.json');
            this.doctors = response.data.doctors;
        } catch (error) {
            console.error(error);
        }
    }
};
</script>