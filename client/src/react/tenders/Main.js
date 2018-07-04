import React, { Component } from 'react';
import Modal from '../Hoc/Modal.js'
import EditTender from '../Hoc/Api.js'
import Tenders from './TendersContent/Tenders.js'

export default class Tender extends Component {
  state = {
    initTenders: [],
    currTenders: [],
    display: new Map(),
    filtered: false,
    editShow:false,
    editTender:''
  };

  componentDidMount() {
    let tenders;
    // fetching full list of tenders from server
    //fetch('/api/getAllTenders')
    fetch('http://localhost:3004/tenders')
      .then(res => res.json())
      .then(json => {
        for(let i in json){
          json[i].dateTo = new Date(json[i].dateTo)
          json[i].dateTender = new Date(json[i].dateTender)
        }
        this.setState({
          initTenders: json
        })
        this.props.tenders(json)
        tenders = json
      })
      //Necessery for right table dropping activity
      //Creating map of display conditions of tables with additional info for tenders
      .then(() => {
        let displayTables = new Map();
        for (let i = 0; i < tenders.length; i++) {
          displayTables.set(tenders[i].id, 'none');
        }
        this.setState({
          display: displayTables
        })
      })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const filterStage = this.props.filters.filterStage;
    const filterSite = this.props.filters.filterSite;
    const tenders = this.state.initTenders;
    if(prevProps.filters.filterStage !==filterStage ||
      prevProps.filters.filterSite !==filterSite)
      {
        if(filterStage.length > 0 ||
          filterSite.length > 0) {
           this.setState({currTenders: tenders.filter(tender =>
             (filterStage.length===0 || (filterStage.includes(tender.stage)&&filterStage.length > 0))
             &&(filterSite.length===0 || (filterSite.includes(tender.site)&&filterSite.length > 0))),
         filtered: true})
       }else if (filterStage.length === 0 && filterSite.length === 0) {
         this.setState({filtered: false})
       }
     }
   }

   toggleTable(id) {
     let disp = this.state.display;
     for (var [key, value] of disp) {
       if (key === id && value === 'none') {
         disp.set(key, 'block')
       } else if (key === id){
         disp.set(key, 'none')
       }
     }
     this.setState({
       display: disp
     })
   }

   editTender = (id) =>{
     this.setState({
       editShow:!this.state.editShow,
       editTender: this.state.initTenders.find(x => x.id === id)
     })

   }
   onCloseEdit = () => {
     this.setState({editShow:!this.state.editShow})
   }

  render() {
    let tenders = [];
    if(!this.state.filtered) {
      tenders = this.state.initTenders
    }else{
      tenders = this.state.currTenders
    }
    return (
      <div>
        <Tenders
          tenders = {tenders}
          onClickInfo = {this.toggleTable.bind(this)}
          onClickEdit = {this.editTender}
          display = {this.state.display}
        />
        <Modal 
          name = 'Edit Tender'
          show={this.state.editShow} 
          onClose={this.onCloseEdit}
          backgroundColor='lightgrey'
          width='450px'
          height= '600px'
        >
          <EditTender
            name = 'Edit Tender'
            tender = {this.state.editTender} 
            onClose = {this.onCloseEdit}
            method='PUT'
          />
        </Modal>
      </div>
    )
  }
}
