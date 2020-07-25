<template>
   <div class="container mt-5">
      <div class="row">
         <div class="col">
            <h4>Cadastro de Questões</h4>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <div class="form-group">
               <label for="input-nome">Informe o enunciado da questão</label>
               <input type="text" id="input-nome" class="form-control col-6" v-model="questao.request.enunciado"/>
            </div>
            <div class="form-group">
               <button :disabled="!questao.request.enunciado" class="btn btn-primary" @click="saveQuestao">Cadastrar</button>
            </div>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <b-table
               hover
               :items="questoes"
               :fields="tableConfig.fields"
               :current-page="1"
               :per-page="10">
            </b-table>
            <div class="justify-content-center row my-1">
               <b-pagination
                  size="md"
                  :total-rows="this.questoes.length"
                  :per-page="tableConfig.perPage"
                  v-model="tableConfig.currentPage" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>

    import apiService from '../../service/api.service';

    export default {
        name: "FormQuestao",
        data: function () {
            return {
                title: process.env.VUE_APP_TITLE,
                fields: {
                    id: {
                        label: 'Id',
                        sortable: true,
                    },
                },
                tableConfig: {
                    perPage: 5,
                    currentPage: 1
                },
                questao: {
                    request: {
                        id: undefined,
                        assunto: undefined,
                        orgao: undefined,
                        banca: undefined,
                        enunciado: undefined
                    },
                    response: {
                        id: undefined,
                        assunto: undefined,
                        orgao: undefined,
                        banca: undefined,
                        enunciado: undefined
                    }
                },
                questoes: [],
                error: undefined,
            }
        },
        created() {
            this.listQuestao();
        },
        methods: {

            getQuestao(id) {
                apiService.getQuestao(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally();
            },

            listQuestao() {
                apiService.listQuestao()
                    .then((response) => this.questoes = response.data)
                    .catch((error) => console.log(error))
                    .finally();
            },

            saveQuestao() {
                apiService.saveQuestao(this.questao.request)
                    .then((response) => {
                        console.log(response.data);
                        this.listQuestao();
                    })
                    .catch((error) => console.log(error))
                    .finally();
            },

            updateQuestao() {
                apiService.updateQuestao(this.questao.request)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally();
            },

            deleteQuestao(id) {
                apiService.deleteQuestao(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally();
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
