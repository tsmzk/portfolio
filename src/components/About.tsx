export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 md:mr-4"
      />
      <p className="whitespace-pre-line">
        大学でプログラミングに出会い、そのままIT業界へ。
        <br />
        2年間システムエンジニアとして働いていたが、「このままでいいのかな？」と思い立ち、物販事業を始める。
        <br />
        アルバイトと掛け持ちしながら専業に移行し、個人事業の大変さや税金について学ぶ。
        <br />
        売上管理をGoogleスプレッドシートで行い、効率化のためにGASを使っているうちに、プログラミングが自分に合っていると再認識。
        <br />
        <br />
        派遣エンジニアとしてIT業界に戻り、現在はフリーランスとして活動。
        <br />
        エンジニアとしては、Windowsアプリなどの業務システム開発から始まり、現在はWebやゲームのバックエンド（API開発）を中心に活動中。
        <br />
        Webに関してはフロントエンドも担当し、フルスタックエンジニアとして幅広く対応しています。
      </p>
    </div>
  );
}
