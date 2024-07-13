import { Router } from "express";
const router = Router();

router.get("/",(req,res)=>{
    res.json({test:'hi'})
})

export default router