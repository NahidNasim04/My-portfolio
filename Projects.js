import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const ProjectsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #f4f4f4;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>Project One</ProjectTitle>
          <ProjectDescription>
            A brief description of the project.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project Two</ProjectTitle>
          <ProjectDescription>
            A brief description of the project.
          </ProjectDescription>
        </ProjectCard>
        {/* Add more project cards as needed */}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
