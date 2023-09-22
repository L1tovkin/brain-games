import readlineSync from 'readline-sync';

export default function askName() {
    const name = readlineSync.question('May I have your name? ');
    const answer = `Hello, ${name}`;
    console.log(answer)
}