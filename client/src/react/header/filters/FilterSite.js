import React, {  Component } from 'react';

export default class FilterSite extends Component {
  state = {
    display:"none"
  }
  toggleFiltersSite(){
      ((this.state.display==="none") ?
      this.setState({display: "block"}):
      this.setState({display: "none"}))
    }
render(){
  return(
    <div className="filtersContainer">
    				<button className="filtersToggle" onClick={() => this.toggleFiltersSite()}>Сайт процедуры</button>
    				<div className="siteCheckList dropdown-menu" style={{display:this.state.display}}>
    					<div className='buttonWrapper'><button className="options siteCheck" state='unchecked' value='www.sberbank-ast.ru'>sberbank-ast.ru</button></div>
    					<div className='buttonWrapper'><button className="options siteCheck" state='unchecked' value='www.rts-tender.ru'>rts.ru</button></div>
    					<div className='buttonWrapper'><button className="options siteCheck" state='unchecked' value='www.mmvb.ru'>mmvb.ru</button></div>

    			</div>
    		</div>
  )
}
}
