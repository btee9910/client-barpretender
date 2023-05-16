import { useState, useEffect } from "react";
import axios from "axios";

// const SERVER_URL = 'http://localhost:3000/barpretender/cocktails';

const IngredientsList = ({cocktailData}) => {
    const ingredients = cocktailData ? cocktailData.ingredients_list : "";
    const ingredientsArray = ingredients? ingredients.split(",") : [];
    // const [lists, setLists] = useState([]);
    const ingredient = "Ingredients";
    // const fetchIngredients = () => {
    //     axios(SERVER_URL).then((response) => {
            // const ingredientsForCocktail = (response.data[0].ingredients_list);
    //         const arrOfIngredients = ingredientsForCocktail.split(",");
    //         // console.log(arrOfIngredients);
    //         setLists(arrOfIngredients);
    //     });

    // };


    // //prevent infinite communication to the server
    // useEffect(() => {
    //     fetchIngredients();
    // }, []);
    // // console.log("lists: ", lists);

    return (

        <div className="ingredients-container">
            <h2>{ingredient}</h2>
            <ul>
                { ingredientsArray.map((ingredient, index) => {
                    return <li key={index}>{ingredient.trim()}</li>
                })}
            </ul>
        </div>
    );
};

export default IngredientsList;