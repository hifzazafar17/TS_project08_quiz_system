import inquirer from 'inquirer';

interface Question {
  question: string;
  choices: string[];
  correctAnswer: string;
}

const levels = ['easy', 'medium', 'hard'];

const questions: Record<string, Question[]> = {
  easy: [
    {
        question: 'What is TypeScript primarily used for?',
        choices: ['Server-side programming', 'Front-end development', 'Database management', 'Networking'],
        correctAnswer: 'Front-end development',
      },
      {
        question: 'Which keyword is used to declare a constant variable in TypeScript?',
        choices: ['let', 'var', 'const', 'final'],
        correctAnswer: 'const',
      },
      {
        question: 'In TypeScript, how do you specify that a function does not return any value?',
        choices: ['void', 'null', 'none', 'undefined'],
        correctAnswer: 'void',
      },
      {
        question: 'Which of the following is used to define a type alias in TypeScript?',
        choices: ['class', 'interface', 'type', 'struct'],
        correctAnswer: 'type',
      },
      {
        question: 'What does the === operator do in TypeScript?',
        choices: ['Assignment', 'Equality check (strict equality)', 'Inequality check', 'Type casting'],
        correctAnswer: 'Equality check (strict equality)',
      },
      {
        question: 'Which loop is commonly used in TypeScript for iterating over arrays?',
        choices: ['for-in', 'while', 'do-while', 'for-of'],
        correctAnswer: 'for-of',
      },
      {
        question: 'What is the purpose of the TypeScript any type?',
        choices: ['It represents any numeric value', 'It represents any object', 'It represents any string', 'It represents any boolean value'],
        correctAnswer: 'It represents any object',
      },
      {
        question: 'How do you install TypeScript locally for a specific project using npm?',
        choices: ['npm install typescript', 'npm add typescript --save', 'npm install typescript --global', 'npm typescript --save'],
        correctAnswer: 'npm install typescript --save',
      },
      {
        question: 'Which of the following is used to indicate that a parameter in a function is optional?',
        choices: ['optional', 'required', 'nullable', '?'],
        correctAnswer: '?',
      },
      {
        question: 'What does the TypeScript extends keyword do in the context of classes?',
        choices: ['It creates a new class', 'It imports external classes', 'It indicates inheritance', 'It checks for class equality'],
        correctAnswer: 'It indicates inheritance',
      },
    // Add more easy questions
  ],
  medium: [
    {
        question: 'What is the key difference between the let and const keywords in TypeScript?',
        choices: [
          'let is used for variable declaration, and const is used for constant declaration.',
          'let variables are mutable, while const variables are immutable.',
          'let is block-scoped, and const is function-scoped.',
          'There is no difference; they can be used interchangeably.'
        ],
        correctAnswer: 'let variables are mutable, while const variables are immutable.',
      },
      {
        question: 'How can you define a function type in TypeScript?',
        choices: [
          'function add(x: number, y: number): number {}',
          'type add = (x: number, y: number) => number;',
          'class add { constructor(x: number, y: number) {} }',
          'interface AddFunction { (x: number, y: number): number; }'
        ],
        correctAnswer: 'type add = (x: number, y: number) => number;',
      },
      {
        question: 'What does the TypeScript never type represent?',
        choices: [
          'It represents any type.',
          'It represents a function that never returns.',
          'It represents an undefined value.',
          'It represents a null value.'
        ],
        correctAnswer: 'It represents a function that never returns.',
      },
      {
        question: 'In TypeScript, what does the readonly modifier do when used with a property in a class?',
        choices: [
          'It makes the property immutable.',
          'It ensures that the property can only be accessed within the class.',
          'It allows the property to be modified only in the constructor.',
          'It makes the property private.'
        ],
        correctAnswer: 'It makes the property immutable.',
      },
      {
        question: 'What is the purpose of the TypeScript namespace keyword?',
        choices: [
          'To create a new class',
          'To organize code into logical groups',
          'To define a new type',
          'To import external modules'
        ],
        correctAnswer: 'To organize code into logical groups',
      },
      {
        question: 'How do you use generics in TypeScript?',
        choices: [
          'By defining a class with the generic keyword.',
          'By using the any keyword in function parameters.',
          'By using the <T> syntax to create reusable components.',
          'TypeScript does not support generics.'
        ],
        correctAnswer: 'By using the <T> syntax to create reusable components.',
      },
      {
        question: 'What is the benefit of using the as keyword in TypeScript?',
        choices: [
          'It is used for arithmetic operations.',
          'It is used for type assertions.',
          'It is used for loop iterations.',
          'It is used for function overloading.'
        ],
        correctAnswer: 'It is used for type assertions.',
      },
      {
        question: 'Which TypeScript feature allows you to create a mapped type?',
        choices: ['union', 'intersection', 'keyof', 'map'],
        correctAnswer: 'keyof',
      },
      {
        question: 'What is the purpose of the TypeScript abstract keyword in a class?',
        choices: [
          'It defines a class that cannot be instantiated on its own.',
          'It specifies that the class must be extended by another class.',
          'It indicates that the class is part of an abstract data type.',
          'It creates a class with abstract methods.'
        ],
        correctAnswer: 'It defines a class that cannot be instantiated on its own.',
      },
      {
        question: 'What is the significance of the triple-slash directive /// <reference path="file.ts" /> in TypeScript?',
        choices: [
          'It includes the referenced file during compilation.',
          'It excludes the referenced file during compilation.',
          'It is used for importing external modules.',
          'It specifies the location of TypeScript definitions.'
        ],
        correctAnswer: 'It includes the referenced file during compilation.',
      },
    // Add more medium questions
  ],
  hard: [
    {
        question: 'What is a key difference between interfaces and type aliases in TypeScript?',
        choices: [
          'Interfaces can extend classes, while type aliases cannot.',
          'Type aliases can be generic, while interfaces cannot.',
          'Interfaces are limited to object shapes, while type aliases can represent any data type.',
          'Type aliases support inheritance, while interfaces do not.'
        ],
        correctAnswer: 'c',
      },
      {
        question: 'How can you achieve method overloading in a TypeScript class?',
        choices: [
          'Use the overload keyword.',
          'Use the override keyword.',
          'Use the function keyword for each version of the method.',
          'TypeScript does not support method overloading.'
        ],
        correctAnswer: 'd',
      },
      {
        question: 'What is the purpose of the in operator in TypeScript when used with types?',
        choices: [
          'It checks if a property exists in an object.',
          'It performs type casting.',
          'It creates an intersection type.',
          'It checks if a type extends another type.'
        ],
        correctAnswer: 'a',
      },
      {
        question: 'In TypeScript, what is a tuple?',
        choices: [
          'A data structure that stores key-value pairs.',
          'An ordered list of elements of fixed size and different types.',
          'A function that returns a promise.',
          'A type of loop construct.'
        ],
        correctAnswer: 'b',
      },
      {
        question: 'How does TypeScript support private members in a class?',
        choices: [
          'Use the private keyword.',
          'Prefix the member with an underscore.',
          'Place the class in a separate module.',
          'Use the protected keyword.'
        ],
        correctAnswer: 'a',
      },
      {
        question: 'What is the purpose of the readonly modifier when used with an array type in TypeScript?',
        choices: [
          'It ensures that the array is constant and cannot be modified.',
          'It allows the array to be modified only in specific methods.',
          'It makes the array immutable but allows adding new elements.',
          'It specifies that the array can only be read, not written.'
        ],
        correctAnswer: 'a',
      },
      {
        question: 'How does TypeScript handle the this keyword in arrow functions?',
        choices: [
          'Arrow functions do not have access to this.',
          'Arrow functions automatically bind this to the calling context.',
          'this in arrow functions refers to the global object.',
          'this in arrow functions must be explicitly bound using bind().'
        ],
        correctAnswer: 'b',
      },
      {
        question: 'What is the purpose of the keyof operator in TypeScript?',
        choices: [
          'It extracts the values of an object.',
          'It extracts the keys of an object as a union type.',
          'It performs a type conversion.',
          'It checks for the existence of a property in an object.'
        ],
        correctAnswer: 'b',
      },
      {
        question: 'In TypeScript, what is an ambient module declaration?',
        choices: [
          'It declares a module that exists in a separate file.',
          'It declares a module without an actual implementation.',
          'It declares a module with external dependencies.',
          'It declares a module that is shared across multiple projects.'
        ],
        correctAnswer: 'b',
      },
      {
        question: 'What is the purpose of the TypeScript never type when used as a return type for a function?',
        choices: [
          'It indicates that the function never returns.',
          'It signifies an infinite loop.',
          'It represents a function that always throws an error.',
          'It is used to denote an asynchronous operation.'
        ],
        correctAnswer: 'a',
      },
    // Add more hard questions
  ],
};

