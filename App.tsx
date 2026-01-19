import { View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FlexDemo from './FlexDemo';
import PaperUi from './PaperUi';
function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eef' }}>
        <ScrollView>
       <FlexDemo/>
       <PaperUi/>
       </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;