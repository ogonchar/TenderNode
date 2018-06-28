import React, {  PureComponent } from 'react';

export default class FilterStage extends PureComponent {

  state = {
    display:"none",
    checkedFilters:[],
    checkedStyle: {filing:'rgb(170,70,70)',
    consideration: 'rgb(170,70,70)',
    complited: 'rgb(170,70,70)'}
  }

  toggleFiltersStage() {
    this.setState({display: (this.state.display==="none") ? "block" : "none"})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      this.props.onUpdate(this.state.checkedFilters)
  }

  toggleCheck(e, value){
    if(!this.state.checkedFilters.includes(value)){
      this.setState({checkedFilters: [...this.state.checkedFilters, value]});
      let checked = {...this.state.checkedStyle};
      checked[value] = 'rgb(70,70,70)';
      this.setState({checkedStyle:checked});
    }
    if(this.state.checkedFilters.includes(value)){
      this.setState({checkedFilters: this.state.checkedFilters.filter((i) => i !== value)});
      let checked = {...this.state.checkedStyle};
      checked[value] = 'rgb(170,70,70)';
      this.setState({checkedStyle:checked});
    }
  }

render(){
  return(
    <div className="filtersContainer">
				<button className="filtersToggle" onClick={() => this.toggleFiltersStage()}>Этап Закупки</button>
				<div id="stageChackList" className="dropdown-menu" style={{display: this.state.display}}>
						<div className='buttonWrapper'>
              <button className="options stageCheck" style={{background: this.state.checkedStyle.filing}}
              onClick={(e) => this.toggleCheck(e,'filing')}>Подача</button>
            </div>
						<div className='buttonWrapper'>
              <button className="options stageCheck" style={{background: this.state.checkedStyle.consideration}}
              onClick={(e) => this.toggleCheck(e,'consideration')}>Рассмотрение</button>
            </div>
						<div className='buttonWrapper'>
              <button className="options stageCheck" style={{background: this.state.checkedStyle.complited}}
              onClick={(e) => this.toggleCheck(e,'complited')}>Завершенные</button>
            </div>
        </div>
		</div>
  )
}
}
