import { LinearGradient } from "expo-linear-gradient";
import { Link, Text } from "native-base";
import { ABOUTBUTTON } from "../constants/colors";
import React from "react";
import { StyleSheet } from "react-native";

interface ILinearProps {
	url: string;
	bgColor: string[];
	textColor: string;
	text: string;
}

const styles = StyleSheet.create({
	topBody: {
		...ABOUTBUTTON,
	},
});

export default function LinearGradientButton({
	url,
	bgColor,
	textColor,
	text,
}: ILinearProps) {
	return (
		<Link href={url}>
			<LinearGradient
				colors={[...bgColor, "rgba(255, 255, 255, 0.1)"]}
				style={styles.topBody}
			>
				<Text
					style={{ color: textColor, fontWeight: "600", fontSize: 14 }}
					textAlign="center"
				>
					{text}
				</Text>
			</LinearGradient>
		</Link>
	);
}
