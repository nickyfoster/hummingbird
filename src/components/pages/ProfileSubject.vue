<template>
    <div class="profile-subject">
        <md-steppers md-alternative :md-active-step.sync="active">
            <md-step id="first">
                <school-questions-page></school-questions-page>
                <md-button class="md-raised btnRight" @click="setDone('first', 'second')">
                    Next
                </md-button>
            </md-step>

            <md-step id="second">
                <hobby-questions-page></hobby-questions-page>
                <md-button class="md-raised btnRight" @click="setDone('second', 'third')">
                    Next
                </md-button>
            </md-step>

          <md-step id="third">
              <aspiration-questions-page></aspiration-questions-page>
          </md-step>
        </md-steppers>
    </div>
</template>

<script>
    import SchoolQuestionsPage from './SchoolQuestionsPage';
    import HobbyQuestionsPage from './HobbyQuestionsPage';
    import AspirationQuestionsPage from './AspirationQuestionsPage';

    export default {
        name: 'ProfileSubject',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                active: 'first'
            };
        },
        methods: {
            setDone (id, index) {
                this[id] = true

                this.secondStepError = null

                if (index) {
                    this.active = index
                }
                window.scrollTo(0, 0);
            },
        },
        components: {
            SchoolQuestionsPage,
            HobbyQuestionsPage,
            AspirationQuestionsPage
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btnRight {
    float: right;
}
</style>
