import jwt from "jwt-simple";
import User from "../models/user";
import bcrypt from 'bcryptjs';

export const hendleReg = async (req, res) => {
    try {
        const { name, password } = req.body.userData

        if (name && password) {
            const hashpassword = await bcrypt.hash(password, 10)
            const hashrole = await bcrypt.hash(process.env.ROLE, 10)

            try {
                const newUser = new User({ name, password: hashpassword, role: hashrole })
                const result = await newUser.save();

                res.send(result)
            } catch (error) {
                console.log(error);
                res.send({ error: error.message });
            }
        }
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
};

export const hendleLogin = async (req, res) => {
    try {
        const { name, password } = req.body.userData

        if (name) {
            const user = await User.findOne({ name })
            const areSame = await bcrypt.compare(password, user.password)

            if (areSame) {
                res.cookie("userInfo", { name, id: user._id, role: user.role }, { maxAge: 60 * 60 * 1000 });
                const payload = { name, id: user._id, role: user.role };
                const token = jwt.encode(payload, process.env.SECRET);

                res.cookie(
                    "userInfo",
                    token,
                    { maxAge: 60 * 60 * 24 * 1000 }
                );

                res.send({ ok: true, login: true });
                return;
            }
            throw new Error("username or password are inncorect");
        }
    }
    catch (error) {
        console.log(error.message);
        res.send({ error: error.message });
    }
};