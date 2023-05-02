<template>
    <div class="flex justify-content-between">
        <div class="justify-content-start">
            <b id="MEDHIS" class="">MEDICAL HISTORY</b>
        </div>
        <div class="justify-content-end">
            <button style="color:white" type="submit">GENERATE PDF</button>
        </div>
    </div>
    <div id="divName" style="text-align: center" v-if="patient.length > 0">
        <img id="imgpatient" src="src/assets/images/mujer.jpg" alt="patient name">
        <h style="font-size:50px"> {{patient[0].name}}</h>
    </div>
    <br>
    <div id="test">
        <div id="divgeninf">
        <h id="textgeninf">GENERAL INFORMATION</h>
        </div>
        <br>
        <br>
        <div id="height" class="columna" v-if="patient.length > 0">
            <img id="imgheight" src="src/assets/images/height.jpg" alt="patient height">
            <div>
                <h3>Height: {{ patient[0].height }}</h3>
            </div>
        </div>
        <div id="weight" class="columna" v-if="patient.length > 0">
            <img id="imgheight" src="src/assets/images/weight.jpg" alt="patient weight">
            <div>
                <h3>Weight: {{patient[0].weight}}</h3>
            </div>
        </div>
        <div id="bodymass" class="columna" v-if="patient.length > 0">
            <img id="imgheight" src="src/assets/images/imc.jpg" alt="patient bodyMass">
            <div>
                <h3>Body Mass: {{patient[0].bodyMass}}</h3>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div>
        <div style="text-align: left">
            <b id="bAll">Allergies:</b>
            <hr>
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
            <hr>
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

img#imgpatient{
    float: left;
    width: 100px;
    height: 70px;
    border: 3px solid;
    border-radius: 20px;
    margin-left: 10px;
    margin-top: 5px;
    border-color: #28A4A8;
}

img#imgheight{
    width: 150px;
    height: 120px;
    padding-left: 85px;
}

img#imgweight{
    width: 150px;
    height: 120px;
}

img#imgbodymass{
    width: 150px;
    height: 120px;
}

.columna
{float:left;
    width:33%;
}
@media (max-width: 780px) {
    .columna {float:none;width:100%;}
}

b#MEDHIS{
    font-size: 40px;
}
b#bAll{
    font-size: 25px;
}
b#bPath{
    font-size: 25px;
}
body {
    margin: 50px;
    min-height: 10vh;
}

div#divName{
    //width: 1300px;
    height: 90px;
    border: 1px solid #000;

}
div#divgeninf{
    background-color: #28A4A8;
    height: 30px;
    color: white;
    text-align: left;
}
h#textgeninf{
    color: white;
    margin-left: 10px;
    font-size: 25px;
}
div#test{
    //width: 1300px;
    height: 300px;
    border: 1px solid #000;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
h1 {
    font-size: 3.2em;
    line-height: 1.1;
}

h2#genInf{
    background-color: #28A4A8;
    color:white;

}
button {
    border-radius: 80px;
    border: 1px solid;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #28A4A8;
    cursor: pointer;
    transition: border-color 0.25s;
}

button:focus,
button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

#app {
    padding: 1rem;
    text-align: center;
}

hr{
    margin-left: 0;
}
</style>
