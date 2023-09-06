function greeting(name){
    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
      }

      for(let i in GUEST_LIST){
        if(name == i){
            return "Hi i'm " + name + ", i'm from " + GUEST_LIST[i] +'.'
        }
      }

      return "Hi i'm a guest !"
}
console.log(greeting);