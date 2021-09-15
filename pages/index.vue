<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <div class="counter d-flex justify-center" >
        {{counter}}
      </div>
      <div class="buttons d-flex justify-center">
        <!-- <button @click="decrease()">-</button> -->
        <button @click="increase()">+</button>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
  name:'home',

  computed: {
    counter(){
      return this.$store.getters.counter
    }
  },

  methods: {
    increaseCounter(){
      this.$store.dispatch('increase')
    },
    ...mapActions({
      increase: 'increase'
    })
  }


}
</script>

<style scoped>
  div {
    margin-bottom: 10px;
  }
  .counter {
    font-size: 80px;
  }
  .buttons button {
    font-size: 40px;
    width: 100px;
    border: 1px solid white;
    margin: 0 10px;
  }

</style>