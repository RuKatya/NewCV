import Contact from "../models/contact"
import { validationResult } from 'express-validator';

export const hendleSaveMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body

        const errors = validationResult(req)

        console.log(errors)
        if (!errors.isEmpty()) {
            try {
                console.log(errors.array()[0].msg)
                return res.send({ errors: errors.array()[0].msg });
            } catch (error) {
                console.log(error)
            }
        }

        if (name && email && message) {
            console.log(name, email, message)
            try {
                const userContact = new Contact({ name, email, message })
                await userContact.save()

                res.send({ message: 'we get the message' })
            } catch (error) {
                console.log(error)
                res.send(error)
            }
        } else {
            res.send({ error: 'something miss' })
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}