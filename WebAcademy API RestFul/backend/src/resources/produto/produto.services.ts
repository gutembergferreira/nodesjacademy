import { Produto } from '../../models/Produto';
import { CreateProdutoDto, UpdateProdutoDto } from './produto.types';

export const getAllProdutos = async (): Promise<Produto[]> => {
  const produtos = await Produto.findAll();
  return produtos.map((p) => p.toJSON());
};

export const createProduto = async (
  produto: CreateProdutoDto,
): Promise<Produto> => {
  return await Produto.create(produto);
};

export const getProduto = async (id: string): Promise<Produto | null> => {
  return await Produto.findOne({ where: { id } });
};

export const updateProduto = async (
  id: string,
  produto: UpdateProdutoDto,
): Promise<number | null> => {
  const produtoToBeUpdated = await getProduto(id);
  if (produtoToBeUpdated == null) return null;
  const [affectedCount] = await Produto.update(produto, { where: { id } });
  return affectedCount;
};

export const removeProduto = async (id: string): Promise<boolean> => {
  const removedProduto = await Produto.destroy({ where: { id } });
  return !!removedProduto;
};
