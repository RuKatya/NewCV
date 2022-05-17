"use strict";
exports.__esModule = true;
var Project = function (props) {
    var project = props.project;
    console.log(project);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "projects__eachProject--project" },
            React.createElement("h3", null, project.title),
            React.createElement("img", { src: project.mainImg, alt: project.title }))));
};
exports["default"] = Project;
