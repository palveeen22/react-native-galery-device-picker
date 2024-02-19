import { NavigationContainer } from "@react-navigation/native";
import StackHolder from "./src/stacks/StackHolder";

export default function App() {
	return (
		<NavigationContainer>
			<StackHolder />
		</NavigationContainer>
	);
}
