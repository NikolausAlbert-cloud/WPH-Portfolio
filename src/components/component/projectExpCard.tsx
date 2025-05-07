import Image from 'next/image';
import React from 'react';

import { ProjectExpData } from '@/constants/projectExpData';

export const ProjectExpCard = () => {
  return (
    <div>
      {ProjectExpData.map((item, i) => (
        <div key={i}>
          <Image src={item.src} alt={item.title} />
          <h3>{item.title}</h3>
          <ul>
            {item.skills.map((item) => (
              <li key={item.skill}>{item.skill}</li>
            ))}
          </ul>
          <p>{item.description}</p>
          <button>
            <span>Visit</span>
            {/* icon */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectExpCard;
