import React, {  Component } from 'react';

export default class FilterSite extends Component {
  state = {
    displayFilter: "none",
    checkedFilters:['www.sberbank-ast.ru','www.rts.ru','www.mmvb.ru'],
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
      displayFilter: (this.state.displayFilter === "none") ? "block" : "none"
    })
  }

  /* - Checking if filtered was chosen before and if not include it in
  checkedFilters and vise versa.
  - Then changing style of chosen filter, extracting object with
  correspond key (since real value of sites can't be keys, string is splited)
  from array.
  - Finally adding transfer resulting array to state.
  */

  toggleCheck(e, value){
    if(!this.state.checkedFilters.includes(value)){
      this.setState({checkedFilters: [...this.state.checkedFilters, value]});
      let checked = {...this.state.checkedStyle};
      let valueForColor = value.split('.')[1].split('-')[0];
      checked[valueForColor] = 'rgb(11, 163, 96)';
      this.setState({checkedStyle:checked});
    }
    if(this.state.checkedFilters.includes(value)){
      this.setState({checkedFilters:
        this.state.checkedFilters.filter((i) => i !== value)});
      let checked = {...this.state.checkedStyle};
      let valueForColor = value.split('.')[1].split('-')[0];
      checked[valueForColor] = 'rgb(70,70,70)';
      this.setState({checkedStyle:checked});
    }
  }

  render() {
    return (
      <div className="filtersContainer">
      	<button className="filtersToggle"
          onClick={() => this.toggleFiltersSite()}>
          Сайт процедуры</button>
      	<div className="siteCheckList dropdown-menu"
          style={{display:this.state.displayFilter}}>
      		<div className='buttonWrapper'>
            <button className="options siteCheck"
              onClick={(e) => this.toggleCheck(e,'www.sberbank-ast.ru')}
              style={{background: this.state.checkedStyle.sberbank}}>sberbank-ast.ru
            </button>
          </div>
      		<div className='buttonWrapper'>
            <button className="options siteCheck"
              onClick={(e) => this.toggleCheck(e,'www.rts.ru')}
              style={{background: this.state.checkedStyle.rts}}>rts.ru
            </button>
          </div>
      		<div className='buttonWrapper'>
            <button className="options siteCheck"
              onClick={(e) => this.toggleCheck(e,'www.mmvb.ru')}
              style={{background: this.state.checkedStyle.mmvb}}>mmvb.ru
            </button>
          </div>
      	</div>
      </div>
    )
  }
}
