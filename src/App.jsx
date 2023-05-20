import React, {useState, useEffect} from 'react';
import './App.css';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function App() {
      return (
        <div className="card">
            <h5>Float Label</h5>
            <div className="grid p-fluid mt-3">
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputText type="text" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)}/>
                        <label htmlFor="inputtext">InputText</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={value6} onChange={(e) => setValue6(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete">AutoComplete</label>
                    </span>
                </div>
                </div>
                </div>       
      
      );
}    

export default App;