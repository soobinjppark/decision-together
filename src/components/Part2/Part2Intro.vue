<template>
    <div id="app">
        <v-app id="inspire">
            <v-container text-xs-center>
                <v-layout justify-center align-center>
                    <v-flex class="display-2 font-weight-light">
                        <blockquote> {{ title }} </blockquote>
                    </v-flex>
                </v-layout>
                <v-layout justify-center align-center id="quote">
                    <v-flex class="subheading font-weight-light">
                        <blockquote>{{ paragraph1 }}  </blockquote>
                    </v-flex>
                </v-layout>
                <v-layout justify-center align-center id="quote" mt-0>
                    <v-flex v-for="attribute in attributes" class="subheading font-weight-light" xs4 ma-1 v-bind:key="attribute.id">
                        <v-card xs2 ma-3 height="430px">
                            <v-card-title> {{ attribute.criteria }}:</v-card-title>
                            <v-card-text>
                                <v-list id="list">
                                    <v-list-tile v-for="att in attribute.atts" v-bind:key="att.id">
                                        <v-list-tile-content id="attfont">
                                            {{ att }}

                                        </v-list-tile-content>
                                        
                                    </v-list-tile>
                                    
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout justify-center align-center id="quote">
                    <v-flex class="subheading font-weight-light">
                        <blockquote>{{ paragraph2 }}  </blockquote>
                    </v-flex>
                </v-layout>
                <v-layout justify-center align-center id="quote">
                    <v-flex class="subheading font-weight-light">
                        <blockquote>{{ paragraph3 }}  </blockquote>
                    </v-flex>
                </v-layout>
                <v-layout justify-center align-center id="button">
                    <v-flex>
                        <v-btn router-link to="part2">Start</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>
export default {
    name: 'attributeintro',
    data() {
        return {
            title: "Part 2: Attribute Pairwise Evaluation",
            paragraph1: "For this portion of the evaluation, the attributes of the five criteria will be evaluated using pairwise comparison.  This process will aid in providing understanding on the prioritization of the attributes with respect to evaluation of end of life MSW systems.  The pairwise comparison will be made with respect to the following question: Which attribute is considered more important when evaluating the criteria for considering MSW systems for Middle Tennessee?",
            paragraph2: "Upon completing each pairwise comparison, the participant is encouraged to provide comments in the provided comment box to provide additional insight to the reasons the pairwise selection was made.",
            paragraph3: "At any time during the elicitation, the participant may review previously answered questions by selecting a previous question.",
            attributes: [
                {criteria: 'Environmental', atts: ['Impacts to air', 'Impacts to water', 'Impacts to land']},
                {criteria: 'Economics', atts: ['Capital Investments', 'Operations and maintenance', 'Economic incentives for communities', 'Property values around facility']},
                {criteria: 'Social Acceptance', atts: ['Employment', 'Noise/Order', 'Ease of removal and management of MSW']},
                {criteria: 'Technical Feasibility', atts: ['Availability of land/land use', 'Energy efficiency', 'Distance from community', 'Beneficial resource conservation', 'Available infrastructure']},
                {criteria: 'Regulatory Acceptance', atts: ['Applicable regulations', 'Presence of permitting system', 'Zoning limitations']}

            ]
        }
    }
}
</script>

<style scoped>
#quote {
    margin-top: 30px;
}
#button {
    margin-top: 30px;
}
div {
    margin-top: 18px;
}
#list {
    margin-top: -30px;
}
#attfont {
    font-weight: lighter;
}
</style>
