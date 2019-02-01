<template>
  <div>
    <table> 
      <thead>
      <tr>
        <th v-for="(value ,key) in headings"> 
          
          <h4>{{value.key}} </h4>
          
          
          </th>
    <!-- <ul  @click="show(value)">
      <li> {{value.name}}</li> -->

      <!-- </ul> -->
      </tr>
      </thead>

      <tbody >
        <tr v-for="(value ,key) in characters" @click="show(value,key)">
        <td>

             {{value.name}}
             
          </td>

          <td>

              {{value.eye_color}}
           </td> 
            <td>

              {{value.gender}}
           </td> 
             <td>

              {{value.hair_color}}
           </td> 
           <td>

              {{value.height}}cm
           </td>
           <td>

              {{value.homeworld}}
           </td> 
            <td>

              {{value.mass}}
           </td>
             <td>

              {{value.skin_color}}
           </td>
        </tr>
        
        </tbody> 
        
      </table>
      <router-link to="/details/">About</router-link>
    </div>
 
</template>

<script>
import Router from "../router";
export default {
  name: "HelloWorld",
  data(){
   return {
     headings:[
       {key:'name'},
       {key:'eye_color'},
       {key:'gender'},
       {key:'hair_color'},
       {key:'height'},
       {key:'home_world'},
       {key:'mass'},
      
       {key:'skin_color'},

     ]
    
   
   };
  },
  computed:{
    // we access the characters from store 
   characters(){
     return this.$store.state.characters;
   }
  },

  created(){
    this.$store.dispatch('getCharactresList')
  },
  methods: {
    show(value,key){
      this.$store.commit('setSelectedCharacter',value);
      this.$router.push("/details/" + key);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: black;
}

table {
  border-spacing:4px;
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color:silver;
}

th, td {
  min-width: 140px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
