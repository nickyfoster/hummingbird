<template>
    <div class="aspirations">
        <p>Lastly, what would you want to be when you'll grow up?</p>
        <div class="aspirations">
          <md-field>
            <md-textarea v-model="aspirations"></md-textarea>
          </md-field>
        </div>
        <md-button class="md-raised md-button-primary" @click="navigate">Send</md-button>
    </div>
</template>

<script>
    export default {
        name: 'AspirationsQuestionsPage',
        data() {
            return {
                aspirations: ''
            };
        },
        methods: {
          navigate(){
            this.$router.push('/result')
          }
        }
    }
</script>

<style scoped>
    .faint {
        color: darkgray;
    }
</style>
