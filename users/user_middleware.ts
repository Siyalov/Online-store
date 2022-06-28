import tokenService from "./token_service"
import status from 'http-errors'
const userMiddleware = function(req: any, _res: any, next: any){
    try{
        const authHeader = req.headers.authorization

        if(!authHeader){
            return next(status(401))
        }

        const accesstoken = authHeader.split(' ')[1]
        if(!accesstoken){
            return next(status(401))
        }

        const userData = tokenService.validateToken(accesstoken)
        console.log(userData)
        if(!userData){
            return next(status(401))
        }

        req.user = userData
        next()
    }catch(e){
        return next(status(401))
    }
}

export {userMiddleware}
