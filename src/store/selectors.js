export const charactersSelect = (state) => state && state.characters;

export const moduleTitlesSelect = (state) => {
    return state && state.modules.map((item) => item.Title);
};