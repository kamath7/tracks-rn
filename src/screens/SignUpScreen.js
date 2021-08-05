import React from "react";
import { StyleSheet, View, } from "react-native";
import {Text,Input,  Button} from 'react-native-elements'
import Spacer from "../components/Spacer";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
    <Spacer>
      <Text h3>Sign Up for Master Tracker</Text>
    </Spacer>
      <Input label="Email"/>
      <Spacer/>
      <Input label="Password"/>
      
      <Spacer>
      <Button title="Sign Up"/>
      </Spacer>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
