<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.jpeg" class="logo-height">
    <h1>{{ msg }}</h1>
    <button class="option-section" v-on:click="navigate()">New Product</button>
    <button class="option-section">Inventory</button>
  </div>
</template>

<script>
import router from '../router'

    export default {
        name: 'HomePage',
        props: {
          msg: String
        },
        methods: {
            navigate() {
                router.push({ name: "AddNewProduct" });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.option-section {
  background-color: white;
  box-shadow: 2px 2px 2px 2px lightgray;
  border: 0px;
  margin: 25px;
  width: 300px;
  height: 200px;
  font-size: 25px;
  border-radius: 6px;
  cursor: pointer;
}

h1 {
  font-family: "Copperplate", Fantasy;
  font-size: 40px;
}
</style>
