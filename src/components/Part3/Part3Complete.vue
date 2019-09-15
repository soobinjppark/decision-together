<template>
    <div id="app">
        <v-app id="inspire" dark>
            <v-container text-xs-center>
                <v-layout justify-center>
                    <v-flex>
                        <h1 class="display-3 font-weight-light">Thank you!</h1>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 md7>
                        <v-card color='white' class="rounded-card">
                            <apexchart width="600" type="pie" :options="chartOptions" :series="this.$storedata.part3eigenScale[0]"></apexchart>
                        </v-card>
                        <v-card color='white' class="rounded-card">
                            <apexchart width="600" type="pie" :options="chartOptions" :series="this.$storedata.part3eigenScale[1]"></apexchart>
                        </v-card>
                        <v-card color='white' class="rounded-card">
                            <apexchart width="600" type="pie" :options="chartOptions" :series="this.$storedata.part3eigenScale[2]"></apexchart>
                        </v-card>
                        <v-card color='white' class="rounded-card">
                            <apexchart width="600" type="pie" :options="chartOptions" :series="this.$storedata.part3eigenScale[3]"></apexchart>
                        </v-card>
                        <v-card color='white' class="rounded-card">
                            <apexchart width="600" type="pie" :options="chartOptions" :series="this.$storedata.part3eigenScale[4]"></apexchart>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>

        </v-app>
    </div>
</template>

<script>
export default {
    name: 'complete',
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
        }
        }
    },
    created() {
        // eslint-disable-next-line
        console.log(this.$storedata.part3eigenScale[0])
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
</style>

