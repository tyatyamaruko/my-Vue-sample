<template>
  <header>
    <h1>Simple Todo App ~ Vue Sample ~</h1>
    <p>Welcome to this site.</p>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
    background: rgb(145, 20, 145);
    padding: 15px;
}
h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
}

p {
    color: #fff;
    margin-top: 10px;
    font-size: 1.4rem;
}
</style>