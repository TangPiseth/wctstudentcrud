let students = []; // In-memory database

// Get all students
const getStudents = (req, res) => {
    res.json(students);
};

// Add a student
const addStudent = (req, res) => {
    const newStudent = { id: Date.now(), ...req.body };
    students.push(newStudent);
    res.status(201).json(newStudent);
};

// Update a student
const updateStudent = (req, res) => {
    const { id } = req.params;
    const index = students.findIndex(student => student.id == id);

    if (index !== -1) {
        students[index] = { ...students[index], ...req.body };
        res.json(students[index]);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
};

// Delete a student
const deleteStudent = (req, res) => {
    const { id } = req.params;
    const index = students.findIndex(student => student.id == id);

    if (index !== -1) {
        students.splice(index, 1);
        res.json({ message: 'Student deleted successfully' });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
};

module.exports = { getStudents, addStudent, updateStudent, deleteStudent };
