<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps(['code'])
onMounted(() => {
  window.hljs.highlightAll()
})
</script>

<template>
  <div>
    <div>demo</div>
    <slot />
    <div>
      <pre class="language-html">
        <code>
          {{ props.code }}
        </code>
      </pre>
    </div>
  </div>
</template>
