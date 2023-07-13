import bcrypt from 'bcryptjs';
import { Usuario } from '../../models/Usuario';
import {
  CreateUsuarioDto,
  UpdateUsuarioDto,
  UsuarioDto,
} from './usuario.types';

export const getAllUsuarios = async (): Promise<Usuario[]> => {
  const usuarios = await Usuario.findAll({ attributes: ['id', 'nome', 'email', 'tipoUsuarioId'] });
  return usuarios.map((p) => p.toJSON());
};

export const createUsuario = async (
  usuario: CreateUsuarioDto,
): Promise<Usuario> => {
  const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_ROUNDS!, 10));
  const hash = await bcrypt.hash(usuario.senha, salt);
  // console.log('Hash da Senha', hash);
  const newUsuario = await Usuario.create({...usuario, senha: hash});
  return newUsuario.toJSON();
};

export const getUsuario = async (id: string): Promise<Usuario | null> => {
  const usuario = await Usuario.findOne({ where: { id }, attributes: ['id', 'nome', 'email', 'tipoUsuarioId'] });
  return usuario ? usuario.toJSON() : null;
};

export const updateUsuario = async (
  id: string,
  usuario: UpdateUsuarioDto,
): Promise<number | null> => {
  const usuarioToBeUpdated = await getUsuario(id);
  if (usuarioToBeUpdated == null) return null;
  const [affectedCount] = await Usuario.update(usuario, { where: { id } });
  return affectedCount;
};

export const removeUsuario = async (id: string): Promise<boolean> => {
  const removedUsuario = await Usuario.destroy({ where: { id } });
  return !!removedUsuario;
};

export const buscaUsuarioPorEmail = async (
  email: string,
): Promise<UsuarioDto | null> => {
  return await Usuario.findOne({
    attributes: ['id', 'tipoUsuarioId', 'nome', 'email'],
    where: { email },
  });
};
