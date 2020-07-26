<template>
   <div class="home container">
      <div class="row mt-5">
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
            <h2>Bem vindo, aluno!</h2>
            <h5>Monte o seu programa de estudos</h5>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <div class="form-group">
               <label for="select-orgao">Órgão</label>
               <select type="text" id="select-orgao" class="form-control" v-model="home.request.orgaoId">
                  <option value="">--</option>
                  <option v-for="orgao in orgaos" :key="orgao.id" :value="orgao.id">
                     {{ orgao.nome }}
                  </option>
               </select>
            </div>
            <div class="form-group">
               <label for="select-banca">Banca</label>
               <select type="text" id="select-banca" class="form-control" v-model="home.request.bancaId">
                  <option value="">--</option>
                  <option v-for="banca in bancas" :key="banca.id" :value="banca.id">
                     {{ banca.nome }}
                  </option>
               </select>
            </div>
            <div class="form-group">
               <button
                  class="btn btn-primary"
                  @click="getPlanoEstudo"
                  :disabled="!home.request.orgaoId || !home.request.bancaId"
               >
                  Criar programa de estudos
               </button>
               <span class="mx-2" style="color: #ddd">|</span>
               <button class="btn btn-light" @click="reset">Limpar</button>
            </div>
         </div>
      </div>
      <div class="row mt-5" v-if="planoEstudo.length">
         <div class="col">
            <table class="table table-hover table-sm">
               <thead>
                  <tr>
                     <th>Assunto</th>
                     <th>Quantidade de Questões</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="plano in planoEstudo" :key="plano.assunto">
                     <td>{{ plano.assunto }}</td>
                     <td>{{ plano.count }}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<script>

    import apiService from '../service/api.service';

    export default {
        name: 'Home',
        data: function () {
            return {
                home: {
                    request: {
                        orgaoId: undefined,
                        bancaId: undefined,
                    },
                    response: {
                        orgaoId: undefined,
                        bancaId: undefined,
                    }
                },
                orgaos: [],
                bancas: [],
                planoEstudo: [],
                hasMessage: false,
                message: undefined,
                status: undefined,
            }
        },
        created() {
            this.listOrgao();
            this.listBanca();
        },
        computed: {
            messageStyle() {
                return this.status == 200 ? 'success' : 'danger';
            }
        },
        methods: {

            listOrgao() {
                apiService.listOrgao()
                    .then(response => {
                        this.orgaos = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },

            listBanca() {
                apiService.listBanca()
                    .then(response => {
                        this.bancas = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },

            getPlanoEstudo() {
                this.hasMessage = false;
                this.message = undefined;
                apiService.getPlanoEstudo(this.home.request.bancaId, this.home.request.orgaoId)
                    .then(response => {
                        if (response.data.length) {
                           this.planoEstudo = response.data;
                        }
                        else {
                            this.hasMessage = true;
                            this.message = 'Não existem questões cadastradas para o órgão e banca selecionados.';
                            this.planoEstudo = [];
                        }
                    })
                    .catch(() => {
                        this.hasMessage = true;
                        this.message = 'Erro ao obter questões.';
                        this.planoEstudo = [];
                    });
            },

            reset() {
                this.home.request.orgaoId = undefined;
                this.home.request.bancaId = undefined;
                this.planoEstudo = [];
            }
        }
    }
</script>
