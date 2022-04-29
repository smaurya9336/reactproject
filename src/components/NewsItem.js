// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title,description,imageurl,newsUrl}=this.props;
    return (
      <div className="my-3">
          <div className="card">
  <img src={!imageurl?"https://staticg.sportskeeda.com/editor/2022/04/f9b7d-16501870582020-1920.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem