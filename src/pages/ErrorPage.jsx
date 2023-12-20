import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center gap-2 h-screen">
      <h1 className="text-4xl font-bold">Hubo un error</h1>
      <p className="text-2xl">{error.statusText || error.message}</p>
      <p className="text-2xl">{error.status}</p>
      <p className="text-2xl">Puedes intentar acceder más tarde</p>
      <div className="flex flex-col gap-2 items-center">
        <Button
          className="my-3"
          variant="solid"
          colorScheme="yellow"
          textColor={"black"}
          onClick={() => navigate(`/home`)}
          size={"lg"}
        >
          Regresar a Home
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
