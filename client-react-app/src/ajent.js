import superagentProminse from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentProminse(_superagent, global.Promise);
const newLocal = 'https://127.0.0.1:8000/api';
const apiLocal = 'https://another-blog-admin.herokuapp.com/api';


const API_ROOT =  newLocal;


const responsBody = response => response.body["hydra:member"]

export const requests = {
    get: (url) =>
    superagent.get(`${API_ROOT}${url}`).then(responsBody)
};