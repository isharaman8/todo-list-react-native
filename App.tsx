// import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainEntry from "./src/screens";

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

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<MainEntry />
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
