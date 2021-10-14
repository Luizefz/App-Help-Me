import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cards from './components/Cards';
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts} from '@expo-google-fonts/inter';
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {

  const fonts = useFonts ({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold
  });


  return (
  
    <SafeAreaView>
    <ScrollView>


    <View style={styles.container}>
    
    {/* Header do Help me! */}
      
    

    <View style={styles.HelpMeWrapper}>
      <View style={styles.containerTop}>
        
        <Text style={styles.sectionTitle}>Bem-vindo, Eduardo!</Text>
        <Image source={require('./assets/user.png')} style={styles.sectionImage}/>
      
      </View>
      
      

      <View style={styles.items}>
        <Cards text={'Professores'} image={require('./assets/Telecommuting-pana.png')} color={'#69daab'}/>
        <Cards text={'Terapia\nOcupacional'} image={require('./assets/Telecommuting-pana.png')} color={'#fe9f62'}/>
        <Cards text={'Alunos'} image={require('./assets/Telecommuting-pana.png')} color={'#ff87b4'}/>
        <Cards text={'Curso de\nLibras'} image={require('./assets/Telecommuting-pana.png')} color={'#5fc9ff'}/>
        <Cards text={'Alunos'} image={require('./assets/Telecommuting-pana.png')} color={'#cb8eff'}/>
        <Cards text={'Alunos'} image={require('./assets/Telecommuting-pana.png')} color={'#fe9f62'}/>
        <Cards text={'Alunos'} image={require('./assets/Telecommuting-pana.png')} color={'#5fc9ff'}/>
      </View>



    </View>
    </View>    
    
    </ScrollView>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HelpMeWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 23,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 30
  },
  sectionImage:{
    width: 29,
    height: 29,
  },
  containerTop:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  items:{},
});
