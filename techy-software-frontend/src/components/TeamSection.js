import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import person1 from '../img/person1.jpg';
import person2 from '../img/person2.jpg';
import person3 from '../img/person3.jpeg';
import person4 from '../img/person4.jpg';
import './TeamSection.css';

export default function TeamSection() {
  const teamMembers = [
    { name: "Mike Tyler", role: "Web Developer", imgSrc: person1 },
    { name: "Jane Smith", role: "UI/UX Designer", imgSrc: person2 },
    { name: "Harry Johnson", role: "Project Manager", imgSrc: person3 },
    { name: "Rick Davis", role: "Content Strategist", imgSrc: person4 },
  ];

  return (
    <section id="about" className="team-section container py-12 md:py-24 lg:py-32">
      <div className="intro space-y-4">
        <h2 className="title">
          Meet the Nexus Software Team
        </h2>
        <p className="description">
          Our talented team of web developers, designers, and strategists are dedicated to helping you succeed.
        </p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-member">
            <Avatar className="avatar">
              <AvatarImage src={member.imgSrc} alt={member.name} />
              <AvatarFallback>
                {member.name.split(" ")[0][0]}{member.name.split(" ")[1][0]}
              </AvatarFallback>
            </Avatar>
            <div className="member-info">
              <h4 className="member-name">{member.name}</h4>
              <p className="member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
