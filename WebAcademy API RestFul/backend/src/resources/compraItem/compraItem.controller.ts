import { Request, Response } from 'express';
import {
  createCompraItem,
  getAllCompraItens,
  getCompraItem,
  updateCompraItem,
} from './compraItem.services';
import { CreateCompraItemDto } from './compraItem.types';

const index = async (req: Request, res: Response) => {
  try {
    const compras = await getAllCompraItens;
    res.status(200).json({ compras });
  } catch (e) {
    res.status(500).json(e);
  }
};
const create = async (req: Request, res: Response) => {
  const compra: CreateCompraItemDto = req.body;
  try {
    const newCompraItem = await createCompraItem(compra);
    res.status(201).json(newCompraItem.toJSON());
  } catch (e) {
    res.status(500).json(e);
  }
};
const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const compra = await getCompraItem(id);
    if (compra == null)
      res.status(400).json({ msg: 'CompraItem não encontrada.' });
    else res.status(200).json(compra);
  } catch (e) {
    res.status(500).json(e);
  }
};
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const compra = req.body;
  try {
    const result = await updateCompraItem(id, compra);
    if (result == null)
      res.status(400).json({ msg: 'CompraItem não encontrada.' });
    else res.status(200).json({ msg: 'CompraItem atualizado.' });
  } catch (e) {
    res.status(500).json(e);
  }
};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
