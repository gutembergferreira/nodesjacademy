import { Request, Response } from 'express';
import { Departamentos } from '../models/Departamentos';

export const createDepartamento = async (req: Request, res: Response) => {
  const departamento = req.body;
  
  try {
    const departamento = await Departamentos.create(req.body);
    const departamentos = await Departamentos.findAll();
    res.render('main/departamentos/allDepartamentos', { departamentos, csrf: req.csrfToken() });
  } catch (e: any) {
    console.error(e.errors);
    const departamentos = await Departamentos.findAll();
    res.render('main/departamentos/allDepartamentos', { departamento, departamentos, errors: e.errors, csrf: req.csrfToken() });
  }
};

export const getDepartamentos = async (req: Request, res: Response) => {
  try {
    const departamentos = await Departamentos.findAll();

    const acceptHeader = req.header('Accept');

    if (acceptHeader === 'application/json') {
      res.json(departamentos); // Retorna o JSON se o cabeçalho "Accept" for "application/json"
    } else {
      res.render('main/departamentos/allDepartamentos', { departamentos, csrf: req.csrfToken()  }); // Renderiza a página HTML se o cabeçalho "Accept" for diferente de "application/json"
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar departamentos' });
  }
};

export const getDepartamentoById = async (req: Request, res: Response) => {
  const departamentoId = req.params.id;

  try {
    const departamento = await Departamentos.findByPk(departamentoId);
    if (!departamento) {
      return res.status(404).json({ message: 'Departamento não encontrado' });
    }
    res.render('main/departamentos/editDepartamentos', { departamento, csrf: req.csrfToken() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar departamento' });
  }
};

export const updateDepartamento = async (req: Request, res: Response) => {
  const departamentoId = req.params.id;
  const departamento = req.body;
  try {
    const departamento = await Departamentos.findByPk(departamentoId);
    if (!departamento) {
      return res.status(404).json({ message: 'Departamento não encontrado' });
    }
    await departamento.update(req.body);
    res.redirect('/departamentos'); // Redireciona para a lista de departamentos após a edição
  } catch (e: any) {
    console.error(e.errors);
    const departamentos = await Departamentos.findAll();
    res.render('main/departamentos/allDepartamentos', { departamento, departamentos, errors: e.errors, csrf: req.csrfToken() });
  }
};

export const deleteDepartamento = async (req: Request, res: Response) => {
  const departamentoId = req.params.id;
  
  try {
    const departamento = await Departamentos.findByPk(departamentoId);
    if (!departamento) {
      return res.status(404).json({ message: 'Departamento não encontrado' });
    }
    await departamento.destroy();
    res.redirect('/departamentos'); // Redireciona para a lista de departamentos após a exclusão
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir departamento' });
  }
};