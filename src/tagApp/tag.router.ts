import { Router } from "express";
import { tagController } from "./tag.controller";
import { isDataMiddleware } from "../middlewares/isDataMiddleware";


const router = Router()

router.use(isDataMiddleware)

router.post('/create', tagController.createTag,)

export default router