import CategoryItem from "./CategoryItem";

export default function Categories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <ul className="categories">
      {categories.map((category, index) => (
        <CategoryItem
          name={category}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          index={index}
        />
      ))}
    </ul>
  );
}
