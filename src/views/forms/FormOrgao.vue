<template>
   <div class="container mt-5">
      <div class="row">
         <div class="col">
            <button class="btn btn-primary" @click="teste">Teste</button>
         </div>
      </div>
      <div class="row">
         <div class="col">
            <h4>Cadastro de Órgãos Públicos</h4>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <div class="form-group">
               <label for="input-nome">Informe o nome do Órgão</label>
               <input type="text" id="input-nome" class="form-control col-6" v-model="orgao.nome"/>
            </div>
            <div class="form-group">
               <button :disabled="!orgao.nome" class="btn btn-primary" @click="saveOrgao">Cadastrar</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

    import apiService from '../../service/api.service';

    export default {
        name: "FormOrgao",
        data: function () {
            return {
                title: process.env.VUE_APP_TITLE,
                orgao: {
                    id: undefined,
                    nome: undefined
                }
            }
        },
        methods: {

            teste() {
                this.getOrgao(1);
            },

            getOrgao(id) {
                apiService.getOrgao(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            listOrgao() {
                apiService.listOrgao()
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            saveOrgao() {
                apiService.saveOrgao(this.orgao)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            updateOrgao() {
                apiService.updateOrgao(this.orgao)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            deleteOrgao(id) {
                apiService.deleteOrgao(id)
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
