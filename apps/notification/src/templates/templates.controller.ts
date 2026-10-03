import {
    Body,
    Controller,
    Param,
    Patch,
} from '@nestjs/common';

import { AccessRole, Roles } from '@app/rbac';

import { updateTemplateSchema } from './dto/update-template.dto.js';
import type { UpdateTemplateDto } from './dto/update-template.dto.js';

import { TemplatesService } from './templates.service.js';

@Controller('templates')
export class TemplatesController {
    constructor(
        private readonly templatesService: TemplatesService,
    ) {}

    @Patch(':id')
    @Roles(AccessRole.ADMIN)
    update(
        @Param('id') id: string,
        @Body({ schema: updateTemplateSchema })
        payload: UpdateTemplateDto,
    ) {
        return this.templatesService.updateTemplate(
            Number(id),
            payload,
        );
    }
}