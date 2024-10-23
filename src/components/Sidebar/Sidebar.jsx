const Sidebar = ({ recipeQueue }) => {
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
                    onClick={() => console.log('preparing ')}
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
    </div>
  );
};

export default Sidebar;
