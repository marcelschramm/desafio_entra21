import { Request, Response } from "express"
import { DataSource } from "typeorm"
import myDataSource from "./datasource"
import { Cliente } from "./entity/cliente"


const express = require('express')
const router = express.Router()

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


router.get("/", async (req: Request, res: Response) => {
    const users = await myDataSource.getRepository(Cliente).find()
    res.json(users)
})

router.post("/", async (req: Request, res: Response) => {
    const user = req.body
    const result = await myDataSource.getRepository(Cliente).save(user)
    res.send(result)
})

router.put("/:id", async (req: Request, res: Response) => {
    const user = await myDataSource.getRepository(Cliente).findOneBy({
        
    })
    myDataSource.getRepository(Cliente).merge(user, req.body)
    const results = await myDataSource.getRepository(Cliente).save(user)
    return res.send(results)
})


router.delete("/:id", async (req: Request, res: Response) => {
    const results = await myDataSource.getRepository(Cliente).delete(req.params.id)
    return res.send(results)
})

export default router