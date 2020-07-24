<template>
   <div class="container mt-5">
      <div class="row">
         <div class="col">
            <h4>Cadastro de Assuntos</h4>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <div class="form-group">
               <label for="input-nome">Informe o tópico do assunto</label>
               <input type="text" id="input-nome" class="form-control col-6" v-model="assunto.request.topico"/>
            </div>
            <div class="form-group">
               <button :disabled="!assunto.request.enunciado" class="btn btn-primary" @click="saveAssunto">Cadastrar</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

    import apiService from '../../service/api.service';

    export default {
        name: "FormAssunto",
        data: function () {
            return {
                title: process.env.VUE_APP_TITLE,
                assunto: {
                    request: {
                        id: undefined,
                        topico: undefined,
                        assuntos: []
                    },
                    response: {
                        id: undefined,
                        topico: undefined,
                        assuntos: []
                    }
                }
            }
        },
        methods: {

            getAssunto(id) {
                apiService.getAssunto(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            listAssunto() {
                apiService.listAssunto()
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            saveAssunto() {
                apiService.saveAssunto(this.assunto.request)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            updateAssunto() {
                apiService.updateAssunto(this.assunto.request)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            deleteAssunto(id) {
                apiService.deleteAssunto(id)
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
