import React from 'react';

import { connect } from 'react-redux'; 
import { setName } from '../redux/activity'; 

const PetName = ({ setName, inputName}) => {
    return (
        <div>
           <input type="text" value={inputName} onChange={(e) => setName(e.target.value)}
        />
        {/* <button onClick={}>SAVE</button> */}
        </div>
    )
}

const mapStateToProps = state => {
    const { name } = state; 
    return { name }; 
}; 

const mapDispatchToProps = dispatch => {
    return {
        setName: (newName) => dispatch(setName(newName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (PetName); 