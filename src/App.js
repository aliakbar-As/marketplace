import React, { useEffect } from 'react';
import { View, StatusBar, LogBox } from 'react-native';
import RouterComponent from './Router/Routes';


const App = () => {
  useEffect(() => {


    LogBox.ignoreAllLogs();
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'#BE2C2C'}
        barStyle={'light-content'}
        translucent={false}
      />

      <RouterComponent />
    </View>
  );
}

export default App;