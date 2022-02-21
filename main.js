let NAME = 'Rugen';
let rank = 'Coporal';
let age = 35;

if (age < 18) {
    console.log('You are too young for the military');
}else if (name = 'Rugen' && rank === 'Count'){
    console.log('My name is Inigo Montoya, you killed my father, prepare to die.');
}else if (rank == 'Captain'){
    console.log(`Aye Aye Captain ${NAME}`);
}else if (rank == 'Private' && age > 40){
    console.log(`What have you been doing with your life ${NAME}`);
} else {
    console.log(`Hello ${rank} ${NAME}, I cannot wait to celebrate your ${age+1}th birthday next year`);
}