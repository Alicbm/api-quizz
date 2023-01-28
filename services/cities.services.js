const boom = require('@hapi/boom');
const info = require('../info')

class CitiesServices {

  constructor(){
    this.citiesArray = info[0].cities
    this.generate();
  }

  async generate(size) {
    const limit = size || this.citiesArray.length;

    const filter = [];
    this.citiesArray.forEach((item) => {
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
    this.citiesArray.push(body)
    return {
      body
    }
  }

  async findOne(id){
    const find = this.citiesArray.find(item => item.id == id);
    if(!find){
      throw boom.notFound('Element not found')
    }else{
      return find
    }
  }

  async update(id, changes){
    const index = this.citiesArray.findIndex(item => item.id == id);

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.citiesArray[index] = {
        ...this.citiesArray[index],
        ...changes
      }
      return this.citiesArray[index]
    }
  }

  async delete(id){
    const index = this.citiesArray.findIndex(item => item.id == id);
    const elementDelete = this.citiesArray[index];

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.citiesArray.splice(index, 1);
      return elementDelete
    }
  }
}

module.exports = CitiesServices;

