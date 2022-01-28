import { useEffect } from "react";
import { fetchCategores } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const useCategories = () => {
  const categories = useSelector((state) => state.categories) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCategores());
  }, []);
  return { categories };
};
