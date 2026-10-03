import { Injectable } from '@nestjs/common';

import { ModelService } from '@app/model';
import {
    NotificationTemplate,
    Prisma,
} from '@app/model/generated/prisma/client.js';

@Injectable()
export class TemplatesRepository {
    constructor(private readonly prisma: ModelService) {}

    findById(id: number): Promise<NotificationTemplate | null> {
        return this.prisma.notificationTemplate.findUnique({
            where: { id },
        });
    }

    update(id: number,data: Prisma.NotificationTemplateUpdateInput): Promise<NotificationTemplate> {
        return this.prisma.notificationTemplate.update({
            where: { id },
            data,
        });
    }
}