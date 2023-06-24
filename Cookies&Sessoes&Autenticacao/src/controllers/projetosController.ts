import { Request, Response } from 'express';
import { Projetos } from '../models/Projetos';

export const createProjeto = async (req: Request, res: Response) => {
  try {
    const projeto = await Projetos.create(req.body);
    res.status(201).json(projeto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar projeto' });
  }
};

export const getProjetos = async (_req: Request, res: Response) => {
  try {
    const projetos = await Projetos.findAll();
    res.json(projetos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar projetos' });
  }
};

export const getProjetoById = async (req: Request, res: Response) => {
  const projetoId = req.params.id;

  try {
    const projeto = await Projetos.findByPk(projetoId);
    if (!projeto) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    res.json(projeto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar projeto' });
  }
};

export const updateProjeto = async (req: Request, res: Response) => {
  const projetoId = req.params.id;

  try {
    const projeto = await Projetos.findByPk(projetoId);
    if (!projeto) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    await projeto.update(req.body);
    res.json(projeto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar projeto' });
  }
};

export const deleteProjeto = async (req: Request, res: Response) => {
  const projetoId = req.params.id;

  try {
    const projeto = await Projetos.findByPk(projetoId);
    if (!projeto) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    await projeto.destroy();
    res.json({ message: 'Projeto excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir projeto' });
  }
};
