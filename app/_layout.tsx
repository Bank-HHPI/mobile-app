import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='index' />
      <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='welcome' />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='complete' />
        <Stack.Screen options={{ headerShown: true }} name="getCard" />
        <Stack.Screen options={{ headerShown: true }} name="confirmAddress" />
        <Stack.Screen options={{ headerShown: true }} name="confirmCard" />
        <Stack.Screen options={{ headerShown: true }} name="cardReady" />
    </Stack>
  );
}
