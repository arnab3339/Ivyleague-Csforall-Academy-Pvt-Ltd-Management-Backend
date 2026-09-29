import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';

import {AccessRole,Roles} from '@app/rbac';

import {UpdateTicketDto,updateTicketSchema} from './dto/update-ticket.dto.js';

import { TicketService } from './ticket.service.js';

@Controller('tickets')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
  ) {}

  @Patch(':id')
  @Roles(AccessRole.PSA)
  async updateTicket(
    @Param('id', ParseIntPipe) id: number,
    @Body({ schema: updateTicketSchema })
    payload: UpdateTicketDto,
  ) {
    return this.ticketService.updateTicket(
      id,
      payload,
    );
  }
}