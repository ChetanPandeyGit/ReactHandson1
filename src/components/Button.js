import { useState } from 'react';
import './style.css';
import Contentf from './Contentf';
import Contentc from './Contentc';

function Button(props) {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <>
            <div id="btnContainer">
                <div className='btns' onClick={() => setShow1(!show1)}>To see styling in functional component</div>
                <div className='btns' onClick={() => setShow2(!show2)}>To see styling in class component</div>
            </div>
            <div className='cont'>
                {show1 && <Contentf />}
                {show2 && <Contentc />}
            </div>
        </>
    );
}

export default Button;