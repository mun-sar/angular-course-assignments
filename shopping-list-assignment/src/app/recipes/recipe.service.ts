import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Butter Chicken',
      'A super-tasty Butter Chicken - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Chicken_makhani.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Fresh Cream', 1)
      ]),
    new Recipe('Classic Chicken Caeser Salad',
      'The most delicious salad for you!',
      'https://upload.wikimedia.org/wikipedia/commons/0/02/Chicken_caeser_salad_%285959543492%29.jpg',
      [
        new Ingredient('Lettuce', 5),
        new Ingredient('Mayonnaise', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
