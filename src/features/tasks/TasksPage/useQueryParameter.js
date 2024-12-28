import { useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    return query;
};