import { Compra } from '../../models/Compra';

export type CreateCompraDto = Pick<Compra, 'usuarioId'>;
export type UpdateCompraDto = Pick<Compra, 'usuarioId'>;
