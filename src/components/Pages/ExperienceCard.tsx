import { experiences } from "@/constants/experience.constante";
import {
  Briefcase,
  Calendar,
  ExternalLink,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Card } from "../ui/card";

interface ExperienceCardProps {
  experience: (typeof experiences)[0];
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase size={20} className="text-sage-600" />;
      case "education":
        return <GraduationCap size={20} className="text-mint-600" />;
      default:
        return <Briefcase size={20} className="text-stone-600" />;
    }
  };

  return (
    <Card
      className="p-8 bg-white/70 backdrop-blur-sm border-sage-200/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-slide-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start space-x-4">
          <div className="mt-1">{getTypeIcon(experience.type)}</div>
          <div>
            <h3 className="text-2xl font-semibold text-stone-800 mb-1">
              {experience.position}
            </h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg text-sage-600 font-medium">
                {experience.company}
              </span>
              {experience.website && (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-500 hover:text-sage-700 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-stone-500">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={14} />
                <span>{experience.location}</span>
              </div>
              <span className="bg-sage-100 text-sage-700 px-2 py-1 rounded-full text-xs font-medium">
                {experience.duration}
              </span>
            </div>
          </div>
        </div>
        {experience.featured && (
          <div className="bg-sage-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-stone-600 leading-relaxed mb-6">
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-stone-800 mb-3">
          Key Achievements
        </h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="text-stone-600 flex items-start">
              <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-lg font-semibold text-stone-800 mb-3">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium hover:bg-sage-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;
