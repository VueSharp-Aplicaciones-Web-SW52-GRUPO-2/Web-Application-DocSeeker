<template>
    <div class="doctor">
        <img src= "https://img.freepik.com/vector-gratis/fondo-personaje-doctor_1270-84.jpg?w=826&t=st=1682972494~exp=1682973094~hmac=9ee0b26a67b3bac3b6d8e76dfe63fcf12bc9706264b380cb69b683cbb06bf74f" alt="doctor image" class="doctorImg">
        <div class="info">
            <h3 class="doctorName">{{ doctor.name }}</h3>
            <div class="infoContainer">
                <div class="aboutContainer">
                    <h3 class="doctorArea">{{ doctor.speciality }}</h3>
                    <h3 class="doctorDescription">{{ doctor.description }}</h3>
                </div>
                <div class="seeContainer">
                    <p>See profile</p>
                    <i class="pi pi-angle-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        doctor: {
            type: Object,
            required: true
        }
    }

};
</script>

<style scoped>
.doctor{
    border:solid 1px black;
    border-color: #0093AB;
    border-radius: 20px;
    display:flex;
    flex-direction: row;
    gap:3rem;
    padding:2rem;
    margin: 2rem;
}
.doctorImg{
    width:150px;
    height:150px;
    border-radius: 20px;
    border-color: #0093AB;

}
.info{
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.infoContainer{
    display:flex;
    flex-direction: row;
    gap:4rem
}
.seeContainer{
    display:flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #0093AB;
    border-bottom: 1px solid #0093AB;
}
.doctorName{
    font-size:150%;
    font-weight:bolder;
}
.h3{
    color:blue;
}
@media (max-width: 750px) {
    .doctor, .infoContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .doctorImg{
        width: 50%;
        height: 50%;
    }
}
</style>