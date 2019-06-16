import React, { Component } from 'react';
//import { FaSearch } from 'react-icons/fa';

class RecipeSearch extends Component {
  render() {
    const { handleChange, handleSubmit, value } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto mt-5 text-center">
              <h1 className="slanted text-capitalize">
                search for recipe with
                <strong className="text-danger"> Food2Fork</strong>
              </h1>
              <form onSubmit={handleSubmit} className="mt-4">
                <label className="text-capitalize" htmlFor="search">type recipe seperated by comma</label>
                <div className="input-group">
                  <input onChange={handleChange}    value={value}
                    className="form-control" type="text" name="search" placeholder="chicken,onions,carrots" />
                  <div className="input-group-append">
                    <button type="submit" className="input-group-text bg-primary text-white">
                      {/* <FaSearch /> */} search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RecipeSearch;