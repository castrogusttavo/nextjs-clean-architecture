import { container } from "@/di/container";
import type { Repository } from "@/src/domain/entities/repository";

export async function searchController(query: string): Promise<Repository[]> {
  const useCase = container.get("searchReposUseCase");
  return useCase.execute(query);
}
