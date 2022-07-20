import { HStack, Switch, Text, useColorMode } from "native-base";
import React from "react";

// Color Switch Component
function ToggleDarkMode({ navigation }: any) {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack space={2} alignItems="center">
			<Text>Dark</Text>
			<Switch
				isChecked={colorMode === "light"}
				onToggle={toggleColorMode}
				aria-label={
					colorMode === "light" ? "switch to dark mode" : "switch to light mode"
				}
			/>
			<Text>Light</Text>
		</HStack>
	);
}

export default ToggleDarkMode;
