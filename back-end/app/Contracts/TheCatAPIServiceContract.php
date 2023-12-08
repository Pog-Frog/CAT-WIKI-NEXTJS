<?php

namespace App\Contracts;

interface TheCatAPIServiceContract
{
    public function searchCatBreeds(string $query): array;

    public function getAllCatBreeds(): array;
    
    public function getSingleBreed(string $id): array;
}