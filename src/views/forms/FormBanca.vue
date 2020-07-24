<template>
   <div class="container mt-5">
      <div class="row">
         <div class="col">
            <h4>Cadastro de Bancas</h4>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <div class="form-group">
               <label for="input-nome">Informe o nome da Banca</label>
               <input type="text" id="input-nome" class="form-control col-6" v-model="banca.request.nome"/>
            </div>
            <div class="form-group">
               <button :disabled="!banca.request.nome" class="btn btn-primary" @click="saveBanca">Cadastrar</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

    import apiService from '../../service/api.service';

    export default {
        name: "FormBanca",
        data: function () {
            return {
                title: process.env.VUE_APP_TITLE,
                banca: {
                    request: {
                       id: undefined,
                       nome: undefined
                    },
                    response: {
                        id: undefined,
                        nome: undefined
                    }
                }
            }
        },
        methods: {

            getBanca(id) {
                apiService.getBanca(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            listBanca() {
                apiService.listBanca()
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            saveBanca() {
                apiService.saveBanca(this.banca.request)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            updateBanca() {
                apiService.updateBanca(this.banca.request)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            deleteBanca(id) {
                apiService.deleteBanca(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            }
        }
    }
</script>

<style lang="scss" scoped>
   .form-group {
      label {
         font-weight: bold;
      }
   }
</style>
