<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>Python MCQ Quiz – Set 3 (10 questions)</h1>

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
  name: "Python3View",
  components: {
    AppHeader
  },
  data() {
    return {
      checked: false,
      questions: [
        {
          id: 1,
          title: "What is the output of the following?",
          pre: "print({1,2,3} == {3,2,1})",
          answer: "B",
          options: [
            { value: "A", text: "False" },
            { value: "B", text: "True" },
            { value: "C", text: "Error" },
            { value: "D", text: "None" },
          ],
        },
        {
          id: 2,
          title: "What does this code print?",
          pre: "x = [0]\nfor i in range(3):\n    x = [x]\nprint(len(x))",
          answer: "D",
          options: [
            { value: "A", text: "1" },
            { value: "B", text: "2" },
            { value: "C", text: "3" },
            { value: "D", text: "1 (always)" },
          ],
        },
        {
          id: 3,
          title: "Which statement about Python generators is TRUE?",
          answer: "A",
          options: [
            { value: "A", text: "Generators use yield to produce values lazily." },
            { value: "B", text: "Generators return a list." },
            { value: "C", text: "Generators must finish before iteration." },
            { value: "D", text: "Generators cannot be iterated twice." },
          ],
        },
        {
          id: 4,
          title: "What is printed?",
          pre: 'd = {"a":1, "b":2}\nprint(d.get("c"))',
          answer: "C",
          options: [
            { value: "A", text: "Error" },
            { value: "B", text: "0" },
            { value: "C", text: "None" },
            { value: "D", text: "False" },
          ],
        },
        {
          id: 5,
          title: "Which statement about list comprehension is TRUE?",
          answer: "A",
          options: [
            { value: "A", text: "It can include conditions." },
            { value: "B", text: "It cannot contain function calls." },
            { value: "C", text: "It must use only integers." },
            { value: "D", text: "It creates a generator." },
          ],
        },
        {
          id: 6,
          title: "What is the output?",
          pre: "print(bool([]) == bool(()))",
          answer: "B",
          options: [
            { value: "A", text: "False" },
            { value: "B", text: "True" },
            { value: "C", text: "Error" },
            { value: "D", text: "None" },
          ],
        },
        {
          id: 7,
          title: "What will this code output?",
          pre: 'try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("ZDE")\nfinally:\n    print("Done")',
          answer: "D",
          options: [
            { value: "A", text: "Error" },
            { value: "B", text: "Done" },
            { value: "C", text: "10/0" },
            { value: "D", text: 'ZDE\nDone' },
          ],
        },
        {
          id: 8,
          title: "What is the value of x?",
          pre: "x = any([0, False, [], 1])",
          answer: "C",
          options: [
            { value: "A", text: "False" },
            { value: "B", text: "None" },
            { value: "C", text: "True" },
            { value: "D", text: "Error" },
          ],
        },
        {
          id: 9,
          title: "Which statement about Python sets is TRUE?",
          answer: "A",
          options: [
            { value: "A", text: "Sets automatically remove duplicates." },
            { value: "B", text: "Sets maintain insertion order." },
            { value: "C", text: "Sets allow indexing." },
            { value: "D", text: "Sets can contain lists." },
          ],
        },
        {
          id: 10,
          title: "What does this print?",
          pre: 'def f(x=[]):\n    x.append(1)\n    return len(x)\nprint(f())\nprint(f())',
          answer: "D",
          options: [
            { value: "A", text: "1, 1" },
            { value: "B", text: "0, 1" },
            { value: "C", text: "Error" },
            { value: "D", text: "1, 2" },
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
