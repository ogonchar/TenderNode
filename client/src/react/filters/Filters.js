import React, {  PureComponent } from 'react';
import FilterStage from './parts/FilterStage.js';
import FilterSite from './parts/FilterSite.js';
export default class Adder extends PureComponent {

  state ={
    filterStage: [],
    filterSites: []
  }

  /* Gather separated filters value */
  onUpdateStage = (val) => {
    this.setState({filterStage:val})
  };

  /* Gather separated filters value */
  onUpdateSites = (val) => {
    this.setState({filterSites:val})
  };

  /* Transfer gathered value to App throught Header */
  componentDidUpdate() {
    this.props.filtersData({filterStage: this.state.filterStage,
      filterSite: this.state.filterSites})
  };

  render(){
    return(
      <div style = {Object.assign({}, filtersSection, {display: this.props.ShowFilters? 'block' : 'none'})}>
        <FilterStage onUpdate={this.onUpdateStage}/>
        <FilterSite onUpdate={this.onUpdateSites}/>
      </div>
    )
  }
}

const filtersSection = {
  marginTop: '42px',
  width:'100%',
  position:'fixed',
  zIndex: '2'
}
