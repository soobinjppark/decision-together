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
                        <Form criteria1="Environmental" criteria2="Economics" :arrayIndex=[0,1] :objective="objective" @update="updateStep" @save="saveData" :first="true" :part1="true" />
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <Form criteria1="Environmental" criteria2="Social Acceptance" :arrayIndex=[0,2] :objective="objective" @update="updateStep" @save="saveData" :part1="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <Form criteria1="Environmental" criteria2="Technical Feasibility" :arrayIndex=[0,3] :objective="objective" @update="updateStep" @save="saveData" :part1="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="4">
                        <Form criteria1="Environmental" criteria2="Regulatory Acceptance" :arrayIndex=[0,4] :objective="objective" @update="updateStep" @save="saveData" :part1="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="5">
                        <Form criteria1="Economics" criteria2="Social Acceptance" :arrayIndex=[1,2] :objective="objective" @update="updateStep" @save="saveData" :part1="true" /> 
                    </v-stepper-content>
                    <v-stepper-content step="6">
                        <Form criteria1="Economics" criteria2="Technical Feasibility" :arrayIndex=[1,3] :objective="objective" @update="updateStep" @save="saveData" :part1="true" /> 
                    </v-stepper-content>
                    <v-stepper-content step="7">
                        <Form criteria1="Economics" criteria2="Regulatory Acceptance" :arrayIndex=[1,4] :objective="objective" @update="updateStep" @save="saveData" :part1="true" /> 
                    </v-stepper-content>
                    <v-stepper-content step="8">
                        <Form criteria1="Social Acceptance" criteria2="Technical Feasibility" :arrayIndex=[2,3] :objective="objective" @update="updateStep" @save="saveData" :part1="true" /> 
                    </v-stepper-content>
                    <v-stepper-content step="9">
                        <Form criteria1="Social Acceptance" criteria2="Regulatory Acceptance" :arrayIndex=[2,4] :objective="objective" @update="updateStep" @save="saveData" :part1="true" /> 
                    </v-stepper-content>
                    <v-stepper-content step="10">
                        <Form criteria1="Technical Feasibility" criteria2="Regulatory Acceptance" :arrayIndex=[3,4] :objective="objective" :last="true" @update="updateStep" @save="saveData" :part1="true" /> 
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
        arraySize: 5,
        eigen: [],
        randomIndex: 1.12,
        index: -1,
        numData: [],
        someNum: 0,
        commentData: [],
        arrayIndex: [],
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
        this.numData[this.index] = payload1
        this.commentData[this.index] = payload2
        if (this.commentData.length == 10) {
            // eslint-disable-next-line 
            console.log(this.commentData.toString())
            // eslint-disable-next-line 
            console.log(this.numData.toString())
            this.$storedata.part1a = this.numData
            this.$storedata.part1b = this.commentData
            this.$router.push({ name: 'attintro' })
        }
        else {
            // eslint-disable-next-line 
            console.log(this.commentData.toString())
            // eslint-disable-next-line 
            console.log(this.numData.toString())

        }
    },
      calcSum() {
        var eigenVector = new Array(this.arraySize)
        for (var i = 0; i < this.$storedata.part1array.length; i++) {
            var sum = 0
            for (var j = 0; j < this.$storedata.part1array[i].length; j++) {
                sum += this.$storedata.part1array[j][i]
            }
            eigenVector[i] = sum
        }
       this.eigen = eigenVector
        // eslint-disable-next-line 
        console.log(this.$storedata.part1array)
    },
      priorityVector() {
          // Creates deep copy of part1array
          var temp = new Array(this.arraySize)
          for (var a = 0; a < temp.length; a++) {
              temp[a] = new Array(this.arraySize);
              for (var b = 0; b < temp[a].length; b++) {
                  temp[a][b] = this.$storedata.part1array[a][b]
              }
          }
          // Divides each element of matrix by the sum of its column to calculate 
          // normalized relative weight
          for (var i = 0; i < temp.length; i++) {
              for (var j = 0; j < temp[i].length; j++) {
                  temp[j][i] /= this.eigen[i]
              }
          }
          // Calculates normalized principal vector by averaging across the rows
          var pVector = new Array(this.arraySize)
          for (var n = 0; n < temp.length; n++) {
              var sum = 0
              for (var m = 0; m < temp[n].length; m++) {
                  sum += temp[n][m]
              }
              pVector[n] = sum / this.arraySize
           }
          this.$storedata.part1eigen = pVector;
      },
        calcLambda() {
            var valLambda = 0
            for (var i = 0; i < this.eigen.length; i++) {
                valLambda += this.eigen[i] * this.$storedata.part1eigen[i]
            }
            this.$storedata.part1lambda = valLambda
        },
        calcConsistency() {
            var ci, cr
            ci = (this.$storedata.part1lambda - this.arraySize) / (this.arraySize - 1)
            cr = ci / (this.randomIndex)
            this.$storedata.part1ci = ci
            this.$storedata.part1cr = cr
        }
  },
  created() {
      var newArray = new Array(this.arraySize);
      for (var i = 0; i < newArray.length; i++) {
          newArray[i] = new Array(this.arraySize);
          newArray[i][i] = 1
      }
      this.$storedata.part1array = newArray
  },
  beforeDestroy() {
        this.calcSum()
        this.priorityVector()
        this.calcLambda()
        this.calcConsistency()
        // eslint-disable-next-line 
        console.log(this.$storedata)
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

