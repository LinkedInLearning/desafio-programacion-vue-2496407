<template>
  <Teleport to="body">
    <div class="modal fade" v-bind:id="targetId" tabindex="-1" aria-labelledby="ejemploDialogo" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
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
    targetId: String
  }
}
</script>

<style scoped></style>