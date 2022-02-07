<template>
  <div class="header">
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">GAMES</a>
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">POKEMON</a>
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">MOVES</a>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: var(--blue);
  font-size: 15px;
  display: flex;
  flex-direction: row;
}

a {
    color: white
}

</style>