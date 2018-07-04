import React from 'react';

export default props => {
    return (
        <div style = {div}>
            {
        props.month.map((d,i) => {
            return (
                <div 
                    key={i}
                    onClick = {(e) => props.click(e, d.format('MM-DD'))}
                    style={
                        Object.assign({}, style,
                        {backgroundColor:props.colors.get
                            (d.format('MM-DD'))})
                    }>
                    {d.format('DD')} {d.format('MMM')}
                    <br/>
                    {props.texts.get(d.format('MM-DD'))}
                    </div>
                )
              })
          }
        </div>
    );
};
const style = {
    height: '80px',
    width: '14.28%',
    display: 'inline-table',
    backgroundColor: 'grey',
    fontSize: '13px',
    textAlign: 'center'
}

const div = {
    margin: '0 3% 0  3%',
    backgroundColor:'',
    textAlign: 'left'
}