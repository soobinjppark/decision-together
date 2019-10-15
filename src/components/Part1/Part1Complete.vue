<template>
    <div id="app">
        <v-app id="inspire">
            <v-container text-xs-center>
                <v-layout justify-center>
                    <v-flex>
                        <h1 class="display-3 font-weight-light">Thank you!</h1>
                        <v-btn router-link to="part-2-intro">Continue</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 md7>
                        <v-card color='white' class="rounded-card">
                            <v-card-title class="title card-title">Part 1 Results</v-card-title>
                            <apexchart width="600" type="pie" :options="chartOptions" :series="this.$storedata.part1eigenScale"></apexchart>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>

        </v-app>
    </div>
</template>

<script>
export default {
    name: 'part1complete',
    data() {
        return {
            chartOptions: {
                labels: ['Environmental', 'Economics', 'Social Acceptance', 'Technical Feasibility', 'Regulatory Acceptance'],
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
            series: this.$storedata.part1eigenScale
        }
    },
    created() {
        // eslint-disable-next-line
        console.log(this.$storedata.part1eigenScale)
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
</style>

