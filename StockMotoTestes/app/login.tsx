import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/images/logo.png')} 
        style={styles.logo}
      />


      {/* Botão Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Continue com a Conta Google</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Ou</Text>

      {/* Input Email */}
      <TextInput
        placeholder="Usuario"
        style={styles.input}
      />

      {/* Input Senha */}
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />

      {/* Botão Login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR NA CONTA</Text>
      </TouchableOpacity>

      {/* Links */}
      <View style={styles.footer}>
        <Text style={styles.link}>Esqueceu a senha?</Text>
        <Text style={styles.link}>Cadastre-se aqui</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 450,
    height: 200,
    marginBottom: 20,
    borderRadius: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },
  subtitle: {
    color: '#64748B',
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: '#E5E7EB',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  googleText: {
    color: '#111',
    fontWeight: '500',
  },
  or: {
    marginVertical: 10,
    color: '#999',
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  button: {
    backgroundColor: '#f4882f',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  link: {
    color: '#2563EB',
    fontSize: 12,
  },
});