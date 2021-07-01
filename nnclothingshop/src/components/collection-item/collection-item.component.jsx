import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { addItemToCart } from "../../redux/cart/cart.actions"
import { selectCurrentUser } from "../../redux/user/user.selector";

import CustomButton from '../custom-button/custom-button.component';
import "./collection-item.styles.scss"

const CollectionItem =({item , addItemToCart , history , currentUser }) =>{

    const { name , imageUrl, price} = item;
    return (
        <div className="collection-item">
            <div className="image"
            style={{ 
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="collection-footer"> 
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() =>  { currentUser ?
                (addItemToCart(item) ) : ( history.push("/signIn"))} 
            } inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItemToCart: item => dispatch(addItemToCart(item))
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CollectionItem));
