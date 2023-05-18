<template>
  <div class="content-edges">
      <div>
          <h1>Prescription</h1>
          <h1>Prescription</h1>
      </div>
      <div>
          <data-table>
              <header>

              </header>
              <pv-column>

              </pv-column>
          </data-table>
      </div>

  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "prescriptions",
    components: {PvColumn}
})
</script>

<style scoped>
/*
1. Id
2. Fecha de la prescripción
3. Especialidad médica
4. Médico
5. Estado de cumplimiento

Fecha de la prescripción: Indica cuándo se realizó la prescripción médica.
Nombre del medicamento: Especifica el nombre del medicamento prescrito.
Dosis: Muestra la cantidad y frecuencia en la que se debe tomar el medicamento.
Duración: Indica la duración total de la prescripción, es decir, por cuánto tiempo se debe tomar el medicamento.
Estado de cumplimiento: Puede ser una indicación visual (por ejemplo, un ícono o un color) que muestra si la prescripción ha sido cumplida o está pendiente.
Médico: Muestra el nombre del médico o profesional de la salud que realizó la prescripción.
Condiciones médicas asociadas: Puede ser útil incluir alguna indicación o etiqueta que resuma la razón o condición médica para la cual se hizo la prescripción.
*/
</style>