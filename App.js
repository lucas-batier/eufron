import { View } from 'react-native';
import Connexion from './pages/Connexion';
import SignIn from './pages/Connexion/SignIn';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FEFEE3',
    }}>
      <SignIn />
    </View>
  );
}
