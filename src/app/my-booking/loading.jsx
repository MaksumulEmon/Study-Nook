import React from 'react';
import { FadeLoader } from 'react-spinners';

const Mybookingloading = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <FadeLoader />
        </div>
    );
};

export default Mybookingloading;