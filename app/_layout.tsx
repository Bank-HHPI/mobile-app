import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='index' />
      <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='welcome' />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='complete' />
        <Stack.Screen options={{ headerShown: false }} name="getCard" />
        <Stack.Screen options={{ headerShown: false }} name="confirmAddress" />
        <Stack.Screen options={{ headerShown: false }} name="confirmCard" />
        <Stack.Screen options={{ headerShown: false }} name="cardReady" />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='cards' />
        <Stack.Screen options={{ headerShown: false }} name="getCards" />
        <Stack.Screen options={{ headerShown: false }} name="card2"   />
    </Stack>
  );
}
