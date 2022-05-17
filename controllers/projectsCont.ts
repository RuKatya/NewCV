import jwt from "jwt-simple";
import Project from "../models/projects"
import User from "../models/user";
import keys from '../keys'
const fileMiddleware = require('../middleware/file').any()

export const hendleGetAllProjects = async (req, res) => {
    try {
        const projects = await Project.find()

        res.send(projects)
    } catch (error) {
        console.log(error)
    }
}

export const hendleAddProject = async (req, res) => {
    try {
        const { userInfo } = req.cookies;
        const { formObj } = req.body
        const decoded = jwt.decode(userInfo, keys.SECRET);
        const { name, role } = decoded

        const user = await User.findOne({ name })
        console.log(user)

        if (decoded && role == user.role) {
            // let useTo = req.file

            // console.log(useTo);
            // if (!useTo) {
            //     res.send("Ошибка при загрузке файла");
            // } else {
            //     res.send("Файл загружен");
            // }



            const newProject = new Project(formObj)
            const result = await newProject.save()
            res.send({ ok: true, result })
            return;
        }
        throw new Error("user is not allowed");
    } catch (error) {
        console.log("Error on aAddProject:", error.message);
        res.send({ error: error.message });
    }

}

