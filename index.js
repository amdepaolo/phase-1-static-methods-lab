class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.substring(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, "");
  }
  static titleize(string){
    let strArr = string.split(' ')
    let titlArr = [];
    titlArr.push(this.capitalize(strArr[0]));
    for(let i = 1; i < strArr.length; i ++){
      if(strArr[i] === 'a' ||strArr[i] ===  'an' ||strArr[i] === 'the' ||strArr[i] ===  'but' ||strArr[i] ===  'of' ||strArr[i] === 'and' ||strArr[i] === 'for'||strArr[i] ===  'at'||strArr[i] ===  'by'||strArr[i] ===  'from'){
       titlArr.push(strArr[i])
      }
      else{
        titlArr.push(this.capitalize(strArr[i]));
      }
    }
    return titlArr.join(' ')
  }
}