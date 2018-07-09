import React, { PureComponent } from 'react';
import moment from 'moment';
import './TimePicker.css'

/* The simpliest realisation of timepicker */

export default class TimePicker extends PureComponent {

    /* hours and minutes changed according to user choice 
    expanded* variables required to render pallete of dates and 
    minutes after user click to corresponding option */

    state = {
        hours: moment().hour(),
        minutes: moment().minute(),
        expandHours: false,
        expandMinutes: false,
    }

    /* this function firstly set corresponding state to rerender 
    current time. Then it sends chousen time to parent and 
    close correspondig pallete 
     */
    setHour(e) {
        this.setState({ hours: e.target.value });
        let m = this.props.date
        m.hour(e.target.value)
        m.minute(this.state.minutes)
        this.props.onTimeChange(m)
        this.toggleHour()
    }

    /* Same as above for minutes */
    setMinutes(e) {
        this.setState({ minutes: e.target.value });
        let m = moment(this.props.date._d)
        m.hour(this.state.hours)
        m.minute(e.target.value)
        this.props.onTimeChange(m)
        this.toggleMinutes()
    }

    toggleHour = () => {
        this.setState({
            expandHours: !this.state.expandHours
        })
    }
    toggleMinutes = () => {
        this.setState({
            expandMinutes: !this.state.expandMinutes
        })
    }

    /* 
        * className container is necessery for hiding scrollbar 
        * 
     */
    render() {
        const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0, 1, 2, 3, 4, 5, 6,]
        const minutes = [0, 10, 20, 30, 40, 50]
        return (
            <div className='main'>
                <div className='wrapper' >
                    {this.state.expandHours ?
                        (<div className='container'>
                            {hours.map((hour) => {
                                return (
                                    <button
                                        key={hour}
                                        onClick={(e) => this.setHour(e)}
                                        className='button'
                                        value={hour}
                                    >{hour}</button>
                                )
                            })}
                        </div>)
                        :
                        <button
                            onClick={() => this.toggleHour()}
                            className='button'
                        >
                            {this.state.hours}
                        </button>
                    }
                </div>
                <div className='wrapper'>
                    {this.state.expandMinutes ?
                        (<div className='container'>
                            {minutes.map((minutes) => {
                                return (
                                    <button
                                        key={minutes}
                                        onClick={(e) => this.setMinutes(e)}
                                        className='button'
                                        value={minutes}
                                    >{minutes}</button>
                                )
                            })}
                        </div>)
                        :
                        <button
                            onClick={() => this.toggleMinutes()}
                            className='button'
                        >
                            {this.state.minutes}
                        </button>
                    }

                </div>
            </div>
        );
    }
}
