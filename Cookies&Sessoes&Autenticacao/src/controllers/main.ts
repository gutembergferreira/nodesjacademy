import { Request, Response } from 'express';
import {
  createDepartamento,
  getDepartamentos,
  getDepartamentoById,
  updateDepartamento,
  deleteDepartamento,
} from './departamentosController';

const index = (req: Request, res: Response) => {
  res.render('main/index');
};

const about = (req: Request, res: Response) => {
  res.render('main/about');
};

const ui = (req: Request, res: Response) => {
  res.render('main/ui');
};

const departamentos = (req: Request, res: Response) => {
  res.render('main/departamentos', getDepartamentos);
};

const login = (req: Request, res: Response) => {
  res.render('main/login/login');
};

export default { index, about, ui, departamentos, login };
