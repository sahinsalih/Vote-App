<template>
  <div class="anket">
    <img src="../assets/logo.png">
    <section class="section" v-if="results.memnuniyet === ''">
        <i class="fa fa-telegram" aria-hidden="true"> Almış olduğunuz hizmetten memnun kaldınız mı? </i><br/>
        <button class="button is-outlined" v-for="choice in choices" 
                @click="SelectChoice($event.target.value)" :value="choice.name">{{choice.name}}
        </button>
        <h2 class="answer" v-if="results.memnuniyet != ''">Tercih: {{this.results.memnuniyet}}</h2>
    </section>
    <section class="section" v-if="results.memnuniyet != '' && results.sube === ''">
        <i class="fa fa-telegram" aria-hidden="true"> Hizmet almış olduğunuz birim hangisidir? </i><br/>
        <button class="button is-outlined" v-for="department in departments" 
                @click="SelectDepartment($event.target.value)" :value="department.name">{{department.name}}
        </button>
        <h2 class="answer" v-if="results.sube != ''">Tercih: {{this.results.sube}}</h2>
    </section>
    <section class="section" v-if="results.memnuniyet != '' && results.sube != ''">
        <i class="fa fa-telegram" aria-hidden="true"> Almış olduğunuz hizmet hakkında düşünceleriniz nelerdir? </i><br/>
        <div class="field">
          <div class="control">
            <input class="input" type="text" v-model="results.gorus">
          </div>
        </div>
    </section>
    <section class="section">
        <router-link :to="Tesekkurler">
            <button class="button is-info is-outlined" @click="VeriyiGonder" 
                    v-if="results.memnuniyet != '' && results.sube != '' && results.gorus != '' "> Anketi Tamamla 
            </button>
        </router-link>
    </section>
  </div>
</template>

<script>
import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyBOtwsbGFLml5NdJyRSuzEeM7HPqcncgmQ",
    authDomain: "voteme-39a5c.firebaseapp.com",
    databaseURL: "https://voteme-39a5c.firebaseio.com",
    projectId: "voteme-39a5c",
    storageBucket: "voteme-39a5c.appspot.com",
    messagingSenderId: "331999724975"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()

let resultsRef = db.ref('sonuclar')

export default {
  name: 'anket',

  firebase: {
    sonuclar: resultsRef
  },
  
  data: function () {
      return {
          choices: [
              {name: 'Çok memnun kaldım'},
              {name: 'Memnun kaldım'},
              {name: 'Kararsızım'},
              {name: 'Memnun kalmadım'},
              {name: 'Hiç memnun kalmadım'},
          ],
          departments: [
              {name: 'Yazılım'},
              {name: 'İnsan Kaynakları'},
              {name: 'Muhasebe'},
              {name: 'Araştırma ve Geliştirme'},
              {name: 'Muhasebe'},
          ],
          results: {
              memnuniyet: '',
              sube: '',
              gorus: ''
      }    
    }
  },

  methods: {
      SelectChoice: function (value) {
          this.results.memnuniyet = value
      },
      SelectDepartment: function (value) {
          this.results.sube = value
      },
      VeriyiGonder: function() {
          resultsRef.push(this.results);
          this.results.memnuniyet = '';
          this.results.sube = '';
          this.results.gorus = '';
          
      }
  },

  computed: {
      Tesekkurler: function () {
          return `/thanks`
      }
  }
}
</script>

<style scoped>

.field {
    padding-left: 300px;
    padding-right: 300px;
}

.section {
    padding-top: 5px;   
}

.anket {
    margin-top: 120px;  
}

.button  {
    margin-right: 5px;
    margin-left: 5px;
}

.answer {
    margin-top: 20px;
    font-weight: bold;
}

i {
    font-weight: lighter;
    padding-bottom: 25px;
}

</style>
