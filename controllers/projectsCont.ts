import Project from "../models/projects"

export const hendleGetAllProjects = async (req, res) => {
    try {
        const projects = await Project.find()

        res.send(projects)
        // console.log(projects)
    } catch (error) {
        console.log(error)
    }
}

