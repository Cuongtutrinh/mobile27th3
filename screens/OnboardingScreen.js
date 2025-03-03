import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require("../assets/delivery-man.png")} style={styles.background}>
      <View style={styles.overlay}>
        {/* Hình củ cà rốt */}
        <Image source={require("../assets/carot.png")} style={styles.carrotIcon} />

        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Làm mờ phần chữ
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  carrotIcon: {
    width: 50, // Kích thước icon
    height: 50,
    marginBottom: 10, // Tạo khoảng cách với chữ
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#e0e0e0",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#6DBE45",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
