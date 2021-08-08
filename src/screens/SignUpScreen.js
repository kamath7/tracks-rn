import React, { useState , useContext} from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext} from '../context/authContext'

const SignUpScreen = ({ navigation }) => {
  const {state, signup} = useState(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Master Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        placeholder="rgb@gmail.com"
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        placeholder="******"
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Spacer>
        <Button title="Sign Up"  onPress={()=>signup({email, password})}/>
      </Spacer>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
