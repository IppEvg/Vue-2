<template>
    <div id="chart">
        <div type="pie" width="380" :options="chartOptions"></div>
    </div>
</template>
<script>

export default {
    name: 'apexchart',
    data: function () {
        return {
            chartOptions: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        }
    }
}

</script>