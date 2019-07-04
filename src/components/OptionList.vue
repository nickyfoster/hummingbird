<template>
    <div class="list-container">
        <md-checkbox v-for="option in options" :key="option.name"
            v-model="selections"
            :value="option.name"
            @change="toggle(option)"
        >
            {{ option.name }}
        </md-checkbox>
        <div class="other">
            <md-checkbox>
                Other
            </md-checkbox>
            <md-field>
                <!-- <label>asd</label> -->
                <md-input v-model="initial"></md-input>
            </md-field>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OptionsList',
        props: ['options'],
        data() {
            return {
                initial: '',
                selections: []
            };
        },
        methods: {
            toggle(option) {
                this.$emit('change', option);
            }
        }
    }
</script>

<style scoped>
    .list-container {
        display: flex;
        flex-direction: column;
    }
    .other {
        display: flex;
    }
    .md-field {
        transform: translateY(-10px);
    }
    .other input[type="text"] {
        border: 2px solid #eee;
        padding: 0 16px;
    }
</style>
