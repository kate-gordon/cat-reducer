import React from 'react';

import { connect } from 'react-redux'; 
import { catNap, catEat, catPlay } from '../redux/activity'; 


const listStyle = {
    display: 'flex',
    listStyleType: 'none',
    padding: '10px',
}

const listItemStyle = {
    padding: '10px',
}

const Activity = ({ activity, name, catNap, catEat, catPlay}) => {
    return (
        <div style={{backgroundColor: '#e6ffff', margin: '20px'}}>
            <h1>ReCat 🐱 Redux</h1>
            <p> {name } is { activity }</p>
            <ul style={listStyle}>
                <li style={listItemStyle}>
                    <button onClick={()=> catEat()}>Eating</button>
                </li>
                <li style={listItemStyle}>
                    <button onClick={()=> catNap()}>Napping</button>
                </li>
                <li style={listItemStyle}>
                    <button onClick={()=> catPlay()}>Playing</button>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    const {activity, name} = state;
    console.log(activity, name);
    return { activity, name};
    
}; 

const mapDispatchToProps = dispatch => {
    return {
        catEat: () => dispatch(catEat()), 
        catNap: () => dispatch(catNap()), 
        catPlay: () => dispatch(catPlay())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Activity); 