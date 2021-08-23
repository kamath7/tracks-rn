import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText={"Sign In"}
        onSubmit={() => {}}
        errorMessage={""}
        submitButtonText={"Sign In"}
      />
      <NavLink text={"Sign Up here if no account"} routeName={"SignUp"} />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
/*
SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

*/
