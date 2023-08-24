<script setup lang="ts">
</script>

<template>
  <div class="doc-layout-default">
    <div class="doc-layout-header">
      header
    </div>
    <div class="doc-layout-wrapper">
      <div class="doc-layout-sidebar">
        sidebar
      </div>
      <div class="doc-layout-content">
        <slot />
      </div>
    </div>
  </div>
</template>
