const boom = require('@hapi/boom');
const info = require('../info')

class SportsServices {

  constructor(){
    this.sportsArray = info[0].sports
    this.generate();
  }

  async generate(size) {
    const limit = size || this.sportsArray.length;

    const filter = [];
    this.sportsArray.forEach((item) => {
      if (filter.length < parseInt(limit)) {
        filter.push(item)
      }
    })
    return filter;
  }

  async create(body){
    if(!body){
      throw boom.notFound('There are not element to send')
    }
    this.sportsArray.push(body)
    return {
      body
    }
  }

  async findOne(id){
    const find = this.sportsArray.find(item => item.id == id);
    if(!find){
      throw boom.notFound('Element not found')
    }else{
      return find
    }
  }

  async update(id, changes){
    const index = this.sportsArray.findIndex(item => item.id == id);

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.sportsArray[index] = {
        ...this.sportsArray[index],
        ...changes
      }
      return this.sportsArray[index]
    }
  }

  async delete(id){
    const index = this.sportsArray.findIndex(item => item.id == id);
    const elementDelete = this.sportsArray[index];

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.sportsArray.splice(index, 1);
      return elementDelete
    }
  }
}

module.exports = SportsServices;
