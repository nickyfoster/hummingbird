<template>
  <div id="app">
    <Layout>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'
export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style>
#app {
    min-height: 100vh;
}
/* child selectors here to override specificity from the framework*/
#app .md-input {
  border-bottom: 1px solid #eee;
}
#app .md-focused .md-input {
  border-bottom-color: tomato;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
/* #app .md-button-primary {
  background: #15B2A8;
  color: white;
} */
.md-checkbox-container {
    border-radius: 50% !important;
}
  #app textarea {
    border: 1px solid #eee;
  }
  .md-dialog {
    height: 100%!important;
    width: 100%!important;
    max-height: 100%!important;
    max-width: 100%!important;
  }
/**/
   .md-content{
   height: auto!important;
 }
 .md-title {
  color: white!important;
 }
    /* Result list parent color */
    .md-list.md-theme-default .md-list-item-container:not(.md-list-item-default):not([disabled]):hover {
        background-color: #FBE86F !important;
    }
</style>
