const inject = function(items, sections){
  let result = items;
  Object.keys(sections).forEach(row =>{
    let index = sections[row].index;
    if(row>0){
      index++;
    }
    result.splice(index, 0, sections[row].content);
  })
  return result;
}
export { inject };
