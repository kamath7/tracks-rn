import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Text>Sign Up Screen</Text>
        <Button
          title="Go to Sign In"
          onPress={() => navigation.navigation("SignIn")}
        />
      </View>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
