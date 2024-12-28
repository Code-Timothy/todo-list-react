import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../useQueryParameter";
import { useReplaceQueryParameter } from "../useReplaceQueryParameter";
import Input from "../../../../common/Input";
import { Wrapper } from "./styled";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

export default Search;