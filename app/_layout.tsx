import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='index' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='welcome' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='home' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='login' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false, presentation: "transparentModal" }} name='accountinfos' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='addaccount' />
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name='transfer' />
      <Stack.Screen name='profile' options={{
        headerShown: false, gestureEnabled: true, presentation: "modal", contentStyle: {
          height: "100%", maxHeight: "100%", justifyContent: "flex-end", backgroundColor: "transparent"
        },
      }} />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='complete' />
        <Stack.Screen options={{ headerShown: false }} name="getCard" />
        <Stack.Screen options={{ headerShown: false }} name="confirmAddress" />
        <Stack.Screen options={{ headerShown: false }} name="confirmCard" />
        <Stack.Screen options={{ headerShown: false }} name="cardReady" />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name='cards' />
        <Stack.Screen options={{ headerShown: false }} name="getCards" />
        <Stack.Screen options={{ headerShown: false }} name="cards2"   />
    </Stack>
  );
}
