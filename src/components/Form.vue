<template>
<div id="app">
  <v-app>
    <v-form>
      <v-container text-xs-center>
        <v-layout justify-center>
            <v-flex xs10 md7>
              <v-card> 
                <v-card-text v-ripple> 
                  {{ objective }}
                </v-card-text>
              </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-center justify-space-around>
              <v-flex xs12 md4>
                  <v-card>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-card-text v-ripple class="px-12" v-on="on">{{ criteria1 }}</v-card-text>
                      </template>
                      <span>{{ criteria[criteria1] }}</span>
                    </v-tooltip>
                  </v-card>
              </v-flex>
              <v-flex xs12 md4>
                  <v-card>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-card-text v-ripple class="px-12" v-on="on">{{ criteria2 }}</v-card-text>
                      </template>
                      <span>{{ criteria[criteria2] }}</span>
                    </v-tooltip>
                  </v-card>
              </v-flex>
              <v-flex xs10>
                <v-card class="slide"> 
                    <v-card-text>
                        <v-slider v-model="scale" :tick-labels="rangeValues" always-dirty thumb-label :max="16" ticks="always" tick-size="2">
                          <template v-slot:thumb-label="props" :thumb-size="350">
                            <span id="text">{{ values(props.value) }}</span>
                          </template>
                        </v-slider>
                    </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs10>
                <v-textarea name="input-7-1" box label="Comments" v-model="comment" auto-grow></v-textarea>
              </v-flex>  
              <v-flex xs10>   
              
              <v-btn v-if="!first" @click="decrem">Previous</v-btn>   
              <v-btn v-if="!last" @click="increm(); passData();">Next</v-btn>
              <v-btn v-if="last" @click="increm(); passData(); finish();">Submit</v-btn>
              </v-flex>
            </v-layout>
      </v-container>
    </v-form>
  </v-app>
</div>
</template>

<script>
//import { finished } from 'stream';

