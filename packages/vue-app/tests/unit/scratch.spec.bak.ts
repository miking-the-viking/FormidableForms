import { transformAndValidate, transformAndValidateSync } from 'class-transformer-validator';
import {
    ValidateNested, IsNumber, validate,
} from 'class-validator';
import { Type, plainToClass } from 'class-transformer';
import 'reflect-metadata';
export class Person {
    public name!: string;
}

// tslint:disable:max-classes-per-file
export abstract class Photo {
    public id!: number;
    public filename!: string;
}

export class Landscape extends Photo {
    public panorama!: boolean;
}

export class Portrait extends Photo {
    public person!: Person;
}

export class UnderWater extends Photo {
    @IsNumber()
    public depth!: number;
}

export class Album {

    public id!: number;
    public name!: string;

    @ValidateNested({
        each: true
    })
    @Type(() => Photo, {
        discriminator: {
            property: 'fieldType',
            subTypes: [
                { value: Landscape, name: 'landscape' },
                { value: Portrait, name: 'portrait' },
                { value: UnderWater, name: 'underwater' }
            ]
        }
    })
    public topPhoto!: Landscape | Portrait | UnderWater;

    @ValidateNested({
        each: true
    })
    @Type(() => Photo, {
        discriminator: {
            property: 'fieldType',
            subTypes: [
                { value: Landscape, name: 'landscape' },
                { value: Portrait, name: 'portrait' },
                { value: UnderWater, name: 'underwater' }
            ]
        }
    })
    public photos!: Array<Landscape | Portrait | UnderWater>;

}




const albumJson = {
    id: 1,
    name: 'some album',
    topPhoto: {
        id: 123,
        filename: 'test',
        panorama: true
    },
    photos: [
        {
            id: 123,
            filename: 'test',
            panorama: true,
            type: 'landscape'
        },
        {
            id: 123,
            filename: 'test',
            depth: 'shit',
            type: 'underwater'
        }
    ]
};

const album = plainToClass(Album, albumJson);

// tslint:disable:no-unused-expression
album;

const validated = validate(album)
    .then((v) => {
        v;
    });

validated;

try {
    const res = transformAndValidateSync(Album, album);
    res;
} catch (e) {
    e;
}
