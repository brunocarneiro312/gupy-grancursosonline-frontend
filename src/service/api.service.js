import axios from 'axios';

const getOrgao = (orgaoId) => {
    return axios.get('http://localhost:8080/grancursos/orgao' + orgaoId);
};

const listOrgao = () => {
    return axios.get('http://localhost:8080/grancursos');
};

const saveOrgao = (orgao) => {
    return axios.post('http://localhost:8080/grancursos/orgao', orgao);
};

const deleteOrgao = (orgaoId) => {
    return axios.delete('http://localhost:8080/grancursos/orgao/' + orgaoId);
};

const updateOrgao = (orgaoId) => {
    return axios.put('http://localhost:8080/grancursos/orgao/' + orgaoId);
};

export default {
    getOrgao: getOrgao,
    listOrgao: listOrgao,
    saveOrgao: saveOrgao,
    deleteOrgao: deleteOrgao,
    updateOrgao: updateOrgao
}
