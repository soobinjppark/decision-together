<template>
    <div id="app">
        <v-app id="inspire">
            <v-stepper dark v-model="step" id="stepper">
                <v-stepper-header>
                    <v-stepper-step :complete="step > 1" step="1"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 2" step="2"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 3" step="3"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 4" step="4"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 5" step="5"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 6" step="6"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 7" step="7"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 8" step="8"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 9" step="9"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 10" step="10"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 11" step="11"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 12" step="12"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 13" step="13"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 14" step="14"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 15" step="15"></v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :objective="objective1" @save="saveData" @update="updateStep" :first="true"/>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :objective="objective1" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :objective="objective1" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>1
                    <v-stepper-content step="4">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :objective="objective2" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="5">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :objective="objective2" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="6">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :objective="objective2" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="7">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :objective="objective3" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="8">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :objective="objective3" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="9">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :objective="objective3" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="10">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :objective="objective4" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="11">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :objective="objective4" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="12">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :objective="objective4" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="13">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :objective="objective5" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="14">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :objective="objective5" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="15">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :objective="objective5" @save="saveData" @update="updateStep" last="true"/> 
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-app>
    </div>
</template>

<script>
import Form from './Form'
import db from '@/firebase/init'
export default {
    name: 'part3',
    components: {
        Form
    },
    data() {
        return {
            step: 1,
            index: -1,
            numData: [],
            commentData: [],
            objective1: "Based on the Environmental Criterion, which end of life municipal solid waste system is most preferred?",
            objective2: "Based on the Economics Criterion, which end of life municipal solid waste system is most preferred?",
            objective3: "Based on the Social Acceptance Criterion, which end of life municipal solid waste system is most preferred?",
            objective4: "Based on the Technical Feasibility Criterion, which end of life municipal solid waste system is most preferred?",
            objective5: "Based on the Regulatory Acceptance Criterion, which end of life municipal solid waste system is most preferred?",
            scenarios: ["Scenario 1: Class I Municipal Solid Waste Landfill", "Scenario 2: Waste to Energy Facility with Associated Landfill", "Scenario 3: Municipal Solid Waste Composting with Associated Landfill"]
        }
    },
    methods: {
      updateStep(payload) {
        this.step += payload
        this.index += payload
    },
    saveData(payload1, payload2) {
        //this.numData.push(payload1)
        //this.commentData.push(payload2)
        this.numData[this.index] = payload1
        this.commentData[this.index] = payload2
        if (this.commentData.length == 15) {
            // eslint-disable-next-line 
            console.log(this.commentData.toString())
            // eslint-disable-next-line 
            console.log(this.numData.toString())
            this.$storedata.part3a = this.numData
            this.$storedata.part3b = this.commentData
            // eslint-disable-next-line 
            console.log(this.$storedata)
            db.collection('entries').add({
                email: this.$storedata.email,
                sector: this.$storedata.sector,
                other: this.$storedata.other,
                part1a: this.$storedata.part1a,
                part1b: this.$storedata.part1b,
                part2a: this.$storedata.part2a,
                part2b: this.$storedata.part2b,
                part3a: this.$storedata.part3a,
                part3b: this.$storedata.part3b    
            })
            this.$router.push({ name: 'complete' })
        }
        else {
            // eslint-disable-next-line 
            console.log(this.commentData.toString())
            // eslint-disable-next-line 
            console.log(this.numData.toString())

        }
    }
  }
}
</script>

<style scoped>

div {
    height: auto;
}

#stepper {
    margin-top: 65px;
}
</style>
