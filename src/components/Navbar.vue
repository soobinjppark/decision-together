<template>
    <div id="app">
        <v-app id="inspire">
            <v-toolbar fixed>
                <v-toolbar-title class="headline">
                    <div @click="clickMethod" class="font-weight-light">Decision Together</div>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <a href="../info.pdf" target="_blank">
                    <v-btn flat>
                        <v-icon left>
                            insert_drive_file
                        </v-icon>
                        View Document
                    </v-btn>
                    </a>
                </v-toolbar-items>
            </v-toolbar>
        </v-app>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        clickMethod() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
#app {
    height: 0px;
}
a {
    color: black;
    text-decoration: none;
    margin-top: 25px;   
}
</style>


