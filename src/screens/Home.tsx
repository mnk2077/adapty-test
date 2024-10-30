import {SafeAreaView, StatusBar, View} from "react-native";
import {defaultStyles} from "../common/styles/defaultStyles.ts";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import {useNavigation} from "@react-navigation/native";
import {Button} from "@ui-kitten/components";
import {Routers} from "../navigation/Routes.ts";
import {useEffect} from "react";


const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  useEffect(() => {
    console.log(`Home screen`)
  }, []);

  return (
    <SafeAreaView style={{display: 'flex', flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={defaultStyles.screenContainer}>
        <Button
          status={'primary'}
          size={'large'}
          children={'Go to Premium'}
          onPress={() => navigation.navigate(Routers.PAYWALL)}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home