import bcrypt from 'bcryptjs';
import { LoginDto } from './auth.types';
import { Usuario } from '../../models/Usuario';

export const checkCredentials = async ({
  email,
  senha,
}: LoginDto): Promise<Usuario | null> => {
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) return null;
  const ok = await bcrypt.compare(senha, usuario.senha);
  //const ok = senha == usuario.senha;
  return ok ? usuario : null;
};
