import jwt from "jwt-simple";
import Project from "../models/projects"
import User from "../models/user";
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
        const decoded = jwt.decode(userInfo, process.env.SECRET);
        console.log(decoded)
        const { name, role } = decoded

        const user = await User.findOne({ name })
        console.log(user)

        if (decoded && role == user.role) {
            console.log(true)
            console.log(formObj)

            // const obj = {}
            // fileMiddleware.create(obj, (err, item) => {
            //     if (err) {
            //         console.log(err);
            //     }
            //     else {
            //         // item.save();
            //         res.redirect('/');
            //     }
            // });

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

