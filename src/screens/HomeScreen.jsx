import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>test</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate("Upload");
				}}
			>
				<Text style={styles.textSmall}>Go Upload</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		backgroundColor: "#000",
		borderRadius: "30",
		padding: 10,
	},
	textSmall: {
		color: "#fff",
	},
});
