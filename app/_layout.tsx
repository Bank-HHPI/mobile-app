import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='index' />
      <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='welcome' />
    </Stack>
  );
}
