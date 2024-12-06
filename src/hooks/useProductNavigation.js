import { useNavigate } from "react-router";

export const useProductNavigation = () => {
  const navigate = useNavigate();

  return (page, productId) => {
    if (productId) {
      navigate(`/${page}/${productId}`);
    }
  };
};
