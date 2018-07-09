import React, {  PureComponent } from 'react';
import FilterSectionWrapper from '../../HocAndTemplates/FilterSectionWrapper.js'
import {GREEN,DGREY} from '../../../const.js'

/* Class produce list of stages user can choose from. 
Firstly all options chosen. after clicking on option it excludes from 
list of chosen options and the list sending to parent and forth to tenders 
to rerender it without chosen options*/

export default class FilterStage extends PureComponent {
  // checkedStyle is responsible for changing style for chacked filter
  // Do not find a way to do it easier
  state = {
    displayFilter:'none',
    checkedFilters:['filing','consideration','complited',],
    checkedStyle: {filing:GREEN,
    consideration: GREEN,
    complited: GREEN}
  }

  toggleFiltersStage() {
    this.setState({displayFilter: (this.state.displayFilter==='none') ? 'block' : 'none'})
  }

  componentDidUpdate() {
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
      checked[value] = GREEN;
      this.setState({checkedStyle:checked});
    }
    if(this.state.checkedFilters.includes(value)){
      this.setState({checkedFilters: this.state.checkedFilters.filter((i) =>
        i !== value)});
      let checked = {...this.state.checkedStyle};
      checked[value] = DGREY;
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
      name = 'Стадия порцедуры'
      />
  )
}
}
