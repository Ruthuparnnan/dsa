import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  const [input, setInput] = useState("");

  const [cache, setCache] = useState({});

  const [isListShow, setIsListShow] = useState(false);

  const handleInputChange = () => {
    setInput(event.target.value);
  };

  const handleFetchRecipes = async () => {
    if (cache[input]) {
      setRecipes(cache[input]);
    } else {
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/search?q=${input}`
        );
        const data = await response.json();
        cache[input] = data?.recipes;
        setRecipes(data?.recipes);
      } catch (error) {
        console.log("err", error?.message);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleFetchRecipes(input);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      <input
        onMouseEnter={() => setIsListShow(true)}
        onMouseLeave={() => setIsListShow(false)}
        className="input"
        value={input}
        onChange={handleInputChange}
        placeholder="Search Recipies"
      />
      {isListShow && (
        <div className="recipe-container">
          {recipes?.map((recipe) => (
            <div className="recipe-item">{recipe?.name}</div>
          ))}
        </div>
      )}
    </>
  );
}
