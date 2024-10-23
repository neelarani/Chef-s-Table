import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import OurRecipes from './components/ourRecipes/ourRecipes';
import Recipes from './components/Recipes/Recipes';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

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
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;
