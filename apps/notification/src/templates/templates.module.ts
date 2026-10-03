import { Module } from '@nestjs/common';

import { ModelModule } from '@app/model';

import { TemplatesController } from './templates.controller.js';
import { TemplatesRepository } from './templates.repository.js';
import { TemplatesService } from './templates.service.js';

@Module({
    imports: [ModelModule],
    controllers: [TemplatesController],
    providers: [
        TemplatesService,
        TemplatesRepository,
    ],
})
export class TemplatesModule {}