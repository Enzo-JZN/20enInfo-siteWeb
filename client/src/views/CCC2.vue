<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>C MCQ Quiz – Set 2 (10 questions)</h1>

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
          {{ opt.text }}
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
  name: "C2View",
  components: {
    AppHeader
  },
  data() {
    return {
      checked: false,
      questions: [
        {
          id: 1,
          title: "What is the output?",
          pre: "int a = 5;\nint b = a++ + ++a;\nprintf(\"%d\", b);",
          answer: "A",
          options: [
            { value: "A", text: "Undefined behavior" },
            { value: "B", text: "11" },
            { value: "C", text: "12" },
            { value: "D", text: "10" },
          ],
        },
        {
          id: 2,
          title: "How many bytes does a double typically use?",
          answer: "C",
          options: [
            { value: "A", text: "2" },
            { value: "B", text: "4" },
            { value: "C", text: "8" },
            { value: "D", text: "16" },
          ],
        },
        {
          id: 3,
          title: "What does `const int *p` mean?",
          answer: "D",
          options: [
            { value: "A", text: "p is a constant pointer" },
            { value: "B", text: "Both pointer and value are constant" },
            { value: "C", text: "p is a pointer to a modifiable int" },
            { value: "D", text: "p is a pointer to a constant int" },
          ],
        },
        {
          id: 4,
          title: "What happens?",
          pre: "int *p = NULL;\n*p = 10;",
          answer: "A",
          options: [
            { value: "A", text: "Segmentation fault" },
            { value: "B", text: "10 is stored" },
            { value: "C", text: "Compiles but prints garbage" },
            { value: "D", text: "Undefined behavior but runs fine" },
          ],
        },
        {
          id: 5,
          title: "What is the output?",
          pre: 'char s[] = "Hello";\nprintf("%c", *s);',
          answer: "B",
          options: [
            { value: "A", text: "e" },
            { value: "B", text: "H" },
            { value: "C", text: "o" },
            { value: "D", text: "ASCII value" },
          ],
        },
        {
          id: 6,
          title: "What does this print?",
          pre: "int arr[5] = {1,2,3,4,5};\nprintf(\"%d\", *(arr + 2));",
          answer: "D",
          options: [
            { value: "A", text: "1" },
            { value: "B", text: "2" },
            { value: "C", text: "4" },
            { value: "D", text: "3" },
          ],
        },
        {
          id: 7,
          title: "Which of the following is true about recursion?",
          answer: "C",
          options: [
            { value: "A", text: "C does not support recursion" },
            { value: "B", text: "Recursion always uses less memory" },
            { value: "C", text: "Each call adds a new frame to the stack" },
            { value: "D", text: "Recursion is faster than loops" },
          ],
        },
        {
          id: 8,
          title: "What happens?",
          pre: "int a = 5;\nint *p = &a;\np++;",
          answer: "A",
          options: [
            { value: "A", text: "Pointer moves by sizeof(int)" },
            { value: "B", text: "a increases" },
            { value: "C", text: "Pointer resets" },
            { value: "D", text: "Invalid syntax" },
          ],
        },
        {
          id: 9,
          title: "What is wrong with this?",
          pre: "int *p = malloc(sizeof(int) * 5);\nfree(p);\nfree(p);",
          answer: "D",
          options: [
            { value: "A", text: "malloc is incorrect" },
            { value: "B", text: "free requires size" },
            { value: "C", text: "free cannot free arrays" },
            { value: "D", text: "Double free → undefined behavior" },
          ],
        },
        {
          id: 10,
          title: "What is the output?",
          pre: 'printf("%d", \'A\' + 2);',
          answer: "B",
          options: [
            { value: "A", text: "A2" },
            { value: "B", text: "67" },
            { value: "C", text: "C" },
            { value: "D", text: "Undefined" },
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
