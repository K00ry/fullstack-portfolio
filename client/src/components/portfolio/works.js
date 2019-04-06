import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Works extends Component {



  render() {
    let works = this.props.data.map((work, index) => {



      return (
        <li
          key={index}
          onClick={() => this.props.handleClick(index)}
          // isItActive ={this.isItActive(index)}
          className="work-mobile work-desktop"
        >
          <div
            className={`img-border ${this.props.isItActive(index) ? "active": " "}`}
            onClick={() => this.props.handleClick(index)}
          >
            <img src={process.env.PUBLIC_URL + work.src}
                    // src={work.src}
                    alt={work.name} />
          </div>
          <span className="caption">{work.name}</span>
        </li>
      );
    });
    return <ul id="mobile-portfolio">{works}</ul>;
  }
}
Works.propTypes = {
  // data: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};