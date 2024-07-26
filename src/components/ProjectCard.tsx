interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 mt-2 inline-block"
      >
        View Project
      </a>
    </div>
  );
}
