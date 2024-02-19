import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import UploadCamera from "../screens/UploadCamera";
import ImagePickerExample from "../screens/ImagePickerExample";

const Stack = createStackNavigator();

const StackHolder = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			{/* <Stack.Screen name="Upload" component={UploadCamera} /> */}
			<Stack.Screen name="Upload" component={ImagePickerExample} />
		</Stack.Navigator>
	);
};

export default StackHolder;
