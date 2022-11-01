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
              <input type="text" class="form-control" id="nombre">
            </div>
            <div class="alert alert-danger mt-5" role="alert">
              El evento debe tener un nombre
            </div>
          </div>

          <div class="row mb-3">
            <label for="tipo-evento" class="col-sm-2 col-form-label">Tipo Evento</label>
            <div class="col-sm-10">
              <select for="tipo-evento" class="form-select">
                <option value="1">Marketing</option>
                <option value="2">Recrutamiento</option>
                <option value="3">Taller Educativo</option>
                <option value="3">Congreso</option>
              </select>
            </div>
            <div class="alert alert-danger mt-5" role="alert">
              El tipo de evento no ha sido seleccionado
            </div>
          </div>

          <div class="row mb-3">
            <label for="nombre" class="col-sm-2 col-form-label">Tipo Audiencia</label>
            <div class="col-sm-10">
              <div class="form-check">
                <input name="interna-empleados" class="form-check-input" type="checkbox" value="interna-empleados">
                <label for="interna-empleados">
                  Interna - Empleados
                </label>
              </div>

              <div class="form-check">
                <input name="externa-clientes" class="form-check-input" type="checkbox" value="externa-clientes">
                <label for="externa-clientes">
                  Externa - Clientes
                </label>
              </div>

              <div class="form-check">
                <input name="externa-candidatos" class="form-check-input" type="checkbox" value="externa-candidatos">
                <label for="externa-candidatos">
                  Externa - Candidatos
                </label>
              </div>

            </div>
            <div class="alert alert-danger mt-5" role="alert">
              Al menos un tipo de audiencia debe seleccionarse
            </div>
          </div>

          <div class="mb-3 row">
            <label for="presupuesto" class="col-sm-2 col-form-label">Presupuesto</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="presupuesto">
            </div>
            <div class="alert alert-danger mt-5" role="alert">
              Presupuesto debe ser mayor a cero
            </div>
          </div>

          <div class="mb-3 row">
            <label for="n-audiencia" class="col-sm-2 col-form-label">Audicencia esperada</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="n-audiencia">
            </div>
            <div class="alert alert-danger mt-5" role="alert">
              Audiencia debe ser mayor a cero
            </div>
          </div>

          <div class="row">
            <h3>Fechas de Evento</h3>
          </div>

          <div class="mb-3 row">
            <label for="f-inicio" class="col-sm-2 col-form-label">Fecha Inicio</label>
            <div class="col-sm-10">
              <input type="date" class="form-control" id="f-inicio">
            </div>
          </div>

          <div class="mb-3 row">
            <label for="f-fin" class="col-sm-2 col-form-label">Fecha Fin</label>
            <div class="col-sm-10">
              <input type="date" class="form-control" id="f-fin">
            </div>
          </div>

          <div class="alert alert-danger mt-5" role="alert">
            Fecha de inicio y fin de evento no coinciden
          </div>
        </div>
        <button class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
