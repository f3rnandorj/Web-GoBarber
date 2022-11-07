import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  // primeiro parametro URL, segundo parametro e o que queremos enviar
  const response = yield call(api.post, 'sessions', { email, password });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('Usuário não e prestador de serviços');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
