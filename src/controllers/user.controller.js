const { Controller, Post, Body, Get, Put, Delete, Param, Dependencies } = require('@nestjs/common');
const { YumiService } = require('../yumi.service');
const trace = (x) => { console.log(x); return x }

@Controller('users')
@Dependencies(YumiService)
export class YumiUserController {

  constructor(yumiService) { this.yumiService = trace(yumiService) }

  @Get(':id')
  @Param()
  get(params) {
    return this.service.getUser(params.id);
  }

  @Post()
  @Body()
  activate(user) {
    return this.service.createUser(user);
  }

  @Put()
  @Body()
  update(user) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  @Param()
  deleteUser(params) {
    return this.service.deleteUser(params.id);
  }
}