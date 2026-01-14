<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>Data Structures MCQ – Set 2 (10 questions)</h1>

      <div
        class="question"
        v-for="q in questions"
        :key="q.id"
        :data-answer="q.answer"
        :id="q.id"
      >
        <div class="q-title">{{ q.num }}. {{ q.title }}</div>
        <div v-if="q.pre">
          <pre>{{ q.pre }}</pre>
        </div>

        <div class="options">
          <label v-for="opt in q.options" :key="opt.value">
            <input type="radio" :name="q.id" :value="opt.value" />
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
  name: "DataStructuresQuizSet2",
  components: {
    AppHeader
  },
  data() {
    return {
      checked: false,
      questions: [
        {
          id: "q1",
          num: 1,
          title: "Which operation is fastest in a circular queue?",
          answer: "A",
          options: [
            { value: "A", text: "Enqueue" },
            { value: "B", text: "Dequeue" },
            { value: "C", text: "Search" },
            { value: "D", text: "Inserting in middle" },
          ],
        },
        {
          id: "q2",
          num: 2,
          title: "Which of the following has the highest space overhead?",
          answer: "D",
          options: [
            { value: "A", text: "Array" },
            { value: "B", text: "Linked list" },
            { value: "C", text: "Hash table" },
            { value: "D", text: "Binary tree" },
          ],
        },
        {
          id: "q3",
          num: 3,
          title: "In a min-heap, the smallest element is located at:",
          answer: "C",
          options: [
            { value: "A", text: "The last level" },
            { value: "B", text: "A random position" },
            { value: "C", text: "The root" },
            { value: "D", text: "The leftmost leaf" },
          ],
        },
        {
          id: "q4",
          num: 4,
          title: "Which hashing technique resolves collisions by linking elements?",
          answer: "B",
          options: [
            { value: "A", text: "Open addressing" },
            { value: "B", text: "Chaining" },
            { value: "C", text: "Double hashing" },
            { value: "D", text: "Quadratic probing" },
          ],
        },
        {
          id: "q5",
          num: 5,
          title: "Which traversal is used in DFS for graphs?",
          answer: "D",
          options: [
            { value: "A", text: "Inorder" },
            { value: "B", text: "Level-order" },
            { value: "C", text: "Reverse-order" },
            { value: "D", text: "Preorder (stack-based)" },
          ],
        },
        {
          id: "q6",
          num: 6,
          title: "Which is true about adjacency matrix for graphs?",
          answer: "A",
          options: [
            { value: "A", text: "It uses O(n²) memory" },
            { value: "B", text: "It is faster for sparse graphs" },
            { value: "C", text: "It cannot represent weighted edges" },
            { value: "D", text: "It requires recursion" },
          ],
        },
        {
          id: "q7",
          num: 7,
          title: "Which is NOT a typical use of a stack?",
          answer: "C",
          options: [
            { value: "A", text: "Undo mechanisms" },
            { value: "B", text: "Expression evaluation" },
            { value: "C", text: "Level-order traversal" },
            { value: "D", text: "Function call management" },
          ],
        },
        {
          id: "q8",
          num: 8,
          title: "In a doubly-linked list, deleting a node in the middle requires:",
          answer: "A",
          options: [
            { value: "A", text: "O(1) time if pointer to node is known" },
            { value: "B", text: "O(n) time always" },
            { value: "C", text: "Rotations" },
            { value: "D", text: "Hashing" },
          ],
        },
        {
          id: "q9",
          num: 9,
          title: "A red-black tree ensures:",
          answer: "B",
          options: [
            { value: "A", text: "Perfect balancing" },
            { value: "B", text: "Approximately balanced height" },
            { value: "C", text: "Full binary tree" },
            { value: "D", text: "Constant depth" },
          ],
        },
        {
          id: "q10",
          num: 10,
          title: "Which of these is a non-linear data structure?",
          answer: "D",
          options: [
            { value: "A", text: "Array" },
            { value: "B", text: "Linked list" },
            { value: "C", text: "Stack" },
            { value: "D", text: "Graph" },
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
