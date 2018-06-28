import React, { Component } from 'react';
import Table from './Table.js'
import Section from './Section.js'
import Modal from '../Hoc/Modal.js'
import EditTender from './EditTender.js'

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
    // fetching full list of tenders from mongo
    fetch('/api/getAllTenders')
      .then(res => res.json())
      .then(json => {
        for(let i in json){
          json[i].dateTo = new Date(json[i].dateTo)
          json[i].dateTender = new Date(json[i].dateTender)
        }
        this.setState({
          initTenders: json
        })

        tenders = json
      })
      //Necessery for right table dropping activity
      //Creating map of display conditions of tables with additional info for tenders
      .then(() => {
        let displayTables = new Map();
        for (let i = 0; i < tenders.length; i++) {
          displayTables.set(tenders[i].id, "none");
        }
        this.setState({
          display: displayTables
        })
      })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const filters = this.props.filters;
    const tenders = this.state.initTenders;
    if(prevProps.filters !==filters)
      {
        if(filters.length > 0) {
           this.setState({currTenders: tenders.filter(tender => filters.includes(tender.stage)),
         filtered: true})
       }else if (filters.length === 0) {
         this.setState({filtered: false})
       }
     }
   }

   toggleTable(id) {
     let disp = this.state.display;
     for (var [key, value] of disp) {
       if (key === id && value === "none") {
         disp.set(key, "block")
       } else if (key === id){
         disp.set(key, "none")
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
    const display = this.state.display;
    return (
      <div className="back" style={this.props.style}>
      {tenders.map((i) => (
        <div key = {i.id}
        className = "tendersContainer" id = 'tendersFilingContainer'>
        <Section
          tend = {i}
          onClickInfo = {(b) => this.toggleTable(i.id)}
          onClickEdit = {(b) => this.editTender(i.id)}
        />

        <div className = "tbl"
        style = {{display: display.get(i.id)}}>
        <Table tend = {i}/>
        </div>
        <Modal show={this.state.editShow} onClose={this.onCloseEdit}>
          <EditTender tend={this.state.editTender}/>
        </Modal>
        </div>
      ))}

      </div>
    )
  }
}
