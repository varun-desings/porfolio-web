import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Project = ({ project, setPreview }) => {
  const { title, description, subDescription, image, tags, href } = project;
  const [isModalHidden, setIsModalHidden] = useState(false);
  return (
    <>
    <div className='flex-wrap items-center py-10 justify-between space-y-14
    sm:flex sm:space-y-0'
    onMouseEnter={() => setPreview(image)}
    onMouseLeave={() => setPreview(null)}
    >
      <div>
     <p className='text-2xl '>{project.title}</p>
     <div className='flex gap-5 mt-2 text-sand'>
      {project.tags.map((tag) => (<span key={tag.id}>{tag.name}</span>))}
     </div>
      </div>
     <button onClick={() => setIsModalHidden(true)} className='flex items-center gap-1 cursor-pointer hover-animation'>
      Read More
     <img className='w-5' src="assets/arrow-right.svg" alt="arrow" />
     </button>
    </div>
    <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'/>
    {isModalHidden && (
    <ProjectDetails
    title={title}
    description={description}
    subDescription={subDescription}
    image={image} 
    tags={tags} 
    href={href} 
    closeModal={() => setIsModalHidden(false)}/>)}
    </>
  );
};

export default Project;
