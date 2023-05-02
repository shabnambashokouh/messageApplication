import PubMessage from '../models/pubmessage'
import {Op} from 'sequelize'

class PubMessageController {
    async list(req, res) {
        // const { user } = req

        const {messageId} = req.query


        const query = {
            limit: 10,
            order: [['id', 'DESC']]
        }

        if (messageId) {
            query.where = {id: {[Op.gt]: messageId}}
        }

        const message = await PubMessage.findAll(query)

        res.json(message)
    }
}

export default new PubMessageController()
