import React, {  PureComponent } from 'react';
import FilterSectionWrapper from '../Hoc/FilterSectionWrapper.js'

export default class FilterSite extends PureComponent {
  // checkedStyle is responsible for changing style for chacked filter
  // Do not find a way to do it easier
  state = {
    displayFilter: 'none',
    checkedFilters:['www.sberbank-ast.ru','www.rts.ru','www.mmvb.ru',''],
    checkedStyle: {sberbank:'rgb(11, 163, 96)',
    rts: 'rgb(11, 163, 96)',
    mmvb: 'rgb(11, 163, 96)'}
  }

  /* Pass current array of checked filters to parent*/
  componentDidUpdate(prevProps, prevState, snapshot) {
      this.props.onUpdate(this.state.checkedFilters)
  }

  /* Toggle the corresponding filter list */
  toggleFiltersSite() {
    this.setState({
      displayFilter: (this.state.displayFilter === 'none') ? 'block' : 'none'
    })
  }

  /* - Checking if filtered was chosen before, if not include it in
  checkedFilters and vice versa.
  - Then changing style of chosen filter:
    1. Import array of checkedStyle
    2. Extracting object with correspond key and change the color.
    (since real value of sites can't be keys, string is splited)
    3. Finally transfer resulting array to state.
  */
  checkingFilterHandler(e, value){
    if(!this.state.checkedFilters.includes(value)){
      this.setState({checkedFilters: [...this.state.checkedFilters, value]});
      let checked = {...this.state.checkedStyle};
      console.log(value);
      checked[value] = 'rgb(11, 163, 96)';
      this.setState({checkedStyle:checked});
    }
    if(this.state.checkedFilters.includes(value)){
      this.setState({checkedFilters:
        this.state.checkedFilters.filter((i) => i !== value)});
      let checked = {...this.state.checkedStyle};
      console.log(value);
      checked[value] = 'rgb(70,70,70)';
      this.setState({checkedStyle:checked});
    }
  }

  render() {
    return (
      <FilterSectionWrapper
        displayFilter = {this.state.displayFilter}
        checkedStyle = {this.state.checkedStyle}
        checkValue = {['sberbank', 'rts', 'mmvb']}
        filterValue = {['www.sberbank-ast.ru', 'www.rts.ru', 'www.mmvb.ru']}
        toggleFilters = {this.toggleFiltersSite.bind(this)}
        checkingFilterHandler = {this.checkingFilterHandler.bind(this)}
      />
    )
  }
}