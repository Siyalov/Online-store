import sequelize from "../pool";
import { DataTypes, Model } from 'sequelize'
import config from '../config'
class User extends Model{
    declare id: number
    declare password: string
    declare email: string
    declare is_admin: boolean
}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        money: {
            type:DataTypes.INTEGER,
            defaultValue: 0
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
        sequelize,
        modelName: 'users'
    }
)

class Token extends Model{
    declare id: number
    declare refresh_token: string
}

Token.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        refresh_token:{
            type:DataTypes.STRING
        }
    },{
        sequelize,
        modelName: 'tokens'
    }
)

if (config.DEBUG)
    sequelize.sync({ force: true })
else
    sequelize.sync()

export {
    Token,
    User
}