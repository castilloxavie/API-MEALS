import  express  from "express";

import { envs } from "./config/environmenst/environmenst.js";
import { enableMorgan } from "./config/plugins/morganPlugins.js"
import { AppError } from "./errors/appError.js";
import { globalErrorHandler } from "./errors/errorController.js";
import { router } from "./routes/routes.js";

const app = express()

app.use(express.json())

if(envs.NODE_ENV === "development"){
    enableMorgan(app)
}

//routes
app.use("/api/v1", router)

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
  })

app.use(globalErrorHandler)

export default app