const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="md:w-1/3 border-2 p-2  rounded-xl bg-base-100">
      <h2 className="text-2xl font-semibold text-center">
        Want to Cook: {recipeQueue.length}
      </h2>
      <div className="divider"></div>
      {/* want to cook table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr className="hover text-xs" key={index}>
                <th>1{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      calculateTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="px-3 py-1 bg-green-500 font-medium text-xs rounded-full"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Currently Cooking table */}

      <h2 className="text-2xl font-semibold text-center mt-6">
        Currently Cooking: {preparedRecipe.length}
      </h2>
      <div className="divider"></div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => (
              <tr className="hover text-xs" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}

            <tr className="border-none">
              <th></th>
              <td></td>
              <td>Total Time = {totalTime}</td>
              <td>Total Calories = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
