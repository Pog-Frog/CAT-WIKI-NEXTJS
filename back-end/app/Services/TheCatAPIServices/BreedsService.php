<?php


namespace App\Services\TheCatAPIServices;

use App\Contracts\TheCatAPIServiceContract;

class BreedsService
{
    protected $theCatAPIService;

    public function __construct(TheCatAPIServiceContract $theCatAPIService)
    {
        $this->theCatAPIService = $theCatAPIService;
    }

    public function searchCatBreeds(string $query): array
    {
        return $this->theCatAPIService->searchCatBreeds($query);
    }

    public function getAllCatBreeds(): array
    {
        return $this->theCatAPIService->getAllCatBreeds();
    }

    public function getSingleBreed(string $id): array
    {
        return $this->theCatAPIService->getSingleBreed($id);
    }
}