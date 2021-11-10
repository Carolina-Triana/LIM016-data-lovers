const func={
  formatData:function(list){
    let profiles=''
    list.forEach(function(element){
      profiles+= 
      `<div class="container">
      <div class="card">
      <div class="front">
      <img src=${element.image}></img>
      <h2>${element.name}</h2>
      </div>
      <div class="info">
      <ul>
      <p><b>Estado:</b> ${element.status}</p>
      <p><b>Especie:</b> ${element.species}</p>
      <p><b>Genero:</b> ${element.gender}</p>
      <p><b>Origen:</b> ${element.origin.name}</p>
      <p><b>Locacion:</b> ${element.location.name}</p>
      </ul>
      </div>
      </div>
      </div>`
    })
    return profiles
  },

  filterData:function(list, choice1, choice2){
    let resultGen=list.filter((p)=>{
      if(p.gender===choice1){
        return true
      }else{
        if(choice1==="none")
        return list
      }
    })
    let finalResult=resultGen.filter((p)=>{
      if(p.species===choice2){
        return true
      }else{
        if(choice2==="none")
        return resultGen
      }
    })
    return finalResult
  },

  sortData:function(list, mode){
    let alphaResults=list.sort((a,b)=>{
      if(mode==="ascend"){
        if(a.name<b.name){
          return -1
        }if(a.name>b.name){
          return 1
        }
        return 0
      }if(mode==="descend"){
        if(a.name<b.name){
          return 1
        }if(a.name>b.name){
          return -1
        }
        return 0
      }else{
        if(mode==="none"){
          if(a.id<b.id){
            return -1
          }if(a.id>b.id){
            return 1
          }
          return 0
        }
      }
    })
    return alphaResults
  }
}
export default func