import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title,description}=this.props;
    return (
      <div>
          <div className="card" style={{width: "18rem;"}}>
  <img src="https://sportshub.cbsistatic.com/i/r/2021/10/03/ef51c04f-8bdf-4fda-a99d-9135c07ce11f/thumbnail/1200x675/19beb468ac9dcf14932f7d234e74a1b3/kyler-murray-rams-week-4.jpg%22" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem