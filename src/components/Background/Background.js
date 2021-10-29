import React from 'react';
import Image from 'next/image';

const Background = (props) => {
    return (
        <div className="background-container">
            <div className='twinkling'></div>
            <Image
                alt={"The Death Star"}
                src={'/images/static/DeathStar.jpeg'}
                layout='responsive'
                width={550}
                height={800}
                priority
            />
        </div>
    );
};

export default Background;