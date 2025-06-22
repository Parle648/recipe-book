import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  findAll(
    @Query('ingredient') ingredient: string,
    @Query('country') country: string,
    @Query('category') category: string,
  ) {
    return this.recipesService.findAll(ingredient, country, category);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(+id);
  }
}
