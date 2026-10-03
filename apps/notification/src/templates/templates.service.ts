import { Injectable, NotFoundException } from '@nestjs/common';

import { TemplatesRepository } from './templates.repository.js';
import { UpdateTemplateDto } from './dto/update-template.dto.js';

@Injectable()
export class TemplatesService {
    constructor(
        private readonly templatesRepository: TemplatesRepository,
    ) {}

    async updateTemplate(id: number,payload: UpdateTemplateDto) {
        const template = await this.templatesRepository.findById(id);

        if (!template) {
            throw new NotFoundException('Notification template not found');
        }

        return this.templatesRepository.update(id, payload);
    }
}