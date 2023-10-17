<template>
<div class="failure">
    <div class="header-container">
        <a href="https://artists-ecommerce.herokuapp.com">to home</a>
    </div>
    <div>
        <h1>Purchase Failed</h1>
        <p>Please use the testing card info: 4242 4242 4242 4242, 04/24, 424 <br> This is a demo </p>
    </div>

</div>


</template>


<style>
body {
    margin: 0;
}

h1 {
    margin-top: 100px;
    text-align: center;
    font-family: Noto Sans;
    font-size: 2rem;
    color: navy;
}

p {
    font-size: 1.2rem;
    text-align: center;
}

.header-container {
    height: 60px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    background-color: gold;
    font-size: 1.2rem;
    position: fixed; 
    top: 0px;
    z-index: 100;
}

a {
    font-family: Raleway;
    text-decoration: none;
    color: black;
    font-weight: bolder;
}

a:hover {
    color: royalblue;
}
</style>