<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>Java MCQ Quiz – Set 3 (10 questions)</h1>

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
              v-model="userAnswers[q.id]"
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
  name: "Java3View",
  components: {
    AppHeader
  },
  data() {
    return {
      userAnswers: {},
      checked: false,
      questions: [
        {
          id: "q1",
          title: "Which class is used for reading text from a file?",
          answer: "A",
          options: [
            { value: "A", text: "BufferedReader" },
            { value: "B", text: "PrintWriter" },
            { value: "C", text: "FileWriter" },
            { value: "D", text: "Scanner only" },
          ],
        },
        {
          id: "q2",
          title: "Which operator has the highest precedence?",
          answer: "D",
          options: [
            { value: "A", text: "+" },
            { value: "B", text: "&&" },
            { value: "C", text: "==" },
            { value: "D", text: "() parentheses" },
          ],
        },
        {
          id: "q3",
          title: "What is true about StringBuilder?",
          answer: "C",
          options: [
            { value: "A", text: "It is immutable." },
            { value: "B", text: "It is thread-safe." },
            { value: "C", text: "It is mutable." },
            { value: "D", text: "It cannot append strings." },
          ],
        },
        {
          id: "q4",
          title: "What does this code print?",
          code: "System.out.println(Math.max(4, Math.min(10, 2)));",
          answer: "B",
          options: [
            { value: "A", text: "2" },
            { value: "B", text: "4" },
            { value: "C", text: "10" },
            { value: "D", text: "6" },
          ],
        },
        {
          id: "q5",
          title: "Which keyword is used to prevent inheritance?",
          answer: "D",
          options: [
            { value: "A", text: "static" },
            { value: "B", text: "private" },
            { value: "C", text: "abstract" },
            { value: "D", text: "final" },
          ],
        },
        {
          id: "q6",
          title: "Which stream is used for binary data?",
          answer: "C",
          options: [
            { value: "A", text: "FileReader" },
            { value: "B", text: "BufferedWriter" },
            { value: "C", text: "FileInputStream" },
            { value: "D", text: "PrintStream" },
          ],
        },
        {
          id: "q7",
          title: "What is printed?",
          code: "int x = 3;\nint y = ++x * 2;\nSystem.out.println(y);",
          answer: "B",
          options: [
            { value: "A", text: "6" },
            { value: "B", text: "8" },
            { value: "C", text: "3" },
            { value: "D", text: "7" },
          ],
        },
        {
          id: "q8",
          title: 'What does "super()" do?',
          answer: "A",
          options: [
            { value: "A", text: "Calls the parent constructor." },
            { value: "B", text: "Calls another method." },
            { value: "C", text: "Returns a parent object." },
            { value: "D", text: "Calls the current constructor." },
          ],
        },
        {
          id: "q9",
          title: "What is the output?",
          code: 'System.out.println("A" + 1 + 2);',
          answer: "D",
          options: [
            { value: "A", text: "3" },
            { value: "B", text: "A3" },
            { value: "C", text: "A12" },
            { value: "D", text: "A12" },
          ],
        },
        {
          id: "q10",
          title: "Which statement about interfaces is TRUE?",
          answer: "C",
          options: [
            { value: "A", text: "Interfaces cannot have static methods." },
            { value: "B", text: "Interfaces cannot extend another interface." },
            { value: "C", text: "Interfaces may contain default methods." },
            { value: "D", text: "Interfaces must have at least one method." },
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

