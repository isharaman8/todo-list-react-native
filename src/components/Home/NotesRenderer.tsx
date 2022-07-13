import {
	Box,
	HamburgerIcon,
	Heading,
	Menu,
	Spacer,
	Text,
	useColorMode,
} from "native-base";
import React, { useEffect, useRef } from "react";
import Animated, { WithTimingConfig } from "react-native-reanimated";

import { COLORS } from "../../constants/colors";

export default function NotesRenderer({ item }: any) {
	const { colorMode, toggleColorMode } = useColorMode();

	const fadeAnim = useRef(new Animated.Value(1)).current;

	return (
		<Box
			p={3}
			_light={{ background: COLORS.notes.light }}
			_dark={{ background: COLORS.notes.dark }}
			_text={{ color: colorMode === "dark" ? "white" : "black" }}
			m={2}
			w={"45%"}
			position="relative"
			borderRadius={10}
			// onTouchStart={}
			shadow={5}
		>
			{/* <Menu
				position={"absolute"}
				shadow={2}
				right={0}
				top={0}
				trigger={(triggerProps) => {
					return (
						<Pressable accessibilityLabel="More options menu" {...triggerProps}>
							<HamburgerIcon />
						</Pressable>
					);
				}}
			>
				<Menu.Item>Delete</Menu.Item>
			</Menu> */}
			<Heading w="92%" fontSize={23} mb={2}>
				{item.title}
			</Heading>
			<Spacer />
			<Text>{item.content}</Text>
		</Box>
	);
}
