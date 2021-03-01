import React from "react";
import ShoppingCartTable from "../../components/shopping-cart-table";
import { BookListContainer } from "../../containers";

const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
