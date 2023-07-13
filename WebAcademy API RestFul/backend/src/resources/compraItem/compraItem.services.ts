import { CompraItem } from '../../models/CompraItem';
import { CreateCompraItemDto, UpdateCompraItemDto } from './compraItem.types';

export const getAllCompraItens = async (): Promise<CompraItem[]> => {
  const compraItens = await CompraItem.findAll();
  return compraItens.map((p) => p.toJSON());
};

export const createCompraItem = async (
  compraItem: CreateCompraItemDto,
): Promise<CompraItem> => {
  return await CompraItem.create(compraItem);
};

export const getCompraItem = async (id: string): Promise<CompraItem | null> => {
  return await CompraItem.findOne({ where: { id } });
};

export const updateCompraItem = async (
  id: string,
  compraItem: UpdateCompraItemDto,
): Promise<number | null> => {
  const compraItemToBeUpdated = await getCompraItem(id);
  if (compraItemToBeUpdated == null) return null;
  const [affectedCount] = await CompraItem.update(compraItem, {
    where: { id },
  });
  return affectedCount;
};
