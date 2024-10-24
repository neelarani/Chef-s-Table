import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import OurRecipes from './components/ourRecipes/ourRecipes';
import Recipes from './components/Recipes/Recipes';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeToQueue = recipe => {
    const isExists = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id == recipe.recipe_id
    );
    if (!isExists) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert('Recipe Already Exists in the queue');
    }
  };

  const handleRemove = id => {
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);
    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  const calculateTimeAndCalories = (time, calorie) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calorie);
  };

  return (
    <div>
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
      {/* Recipe cards section */}
      <section className="w-11/12 mx-auto flex flex-col md:flex-row gap-6">
        {/* Cards section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Sidebar  */}
        <Sidebar
          handleRemove={handleRemove}
          recipeQueue={recipeQueue}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;
