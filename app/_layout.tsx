import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='index' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='welcome' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='home' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false, presentation: "transparentModal" }} name='accountinfos' />
      <Stack.Screen name='profile' options={{
        headerShown: false, gestureEnabled: true, presentation: "modal", contentStyle: {
          height: "100%", maxHeight: "100%", justifyContent: "flex-end", backgroundColor: "transparent"
        },
      }} />
    </Stack>
  );
}
