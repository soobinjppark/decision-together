<template>
    <div id="app">
        <v-app id="inspire">
                <v-container text-xs-center id="contain" fluid>
                    <v-layout justify-center align-center>
                        <v-flex class="display-2 font-weight-light">
                            <blockquote>Part 1: Criteria Pairwise Comparison</blockquote>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-center>
                        <v-flex class="subheading font-weight-light">
                            <blockquote >{{ paragraph1 }}</blockquote>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-center>
                        <v-flex xs3 class="subheading font-weight-light" id="flex">
                            <v-card height="200" elevation="15" id="flex">
                            <div id="five">The five criteria include:</div>
                            <ul>
                                <li>Environmental</li>
                                <li>Economics</li>
                                <li>Social Acceptance</li>
                                <li>Technical Feasibility</li>
                                 <li>Regulatory Acceptance</li>
                            </ul>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-center>
                        <v-flex class="subheading font-weight-light">
                            <blockquote>{{ paragraph2 }}</blockquote>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-center>
                        <v-flex class="subheading font-weight-light">
                            <blockquote>{{ paragraph3 }}</blockquote>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <v-btn router-link to="part1">
                                Next
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>

        </v-app>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            paragraph1: "For this portion of the elicitation, five criteria will be considered using pairwise comparison.  The pairwise comparison will be made with respect to the following question: which criteria is considered more important when evaluating end of life residential MSW systems for Middle Tennessee?",
            paragraph2: "Upon completing each pairwise comparison, the participant is encouraged to provide comments in the comment box to give additional insight to researchers on the reasons the pairwise selection was made.",
            paragraph3: "At any time during the elicitation, the participant may review previously answered questions by selecting a previous question.",
            sector: ''
        }
    }
}
</script>

<style scoped>
div {
    margin-top: 20px;
}
ul {
    display: inline;
    list-style-type: none;
}
.step1 {
    font-size: 40px;
}
#flex {
    margin-top: 10px;
}
</style>

