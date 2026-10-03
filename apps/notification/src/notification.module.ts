import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { RbacModule, RolesGuard } from '@app/rbac';

import { TemplatesModule } from './templates/templates.module.js';

@Module({
    imports: [
        RbacModule.register(),
        TemplatesModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useExisting: RolesGuard,
        },
    ],
})
export class NotificationModule {}