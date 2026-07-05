
import getProjectData from "./projects-data";
import { useState } from "react";
import "./project-style.css";


export default function Projects() {
    const data = getProjectData();

    const [selectedCategory, setSelectedCategory] = useState("All");
    const showList = selectedCategory === "All"
        ? data.projects
        : data.projects.filter(item => item.type === selectedCategory);

    return (
        <section className="projects-section">
            <div className="projects-header">
                <h1 className="heading">MY CREATIVE WORK</h1>
                <p className="subtext">
                    Projects that demonstrate my problem-solving approach, technical skills, and passion for building meaningful software.
                </p>
            </div>


            <div className="categories-filter-row">
                {data.categories.map((categoryName, techIndex) => (
                    <button
                        type="button"

                       className={`glass-category-button ${selectedCategory === categoryName ? "active" : ""}`}
                        onClick={
                            () => {
                                setSelectedCategory(categoryName)
                                console.log(categoryName)
                            }
                        }
                        key={techIndex}
                    >
                        {selectedCategory ? <span className="active"> {categoryName}</span> : <span className="NotActive"> {categoryName}  </span>}
                    </button>
                ))}
            </div>


            <div className="projects-grid">
                {showList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-img-wrapper">
                            <img src={project.thumbNail} alt={project.name} />
                        </div>


                        <div className="project-info-row">
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-subtext">{project.subText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}