// import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ToggleDarkMode from "./src/screens/HomeScreen";
import About from "./src/screens/Notifications";
import CustomDrawer from "./src/components/CustomDrawer";

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
				<Drawer.Navigator
					useLegacyImplementation
					initialRouteName="About"
					screenOptions={{
						headerShown: false,
						drawerActiveBackgroundColor: "#413F42",
						drawerActiveTintColor: "white",
					}}
					drawerContent={(props: any) => <CustomDrawer {...props} />}
				>
					<Drawer.Screen name="Home" component={ToggleDarkMode} />
					<Drawer.Screen
						name="About"
						component={About}
						options={{
							drawerActiveBackgroundColor: "white",
							drawerContentContainerStyle: {
								display: "none",
							},
							drawerInactiveBackgroundColor: "white",
							drawerLabelStyle: {
								color: "white",
							},
							// drawerStyle: { display: "none" },
						}}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
