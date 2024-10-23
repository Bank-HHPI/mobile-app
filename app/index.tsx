import { router } from "expo-router";
import { useEffect } from "react";
import Button from "~/components/Button";
import DefaultLayout from "~/components/DefaultLayout";


export default function Home() {
  useEffect(() => {
    setTimeout(() => {
    router.push('/signup');
    }, 500)
  }, []);
  return (
    <DefaultLayout>

      <Button variant="black">
        Connexion
      </Button>

      <Button variant="white">
        Inscription
      </Button>

      <Button variant="blue">
        Connexion
      </Button>

      <Button variant="blue-disabled" disabled>
        Connexion
      </Button>

      <Button variant="dark">
        Connexion
      </Button>
    </DefaultLayout>
  );
}