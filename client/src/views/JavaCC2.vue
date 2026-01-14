<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>Java MCQ Quiz – Set 2 (10 questions)</h1>

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
  name: "Java2View",
  components: {
    AppHeader
  },
  data() {
    return {
      checked: false,
      questions: [
        {
          id: "q1",
          title: "What will this code print?",
          code: `int x = 5;
int y = x++ + ++x;
System.out.println(y);`,
          answer: "D",
          options: [
            { value: "A", text: "10" },
            { value: "B", text: "11" },
            { value: "C", text: "12" },
            { value: "D", text: "13" },
          ],
        },
        {
          id: "q2",
          title: "Which statement about inheritance is TRUE?",
          answer: "B",
          options: [
            { value: "A", text: "A class can extend multiple classes." },
            { value: "B", text: "A class can implement multiple interfaces." },
            { value: "C", text: "An interface can extend a class." },
            { value: "D", text: "A class must implement all methods of Object." },
          ],
        },
        {
          id: "q3",
          title: "What is the output?",
          code: `String s1 = new String("hello");
String s2 = "hello";
System.out.println(s1 == s2);`,
          answer: "B",
          options: [
            { value: "A", text: "true" },
            { value: "B", text: "false" },
            { value: "C", text: "Compilation error" },
            { value: "D", text: "Depends on JVM" },
          ],
        },
        {
          id: "q4",
          title: "What does this print?",
          answer: "C",
          options: [
            { value: "A", text: "10" },
            { value: "B", text: "20" },
            { value: "C", text: "30" },
            { value: "D", text: "Compilation error" },
          ],
        },
        {
          id: "q5",
          title: "Which keyword prevents method override?",
          answer: "A",
          options: [
            { value: "A", text: "final" },
            { value: "B", text: "static" },
            { value: "C", text: "private" },
            { value: "D", text: "abstract" },
          ],
        },
        {
          id: "q6",
          title: "What is the output?",
          code: `class Test { static int x = 0; Test(){ x++; } }`,
          answer: "C",
          options: [
            { value: "A", text: "0" },
            { value: "B", text: "1" },
            { value: "C", text: "2" },
            { value: "D", text: "Compilation error" },
          ],
        },
        {
          id: "q7",
          title: "Which is TRUE about exceptions?",
          answer: "C",
          options: [
            { value: "A", text: "try must have finally" },
            { value: "B", text: "Only one catch allowed" },
            { value: "C", text: "Checked exceptions must be handled or declared" },
            { value: "D", text: "Runtime exceptions must be caught" },
          ],
        },
        {
          id: "q8",
          title: "What is the output?",
          code: `int[] a = {1,2,3};
System.out.println(a instanceof Object);`,
          answer: "A",
          options: [
            { value: "A", text: "true" },
            { value: "B", text: "false" },
            { value: "C", text: "Compilation error" },
            { value: "D", text: "Runtime exception" },
          ],
        },
        {
          id: "q9",
          title: "What is printed?",
          code: `String s = "Java";
s.concat(" Rocks");
System.out.println(s);`,
          answer: "B",
          options: [
            { value: "A", text: "Java Rocks" },
            { value: "B", text: "Java" },
            { value: "C", text: "JavaRocks" },
            { value: "D", text: "Compilation error" },
          ],
        },
        {
          id: "q10",
          title: "What is printed?",
          code: `interface A { default void run(){ System.out.println("A"); } }
interface B { default void run(){ System.out.println("B"); } }
class C implements A,B { public void run(){ A.super.run(); } }`,
          answer: "A",
          options: [
            { value: "A", text: "A" },
            { value: "B", text: "B" },
            { value: "C", text: "AB" },
            { value: "D", text: "Compilation error" },
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
