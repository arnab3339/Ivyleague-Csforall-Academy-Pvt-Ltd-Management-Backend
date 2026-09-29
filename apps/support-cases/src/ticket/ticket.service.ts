import {Injectable,NotFoundException,} from '@nestjs/common';

import { UpdateTicketDto } from './dto/update-ticket.dto.js';
import { TicketRepository } from './ticket.repository.js';

@Injectable()
export class TicketService {
  constructor(
    private readonly ticketRepository: TicketRepository,
  ) {}

  async updateTicket(ticketId: number,payload: UpdateTicketDto) {
    const ticket =
      await this.ticketRepository.findById(ticketId);

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    return this.ticketRepository.update(ticketId, {
      ...(payload.status !== undefined && {
        status: payload.status,
      }),
      ...(payload.resolution !== undefined && {
        resolution: payload.resolution,
      }),
    });
  }
}