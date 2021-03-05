<template>
  <div class="hello">
    <form @reset="onReset" ref="form_input" class="pure-form pure-form-stacked">
      <div class='part-one'>
        <div class="form-group">
          <label for="exampleInputEmail1">Top 1 Name</label>
          <input type="text" class="form-control" v-model="top_1_name" aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Top 1 Gram</label>
          <input type="number" class="form-control"  v-model="top_1_gram" aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Top 2 Name</label>
          <input type="text" v-model="top_2_name" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
           <label for="exampleInputEmail1">Top 2 Gram</label>
          <input type="number" v-model="top_2_gram" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Top 3</label>
          <input type="text" v-model="top_3_name" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Top 3 Gram</label>
          <input type="number" v-model="top_3_gram" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
         <div class="form-group">
          <label for="exampleInputEmail1">Calories 1</label>
          <input type="number" v-model="calory_1" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Calories 2</label>
          <input type="number" v-model="calory_2" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Calories 3</label>
          <input type="number" v-model="calory_3" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Water 1</label>
          <input type="number" v-model="water_1" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Water 2</label>
          <input type="number" v-model="water_2"  class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
      </div>
      <div class='protein'>
        <div class="form-group">
          <label for="exampleInputEmail1">Water 3</label>
          <input type="number"  v-model="water_3" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Protein 1 gram</label>
          <input type="number" v-model="protein_1_gram" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Protein 1 %</label>
          <input type="number" v-model="protein_1_per" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Protein 2 gram</label>
          <input type="number" v-model="protein_2_gram" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Protein 2 %</label>
          <input type="number" v-model="protein_2_per" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Protein 3 gram</label>
          <input type="number" v-model="protein_3_gram" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Protein 3 %</label>
          <input type="number" v-model="protein_3_per" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Carb 1 Gram</label>
          <input type="number" v-model="carb_1_gram" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Carb 1 %</label>
          <input type="number" v-model="carb_1_per" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Carb 2 Gram</label>
          <input type="number" v-model="carb_2_gram" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Carb 2 %</label>
          <input type="number" v-model="carb_2_per" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
      </div>
      <div class="form-group">
          <label for="exampleInputEmail1">Carb 3 Gram</label>
          <input type="number" v-model="carb_3_gram" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
          <label for="exampleInputEmail1">Carb 3 %</label>
          <input type="number" v-model="carb_3_per" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
        </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Vitamins 1</label>
        <input type="text" v-model="vitamin_1" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Vitamins 2</label>
        <input type="text" v-model="vitamin_2" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Vitamins 3</label>
        <input type="text" v-model="vitamin_3" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Minerals 1</label>
        <input type="text" v-model="mirenal_1" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Minerals 2</label>
        <input type="text" v-model="mirenal_2" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Minerals 3</label>
        <input type="text" v-model="mirenal_3" class="form-control"  aria-describedby="emailHelp" placeholder="Enter number gram">
      </div>
      <fieldset class="pure-group">
        <button type="submit" class="pure-button pure-button-primary pure-u-1-10">Submit</button>
        <button type="button" class="pure-button pure-button-primary pure-u-1-10" @click="onReset">Reset</button>
      </fieldset>
    </form>
  </div>
  <div class='page' size="A6" >
    <svg class="textarea" contenteditable="true" id="nutrition">
      <!-- Top-->
      <text x="117" y="82" font-family="sans-serif" font-size="11px" fill="red">{{top_1_name}}</text>
      <text x="134" y="100" font-family="sans-serif" font-size="10px" fill="red">{{top_1_gram}}</text>
      <text x="205" y="82" font-family="sans-serif" font-size="11px" fill="red">{{top_2_name}}</text>
      <text x="205" y="100" font-family="sans-serif" font-size="10px" fill="red">{{top_2_gram}}</text>
      <text x="298" y="82" font-family="sans-serif" font-size="11px" fill="red">{{top_3_name}}</text>
      <text x="298" y="100" font-family="sans-serif" font-size="10px" fill="red">{{top_3_gram}}</text>

      <!-- Calories-->
      <text x="117" y="123" font-family="sans-serif" font-size="10px" fill="red">{{calory_1}}</text>
      <text x="205" y="123" font-family="sans-serif" font-size="10px" fill="red">{{calory_2}}</text>
      <text x="298" y="123" font-family="sans-serif" font-size="10px" fill="red">{{calory_3}}</text>

      <!-- Water-->
      <text x="117" y="162" font-family="sans-serif" font-size="10px" fill="red">{{water_1}}</text>
      <text x="205" y="162" font-family="sans-serif" font-size="10px" fill="red">{{water_2}}</text>
      <text x="298" y="162" font-family="sans-serif" font-size="10px" fill="red">{{water_3}}</text>

      <!-- Protein-->
      <text x="117" y="200" font-family="sans-serif" font-size="10px" fill="red">{{protein_1_gram}}</text>
      <text x="147" y="200" font-family="sans-serif" font-size="10px" fill="red">{{protein_1_per}}</text>
      <text x="205" y="200" font-family="sans-serif" font-size="10px" fill="red">{{protein_2_gram}}</text>
      <text x="235" y="200" font-family="sans-serif" font-size="10px" fill="red">{{protein_2_per}}</text>
      <text x="295" y="200" font-family="sans-serif" font-size="10px" fill="red">{{protein_3_gram}}</text>
      <text x="325" y="200" font-family="sans-serif" font-size="10px" fill="red">{{protein_3_per}}</text>
      
      <!-- Carb-->
      <text x="117" y="232" font-family="sans-serif" font-size="10px" fill="red">{{carb_1_gram}}</text>
      <text x="147" y="232" font-family="sans-serif" font-size="10px" fill="red">{{carb_1_per}}</text>
      <text x="205" y="232" font-family="sans-serif" font-size="10px" fill="red">{{carb_2_gram}}</text>
      <text x="235" y="232" font-family="sans-serif" font-size="10px" fill="red">{{carb_2_per}}</text>
      <text x="295" y="232" font-family="sans-serif" font-size="10px" fill="red">{{carb_3_gram}}</text>
      <text x="325" y="232" font-family="sans-serif" font-size="10px" fill="red">{{carb_3_per}}</text>

      <!-- Vitamins-->
      <text x="117" y="264" font-family="sans-serif" font-size="10px" fill="red">{{vitamin_1}}</text>
      <text x="205" y="264" font-family="sans-serif" font-size="10px" fill="red">{{vitamin_2}}</text>
      <text x="298" y="264" font-family="sans-serif" font-size="10px" fill="red">{{vitamin_3}}</text>
      <!-- Mirenals-->
      <text x="117" y="305" font-family="sans-serif" font-size="10px" fill="red">{{mirenal_1}}</text>
      <text x="205" y="305" font-family="sans-serif" font-size="10px" fill="red">{{mirenal_2}}</text>
      <text x="298" y="305" font-family="sans-serif" font-size="10px" fill="red">{{mirenal_3}}</text>
    </svg>
  </div>
