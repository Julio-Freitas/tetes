import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { TextInput } from '../lib'

const App = () => {
  const [value, setValue] = useState('')

  return  <TextInput  
          type="text"
          label="Julio cesar"
          placeholder="placeholder"
          value={value}
          onChange={setValue}
          helpText="Texto Ajuda" 
          />
}

ReactDom.render(<App />, document.getElementById('root'));