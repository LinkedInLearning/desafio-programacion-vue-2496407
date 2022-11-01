<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Nuevo Evento</h5>
        <div class="card-text">
          <div class="row">
            <h3>Información general</h3>
          </div>

          <div class="mb-3 row">
            <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="nombre" v-model="nombre" @blur="blur.nombre = true">
            </div>
            <div class="alert alert-danger mt-5" role="alert" v-if="!nombreValido">
              El evento debe tener un nombre
            </div>
          </div>

          <div class="row mb-3">
            <label for="tipo-evento" class="col-sm-2 col-form-label">Tipo Evento</label>
            <div class="col-sm-10">
              <select for="tipo-evento" class="form-select" v-model="tipoEvento" @blur="blur.tipoEvento = true">
                <option value="1">Marketing</option>
                <option value="2">Recrutamiento</option>
                <option value="3">Taller Educativo</option>
                <option value="3">Congreso</option>
              </select>
            </div>
            <div class="alert alert-danger mt-5" role="alert" v-if="!tipoEventoValido">
              El tipo de evento no ha sido seleccionado
            </div>
          </div>

          <div class="row mb-3">
            <label for="nombre" class="col-sm-2 col-form-label">Tipo Audiencia</label>
            <div class="col-sm-10">
              <div class="form-check">
                <input name="interna-empleados" class="form-check-input" type="checkbox" value="interna-empleados"
                  v-model="tipoAudiencia" @blur="blur.tipoAudiencia = true">
                <label for="interna-empleados">
                  Interna - Empleados
                </label>
              </div>

              <div class="form-check">
                <input name="externa-clientes" class="form-check-input" type="checkbox" value="externa-clientes"
                  v-model="tipoAudiencia" @blur="blur.tipoAudiencia = true">
                <label for="externa-clientes">
                  Externa - Clientes
                </label>
              </div>

              <div class="form-check">
                <input name="externa-candidatos" class="form-check-input" type="checkbox" value="externa-candidatos"
                  v-model="tipoAudiencia" @blur="blur.tipoAudiencia = true">
                <label for="externa-candidatos">
                  Externa - Candidatos
                </label>
              </div>

            </div>
            <div class="alert alert-danger mt-5" role="alert" v-if="!tipoAudienciaValido">
              Al menos un tipo de audiencia debe seleccionarse
            </div>
          </div>

          <div class="mb-3 row">
            <label for="presupuesto" class="col-sm-2 col-form-label">Presupuesto</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="presupuesto" v-model="presupuesto" @blur="blur.presupuesto = true">
            </div>
            <div class="alert alert-danger mt-5" role="alert" v-if="!presupuestoValido">
              Presupuesto debe ser mayor a cero
            </div>
          </div>

          <div class="mb-3 row">
            <label for="n-audiencia" class="col-sm-2 col-form-label">Audicencia esperada</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="n-audiencia" v-model="numeroAudiencia" @blur="blur.numeroAudiencia = true">
            </div>
            <div class="alert alert-danger mt-5" role="alert" v-if="!numAudienciaValido">
              Audiencia debe ser mayor a cero
            </div>
          </div>

          <div class="row">
            <h3>Fechas de Evento</h3>
          </div>

          <div class="mb-3 row">
            <label for="f-inicio" class="col-sm-2 col-form-label">Fecha Inicio</label>
            <div class="col-sm-10">
              <input type="date" class="form-control" id="f-inicio" v-model="fechaInicio" @blur="blur.fechaInicio = true">
            </div>
          </div>

          <div class="mb-3 row">
            <label for="f-fin" class="col-sm-2 col-form-label">Fecha Fin</label>
            <div class="col-sm-10">
              <input type="date" class="form-control" id="f-fin" v-model="fechaFin" @blur="blur.fechaFin = true">
            </div>
          </div>

          <div class="alert alert-danger mt-5" role="alert" v-if="!fechasValidas">
            Fecha de inicio y fin de evento no coinciden
          </div>
        </div>
        <button class="btn btn-primary" :disabled="!activarBoton">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from 'vue'
import moment from 'moment'

const blur = reactive({
  nombre: false,
  tipoEvento: false,
  tipoAudiencia: false,
  presupuesto: false,
  numeroAudiencia: false,
  fechaInicio: false,
  fechaFin: false,
})

const nombre = ref('');
const nombreValido = computed(() => {
  if (!blur.nombre) {
    return true;
  }
  return nombre.value.length > 0
});

const tipoEvento = ref(null);
const tipoEventoValido = computed(() => {
  if (!blur.tipoEvento) {
    return true;
  }
  return tipoEvento.value !== null
});

const tipoAudiencia = ref([]);
const tipoAudienciaValido = computed(() => {
  if (!blur.tipoAudiencia) {
    return true;
  }
  return tipoAudiencia.value.length > 0
});

const presupuesto = ref(null);
const presupuestoValido = computed(() => {
  if (!blur.presupuesto) {
    return true;
  }
  return presupuesto.value !== null
});

const numeroAudiencia = ref(null);
const numAudienciaValido = computed(() => {
  if (!blur.numeroAudiencia) {
    return true;
  }
  return numeroAudiencia.value !== null
});

const fechaInicio = ref(null);
const fechaFin = ref(null);
const fechasValidas = computed(() => {
  if (!blur.fechaInicio || !blur.fechaFin) {
    return true;
  }
  return moment(fechaInicio.value).isBefore(moment(fechaFin.value));
});

const activarBoton = computed(() => (blur.nombre && nombreValido &&
  blur.tipoEvento && tipoEventoValido &&
  blur.tipoAudiencia && tipoAudienciaValido &&
  blur.presupuesto && presupuestoValido &&
  blur.numeroAudiencia && numAudienciaValido)
);

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
