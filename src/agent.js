import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://antchain.org/api/v1';

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
        requests.get('/address/get_value/' + address), // UGLY!
    currentHeight: () =>
        requests.get('/block/get_current_height')
}

export default {
  Wallet
};