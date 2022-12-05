import React from 'react';
import { IProject, IProjects } from '../interface';

const Projects: React.FC<IProjects> = ({ projects }) => (
    <section id="projects" className="projects">
        <h2>Projetos</h2>
        <div className="projects-list">
            {
                projects.sort((a, b) => a.id - b.id).map((project:IProject) => (
                    <div className="project" key={project.id}>
                        <div
                            className="project-image"
                            style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="project-info">
                            <h3>
                                {project.title}
                            </h3>
                            <span>
                                Tech:
                                {' '}
                                { project.tech }
                            </span>
                            <p>
                                {project.description}
                            </p>
                        </div>
                        <div className="project-links">
                            {
                                project.links.length > 0
                                    ? project.links.map((link) => (
                                        <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
                                            {link.icon}
                                        </a>
                                    ))
                                    : (
                                        <h3>
                                            Em desenvolvimento
                                        </h3>
                                    )
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
);

export default Projects;
