import { Request, Response } from 'express';
import { Funcionarios } from '../models/Funcionarios';
import { Dependentes } from '../models/Dependentes';
import { Departamentos } from '../models/Departamentos';

export const createFuncionario = async (req: Request, res: Response) => {
  const funcionarioData = req.body;
  const departamentos = await Departamentos.findAll();
  try {
    const funcionario = await Funcionarios.create(funcionarioData);
    const funcionarios = await Funcionarios.findAll();
    res.render('main/funcionarios/allFuncionarios', { funcionarios,departamentos, csrf: req.csrfToken() });
  } catch (e: any) {
    console.error(e.errors);
    const funcionarios = await Funcionarios.findAll();
    res.render('main/funcionarios/allFuncionarios', { funcionario: funcionarioData, funcionarios, departamentos, errors: e.errors, csrf: req.csrfToken() });
  }
};

export const getFuncionarios = async (req: Request, res: Response) => {
  try {
    const funcionarios = await Funcionarios.findAll();

    const acceptHeader = req.header('Accept');

    if (acceptHeader === 'application/json') {
      res.json(funcionarios);
    } else {
      const departamentos = await Departamentos.findAll();
      res.render('main/funcionarios/allFuncionarios', { funcionarios, departamentos, csrf: req.csrfToken() });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar funcionários' });
  }
};

export const getFuncionarioById = async (req: Request, res: Response) => {
  const funcionarioId = req.params.id;

  try {
    const funcionario = await Funcionarios.findByPk(funcionarioId);
    if (!funcionario) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }
    const departamentos = await Departamentos.findAll();
    res.render('main/funcionarios/editFuncionarios', { funcionario, departamentos, csrf: req.csrfToken() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar funcionário' });
  }
};

export const updateFuncionario = async (req: Request, res: Response) => {
  const funcionarioId = req.params.id;
  const funcionarioData = req.body;

  try {
    const funcionario = await Funcionarios.findByPk(funcionarioId);
    if (!funcionario) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }
    await funcionario.update(funcionarioData);
    res.redirect('/funcionarios');
  } catch (e: any) {
    console.error(e.errors);
    const funcionarios = await Funcionarios.findAll();
    res.render('main/funcionarios/allFuncionarios', { funcionario: funcionarioData, funcionarios, errors: e.errors, csrf: req.csrfToken() });
  }
};

export const deleteFuncionario = async (req: Request, res: Response) => {
  const funcionarioId = req.params.id;

  try {
    const funcionario = await Funcionarios.findByPk(funcionarioId);
    if (!funcionario) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }
    await funcionario.destroy();
    res.redirect('/funcionarios');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir funcionário' });
  }
};

export const getDependentesByFuncionarioId = async (req: Request, res: Response) => {
  const funcionarioId = req.params.id;

  try {
    const funcionario = await Funcionarios.findByPk(funcionarioId);
    if (!funcionario) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }

    const dependentes = await Dependentes.findAll({
      where: { funcionarioId },
    });

    res.json(dependentes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar dependentes do funcionário' });
  }
};