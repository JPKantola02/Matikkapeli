document.addEventListener('DOMContentLoaded', () => {
    let correctCount = 0;
    let incorrectCount = 0;

    const getRandomIntNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomizeQuestion = () => {
        const num1 = getRandomIntNumberInRange(1, 10);
        const num2 = getRandomIntNumberInRange(1, 10);
        const operator = ['+', '-', '*', '/'][getRandomIntNumberInRange(0, 3)];

        document.getElementById('question').textContent = `${num1} ${operator} ${num2} = ?`;
    }

    randomizeQuestion();

    document.getElementById('checkAnswer').addEventListener('click', () => {
        const userAnswer = parseFloat(document.getElementById('answer').value);
        const questionText = document.getElementById('question').textContent;
        const [num1, operator, num2] = questionText.split(' ');

        let correctAnswer;
        switch (operator) {
            case '+':
                correctAnswer = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                correctAnswer = parseFloat(num1) - parseFloat(num2);
                break;
            case '*':
                correctAnswer = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                correctAnswer = parseFloat(num1) / parseFloat(num2);
                break;
            default:
                break;
        }

        if (userAnswer === correctAnswer) {
            alert('Correct!');
            correctCount++;
            document.getElementById('correctCount').textContent = correctCount;
        } else {
            alert('Incorrect!');
            incorrectCount++;
            document.getElementById('incorrectCount').textContent = incorrectCount;
        }

        document.getElementById('answer').value = '';
        randomizeQuestion();
    });
});
