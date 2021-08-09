import React, { useState, useContext } from "react";
import { Touchable } from "react-native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={"Sign Up"}
        errorMessage={state.errorMessage}
        submitButtonText={"Sign Up"}
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Spacer />
        <Text style={styles.link}>Sign in if you already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },

  link: {
    color: "blue",
  },
});

export default SignupScreen;
