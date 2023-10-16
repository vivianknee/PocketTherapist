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
            <form action="https://ptbackend.stu.nighthawkcodingsociety.com/api/quote/post/" method="POST">
                <label for="emotion">Emotion:</label>
                <input type="text" id="emotion" name="emotion" required>
                <label for="quote">Quote:</label>
                <textarea id="quote" name="quote" rows="4" required></textarea>
                <button type="submit">Add Entry</button>
            </form>
        </section>
        <section class="diary-notebook">
            <h2>Your Journal Entries</h2>
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

 <style>
    body {
        background-color: linear-gradient(#FFBF46, #FF99C9);  
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