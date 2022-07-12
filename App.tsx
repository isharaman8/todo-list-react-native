// import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import {
	Text,
	Link,
	HStack,
	Center,
	Heading,
	Switch,
	useColorMode,
	NativeBaseProvider,
	extendTheme,
	VStack,
	Box,
	View,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ToggleDarkMode from "./src/screens/HomeScreen";
import About from "./src/screens/Notifications";

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
	interface ICustomTheme extends MyThemeType {}
}

const styles = StyleSheet.create({
	mainView: {
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Drawer.Navigator useLegacyImplementation initialRouteName="About">
					<Drawer.Screen name="Home" component={ToggleDarkMode} />
					<Drawer.Screen name="About" component={About} />
				</Drawer.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
