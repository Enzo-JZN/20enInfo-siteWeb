<template>
  <AppHeader />
  <div class="quiz-page">
    <div class="quiz-container">
      <h1>Java MCQ Quiz – Set 1 (10 questions)</h1>

      <!-- Question 1 -->
      <div class="question" data-answer="B" id="q1">
        <div class="q-title">1. Which statement about enums is TRUE?</div>
        <label><input type="radio" name="q1" value="A"> Enums can extend classes.</label>
        <label><input type="radio" name="q1" value="B"> Enums can implement interfaces.</label>
        <label><input type="radio" name="q1" value="C"> Enums cannot have methods.</label>
        <label><input type="radio" name="q1" value="D"> Enum values must be lowercase.</label>
      </div>

      <!-- Question 2 -->
      <div class="question" data-answer="A" id="q2">
        <div class="q-title">2. What does this code print?</div>
        <pre>String x = "abc";
String y = x.toUpperCase();
System.out.println(x);</pre>
        <label><input type="radio" name="q2" value="A"> abc</label>
        <label><input type="radio" name="q2" value="B"> ABC</label>
        <label><input type="radio" name="q2" value="C"> Compilation error</label>
        <label><input type="radio" name="q2" value="D"> null</label>
      </div>

      <!-- Question 3 -->
      <div class="question" data-answer="D" id="q3">
        <div class="q-title">3. What is the size of an empty ArrayList?</div>
        <label><input type="radio" name="q3" value="A"> -1</label>
        <label><input type="radio" name="q3" value="B"> 1</label>
        <label><input type="radio" name="q3" value="C"> 10</label>
        <label><input type="radio" name="q3" value="D"> 0</label>
      </div>

      <!-- Questions 4 à 10 -->
      <div class="question" data-answer="C" id="q4">
        <div class="q-title">4. Which statement about HashMap is TRUE?</div>
        <label><input type="radio" name="q4" value="A"> HashMap preserves insertion order.</label>
        <label><input type="radio" name="q4" value="B"> HashMap is synchronized by default.</label>
        <label><input type="radio" name="q4" value="C"> HashMap allows one null key.</label>
        <label><input type="radio" name="q4" value="D"> Keys must be Strings.</label>
      </div>

      <div class="question" data-answer="A" id="q5">
        <div class="q-title">5. What does "this()" do inside a constructor?</div>
        <label><input type="radio" name="q5" value="A"> Calls another constructor in the same class.</label>
        <label><input type="radio" name="q5" value="B"> Calls the superclass constructor.</label>
        <label><input type="radio" name="q5" value="C"> Returns the current object.</label>
        <label><input type="radio" name="q5" value="D"> Creates a new instance.</label>
      </div>

      <div class="question" data-answer="B" id="q6">
        <div class="q-title">6. What is the output?</div>
        <pre>double a = 5 / 2;
System.out.println(a);</pre>
        <label><input type="radio" name="q6" value="A"> 2.5</label>
        <label><input type="radio" name="q6" value="B"> 2.0</label>
        <label><input type="radio" name="q6" value="C"> 5.0</label>
        <label><input type="radio" name="q6" value="D"> Compilation error</label>
      </div>

      <div class="question" data-answer="D" id="q7">
        <div class="q-title">7. Which is NOT a valid functional interface?</div>
        <label><input type="radio" name="q7" value="A"> Runnable</label>
        <label><input type="radio" name="q7" value="B"> Supplier</label>
        <label><input type="radio" name="q7" value="C"> Function</label>
        <label><input type="radio" name="q7" value="D"> ArrayList</label>
      </div>

      <div class="question" data-answer="A" id="q8">
        <div class="q-title">8. What will this print?</div>
        <pre>String a = "Hi";
a += "!";
System.out.println(a);</pre>
        <label><input type="radio" name="q8" value="A"> Hi!</label>
        <label><input type="radio" name="q8" value="B"> Hi</label>
        <label><input type="radio" name="q8" value="C"> Compilation error</label>
        <label><input type="radio" name="q8" value="D"> !Hi</label>
      </div>

      <div class="question" data-answer="C" id="q9">
        <div class="q-title">9. Which statement about generics is TRUE?</div>
        <label><input type="radio" name="q9" value="A"> Generics work at runtime.</label>
        <label><input type="radio" name="q9" value="B"> Generics require primitive types.</label>
        <label><input type="radio" name="q9" value="C"> Generics use type erasure.</label>
        <label><input type="radio" name="q9" value="D"> Generics allow multiple type bounds only on classes.</label>
      </div>

      <div class="question" data-answer="D" id="q10">
        <div class="q-title">10. What is the output?</div>
        <pre>boolean x = true && false || true;
System.out.println(x);</pre>
        <label><input type="radio" name="q10" value="A"> true && false</label>
        <label><input type="radio" name="q10" value="B"> false</label>
        <label><input type="radio" name="q10" value="C"> true && true</label>
        <label><input type="radio" name="q10" value="D"> true</label>
      </div>

      <button class="quiz-button" :disabled="checked" @click="checkAnswers">Check answers</button>
      <div class="quiz-result" ref="resultBox"></div>
    </div>
  </div>
</template>

<script>
import "../assets/quiz.css";

import AppHeader from '@/components/HeaderLogin.vue';

export default {
  name: "Java1View",
  components: {
    AppHeader
  },
  data() {
    return {
      checked: false
    };
  },
  methods: {
  checkAnswers() {
    const total = 10;
    let correct = 0;
    let answersText = "Correct answers:\n";

    for (let i = 1; i <= total; i++) {
      const q = document.getElementById("q" + i);
      if (!q) continue;
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
