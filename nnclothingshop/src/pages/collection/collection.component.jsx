import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss"

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  console.log(collections);
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
