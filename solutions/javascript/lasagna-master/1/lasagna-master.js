/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer){
  if (timer === 0){
    return 'Lasagna is done.'
  } else if (timer === undefined){
    return 'You forgot to set the timer.'
  } else {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, prepTimePerLayer=2){
  return layers.length * prepTimePerLayer
}

// For each noodle layer in your lasagna, you will need 50 grams of noodles. 
// For each sauce layer in your lasagna, you will need 0.2 liters of sauce.
export function quantities(layers){
  let result = {'noodles': 0, 'sauce': 0};
  for (let i = 0; i < layers.length; i++){
    if (layers[i] === 'noodles'){
      result['noodles'] += 50;
    } else if (layers[i] === 'sauce'){
      result['sauce'] += 0.2;
    } 
  }
  return result
}

// The function should add the last item from your friend's list to the end of your list.
export function addSecretIngredient(friendsList, myList){
  const addedItem = friendsList.at(-1);
  myList.push(addedItem);
  return
}

// export function scaleRecipe(recipe, scale) {
//   let result = { ...recipe };
//   for (let i in result) {
//     result[i] *= scale
//   }
//   return result;
// }


export function scaleRecipe(recipe, portions) {
  const scale = portions / 2;
  let result = { ...recipe };
  for (let i in result) {
    result[i] *= scale;
  }
  return result;
}

