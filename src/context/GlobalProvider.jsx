import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  //State for fetched Data
  const [data, setData] = useState([]);
  //State for pizza object
  const [pizzaData, setPizzaData] = useState();
  // State for cart items
  const [cartList, setCartList] = useState([]);
  // State for total amount to pay
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetch("/pizzas.json", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          //Custom message for failed HTTP codes
          if (response.status === 404) throw new Error("404, not Found");
          if (response.status === 500)
            throw new Error("500, internal server error");
          if (!response.ok) throw new Error(response.status);
        }
      })
      .then((pizzaData) => {
        setData(pizzaData);
      })
      .catch((error) => console.log(`There is an issue: ${error.message}`));
  }, []);

  function increaseQuantity(item) {
    const cartListCopy = [...cartList];
    cartListCopy.map((obj) =>
      obj.id === item.id ? { ...item, quantity: ++obj.quantity } : item
    );
    setCartList(cartListCopy);
  }

  function decreaseQuantity(item) {
    const cartListCopy = [...cartList];
    cartListCopy.map((obj) => {
      return obj.id === item.id
        ? {
            ...item,
            quantity: obj.quantity <= 1 ? obj.quantity : --obj.quantity,
          }
        : item;
    });
    setCartList(cartListCopy);
  }
  function handleAddToCart(objId) {
    const pizzas = [...data];
    const pizzaObj = pizzas
      .map((item) => {
        return { ...item, quantity: 1 };
      })
      .reduce((acc, item) => {
        if (objId === item?.id) acc = item;
        return acc;
      }, {});
    const hasId = cartList.some((item) => item.id === objId);
    if (!hasId) {
      setCartList((prevCartList) => [...prevCartList, pizzaObj]);
    } else {
      increaseQuantity(pizzaObj);
    }
  }
  function addUpPrices() {
    const cartListCopy = [...cartList];
    const amount = cartListCopy.reduce((totalAmount, item) => {
      totalAmount += item.price * item.quantity;
      return totalAmount;
    }, 0);
    setTotal(amount);
  }

  function deleteProduct(item) {
    const cartListCopy = [...cartList];
    const chosenProduct = cartListCopy.filter((obj) => obj.id !== item.id);
    setCartList(chosenProduct);
  }

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        pizzaData,
        setPizzaData,
        cartList,
        setCartList,
        total,
        setTotal,
        handleAddToCart,
        addUpPrices,
        increaseQuantity,
        decreaseQuantity,
        deleteProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
