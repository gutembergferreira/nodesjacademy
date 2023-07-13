import { Compra } from '../../models/Compra';
import { CreateCompraDto, UpdateCompraDto } from './compra.types';

export const getAllCompras = async (): Promise<Compra[]> => {
  const compras = await Compra.findAll();
  return compras.map((p) => p.toJSON());
};

export const createCompra = async (
  compra: CreateCompraDto,
): Promise<Compra> => {
  return await Compra.create(compra);
};

export const getCompra = async (id: string): Promise<Compra | null> => {
  return await Compra.findOne({ where: { id } });
};

export const updateCompra = async (
  id: string,
  compra: UpdateCompraDto,
): Promise<number | null> => {
  const compraToBeUpdated = await getCompra(id);
  if (compraToBeUpdated == null) return null;
  const [affectedCount] = await Compra.update(compra, { where: { id } });
  return affectedCount;
};
