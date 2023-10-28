import { veryPassword } from "../../config/plugins/encryptedPasswordPlugins.js"
import  generateJWT  from "../../config/plugins/generateJWTPlugins.js"
import { AppError, catAsync } from "../../errors/index.js"
import { validateLogin, validateRegister, validationPartialRegister } from "./userSchema.js"
import { UserSrvices } from "./userService.js"

const userServices = new UserSrvices()

//!login

export const login = catAsync(async(req, res, next) => {
    const {hasError, errorMessage, userData} = validateLogin(req.body)

    if(hasError){
        return res.status(422).json({
            status: "error",
            message: errorMessage,
        });
    }

    const user = await userServices.findOneUserByEmail(userData.email)

    if(!user){
        return next(new AppError("this account does not exist"))
    }

    const iscorrectPassword = await veryPassword(
        userData.password,
        user.password
        
    )
     console.log( userData.password, user.password)

    if (!iscorrectPassword) {
        return next( new AppError("Icorrect email or passwor", 401))
    }
    
    const token = await generateJWT(user.id)

    return res.status(200).json({
        token,
        user:{
            id: user.id,
            name: user.name,
            email: user.email,
            status: user.status,
            role: user.role,
            
        }
    })
})

//!register

export const register = catAsync(async(req, res, next) => {
    const {hasError, errorMessage, userData} = validateRegister(req.body)

    if (hasError) {
        return res.status(422).json({
            status: "error",
            message: errorMessage,
        });
    }

    const user = await userServices.createUser(userData)
    const token = await generateJWT(user.id)
    return res.status(201).json({
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            status: user.status,
            role: user.role
        }
    })


})

export const userFindAll = catAsync(async(req, res) =>{
    const user = await userServices.findAllUsers()
    return res.json(user)
})

export const userFindOne = catAsync(async(req, res, next) => {
    const {user} = req 
    return res.json(user)
})

export const userUpdate = catAsync(async(req, res, next) => {
    const {hasError, errorMessage, userData} = validationPartialRegister(req.body)

    if (hasError) {
       return res.status(422).json({
        status: "error",
        message: errorMessage,
       })
    }

    const {id} = req.params
    const user = await userServices.findOneUserById(id)

    if (!user) {
        return res.status(404).json({
            status: "error",
            message: `User with id: ${id} no found`,
        });
    }

    const userUp = await userServices.updateUser(user, userData)
    return res.json(userUp)
})


export const userDelete = catAsync(async(req, res, next) =>{
    const {user} = req

    await userServices.deleteUser(user)
    return res.status(204).json(null)
})