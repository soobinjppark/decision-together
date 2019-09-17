<template>
    <div id="app">
        <v-app id="inspire" dark>
            <v-container text-xs-center class="first">
                <v-layout justify-center>
                    <v-flex>
                        <h1 class="display-3 font-weight-light">Thank you!</h1>
                        <blockquote>The following are your results from Part 3.</blockquote>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 md7>
                        <v-card color='white' class="rounded-card">
                            <apexchart width="600" type="pie" :options="chartOptions" :series="this.$storedata.part3Calculations"></apexchart>
                        </v-card>

                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>

export default {
    name: 'part3complete',
    data() {
        return {
            chartOptions: {
                labels: ['Scenario 1: Class I Municipal Solid Waste Landfill', 'Scenario 2: Waste to Energy Facility with Associated Landfill', "Scenario 3: Municipal Solid Waste Composting with Associated Landfill"],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom',
                        }
                    }
                }],
                dataLabels: {
                    style: {
                    colors: ['#fff']
                }
            }
        },
        series: this.$storedata.part3Calculations
        }
    },
    created() {
        // eslint-disable-next-line
        console.log(this.$storedata.part3Calculations)
        // eslint-disable-next-line
        console.log("Hello")
    }
}
</script>

<style scoped>
h1 {
    margin-top: 40px;
    margin-bottom: 20px;
}
.rounded-card{
    border-radius:20px;
}
.card-title {
    color: black
}
.first {
    margin-bottom: -200px;
}
</style>

