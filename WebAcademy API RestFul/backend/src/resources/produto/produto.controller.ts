import { Request, Response } from 'express';
import {
  createProduto,
  getAllProdutos,
  getProduto,
  updateProduto,
  removeProduto
} from './produto.services';
import { CreateProdutoDto } from './produto.types';

const index = async (req: Request, res: Response) => {
  try {
    const produtos = await getAllProdutos;
    res.status(200).json({ produtos });
  } catch (e) {
    res.status(500).json(e);
  }
};
const create = async (req: Request, res: Response) => {
  const produto: CreateProdutoDto = req.body;
  try {
    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto.toJSON());
  } catch (e) {
    res.status(500).json(e);
  }
};
const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const produto = await getProduto(id);
    if (produto == null)
      res.status(400).json({ msg: 'Produto não encontrado.' });
    else res.status(200).json(produto);
  } catch (e) {
    res.status(500).json(e);
  }
};
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const produto = req.body;
  try {
    const result = await updateProduto(id, produto);
    if (result == null)
      res.status(400).json({ msg: 'Produto não encontrado.' });
    else res.status(200).json({ msg: 'Produto atualizado.' });
  } catch (e) {
    res.status(500).json(e);
  }
};
const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const isRemovedProduto = await removeProduto(id);
    if (!isRemovedProduto)
      res.status(400).json({ msg: 'Não existe produto com id informado.' });
    else res.status(200).json({ msg: 'Produto removido com sucesso.' });
  } catch (e) {
    res.status(500).json(e);
  }
};

export default { index, create, read, update, remove };
