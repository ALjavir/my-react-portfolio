import { index } from "@react-router/dev/routes"
import { list } from "isbot"


export default function getProjectData() {
    const sortList = ["All", "Mobile APP"];
    const projectData = [
        {
            name: "Lossless Music",
            thumbNail: "/assets/image/losslessAudio.png",
            subText: "Music Player for Audiophiles",
            type: "Mobile APP"
        },
        {
            name: "Academicpanel",
            thumbNail: "/assets/image/academicPanel.png",
            subText: "CAMPUS MANAGEMENT SYSTEM (FINAL YEAR CAPSTONE)",
            type: "Mobile APP"
        },
        {
            name: "sonare",
            thumbNail: "/assets/image/sonare.png",
            subText: "HIGH-FIDELITY E-COMMERCE APP",
            type: "Mobile APP"
        },
   
    ];

   
    return {
        categories: sortList,
        projects: projectData
    };
}