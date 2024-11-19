import React from 'react';

import CategoryList from '../components/CategoryList';

const Category = () => {
  const CATEGORY = [
    { id: '1', name: 'Animals', image: '/icons/animals.png' },
    { id: '2', name: 'Art', image: '/icons/art.png' },
    { id: '3', name: 'Board Games', image: '/icons/board-games.png' },
    { id: '4', name: 'Books', image: '/icons/books.png' },
    { id: '5', name: 'Computers', image: '/icons/computers.png' },
    { id: '6', name: 'Film', image: '/icons/film.png' },
    { id: '7', name: 'General Knowledge', image: '/icons/general-knowledge.png' },
    { id: '8', name: 'Geography', image: '/icons/geography.png' },
    { id: '9', name: 'History', image: '/icons/history.png' },
    { id: '10', name: 'Mathematics', image: '/icons/mathematics.png' },
    { id: '11', name: 'Music', image: '/icons/music.png' },
    { id: '12', name: 'Politics', image: '/icons/politics.png' },
    { id: '13', name: 'Science & Nature', image: '/icons/science-nature.png' },
    { id: '14', name: 'Sports', image: '/icons/sports.png' },
    { id: '15', name: 'Television', image: '/icons/television.png' },
    { id: '16', name: 'Vehicles', image: '/icons/vehicles.png' },
    { id: '17', name: 'Video Games', image: '/icons/video-games.png' }
  ];


  return <CategoryList items={CATEGORY} />;
};

export default Category;
