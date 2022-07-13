import {
	Avatar,
	Box,
	Center,
	Heading,
	Link,
	Text,
	useColorMode,
	View,
	VStack,
} from "native-base";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LinearGradientButton from "../components/LinearGradientButton";
import { AUTHORDETAILS } from "../constants/authorDetails";
import { IAuthor } from "../constants/types";
import ToggleDarkMode from "../components/ToggleDarkMode";

const styles = StyleSheet.create({
	avatar: {
		width: 100,
		height: 100,
		marginBottom: 20,
		borderColor: "white",
		borderWidth: 2,
	},
});

export default function About() {
	const { colorMode, setColorMode } = useColorMode();
	// useEffect(() => {
	// 	console.log(colorMode);
	// }, [colorMode]);
	return (
		<View>
			<LinearGradient
				colors={
					colorMode === "dark" ? ["#1A1A40", "#7A0BC0"] : ["#6E85B7", "#B2C8DF"]
				}
			>
				<Center
					// _dark={{ bg: "coolGray.600" }}
					// _light={{ bg: "warmGray.200" }}
					style={{ height: "100%", width: "100%" }}
				>
					<Avatar
						bg="cyan.200"
						style={styles.avatar}
						source={{
							uri: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
						}}
					>
						H3
					</Avatar>
					<Heading>About Author</Heading>
					<Text style={{ width: "70%", textAlign: "center", marginTop: 5 }}>
						ABC is full-stack web developer from India
					</Text>
					<VStack
						style={{
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
							marginTop: 20,
							marginBottom: 20,
						}}
						space={3}
					>
						{AUTHORDETAILS.map(({ url, text, textColor, bgColor }: IAuthor) => {
							return (
								<LinearGradientButton
									key={url + Date.now()}
									text={text}
									url={url}
									textColor={textColor}
									bgColor={bgColor}
								/>
							);
						})}
					</VStack>
					<Box style={{ position: "absolute", bottom: 0 }}>
						<ToggleDarkMode />
					</Box>
				</Center>
			</LinearGradient>
		</View>
	);
}
