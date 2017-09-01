import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://api.neonwallet.com/v1';

const responseBody = res => res.body;

const requests = {
    del: url =>
      superagent.del(`${API_ROOT}${url}`).then(responseBody),
    get: url =>
      superagent.get(`${API_ROOT}${url}`).then(responseBody),
    put: (url, body) =>
      superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
    post: (url, body) =>
      superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
};

const Wallet = {
    lookup: address =>
        requests.get(`/address/balance/${address}`),
    unspent: address =>
        requests.get(`/address/get_unspent/${address}`),
    history: address =>
        requests.get(`/address/history/${address}`),
    transaction: txid =>
        requests.get(`/transaction/${txid}`)
}

export default {
  Wallet
};