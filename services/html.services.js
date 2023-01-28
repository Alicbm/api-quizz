const boom = require('@hapi/boom');
const info = require('../info')

class HtmlServices {

  constructor(){
    this.htmlArray = info[0].html
    this.generate();
  }

  async generate(size) {
    const limit = size || this.htmlArray.length;

    const filter = [];
    this.htmlArray.forEach((item) => {
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
    this.htmlArray.push(body)
    return {
      body
    }
  }

  async findOne(id){
    const find = this.htmlArray.find(item => item.id == id);
    if(!find){
      throw boom.notFound('Element not found')
    }else{
      return find
    }
  }

  async update(id, changes){
    const index = this.htmlArray.findIndex(item => item.id == id);

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.htmlArray[index] = {
        ...this.htmlArray[index],
        ...changes
      }
      return this.htmlArray[index]
    }
  }

  async delete(id){
    const index = this.htmlArray.findIndex(item => item.id == id);
    const elementDelete = this.htmlArray[index];

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.htmlArray.splice(index, 1);
      return elementDelete
    }
  }
}

module.exports = HtmlServices;
