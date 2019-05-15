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
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 16" step="16"></v-stepper-step>  
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 17" step="17"></v-stepper-step>  
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 18" step="18"></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 19" step="19"></v-stepper-step> 
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 20" step="20"></v-stepper-step> 
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 21" step="21"></v-stepper-step> 
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 22" step="22"></v-stepper-step> 
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 23" step="23"></v-stepper-step> 
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 24" step="24"></v-stepper-step> 
                    <v-divider></v-divider>
                    <v-stepper-step :complete="step > 25" step="25"></v-stepper-step> 
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <Form :criteria1="environmental[0]" :criteria2="environmental[1]" :objective="objective1" @update="updateStep" @save="saveData" :first="true"/>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <Form :criteria1="environmental[0]" :criteria2="environmental[2]" :objective="objective1" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <Form :criteria1="environmental[1]" :criteria2="environmental[2]" :objective="objective1" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>1
                    <v-stepper-content step="4">
                        <Form :criteria1="economics[0]" :criteria2="economics[1]" :objective="objective2" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="5">
                        <Form :criteria1="economics[0]" :criteria2="economics[2]" :objective="objective2" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="6">
                        <Form :criteria1="economics[0]" :criteria2="economics[3]" :objective="objective2" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="7">
                        <Form :criteria1="economics[1]" :criteria2="economics[2]" :objective="objective2" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="8">
                        <Form :criteria1="economics[1]" :criteria2="economics[3]" :objective="objective2" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="9">
                        <Form :criteria1="economics[2]" :criteria2="economics[3]" :objective="objective2" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="10">
                        <Form :criteria1="socialAcceptance[0]" :criteria2="socialAcceptance[1]" :objective="objective3" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="11">
                        <Form :criteria1="socialAcceptance[0]" :criteria2="socialAcceptance[2]" :objective="objective3" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="12">
                        <Form :criteria1="socialAcceptance[1]" :criteria2="socialAcceptance[2]" :objective="objective3" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="13">
                        <Form :criteria1="techFeasibility[0]" :criteria2="techFeasibility[1]" :objective="objective4" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="14">
                        <Form :criteria1="techFeasibility[0]" :criteria2="techFeasibility[2]" :objective="objective4" @save="saveData" @update="updateStep" /> 
                    </v-stepper-content>
                    <v-stepper-content step="15">
                        <Form :criteria1="techFeasibility[0]" :criteria2="techFeasibility[3]" :objective="objective4" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="16">
                        <Form :criteria1="techFeasibility[0]" :criteria2="techFeasibility[4]" :objective="objective4" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="17">
                        <Form :criteria1="techFeasibility[1]" :criteria2="techFeasibility[2]" :objective="objective4" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="18">
                        <Form :criteria1="techFeasibility[1]" :criteria2="techFeasibility[3]" :objective="objective4" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="19">
                        <Form :criteria1="techFeasibility[1]" :criteria2="techFeasibility[4]" :objective="objective4" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="20">
                        <Form :criteria1="techFeasibility[2]" :criteria2="techFeasibility[3]" :objective="objective4" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="21">
                        <Form :criteria1="techFeasibility[2]" :criteria2="techFeasibility[4]" :objective="objective4" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="22">
                        <Form :criteria1="techFeasibility[3]" :criteria2="techFeasibility[4]" :objective="objective4" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="23">
                        <Form :criteria1="regAcceptance[0]" :criteria2="regAcceptance[1]" :objective="objective5" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="24">
                        <Form :criteria1="regAcceptance[0]" :criteria2="regAcceptance[2]" :objective="objective5" @save="saveData" @update="updateStep"/> 
                    </v-stepper-content>
                    <v-stepper-content step="25">
                        <Form :criteria1="regAcceptance[1]" :criteria2="regAcceptance[2]" :objective="objective5" @update="updateStep" @save="saveData" last="true"/> 
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-app>
    </div>
</template>

<script>
import Form from './Form'
export default {
    name: 'part2',
    components: {
        Form
    },
    data() {
        return {
            step: 1,
            index: -1,
            numData: [],
            commentData: [],
            objective1: "Of the attributes of the Environmental Criterion being evaluated, which is considered more important when evaluating end of life residential MSW systems for Middle Tennessee?",
            objective2: "Of the attributes of the Economics Criterion being evaluated, which is considered more important when evaluating end of life residential MSW systems for Middle Tennessee?",
            objective3: "Of the attributes of the Social Acceptance Criterion being evaluated, which is considered more important when evaluating end of life residential MSW systems for Middle Tennessee?",
            objective4: "Of the attributes of the Technical Feasibility Criterion being evaluated, which is considered more important when evaluating end of life residential MSW systems for Middle Tennessee?",
            objective5: "Of the attributes of the Regulatory Acceptance Criterion being evaluated, which is considered more important when evaluating end of life residential MSW systems for Middle Tennessee?",
            environmental: ["Impacts to air", "Impacts to water", "Impacts to land"],
            economics: ["Capital investments", "Operations and maintenance", "Economic incentives for communities", "Property values around facility"],
            socialAcceptance: ["Employment", "Noise/odor", "Ease of removal and management of MSW"],
            techFeasibility: ['Availability of land/land use', "Energy efficiency", "Distance from community/transfer station", "Beneficial reuse/resource conservation", "Available infrastructure"],
            regAcceptance: ['Applicable regulations', 'Presence of permitting system', 'Zoning limitations']
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
        if (this.commentData.length == 25) {
            // eslint-disable-next-line 
            console.log(this.commentData.toString())
            // eslint-disable-next-line 
            console.log(this.numData.toString())
            this.$storedata.part2a = this.numData
            this.$storedata.part2b = this.commentData
            // eslint-disable-next-line 
            console.log(this.$storedata)
            this.$router.push({ name: 'altintro' })
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
