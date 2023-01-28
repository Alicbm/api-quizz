const boom = require('@hapi/boom');
const info = require('../info')

class GeneralCultureServices {

  constructor(){
    this.generalCultureArray = info[0].generalCulture
    this.generate();
  }

  async generate(size) {
    const limit = size || this.generalCultureArray.length;

    const filter = [];
    this.generalCultureArray.forEach((item) => {
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
    this.generalCultureArray.push(body)
    return {
      body
    }
  }

  async findOne(id){
    const find = this.generalCultureArray.find(item => item.id == id);
    if(!find){
      throw boom.notFound('Element not found')
    }else{
      return find
    }
  }

  async update(id, changes){
    const index = this.generalCultureArray.findIndex(item => item.id == id);

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.generalCultureArray[index] = {
        ...this.generalCultureArray[index],
        ...changes
      }
      return this.generalCultureArray[index]
    }
  }

  async delete(id){
    const index = this.generalCultureArray.findIndex(item => item.id == id);
    const elementDelete = this.generalCultureArray[index];

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.generalCultureArray.splice(index, 1);
      return elementDelete
    }
  }
}

module.exports = GeneralCultureServices;

