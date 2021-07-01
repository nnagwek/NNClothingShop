import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectCollectionsPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) => {
  console.log(" In selectcollection method in shop.selectors.js");
  return createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
});
