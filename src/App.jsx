import Header from "./components/Header";
import Flow from "./components/Flow";
import { useState } from "react";
import "./assets/css/style.css";

function App() {
  //Категории
  const categories = ["For you", "Following"];
  const [activeCategory, setActiveCategory] = useState(0);

  //Посты

  const [authorIsFollowed, setAuthorIsFollowed] = useState([
    {
      text: "Искусственный интеллект продолжает развиваться, предлагая удивительные решения в различных областях. От медицины до транспорта, ИИ обещает многое.",
      imageUrl:
        "https://moretraveler.com/wp-content/uploads/2023/06/sa2-16.jpg",
      author: {
        isFollowed: false,
        name: "ai_dreamer",
      },
      profilePicture: "https://api.slingacademy.com/public/sample-users/2.png",
    },
    {
      text: "Экологическая ответственность становится важной темой. Программы переработки и возобновляемая энергия помогают защитить планету для будущих поколений.",
      imageUrl:
        "https://medanalises.net/wp-content/uploads/2023/08/sa-32-scaled.jpg",
      author: {
        isFollowed: false,
        name: "ecoguardian",
      },
      profilePicture: "https://api.slingacademy.com/public/sample-users/3.png",
    },
    {
      text: "Образовательная система меняется благодаря цифровым технологиям. Онлайн-курсы и виртуальные лаборатории делают образование более доступным.",
      imageUrl:
        "https://www.csee-etuce.org/images/Pictures/EU/entrepreneurship3.jpg",
      author: {
        isFollowed: false,
        name: "ed-innovator",
      },
      profilePicture: "https://api.slingacademy.com/public/sample-users/4.png",
    },
    {
      text: "Культурный ландшафт 2024 года будет насыщенным. Виртуальные выставки и цифровое искусство меняют представление о жанрах и формах искусства.",
      imageUrl:
        "https://bigfoto.name/uploads/posts/2022-02/1645554139_1-bigfoto-name-p-arkhitekturno-landshaftnii-dizain-2.jpg",
      author: {
        isFollowed: false,
        name: "culture_wave",
      },
      profilePicture: "https://api.slingacademy.com/public/sample-users/5.png",
    },
    {
      text: "В современном мире технологии помогают заботиться о здоровье. Умные часы и фитнес-приложения делают контроль за физическим состоянием удобным.",
      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-world-health-day-background_23-2149306515.jpg",
      author: {
        isFollowed: false,
        name: "fitlife",
      },
      profilePicture: "https://api.slingacademy.com/public/sample-users/6.png",
    },
    {
      text: "Глобальное потепление – одна из самых острых проблем. Необходимы срочные меры для снижения выбросов и перехода к экологически чистой энергии.",
      imageUrl:
        "https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/Untitled%20design.jpg",
      author: {
        isFollowed: false,
        name: "climate.activist",
      },
      profilePicture: "https://api.slingacademy.com/public/sample-users/5.png",
    },
    {
      text: "Путешествия меняются благодаря технологиям. Виртуальная реальность и экологичные транспортные средства делают туризм комфортным и устойчивым.",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/574502a03c44d8a75d51171f/1475814674365-DFZUFGNEJQODEBGLCTMA/image-asset.jpeg",
      author: {
        isFollowed: false,
        name: "travel-horizon",
      },
      profilePicture: "https://api.slingacademy.com/public/sample-users/8.png",
    },
    {
      text: "Криптовалюты привлекают внимание благодаря своим возможностям и рискам. Развитие блокчейн-технологий меняет экономический ландшафт.",
      imageUrl:
        "https://steemitimages.com/DQmQqz39QerxGMsFy3QgWuuN2BUKL79Jj5o3MyDQ27NvE4i/1.jpg",
      author: {
        isFollowed: false,
        name: "crypto_insight",
      },
      profilePicture: "https://api.slingacademy.com/public/sample-users/9.png",
    },
    {
      text: "Продовольственная промышленность меняется благодаря инновациям. Лабораторное мясо и вертикальные фермы повышают эффективность производства.",
      imageUrl:
        "https://i.pinimg.com/originals/fe/5d/a7/fe5da7e03be279a4533324762434bc5b.jpg",
      author: {
        isFollowed: false,
        name: "foodrevolution",
      },
      profilePicture: "https://api.slingacademy.com/public/sample-users/10.png",
    },
  ]);

  function toFollow(name) {
    const followedAuthor = authorIsFollowed.map((post) => {
      if (post.author.name === name) {
        return {
          text: post.text,
          imageUrl: post.imageUrl,
          author: {
            name: post.author.name,
            isFollowed: !post.author.isFollowed,
          },
          profilePicture: post.profilePicture,
        };
      }
      return post;
    });
    setAuthorIsFollowed(followedAuthor);
    console.log("Followed!");
  }

  function filterPosts(activeIndex) {
    if (activeIndex === 1) {
      return authorIsFollowed.filter((post) => post.author.isFollowed);
    } else return authorIsFollowed;
  }

  return (
    <>
      <Header
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <main>
        <section className="flow__section">
          <Flow
            toFollow={toFollow}
            authorIsFollowed={filterPosts(activeCategory)}
          />
        </section>
      </main>
    </>
  );
}

export default App;
