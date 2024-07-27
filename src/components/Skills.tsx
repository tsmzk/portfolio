import { FaDatabase, FaLaptopCode, FaServer } from "react-icons/fa";
import Section from "./Section";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard
          title="バックエンド"
          description="API開発を開発がメインです"
          skills={[
            { id: 1, name: "TypeScript/Node", experience: "4年", level: 3 },
            { id: 2, name: "Go", experience: "1年", level: 1 },
            { id: 3, name: "PHP/Laravel", experience: "1年", level: 1 },
          ]}
          icon={<FaLaptopCode />}
        />
        <SkillCard
          title="フロントエンド"
          description="説明"
          skills={[{ id: 1, name: "React", experience: "2年", level: 1 }]}
          icon={<FaLaptopCode />}
        />
        <SkillCard
          title="DB"
          description="説明"
          skills={[
            { id: 1, name: "MySQL", experience: "1年", level: 1 },
            { id: 2, name: "PostgreSQL", experience: "2年", level: 1 },
          ]}
          icon={<FaDatabase />}
        />
        <SkillCard
          title="インフラ"
          description="説明"
          skills={[{ id: 1, name: "AWS(EC2, RDS等)", experience: "1年", level: 1 }]}
          icon={<FaServer />}
        />
      </div>
    </Section>
  );
}
