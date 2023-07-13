import { CompraItem } from '../../models/CompraItem';

export type CreateCompraItemDto = Pick<
  CompraItem,
  'compraId' | 'produtoId' | 'quantidade'
>;
export type UpdateCompraItemDto = Pick<
  CompraItem,
  'compraId' | 'produtoId' | 'quantidade'
>;
