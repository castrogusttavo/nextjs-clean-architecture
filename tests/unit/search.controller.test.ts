import { vi } from 'vitest';
import { container } from '@/di/container';
import { searchController } from '@/src/interface-adapters/controllers/search.controller';

describe('searchController', () => {
  it('deve executar caso de uso do container', async () => {
    const mockUseCase = { execute: vi.fn().mockResolvedValue(['ok']) };
    container.set('searchReposUseCase', mockUseCase);

    const result = await searchController('query');
    expect(mockUseCase.execute).toHaveBeenCalledWith('query');
    expect(result).toEqual(['ok']);
  });
});
