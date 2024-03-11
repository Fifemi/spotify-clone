import React from 'react'
import { LandingPageHeader } from './components/Header/LandingPageHeader';
import GetPremium from './components/GetPremium/GetPremium';
import PowerPremium from './components/PowerPremium/PowerPremium';

const App = () => {
  return (
    <div>
      <LandingPageHeader/>
      <GetPremium/>
      <PowerPremium/>
    </div>
  )
}

export default App;