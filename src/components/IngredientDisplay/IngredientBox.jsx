
const IngredientBox = ( props ) => {
    const {ingredient} = props;

    // Capitalise ingredient name
    const IngredientName = ingredient.name[0].toUpperCase()+ingredient.name.slice(1);

    // Pass ingredient back to parent when this ingredient is selected
    const _handleClick = () => {
        props.onClick(ingredient);
    };

  return (
    <div onClick={ _handleClick } className="inline-block ingredient-box display-ingredient">
        <img src={ingredient.image} alt={IngredientName} />
        <p>{IngredientName}</p>
    </div>
  );
};

export default IngredientBox