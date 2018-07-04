import React, {PureComponent} from 'react';
import TableCell from '../../Hoc/TableCell.js'
import AnimateHeight from 'react-animate-height';


class Table extends PureComponent {
  state = {
    height: 0,
  }

  componentDidUpdate()  {
    (this.props.display === "block") ?
    this.setState({
      height: 'auto'
    })
    :
    this.setState({
      height: 0
    })
  }

  render() {
    if (this.props.display === "block"){
    const tend = this.props.tend
    const { height } = this.state;
    return (
      <AnimateHeight
        duration={ 500 }
        height={ height } 
      >
      <div>
      <TableCell>objectOfPurchase</TableCell>
      <TableCell>{tend.objectOfPurchase}</TableCell>
      <TableCell>procuring</TableCell>
      <TableCell>{tend.procuring}</TableCell>
      <TableCell>site</TableCell>
      <TableCell>{tend.site}</TableCell>
      <TableCell>dateTo</TableCell>
      <TableCell>{tend.dateTo.toLocaleDateString()}</TableCell>
      <TableCell>dateTender</TableCell>
      <TableCell>{tend.dateTender.toLocaleDateString()}</TableCell>
      <TableCell>procuringContract</TableCell>
      <TableCell>{tend.procuringContract}</TableCell>
      </div>
      </AnimateHeight>
      );
    }else return null
    
  }
}

export default Table;