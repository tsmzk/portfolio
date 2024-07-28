import type { ReactNode } from "react";
import { v4 as uuid } from "uuid";

interface Skill {
  name: string;
  experience: string;
  level: number;
  optionals?: string[];
}

interface SkillCardProps {
  title: string;
  description: string;
  skills: Skill[];
  icon: ReactNode;
  columnName?: string;
}

export default function SkillCard({
  title,
  description,
  skills,
  icon,
  columnName,
}: SkillCardProps) {
  const hasOptionals = skills.some((skill) => skill.optionals && skill.optionals.length > 0);

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="text-2xl mr-2">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mb-4">{description}</p>
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="text-center w-1/4">技術</th>
            <th className="text-center w-1/4">経験年数</th>
            {hasOptionals && <th className="text-center w-1/4">{columnName}</th>}
            <th className="text-center w-1/4">スキル</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={uuid()} className="align-top border-t border-gray-200">
              <td className="py-2 text-center">{skill.name}</td>
              <td className="py-2 text-center">{skill.experience}</td>
              {hasOptionals && (
                <td className="py-2 text-center">
                  {skill.optionals ? skill.optionals.join(", ") : ""}
                </td>
              )}
              <td className="py-2 text-center">
                <div className="relative w-full h-4 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-4 bg-green-500 rounded-full"
                    style={{ width: `${(skill.level / 3) * 100}%` }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
