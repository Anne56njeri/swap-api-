<template> 
<div>
<h2> Select you favourite feature </h2> 
<button class="warning" @click="remove" v-show="isFavorite">+ Remove from  Favourites </button>
<button class="warning" @click="favorite" v-show="!isFavorite">+ Add to Favourites </button>
<i class="material-icons" style="font-size:36px;color:red;" v-show="isFavorite"> favorite</i>

<div class="left">
<ul v-for= " cha in character"> 
<li>{{cha}}</li>
</ul>
</div> 

<div class ="right">
    <p> hello world </p>
</div>
</div>
</template>
<script>
export default {
    name: "characterDetails" ,
    data(){
   return { 
       isFavorite: false,

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

