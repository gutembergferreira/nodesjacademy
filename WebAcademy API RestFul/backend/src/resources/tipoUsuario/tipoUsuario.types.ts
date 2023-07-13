import { TipoUsuario } from '../../models/TipoUsuario';

export type CreateTipoUsuarioDto = Pick<TipoUsuario, 'rotulo'>;
export type UpdateTipoUsuarioDto = Pick<TipoUsuario, 'rotulo'>;
