"use client";
import Image from 'next/image';
import { Icon } from "react-icons";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import AnimatedElement from './AnimatedElement';

export default function ProjectCard({ name, description,id ,link, img}) {
  return (
 

 

  
    <div className="bg-navhover border border-border-2 hover:border-border-1 transition duration-400 p-4 rounded-lg w-4/5 md:w-1/4 "
    key={id}>
        <AnimatedElement>
        <div className="image-container">
          <Image
            src={img}
            alt={`Image of ${name}`}
            width={256}
            height={256}
            className='object-cover h-28 lg:h-48 w-full hover:blur-sm'
          
          />
        </div>
      <h3 className="text-white lg:text-2xl  text-xl font-heading text-center break-words py-3">{name}</h3></AnimatedElement>
      <AnimatedElement>
      <p className="text-gray-300 lg:text-lg font-body break-words text-sm   py-3">{description}</p></AnimatedElement>
      <AnimatedElement>
      <a href={link}
      className="text-gray-300 text-sm font-body break-words"
      target="_blank" rel="noopener noreferrer">{link}</a></AnimatedElement>
      <div className="flex gap-2 mt-2">
   
    
      </div>
    </div>
  
 
  );
}