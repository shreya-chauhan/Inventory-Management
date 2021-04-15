<template>
  <div>
    <div class="header">
        <b>Enter The Product Details</b>
    </div>
    <section class="form">
        <div>
        <label> Name :</label><br>
            <input type="text" class="text-input"><br><br>
        <label> Category :</label><br>
            <input type="text" class="text-input"><br><br>
        <label> Quantity :</label><br>
            <input type="number" class="text-input"><br><br>
        <label> Cost Per Unit :</label><br>
            <input type="text" class="text-input"><br><br>
        <label> Image of the product :</label><br>
            <input type="file" class="other-input"><br><br>
        <label> Name :</label><br>
            <input type="text" class="text-input"><br><br>
        </div>
        <div>
        <button type="Submit">Add Product</button>
        </div>
    </section>
  </div>
</template>

<script>

export default {
    name: 'AddNewProduct',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.text-input{
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 30px;
    border: 1px solid #cdced1; 
}

.other-input{
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 30px;
    border: 0px;
}

</style>
