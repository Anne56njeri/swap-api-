import Vue from 'vue'
import Vuex from 'vuex'
import axios from  'axios'
import Router from 'vue-router';

 Vue.use(Vuex)
 Vue.use(axios)

  Vue.use(Router)
export default new Vuex.Store({
    state:{
    characters:[],
    value:'',
    
    },
    mutations: {
    setCharacters(state, characters)
    {
        state.characters=characters
    },
    setSelectedCharacter(state,value){
        state.value=value
    }
    },
    actions:{
        getCharactresList({ commit }){
            axios.get('https://swapi.co/api/people').then((response)=>{
            commit('setCharacters',response.data.results)
            console.log(response.data.count)
            })
        },


    }
})