<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>C MCQ Quiz – Set 1 (10 questions)</h1>

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

      <button class="quiz-button" :disabled="checked" @click="checkAnswers">
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
  name: "C1View",
  components: {
    AppHeader
  },
  data() {
    return {
      checked: false,
      questions: [
        {
          id: 1,
          title: "What is the result of sizeof(int*) on a 64-bit system?",
          answer: "B",
          options: [
            { value: "A", text: "2" },
            { value: "B", text: "8" },
            { value: "C", text: "4" },
            { value: "D", text: "Depends on the compiler" },
          ],
        },
        {
          id: 2,
          title: "What does this code print?",
          pre: 'int x = 10;\nprintf("%d", ++x * 2);',
          answer: "C",
          options: [
            { value: "A", text: "10" },
            { value: "B", text: "20" },
            { value: "C", text: "22" },
            { value: "D", text: "Undefined" },
          ],
        },
        {
          id: 3,
          title: "Which keyword is used to allocate memory dynamically?",
          answer: "A",
          options: [
            { value: "A", text: "malloc" },
            { value: "B", text: "new" },
            { value: "C", text: "alloc" },
            { value: "D", text: "create" },
          ],
        },
        {
          id: 4,
          title: "What is the correct format specifier for a float?",
          answer: "D",
          options: [
            { value: "A", text: "%d" },
            { value: "B", text: "%c" },
            { value: "C", text: "%lf" },
            { value: "D", text: "%f" },
          ],
        },
        {
          id: 5,
          title: "What does this code print?",
          pre: 'int a = 5;\nint b = 2;\nprintf("%d", a / b);',
          answer: "C",
          options: [
            { value: "A", text: "2.5" },
            { value: "B", text: "3" },
            { value: "C", text: "2" },
            { value: "D", text: "Undefined" },
          ],
        },
        {
          id: 6,
          title: "What is the correct declaration of a function returning a pointer?",
          answer: "A",
          options: [
            { value: "A", text: "int* func();" },
            { value: "B", text: "*int func();" },
            { value: "C", text: "int func*();" },
            { value: "D", text: "pointer func();" },
          ],
        },
        {
          id: 7,
          title: "Which of the following is NOT a storage class?",
          answer: "D",
          options: [
            { value: "A", text: "static" },
            { value: "B", text: "auto" },
            { value: "C", text: "register" },
            { value: "D", text: "define" },
          ],
        },
        {
          id: 8,
          title: "What does this print?",
          pre: 'int x = 3;\nprintf("%d", x == 3);',
          answer: "B",
          options: [
            { value: "A", text: "3" },
            { value: "B", text: "1" },
            { value: "C", text: "true" },
            { value: "D", text: "Undefined" },
          ],
        },
        {
          id: 9,
          title: "Which operator accesses a structure member via pointer?",
          answer: "A",
          options: [
            { value: "A", text: "->" },
            { value: "B", text: "." },
            { value: "C", text: "*" },
            { value: "D", text: "&" },
          ],
        },
        {
          id: 10,
          title: "How do you correctly free allocated memory?",
          answer: "C",
          options: [
            { value: "A", text: "delete(ptr);" },
            { value: "B", text: "remove(ptr);" },
            { value: "C", text: "free(ptr);" },
            { value: "D", text: "destroy(ptr);" },
          ],
        },
      ],
    };
  },
  methods: {
  checkAnswers() {
    const total = this.questions.length; // <-- total défini ici
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
