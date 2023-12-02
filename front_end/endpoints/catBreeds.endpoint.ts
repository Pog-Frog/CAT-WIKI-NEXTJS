import { BACK_END_DOMAIN } from "@/config";

export const GET_ALL_CAT_BREEDS = `${BACK_END_DOMAIN}/cats`;

export const GET_POPULAR_CAT_BREEDS = `${BACK_END_DOMAIN}/cats/top`;

export const GET_CAT_BREED_BY_ID = `${BACK_END_DOMAIN}/cats/id/`;

export const INC_CAT_BREED_RANK = `${BACK_END_DOMAIN}/cats/rank?name=`;