import jwt from 'jsonwebtoken'
import status from 'http-errors'


import config from '../config'
import {Token} from './models'
import { UserDTO } from './userDTO'

class TokenService
{
    generateTokens(payload: any){
        return {
            refreshToken: jwt.sign(payload, config.JWT_KEY, {expiresIn: '1h'}),
            accessToken: jwt.sign(payload, config.JWT_KEY, {expiresIn: '1m'})
        }
    }

    async saveToken(refreshToken: string){
        if (!refreshToken){
            throw status(204)
        }
        await Token.create({
            refresh_token: refreshToken
        })
    }

    validateToken(refreshToken: string){
        let userDto = new UserDTO(jwt.verify(refreshToken, config.JWT_KEY))
        console.log(userDto)
        if(!userDto){
            throw status(401)
        }
        return userDto
    }
}

export default new TokenService()