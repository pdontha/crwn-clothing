import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
 const priceForStripe = price * 100;
 const publishableKey = 'pk_test_51H0iChEkzL9KJAeq9xpFtbZEQYSBPlyFONuFjRLdGXq0aM0bnfwEfkzsVRNa7SttCrfQeKPM8iKZrLdApbyNn7eR003P93IYIq';

 const onToken = token => {
     console.log(token);
     alert('Payment Successful');
 }

 return (
     <StripeCheckout
       label='Pay Now'
       name='CRWN Clothing Ltd.'
       billingAddress
       shippingAddress
       image=''
       description={`Your total is $${price}`}
       amount={priceForStripe}
       panelLabel='Pay Now'
       token={onToken}
       stripeKey={publishableKey}
     />
 );
};

export default StripeCheckoutButton;
