import { TextStyle } from "react-native";

const ABOUTBUTTON: TextStyle = {
	// borderRadius: 15,
	width: "70%",
	textAlign: "center",
	justifyContent: "center",
	shadowColor: "#000000",
	shadowOffset: { width: 10, height: 10 },
	shadowOpacity: 0.2,
	shadowRadius: 10,
};

const LINEARLINE: TextStyle = {
	width: "100%",
	height: "100%",
	justifyContent: "center",
	alignItems: "center",
};

const COLORS = {
	button: {
		dark: "#1A1A40",
		light: "#6E85B7",
	},
	customDrawer: {
		dark: "#a5b5d9",
		light: "#ffffff",
	},
	customDrawerPanel: {
		dark: "#1A1A40",
		light: "#413F42",
	},
	mainScreenBackground: {
		dark: "#a5b5d9",
		light: "#ffffff",
	},
};

export { ABOUTBUTTON, LINEARLINE, COLORS };
