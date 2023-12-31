import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailsPage from '../pages/MoviesDetailsPage';
import MoviesPage from '../pages/MoviesPage';


const Stack = createNativeStackNavigator();

export default function AppRoutes() {

    return (
        <Stack.Navigator>
            <Stack.Screen name='MoviesPage' component={MoviesPage} options={{ headerShown: false }} />
            <Stack.Screen name='MoviesDetailsPage' component={MovieDetailsPage} />
        </Stack.Navigator>

    )
}