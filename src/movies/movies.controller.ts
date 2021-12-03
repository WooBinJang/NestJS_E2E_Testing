import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';
import { Movie } from '../entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('/')
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Get('search')
  search(@Query('year') year: string) {
    // year = 2000
    return `Seaching for a movie made after : ${year}`;
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.moviesService.delete(id);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return {
      updateData: id,
      ...updateData,
    };
  }
}
