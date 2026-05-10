const addWorkoutBtn = document.getElementById('add-workout');
const workoutList = document.getElementById('workout-list');

addWorkoutBtn.addEventListener('click', () => {
  const name = document.getElementById('exercise-name').value.trim();
  const sets = document.getElementById('exercise-set').value;
  const reps = document.getElementById('exercise-rep').value;
  const miles = document.getElementById('miles-ran').value;

  if (!name) {
    alert('Please enter an exercise name.');
    return;
  }

  const li = document.createElement('li');
  let details = name;
  if (sets) details += ` — ${sets} set(s)`;
  if (reps) details += `, ${reps} rep(s)`;
  if (miles) details += `, ${miles} mile(s)`;
  li.textContent = details;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.style.marginLeft = '10px';
  removeBtn.addEventListener('click', () => li.remove());
  li.appendChild(removeBtn);
  workoutList.appendChild(li);

  document.getElementById('exercise-name').value = '';
  document.getElementById('exercise-set').value = '';
  document.getElementById('exercise-rep').value = '';
  document.getElementById('miles-ran').value = '';
});

const addFoodBtn = document.getElementById('add-food');
const calorieList = document.getElementById('calorie-list');
const calorieTotal = document.getElementById('calorie-total');

let totalCalories = 0;

addFoodBtn.addEventListener('click', () => {
  const food = document.getElementById('food-name').value.trim();
  const calories = parseInt(document.getElementById('food-calories').value);

  if (!food || isNaN(calories) || calories < 0) {
    alert('Please enter a food name and valid calorie amount.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${food} — ${calories} cal`;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.style.marginLeft = '10px';
  removeBtn.addEventListener('click', () => {
    totalCalories -= calories;
    calorieTotal.textContent = totalCalories;
    li.remove();
  });

  li.appendChild(removeBtn);
  calorieList.appendChild(li);

  totalCalories += calories;
  calorieTotal.textContent = totalCalories;

  document.getElementById('food-name').value = '';
  document.getElementById('food-calories').value = '';
});