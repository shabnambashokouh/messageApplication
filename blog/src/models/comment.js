import {sequelize, BaseModel, DataTypes} from '../config/database'

class Comment extends BaseModel {
}

Comment.init(
    {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        articleId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'comment'
    }
)

export default Comment
