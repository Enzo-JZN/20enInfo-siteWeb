<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>Python MCQ Quiz (10 questions)</h1>

      <div
        class="question"
        v-for="q in questions"
        :key="q.id"
        :data-answer="q.answer"
        :id="q.id"
      >
        <div class="q-title">{{ q.id }}. {{ q.title }}</div>
        <pre v-if="q.code">{{ q.code }}</pre>
        <div class="options">
          <label v-for="opt in q.options" :key="opt.value">
            <input
              type="radio"
              :name="q.id"
              :value="opt.value"
            />
            {{ opt.value }}. {{ opt.text }}
          </label>
        </div>
      </div>

      <button class="quiz-button" @click="checkAnswers" :disabled="checked">
        Check answers
      </button>

      <div class="quiz-result" ref="resultBox" style="display:none;"></div>
    </div>
  </div>
</template>

<script>
import "../assets/quiz.css";

import AppHeader from '@/components/HeaderLogin.vue';

export default {
  name: "Python1View",
  components: {
    AppHeader
  },
  data() {
    return {
      checked: false,
      questions: [
        {
          id: "q1",
          title: "What is the output of the following?",
          code: "print(type([]))",
          answer: "C",
          options: [
            { value: "A", text: "<class 'tuple'>" },
            { value: "B", text: "<class 'set'>" },
            { value: "C", text: "<class 'list'>" },
            { value: "D", text: "<class 'dict'>" },
          ],
        },
        {
          id: "q2",
          title: "Which statement is TRUE about Python variables?",
          answer: "A",
          options: [
            { value: "A", text: "They are dynamically typed." },
            { value: "B", text: "They must be declared with a type." },
            { value: "C", text: "They cannot change type once assigned." },
            { value: "D", text: "They must always store strings." },
          ],
        },
        {
          id: "q3",
          title: "What is the output of this code?",
          code: "a = {1,2,3}\na.add(2)\nprint(len(a))",
          answer: "D",
          options: [
            { value: "A", text: "1" },
            { value: "B", text: "2" },
            { value: "C", text: "4" },
            { value: "D", text: "3" },
          ],
        },
        {
          id: "q4",
          title: "What does this code print?",
          code: "print('Hello'[::-1])",
          answer: "B",
          options: [
            { value: "A", text: "Hello" },
            { value: "B", text: "olleH" },
            { value: "C", text: "Error" },
            { value: "D", text: "H" },
          ],
        },
        {
          id: "q5",
          title: "What is the output?",
          code: 'print(bool(""))',
          answer: "C",
          options: [
            { value: "A", text: "True" },
            { value: "B", text: "1" },
            { value: "C", text: "False" },
            { value: "D", text: "Error" },
          ],
        },
        {
          id: "q6",
          title: "What is the correct way to open a file?",
          answer: "A",
          options: [
            { value: "A", text: "open('file.txt', 'r')" },
            { value: "B", text: "file.open('file.txt')" },
            { value: "C", text: "open('file.txt', read)" },
            { value: "D", text: "open('file')" },
          ],
        },
        {
          id: "q7",
          title: "What will this code output?",
          code: "for i in range(3):\n    pass\nprint(i)",
          answer: "D",
          options: [
            { value: "A", text: "Error" },
            { value: "B", text: "0" },
            { value: "C", text: "2" },
            { value: "D", text: "2 (last value)" },
          ],
        },
        {
          id: "q8",
          title: "Which is a correct lambda function?",
          answer: "A",
          options: [
            { value: "A", text: "lambda x: x + 1" },
            { value: "B", text: "lambda(x) = x + 1" },
            { value: "C", text: "def lambda(x): return x+1" },
            { value: "D", text: "lambda: x + 1" },
          ],
        },
        {
          id: "q9",
          title: "What does this code print?",
          code: "x = [1,2,3]\nprint(x * 2)",
          answer: "B",
          options: [
            { value: "A", text: "Error" },
            { value: "B", text: "[1,2,3,1,2,3]" },
            { value: "C", text: "[2,4,6]" },
            { value: "D", text: "None" },
          ],
        },
        {
          id: "q10",
          title: "What is printed?",
          code: "def f(a, b=2):\n    return a * b\nprint(f(3))",
          answer: "C",
          options: [
            { value: "A", text: "Error" },
            { value: "B", text: "3" },
            { value: "C", text: "6" },
            { value: "D", text: "5" },
          ],
        },
      ],
    };
  },
  methods: {
  checkAnswers() {
    const total = this.questions.length; 
    let correct = 0;
    let answersText = "Correct answers:\n";

    for (let i = 1; i <= total; i++) {
      const q = document.getElementById("q" + i);
      const answer = q.getAttribute("data-answer");
      const checked = document.querySelector(`input[name=q${i}]:checked`);

      if (checked && checked.value === answer) correct++;

      const labels = q.querySelectorAll("label");
      labels.forEach(label => {
        const input = label.querySelector("input");
        if (input.value === answer) {
          label.style.border = "2px solid #28a745";
          label.style.background = "#e8fbe8";
          label.style.borderRadius = "6px";
          label.style.padding = "6px";
        }
      });

      answersText += `Q${i}: ${answer}\n`;
    }

    const result = this.$refs.resultBox;
    result.style.display = "block";
    result.textContent = `Score: ${correct} / ${total}\n\n${answersText}`;
    this.checked = true;
    } 
  }
};
</script>
