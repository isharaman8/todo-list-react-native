import { Input, InputGroup, useColorMode, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import AddNoteButton from "../components/Home/AddNoteButton";
import { COLORS } from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
	mainview: { height: "100%" },
	input: {
		width: "90%",
		height: 60,
	},
	hstack: {
		marginTop: 30,
		marginLeft: "auto",
		marginRight: "auto",
		width: "90%",
	},
});

export default function HomeScreen() {
	const { colorMode } = useColorMode();
	return (
		<View
			style={{
				...styles.mainview,
				backgroundColor:
					colorMode === "dark"
						? COLORS.mainScreenBackground.dark
						: COLORS.mainScreenBackground.light,
			}}
		>
			<Input
				width="90%"
				mr={"auto"}
				ml="auto"
				mt={10}
				height={"50"}
				style={{ ...styles.input }}
				placeholder="Search Notes"
				fontSize={18}
				borderRadius={15}
				InputLeftElement={
					<MaterialIcons
						name="person"
						size={30}
						style={{ marginLeft: 8, color: "grey" }}
					/>
				}
			/>

			<AddNoteButton />
		</View>
	);
}
