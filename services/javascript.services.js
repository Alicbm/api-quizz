const boom = require('@hapi/boom');
const info = require('../info')

class JavascriptServices {

  constructor(){
    this.javascriptArray = info[0].javascript
    this.generate();
  }

  async generate(size) {
    const limit = size || this.javascriptArray.length;

    const filter = [];
    this.javascriptArray.forEach((item) => {
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
    this.javascriptArray.push(body)
    return {
      body
    }
  }

  async findOne(id){
    const find = this.javascriptArray.find(item => item.id == id);
    if(!find){
      throw boom.notFound('Element not found')
    }else{
      return find
    }
  }

  async update(id, changes){
    const index = this.javascriptArray.findIndex(item => item.id == id);

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.javascriptArray[index] = {
        ...this.javascriptArray[index],
        ...changes
      }
      return this.javascriptArray[index]
    }
  }

  async delete(id){
    const index = this.javascriptArray.findIndex(item => item.id == id);
    const elementDelete = this.javascriptArray[index];

    if(index === -1){
      throw boom.notFound('Element not found')
    }else{
      this.javascriptArray.splice(index, 1);
      return elementDelete
    }
  }
}

module.exports = JavascriptServices;
