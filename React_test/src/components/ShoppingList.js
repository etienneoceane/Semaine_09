import React from 'react'
import {plantList} from '../datas/plantList'
import PlantItem from './PlantItem'


function ShoppingList() {
    const categories = plantList.reduce((acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []) 
//  dans une variable categories, on est vient y stoker, la variable plantList a laquelle on a appliqué la fonction reduce qui contient 2 parametres ( acc et plant), 
// On lui dit que acc prend la valeur de 'acc.includes(plant.category)' -> il vas chercher toutes les catégory de plant et il vas synthétisé s'il y'a
// 4 fois la même catégories il vas la regrouper en une seule. (?) S'il trouve une categorie, il renvoit le resultat  (:)sinon ....
return (
    <div className="container">

            <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>

        <ul className="lmj-plant-list">
                {plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem key={id}
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
            ))}
        </ul>

    </div>
    )
}

export default ShoppingList