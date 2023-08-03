// main.ts

// Step 1: Define the Teacher interface
interface Teacher {
	firstName: string;
	lastName: string;
	readonly fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

// Step 2: Create teacher objects
const teacher1: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: true,
	yearsOfExperience: 5,
	location: 'New York',
	contract: true, // Additional attribute
};

const teacher2: Teacher = {
	firstName: 'Jane',
	lastName: 'Smith',
	fullTimeEmployee: false,
	location: 'London',
	contract: false, // Additional attribute
	specialty: 'Math', // Additional attribute
};

// Step 3: Define the Directors interface extending Teacher
interface Directors extends Teacher {
	numberOfReports: number;
}

// Step 4: Create director object
const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};

// Step 5: Define the printTeacherFunction interface for the printTeacher function
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

// Step 6: Create the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
	const firstInitial = firstName.charAt(0).toUpperCase();
	const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
	return `${firstInitial}. ${formattedLastName}`;
};

// Step 7: Define the StudentClass interface
interface StudentClass {
	new(firstName: string, lastName: string): StudentMethods;
}

// Step 8: Define the StudentMethods interface
interface StudentMethods {
	workOnHomework(): string;
	displayName(): string;
}

// Step 9: Create the StudentClass class
class StudentClassImpl implements StudentMethods {
	constructor(private firstName: string, private lastName: string) { }

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}

// Step 10: Verify Webpack and TypeScript
console.log(teacher1);
console.log(teacher2);
console.log(director1);
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Step 11: Test the StudentClass class
const student: StudentMethods = new StudentClassImpl('Alice', 'Smith');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: Alice
