<template>
    <div id="app">
      <div class="container ">
        <form class="form-inline ajuste2">
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">Nome</label>
          <input v-model="nome" type="text" class="form-control" id="inputPassword2" placeholder="Nome">
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">Descrição</label>
          <input v-model="description" type="text" class="form-control" id="inputPassword2" placeholder="Descrição">
        </div>
        <button @click="createCliente()" type="submit" class="btn btn-success mb-2">Cadastrar</button>
      </form>
        <table class="table table">
        <thead class="thead-dark">
          <tr>
            <th scope="col" >ID</th>
            <th scope="col" >Nome do usuario</th>
            <th scope="col" >Descrição</th>
            <th scope="col" class="ajuste">Ações</th>
             
          </tr>
        </thead>
        <tbody >
          <tr v-for="info in infos" :key="info.id">
            <th scope="row">{{info.id}}</th>
            <td>{{info.nome}}</td>
            <td>{{info.description}}</td>
            <td class="d-flex justify-content-between align-items-left">
                <button @click="deleteCliente(info.id)" type="button" class="btn btn-danger">Apagar</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Editar
                </button>
            </td>
          </tr>
        </tbody>
        
      </table>
         
        <!-- Modal -->
        <div v-for="info in infos" :key="info.id" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Clientes</h5>               
              </div>
              <div class="modal-body" >
                 <p>{{info.id}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button @click="UpdateCliente(info.id)" type="button" class="btn btn-primary">Salvar</button>
              </div>
            </div>
          </div>
        

         </div>

      </div>
  
  </div>
</template>

<script>
import api from './service/api'

export default {
  name: 'app',

   data(){
     return{
       infos: [],
       nome: '',
       description: '',
       
     }
   },
   async created(){
     const response = await api.get("clientes")
     this.infos = response.data
     console.log(this.infos)
   },
   methods:{
     async createCliente(){
       await api.post("clientes", {
         nome: this.nome,
         description: this.description
       })
     },
     async deleteCliente(id){
       await api.delete(`clientes/${id}`)
     },
     async UpdateCliente(id){
     await api.put(`clientes/${id}`,{
        nome: this.nome,
        description: this.description
     })
   }
 }
   
}
</script>

<style scoped>
 .ajuste{
   width: 180px;
 }
 .ajuste2{
   margin-top: 5%;
 }
</style>
