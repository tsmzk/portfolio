import WorkCard from "./WorkCard";

export default function Works() {
  const works = [
    {
      title: "ポートフォリオ",
      description: "こちらのサイトです。",
      imageUrl: "/images/works01.png",
      technologies: ["React/Next", "TailwindCSS"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/tsmzk/portfolio",
        },
      ],
    },
    {
      title: "つべ析",
      description:
        "自身の投稿動画の視聴数や時間を一覧でみれるサイト。BEは実務未経験のGoにて開発しました。",
      imageUrl: "/images/works02.png",
      technologies: ["Go", "React/Next", "GCP"],
      links: [
        {
          name: "GitHub(FE)",
          url: "https://github.com/tsmzk/tube-seki",
        },
        {
          name: "GitHub(BE)",
          url: "https://github.com/tsmzk/tube-seki-backend",
        },
      ],
    },
    {
      title: "YouTube Live Calender",
      description: "配信予定をGoogleカレンダーに転記するChrome拡張機能。",
      imageUrl: "/images/works03.png",
      technologies: ["TypeScript/Node", "HTML/CSS"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/tsmzk/youtube-live-calendar-chrome",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map((work) => (
        <WorkCard
          key={work.title}
          title={work.title}
          description={work.description}
          imageUrl={work.imageUrl}
          technologies={work.technologies}
          links={work.links}
        />
      ))}
    </div>
  );
}
