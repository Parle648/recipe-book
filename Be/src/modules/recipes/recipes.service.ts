import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import axios from 'axios';
import { Meal } from './models/interfaces';

@Injectable()
export class RecipesService {
  private logger = new Logger('RecipesLogger');

  async findAll(ingredient = '', country = '', category = '') {
    try {
      if (!ingredient && !country && !category) {
        const recipes = await axios.get<{ meals: Meal[] }>(
          'https://www.themealdb.com/api/json/v1/1/search.php?s=',
        );

        this.logger.log(`user get list of recipes`);

        return recipes.data;
      } else {
        const recipes = await axios.get<{ meals: Meal[] }>(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}&a=${country}&c=${category}`,
        );

        this.logger.log(`user get list of recipes with filters`);

        return recipes.data;
      }
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Something went wrong ');
    }
  }

  async findOne(id: number) {
    try {
      const recipe = await axios.get<{ meals: Meal[] }>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );

      this.logger.log(
        `user get recipe: ${JSON.stringify(recipe.data.meals[0])}`,
      );

      return recipe.data.meals[0];
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException("We can't find this recipe");
    }
  }
}
