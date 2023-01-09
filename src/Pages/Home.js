import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCategory from '../HomeCategory';
import ImageSlider from './ImageSlider';
import SlideWrite from './SlideWrite';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <SlideWrite></SlideWrite>
            <ImageSlider></ImageSlider>
            <div className='display-flex m-3'>
                {
                    services.map(service => <HomeCategory
                    key={service._id}
                    service={service}
                    >    
                    </HomeCategory>)
                }
            </div>

        </div>
    );
};

export default Home;