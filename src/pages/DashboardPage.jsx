import React from 'react';
import List from '../component/List';


function DashboardPage({recipes, onDelete, onAddToCart}) { 
  return (
    <div>
      <List data={recipes} onDelete={onDelete} onAddToCart={onAddToCart} />
    </div>
  );
}

export default DashboardPage;
