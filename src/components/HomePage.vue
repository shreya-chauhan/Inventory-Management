<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.jpeg" class="logo-height">
    <h1>{{ msg }}</h1>
    <WorkSpace class = "workspace-position" ></WorkSpace>
  </div>
</template>

<script>
import WorkSpace from './WorkSpace.vue';

    export default {
        name: 'HomePage',
        props: {
          msg: String
        },
        components: {
          WorkSpace,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-family: "Copperplate", Fantasy;
  font-size: 35px;
  position: absolute;
  left: 550px;
  top: 90px;

}

.workspace-position {
  position: absolute;
  top: 200px;
  left: 190px;
}
</style>
