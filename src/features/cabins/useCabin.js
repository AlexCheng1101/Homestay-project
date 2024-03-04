import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCabin } from "../../services/apiCabins";

export function useCabin() {
  const { cabinId } = useParams();
  const {
    isLoading,
    data: cabin,
    error,
  } = useQuery({
    queryKey: ["cabin", cabinId],
    queryFn: () => getCabin(cabinId),
    retry: false,
  });
  return { isLoading, cabin, error };
}
