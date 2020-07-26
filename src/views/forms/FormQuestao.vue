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
               <input type="text" id="input-nome" class="form-control" v-model="questao.request.enunciado"/>
            </div>
            <div class="form-group">
               <label for="select-orgao">Informe o Órgão</label>
               <select type="text" id="select-orgao" class="form-control" v-model="questao.request.orgaoId">
                  <option value="">--</option>
                  <option v-for="orgao in orgaos" :key="orgao.id" :value="orgao.id">
                     {{ orgao.nome }}
                  </option>
               </select>
            </div>
            <div class="form-group">
               <label for="select-banca">Informe a Banca</label>
               <select type="text" id="select-banca" class="form-control" v-model="questao.request.bancaId">
                  <option value="">--</option>
                  <option v-for="banca in bancas" :key="banca.id" :value="banca.id">
                     {{ banca.nome }}
                  </option>
               </select>
            </div>
            <div class="form-group">
               <label for="select-assunto">Informe o Assunto</label>
               <select type="text" id="select-assunto" class="form-control" v-model="questao.request.assuntoId">
                  <option value="">--</option>
                  <option v-for="assunto in assuntos" :key="assunto.id" :value="assunto.id">
                     {{ assunto.topico }}
                  </option>
               </select>
            </div>
            <div class="form-group">
               <button
                  :disabled="!isButtonActive"
                  class="btn btn-primary"
                  @click="saveQuestao"
               >
                  Cadastrar
               </button>
            </div>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <div class="overflow-auto">
               <table class="table table-hover table-sm">
                  <thead>
                  <tr>
                     <th>Id</th>
                     <th>Órgão</th>
                     <th>Banca</th>
                     <th>Assunto</th>
                     <th>Enunciado</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="questao in questoes" :key="questao.id">
                     <td>{{ questao.id }}</td>
                     <td>{{ questao.orgao }}</td>
                     <td>{{ questao.banca }}</td>
                     <td>{{ questao.assunto }}</td>
                     <td>{{ questao.enunciado }}</td>
                  </tr>
                  </tbody>
               </table>
            </div>
<!--            <b-table-->
<!--               hover-->
<!--               :items="questoes"-->
<!--               :fields="tableConfig.fields"-->
<!--               :current-page="1"-->
<!--               :per-page="10">-->
<!--            </b-table>-->
<!--            <div class="justify-content-center row my-1">-->
<!--               <b-pagination-->
<!--                  size="md"-->
<!--                  :total-rows="this.questoes.length"-->
<!--                  :per-page="tableConfig.perPage"-->
<!--                  v-model="tableConfig.currentPage" />-->
<!--            </div>-->
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
                        assuntoId: undefined,
                        orgaoId: undefined,
                        bancaId: undefined,
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
                bancas: [],
                orgaos: [],
                assuntos: [],
                error: undefined,
            }
        },
        created() {
            this.listQuestao();
            this.listBanca();
            this.listOrgao();
            this.listAssunto();
        },
        computed: {
            isButtonActive() {
                return this.questao.request.assuntoId
                    && this.questao.request.bancaId
                    && this.questao.request.orgaoId
                    && this.questao.request.enunciado;
            }
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

            listBanca() {
                apiService.listBanca()
                    .then((response) => this.bancas = response.data)
                    .catch((error) => console.log(error))
                    .finally();
            },

            listOrgao() {
                apiService.listOrgao()
                    .then((response) => this.orgaos = response.data)
                    .catch((error) => console.log(error))
                    .finally();
            },

            listAssunto() {
                apiService.listAssunto()
                    .then((response) => this.assuntos = response.data)
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
