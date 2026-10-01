import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { CreateCaseDto } from './dto/create-case.dto.js';
import { CaseRepository } from './case.repository.js';

@Injectable()
export class CaseService {
    constructor(
        private readonly caseRepository: CaseRepository,
    ) {}

    async createCase(
        payload: CreateCaseDto,
    ) {
        const learner =
            await this.caseRepository.findLearnerById(
                payload.learnerId,
            );

        if (!learner) {
            throw new NotFoundException(
                'Learner not found',
            );
        }

        return this.caseRepository.create({
            learnerId: payload.learnerId,
            caseType: payload.caseType,
            status: 'OPEN',
        });
    }
}