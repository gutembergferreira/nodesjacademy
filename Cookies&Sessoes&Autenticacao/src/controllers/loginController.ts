import { Request, Response } from 'express';

export const validatelogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Verifica se o username e a senha estão corretos
    if (username === 'user' && password === '12345') {
      // Define o cookie de autenticação como verdadeiro
      res.cookie('authenticated', 'true');
      res.redirect('/departamentos'); // Redireciona para a página de departamentos após o login bem-sucedido
    } else {
      res.redirect('/login'); // Redireciona de volta para a página de login em caso de falha no login
    }
  };

export const getLogin = async (req: Request, res: Response) => {
    res.render('main/login/login',{csrf: req.csrfToken()}); 
};


export const logout = async (req: Request, res: Response) => {
  res.clearCookie('authenticated');
  res.redirect('/login');
};
