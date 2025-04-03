import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { react } from 'react';


import { ChefMineiro } from './Components/App/Index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main> 
      <ChefMineiro/>
    </main>
  </StrictMode>,
)
