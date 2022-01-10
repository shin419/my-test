<script>
import { Bar } from "vue-chartjs";
// const { reactiveProp } = mixins
export default {
  extends: Bar,
  // mixins: [reactiveProp],
  props: ['data', 'time'],
  watch: {
    time () {
      this.renderChart(this.data, { responsive: true, maintainAspectRatio: false });
    }
  },
  mounted() {
    this.renderChart(this.data, { responsive: true, maintainAspectRatio: false });
  }
};
</script>
