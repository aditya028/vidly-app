import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { saveMovie } from "../services/fakeMovieService";

class SaveMovies extends Form {
  state = {
    account: { title: "", genre: "", dailyRentalRate: "", numberInStock: "" },
    errors: {},
  };
  schema = {
    title: Joi.string().min(3).required(),
    genre: Joi.string().required(),
    dailyRentalRate: Joi.number().required(),
    numberInStock: Joi.number().integer().required(),
  };
  doSubmit = () => {
    console.log("submitted");
    const movie = { ...this.state.account };
    console.log(movie);
    saveMovie(movie);
  };
  render() {
    return (
      <div className="container">
        <h1>Movie Form</h1>
        {this.renderInput("title", "Title")}
        {/* {this.renderInput("genre", "Genre")} */}
        <label htmlFor="genre">Genre</label>
        <select onChange={this.handleChange} class="form-control mb-4">
          <input type="text" />
          <option onChange={this.handleChange} value="5b21ca3eeb7f6fbccd471818">
            Action
          </option>
          <option onChange={this.handleChange} value="5b21ca3eeb7f6fbccd471814">
            Comedy
          </option>
          <option onChange={this.handleChange} value="5b21ca3eeb7f6fbccd471820">
            Thriller
          </option>
        </select>
        {this.renderInput("numberInStock", "numberInStock")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderButton("Save")}
      </div>
    );
  }
}

export default SaveMovies;
