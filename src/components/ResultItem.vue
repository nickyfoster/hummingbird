<template>
    <md-list>
        <md-list-item md-expand v-for="result in results" :key="result.title">
            <!-- <md-icon>whatshot</md-icon> -->
            <span class="md-list-item-text">{{ result.title }}</span>

            <md-list slot="md-expand">
                <md-list-item v-for="child in result.children" :key="child.title" class="md-inset">
                    {{ child.title }}
                </md-list-item>
            </md-list>
        </md-list-item>
    </md-list>
</template>

<script>
    export default {
        name: 'ResultItem',
        props: ['results']
    }

</script>

<style>

</style>
