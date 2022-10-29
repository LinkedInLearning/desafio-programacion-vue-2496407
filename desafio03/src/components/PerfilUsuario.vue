<template>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">{{$props.perfil.perfil.nombre}}</h5>
    <div class="card-text">
      <p><span class="fw-bold">Correo electrónico: </span>{{$props.perfil.email}}</p>
      <p><span class="fw-bold">Dirección: </span>{{$props.perfil.perfil.direccion}}</p>
      <p><span class="fw-bold">Acerca: </span>{{$props.perfil.perfil.acerca}}</p>
    </div>
    <a href="#" class="btn btn-primary">Contactar</a>
  </div>
</div>
  </template>
  
  <script>
  export default {
    props: ['perfil']
  }
  </script>