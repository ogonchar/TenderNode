import React, { Component } from 'react';
import Modal from '../HocAndTemplates/Modal.js'
import EditTender from '../HocAndTemplates/Api.js'
import Tenders from './parts/TendersBody.js'

/* Class render area with all tender blocks */

export default class Tender extends Component {
  
  /* 
    * Init Tenders which fetched from server 
    * Current are filtered one 
    * Display is a map with corresponding IDs of tables of additional 
    * info about tenders and boolean for showing it or not
    * Filtered undicate if any filters are chosen
    * EditShow bollean for render modal window with edit tender option or not 
    * Edit tender represent Id of tender user choose to edit
   */
  
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
    fetch('/api/tenders/getAllTenders')
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

  /*
    * function  receives fiilters values and change 
    * current tenders list acoording to chosen oprions
  */

  componentDidUpdate(prevProps) {
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

   //Showing table for tender with corresponding IDs
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

   // open modal for editing tender
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
          margin='0 auto'
        >
          <EditTender
            name = 'Edit Tender'
            tender = {this.state.editTender} 
            onClose = {this.onCloseEdit}
            method='PUT'
            link ='/api/tenders/editTender'
            deleteOption = 'true'
          />
        </Modal>
      </div>
    )
  }
}
