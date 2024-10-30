import React from "react";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {observer, Provider} from 'mobx-react'
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {createNavigationContainerRef, NavigationContainer} from "@react-navigation/native";
import {UiKitConfig} from "./common/ui-kitten/config";
import {CoreTheme} from "./common/ui-kitten/theme";
import {StatusBar} from 'react-native'
import * as eva from '@eva-design/eva'
import {adapty} from "react-native-adapty";
import AppStack from './navigation/stack.tsx'

const stores = {}
export const navigationRef = createNavigationContainerRef<any>()

const onNavigationReady = async () => {
  try {
    await adapty.activate('public_live_K8oxgVi4.0hweZVg4vFInFljOd3Ky')
    console.log(`adapty activate success`)
  } catch (e) {
    console.log(`adapty activate error ${JSON.stringify(e)}`)
  }
}

const RootNavigation = () => {

  return (
    <SafeAreaProvider>
      <Provider {...stores}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva.light, ...CoreTheme}} customMapping={UiKitConfig}>
          <NavigationContainer ref={navigationRef} onReady={onNavigationReady}>
            <StatusBar animated barStyle={'dark-content'} backgroundColor={CoreTheme['background-color']} />
            <AppStack />
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

export default observer(RootNavigation)