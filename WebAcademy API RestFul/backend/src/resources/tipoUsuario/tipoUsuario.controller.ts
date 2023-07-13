import { Request, Response } from 'express';
import {
  listTiposUsuarios,
  createTipoUsuario,
  getAllTipoUsuarios,
  getTipoUsuario,
  updateTipoUsuario,
} from './tipoUsuario.services';
import { CreateTipoUsuarioDto } from './tipoUsuario.types';

const index = async (req: Request, res: Response) => {
  try {
    const tipoUsuarios = await listTiposUsuarios();
    res.status(200).json({ tipoUsuarios });
  } catch (e) {
    res.status(500).json(e);
  }
};
const create = async (req: Request, res: Response) => {
  const tipoUsuario: CreateTipoUsuarioDto = req.body;
  try {
    const newTipoUsuario = await createTipoUsuario(tipoUsuario);
    res.status(201).json(newTipoUsuario.toJSON());
  } catch (e) {
    res.status(500).json(e);
  }
};
const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tipoUsuario = await getTipoUsuario(id);
    if (tipoUsuario == null)
      res.status(400).json({ msg: 'TipoUsuario não encontrada.' });
    else res.status(200).json(tipoUsuario);
  } catch (e) {
    res.status(500).json(e);
  }
};
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tipoUsuario = req.body;
  try {
    const result = await updateTipoUsuario(id, tipoUsuario);
    if (result == null)
      res.status(400).json({ msg: 'TipoUsuario não encontrada.' });
    else res.status(200).json({ msg: 'TipoUsuario atualizado.' });
  } catch (e) {
    res.status(500).json(e);
  }
};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
