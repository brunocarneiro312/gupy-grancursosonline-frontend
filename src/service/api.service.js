import axios from 'axios';

const getOrgao = (orgaoId) => {
    return axios.get(`${process.env.VUE_APP_API}/orgao/${orgaoId}`);
};

const getBanca = (bancaId) => {
    return axios.get(`${process.env.VUE_APP_API}/banca/${bancaId}`);
};

const getQuestao = (questaoId) => {
    return axios.get(`${process.env.VUE_APP_API}/questao/${questaoId}`);
};

const getAssunto = (assuntoId) => {
    return axios.get(`${process.env.VUE_APP_API}/assunto/${assuntoId}`);
};

const listOrgao = () => {
    return axios.get(`${process.env.VUE_APP_API}/orgao`);
};

const listBanca = () => {
    return axios.get(`${process.env.VUE_APP_API}/banca`);
};

const listQuestao = () => {
    return axios.get(`${process.env.VUE_APP_API}/questao`);
};

const listAssunto = () => {
    return axios.get(`${process.env.VUE_APP_API}/assunto`);
};

const saveOrgao = (orgao) => {
    return axios.post(`${process.env.VUE_APP_API}/orgao`, orgao);
};

const saveBanca = (banca) => {
    return axios.post(`${process.env.VUE_APP_API}/banca`, banca);
};

const saveQuestao = (questao) => {
    return axios.post(`${process.env.VUE_APP_API}/questao`, questao);
};

const saveAssunto = (assunto) => {
    return axios.post(`${process.env.VUE_APP_API}/assunto`, assunto);
};

const deleteOrgao = (orgaoId) => {
    return axios.delete(`${process.env.VUE_APP_API}/orgao/${orgaoId}`);
};

const deleteBanca = (bancaId) => {
    return axios.delete(`${process.env.VUE_APP_API}/banca/${bancaId}`);
};

const deleteQuestao = (questaoId) => {
    return axios.delete(`${process.env.VUE_APP_API}/questao/${questaoId}`);
};

const deleteAssunto = (assuntoId) => {
    return axios.delete(`${process.env.VUE_APP_API}/assunto/${assuntoId}`);
};

const updateOrgao = (orgao) => {
    return axios.put(`${process.env.VUE_APP_API}/orgao`, orgao);
};

const updateBanca = (banca) => {
    return axios.put(`${process.env.VUE_APP_API}/banca`, banca);
};

const updateQuestao = (questao) => {
    return axios.put(`${process.env.VUE_APP_API}/questao`, questao);
};

const updateAssunto = (assunto) => {
    return axios.put(`${process.env.VUE_APP_API}/orgao`, assunto);
};

export default {
    getOrgao: getOrgao,
    getBanca: getBanca,
    getQuestao: getQuestao,
    getAssunto: getAssunto,
    listOrgao: listOrgao,
    listBanca: listBanca,
    listQuestao: listQuestao,
    listAssunto: listAssunto,
    saveOrgao: saveOrgao,
    saveBanca: saveBanca,
    saveQuestao: saveQuestao,
    saveAssunto: saveAssunto,
    deleteOrgao: deleteOrgao,
    deleteBanca: deleteBanca,
    deleteQuestao: deleteQuestao,
    deleteAssunto: deleteAssunto,
    updateOrgao: updateOrgao,
    updateBanca: updateBanca,
    updateQuestao: updateQuestao,
    updateAssunto: updateAssunto,
}
