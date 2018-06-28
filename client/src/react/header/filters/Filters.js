import React, {  PureComponent } from 'react';
import FilterStage from './FilterStage.js';
import FilterSite from './FilterSite.js';
export default class Adder extends PureComponent {

  state ={
    filters: []
  }

  onUpdateStage = (val) => {
    this.setState({filters:val})
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.onUpdate(this.state.filters)
  };

  render(){
    return(
      <div className="filtersSection" style={this.props.style}>
      <FilterStage onUpdate={this.onUpdateStage}/>
      <FilterSite/>
      </div>
    )
  }
}
