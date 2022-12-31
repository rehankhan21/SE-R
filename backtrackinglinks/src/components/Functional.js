import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

function FuncItems (props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems({
            id:0,
            name: 'yo2'
        })
    })

    return(
        <div>

        </div>
    )
     
}

export default FuncItems;