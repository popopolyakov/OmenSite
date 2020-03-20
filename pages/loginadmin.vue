<template class="adminTemplate-layout">
<!-- VUETIFY EXAMPLE -->
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>


              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="userInfo.login"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="userInfo.password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click.prevent="userLogin(userInfo)">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

export default { 
  data: () => {
    return {
      userInfo: {
        login: '',
        password: '',
      }
    }
  },
  //middleware: 'auth',
  methods: {
    userLogin(loginInfo) {
        this.$store.dispatch('login/login', {login: loginInfo.login, pass: loginInfo.password})
        //console.log(this.$middleware)
        !!this.$store.state.login.token ? this.$router.push('additem') : this.$router.replace('404');
    }
  },

}

</script>