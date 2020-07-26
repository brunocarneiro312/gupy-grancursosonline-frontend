<template>
   <div class="home container">
      <div class="row">
         <div class="col">
            {{ home }}
         </div>
      </div>
      <div class="row mt-5">
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
               <button class="btn btn-primary" @click="getPlanoEstudo">Criar programa de estudos</button>
            </div>
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
                bancas: []
            }
        },
        created() {
            this.listOrgao();
            this.listBanca();
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
                apiService.getPlanoEstudo(this.home.request.bancaId, this.home.request.orgaoId)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error));
            }
        }
    }
</script>
