<template>
  <div class="thanks">
    <img src="../assets/logo.png">
    <h1>Görüşleriniz için teşekkür ederiz!</h1>
    <router-link :to="AnketeYonlendir">
        <button class="button is-info is-outlined" >Ankete Başla</button>
    </router-link>   
  </div>
</template>

<script>
export default {
    name: 'thanks',
    computed: {
      AnketeYonlendir() {
          return `/anket`;
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.thanks {
    margin-top: 120px;  
}

h1, h2 {
    font-weight: bold;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>
