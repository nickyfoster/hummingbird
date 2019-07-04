<template>
    <div>
        <p>Let's get to know you better</p>
        <p>
            What are your favorite subjects at school?
            <span class="faint">(Pick any number)</span>
        </p>
        <option-list :options="listOptions" @change="onChange"></option-list>
    </div>
</template>

<script>
    export default {
        name: 'SchoolQuestionsPage',
        data() {
            return {
                listOptions: [
                    {
                        name: 'Finnish',
                        value: false,
                    },
                    {
                        name: 'Swedish',
                        value: false,
                    },
                    {
                        name: 'English',
                        value: false,
                    },
                    {
                        name: 'Math',
                        value: false,
                    },
                    {
                        name: 'Physics',
                        value: false,
                    },
                    {
                        name: 'Chemistry',
                        value: false,
                    },
                    {
                        name: 'Biology',
                        value: false,
                    },
                    {
                        name: 'Geography',
                        value: false,
                    },
                    {
                        name: 'History',
                        value: false,
                    },
                    {
                        name: 'Social Studies',
                        value: false,
                    },
                    {
                        name: 'Religion',
                        value: false,
                    },
                    {
                        name: 'Home Economics',
                        value: false,
                    },
                    {
                        name: 'Physical Education',
                        value: false,
                    },
                    {
                        name: 'Textile Work',
                        value: false,
                    },
                    {
                        name: 'Metal Work / Woodwork',
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
