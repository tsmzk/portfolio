import Image from "next/image";

interface WorkCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  links: { name: string; url: string }[];
}

export default function WorkCard({
  title,
  description,
  imageUrl,
  technologies,
  links,
}: WorkCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex justify-center items-center h-64">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="max-h-full object-contain"
        />
      </div>
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
      </div>
      <div className="mt-auto">
        <div className="mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap space-x-4">
          {links.map((link) => (
            <a key={link.url} href={link.url} className="text-blue-500 hover:underline">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
