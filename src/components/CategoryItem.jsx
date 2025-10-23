export default function CategoryItem({
  activeCategory,
  setActiveCategory,
  name,
  index,
}) {
  return (
    <li
      onClick={() => {
        setActiveCategory(index);
      }}
      className={activeCategory === index ? "active_category" : "category"}
    >
      {name}
    </li>
  );
}
