import React, { Component } from 'react';
import {recipe} from "../tempDetails";

class RecipeDetails extends Component {

  // // first way to get details
  // constructor(props) {
  //   super(props)
  //   this.state= {
  //     recipe: recipe,
  //     url: `https://www.food2fork.com/api/search?key=6e608c1673bfeae4ff3113ba433e5f0f&rId=${ this.props.id }`
  //   }
  // }

  // async componentDidMount() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipe: jsonData.recipe
  //     })
  //   } catch(error) {
  //     console.log(error);

  //   } 
  // }

  //second way to get details 
  state= {
    recipe: {}
  }

  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=6e608c1673bfeae4ff3113ba433e5f0f&rId=${id}`;
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      // this.state.setState({
      //   recipe: jsonData.recipe
      // })
      //anthor way to change recipe
      //setState can pass not only params but also a function and call back function
      this.setState((state, props) => {
        return {
          recipe: jsonData.recipe
        }
      }, () => {})
    } catch(error) {
      console.log(error);
      
    }
  }

  render() {
    const{image_url, publisher, publisher_url, source_url, title, ingredients} = this.state.recipe;
    const{handleIndex} = this.props;
    if (!ingredients) {
      return <h1>loading ...</h1>
    }
    if (ingredients) {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 col-md-6 mx-auto my-3">
                <button className="btn btn-warning mb-5 text-capitalize"
                  onClick={() => { handleIndex(1) }}>back to recipe list</button>
                <img src={image_url} className="d-block w-100" alt="recipe" />
              </div>
              <div className="col-10 col-md-6 mx-auto my-3">
                <h6 className="text-uppercase">{title}</h6>
                <h6 className="text-capitalize text-warning slanted">provider by {publisher}</h6>
                <a href={publisher_url} className="btn btn-primary mt-2 text-capitalize" target="_blank" rel="noopener noreferrer">publisher webpage</a>
                <a href={source_url} className="btn btn-success mt-2 mx-3 text-capitalize" target="_blank" rel="noopener noreferrer">recipe url</a>
                <ul className="list-group mt-4">
                  <h2 className="mt-3 mb-4">Ingredients</h2>
                  {ingredients.map((item, index) => {
                    return (
                      <li key={index} className="list-group-item slanted">{item}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default RecipeDetails;