import React, { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const MenuItem = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card>
      <CardContent>
        {/* <Typography variant="h5" component="h2" className="font-aronesans">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Price: ${item.price}
        </Typography> */}
        <h2 className="font-aronesans font-bold text-3xl">{item.name}</h2>
        <p className="font-truculenta font-bold">{item.description}</p>
        <p className="font-truculenta font-bold">Price: ${item.price}</p>
        {/* <div>
          <Button variant="contained" onClick={handleDecreaseQuantity}>
            -
          </Button>
          <Typography>{quantity}</Typography>
          <Button variant="contained" onClick={handleIncreaseQuantity}>
            +
          </Button>
        </div> */}
        {/* <Button
          variant="contained"
          onClick={() => onAddToCart({ ...item})}
          className="font-aronesans"
        >
          Add to Cart
        </Button> */}
      <button className="bg-yellow-500 font-bold font-aronesans py-2 px-1 rounded-md my-1 hover:scale-105 active:translate-y-1 text-center" onClick={() => onAddToCart({ ...item, quantity })}>
        Add to Cart
      </button>
      </CardContent>
    </Card>
  );
};

export default MenuItem;


// import React, { useState } from "react";

// const MenuItem = ({ item, onAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleIncreaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div>
//       <h2>{item.name}</h2>
//       <p>{item.description}</p>
//       <p>Price: ${item.price}</p>
//       {/* <div>
//         <button onClick={handleDecreaseQuantity}>-</button>
//         <span>{quantity}</span>
//         <button onClick={handleIncreaseQuantity}>+</button>
//       </div> */}
      // <button onClick={() => onAddToCart({ ...item, quantity })}>
      //   Add to Cart
      // </button>
//     </div>
//   );
// };

// export default MenuItem;
