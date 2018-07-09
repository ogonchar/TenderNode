import React, { Component } from 'react';
import Modal from '../../HocAndTemplates/Modal.js'
import { GREY, GREEN, DANGER } from '../../../const.js'
import onClickOutside from "react-onclickoutside";
import TimePicker from './timePicker/TimePicker';
import Button from '../../HocAndTemplates/Button.js'
import Input from '../../HocAndTemplates/Input.js'
import moment from 'moment';

/* 
    * class rendered for adding reminder from calendar
    * Reminder dialog appir when user click on date in calendar
    * Add custome timePicker since after 5 external pickers do not find any 
    * which works normally
*/

class Reminder extends Component {
    /* Initially dateTime represent todays date for render current month */
    state = {
        text: '',
        dateTime: this.props.date,
    }

    handleClickOutside = event => {
        this.props.close()
    }

    onTimeChange(time) {
        this.setState({
            dateTime: time
        })
    }
    onTextChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    /* reminder sended as an object */
    sendReminder = () => {
        fetch('/api/reminders/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: this.state.text,
                dateCreate: new Date(),
                dateDestination: this.state.dateTime,
                owner: ''
            })
        });
    }
    /* Firstly here assessing variable for represent detailed text of 
    events in props date then we wrapp in Modal textarea and timepicker
    for  */
    render() {
        let st=0;
        this.props.month.forEach((m) => {
        if(moment(m).format('MM-DD') === this.props.date.format('MM-DD'))
                    {
                        st = (<div><div>
                            Filing: {m.text.filing}
                        </div>
                        <div>
                            Tender: {m.text.tender}
                        </div>
                        <div>
                            Reminder: {m.text.reminder}
                        </div></div>)}})
            return (
            <Modal
                name='reminder'
                show='true'
                margin='100px auto'
                backgroundColor={GREY}
                width='200px'
                height='300px'
            >
                {this.props.date.format('DD MM YYYY')}
                {st}
                <div key={1}>
                    <TimePicker
                        date={this.props.date}
                        onTimeChange={(time) => this.onTimeChange(time)}
                    />
                    <br />
                    <Input
                        type='textarea'
                        onChange={(e) => this.onTextChange(e)}
                        styles={{ height: '80px' }}
                    />
                </div>
                <Button name='close' color={DANGER}
                    onClick={() => this.props.close()}
                />
                <Button name='save' color={GREEN}
                    onClick={() => this.sendReminder()}
                />

            </Modal>

        );
    }
}

export default onClickOutside(Reminder);