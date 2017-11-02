/**
 * Mocking client-server processing
 */
const _products = [
    {id:'1',name:"苹果",price:"3",shengyu:10},
    {id:'2',name:"梨子",price:"4",shengyu:15},
    {id:'3',name:"香蕉",price:"5",shengyu:40},
]
  
export default {
    getProducts () {
        return new Promise(function(resolve, reject){
            resolve(_products);
        })
    }
}
  