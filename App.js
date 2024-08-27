import './gesture-handler';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppRoutesCoord from './src/routes/app.routesCoord'; // rota screens coodenador
import AppRoutesPaciente from './src/routes/app.routesPaciente';
import AppRoutesFisio from './src/routes/app.routesFisio';

import Juncao from './src/screens/juncaoTeste/juncao'




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {

  return (
    // ################ rota coodenador
    // <NavigationContainer>
    //   <AppRoutesCoord />      
    // </NavigationContainer>
    // ############### fim rota coodenador
    

    //################ rota PACIENTE
    // <NavigationContainer>
    //   <AppRoutesPaciente/>
    // </NavigationContainer>


    //################ rota FISIOTERAPEUTA
    // <NavigationContainer>
    //   <AppRoutesFisio/>
    // </NavigationContainer>

    //################ rota junção teste provisorio
    // <NavigationContainer>
    //   <Juncao/>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Juncao" >
        <Stack.Screen name="Juncao" component={Juncao} options={{ headerShown: false }} />
        <Stack.Screen name="AppRoutesCoord" component={AppRoutesCoord} options={{ headerShown: false }}/>
        <Stack.Screen name="AppRoutesFisio" component={AppRoutesFisio} options={{ headerShown: false }}/>
        <Stack.Screen name="AppRoutesPaciente" component={AppRoutesPaciente} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
      
  );
}
