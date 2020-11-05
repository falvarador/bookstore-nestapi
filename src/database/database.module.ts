import { Module } from '@nestjs/common';
import { DATABASE_PROVIDER } from './database.service';

@Module({
    imports: [
        ...DATABASE_PROVIDER,
    ],
    exports: [
        ...DATABASE_PROVIDER,
    ]
})
export class DatabaseModule {

}
