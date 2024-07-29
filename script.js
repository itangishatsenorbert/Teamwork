function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('User signed up!');
    showSection('signin');
});

document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('User signed in!');
    showSection('dashboard');
});

document.getElementById('createArticleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const articlesList = document.getElementById('articlesList');
    const listItem = document.createElement('li');
    listItem.textContent = title;
    articlesList.appendChild(listItem);
    alert('Article created!');
    showSection('dashboard');
});

document.getElementById('addCommentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = document.getElementById('comment').value;
    const commentsList = document.getElementById('commentsList');
    const listItem = document.createElement('li');
    listItem.textContent = comment;
    commentsList.appendChild(listItem);
    alert('Comment added!');
    document.getElementById('comment').value = '';
});

document.getElementById('addEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const empName = document.getElementById('empName').value;
    const empEmail = document.getElementById('empEmail').value;
    const employeesList = document.getElementById('employeesList');
    const listItem = document.createElement('li');
    listItem.textContent = `${empName} (${empEmail})`;
    employeesList.appendChild(listItem);
    alert('Employee added!');
    document.getElementById('empName').value = '';
    document.getElementById('empEmail').value = '';
});