export default {
  name: 'Form',
  props: ['criteria1', 'criteria2', 'objective', 'first', 'last', 'last1', 'last2', 'last3'],
  data() {
    return {
      rangeValues: [9, null, 7, null, 5, null, 3, null, 1, null, 3, null, 5, null, 7, null, 9],
      scale: 8,
      comment: '',
      criteria: {
            "Environmental":"The Environmental Criterion involves the potential environmental impacts to air, water and land as a result from an MSW management system.  The environmental impacts are based on the emissions from daily and long term facility operations.  The attributes include impacts to air, water and land.  Potential air impacts include potential emissions such as methane, global warming potential emissions (carbon dioxide - fossil, methane, nitrogen oxides, sulfur oxides, ammonia (air), hydrochloric acid), lead, particulate matter, inorganics, etc.  Potential water impacts include inorganics, biological oxygen demand (BOD), chemical oxygen demand (COD), ammonia, and phosphate. Water impacts may affect both surface water and groundwater.  Land impacts include elements which can affect the potential future land use and development, such as long term onsite disposal or impacts that cause contamination to surface and subsurface soils.",
            "Economics":"The Economics Criterion involves the financial elements involved with the short and long term operations of the MSW management system.  The attributes of the criteria include capital investments, operations and maintenance costs necessary for day to day operations of the facility and infrastructure, economic incentives that may be provide to communities located in the vicinity of the facility, and property values of land located around the facility.", 
            "Social Acceptance":"The Social Acceptance Criterion involves the impact that a facility may have on a community.  Attributes of Social Acceptance include: employment, location within community, noise/odor, and ease of removal and management of MSW.  Employment includes the potential for long term jobs for community members.  Location within the community involves the proximity of the facility to residential areas, whether urban or rural.  Noise/odor involves the potential nuisances that can occur from facility operation that may impact residents living in the vicinity of the facility.  Ease of removal and management of MSW involves the ability of the scenario to managed MSW in such a way that it does not impact the community’s ability to have MSW managed in terms of current MSW operations.", 
            "Technical Feasibility":"The Technical Feasibility Criterion considers of several attributes such as the availability of land/land use, energy efficiency, distance from community/ transfer station, beneficial reuse/resource conservation, and available infrastructure.  The availability of land and the current use of land is considered during siting and operation of the facility.  After the facility ceases operations, future land use needs to be considered.  Energy efficiency involves the net gain or loss of energy during short and long term operations.  In order to site a facility, factors must be considered such as its distance from the community it will service and its distance from the transfer station to ensure that transportation options are available.  In addition, there must be consideration of available infrastructure such as electrical connections, roads, structures, etc. necessary to operate the facility.", 
            "Regulatory Acceptance":"The Regulatory Acceptance criterion considers the ability for a facility to be sited in the state, county, and city.  Attributes of this criteria include applicable regulations, presence of permitting system, and zoning limitations.  Applicable regulations refer to the existence of current regulations appropriate for permitting the facility.  The presence of a permitting system refers to the existence of a regulatory authority and process which can review engineering plans and permitting documents to allow for the issuing of permits.  Zoning limitations refer to the ability to site a facility without being hindered by zoning approval processes such as the Jackson Law.",
            "Scenario 1: Class I Municipal Solid Waste Landfill": "This scenario involves MSW being disposed of in a Class I Landfill.  Once the MSW has arrived at the facility it is dumped from trailers onto to the landfill working face, where it is compacted and covered per regulations.  Operations include the management of leachate and landfill gas, as well as placement of daily and intermediate, as well as long term closure of the waste areas as necessary.  Upon closure of the facility, long term management includes the collection of landfill leachate and gas per regulatory requirements.  This also includes maintenance of the facility to maintain existing structures such as collection systems and cap/cover.  It is assumed that the landfill has a minimum 20-year post closure period.",
            "Scenario 2: Waste to Energy Facility with Associated Landfill": "This scenario involves MSW being processed in a waste to energy facility to produce steam and electricity.  MSW is brought to the facility where it is processed and sorted prior to incineration.  The facility produces steam and electricity for use.  Residual, non-combustible material, and ash is disposed at an onsite permitted landfill.  Upon closure of the facility, long term management includes the collection of landfill leachate and gas per regulatory requirements.  This also includes maintenance of the facility to maintain existing structures such as gas/leachate collection systems and cap/cover.  It is assumed that the landfill has a minimum 20-year post closure period",
            "Scenario 3: Municipal Solid Waste Composting with Associated Landfill": "This scenario involves MSW being processed in an MSW composting facility, where is processed, separated and composted.  Residual, non-combustible  materials are disposed at an onsite permitted landfill.  Upon closure of the facility, long term management includes the collection of landfill leachate and gas per regulatory requirements.  This also includes maintenance of the facility to maintain existing structures such as collection systems and cap/cover.  It is assumed that the landfill has a minimum 20-year post closure period."
      }
    }
  },
  methods: {
    increm() {
      this.$emit('update', 1)

    },
    decrem() {
      this.$emit('update', -1)
    },
    finish() {
      this.$emit('done')
    },
    passData() {
      this.$emit('save', this.scale, this.comment)
    },
    values(val) {
      if (Math.abs(this.rangeValues[val]) == 9) {
        return 'Extreme'
      } else if (Math.abs(this.rangeValues[val]) == 7) {
        return 'Very Strong'
      } else if (Math.abs(this.rangeValues[val]) == 5) {
        return 'Strong'
      } else if (Math.abs(this.rangeValues[val]) == 3) {
        return 'Moderate'
      } else if (Math.abs(this.rangeValues[val]) == 1) {
        return 'Equal'
      } else {
        return ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#app {
  height: auto;
}
#text {
  font-size: 9.5px;
}
.slide {
  margin: 20px 100px;
}
h3 {
  margin: 40px 0 0;
}
v-card-text {
  position: absolute
}
a {
  color: #42b983;
}
</style>
