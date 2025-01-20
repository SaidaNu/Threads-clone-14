import FlowItem from "./FlowItem";

const posts = [
  {
    text: "Искусственный интеллект продолжает развиваться, предлагая удивительные решения в различных областях. От медицины до транспорта, ИИ обещает многое.",
    imageUrl: "https://moretraveler.com/wp-content/uploads/2023/06/sa2-16.jpg",
    author: "ai_dreamer",
    profilePicture: "https://api.slingacademy.com/public/sample-users/2.png",
  },
  {
    text: "Экологическая ответственность становится важной темой. Программы переработки и возобновляемая энергия помогают защитить планету для будущих поколений.",
    imageUrl:
      "https://medanalises.net/wp-content/uploads/2023/08/sa-32-scaled.jpg",
    author: "ecoguardian",
    profilePicture: "https://api.slingacademy.com/public/sample-users/3.png",
  },
  {
    text: "Образовательная система меняется благодаря цифровым технологиям. Онлайн-курсы и виртуальные лаборатории делают образование более доступным.",
    imageUrl:
      "https://www.csee-etuce.org/images/Pictures/EU/entrepreneurship3.jpg",
    author: "ed-innovator",
    profilePicture: "https://api.slingacademy.com/public/sample-users/4.png",
  },
  {
    text: "Культурный ландшафт 2024 года будет насыщенным. Виртуальные выставки и цифровое искусство меняют представление о жанрах и формах искусства.",
    imageUrl:
      "https://bigfoto.name/uploads/posts/2022-02/1645554139_1-bigfoto-name-p-arkhitekturno-landshaftnii-dizain-2.jpg",
    author: "culture_wave",
    profilePicture: "https://api.slingacademy.com/public/sample-users/5.png",
  },
  {
    text: "В современном мире технологии помогают заботиться о здоровье. Умные часы и фитнес-приложения делают контроль за физическим состоянием удобным.",
    imageUrl:
      "https://sportishka.com/uploads/posts/2023-06/1687238406_sportishka-com-p-tovari-dlya-zdorovogo-obraza-zhizni-pinter-2.jpg",
    author: "fitlife",
    profilePicture: "https://api.slingacademy.com/public/sample-users/6.png",
  },
  {
    text: "Глобальное потепление – одна из самых острых проблем. Необходимы срочные меры для снижения выбросов и перехода к экологически чистой энергии.",
    imageUrl:
      "https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/Untitled%20design.jpg",
    author: "climate.activist",
    profilePicture: "https://api.slingacademy.com/public/sample-users/5.png",
  },
  {
    text: "Путешествия меняются благодаря технологиям. Виртуальная реальность и экологичные транспортные средства делают туризм комфортным и устойчивым.",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/574502a03c44d8a75d51171f/1475814674365-DFZUFGNEJQODEBGLCTMA/image-asset.jpeg",
    author: "travel-horizon",
    profilePicture: "https://api.slingacademy.com/public/sample-users/8.png",
  },
  {
    text: "Криптовалюты привлекают внимание благодаря своим возможностям и рискам. Развитие блокчейн-технологий меняет экономический ландшафт.",
    imageUrl:
      "https://steemitimages.com/DQmQqz39QerxGMsFy3QgWuuN2BUKL79Jj5o3MyDQ27NvE4i/1.jpg",
    author: "crypto_insight",
    profilePicture: "https://api.slingacademy.com/public/sample-users/9.png",
  },
  {
    text: "Продовольственная промышленность меняется благодаря инновациям. Лабораторное мясо и вертикальные фермы повышают эффективность производства.",
    imageUrl:
      "https://i.pinimg.com/originals/fe/5d/a7/fe5da7e03be279a4533324762434bc5b.jpg",
    author: "foodrevolution",
    profilePicture: "https://api.slingacademy.com/public/sample-users/10.png",
  },
];

export default function Flow() {
  return (
    <div className="flow cont">
      {posts.map((post) => (
        <FlowItem
          profile={post.profilePicture}
          author={post.author}
          text={post.text}
          image={post.imageUrl}
        />
      ))}
    </div>
  );
}
