<template>
   <div class="container mt-5">
      <div class="row">
         <div class="col">
            {{ questoes }}
         </div>
      </div>
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
            <table class="table table-sm table-hover text-center">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Banca</th>
                     <th>Órgão</th>
                     <th>Assunto</th>
                     <th>Enunciado</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="questao in questoes" :key="questao.id">
                     <td>{{ questao.id }}</td>
                     <td>{{ questao.banca }}</td>
                     <td>{{ questao.orgao }}</td>
                     <td>{{ questao.assunto }}</td>
                     <td>{{ questao.enunciado }}</td>
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
        name: "FormQuestao",
        data: function () {
            return {
                title: process.env.VUE_APP_TITLE,
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
                    .finally(() => console.log('finalizando'));
            },

            listQuestao() {
                apiService.listQuestao()
                    .then((response) => this.questoes = response.data)
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            saveQuestao() {
                apiService.saveQuestao(this.questao.request)
                    .then((response) => {
                        console.log(response.data);
                        this.listQuestao();
                    })
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            updateQuestao() {
                apiService.updateQuestao(this.questao.request)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error))
                    .finally(() => console.log('finalizando'));
            },

            deleteQuestao(id) {
                apiService.deleteQuestao(id)
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
