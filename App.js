import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native';

export function App() {
  const [email, botarEmail] = React.useState('');
  const [senha, botarSenha] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://simplescontrole.com.br/wp-content/uploads/2024/05/usuario.png',
        }}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={botarSenha}
      />

      <Button style={styles.botao}
        title="                       Logar                      "
        onPress={() => Alert.alert('Email: ' + email)}
      />

        <Text> </Text>

      <Button
        title="                Cadastrar-se               "
        onPress={() => Alert.alert('Cadastro')}
      />

      <Text>Esqueceu a senha?</Text>

      <StatusBar style="auto" />
    </View>
  );
}

export function cadastro() {
  const [nome, botarNome] = React.useState('');
  const [email, botarEmail] = React.useState('');
  const [senha, botarSenha] = React.useState('');

  return (
    <View style={styles.container}>
      <header style= {styles.header}>Cadastro</header>
      
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarNome}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={botarSenha}
      />

      <Button
        title="                Cadastro               "
        onPress={() => Alert.alert('Cadastro')}
      />


      <StatusBar style="auto" />
    </View>
  );
}


export default function esqueceuSenha() {
  const [email, botarEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <header style={styles.header}>Esqueceu a senha?</header>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Button
        title="                enviar               "
        onPress={() => Alert.alert('esqueceuSenha')}
      />

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1ebf5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: '30px'
  },
  
});
