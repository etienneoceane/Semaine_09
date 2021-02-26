import React from 'react'

function Cart() {
    const monstera = 8;
    const lierre = 10;
    const bouquet = 15;
    
    return (
        <div className='lmj-cart'>
            <p>Votre panier</p>
                <ul>
                    <li>Monstera : {monstera} €</li>
                    <li>Lierre : {lierre} €</li>
                    <li>Bouquet de fleurs {bouquet} €</li>
                </ul>
                Total du panier : {monstera+lierre+bouquet} €
                
        </div>
    )
}

export default Cart

