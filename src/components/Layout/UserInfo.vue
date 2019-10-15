<template>
    <div id="app">
        <v-app id="inspire">
            <v-container text-xs-center fluid>
                <v-layout justify-center align-center>
                    <v-flex class="display-2 font-weight-light">
                        <blockquote>General Informationn</blockquote>
                    </v-flex>
                </v-layout>
                <v-layout justify-center align-center>
                    <v-flex xs4 class="subheading font-weight-light">
                        <blockquote>Tell us about yourself!</blockquote>
                    </v-flex>
                </v-layout>
                <v-layout justify-center>
                <v-flex xs5>
                <v-card>
                <v-layout justify-center> 
                    <v-flex xs5 sm7>
                        <v-text-field v-model="email" label="E-mail" required>
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout justify-center>
                    <v-flex xs5 sm7>
                        <v-select v-model="sector" :items="items" label="Sector">
                        </v-select>
                    </v-flex>
                </v-layout>
                <v-layout justify-center>
                    <v-flex xs5 sm7>
                        <v-text-field v-model="other" label="Other" required> 
                                 
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex>
                        <v-btn @click="saveData" id="button">
                                Submit
                        </v-btn>
                    </v-flex>
                </v-layout>
                </v-card>
                </v-flex>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>
export default {
    name: 'userinfo',
    data() {
        return {
            items: ['General Public (non-solid waste stakeholder)', 'Regulator', 'Country/City Government Official', 'Solid Waste Authority/County Solid Waste Director and/or Operator', 'Academic', 'Corporate Landfill Manager/Operator', 'Other'],
            sector: '',
            email: '',
            other: ''
        }
    },
    methods: {
        saveData() {
            this.$storedata.email = this.email
            this.$storedata.sector = this.sector
            this.$storedata.other = this.other
            this.$router.push({ name: 'part-1-intro' })
        }
    }
}
</script>

<style scoped>
div {
    margin-top: 18px;
}
#button {
    margin-bottom: 20px;
}
</style>
