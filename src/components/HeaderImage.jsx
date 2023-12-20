const HeaderImage = () => {
  return (
    <div className="bg-[url('/header-img.jpg')] h-72 w-full bg-cover bg-center text-white  opacity-95  ">
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
        <div className="text-white text-4xl w-1/2 text-center">
          <h1 className="text-4xl font-bold">!Pizzería Mamma Mia!</h1>
          <p className="text-2xl">
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </p>
          <hr className="opacity-50 my-4" />
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
