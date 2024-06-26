import React from 'react';
import Head from "next/head";
import styles from "@/styles/Projects.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title:'Abhyudaya Elite Attendance Tracker',
      description:'Introducing our club new app designed for seamless attendance tracking and academic success. With this user-friendly tool, you can effortlessly monitor your class attendance and receive personalized suggestions on how many more classes you need to attend to avoid being detained from university exams. The app offers a simple interface and customizable settings, making it easy to stay on top of your academic commitments. Download now and take charge of your attendance management!',
      image:'project.jpg',
      link:'https://drive.google.com/file/d/1OtcRxFELDv92cUeeG5aoD0U7Pkq87d4d/view?usp=sharing',
      github:'https://github.com/'
    }
  ];

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <div className={styles.page1}>
          <div className={styles.box1}></div>
          <h1>Our <span style={{ WebkitTextStroke: '2px white', color: 'transparent', letterSpacing: '1px' }}>Projects</span></h1>
        </div>

        <div className={styles.page2}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectcard}>
              <img src={project.image} alt="projectimg"/>
              <div className={styles.projectdtl}>
                <Link href={project.link}><h1>{project.title}</h1></Link>
                <p>{project.description}</p>
                <Link className={styles.git} href={project.github} target='_blank'>GITHUB</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
