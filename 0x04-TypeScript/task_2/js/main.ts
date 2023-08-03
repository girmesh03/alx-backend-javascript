// main.ts

// Step 1: Define the DirectorInterface interface
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

// Step 2: Define the TeacherInterface interface
interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// Step 3: Create the Director class that implements DirectorInterface
class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}

	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

// Step 4: Create the Teacher class that implements TeacherInterface
class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}

	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}

	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

// Step 5: Create the createEmployee function
function createEmployee(salary: number | string) {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}

// Step 6: Create the isDirector function
function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

// Step 7: Create the executeWork function
function executeWork(employee: Director | Teacher) {
	if (isDirector(employee)) {
		console.log(employee.workDirectorTasks());
	} else {
		console.log(employee.workTeacherTasks());
	}
}

// Step 8: Test the executeWork function
executeWork(createEmployee(200)); // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks
