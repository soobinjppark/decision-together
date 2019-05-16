<template>
    <div id="app">
        <v-app id="inspire" dark>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap id="layout">
                    <v-flex xs12 id="hello">
                        <download-csv :data="results">
                            <v-btn block>
                                Download
                            </v-btn>
                        </download-csv>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: "Result",
    data() {
        return {
            results: []
        }
    },
    created() {
        db.collection('entries').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                this.results.push(doc.data())
            })
        })
    }
}
</script>

<style>

#app {
    margin-top: 10px;
}

#hello {
    margin-top: 50px;
}

</style>

