<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>Data Structures MCQ – Set 1 (10 questions)</h1>

      <!-- Questions -->
      <div
        v-for="(q, index) in questions"
        :key="q.id"
        class="question"
        :data-answer="q.answer"
        :id="'q' + q.id"
      >
        <div class="q-title">{{ index + 1 }}. {{ q.title }}</div>

        <div v-if="q.pre" class="pre-code">
          <pre>{{ q.pre }}</pre>
        </div>

        <label v-for="opt in q.options" :key="opt.value">
          <input
            type="radio"
            :name="'q' + q.id"
            :value="opt.value"
          />
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
  name: "DataStructuresQuizSet1",
  components: {
    AppHeader
  },
  data() {
    return {
      checked: false,
      questions: [
        {
          id: 1,
          title: "Which data structure uses LIFO order?",
          answer: "C",
          options: [
            { value: "A", text: "Queue" },
            { value: "B", text: "Array" },
            { value: "C", text: "Stack" },
            { value: "D", text: "Heap" },
          ],
        },
        {
          id: 2,
          title: "What is the time complexity of binary search?",
          answer: "A",
          options: [
            { value: "A", text: "O(log n)" },
            { value: "B", text: "O(n)" },
            { value: "C", text: "O(n²)" },
            { value: "D", text: "O(1)" },
          ],
        },
        {
          id: 3,
          title: "Which structure is used to implement a BFS traversal?",
          answer: "D",
          options: [
            { value: "A", text: "Stack" },
            { value: "B", text: "Priority Queue" },
            { value: "C", text: "Tree" },
            { value: "D", text: "Queue" },
          ],
        },
        {
          id: 4,
          title: "What is the worst-case time complexity of quicksort?",
          answer: "B",
          options: [
            { value: "A", text: "O(log n)" },
            { value: "B", text: "O(n²)" },
            { value: "C", text: "O(n log n)" },
            { value: "D", text: "O(n)" },
          ],
        },
        {
          id: 5,
          title: "A balanced binary tree ensures:",
          answer: "A",
          options: [
            { value: "A", text: "Height = O(log n)" },
            { value: "B", text: "Height = O(n)" },
            { value: "C", text: "Constant height" },
            { value: "D", text: "No duplicates allowed" },
          ],
        },
        {
          id: 6,
          title: "Which structure is best for priority-based retrieval?",
          answer: "C",
          options: [
            { value: "A", text: "Stack" },
            { value: "B", text: "Hash table" },
            { value: "C", text: "Heap" },
            { value: "D", text: "Linked list" },
          ],
        },
        {
          id: 7,
          title:
            "What is the time complexity of inserting a node at the head of a linked list?",
          answer: "B",
          options: [
            { value: "A", text: "O(n)" },
            { value: "B", text: "O(1)" },
            { value: "C", text: "O(log n)" },
            { value: "D", text: "O(n log n)" },
          ],
        },
        {
          id: 8,
          title: "Which traversal prints a BST in sorted order?",
          answer: "D",
          options: [
            { value: "A", text: "Preorder" },
            { value: "B", text: "Postorder" },
            { value: "C", text: "Level-order" },
            { value: "D", text: "Inorder" },
          ],
        },
        {
          id: 9,
          title: "Which data structure has O(1) average lookup time?",
          answer: "A",
          options: [
            { value: "A", text: "Hash table" },
            { value: "B", text: "Doubly linked list" },
            { value: "C", text: "Binary tree" },
            { value: "D", text: "Stack" },
          ],
        },
        {
          id: 10,
          title: "Which of these is NOT a self-balancing tree?",
          answer: "C",
          options: [
            { value: "A", text: "Red-Black Tree" },
            { value: "B", text: "AVL Tree" },
            { value: "C", text: "Binary Search Tree" },
            { value: "D", text: "Splay Tree" },
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
