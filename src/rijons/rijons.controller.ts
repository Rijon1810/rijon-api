import { Controller, Get, Param, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateRijonDto } from './dto/create-rijon.dto';
import { UpdateRijonDto } from './dto/update-rijon.dto';
import { RijonsService } from './rijons.service';


@Controller('rijons')
export class RijonsController {

    constructor(private readonly rijonService: RijonsService) { }

    @Get()
    getRijon(@Query('weapon') weapon: 'stars' | 'nunchucks') {
        return this.rijonService.getRijons(weapon);
    }

    @Get(':id')
    getOneRijon(@Param('id') id: string) {
        return this.rijonService.getRijon(+id); // by adding + it turn into number
    }


    @Post()
    createRijon(@Body() CreateRijonDto: CreateRijonDto) {
        return this.rijonService.createRijon(CreateRijonDto);
    }


    @Put(':id')
    updateRijon(@Param('id') id: string, @Body() UpdateRijonDto: UpdateRijonDto) {
        return this.rijonService.updateRijon(+id, UpdateRijonDto);
    }


    @Delete(':id')
    removeRijon(@Param('id') id: string) {
        return this.rijonService.removeRijon(+id);
    }
}
