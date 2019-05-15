<template>
    <div>
        <v-app id="inspire">
            <v-stepper dark v-model="step">
                <v-stepper-header id="stepper">
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
                    
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <Form criteria1="Environmental" criteria2="Economics" :objective="objective" @update="updateStep" @save="saveData" :first="true"/>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <Form criteria1="Environmental" criteria2="Social Acceptance" :objective="objective" @update="updateStep" @save="saveData"/> 
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <Form criteria1="Environmental" criteria2="Technical Feasibility" :objective="objective" @update="updateStep" @save="saveData"/> 
                    </v-stepper-content>
                    <v-stepper-content step="4">
                        <Form criteria1="Environmental" criteria2="Regulatory Acceptance" :objective="objective" @update="updateStep" @save="saveData"/> 
                    </v-stepper-content>
                    <v-stepper-content step="5">
                        <Form criteria1="Economics" criteria2="Social Acceptance" :objective="objective" @update="updateStep" @save="saveData" /> 
                    </v-stepper-content>
                    <v-stepper-content step="6">
                        <Form criteria1="Economics" criteria2="Technical Feasibility" :objective="objective" @update="updateStep" @save="saveData" /> 
                    </v-stepper-content>
                    <v-stepper-content step="7">
                        <Form criteria1="Economics" criteria2="Regulatory Acceptance" :objective="objective" @update="updateStep" @save="saveData" /> 
                    </v-stepper-content>
                    <v-stepper-content step="8">
                        <Form criteria1="Social Acceptance" criteria2="Technical Feasibility" :objective="objective" @update="updateStep" @save="saveData" /> 
                    </v-stepper-content>
                    <v-stepper-content step="9">
                        <Form criteria1="Social Acceptance" criteria2="Regulatory Acceptance" :objective="objective" @update="updateStep" @save="saveData" /> 
                    </v-stepper-content>
                    <v-stepper-content step="10">
                        <Form criteria1="Technical Feasibility" criteria2="Regulatory Acceptance" :objective="objective" :last="true" @update="updateStep" @save="saveData"/> 
                    </v-stepper-content>
                </v-stepper-items>

                </v-stepper>
        </v-app>
    </div>
</template>

<script>
import Form from './Form'
export default {
    name: 'main',
    components: {
        Form
    },
  data() {
    return {
        step: 1,
        index: -1,
        numData: [],
        commentData: [],
        completed: false,
        objective: "Of the two criteria being evaluated, which is considered more important when evaluating end of life residential MSW systems for Middle Tennessee?"

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
        if (this.commentData.length == 10) {
            // eslint-disable-next-line 
            console.log(this.commentData.toString())
            // eslint-disable-next-line 
            console.log(this.numData.toString())
            this.$storedata.part1a = this.numData
            this.$storedata.part1b = this.commentData
            // eslint-disable-next-line 
            console.log(this.$storedata)
            this.$router.push({ name: 'attintro' })
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

