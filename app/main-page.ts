import { EventData, Page } from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';
import { ActionItem } from '@nativescript/core';
import { Component } from '@angular/core';
import { EdamamService } from './edamam.service';

@Component({
  selector: 'app-recipe-list',
  template: `
    <!-- Your template code here -->
  `,
})
export class RecipeListComponent {
  recipes: any[]; // Type this based on the actual response structure

  constructor(private edamamService: EdamamService) {}

  async searchRecipes(query: string) {
    try {
      this.recipes = await this.edamamService.searchRecipes(query);
    } catch (error) {
      // Handle error
    }
  }
}

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;

  page.bindingContext = new HelloWorldModel();
}
