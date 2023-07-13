import { Request, Response } from 'express';
import {
  createCompra,
  getAllCompras,
  getCompra,
  updateCompra,
} from './compra.services';
import { CreateCompraDto } from './compra.types';

const index = async (req: Request, res: Response) => {
  try {
    const compras = await getAllCompras;
    res.status(200).json({ compras });
  } catch (e) {
    res.status(500).json(e);
  }
};
const create = async (req: Request, res: Response) => {
  const compra: CreateCompraDto = req.body;
  try {
    const newCompra = await createCompra(compra);
    res.status(201).json(newCompra.toJSON());
  } catch (e) {
    res.status(500).json(e);
  }
};
const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const compra = await getCompra(id);
    if (compra == null) res.status(400).json({ msg: 'Compra não encontrada.' });
    else res.status(200).json(compra);
  } catch (e) {
    res.status(500).json(e);
  }
};
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const compra = req.body;
  try {
    const result = await updateCompra(id, compra);
    if (result == null) res.status(400).json({ msg: 'Compra não encontrada.' });
    else res.status(200).json({ msg: 'Compra atualizado.' });
  } catch (e) {
    res.status(500).json(e);
  }
};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
