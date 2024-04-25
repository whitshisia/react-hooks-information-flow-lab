import React from 'react'

 function Filter( {selectedCategory, onCategoryChange}) {
    // function ShoppingList({ items }) {
        // const [selectedCategory, setselectedCategory]= useState('all')
      const handleChange = (e) => {
          onCategoryChange(e.target.value);
        }
        return (
    <div className='Filter'>
        <select value={selectedCategory} onChange={handleChange}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
  )
}
export default Filter