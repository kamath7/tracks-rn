import React from "react";
import { StyleSheet, View, } from "react-native";
import {Text,Input,  Button} from 'react-native-elements'

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Sign Up for Master Tracker</Text>
      <Input label="Email"/>
      <Input label="Password"/>
      <Button title="Sign Up"/>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
