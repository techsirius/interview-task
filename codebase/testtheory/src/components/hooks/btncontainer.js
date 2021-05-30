import React, { useState } from 'react';

import HooksCounter1 from './counter1';

function BtnContainer() {
    const [ display, setDisplay ] = useState(true);

    return (
        <>

           <button onClick={()=>{ setDisplay(!display) }}>Tongle</button>

           {display && <HooksCounter1 />}

        </>
    );
}

export default BtnContainer;
