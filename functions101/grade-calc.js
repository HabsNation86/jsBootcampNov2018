// student score and total possible score
//  if 15/20 -> you got a C (75%)
// A 90-100 B 89-80 C 79-70 D 69-60 F 59-




let gradeCalc = function(score, total){
  let grade = (score/total) * 100
  if (grade >=90){
    return `You got a A (${grade}%)`
  } else if (grade >=80 ){
    return `You got a B (${grade}%)`
  } else if (grade >=70){
    return `You got a C (${grade}%)`
  } else if (grade >=60){
    return `You got a D (${grade}%)`
  } else {
    return `You got a F (${grade}%)`
  }
}

console.log(gradeCalc(8,20))
