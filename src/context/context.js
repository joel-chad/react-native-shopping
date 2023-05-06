import React from 'react';

export default React.createContext({
  items: [],
  addNewItem : (item) => {},
  deleteItem : (itemId) => {},

});