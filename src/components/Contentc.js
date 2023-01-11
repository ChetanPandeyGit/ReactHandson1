import React from 'react';
import './style.css';

class Contentc extends React.Component {
    render() {
        return (
            <div className='dataContent dataContent2'>
                <h1>This is created using class Component</h1>
                <p>This is done using external CSS</p>
                <p style={{ color: "blue" }}>This is done using internal CSS</p>
            </div>
        );
    }
}

export default Contentc;