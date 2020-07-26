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
            <h4>Cadastro de Bancas</h4>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col col-md-4">
            <div class="form-group">
               <label for="input-nome">Informe o nome da Banca</label>
               <input type="text" id="input-nome" class="form-control" v-model="banca.request.nome"/>
            </div>
            <div class="form-group">
               <button :disabled="!banca.request.nome" class="btn btn-dark" @click="saveBanca">Cadastrar</button>
            </div>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <h4>Bancas Cadastradas</h4>
            <div class="overflow-auto">
               <table class="table table-hover table-sm table-bordered">
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>Nome</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="banca in bancas" :key="banca.id">
                        <td>{{ banca.id }}</td>
                        <td>{{ banca.nome }}</td>
                     </tr>
                  </tbody>
               </table>
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
                hasMessage: false,
                message: undefined,
                status: undefined,
                banca: {
                    request: {
                       id: undefined,
                       nome: undefined
                    },
                    response: {
                        id: undefined,
                        nome: undefined
                    }
                },
                bancas: [],
            }
        },
        created() {
            this.listBanca();
        },
        computed: {
            messageStyle() {
                return this.status == 200 ? 'success' : 'danger';
            }
        },
        methods: {

            getBanca(id) {
                apiService.getBanca(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
            },

            listBanca() {
                apiService.listBanca()
                    .then((response) => this.bancas = response.data)
                    .catch((error) => console.log(error));
            },

            saveBanca() {
                apiService.saveBanca(this.banca.request)
                    .then((response) => {
                        this.listBanca();
                        this.hasMessage = true;
                        this.message = 'Banca cadastrada com sucesso.';
                        this.status = response.status;
                    })
                    .catch((error ) => {
                        this.message = 'Erro durante o cadastro de nova Banca.';
                        this.status = error.response.status;
                    })
                .finally(() => {
                    this.banca.request.id = undefined;
                    this.banca.request.nome = undefined;
                });
            },

            updateBanca() {
                apiService.updateBanca(this.banca.request)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
            },

            deleteBanca(id) {
                apiService.deleteBanca(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
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
