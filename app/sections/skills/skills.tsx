import "./skills-style.css";

export default function Skills() {
    const data = [
        {
            name: "Programming Languages",
            score: 8.8,
            tech: ["JavaScript", "TypeScript", "Python", "C++", "Java", "Dart", "C", "HTML", "CSS"],
            text: "Solid foundation in multi-paradigm software engineering. Ranging from highly optimized object-oriented systems to complex relational query languages and algorithmic data structures."
        },
        {
            name: "Mobile Engineering",
            score: 9.0,
            tech: ["GetX", "Flutter", "Bloc", "RESTful APIs", "Firebase (Auth/Firestore)", "Android Deployment"],
            text: "Engineering high-performance, cross-platform native ecosystems. Deeply focused on robust state management, fluid reactive UI architectures, seamless asynchronous network integration, and end-to-end production deployment."
        },
        {
            name: "Database & Backend Architectures",
            score: 8.5,
            tech: ["Supabase", "PostgreSQL", "MySQL", "Firebase Realtime Database"],
            text: "Architecting relational, real-time, and cloud-native data layers. Proficient in relational schema constraints, indexing layouts, and rapid serverless ecosystem synchronizations"
        },
        {
            name: "Core Engineering Tools",
            score: 9,
            tech: ["Figma", "Postman", "GitHub", "Git", "VS Code", "Android Studio"],
            text: "Maintaining modern, rapid agile development workflows. Utilizing automated version control branching, rigorous API testing protocols, precision UI/UX prototyping translations, and optimized compilation pipelines."
        }
    ];

    return (
        <section id="skills" className="skills-section">

            <div className="skills-header">
                <h1 className="heading">
                    MY TECHNICAL EXPERTICES
                </h1>
                <p className="subtext">Technologies and engineering practices. I've mastered through building
                    real-world applications.</p>
            </div>

            <div className="glass-content-container">
            {data.map((item, index) => (

                <div className="glass-content-panel" key={index}>

                    <div className="score-display">
                        <span className="score-highlight">{item.score}</span>
                        <span className="score-muted"> / 10</span>
                    </div>

                    <div className="content-center-wrapper">
                        <h3 className="card-title">{item.name}</h3>

                        <div className="tech-badges-wrap">

                            {item.tech.map((techName, techIndex) => (
                                <span className="glass-tech-badge" key={techIndex}>
                                    {techName}
                                </span>
                            ))}
                        </div>

                        <p className="description-text">{item.text}</p>
                    </div>
                </div>
            ))}
                </div>
        </section>
    );
}