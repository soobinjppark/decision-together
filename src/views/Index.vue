<template>
  <div class="index">
    <v-app id="inspire">
      <v-container fluid>
        <v-layout text-xs-center row wrap>
          <v-flex xs10 offset-xs1>
            <blockquote id="title" class="display-3 font-weight-light">
              Welcome to Decision Together! 
            </blockquote>
            <p> {{paragraph1}} </p>
            <p> {{paragraph2}} </p>
            <p> {{paragraph3}} </p>
            <p> {{paragraph4}} </p>
            <p> {{paragraph5}} </p>
            <p> {{paragraph6}} </p>
            
          </v-flex>
        <v-flex xs10 offset-xs1>
          <v-btn router-link to="userinfo" class="start" id="start">
            Start!
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
      paragraph1: "Thank you for your participation in this elicitation.  This evaluation will support the research that Andrea Resch Gardiner is doing for her doctoral studies. The results will be published for academic purposes in her dissertation as well as scientific journals. This research investigates the integration of Life Cycle Assessment (LCA) and Analytical Hierarchy Process (AHP) to evaluate stakeholder prioritization for end of life waste management for municipal solid waste (MSW) in Middle Tennessee.  The results will be used to evaluate areas of stakeholder consensus and disagreement.",
      paragraph2: "The goal of this evaluation is to determine which end of life residential MSW management system should be implemented for Middle Tennessee communities.  As the current regional landfill will close in 5-8 years, Middle Tennessee counties and cities are evaluating future alternatives for MSW management.  To evaluate this goal, AHP will be used to compare criteria and scenarios against the goal to identify areas of consensus and disagreement between diverse stakeholders while using pairwise comparison.",
      paragraph3: "This elicitation consists of 3 parts.  The first part will require the participant to use pairwise comparison to evaluate the developed criteria with respect to the question: which is considered more important when evaluating end of life residential MSW systems for Middle Tennessee?  Part Two involves the pairwise comparison of the attributes for each criterion to answer the same question as above.  Part Three involves the pairwise comparison of three selected alternatives with respect to the criteria with respect to the questions: which end of life municipal solid waste system is most preferred?",
      paragraph4: "Pairwise comparison will involve sliding the scale towards the preferred option to the degree that the option is preferred.  Refer to the 2 page handout for additional information on the pairwise numerical and verbal scale.  Answers can be reviewed by navigating back through the web application.",
      paragraph5: "Once the comparison is complete, there is an opportunity to provide comments on why the selection was made.  Comments are encouraged to inform the research on the thoughts behind the provided judgments.",
      paragraph6: "Should you have any questions during your participation in this study, please contact Andrea Gardiner at andrea.r.gardiner@vanderbilt.edu."
    }
  }
}
</script>


<style scoped>

#title{
  margin-bottom: 25px;
}
div {
  margin-top: 18px;
}
</style>
