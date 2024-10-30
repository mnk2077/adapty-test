import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {Routers} from "./Routes.ts";
import {CoreTheme} from "../common/ui-kitten/theme.ts";
import Home from "../screens/Home.tsx";
import {PaywallScreen} from "../screens/PaywallScreen.tsx";

const AppStack = createStackNavigator()

export default () => {
  return (
    <AppStack.Group
      screenOptions={({navigation}) => ({
        title: '',
        headerTransparent: true,
        headerShown: false,
        headerShadowVisible: false,
        cardStyle: {
          backgroundColor: CoreTheme.white,
        },
      })}>
      <AppStack.Screen name={Routers.HOME} component={Home} />
      <AppStack.Screen name={Routers.PAYWALL} component={PaywallScreen} />
    </AppStack.Group>
  )
}