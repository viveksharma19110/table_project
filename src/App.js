import React, { useState } from 'react';
import './App.css';

function Table() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filterTable = (rows) => {
    return rows.filter(row => 
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.age.toString().includes(filter) ||
      row.occupation.toLowerCase().includes(filter.toLowerCase()) ||
      row.country.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const rows = [
    { name: 'Vivek', age: 22, occupation: 'Engineer', country: 'India' },
    { name: 'Jane Smith', age: 25, occupation: 'Designer', country: 'Canada' },
    { name: 'Samuel Green', age: 35, occupation: 'Developer', country: 'UK' }
  ];

  const filteredRows = filterTable(rows);

  return (
    <div className="table-container">
      <input 
        type="text" 
        id="tableFilter" 
        value={filter} 
        onChange={handleFilterChange} 
        placeholder="Search for names.." 
      />
      <table id="responsiveTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.occupation}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;