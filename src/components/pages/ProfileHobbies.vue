<template>
    <div class="profile-hobbies">
        <md-content class="md-primary">Asperational Image</md-content>

        <md-field>
            <label>Initial Value</label>
            <md-input v-model="job"></md-input>
        </md-field>
    </div>
</template>

<script>
    export default {
        name: 'ProfileHobbies',
        data () {
            return {
                job: 'What would you like to be?'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
    .profile-hobbies {
        display: flex;
    }
    .md-content {
        width: 200px;
        height: 200px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: cornflowerblue;
    }

</style>