</template>

<script>


import { ref } from "vue";
// import Nutrition from "~/assets/Nutrition-A6-01.svg";
export default {
  name: 'ASixPrint',
  props: {
    msg: String
  },
  components: {
    // Nutrition,
  },
  setup(){
    const top_1_name = ref("")
    const top_1_gram = ref(0)
    const form_input = ref(null)
    const top_2_name = ref("")
    const top_2_gram = ref(0)
    const top_3_name = ref("")
    const top_3_gram = ref(0)

    const calory_1 = ref(0)
    const calory_2 = ref(0)
    const calory_3 = ref(0)

    const water_1 = ref(0)
    const water_2 = ref(0)
    const water_3 = ref(0)

    const protein_1_gram = ref(0)
    const protein_1_per = ref(0)
    const protein_2_gram = ref(0)
    const protein_2_per = ref(0)
    const protein_3_gram = ref(0)
    const protein_3_per = ref(0)

    const carb_1_gram = ref(0)
    const carb_1_per = ref(0)
    const carb_2_gram = ref(0)
    const carb_2_per = ref(0)
    const carb_3_gram = ref(0)
    const carb_3_per = ref(0)

    const vitamin_1 = ref("C,D,E")
    const vitamin_2 = ref("")
    const vitamin_3 = ref("")


    const mirenal_1 = ref("")
    const mirenal_2 = ref("")
    const mirenal_3 = ref("")



    function onReset() {
      form_input.value.reset()
      top_1_name.value.focus()
    }

    return {
      top_1_name,
      onReset,
      top_1_gram,
      top_2_name,
      top_2_gram,
      top_3_name,
      top_3_gram,
      calory_1,
      calory_2,
      calory_3,
      vitamin_1,
      vitamin_2,
      vitamin_3,
      mirenal_1,
      mirenal_2,
      mirenal_3,
      water_1,
      water_2,
      water_3,
      protein_1_gram,
      protein_2_gram,
      protein_3_gram,
      carb_1_gram,
      carb_2_gram,
      carb_3_gram,
      carb_1_per,
      carb_2_per,
      carb_3_per,
      protein_1_per,
      protein_2_per,
      protein_3_per,
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media print {

  .hello{
    display: none !important;
  }
  #svg_nutrition{
    display: none !important;
  }
  .page{
    margin-bottom: 0px;
    box-shadow: unset;
  }

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}
.page[size="A6"] {
  // width: 10.3cm;
  // height: 14.7cm;
  width: 21cm;
  height: 14.7cm;  
}
.hello{
  width: 70%;
  float: left;
  .protein {
    width: 40%;
    float: left;
  }
  .part-one{
    width: 30%;
    float: left;
  }
}
.page{
  width: 30%;
  float: left;
}
#nutrition{
  width: 10.3cm;
  height: 14.7cm;
  margin: 0 auto;
  // background-image: url('~@/assets/Nutrition-A6-01.svg');
}
</style>
