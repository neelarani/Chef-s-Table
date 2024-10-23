import { useEffect } from 'react';
import { useState } from 'react';

const Recipes = ({ addRecipeToQueue }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`recipes.json`)
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe, index) => (
          <div key={index} className="card card-compact bg-base-100 border-2">
            <figure className="px-6 pt-4 ">
              <img
                className="h-48 w-full rounded-xl"
                src={recipe.recipe_image}
                alt="recipe image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                {recipe.recipe_name}
              </h2>
              <p className="text-base text-gray-600">
                {recipe.short_description}
              </p>
              <h3 className="text-xl font-medium">
                Ingredients: {recipe.ingredients.length}
              </h3>
              <ul className="ml-7">
                {recipe.ingredients.map((item, index) => (
                  <li className="list-disc text-gray-600" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-clock text-2xl"></i>
                  <p>{recipe.preparing_time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                  <p>{recipe.calories} Calorie</p>
                </div>
              </div>

              <div className="card-actions mt-5">
                <button
                  onClick={() => addRecipeToQueue(recipe)}
                  className="btn bg-green-500 font-medium text-base rounded-full"
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
