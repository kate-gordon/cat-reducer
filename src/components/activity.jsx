import React, { useContext } from 'react';
import  StateContext from '../context'; 

const Activity = () => {
    const [value, dispatch] = useContext(StateContext);
    
    const listItemStyle = {
        padding: '10px'
    }
    const handleClick = e =>{
        e.preventDefault(); 
        dispatch({
            type:'changeActivity',
            activity: e.target.value
        });
    };

    const handleChange = e =>{
        dispatch({
            type:'changeName',
            newName: e.target.value
        })
    }

    return (
        <div>
            <h1>The Cat's Activity</h1>
            <p> 
                {value.name} is {value.activity}
            </p>
            <p> 
                <input 
                    type='text' 
                    name='newName' 
                    placeholder='Cat Name'
                    onChange={handleChange}
                />
            </p>
            <ul style={{listStyleType:'none', display: 'flex', margin: '10px'}}>
                <li style={listItemStyle}>
                    <button onClick={handleClick} value='eating'>Eating</button>
                </li>
                <li style={listItemStyle}>
                    <button onClick={handleClick} value='napping'>Napping</button>
                </li>
                <li style={listItemStyle}>
                    <button onClick={handleClick} value='playing'>Playing</button>
                </li>
            </ul>
        </div>
    );
};

export default Activity; 

