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
                        <Form :criteria1="environmental[0]" :criteria2="environmental[1]" :arrayIndex=[0,1] section="a" :objective="objective1" @matrixSection="saveSection" @update="updateStep" @save="saveData" :first="true" :part2="true"/>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <Form :criteria1="environmental[0]" :criteria2="environmental[2]" :arrayIndex=[0,2] section="a" :objective="objective1" @save="saveData" @update="updateStep" :part2="true" /> 
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <Form :criteria1="environmental[1]" :criteria2="environmental[2]" :arrayIndex=[1,2] section="a" :objective="objective1" @save="saveData" @update="updateStep" :part2="true" :saveMatrix="true" @saveComplete="sectionComplete(1)"/> 
                    </v-stepper-content>1
                    <v-stepper-content step="4">
                        <Form :criteria1="economics[0]" :criteria2="economics[1]" :arrayIndex=[0,1] section="b" :objective="objective2" @matrixSection="saveSection" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="5">
                        <Form :criteria1="economics[0]" :criteria2="economics[2]" :arrayIndex=[0,2] section="b" :objective="objective2" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="6">
                        <Form :criteria1="economics[0]" :criteria2="economics[3]" :arrayIndex=[0,3] section="b" :objective="objective2" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="7">
                        <Form :criteria1="economics[1]" :criteria2="economics[2]" :arrayIndex=[1,2] section="b" :objective="objective2" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="8">
                        <Form :criteria1="economics[1]" :criteria2="economics[3]" :arrayIndex=[1,3] section="b" :objective="objective2" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="9">
                        <Form :criteria1="economics[2]" :criteria2="economics[3]" :arrayIndex=[2,3] section="b" :objective="objective2" @save="saveData" @update="updateStep" :part2="true" :saveMatrix="true" @saveComplete="sectionComplete(2)"/> 
                    </v-stepper-content>
                    <v-stepper-content step="10">
                        <Form :criteria1="socialAcceptance[0]" :criteria2="socialAcceptance[1]" :arrayIndex=[0,1] section="c" :objective="objective3" @matrixSection="saveSection" @save="saveData" @update="updateStep" :part2="true" /> 
                    </v-stepper-content>
                    <v-stepper-content step="11">
                        <Form :criteria1="socialAcceptance[0]" :criteria2="socialAcceptance[2]" :arrayIndex=[0,2] section="c" :objective="objective3" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="12">
                        <Form :criteria1="socialAcceptance[1]" :criteria2="socialAcceptance[2]" :arrayIndex=[1,2] section="c" :objective="objective3" @save="saveData" @update="updateStep" :part2="true" :saveMatrix="true" @saveComplete="sectionComplete(3)"/> 
                    </v-stepper-content>
                    <v-stepper-content step="13">
                        <Form :criteria1="techFeasibility[0]" :criteria2="techFeasibility[1]" :arrayIndex=[0,1] section="d" :objective="objective4" @matrixSection="saveSection" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="14">
                        <Form :criteria1="techFeasibility[0]" :criteria2="techFeasibility[2]" :arrayIndex=[0,2] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="15">
                        <Form :criteria1="techFeasibility[0]" :criteria2="techFeasibility[3]" :arrayIndex=[0,3] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="16">
                        <Form :criteria1="techFeasibility[0]" :criteria2="techFeasibility[4]" :arrayIndex=[0,4] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="17">
                        <Form :criteria1="techFeasibility[1]" :criteria2="techFeasibility[2]" :arrayIndex=[1,2] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="18">
                        <Form :criteria1="techFeasibility[1]" :criteria2="techFeasibility[3]" :arrayIndex=[1,3] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="19">
                        <Form :criteria1="techFeasibility[1]" :criteria2="techFeasibility[4]" :arrayIndex=[1,4] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="20">
                        <Form :criteria1="techFeasibility[2]" :criteria2="techFeasibility[3]" :arrayIndex=[2,3] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="21">
                        <Form :criteria1="techFeasibility[2]" :criteria2="techFeasibility[4]" :arrayIndex=[2,4] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="22">
                        <Form :criteria1="techFeasibility[3]" :criteria2="techFeasibility[4]" :arrayIndex=[3,4] section="d" :objective="objective4" @save="saveData" @update="updateStep" :part2="true" :saveMatrix="true" @saveComplete="sectionComplete(4)"/> 
                    </v-stepper-content>
                    <v-stepper-content step="23">
                        <Form :criteria1="regAcceptance[0]" :criteria2="regAcceptance[1]" :arrayIndex=[0,1] section="e" :objective="objective5" @matrixSection="saveSection" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="24">
                        <Form :criteria1="regAcceptance[0]" :criteria2="regAcceptance[2]" :arrayIndex=[0,2] section="e" :objective="objective5" @save="saveData" @update="updateStep" :part2="true"/> 
                    </v-stepper-content>
                    <v-stepper-content step="25">
                        <Form :criteria1="regAcceptance[1]" :criteria2="regAcceptance[2]" :arrayIndex=[1,2] section="e" :objective="objective5" @update="updateStep" @save="saveData" last="true" :part2="true" :saveMatrix="true" @saveComplete="sectionComplete(5)"/> 
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
            currentSection: [],
            currentEigen: [],
            currentLambda: 0,
            currentCI: 0,
            currentCR: 0,
            eigen: [],
            currentArraySize: 0,
            arraySizeA: 3,
            arraySizeB: 4,
            arraySizeC: 3,
            arraySizeD: 5,
            arraySizeE: 3,
            randomIndex: 0,
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
    saveSection(numSection, arraySize, numEigen, lambda, ci, cr) {
          this.currentSection = numSection
          this.currentArraySize = arraySize
          this.currentEigen = numEigen
          this.currentLambda = lambda
          this.currentCI = ci
          this.currentCR = cr
          if (this.currentArraySize == 3) {
              this.randomIndex = 0.58
          } else if (this.currentArraySize == 4) {
              this.randomIndex = 0.9
          } else if (this.currentArraySize == 5) {
              this.randomIndex = 1.12
          }
    },
    calcSum() {
        // Creates vector of sums
        var eigenVector = new Array(this.currentArraySize)
        for (var i = 0; i < this.currentSection.length; i++) {
            var sum = 0
            for (var j = 0; j < this.currentSection[i].length; j++) {
                sum += this.currentSection[j][i]
            }
            eigenVector[i] = sum
        }
        this.eigen = eigenVector
    },
    priorityVector() {
          // Creates deep copy of part1array
          var temp = new Array(this.currentArraySize)
          var pVector = new Array(this.currentArraySize)

          for (var a = 0; a < temp.length; a++) {
              temp[a] = new Array(this.currentArraySize);
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
              pVector[n] = sum / this.currentArraySize
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
            ci = (this.currentLambda - this.currentArraySize) / (this.currentArraySize - 1)
            cr = ci / (this.randomIndex)
            this.currentCI = ci
            this.currentCR = cr
        },
    saveData(payload1, payload2) {
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
    },
    sectionComplete(payload) {
          this.$nextTick(() => {
          this.calcSum()
          this.priorityVector()
          this.calcLambda()
          this.calcConsistency()
          if (payload == 1) {
              this.$storedata.part2eigenA = this.currentEigen
              this.$storedata.part2lambdaA = this.currentLambda  
              this.$storedata.part2ciA = this.currentCI
              this.$storedata.part2crA = this.currentCR
          }
          if (payload == 2) {
              this.$storedata.part2eigenB = this.currentEigen
              this.$storedata.part2lambdaB = this.currentLambda  
              this.$storedata.part2ciB = this.currentCI
              this.$storedata.part2crB = this.currentCR
          }
          if (payload == 3) {
              this.$storedata.part2eigenC = this.currentEigen
              this.$storedata.part2lambdaC = this.currentLambda  
              this.$storedata.part2ciC = this.currentCI
              this.$storedata.part2crC = this.currentCR
          }
          if (payload == 4) {
              this.$storedata.part2eigenD = this.currentEigen
              this.$storedata.part2lambdaD = this.currentLambda
              this.$storedata.part2ciD = this.currentCI
              this.$storedata.part2crD = this.currentCR
          }
          if (payload == 5) {
              this.$storedata.part2eigenE = this.currentEigen
              this.$storedata.part2lambdaE = this.currentLambda
              this.$storedata.part2ciE = this.currentCI
              this.$storedata.part2crE = this.currentCR
              // eslint-disable-next-line
              console.log(this.$storedata)
          }
          // eslint-disable-next-line
          console.log(this.$storedata)

          })
          
      }
  },
  created() {
      var newArray1 = new Array(this.arraySizeA)
      var newArray2 = new Array(this.arraySizeB)
      var newArray3 = new Array(this.arraySizeC)
      var newArray4 = new Array(this.arraySizeD)
      var newArray5 = new Array(this.arraySizeE)
      for (var i = 0; i < this.arraySizeA; i++) {
          newArray1[i] = new Array(this.arraySizeA)
          newArray1[i][i] = 1
      }
      for (var j = 0; j < this.arraySizeB; j++) {
          newArray2[j] = new Array(this.arraySizeB)
          newArray2[j][j] = 1
      }
      for (var k = 0; k < this.arraySizeC; k++) {
          newArray3[k] = new Array(this.arraySizeC)
          newArray3[k][k] = 1
      }
      for (var m = 0; m < this.arraySizeD; m++) {
          newArray4[m] = new Array(this.arraySizeD)
          newArray4[m][m] = 1
      }
      for (var n = 0; n < this.arraySizeE; n++) {
          newArray5[n] = new Array(this.arraySizeE)
          newArray5[n][n] = 1
      }
      this.$storedata.part2arrayA = newArray1
      this.$storedata.part2arrayB = newArray2
      this.$storedata.part2arrayC = newArray3
      this.$storedata.part2arrayD = newArray4
      this.$storedata.part2arrayE = newArray5
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
