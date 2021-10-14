
import React from 'react';
import { TextInput, View } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper' 
import { InicialScreen } from './app/screens/inicial/inicial.screen';


const App = () => {


  return (
    <PaperProvider>
      <InicialScreen/>
    </PaperProvider>
    
  )



  export default App;
