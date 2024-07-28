import { FaAws, FaDatabase, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import Section from "./Section";
import SkillCard from "./SkillCard";

export default function Skills() {
  const skillCards = [
    {
      title: "バックエンド",
      description:
        "TypeScriptによるAPI開発がメインです。API技術はRESTとGraphQLの経験があります。Swaggerを用いたAPI設計も経験があります。",
      skills: [
        {
          name: "TypeScript",
          experience: "4年",
          level: 3,
          optionals: ["Express", "Fastify", "NestJS"],
        },
        { name: "Go", experience: "1年未満", level: 2, optionals: ["echo"] },
        { name: "PHP", experience: "1年", level: 1, optionals: ["Laravel"] },
      ],
      icon: <FaServer />,
      columnName: "FW",
    },
    {
      title: "フロントエンド",
      description:
        "React/NextによるWebフロントエンド開発がメインです。こちらのサイトも同技術で作成されています。",
      skills: [
        {
          name: "React",
          experience: "2年",
          level: 2,
          optionals: ["Next.js", "styled-components", "Tailwind CSS"],
        },
        { name: "HTML/CSS/JS", experience: "1年", level: 2, optionals: ["Scss", "jQuery"] },
      ],
      icon: <FaLaptopCode />,
      columnName: "FW",
    },
    {
      title: "DB",
      description:
        "MySQLがメインです。PostgreSQLはコスト軽減のため個人開発でよく利用します。設計はテーブルの既存スキーマの改修から新規作成まで経験があります。",
      skills: [
        { name: "MySQL", experience: "4年", level: 3, optionals: ["TypeORM", "Prisma"] },
        { name: "PostgreSQL", experience: "2年", level: 2, optionals: ["Prisma"] },
      ],
      icon: <FaDatabase />,
      columnName: "ORM",
    },
    {
      title: "インフラ",
      description:
        "AWSは実務で各サービスを利用した経験があります。GCPは個人開発で利用しております。",
      skills: [
        {
          name: "AWS",
          experience: "3年",
          level: 2,
          optionals: ["EC2", "Lambda", "API Gateway", "DynamoDB", "OpenSearch"],
        },
        {
          name: "GCP",
          experience: "1年未満",
          level: 1,
          optionals: ["CloudRun", "Cloud Build", "Artifact Registry"],
        },
      ],
      icon: <FaAws />,
      columnName: "サービス",
    },
    {
      title: "その他ツール等",
      description: "開発環境やコミュニケーションツールなどの利用経験です",
      skills: [
        { name: "Git", experience: "5年", level: 3 },
        { name: "VScode", experience: "5年", level: 3 },
        { name: "Slack", experience: "5年", level: 3 },
        { name: "Microsoft Teams", experience: "1年未満", level: 2 },
        { name: "Docker", experience: "4年", level: 3 },
      ],
      icon: <FaTools />,
    },
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap justify-center gap-4">
        {skillCards.map((card) => (
          <div key={uuid()} className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
            <SkillCard
              title={card.title}
              description={card.description}
              skills={card.skills}
              icon={card.icon}
              columnName={card.columnName}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
