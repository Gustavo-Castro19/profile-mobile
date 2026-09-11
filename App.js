import { StatusBar } from 'expo-status-bar';
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  function fecharTeclado() {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={fecharTeclado}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <Text style={styles.title}>Perfil</Text>

        <View style={styles.main}>
          <TouchableOpacity style={styles.btnAvatar}>
            <Image
              source={{ uri: 'https://avatars.githubusercontent.com/u/62637265?v=4' }}
              style={styles.avatar}
            />

            <Text style={styles.txtAlterarFoto}>Alterar foto</Text>
          </TouchableOpacity>

          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor='#7C7C8A'
              selectionColor='#00875F'
            />

            <TextInput
              style={[styles.input, styles.inputDisabled]}
              defaultValue='marcos@gmail.com'
              editable={false}
            />
          </View>

          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Alterar senha</Text>

            <TextInput
              style={styles.input}
              placeholder="Senha antiga"
              placeholderTextColor='#7C7C8A'
              secureTextEntry
              selectionColor='#00875F'
            />

            <TextInput
              style={styles.input}
              placeholder="Nova senha"
              placeholderTextColor='#7C7C8A'
              secureTextEntry
              selectionColor='#00875F'
            />
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.label}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    marginVertical: 24, // cima/baixo
  },
  main: {
    backgroundColor: '#121214',
    flex: 1, // ocupa todo espaço disponivel em tela
    width: '100%',
    paddingVertical: 24, // espaço interno cima/baixo
    paddingHorizontal: 40,
  },
  btnAvatar: {
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 148,
    height: 148,
    borderRadius: 148,
    borderWidth: 2,
    borderColor: '#323238',
  },
  txtAlterarFoto: {
    color: '#00B37E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputsContainer: {
    gap: 16,
    marginTop: 36,
  },
  input: {
    backgroundColor: '#39393C',
    height: 56,
    width: '100%',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    paddingLeft: 16,
  },
  inputDisabled: {
    backgroundColor: '#202024',
    color: "#666",
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  btn: {
    backgroundColor: '#00875F',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
  }
});
