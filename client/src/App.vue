<script>
import { getPreguntes, deletePregunta ,addPregunta} from './communicationsManager';
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      preguntes:[],
      verAfegirPregunta: false,
      novaPregunta: {
        pregunta: "",
        respostes: ["","","",""],
        resposta_correcta: "",
        imatge: ""
      }
    }
  },
  created(){ 
    getPreguntes(this);
  },
  methods: {
    mostrarFormulari(){
      this.verAfegirPregunta = true;
    },
    afegirPregunta(){
      const uniqueId = uuidv4();
      this.novaPregunta.id=uniqueId;
      console.log("FEM UNA CRIDA AL SERVIDOR PER AFEGIR LA PREGUNTA")
      console.log(JSON.stringify(this.novaPregunta));
      addPregunta(JSON.stringify(this.novaPregunta));
      getPreguntes(this);
    },
    esborrarPregunta(id){
      console.log("FEM UNA CRIDA AL SERVIDOR PER ESBORRAR LA PREGUNTA")
      console.log(id);
      deletePregunta(id);
      getPreguntes(this);
    },
  }
}

</script>

<template> 

<div class="row">
  <div class="col-md-6">
    <button class="btn btn-success" @click="mostrarFormulari">Afegir pregunta</button> 
    <div v-for="(prActual,index) in preguntes">
     
      <h3>{{ prActual.pregunta }}</h3>
      <small>ID: {{prActual.id }}</small>
      <img :src="prActual.imatge" width="200px"><br> 
     <ul>
      <li v-for="rptActual in prActual.respostes">
        {{ rptActual }}
      </li>
    </ul>
      <button class="btn btn-primary">Editar Pregunta</button> 
      <button @click="esborrarPregunta(prActual.id)" class="btn btn-primary">Eliminar Pregunta</button>
    </div>
  </div>
      <div class="col-md-6" v-if="verAfegirPregunta">
        <h2>Afegir pregunta</h2>
        <label class="form-label">Pregunta</label>
        <input class="form-control" type="text" v-model="novaPregunta.pregunta"><br>
        <label class="form-label">Resposta 1</label>
        <input class="form-control" type="text" v-model="novaPregunta.respostes[0]"><br>
        <label class="form-label">Resposta 2</label>
        <input class="form-control" type="text" v-model="novaPregunta.respostes[1]"><br>
        <label class="form-label">Resposta 3</label>
        <input class="form-control" type="text" v-model="novaPregunta.respostes[2]"><br>
        <label class="form-label">Resposta 4</label>
        <input class="form-control" type="text" v-model="novaPregunta.respostes[3]"><br>
        <label class="form-label">URL imatge</label>
        <input class="form-control" type="text" v-model="novaPregunta.imatge"><br>
        <img :src="novaPregunta.imatge"><br>
        Resposta correcta<br>
        <input type="radio" value="0" v-model="novaPregunta.resposta_correcta" />  
        <label for="one">Resposta 1</label>
        <input type="radio"  value="1" v-model="novaPregunta.resposta_correcta" />
        <label for="two">Resposta 2</label>
        <input type="radio" value="2" v-model="novaPregunta.resposta_correcta" />  
        <label for="one">Resposta 3</label>
        <input type="radio"  value="3" v-model="novaPregunta.resposta_correcta" />
        <label for="two">Resposta 4</label>

        
        <img :src="novaPregunta.imatge" width="200px"><br>
        <button class="btn btn-danger" @click="afegirPregunta">Afegir Pregunta</button>
    </div>
  </div>
</template>
 
<style scoped>

</style>