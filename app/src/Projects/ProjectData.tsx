import { ProjectDescriptor, ProjectData } from "../Types/types";

const overviews : ProjectDescriptor[] = [
    {
        title: "Project Local",
        thumbnail: "local.png",
        date: "Summer 2022",
        description: "Project Local is a short horror story platform I made using React and typescript.",
        skills: "React, Typescript",
        id: "0"
    },
    {
        title: "No Honor Among Thieves",
        thumbnail: "unnamed.png",
        date: "Spring 2023",
        description: "No Honor Among Thieves was my senior capstone project where I teamed up with Chicago studio Iron Galaxy to create the guard AI for an art heist game.",
        skills: "C#, Unity Engine, Agile Development",
        id: "1"
    }
];

const projects : ProjectData[] = [
    {
        paragraphOne: "Project Local was a project I took on in an effort to house one of my favorite past times - writing short horror stories. I had the idea to emphasize the location aspect of spoken stories in the form of a globe where visitor's can click points and read stories from those coordinates.",
        paragraphTwo: "The website was made using React (using React router) and hosted through Firebase. The content is currently being stored locally with plans to use a cloud-storage solution soon. It was a fun challenge to use Draft.js to format each section of text into blocks that each contains data (formatting, styles) that are then turned back into HTML for displaying. From this project, I got a better grasp on using React and routing in a way that allows code to be reusable and modular for further expansion. Working on this project solo, it was also a good experience with task management and meeting deadlines set as I worked.",
        length: "3 Months",
        size: "Solo",
        imageOne : {
            path:"mimicry.png",
            description:"Once a story is selected, visitors are given a small description before reading.",
            alt:"mimicry"
        },
        imageTwo : {
            path:"route47.png",
            description:"An example story title with generated art.",
            alt:"route47"
        },
        imageThree : {
            path:"editing.png",
            description:"An example of the editor using Draft.js.",
            alt:"editor"
        },
        link : "https://project-local-e1462.web.app/picker"
    },
    {
        paragraphOne: "No Honor Among Thieves was a capstone group project in Michigan State University's highly-ranked Game Development minor. With my team consisting of many programmers, we decided to tackle making a fully-networked online game with enemy AI and player v. player interaction. The game focuses on a group of art thieves all competing to steal paintings from a highly guarded museum. My role on the project was creating the aforementioned enemy AI in the form of the museum's guards. Using a state-based system, I created an AI that reacts to stimuli from the player's through visuals and sound. For example, if a player throws a painting at another player, the guard will successfully path to that location and investigate the disturbance.",
        paragraphTwo: "Each guard is made up of several states that determine their actions on a by-frame basis. Transitions between these states drive their general locomotion and animation. On top of this, having the game be networked meant that the guard's needed to work not only on the host but on the client's as well. To do this, I used RPC functionality from our solution Photon's toolbox. Anytime data needed to be conveyed across all instances, the guard's were able to handle this complexity and make sure that every player was experiencing the same game.",
        length: "Semester",
        size: "9 Members",
        imageOne : {
            path:"ingame.png",
            description:"A guard chasing a player. If he's this close, you're going to get caught!",
            alt:"in game screenshot"
        },
        imageTwo : {
            path:"wireframe.png",
            description:"A peek at the vision cone mesh that serves as the guard's eyes. Size is determined easily by inspector values.",
            alt:"wireframe in editor"
        },
        imageThree : {
            path:"",
            description:"",
            alt:""
        },
        link : "https://david-khankin.itch.io/no-honor-among-thieves"
    },
]

export {overviews, projects};