import mongoose from "mongoose"
import keys from './keys'

export const connectDB = async () => {
    try {
        await mongoose.connect(keys.MONGO_URL, () => {
            console.log(`DB connected!`)
        })
    } catch (error) {
        console.log(error)
    }
}