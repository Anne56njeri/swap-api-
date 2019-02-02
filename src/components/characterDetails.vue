<template> 
<div>
<h2> Select you favourite feature </h2> 
<button class="warning" @click="remove" v-show="isFavorite">+ Remove from  Favourites </button>
<button class="warning" @click="favorite" v-show="!isFavorite">+ Add to Favourites </button>


<div class="left">
<ul> 
<li><input type="checkbox"  id="one" :value="character.name" v-model="checkedFeature">Name: {{character.name}} <i class="material-icons" style="font-size:36px;color:red;" v-show="isFavorite"> favorite</i></li>
 <li> <input type="checkbox"  id="two" :value="character.height"  v-model="checkedFeature">Height: {{character.height}}</li>
 <li> <input type="checkbox"  id="three" :value="character.birth_year"  v-model="checkedFeature">Birth Year: {{character.birth_year}}</li>
  <li><input type="checkbox"  id="four" :value="character.eye_color"  v-model="checkedFeature">Eye color: {{character.eye_color}}</li>
  <li><input type="checkbox"  id="five" :value="character.gender" v-model="checkedFeature"> Gender:{{character.gender}}</li>
  <li><input type="checkbox"  id="six" :value="character.hair_color" v-model="checkedFeature">Hair color: {{character.hair_color}}</li>
  <li><input type="checkbox"  id="seven" :value="character.homeworld"  v-model="checkedFeature">Home World:{{character.homeworld}}</li>
  
    
</ul> 

</div> 

<div class ="right">
    <p>Favorite Features </p>
     <ul>
         <li><i class="material-icons" @click="deleteEvent()"> delete</i>{{checkedFeature[0]}}</li>
        <li><i class="material-icons" @click="deleteEvent()" > delete</i>{{checkedFeature[1]}}</li> 
        <li><i class="material-icons" @click="deleteEvent()"> delete</i>{{checkedFeature[2]}}</li>
        <li><i class="material-icons" @click="deleteEvent()"> delete</i>{{checkedFeature[3]}}</li>
        <li><i class="material-icons" @click="deleteEvent()"> delete</i>{{checkedFeature[4]}}</li>
         </ul>
</div>
</div>
</template>
<script>
export default {
    name: "characterDetails" ,
    data(){
   return { 
       isFavorite: false,
       checkedFeature:[],

   }
    },
    computed:{
    character(){
        return this.$store.state.value
    }
    },
    created(){
    this.$store.dispatch("getCharacterById",this.$route.params.id)
    },

    methods:{
   favorite(){
    this.isFavorite = true;
   },
   remove(){
       this.isFavorite= false;
   },
   deleteEvent:function(index){ 
     console.log(index)
   this.checkedFeature.splice(index,1)
   }
    }
}
</script> 
<style>
 html, #app, .home {
    height: 100%;
  } 
   body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }
</style>

