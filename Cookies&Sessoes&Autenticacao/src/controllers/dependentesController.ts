import { Request, Response } from 'express';
import { Dependentes } from '../models/Dependentes';

export const createDependente = async (req: Request, res: Response) => {
  try {
    const dependente = await Dependentes.create(req.body);
    res.status(201).json(dependente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar dependente' });
  }
};

export const getDependentes = async (_req: Request, res: Response) => {
  try {
    const dependentes = await Dependentes.findAll();
    res.json(dependentes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar dependentes' });
  }
};

export const getDependenteById = async (req: Request, res: Response) => {
  const dependenteId = req.params.id;

  try {
    const dependente = await Dependentes.findByPk(dependenteId);
    if (!dependente) {
      return res.status(404).json({ message: 'Dependente não encontrado' });
    }
    res.json(dependente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar dependente' });
  }
};

export const updateDependente = async (req: Request, res: Response) => {
  const dependenteId = req.params.id;

  try {
    const dependente = await Dependentes.findByPk(dependenteId);
    if (!dependente) {
      return res.status(404).json({ message: 'Dependente não encontrado' });
    }
    await dependente.update(req.body);
    res.json(dependente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar dependente' });
  }
};

export const deleteDependente = async (req: Request, res: Response) => {
  const dependenteId = req.params.id;

  try {
    const dependente = await Dependentes.findByPk(dependenteId);
    if (!dependente) {
      return res.status(404).json({ message: 'Dependente não encontrado' });
    }
    await dependente.destroy();
    res.json({ message: 'Dependente excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir dependente' });
  }
};
