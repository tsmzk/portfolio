import type { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  description: string;
  skills: { id: number; name: string; experience: string; level: number }[];
  icon: ReactNode;
}

export default function SkillCard({ title, description, skills, icon }: SkillCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="text-2xl mr-2">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mb-4">{description}</p>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">技術</th>
            <th className="text-left">経験年数</th>
            <th className="text-left">スキル</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id}>
              <td>{skill.name}</td>
              <td>{skill.experience}</td>
              <td>
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
