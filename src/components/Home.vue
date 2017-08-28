<template>
  <div class="home">
    <img src="../assets/logo.png">
    <h1>Görüşleriniz bizim için değerlidir!</h1>
    <h4>Siz de almış olduğunuz hizmeti değerlendirebilirsiniz. Hem de anonim olarak!</h4>
    <router-link :to="AnketeYonlendir">
        <button class="button is-info is-outlined" >Ankete Başla</button>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'home',
    computed: {
      AnketeYonlendir() {
          return `/anket`;
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
    margin-top: 120px;  
}
h1, h2 {
    font-weight: lighter;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 5px;
}
h4 {
    font-size: 16px;
    font-weight: lighter;
    padding-bottom: 20px;
}

a {
  color: #42b983;
}
</style>
