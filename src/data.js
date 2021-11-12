const func={
  filterData:function(list, choice1, choice2, choice3){
    let resultGen=list.filter((p)=>{
      if(p.gender===choice1){
        return true
      }else{
        if(choice1==="none")
        return list
      }
    })
    let resultSpecies=resultGen.filter((p)=>{
      if(p.species===choice2){
        return true
      }else{
        if(choice2==="none")
        return resultGen
      }
    })
    let finalResult=resultSpecies.filter((p)=>{
      if(p.status===choice3){
        return true
      }else{
        if(choice3==="none")
        return resultSpecies
      }
    })
    return finalResult
  },

  sortData:function(list, mode){
    let alphaResults=list.sort((a,b)=>{
      if(mode==="ascend"){
        if(a.name<b.name){
          return -1
        }
          return 1
      }if(mode==="descend"){
        if(a.name<b.name){
          return 1
        }
          return -1
      }else{
        if(mode==="none"){
          if(a.id<b.id){
            return -1
          }
            return 1
          }
        }
      }
    )
    return alphaResults
  }
}
export default func