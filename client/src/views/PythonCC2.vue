<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>Python MCQ Quiz – Set 2 (10 questions)</h1>

      <!-- Questions 1 à 10 -->
      <div
        class="question"
        v-for="(q, index) in questions"
        :key="q.id"
        :data-answer="q.answer"
        :id="'q' + q.id"
      >
        <div class="q-title">{{ index + 1 }}. {{ q.title }}</div>
        <pre v-if="q.pre">{{ q.pre }}</pre>
        <label v-for="opt in q.options" :key="opt.value">
          <input type="radio" :name="'q' + q.id" :value="opt.value" />
          {{ opt.value }}. {{ opt.text }}
        </label>
      </div>

      <button class="quiz-button" @click="checkAnswers">
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
  name: "Python2View",
  components: {
    AppHeader
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          title: "What does this code print?",
          pre: "x = [1,2,3]\ny = x\nx.append(4)\nprint(len(y))",
          answer: "D",
          options: [
            { value: "A", text: "2" },
            { value: "B", text: "3" },
            { value: "C", text: "Error" },
            { value: "D", text: "4" },
          ],
        },
        {
          id: 2,
          title: "What is the output?",
          pre: "def f(a, L=[]):\n    L.append(a)\n    return L\nprint(f(1))\nprint(f(2))",
          answer: "C",
          options: [
            { value: "A", text: "[1], [2]" },
            { value: "B", text: "[1], [1,2]" },
            { value: "C", text: "[1], [1,2]" },
            { value: "D", text: "Error" },
          ],
        },
        {
          id: 3,
          title: "Which statement about Python decorators is TRUE?",
          answer: "A",
          options: [
            { value: "A", text: "Decorators wrap a function to modify its behavior." },
            { value: "B", text: "Decorators must return a string." },
            { value: "C", text: "Decorators only work on classes." },
            { value: "D", text: "Decorators must take no arguments." },
          ],
        },
        {
          id: 4,
          title: "What is printed?",
          pre: "a = (1,2,3)\ntry:\n    a[0] = 10\nexcept Exception as e:\n    print(type(e).__name__)",
          answer: "B",
          options: [
            { value: "A", text: "ValueError" },
            { value: "B", text: "TypeError" },
            { value: "C", text: "KeyError" },
            { value: "D", text: "IndexError" },
          ],
        },
        {
          id: 5,
          title: "What does this code output?",
          pre: 'print({"a":1}.get("b", 5))',
          answer: "D",
          options: [
            { value: "A", text: "Error" },
            { value: "B", text: "None" },
            { value: "C", text: "1" },
            { value: "D", text: "5" },
          ],
        },
        {
          id: 6,
          title: "What is the output?",
          pre: "for i in range(1,5,2):\n    pass\nprint(i)",
          answer: "A",
          options: [
            { value: "A", text: "3" },
            { value: "B", text: "4" },
            { value: "C", text: "1" },
            { value: "D", text: "Error" },
          ],
        },
        {
          id: 7,
          title: "Which statement about Python classes is TRUE?",
          answer: "C",
          options: [
            { value: "A", text: "A class cannot define its own __iter__." },
            { value: "B", text: "A class must have a constructor." },
            { value: "C", text: "A class can override __str__ for custom printing." },
            { value: "D", text: "A class cannot inherit from multiple parents." },
          ],
        },
        {
          id: 8,
          title: "What is printed?",
          pre: "x = [1,2,3]\nprint(x[3:])",
          answer: "A",
          options: [
            { value: "A", text: "[]" },
            { value: "B", text: "Error" },
            { value: "C", text: "[3]" },
            { value: "D", text: "None" },
          ],
        },
        {
          id: 9,
          title: "What will this print?",
          pre: "def f():\n    return 'Hello'\nprint(f() * 2)",
          answer: "D",
          options: [
            { value: "A", text: "Error" },
            { value: "B", text: "Hello" },
            { value: "C", text: "2" },
            { value: "D", text: "HelloHello" },
          ],
        },
        {
          id: 10,
          title: "Which statement about Python modules is TRUE?",
          answer: "B",
          options: [
            { value: "A", text: "Every module must contain a class." },
            { value: "B", text: "A module is a single Python file." },
            { value: "C", text: "Modules must be compiled before use." },
            { value: "D", text: "A module cannot import another module." },
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
