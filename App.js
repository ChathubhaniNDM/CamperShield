import { Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CampTentBuild from './screens/CampTentBuild';
import TentGood from './screens/TentGood';
import TentFair from './screens/TentFair';
import TentPoor from './screens/TentPoor';
import TentGuidance from './screens/TentGuidance';
import TentExcellent from './screens/TentExcellent';
import AnimalTracking from './screens/AnimalTracking';
import ImageSuccessful from './screens/ImageSuccessful';
import WaterSource from './screens/WaterSource';
import Waterfall from './screens/Waterfall';
import Lake from './screens/Lake';
import River from './screens/River';
import GoodBath from './screens/GoodBath';
import ExcellentBath from './screens/ExcellentBath';
import PoorBath from './screens/PoorBath';
import Mushroom from './screens/Mushroom';
import MushroomSuccess from './screens/MushroomSuccess';
import FairBath from './screens/FairBath';
import PoorBathReport from './screens/PoorBathReport';
import GoodBathReport from './screens/GoodBathReport';
import FairBathReport from './screens/FairBathReport';
import ExcellentBathReport from './screens/ExcellentBathReport';
import TentGuidanceGood from './screens/TentGuidanceGood';
import TentGuidanceExcel from './screens/TentGuidanceExcel';
import TentGuidanceFair from './screens/TentGuidanceFair';
import AnimalSound from './screens/AnimalSound';
import MyProfile from './screens/MyProfile';
import MushroomDesc from './screens/MushroomDesc';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const HomeTabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#5FFF9F',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: () => (
            <Image
              source={require('./assets/HomeBlack.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
          headerShown: false,
          headerLeft: null,
        })}
      />

      <Tab.Screen
        name="Profile"
        component={MyProfile}
        options={() => ({
          tabBarIcon: () => (
            <Image
              source={require('./assets/ProfileBlack.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
          headerShown: false,
          headerLeft: null,
        })}
      />

      <Tab.Screen
        name="Guidance"
        component={TentGuidance}
        options={() => ({
          tabBarIcon: () => (
            <Image
              source={require('./assets/guidanceBlack.png')}
              style={{ width: 25, height: 25 }}
            />
          ),
          headerLeft: null,
        })}
      />
    </Tab.Navigator>
  );


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => ({
            headerShown: false,
            headerLeft: null,
          })}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={() => ({
            headerShown: false,
            headerLeft: null,
          })}
        />

        <Stack.Screen
          name="Good"
          component={TentGood}
          options={() => ({
            headerTitle: '',
          })}
        />

        <Stack.Screen
          name="Fair"
          component={TentFair}
          options={() => ({
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Poor"
          component={TentPoor}
          options={() => ({
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Excellent"
          component={TentExcellent}
          options={() => ({
            headerTitle: '',
          })}
        />

        <Stack.Screen
          name="GoodBath"
          component={GoodBath}
          options={{
            headerTitle: 'Good for Bath',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />

        <Stack.Screen
          name="ExcellentBath"
          component={ExcellentBath}
          options={{
            headerTitle: 'Excellent for Bath',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />
        <Stack.Screen
          name="PoorBath"
          component={PoorBath}
          options={{
            headerTitle: 'Poor for Bath',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />

        <Stack.Screen
          name="FairBath"
          component={FairBath}
          options={{
            headerTitle: 'Fair for Bath',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />

        <Stack.Screen
          name="ImageSuccess"
          component={ImageSuccessful}
          options={() => ({
            headerTitle: '',
          })}
        />

        <Stack.Screen
          name="MushroomImageSuccess"
          component={MushroomSuccess}
          options={() => ({
            headerTitle: '',
          })}
        />

        <Stack.Screen
          name="GuidanceGood"
          component={TentGuidanceGood}
          options={() => ({
            headerTitle: 'Construction Guidance-(for Good)',
          })}
        />

        <Stack.Screen
          name="GuidanceExcel"
          component={TentGuidanceExcel}
          options={() => ({
            headerTitle: 'Construction Guidance-(for Excellent)',
          })}
        />
        <Stack.Screen
          name="GuidanceFair"
          component={TentGuidanceFair}
          options={() => ({
            headerTitle: 'Construction Guidance-(for Fair)',
          })}
        />

        <Stack.Screen
          name="Homes"
          component={HomeTabNavigator}
          options={() => ({
            headerShown: false,
            headerLeft: null,
          })}
        />
        <Stack.Screen
          name="Tent"
          component={CampTentBuild}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />

        <Stack.Screen
          name="Track"
          component={AnimalTracking}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />
        <Stack.Screen
          name="Water"
          component={WaterSource}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />

        <Stack.Screen
          name="Waterfall"
          component={Waterfall}
          options={{
            headerTitle: 'Waterfall',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />
        <Stack.Screen
          name="Lake"
          component={Lake}
          options={{
            headerTitle: 'Lake',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />
        <Stack.Screen
          name="River"
          component={River}
          options={{
            headerTitle: 'River',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />
        <Stack.Screen
          name="Mushroom"
          component={Mushroom}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />
        <Stack.Screen
          name="PoorBathReport"
          component={PoorBathReport}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />
        <Stack.Screen
          name="GoodBathReport"
          component={GoodBathReport}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />
        <Stack.Screen
          name="FairBathReport"
          component={FairBathReport}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />
        <Stack.Screen
          name="ExcellentBathReport"
          component={ExcellentBathReport}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />

        <Stack.Screen
          name="AnimalSound"
          component={AnimalSound}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />

        <Stack.Screen
          name="MushroomDesc"
          component={MushroomDesc}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#5FFF9F',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
