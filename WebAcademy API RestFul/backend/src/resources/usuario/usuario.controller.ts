import { Request, Response } from 'express';
import {
  createUsuario,
  getAllUsuarios,
  getUsuario,
  updateUsuario,
  removeUsuario,
  buscaUsuarioPorEmail
} from './usuario.services';
import { CreateUsuarioDto } from './usuario.types';

const index = async (req: Request, res: Response) => {
  try {
    const usuarios = await getAllUsuarios();
    console.log(usuarios)
    res.status(200).json({ usuarios });
  } catch (e) {
    res.status(500).json(e);
  }
};
const create = async (req: Request, res: Response) => {
  const usuario: CreateUsuarioDto = req.body;
  try {
    const usuarioSearched = await buscaUsuarioPorEmail(usuario.email);
    if (usuarioSearched)
      res
        .status(400)
        .json({ msg: 'Já existe um usuário para o e-mail informado.' });

    const newUsuario = await createUsuario(usuario);
    res.status(201).json(newUsuario);
  } catch (e) {
    res.status(500).json(e);
  }
};
const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await getUsuario(id);
    if (usuario == null)
      res.status(400).json({ msg: 'Usuário não encontrado.' });
    else res.status(200).json(usuario);
  } catch (e) {
    res.status(500).json(e);
  }
};
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = req.body;
  try {
    const result = await updateUsuario(id, usuario);
    if (result == null)
      res.status(400).json({ msg: 'Usuário não encontrado.' });
    else res.status(200).json({ msg: 'Usuário atualizado.' });
  } catch (e) {
    res.status(500).json(e);
  }
};
const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const isRemovedUsuario = await removeUsuario(id);
    if (!isRemovedUsuario)
      res.status(400).json({ msg: 'Não existe usuário com id informado.' });
    else res.status(200).json({ msg: 'Usuário removido com sucesso.' });
  } catch (e) {
    res.status(500).json(e);
  }
};

export default { index, create, read, update, remove };
