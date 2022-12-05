<template>
    <div id="chart" class="chartBox mt-5">
        <apexchart type="pie" :options="options" :series="series"></apexchart>
    </div>
</template>
<script>

export default {
    name: 'apex',
    data: function () {
        return {
            options: {
                labels: ['Transport', 'Food', 'Health', 'Entertainment'],
            },
        }
    },
    computed: {
        series() {
            return [this.$store.getters.getTotalPriseTransport, this.$store.getters.getTotalPriseFood, this.$store.getters.getTotalPriseHealth, this.$store.getters.getTotalPriseEntertainment]
        }
    }
};

</script>

<style land="scss" >
.chartBox {
    width: 250px;
    height: 250px;
}

foreignObject {
    height: 150px;
}

svg {
    height: 150px;
}

g {
    width: 100px;
}
</style>