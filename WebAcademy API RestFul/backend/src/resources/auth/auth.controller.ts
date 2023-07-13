import { Request, Response } from 'express';
import { checkCredentials } from './auth.services';
import {
  createUsuario,
  buscaUsuarioPorEmail,
} from '../usuario/usuario.services';
import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';

const signup = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  try {
    const usuario = await buscaUsuarioPorEmail(email);
    if (usuario)
      res
        .status(400)
        .json({ msg: 'Já existe um usuário para o e-mail informado.' });
    const newUsuario = await createUsuario({
      nome,
      email,
      senha,
      tipoUsuarioId: TiposUsuarios.CLIENTE,
    });
    // console.log(newUsuario);
    res.status(201).json(newUsuario);
  } catch (e) {
    res.status(500).json(e);
  }
};
const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  try {
    const usuario = await checkCredentials({ email, senha });
    if (!usuario)
      return res
        .status(401)
        .json({ msg: 'O e-mail e/ou a senha estão incorretos.' });
    req.session.uid = usuario.id;
    req.session.tipoUsuarioId = usuario.tipoUsuarioId;
    res.status(200).json({ msg: 'Usuário logado.' });
  } catch (e) {
    res.status(500).json(e);
  }
};
const logout = async (req: Request, res: Response) => {
  if (req.session.uid) {
    req.session.destroy((err) => {
      if (err) return res.status(500).json(err);
      res.status(200).json({ msg: 'O logout foi feito com sucesso.' });
    });
  } else {
    res.status(400).json({ msg: 'O usuário não está logado.' });
  }
};

export default { signup, login, logout };
