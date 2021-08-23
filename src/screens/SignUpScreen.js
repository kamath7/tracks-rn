import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignIn } =
    useContext(AuthContext);
  useEffect(() => {
    tryLocalSignIn();
  }, []);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />

      <AuthForm
        headerText={"Sign Up"}
        errorMessage={state.errorMessage}
        submitButtonText={"Sign Up"}
        onSubmit={signup}
      />
      <NavLink routeName="SignIn" text="Already have an account? Sign in" />
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
});

export default SignupScreen;
