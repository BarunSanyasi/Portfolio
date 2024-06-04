import React from 'react'
import styled from 'styled-components';

const ProjectCard = styled.div`
 width: auto;
 height: auto;
 background-color: rgba(255, 255, 255, 0.25);
 cursor: pointer;
 border-radius: 1rem;
 box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
 overflow: hidden;
 transition: all 0.5s ease-in-out;
 padding: 26px 20px;
 margin:20px;
 display: flex;
 flex-direction: column;
 gap: 10px;

&:hover{
  transition: translateY(-10px);
  box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
  filter: brightness(1.1);
 }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 0.3rem;
  object-fit: cover;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0px;
  @media only screen and (max-width: 768px) {
    margin: 4px 0px;
}
`;
const Tag = styled.span`
font-size: 12px;
font-weight: 400;
color: white;
background-color: #278EA5;
padding: 4px 5px;
border-radius: 10px;
@media only screen and (max-width: 768px) {
    font-size: 10px;
}
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0 2px;
`;
const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: #000000;
margin: 8px 6px 0px 6px;
@media only screen and (max-width: 768px){
    font-size: 18px;
    margin: 6px 6px 0px 6px;
}
`;
const Date = styled.div`
font-size: 13px;
font-weight: 400;
margin: 2px 6px;
color: #000000;
@media (max-width: 768px){
    font-size: 12px;
}
`;
const Desc = styled.div`
font-size: 16px;
font-weight: 400;
color:#000000;
margin: 8px 6px;
@media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
    }
`;
const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    wrap: nowrap;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #071E3D;
    padding: 12px 16px;
    border-radius: 1rem;
    background-color: #278EA5;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: rgb(106,199,223);
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const ProjectCards = ({ project }) => {
    return (
        <ProjectCard>
            <Image src={project.image} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Desc>{project.description}</Desc>
            </Details>
            <ButtonGroup>
                <Button dull href={project?.github} target='new'>View Code</Button>
                <Button href={project?.website} target='new'>View Live Web</Button>
            </ButtonGroup>
        </ProjectCard>
    );
};

export default ProjectCards;