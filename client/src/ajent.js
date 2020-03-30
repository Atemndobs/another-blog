import superagentProminse from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentProminse(_superagent, global.Promise);
const API_ROOT = 'https://127.0.0.1:8000/api';

const responsBody = response => response.body["hydra:member"]

export const requests = {
    get: (url) =>
    superagent.get(`${API_ROOT}${url}`).then(responsBody)
};