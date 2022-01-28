import { useEffect } from "react";
import { fetchProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const useProducts = () => {
  const products = useSelector((state) => state.products) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchProducts());
  }, []);
  return { products };
};
