import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/shared/api/client";

export const useEntities = () => useQuery({
  queryKey: ["entities"], queryFn: () => apiClient.get("/entities").then(res =>res.data),
});