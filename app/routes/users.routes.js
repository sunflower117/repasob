import { Router } from "express";
import * as controller from "../controllers/users.controller";

const route = Router();

route.get('/user',controller.findAllUser);
route.get('/user/:id',controller.findUser);
route.post('/user',controller.insertUser);
export default route;