async function runQuiz(level: string) {
  let score = 0;

  console.log(`Welcome to the ${level} level quiz!\n`);

  const levelQuestions = questions[level];

  for (const question of levelQuestions) {
    const answerPrompt = {
      type: 'list',
      name: 'answer',
      message: question.question,
      choices: question.choices,
    };

    const { answer } = await inquirer.prompt([answerPrompt]);

    if (answer === question.correctAnswer) {
      console.log('Correct!\n');
      score++;
    } else {
      console.log(`Wrong! The correct answer is: ${question.correctAnswer}\n`);
    }
  }

  console.log(`Quiz completed! Your score is: ${score} out of ${levelQuestions.length}\n`);
  return score;
}

async function main() {
  let playAgain = true;

  while (playAgain) {
    const levelPrompt = {
      type: 'list',
      name: 'level',
      message: 'Choose a difficulty level:',
      choices: levels,
    };

    const { level } = await inquirer.prompt([levelPrompt]);

    const score = await runQuiz(level);

    console.log(`You got ${score} correct answers and ${levels.length - score} wrong answers.\n`);

    const playAgainPrompt = {
      type: 'confirm',
      name: 'playAgain',
      message: 'Do you want to play again?',
    };

    const { playAgain: playAgainResponse } = await inquirer.prompt([playAgainPrompt]);
    playAgain = playAgainResponse;
  }

  console.log('Thanks for playing! Goodbye.');
}

main();
