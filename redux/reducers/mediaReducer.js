
const initialState = {
    albumName: null,
    selectedAssets: []
};


const addAsset = (asset, state) => {

    return [...state.selectedAssets, asset];

}

const removeAsset = (removedAsset, state) => {
    return state.selectedAssets.filter(asset => asset.uri !== removedAsset.uri);
}

export default mediaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ASSET':
            return {
                ...state,
                selectedAssets: addAsset(action.payload, state),
            };

        case 'REMOVE_ASSET':
            return {
                ...state,
                selectedAssets: removeAsset(action.payload, state)
            };

        case 'EMPTY':
            return initialState;

        case 'SET_ALBUM_NAME':
            return {
                ...state,
                albumName: action.payload
            };

        default:
            return state;
    }
}
