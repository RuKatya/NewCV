import { Router } from "express";
import { hendleLogin, hendleReg } from "../controllers/loginCont";

const router = Router();

router
    .post("/login", hendleLogin)
    .post("/reg", hendleReg);

module.exports = router;
