<template>
  <div class="profilesubject">
    <label class="title">First of all, lets ask some questions</label>
     <md-field>
      <label>How old are you? </label>
      <md-input v-model="age" type="number"/>
    </md-field>
    <md-field>
      <label>Where do you live</label>
      <md-input v-model="city" type="text"/>
    </md-field>

    <md-button class="md-button-primary md-raised profile-path" @click="navigate">Next</md-button>
  </div>
</template>

<script>
export default {
  name: 'ProfileBackground',
  data () {
    return {
      age: null,
      city: null
    }
  },
  props: ['onClick'],
  methods: {
    navigate(){
      window.store.set('user.city', this.city)
      this.$router.push('/profile/subjects')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    margin: 1rem 0 2rem;
    display: block;
  }
</style>
