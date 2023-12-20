import { useRouteError, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold">Hubo un error</h1>
      <p>{error.statusText || error.message}</p>
      <p>{error.status}</p>
      <div className="flex flex-col gap-2 items-center">
        <h2>Redirigiendo a Home</h2>
        <Spinner size="xl" />
      </div>
    </section>
  );
};

export default ErrorPage;
