import React, { useState } from 'react';
import Counter from './components/Counter';
import UseEffectClass from './components/UseEffectClass';
import UseEffectFunction from './components/UseEffectFunction';

const App = () => {
    const [show, setShow] = useState(true);
    return (
        <div>
            {show && <UseEffectFunction />}
            <p>
                <button type="button" onClick={() => setShow((ps) => !ps)}>
                    {show ? 'Button Show' : 'Button Hide'}
                </button>
            </p>
        </div>
    );
};

export default App;
