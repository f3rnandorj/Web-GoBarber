import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </form>
    </>
  );
}
