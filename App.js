import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
   title: {
    textAlign: 'center',
    marginVertical: 8,
   },
    fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
   separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const Separator = () => <View style={styles.separator} />;

function showAlert(message) {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}

const Txt = ()=> (
<SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      
    
    </SafeAreaView>
</SafeAreaProvider>
)

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
        <Text style={styles.title}>
          --Email
        </Text>
      </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <View>
          <Text style={styles.title}>
          **Senha
          </Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
       <View>
        <Button
          title="Logar"
          onPress={() => showAlert('Simple Button pressed')}
        />
      </View>
      <Separator />
        <Button
          title="Cadastre-se"
          color="#f194ff"
          onPress={() => showAlert('Button with adjusted color pressed')}
        />
      <Separator />
      </SafeAreaView>
  </SafeAreaProvider>
  
)
export default App;



