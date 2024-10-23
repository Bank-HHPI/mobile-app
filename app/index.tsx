import Button from "~/components/Button";
import DefaultLayout from "~/components/DefaultLayout";


export default function Home() {
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