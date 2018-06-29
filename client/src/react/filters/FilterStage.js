import React, {  PureComponent } from 'react';
import FilterSectionWrapper from '../Hoc/FilterSectionWrapper.js'

export default class FilterStage extends PureComponent {
  // checkedStyle is responsible for changing style for chacked filter
  // Do not find a way to do it easier
  state = {
    displayFilter:'none',
    checkedFilters:['filing','consideration','complited',],
    checkedStyle: {filing:'rgb(11, 163, 96)',
    consideration: 'rgb(11, 163, 96)',
    complited: 'rgb(11, 163, 96)'}
  }

  toggleFiltersStage() {
    this.setState({displayFilter: (this.state.displayFilter==='none') ? 'block' : 'none'})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      this.props.onUpdate(this.state.checkedFilters)
  }

  /* - Checking if filtered was chosen before, if not include it in
  checkedFilters and vice versa.
  - Then changing style of chosen filter:
    1. Import array of checkedStyle
    2. Extracting object with correspond key and change the color.
    3. Finally transfer resulting array to state.
  */
  checkingFilterHandler(e, value){
    if(!this.state.checkedFilters.includes(value)){
      this.setState({checkedFilters: [...this.state.checkedFilters, value]});
      let checked = {...this.state.checkedStyle};
      checked[value] = 'rgb(11, 163, 96)';
      this.setState({checkedStyle:checked});
    }
    if(this.state.checkedFilters.includes(value)){
      this.setState({checkedFilters: this.state.checkedFilters.filter((i) =>
        i !== value)});
      let checked = {...this.state.checkedStyle};
      checked[value] = 'rgb(70,70,70)';
      this.setState({checkedStyle:checked});
    }
  }

render(){
  return(
    <FilterSectionWrapper
      displayFilter = {this.state.displayFilter}
      checkedStyle = {this.state.checkedStyle}
      checkValue = {['filing','consideration','complited',]}
      filterValue = {['filing','consideration','complited',]}
      toggleFilters = {this.toggleFiltersStage.bind(this)}
      checkingFilterHandler = {this.checkingFilterHandler.bind(this)}
      />


  )
}
}
