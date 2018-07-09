import React from 'react';
import Reminder from '../reminder/Reminder'
import moment from 'moment';


export default (props) => {
    // rendering month with corresponding colors and texts
    return (
        <div style={div}>
            {props.month ?
                (props.month.map((d, i) => {
                    return (
                        <div
                            key={i}
                            onClick={() => props.dayClick(moment(d))}
                            style={
                                Object.assign({}, date,
                                    { backgroundColor: d.color })
                            }
                        >
                            {d.format('DD')} {d.format('MMM')}
                            <br />
                            {d.text.filing}
                            {d.text.tender}
                            {d.text.reminder}
                        </div>
                    )
                }))
                :
                null
            }
            {props.reminder.show ?
                <Reminder
                    close={() => props.close()}
                    date={props.reminder.date}
                    month = {props.month}
                />
                :
                null
            }
        </div>
    );
};
const date = {
    height: '80px',
    width: '14.28%',
    display: 'inline-flex',
    backgroundColor: 'grey',
    fontSize: '13px',
    textAlign: 'center',
    overflow: 'hidden'
}

const div = {
    margin: '0 3% 0  3%',
    backgroundColor: '',
    textAlign: 'left'
}