import { Module } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmExModule } from './config/typeorm-ex.module';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([BoardRepository])
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
