<template>
  <div>
    <div class="header">
        <b>Enter The Product Details</b>
    </div>
    <section class="form">
        <div>
        <label> Category :</label><br>
            <select name="Select One" class="other-input">
                <option value="Raw Material">Volvo</option>
                <option value="Product Creation">Saab</option>
            </select>
        </div>
        <div>
        <button type="Submit">Submit</button>
        </div>
    </section>
  </div>
</template>

<script>

export default {
    name: 'Inventory',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- https://vuejsexamples.com/a-prettier-way-to-display-select-boxes/ -->
<style scoped>
.header{
    text-align: left;
    margin-top: 30px;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 30px;
}

.form {
    margin-top: 20px;
    text-align: left;
}

label {
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
}

.other-input{
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 30px;
    border: 0px;
}

</style>
