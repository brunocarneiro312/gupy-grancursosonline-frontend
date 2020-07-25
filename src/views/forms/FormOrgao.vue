<template>
   <div class="container mt-5">
      <div class="row">
         <div class="col">
            <b-alert
               :show="hasMessage"
               :variant="messageStyle"
               :dismissible="true"
            >
               {{ message }}
            </b-alert>
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
               <input type="text" id="input-nome" class="form-control col-6" v-model="orgao.request.nome"/>
            </div>
            <div class="form-group">
               <button :disabled="!orgao.request.nome" class="btn btn-primary" @click="saveOrgao">Cadastrar</button>
            </div>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <table class="table table-hover table-sm">
               <thead>
               <tr>
                  <th>Id</th>
                  <th>Nome</th>
               </tr>
               </thead>
               <tbody>
               <tr v-for="orgao in orgaos" :key="orgao.id">
                  <td>{{ orgao.id }}</td>
                  <td>{{ orgao.nome }}</td>
               </tr>
               </tbody>
            </table>
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
                hasMessage: false,
                message: undefined,
                status: undefined,
                orgao: {
                    request: {
                        id: undefined,
                        nome: undefined,
                    },
                    response: {
                        id: undefined,
                        nome: undefined
                    }
                },
                orgaos: [],
            }
        },
        created() {
            this.listOrgao();
        },
        computed: {
            messageStyle() {
                return this.status == 200 ? 'success' : 'danger';
            }
        },
        methods: {

            getOrgao(id) {
                apiService.getOrgao(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            listOrgao() {
                apiService.listOrgao()
                    .then((response) => this.orgaos = response.data)
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            saveOrgao() {
                apiService.saveOrgao(this.orgao.request)
                    .then((response) => {
                        this.listOrgao();
                        this.hasMessage = true;
                        this.message = 'Órgão cadastrado com sucesso.';
                        this.status = response.status;
                    })
                    .catch((error) => {
                        this.message = 'Erro durante o cadastro de novo Órgão.';
                        this.status = error.response.status;
                    });
            },

            updateOrgao() {
                apiService.updateOrgao(this.orgao.request)
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
