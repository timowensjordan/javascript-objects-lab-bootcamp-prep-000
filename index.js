var recipes={'cook book':"turkey", Grandmas:"cornbread",online:"cake"};
function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({},obj,{[key]:value});
}
