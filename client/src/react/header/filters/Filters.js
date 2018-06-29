import React, {  PureComponent } from 'react';
import FilterStage from './FilterStage.js';
import FilterSite from './FilterSite.js';
export default class Adder extends PureComponent {

  state ={
    filterStage: [],
    filterSites: []
  }

  onUpdateStage = (val) => {
    this.setState({filterStage:val})
  };
  onUpdateSites = (val) => {
    this.setState({filterSites:val})
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.onUpdate(this.state.filterStage, this.state.filterSites)
  };

  render(){
    return(
      <div className="filtersSection" style={this.props.style}>
      <FilterStage onUpdate={this.onUpdateStage}/>
      <FilterSite onUpdate={this.onUpdateSites}/>
      </div>
    )
  }
}
