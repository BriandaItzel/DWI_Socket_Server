import { Router, Request, Response } from "express";
export const router = Router();

<<<<<<< HEAD

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

export default router;
=======
router.get('/mensajes',(req: Request, res: Response) =>
{
    res.json(
        {
        ok:true,
        mensaje: 'Todo esta bien :D'
    });
})

router.post('/mensajes',(req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo
    const de = req.body.de

    res.json(
        {
            ok:true,
            cuerpo,
            de
        }
    )
})
>>>>>>> 35425f4 (Implementacion de las clases usuario y lista usuario con sus metodos: agregar, borrar y actualizar)
