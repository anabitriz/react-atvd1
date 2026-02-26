import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FlatList } from 'react-native-web';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
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

      <Text>Login</Text>
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
        color="#0a62e7"
        title="                       Logar                      "
        onPress={() => navigation.navigate("Listar")}
      />

      <Text> </Text>

      <Button color="#e7360a"
        title="                Cadastrar-se               "
        onPress={() => navigation.navigate("CadastrarUsuario")}
      />

      <StatusBar style="auto" />
    </View>
  );
}


function CadastroUseScreen({ navigation }) {
  const [nome, botarNome] = React.useState('');
  const [cpf, botarCpf] = React.useState('');
  const [email, botarEmail] = React.useState('');
  const [senha, botarSenha] = React.useState('');

  return (
    <View style={styles.container}>
      <header style={styles.header}>Cadastro de usuário</header>

      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={botarNome}
      />

      <Text>CPF</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={botarCpf}
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
        title="                Salvar               "
        onPress={() => navigation.navigate('Home')} />


      <StatusBar style="auto" />
    </View>
  );
}


function ListaScreen({ navigation }) {
  const [contatos] = React.useState([{ id: 1, nome: "ana", email: "anaa@mail.com", telefone: "999999" },
  { id: 1, nome: "deb", email: "deb@mail.com", telefone: "888888" }
  ]);

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Lista de contatos</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('Editar', { contato: item })
            }
          >
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.salvar}
        onPress={() => navigation.navigate('CadastrarContato')}
      >
        <Text style={{ color: "#ce0d0d", fontSize: 24 }}>+</Text>
      </TouchableOpacity>

    </View>
  );
}

function CadastrarContScreen({ navigation }) {
  const [nome, botarNome] = React.useState('');
  const [email, botarEmail] = React.useState('');
  const [telefone, botarTelefone] = React.useState('');

  return (
    <View style={styles.container}>
      <header style={styles.header}>Cadastrar Contato</header>

      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={botarNome}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Text>Telefone</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={botarTelefone}
      />

      <Button
        title="                Salvar               "
        onPress={() => navigation.navigate('Listar')} />


      <StatusBar style="auto" />
    </View>
  );
}


function EditarScreen({ navigation }) {
  const [nome, botarNome] = React.useState('');
  const [email, botarEmail] = React.useState('');
  const [telefone, botarTelefone] = React.useState('');

  return (
    <View style={styles.container}>
      <header style={styles.header}>Cadastrar Contato</header>

      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={botarNome}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Text>Telefone</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={botarTelefone}
      />

      <Button
        title="                Alterar               "
        onPress={() => navigation.navigate('Listar')} />

      <Button
        title="                Excluir               "
        onPress={() => navigation.navigate('Listar')} />


      <StatusBar style="auto" />
    </View>
  );
}



export default function AppScreen({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CadastrarUsuario" component={CadastroUseScreen} />
        <Stack.Screen name="Listar" component={ListaScreen} />
        <Stack.Screen name="CadastrarContato" component={CadastrarContScreen} />
        <Stack.Screen name="Editar" component={EditarScreen} />
        <Stack.Screen name="App" component={AppScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f79dc2ec',
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
//defaul só funciona em um!!
