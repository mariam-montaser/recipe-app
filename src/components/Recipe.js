import React, { Component } from 'react';


class Recipe extends Component {
  render() {
    const {recipe_id, image_url, title, publisher, source_url} = this.props.recipe;
    const {handleDetails} = this.props;
    return(
      <React.Fragment>
          <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto">
            <div className="card">
              <img src={image_url} className="img-card-top" height="300" alt="recipe" />
            </div>
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning slanted">
                provided by: {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary text-capitalize" onClick={() => handleDetails(0, recipe_id)}>details</button>
              <a href={source_url} className="btn btn-success text-capitalize mx-2" target="_blank"
              rel="noopener noreferrer">recipe url</a>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Recipe;