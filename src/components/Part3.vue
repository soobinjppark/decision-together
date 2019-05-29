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
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :arrayIndex=[0,1] section="a" :objective="objective1" @matrixSection="saveSection" @save="saveData" @update="updateStep" :first="true" :part3="true"/>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :arrayIndex=[0,2] section="a" :objective="objective1" @save="saveData" @update="updateStep" :part3="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :arrayIndex=[1,2] section="a" :objective="objective1" @save="saveData" @update="updateStep" :part3="true" :saveMatrix="true" @saveComplete="sectionComplete(1)"/> 
                    </v-stepper-content>
                    <v-stepper-content step="4">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :arrayIndex=[0,1] section="b" :objective="objective2" @matrixSection="saveSection" @save="saveData" @update="updateStep" :part3="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="5">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :arrayIndex=[0,2] section="b" :objective="objective2" @save="saveData" @update="updateStep" :part3="true" /> 
                    </v-stepper-content>
                    <v-stepper-content step="6">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :arrayIndex=[1,2] section="b" :objective="objective2" @save="saveData" @update="updateStep" :part3="true" :saveMatrix="true" @saveComplete="sectionComplete(2)"/> 
                    </v-stepper-content>
                    <v-stepper-content step="7">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :arrayIndex=[0,1] section="c" :objective="objective3" @matrixSection="saveSection" @save="saveData" @update="updateStep" :part3="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="8">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :arrayIndex=[0,2] section="c" :objective="objective3" @save="saveData" @update="updateStep" :part3="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="9">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :arrayIndex=[1,2] section="c" :objective="objective3" @save="saveData" @update="updateStep" :part3="true" :saveMatrix="true" @saveComplete="sectionComplete(3)"/> 
                    </v-stepper-content>
                    <v-stepper-content step="10">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :arrayIndex=[0,1] section="d" :objective="objective4" @matrixSection="saveSection" @save="saveData" @update="updateStep" :part3="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="11">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :arrayIndex=[0,2] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part3="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="12">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :arrayIndex=[1,2] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part3="true" :saveMatrix="true" @saveComplete="sectionComplete(4)"/> 
                    </v-stepper-content>
                    <v-stepper-content step="13">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[1]" :arrayIndex=[0,1] section="e" :objective="objective5" @matrixSection="saveSection" @save="saveData" @update="updateStep" :part3="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="14">
                        <Form :criteria1="scenarios[0]" :criteria2="scenarios[2]" :arrayIndex=[0,2] section="e" :objective="objective5" @save="saveData" @update="updateStep" :part3="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="15">
                        <Form :criteria1="scenarios[1]" :criteria2="scenarios[2]" :arrayIndex=[1,2] section="e" :objective="objective5" @save="saveData" @update="updateStep" last="true" :part3="true" :saveMatrix="true" @saveComplete="sectionComplete(5)"/> 
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
            currentSection: [],
            currentEigen: [],
            currentLambda: 0,
            currentCI: 0,
            currentCR: 0,
            eigen: [],
            randomIndex: 0.58,
            arraySize: 3,
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
      saveSection(numSection, numEigen, lambda, ci, cr) {
          this.currentSection = numSection
          this.currentEigen = numEigen
          this.currentLambda = lambda
          this.currentCI = ci
          this.currentCR = cr
    },
      calcSum() {
        var eigenVector = new Array(this.arraySize)
        for (var i = 0; i < this.currentSection.length; i++) {
            var sum = 0
            for (var j = 0; j < this.currentSection[i].length; j++) {
                sum += this.currentSection[j][i]
            }
            eigenVector[i] = sum
        }
        this.eigen = eigenVector
        // eslint-disable-next-line
        console.log(this.eigen)

    },
      priorityVector() {
          // Creates deep copy of part1array
          var temp = new Array(this.arraySize)
          var pVector = new Array(this.arraySize)

              // eslint-disable-next-line 
                //console.log(this.currentSection)
          for (var a = 0; a < temp.length; a++) {
              temp[a] = new Array(this.arraySize);
              for (var b = 0; b < temp[a].length; b++) {
                  temp[a][b] = this.currentSection[a][b]
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
          for (var n = 0; n < temp.length; n++) {
              var sum = 0
              for (var m = 0; m < temp[n].length; m++) {
                  sum += temp[n][m]
              }
              pVector[n] = sum / this.arraySize
           }
          this.currentEigen = pVector;
          
      },
        calcLambda() {
            var valLambda = 0
            for (var i = 0; i < this.eigen.length; i++) {
                valLambda += this.eigen[i] * this.currentEigen[i]
            }
            this.currentLambda = valLambda
            
        },
        calcConsistency() {
            var ci, cr
            ci = (this.currentLambda - this.arraySize) / (this.arraySize - 1)
            cr = ci / (this.randomIndex)
            this.currentCI = ci
            this.currentCR = cr
        },
        saveData(payload1, payload2) {
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
            this.$router.push({ name: 'complete' })
        }
        else {
            // eslint-disable-next-line 
            console.log(this.commentData.toString())
            // eslint-disable-next-line 
            console.log(this.numData.toString())

        }
    },
      sectionComplete(payload) {
          this.$nextTick(() => {
          this.calcSum()
          this.priorityVector()
          this.calcLambda()
          this.calcConsistency()
          if (payload == 1) {
              this.$storedata.part3eigenA = this.currentEigen
              this.$storedata.part3lambdaA = this.currentLambda  
              this.$storedata.part3ciA = this.currentCI
              this.$storedata.part3crA = this.currentCR

          }
          if (payload == 2) {
              this.$storedata.part3eigenB = this.currentEigen
              this.$storedata.part3lambdaB = this.currentLambda  
              this.$storedata.part3ciB = this.currentCI
              this.$storedata.part3crB = this.currentCR
          }
          if (payload == 3) {
              this.$storedata.part3eigenC = this.currentEigen
              this.$storedata.part3lambdaC = this.currentLambda  
              this.$storedata.part3ciC = this.currentCI
              this.$storedata.part3crC = this.currentCR
          }
          if (payload == 4) {
              this.$storedata.part3eigenD = this.currentEigen
              this.$storedata.part3lambdaD = this.currentLambda
              this.$storedata.part3ciD = this.currentCI
              this.$storedata.part3crD = this.currentCR
          }
          if (payload == 5) {
              this.$storedata.part3eigenE = this.currentEigen
              this.$storedata.part3lambdaE = this.currentLambda
              this.$storedata.part3ciE = this.currentCI
              this.$storedata.part3crE = this.currentCR
              this.saveDatabase()
              // eslint-disable-next-line
              console.log(this.$storedata)
          }

          // eslint-disable-next-line
          console.log(this.$storedata)

          })
          
      },
      saveDatabase() {
          db.collection('entries').add({
                email: this.$storedata.email,
                sector: this.$storedata.sector,
                other: this.$storedata.other,
                part1a: this.$storedata.part1a,
                part1b: this.$storedata.part1b,
                part1eigen: this.$storedata.part1eigen,
                part1lambda: this.$storedata.part1lambda,
                part1ci: this.$storedata.part1ci,
                part1cr: this.$storedata.part1cr,
                part2a: this.$storedata.part2a,
                part2b: this.$storedata.part2b,
                part3a: this.$storedata.part3a,
                part3b: this.$storedata.part3b, 
                part3eigenA: this.$storedata.part3eigenA,
                part3eigenB: this.$storedata.part3eigenB,
                part3eigenC: this.$storedata.part3eigenC,
                part3eigenD: this.$storedata.part3eigenD,
                part3eigenE: this.$storedata.part3eigenE,
                part3lambdaA: this.$storedata.part3lambdaA,
                part3lambdaB: this.$storedata.part3lambdaB,
                part3lambdaC: this.$storedata.part3lambdaC,
                part3lambdaD: this.$storedata.part3lambdaD,
                part3lambdaE: this.$storedata.part3lambdaE,
                part3ciA: this.$storedata.part3ciA,
                part3ciB: this.$storedata.part3ciB,
                part3ciC: this.$storedata.part3ciC,
                part3ciD: this.$storedata.part3ciD,
                part3ciE: this.$storedata.part3ciE,
                part3crA: this.$storedata.part3crA,
                part3crB: this.$storedata.part3crB,
                part3crC: this.$storedata.part3crC,
                part3crD: this.$storedata.part3crD,
                part3crE: this.$storedata.part3crE,
            })
      }
  },
    created() {
      var newArray1 = new Array(this.arraySize)
      var newArray2 = new Array(this.arraySize)
      var newArray3 = new Array(this.arraySize)
      var newArray4 = new Array(this.arraySize)
      var newArray5 = new Array(this.arraySize)
      for (var i = 0; i < newArray1.length; i++) {
          newArray1[i] = new Array(this.arraySize)
          newArray2[i] = new Array(this.arraySize)
          newArray3[i] = new Array(this.arraySize)
          newArray4[i] = new Array(this.arraySize)
          newArray5[i] = new Array(this.arraySize)
          newArray1[i][i] = 1
          newArray2[i][i] = 1
          newArray3[i][i] = 1
          newArray4[i][i] = 1
          newArray5[i][i] = 1
      }
      this.$storedata.part3arrayA = newArray1
      this.$storedata.part3arrayB = newArray2
      this.$storedata.part3arrayC = newArray3
      this.$storedata.part3arrayD = newArray4
      this.$storedata.part3arrayE = newArray5
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
