import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

class RecipeList extends Component {
  render() {
    const {recipes, handleDetails, handleChange, handleSubmit, value, error} = this.props;
    return(
      <React.Fragment>
        <RecipeSearch handleChange={handleChange} handleSubmit={handleSubmit} value={value}  />
          <div className="container my-5">
            <div className="row">
              <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3">
                <h1 className="slanted">Recipe List</h1>
              </div>
            </div>
            <div className="row">
            {error ? <h1 className="text-center text-danger text-capitalize">{error}</h1> :
              recipes.map(recipe => {
                return(
                  <Recipe
                  key={recipe.recipe_id} 
                  recipe={recipe} handleDetails={handleDetails}  />
                )
              })}
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default RecipeList;