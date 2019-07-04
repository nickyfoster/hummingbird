<template>
  <div class="loader">
    <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate">
  </div>
</template>

<script>
    export default {
        name: 'Loader',
        props: [],
        data() {
            return {
                initial: '',
            };
        },
        methods: {

        }
    }
</script>

<style scoped>
  .loader {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
  }
</style>
