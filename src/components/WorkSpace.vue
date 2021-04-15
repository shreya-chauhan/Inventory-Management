<template>
  <div>
    <hr>
    <div class="workspace">
        <button v-for="tab in tabs" :key="tab" @click="selected = tab;" :class="['option-section', { active: selected === tab }]">
            {{ tab }}
        </button>
        <component :is="selected"></component>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
import AddNewProduct from "./AddNewProduct";
import Inventory from "./Inventory";

export default {
    name: 'WorkSpace',
    data: function() {
        return {
        tabs: ["AddNewProduct", "Inventory"],
        selected: "Home"
        };
    },
    components: {
        AddNewProduct,
        Inventory
  }
    
}
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.workspace { 
    
}

.option-section {
  background-color: white;
  box-shadow: 2px 2px 2px 2px lightgray;
  border: 0px;
  margin: 25px;
  width: 400px;
  height: 50px;
  font-size: 20px;
  border-radius: 6px;
  cursor: pointer;
}

.active {
  border-bottom: 3px solid green;
  background: #fcfcf;
}

</style>
