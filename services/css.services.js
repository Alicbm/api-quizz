const boom = require('@hapi/boom');
const info = require('../info')

class CssServices {

  constructor(){
    this.cssArray = info[0].css
    this.generate();
  }

  async generate(size) {
    const limit = size || this.cssArray.length;

    const filter = [];
    this.cssArray.forEach((item) => {
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
    this.cssArray.push(body)
    return {
      body
    }
  }

  async findOne(id){
    const find = this.cssArray.find(item => item.id == id);
    if(!find){
      throw boom.notFound('Element not found')
    }else{
      return find
    }
  }

  async update(id, changes){
    const index = this.cssArray.findIndex(item => item.id == id);

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.cssArray[index] = {
        ...this.cssArray[index],
        ...changes
      }
      return this.cssArray[index]
    }
  }

  async delete(id){
    const index = this.cssArray.findIndex(item => item.id == id);
    const elementDelete = this.cssArray[index];

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.cssArray.splice(index, 1);
      return elementDelete
    }
  }
}

module.exports = CssServices;
