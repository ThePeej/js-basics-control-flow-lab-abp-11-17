// Write your code in this file!
function scuberGreetingForFeet(distance) {
  debugger;
  if (distance <= 400){
    debugger;
    return('This one is on me!')
  } else if (distance > 2000) {
    dubugger;
    return('I will gladly take your thirty bucks.')
  } else if (distance > 2500) {
    debugger;
    console.log('No can do.')
  }
}

function ternaryCheckCity(city) {
  console.log(city)
  debugger;
  city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
  case 'generous':
    return('Thank you so much.')
    break;
  case 'not as generous':
    return('Thank you.')
    break;
  case 'thanks for everything':
    return('Bye.')
  }
}
