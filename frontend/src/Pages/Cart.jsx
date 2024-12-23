import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
  // console.log(cartItems);

  const removeItem = (product) => {
    const updatedCart = cartItems.filter((item) => {
      if (item.book.data._id !== product.book.data._id) {
        return true;
      }
    });
    setCartItems(updatedCart);
  };

  return cartItems.length > 0 ? (
    <>
      <div className="flex mt-20 h-full flex-col m-5 justify-center items-center">
        <h1 className="text-center mt-20 text-xl">
          Your Cart: {cartItems.length} Item{cartItems.length !== 1 && "s"}
        </h1>
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mt-8">
            <div className="flow-root">
              {cartItems.length > 0 ? (
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <li key={product?._id} className="flex py-6">
                      <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt=""
                          src={product.book.data.imageURL}
                          className="h-full w-full"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to="/">{product?.book.data.bookTitle}</Link>
                            </h3>
                            <p className="sm:ml-4">$15.00</p>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                          <p className="text-gray-500">
                            <strong>Qty:</strong> 1
                          </p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => removeItem(product)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No Product Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h2 className="text-center my-28">Your Cart Is Empty</h2>
  );
};

export default Cart;
