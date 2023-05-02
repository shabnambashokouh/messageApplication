import { sequelize, BaseModel, DataTypes } from '../config/database'
import User from './user'

class PubMessage extends BaseModel {}

PubMessage.init(
  {
    message: {
      type: DataTypes.TEXT,
      allowNull: null
    },
    from: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    }
  },
  { sequelize, modelName: 'pubMessage' }
)

export default PubMessage
