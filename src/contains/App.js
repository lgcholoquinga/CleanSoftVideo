/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useinitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {

  const initialState = useinitialState(API);

  return initialState?.length === 0 ? <h1>Loading...</h1> : (
    <div className='app'>
      <Header />
      <Search />
      {
        initialState.mylist?.length > 0 && (
          <Categories title='My List'>
            <Carousel>
              {
                initialState.mylist?.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
      <Categories title='Trends'>
        <Carousel>
          {
            initialState.trends?.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categories>
      <Categories title='Originals of CleanSoftVideo'>
        <Carousel>
          {
            initialState.originals?.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
