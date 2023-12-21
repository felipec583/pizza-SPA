import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { capitalizeString } from "../utils/utils";
import { GrCart } from "react-icons/gr";
import { Spinner, useToast } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Image,
  Divider,
  ButtonGroup,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const PizzaCardRow = () => {
  const { data, cartList, handleAddToCart, addUpPrices } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    addUpPrices();
  }, [cartList]);
  return (
    <>
      <section className="card-row">
        {data.map((pizza) => {
          return (
            <Card
              maxW={"420"}
              key={pizza?.id}
              height={680}
              variant={"outline"}
              
            >
              <CardBody>
                <div className="flex justify-center">
                  <Image
                    src={pizza?.img}
                    alt="pizza"
                    borderRadius="lg"
                    fallback={
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    }
                  />
                </div>

                <Stack mt="6" spacing="3">
                  <Heading size="md">{capitalizeString(pizza?.name)}</Heading>
                  <Divider
                    borderColor={"black"}
                    borderStyle={"solid"}
                    borderBlock={"1"}
                  />
                  <h2 className="my-2 font-bold">Ingredientes</h2>

                  <ul className="list-image-[url(/pizza2.png)] flex flex-col items-start flex-1  ingredient-list">
                    {pizza?.ingredients.map((ingredient) => (
                      <li key={ingredient}>{capitalizeString(ingredient)}</li>
                    ))}
                  </ul>
                </Stack>
              </CardBody>
              <Divider
                borderColor={"black"}
                borderStyle={"solid"}
                borderBlock={"1"}
              />
              <CardFooter className="flex flex-col">
                <Text
                  color="black.600"
                  fontSize="2xl"
                  fontWeight={"bold"}
                  className="text-center"
                >
                  {pizza?.price.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </Text>
                <ButtonGroup spacing="2" className="flex justify-center">
                  <Button
                    variant="solid"
                    colorScheme="cyan"
                    textColor={"white"}
                    onClick={() => navigate(`/pizza/${pizza?.id}`)}
                  >
                    &#128064; Ver Más
                  </Button>
                  <Button
                    variant="solid"
                    leftIcon={<GrCart />}
                    colorScheme="red"
                    onClick={() => {
                      handleAddToCart(pizza?.id);
                      toast({
                        title: "Pizza Agregada",
                        description: `Se agregó pizza ${capitalizeString(
                          pizza?.name
                        )}`,
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      });
                    }}
                  >
                    Añadir
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </>
  );
};

export default PizzaCardRow;
