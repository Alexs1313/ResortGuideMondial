import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SavedProvider} from './src/context/SavedContext';
import StackNav from './src/routes/StackNav';

function App(): React.JSX.Element {
  return (
    <SavedProvider>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </SavedProvider>
  );
}

export default App;
