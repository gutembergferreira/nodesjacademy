import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.locals.authenticated = req.cookies['authenticated'];
    next();
};

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const logado = req.cookies['authenticated'];
    if (!logado) res.redirect('/login');
    else next();
};