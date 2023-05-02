<template>
    <div style="text-align: left">

        <b id="MEDHIS">MEDICAL HISTORY</b>
        <button style="position:absolute ; left:80%; color:white"  type="submit">GENERATE PDF</button>
    </div>
    <div id="divName" style="text-align: center" v-if="patient.length > 0">
        <img id="imgpatient" src="../../../images/mujer.jpg">
        <h style="font-size:50px">{{patient[0].name}}</h>
    </div>
    <br>
    <div id="test">
        <div id="divgeninf">
        <h id="textgeninf">GENERAL INFORMATION</h>
        </div>
        <br>
        <br>
        <div id="height" class="columna" v-if="patient.length > 0">
            <img id="imgheight" src="../../../images/height.jpeg">
            <div>
                <h1>Height: {{ patient[0].height }}</h1>
            </div>
        </div>
        <div id="weight" class="columna" v-if="patient.length > 0">
            <img id="imgheight" src="../../../images/weight.jpeg">
            <div>
                <h1>Weight: {{patient[0].weight}}</h1>
            </div>
        </div>
        <div id="bodymass" class="columna" v-if="patient.length > 0">
            <img id="imgheight" src="../../../images/imc.jpeg">
            <div>
                <h1>Body Mass: {{patient[0].bodyMass}}</h1>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div>
        <div style="text-align: left">
            <b id="bAll">Allergies:</b>
            <hr width=1000>
        </div>
        <div id="allergieslist" style="color:#E3D90A; font-size: 20px" v-if="patient.length > 0">
            <ul>
                <li style="text-align: left">
                    {{patient[0].allergies[0]}}
                </li>
                <li style="text-align: left">
                    {{patient[0].allergies[1]}}
                </li>
                <li style="text-align: left">
                    {{patient[0].allergies[2]}}
                </li>
            </ul>
        </div>
    </div>
    <br>
    <br>
    <div>
        <div style="text-align: left">
            <b id="bPath">Pathological History:</b>
            <hr width=1000>
        </div>
        <div id="pathologicallist" style="color:darkred; font-size: 20px" v-if="patient.length > 0">
            <ul>
                <li style="text-align: left">
                    {{patient[0].pathological[0]}}
                </li>
                <li style="text-align: left">
                    {{patient[0].pathological[1]}}
                </li>
                <li style="text-align: left">
                    {{patient[0].pathological[2]}}
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
import {PatientsApiServices} from "../services/patients-api.services.js";
import AllergieItem from "./allergie-item.vue";
import PathologicalItem from "./pathological-item.vue";

export default {
    name: "medical-history",
    components: {AllergieItem, PathologicalItem},
    data(){
        return{
            patient: [],
            patientService:null
        }
    },
    created() {
        this.patientService=new PatientsApiServices();
        this.patientService.getAll().then((response)=>{
            this.patient=response.data;
            console.log(this.patient)
        })
    }
}
</script>

<style scoped>

</style>
