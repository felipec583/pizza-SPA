import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { useParams } from "react-router-dom";
import { capitalizeString } from "../utils/utils";
import { useToast } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
const Pizza = () => {
  const toast = useToast();
  const {
    data,
    pizzaData,
    setPizzaData,
    handleAddToCart,
    addUpPrices,
    total,
    cartList,
  } = useContext(GlobalContext);
  const { id } = useParams();
  useEffect(() => {
    const pizzaArr = [...data];
    const pizzaItem = pizzaArr.find((pizza) => pizza.id == id);
    setPizzaData(pizzaItem);
    addUpPrices();
  }, [total, pizzaData, cartList]);
  return (
    <>
      <section className="pizza-card">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          h={"500px"}
          w={"auto"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
            h={"500px"}
            src={pizzaData?.img}
            alt="pizza"
          />

          <Stack>
            <CardBody>
              <Heading size="md" margin={"20px 0"}>
                {pizzaData && capitalizeString(pizzaData?.name)}
              </Heading>
              <Divider
                borderColor={"black"}
                borderStyle={"solid"}
                borderBlock={"1"}
              />
              <Text py="2" maxWidth={"600"}>
                {pizzaData?.desc}
              </Text>
              <h2 className="my-2 font-bold">Ingredients:</h2>

              <ul className="list-image-[url(/pizza2.png)] flex flex-col items-start flex-1  ingredient-list">
                {pizzaData?.ingredients.map((ingredient) => {
                  return (
                    <li className="ingredient-item" key={ingredient}>
                      {capitalizeString(ingredient)}
                    </li>
                  );
                })}
              </ul>
            </CardBody>

            <CardFooter>
              <Flex width={"100%"}>
                <p className="font-bold text-2xl">
                  Precio:{" "}
                  {pizzaData?.price.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </p>
                <Spacer />
                <Button
                  variant="solid"
                  colorScheme="red"
                  leftIcon={<GrCart />}
                  onClick={() => {
                    handleAddToCart(pizzaData?.id);
                    toast({
                      title: "Pizza Agregada",
                      description: `Se agregó pizza ${capitalizeString(
                        pizzaData?.name
                      )}`,
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Añadir
                </Button>
              </Flex>
            </CardFooter>
          </Stack>
        </Card>
      </section>
    </>
  );
};

export default Pizza;
