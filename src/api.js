/**
 * Working with DB
 */
export default {
  sendMessage(){
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve();
      }, 600)
    });
  }
}
