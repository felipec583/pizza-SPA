import { Button, Divider } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { capitalizeString } from "../utils/utils";
import { numberFormat } from "../utils/utils";

const Cart = () => {
  const {
    cartList,
    total,
    increaseQuantity,
    decreaseQuantity,
    addUpPrices,
    deleteProduct,
  } = useContext(GlobalContext);
  useEffect(() => {
    addUpPrices();
  }, [cartList]);

  return (
    <>
      <section className="cart-container h-screen flex items-center justify-center ">
        <div className="cart outline bg-slate-100 p-10 w-full">
          <h1 className="font-bold text-2xl ">Detalles del pedido:</h1>
          <div className="bg-white">
            {/* Item */}
            {cartList.length > 0 &&
              cartList.map((item) => {
                return (
                  <div
                    className="items-cont bg-white my-3 flex items-center flex-wrap"
                    key={item?.id}
                  >
                    <img src={item?.img} alt="" className="w-16" />
                    <h2 className="font-bold text-2xl">
                      {capitalizeString(item?.name)}
                    </h2>
                    <div className="flex ml-auto mr-3 gap-3 items-center">
                      <p className="font-bold text-2xl">{item?.price}</p>

                      <Button
                        colorScheme="red"
                        fontSize={"30"}
                        className="cart-btn"
                        onClick={() => decreaseQuantity(item)}
                      >
                        -
                      </Button>
                      <p className="font-bold text-2xl">{item?.quantity}</p>
                      <Button
                        colorScheme="blue"
                        fontSize={"30"}
                        className="cart-btn"
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </Button>

                      <button onClick={() => deleteProduct(item)}>
                        <FaTrashAlt
                          size={35}
                          color="red"
                          className="hover:fill-current hover:cyan"
                        />
                      </button>
                    </div>
                    <Divider
                      borderColor={"black"}
                      borderStyle={"solid"}
                      borderBlock={"1"}
                      flexBasis={"100%"}
                    />
                  </div>
                );
              })}

            <div className="bg-white">
              <p className="text-4xl font-bold my-3">
                Total: {numberFormat.format(total)}
              </p>
              <Button colorScheme="green">Ir a pagar</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
