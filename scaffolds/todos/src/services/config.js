import { isWeChatMiniProgram } from 'universal-env';

let URL_PREFIX = '/api/mp';

if (isWeChatMiniProgram) {
  URL_PREFIX = `http://localhost:7001${URL_PREFIX}`;
}

export default {
  URL_PREFIX
}
