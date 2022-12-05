import React from 'react';
import { ISkills } from '../interface';

const Skills: React.FC<ISkills> = ({ skills }) => (
    <section id="skills" className="skills">
        <h2>Habilidades</h2>
        <div className="skills-list">
            {
                skills.map((skill) => (
                    <div className="skill" key={skill.id}>
                        {skill.icon}
                        <h4>{skill.name}</h4>
                    </div>
                ))
            }
        </div>
    </section>
);

export default Skills;
