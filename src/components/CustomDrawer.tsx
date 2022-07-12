import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import DrawerItem from "@react-navigation/drawer";
import { Avatar, Button, Center, Image, Link, View } from "native-base";
import React from "react";
import { useLinkTo } from "@react-navigation/native";

export default function CustomDrawer(props: any) {
	const linkTo = useLinkTo();
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView
				{...props}
				// contentContainerStyle={{ backgroundColor: "#6E85B7" }}
			>
				<Center mt={5} mb={3}>
					<Avatar
						source={{
							uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
						}}
						style={{ width: 90, height: 90 }}
					/>
				</Center>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			{/* <View style={{ position: "absolute" }}> */}
			<Button
				onPress={() => linkTo("/About")}
				style={{
					// width: "100%",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 0,
				}}
				backgroundColor="white"
				href="About"
				_text={{
					fontSize: 18,
					textAlign: "center",
					marginBottom: 1,
					color: "black",
				}}
			>
				About
			</Button>
			{/* </View> */}
		</View>
	);
}
