<template>
   <div class="container mt-5">
      <div class="row">
         <div class="col">
            {{ assunto }}
         </div>
      </div>
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
            <h4>Cadastro de Assunto</h4>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <div class="form-group">
               <label for="input-nome">Informe o tópico do assunto</label>
               <input type="text" id="input-nome" class="form-control" v-model="assunto.request.topico"/>
            </div>
            <div class="form-group">
               <label for="input-assunto-pai">Selecione o assunto pai, caso exista</label>
               <select name="assunto-pai" id="input-assunto-pai" class="form-control" v-model="assunto.request.assuntoPai">
                  <option value=""> -- </option>
                  <option v-for="assunto in assuntos" :key="assunto.id" :value="assunto.id">
                     {{ assunto.topico }}
                  </option>
               </select>
            </div>
            <div class="form-group">
               <button :disabled="!assunto.request.topico" class="btn btn-primary" @click="saveAssunto">Cadastrar</button>
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
               <tr v-for="assunto in assuntos" :key="assunto.id">
                  <td>{{ assunto.id }}</td>
                  <td>{{ assunto.topico }}</td>
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
        name: "FormAssunto",
        data: function () {
            return {
                title: process.env.VUE_APP_TITLE,
                hasMessage: false,
                message: undefined,
                status: undefined,
                assunto: {
                    request: {
                        id: undefined,
                        topico: undefined,
                        assuntos: [],
                        assuntoPai: undefined,
                    },
                    response: {
                        id: undefined,
                        topico: undefined,
                        assuntos: [],
                        assuntoPai: undefined,
                    }
                },
                assuntos: [],
            }
        },
        created() {
            this.listAssunto();
        },
        computed: {
            messageStyle() {
                return this.status == 200 ? 'success' : 'danger';
            }
        },
        methods: {

            getAssunto(id) {
                apiService.getAssunto(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
            },

            listAssunto() {
                apiService.listAssunto()
                    .then((response) => this.assuntos = response.data)
                    .catch((error) => console.log(error));
            },

            saveAssunto() {
                apiService.saveAssunto(this.assunto.request)
                    .then((response) => {
                        this.listAssunto();
                        this.hasMessage = true;
                        this.message = 'Assunto cadastrado com sucesso.';
                        this.status = response.status;
                    })
                    .catch((error) => {
                        this.message = 'Erro durante o cadastro de novo Assunto.';
                        this.status = error.response.status;
                    });
            },

            updateAssunto() {
                apiService.updateAssunto(this.assunto.request)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
            },

            deleteAssunto(id) {
                apiService.deleteAssunto(id)
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
