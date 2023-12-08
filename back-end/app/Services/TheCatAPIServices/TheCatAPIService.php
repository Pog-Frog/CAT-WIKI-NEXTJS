<?php

namespace App\Services\TheCatAPIServices;

use GuzzleHttp\Client;
use App\Contracts\TheCatAPIServiceContract;

class TheCatAPIService implements TheCatAPIServiceContract
{
    protected $client;
    protected $apiUrl;
    protected $apiKey;
    public $error;

    public function __construct(string $apiKey, string $apiUrl)
    {
        $this->apiKey = $apiKey;
        $this->apiUrl = $apiUrl;
        $this->init();
    }

    protected function init()
    {
        $this->client = new Client([
            'base_uri' => $this->apiUrl,
            'headers' => [
                'x-api-key' => $this->apiKey,
            ],
        ]);
    }

    public function searchCatBreeds(string $query): array
    {
        $endpoint = "/v1/breeds/search";
        $response = [];

        try {
            $response = $this->client->get($endpoint, [
                'query' => [
                    'q' => $query,
                ],
            ]);

            $response = [
                'data' => json_decode($response->getBody(), true),
            ];
        } catch (\Exception $e) {
            $this->error = true;
            $response = [
                'errorCode' => $e->getCode(),
                'message' => $e->getMessage(),
            ];
        }

        return $response;
    }

    public function getAllCatBreeds(): array
    {
        $endpoint = "/v1/breeds";
        $response = [];

        try {
            $response = $this->client->get($endpoint, [
                'query' => [
                    'limit' => 100,
                ],
            ]);

            $response = [
                'data' => json_decode($response->getBody(), true),
            ];
        } catch (\Exception $e) {
            $this->error = true;
            $response = [
                'errorCode' => $e->getCode(),
                'message' => $e->getMessage(),
            ];
        }

        return $response;
    }

    public function getSingleBreed(string $id): array
    {
        $endpoint = "/v1/breeds/{$id}";
        $response = [];

        try {
            $response = $this->client->get($endpoint);

            $response = [
                'data' => json_decode($response->getBody(), true),
            ];
        } catch (\Exception $e) {
            $this->error = true;
            $response = [
                'errorCode' => $e->getCode(),
                'message' => $e->getMessage(),
            ];
        }

        return $response;
    }
}