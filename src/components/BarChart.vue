<script>
import { Bar, HorizontalBar, mixins } from 'vue-chartjs';

export default {
    // extends: Bar,
    extends: HorizontalBar,
    mixins: [mixins.reactiveProp],
    name: 'BarChart',
    props: ['chartData'],
    mounted() {
        const options = {
            // onClick: (e) => console.log(e)
            legend: {
                display: false,
            },
        };
        this.renderChart(this.chartData, options);
    }
}
</script>

<style scope>

</style>
