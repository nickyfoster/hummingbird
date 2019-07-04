<template>
    <div>
        <p>School is not everything, you know</p>
        <p>
            What do you like to do in your spare time?
            <span class="faint">(Pick any number)</span>
        </p>
        <option-list :options="listOptions" @change="onChange"></option-list>
    </div>
</template>

<script>
    export default {
        name: 'HobbyQuestionsPage',
        data() {
            return {
                listOptions: [
                    {
                        name: 'Drawing',
                        value: false,
                    },
                    {
                        name: 'Sculpting',
                        value: false,
                    },
                    {
                        name: 'Knitting',
                        value: false,
                    },
                    {
                        name: 'RPG',
                        value: false,
                    },
                    {
                        name: 'Computer Games',
                        value: false,
                    },
                    {
                        name: 'Hacking',
                        value: false,
                    },
                    {
                        name: 'Electronics',
                        value: false,
                    },
                    {
                        name: 'Football',
                        value: false,
                    },
                    {
                        name: 'Basketball',
                        value: false,
                    },
                    {
                        name: 'Tennis',
                        value: false,
                    },
                    {
                        name: 'Dancing',
                        value: false,
                    },
                    {
                        name: 'Bicycle Riding',
                        value: false,
                    },
                    {
                        name: 'Horse Riding',
                        value: false,
                    },
                    {
                        name: 'Reading',
                        value: false,
                    },
                    {
                        name: 'Comics',
                        value: false,
                    },
                ]
            };
        },
        methods: {
            onChange(option) {
                const i = this.listOptions.indexOf(option);
                this.listOptions[i].value = !this.listOptions[i].value;
                this.listOptions = this.listOptions.slice();
                console.log('toggle', this.listOptions[i].name, this.listOptions[i].value);
            }
        }
    }
</script>

<style scoped>
    .faint {
        color: darkgray;
    }
</style>
