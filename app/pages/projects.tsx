'use client'
import styles from "../page.module.css"
import { Card } from "../components/cards";
import { CardProps } from "../components/cards/types"


export default function Projects() {
    const projects : CardProps[] = [
        {
            Employer: ["MentorLink"],
            Job: "UI/UX Designer & Full-Stack Developer",
            Description: "Developed and Designed UX for an ML Powered Mentorship Matching website.",
            img: null,
        },
        {
            Employer: ["Gooooooogle"],
            Job: "Software Engineer",
            Description: "Built a google-based search engine that was composed of a frontend, Crawler, Indexer and Page Rank and dynamic server.",
            img: null,
        },
        {
            Employer: ["ClothesMatcher"],
            Job: "UI/UX Designer & Full-Stack Developer",
            Description: "Developed and designed UI for clothes sharing initiatve.",
            img: null,
        },
        {
            Employer: ["Shell-based Operating System"],
            Job: "Software Engineer",
            Description: "Developed kernel infrastructure for C language UNIX-based operating system using C.",
            img: null,
        },
        {
            Employer: ["IoT VVI Pacemaker"],
            Job: "Embedded Systems Engineer",
            Description: "Engineered a VVI cardiac pacemaker ",
            img: null,
        },
    ]
    
    return (
        <div style={{alignItems: "center", textAlign:"center", paddingInline:"10vw" ,
            // background: "linear-gradient(to bottom, #1a1a1a, #3b616a)",
            width:"100%", height: "80vh"
        }}>
            <h1 className={styles.h1}>Projects</h1>
            
            <div style={{
                display: "flex", 
                flexDirection: 'row', 
                flexWrap: "wrap", 
                justifyContent:"center",
                marginTop:"2vh"
            }}>
                {projects.map((p) => (
                    <Card
                        key={p.Employer[0]}
                        Employer={p.Employer}
                        Job={p.Job}
                        Description={p.Description}
                        img={null}
                    />
                ))}

            </div>
            
        </div>
    );
}