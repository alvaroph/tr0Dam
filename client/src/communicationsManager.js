export async function getPreguntes(vueObject){
    console.log(vueObject)
   // const response= await fetch('http://localhost/dades_dam.json');
   const response= await fetch('http://localhost:3000/questions'); 
   const preguntas = await response.json();
    vueObject.preguntes = preguntas;
  }

  
export async function deletePregunta(id){
   const response= await fetch(`http://localhost:3000/questions/${id}`, 
   {method: 'DELETE'});
   console.log(response);

  console.log("quieres borrar la pregunta con id: "+id)
}

export async function addPregunta(dadesPregunta){
  console.log("datos recibidos: "+dadesPregunta)
  const response= await fetch(`http://localhost:3000/questions`, 
  {method: 'POST', headers: {
    'Content-Type':  'application/json' ,
  },
  body: dadesPregunta},);
 }

export async function updatePregunta(dadesPregunta,id){
 
}