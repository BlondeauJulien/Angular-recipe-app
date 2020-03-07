import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  providers: [
    ShoppingListService,// Shoping and recipe are here for demo purposes but def better to use injectable providedin root 
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
     // Only declaration need to be exported, services doesn't need to, they are automatically injected at a root level
  // Just need to be imported in our app module
  // Creating a a Core module is optional and only required if we provide a service in app module instead of using injectable providedin root (recommanded method wheneve possible)
  ]
})
export class CoreModule {}