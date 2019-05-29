<template>
    <div id="app">
        <v-app id="inspire" dark>
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
                        <v-card xs2 ma-3 height="200px">
                            <v-card-title> {{ attribute.criteria }}:</v-card-title>
                            <v-card-text>
                                <v-list id="list">
                                    <v-list-tile>
                                        <v-list-tile-content id="attfont">
                                            {{ attribute.atts }}

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
                <v-layout justify-center align-center id="quote">
                    <v-flex class="subheading font-weight-light">
                        <blockquote>{{ paragraph4 }}  </blockquote>
                    </v-flex>
                </v-layout>
                <v-layout justify-center align-center id="button">
                    <v-flex>
                        <v-btn router-link to="part3">Start</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>
export default {
    name: 'alternativeintro',
    data() {
        return {
            title: "Part 3: Scenario Pairwise Comparison",
            paragraph1: "For this portion of the evaluation, three scenarios will be considered using pairwise comparison.  The comparisons will be made based on the question: which end of life municipal solid waste system is most preferred?",
            paragraph2: "All scenarios assume that collection of MSW from residential locations utilize standard side and rear collection trucks.  Once trucks are full, waste is transported to transfer station within the metropolitan area.  At the transfer station, collection trucks dump MSW on the tipping floor.  MSW is then loaded into trailers for transport to end of life management facility.  The transfer facility is completely enclosed, and any leachate produced is pumped to a municipal wastewater treatment facility for additional treatment.  Upon loading the MSW into trailers, it is transported by truck to the end of life management facility.  It is assumed that the end of life management facility is located no more than 30 miles from the transfer station.",
            paragraph3: "Upon completing each pairwise comparison, the participant is encouraged to provide comments in the provided comment box to provide additional insight to the reasons the pairwise selection was made.",
            paragraph4: "At any time during the elicitation, the participant may review previously answered questions by selecting a previous question.",
            attributes: [
                {criteria: 'Scenario 1', atts: 'Class I MSW landfill facility'},
                {criteria: 'Scenario 2', atts: 'Waste to energy facility with associated landfill'},
                {criteria: 'Scenario 3', atts: 'MSW composting facility with associated landfill'}
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
