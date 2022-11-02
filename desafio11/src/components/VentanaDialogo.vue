<template>
  <Teleport to="body">
    <div class="modal fade" v-bind:id="targetId" tabindex="-1" aria-labelledby="ejemploDialogo" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3>{{header}}</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{body}}</p>
        </div>
        <div class="modal-footer">
          <span>{{footer}}</span>
        </div>
      </div>
    </div>
  </div>
</Teleport>
</template>

<script>
export default {
  name: 'VentanaDialogo',
  props: {
    targetId: String,
    header: String,
    body: String,
    footer: String,
  }
}
</script>

<style scoped></style>