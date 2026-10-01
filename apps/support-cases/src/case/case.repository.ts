import { Injectable } from '@nestjs/common';

import { ModelService } from '@app/model';
import {
    EscalationCase,
    Prisma,
} from '@app/model/generated/prisma/client.js';

@Injectable()
export class CaseRepository {
    constructor(
        private readonly prisma: ModelService,
    ) {}

    async findLearnerById(learnerId: number) {
        return this.prisma.learnerLifecycle.findUnique({
            where: {
                id: learnerId,
            },
        });
    }

    async create(
        data: Prisma.EscalationCaseUncheckedCreateInput,
    ): Promise<EscalationCase> {
        return this.prisma.escalationCase.create({
            data,
        });
    }
}