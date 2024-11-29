const baseUrl = '/students';

// Fetch all students
async function fetchStudents() {
    const response = await fetch(baseUrl);
    const students = await response.json();
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = '';

    students.forEach(student => {
        const row = `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Add a student
async function addStudent() {
    const name = prompt('Enter student name:');
    if (name) {
        await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        fetchStudents();
    }
}

// Delete a student
async function deleteStudent(id) {
    await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
    fetchStudents();
}

fetchStudents();
