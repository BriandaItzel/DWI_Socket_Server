import { Router, Request, Response } from "express";
export const router = Router();


router.get('/mensajes', (req: Request, res: Response) =>
{
    res.json(
 {
    ok:true,
    mensaje: 'Todo esta bien'
 });
})

router.post('/mensajes', (req:Request, res:Response) =>
{
   const cuerpo = req.body.cuerpo
   const de = req.body.de

   res.json({
      ok:true,
      cuerpo,
      de
  
   });

});
//exportamos el router
export default router;