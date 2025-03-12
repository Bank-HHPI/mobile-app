import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='index' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='welcome' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='home' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false, presentation: "transparentModal" }} name='accountinfos' />
    </Stack>
  );
}
