import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import theme from './src/theme';
import { Card, Text } from 'react-native-paper';
import { Button, TextInput } from 'react-native-paper';
import { List, Switch } from 'react-native-paper';


export default function PaperUi() {
    // Extend the default Material 3 light theme
    // and override the primary color with our custom theme
    const paperTheme = {
        ...MD3LightTheme,
        colors: {
            ...MD3LightTheme.colors,
            primary: theme.colors.primary,
        },
    };

    return (
        <PaperProvider theme={paperTheme}>
            {/* Handle device safe areas (notches, status bar, etc.) */}
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#eef' }}>
                    <View style={{ flex: 1, padding: 20 }}>
                        <MainScreen />
                        <SettingsScreen/>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>
    );
}


function MainScreen() {
    return (
        <View>
            <Card style={{ marginTop: 20 }}>
                <Card.Title title="Profile Card" />
                <Card.Content>
                    <Text>
                        Styled using React Native Paper components.
                    </Text>
                </Card.Content>

            </Card>
            <TextInput
                label="Enter your name"
                mode="outlined"
                style={{ marginTop: 20 }}
            />


            <Button mode="contained" onPress={() => { }} style={{ marginTop: 20 }}>
                Save Profile
            </Button>

        </View>

    );
}

function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [backupEnabled, setBackupEnabled] = React.useState(true);

  return (
    <>
      <Text variant="titleLarge" style={{ marginTop: 16, marginHorizontal: 16 }}>
        Settings
      </Text>

      <List.Section style={{ marginTop: 8 }}>
        <List.Subheader>General</List.Subheader>

        <List.Item
          title="Enable notifications"
          left={props => <List.Icon {...props} icon="bell-outline" />}
          right={() => (
            <Switch
              value={notificationsEnabled}
              onValueChange={() => setNotificationsEnabled(v => !v)}
            />
          )}
        />

        <List.Item
          title="Dark mode"
          left={props => <List.Icon {...props} icon="theme-light-dark" />}
          right={() => (
            <Switch
              value={darkMode}
              onValueChange={() => setDarkMode(v => !v)}
            />
          )}
        />

        <List.Item
          title="Cloud backup"
          left={props => <List.Icon {...props} icon="cloud-outline" />}
          right={() => (
            <Switch
              value={backupEnabled}
              onValueChange={() => setBackupEnabled(v => !v)}
            />
          )}
        />
      </List.Section>
    </>
  );
}
