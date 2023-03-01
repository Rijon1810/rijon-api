import { Injectable } from '@nestjs/common';
import { CreateRijonDto } from './dto/create-rijon.dto';
import { UpdateRijonDto } from './dto/update-rijon.dto';

@Injectable()
export class RijonsService {
    private rijons = [
        {
            id: 0, name: 'rijonA', weapon: 'stars'
        },
        {
            id: 1, name: 'rijonB', weapon: 'nunchucks'
        }
    ]

    getRijons(weapon?: 'stars' | 'nunchucks') {
        if (weapon) {
            return this.rijons.filter((rijon) => rijon.weapon === weapon);
        }
        return this.rijons;
    }

    getRijon(id: number) {
        const rijon = this.rijons.find((rijon) => rijon.id === id);
        if (!rijon) {
            throw new Error('Rijon not found');
        }
        return rijon;
    }


    createRijon(CreateRijonDto: CreateRijonDto) {

        const newRijon = {
            ...CreateRijonDto,
            id: Date.now()
        }

        this.rijons.push(newRijon);

        return newRijon;
    }

    updateRijon(id: number, updateRijonDto: UpdateRijonDto) {
        this.rijons = this.rijons.map((rijon) => {
            if (rijon.id === id) {
                return {
                    ...rijon, ...updateRijonDto
                };
            }
        });

        return this.getRijon(id);
    }


    removeRijon(id: number) {
        const toBeRemoved = this.getRijon(id);

        this.rijons = this.rijons.filter((rijon) => rijon.id !== id);

        return toBeRemoved;
    }
}
