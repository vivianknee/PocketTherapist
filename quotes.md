---
layout: none
baseurl: /quotes
---

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
{%- include header.html -%}
    <main>
        <section class="form-container">
            <h2>Add a Custom Quote</h2>
            <form>
                <label for="emotion">Emotion:</label>
                <input type="text" id="emotion" name="emotion" required>
                <label for="quote">Quote:</label>
                <textarea id="quote" name="quote" rows="4" required></textarea>
                <button type="submit">Add Entry</button>
            </form>
        </section>
        <section class="diary-notebook">
            <h2>Your Entries</h2>
            <table>
                <thead>
                    <tr>
                        <th>Emotion</th>
                        <th>Quote</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Entries will be populated here using JavaScript -->
                </tbody>
                <tr class="edit-form-template" style="display: none;">
                    <td><input type="text" class="edit-emotion" required></td>
                    <td><textarea class="edit-quote" rows="4" required></textarea></td>
                    <td class="action-buttons">
                        <button class="save" data-id="">Save</button>
                        <button class="cancel">Cancel</button>
                    </td>
                </tr>
            </table>
        </section>
    </main>
</body>
</html>

<script>
    document.addEventListener('DOMContentLoaded', () => {
    const quoteForm = document.querySelector('form');
    const quoteTable = document.querySelector('table tbody');
    const editFormTemplate = document.querySelector('.edit-form-template');

    // Function to add a new quote to the backend
    quoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emotion = document.querySelector('#emotion').value;
        const quote = document.querySelector('#quote').value;

        const response = await fetch('https://ptbackend.stu.nighthawkcodingsociety.com/api/quote/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emotion, quote }),
        });

        if (response.ok) {
            console.log("quote posted!");
            const data = await response.json();
            addQuoteToTable(data);
            quoteForm.reset();
        } else {
            console.error('Failed to add a quote');
        }
    });

    // Function to populate the table with quotes
    function addQuoteToTable(data) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${data.emotion}</td>
            <td>${data.quote}</td>
            <td>
                <button class="edit" data-id="${data.id}">Edit</button>
                <button class="delete" data-id="${data.id}">Delete</button>
            </td>
        `;

        quoteTable.appendChild(newRow);

        newRow.querySelector('.edit').addEventListener('click', handleEditClick);
        newRow.querySelector('.delete').addEventListener('click', handleDeleteClick);
    }

    // Function to handle quote deletion
    function handleDeleteClick(e) {
        const quoteId = e.target.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this quote?')) {
            fetch(`https://ptbackend.stu.nighthawkcodingsociety.com/api/quote/delete/${quoteId}`, {
                method: 'DELETE',
            }).then((response) => {
                if (response.ok) {
                    e.target.parentElement.parentElement.remove();
                } else {
                    console.error('Failed to delete the quote');
                }
            });
        }
    }

    // Function to handle edit click
    function handleEditClick(e) {
        const row = e.target.parentElement.parentElement;
        const editForm = editFormTemplate.cloneNode(true);
        const emotionInput = editForm.querySelector('.edit-emotion');
        const quoteInput = editForm.querySelector('.edit-quote');
        const saveButton = editForm.querySelector('.save');
        const cancelButton = editForm.querySelector('.cancel');

        emotionInput.value = row.querySelector('td:nth-child(1)').textContent;
        quoteInput.value = row.querySelector('td:nth-child(2)').textContent;

        row.innerHTML = '';
        row.appendChild(editForm);

        saveButton.addEventListener('click', () => {
            const emotion = emotionInput.value;
            const quote = quoteInput.value;

            fetch(`https://ptbackend.stu.nighthawkcodingsociety.com/api/quote/update/${e.target.getAttribute('data-id')}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ emotion, quote }),
            }).then((response) => {
                if (response.ok) {
                    addQuoteToTable({ emotion, quote, id: e.target.getAttribute('data-id') });
                } else {
                    console.error('Failed to update the quote');
                }
            });
        });

        cancelButton.addEventListener('click', () => {
            row.innerHTML = `
                <td>${emotionInput.value}</td>
                <td>${quoteInput.value}</td>
                <td>
                    <button class="edit" data-id="${e.target.getAttribute('data-id')}">Edit</button>
                    <button class="delete" data-id="${e.target.getAttribute('data-id')}">Delete</button>
                </td>
            `;

            row.querySelector('.edit').addEventListener('click', handleEditClick);
            row.querySelector('.delete').addEventListener('click', handleDeleteClick);
        });
    }
    });
</script>

 <style>
    body {
        background: linear-gradient(#FFBF46, #FF99C9);  
    }
    main {
        padding: 20px;
        position: absolute;
        top: 25%;
        left: 36%;
    }
    /* Notebook-style lines */
     .diary-notebook {
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 350;
        position: relative;
        background-color: #fff;
        margin-top: 3ch;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border-bottom: 1px solid #ccc;
        padding: 10px;
        text-align: left;
    }
    th {
        background-color: #009688;
        color: #fff;
    }
    .action-buttons button {
        background-color: #009688;
        color: #fff;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
    }
    .action-buttons button.edit {
        background-color: #17A2B8;
    }
    .action-buttons button.delete {
        background-color: #DC3545;
    }
    /* Form styles */
    .form-container {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: relative;
    }
    .form-container label {
        display: block;
        margin-bottom: 10px;
    }
    .form-container input[type="text"],
    .form-container select,
    .form-container textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    .form-container button {
        background-color: #009688;
        color: #fff;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
    }
</style>