import { TipoUsuario } from '../../models/TipoUsuario';
import {
  CreateTipoUsuarioDto,
  UpdateTipoUsuarioDto,
} from './tipoUsuario.types';

export const listTiposUsuarios = async (): Promise<TipoUsuario[]> => {
  const tiposUsuarios = await TipoUsuario.findAll();
  return tiposUsuarios.map((t) => t.toJSON());
};

export const getAllTipoUsuarios = async (): Promise<TipoUsuario[]> => {
  const tipoUsuarios = await TipoUsuario.findAll();
  return tipoUsuarios.map((p) => p.toJSON());
};

export const createTipoUsuario = async (
  tipoUsuario: CreateTipoUsuarioDto,
): Promise<TipoUsuario> => {
  return await TipoUsuario.create(tipoUsuario);
};

export const getTipoUsuario = async (
  id: string,
): Promise<TipoUsuario | null> => {
  return await TipoUsuario.findOne({ where: { id } });
};

export const updateTipoUsuario = async (
  id: string,
  tipoUsuario: UpdateTipoUsuarioDto,
): Promise<number | null> => {
  const tipoUsuarioToBeUpdated = await getTipoUsuario(id);
  if (tipoUsuarioToBeUpdated == null) return null;
  const [affectedCount] = await TipoUsuario.update(tipoUsuario, {
    where: { id },
  });
  return affectedCount;
};
