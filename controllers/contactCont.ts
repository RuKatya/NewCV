import Contact from "../models/contact"

export const hendleSaveMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body

        if (name && email) {

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
            res.send({ message: 'something miss' })
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}