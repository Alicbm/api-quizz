const boom = require('@hapi/boom');
const info = require('../info')

class AnimalsServices {

  constructor(){
    this.animalArray = info[0].animals;
    this.generate();
  }

  async generate(size) {
    const limit = size || this.animalArray.length;

    const filter = [];
    this.animalArray.forEach((item) => {
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
    this.animalArray.push(body)
    return {
      body
    }
  }

  async findOne(id){
    const find = this.animalArray.find(item => item.id == id);
    if(!find){
      throw boom.notFound('Element not found')
    }else{
      return find
    }
  }

  async update(id, changes){
    const index = this.animalArray.findIndex(item => item.id == id);

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.animalArray[index] = {
        ...this.animalArray[index],
        ...changes
      }
      return this.animalArray[index]
    }
  }

  async delete(id){
    const index = this.animalArray.findIndex(item => item.id == id);
    const elementDelete = this.animalArray[index];

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.animalArray.splice(index, 1);
      return elementDelete
    }
  }
}

module.exports = AnimalsServices;
