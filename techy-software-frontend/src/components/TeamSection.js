// src/components/TeamSection.js
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function TeamSection() {
  const teamMembers = [
    { name: "John Doe", role: "Web Developer", imgSrc: "/placeholder-user.jpg" },
    { name: "Jane Smith", role: "UI/UX Designer", imgSrc: "/placeholder-user.jpg" },
    { name: "Michael Johnson", role: "Project Manager", imgSrc: "/placeholder-user.jpg" },
    { name: "Emily Davis", role: "Content Strategist", imgSrc: "/placeholder-user.jpg" },
  ];

  return (
    <section id="about" className="container py-12 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
            Meet the Nexus Software Team
          </h2>
          <p className="text-lg text-primary-foreground md:text-xl">
            Our talented team of web developers, designers, and strategists are dedicated to helping you succeed.
          </p>
        </div>
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarImage src={member.imgSrc} alt={member.name} />
              <AvatarFallback>
                {member.name.split(" ")[0][0]}{member.name.split(" ")[1][0]}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary-foreground">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
