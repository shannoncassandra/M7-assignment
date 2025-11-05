// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById('empCount')
function updateCount() {
    let count = table.rows.length - 1
    empCount.textContent = count
    let countDisplay = document.createElement('h3')
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let newID = document.querySelector('#id').value
    let newName = document.querySelector('#name').value
    let newExt = document.querySelector('#extension').value
    let newEmail = document.querySelector('#email').value
    let newDept = document.querySelector('#department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let table = document.getElementById('employees')
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let row = table.insertRow()
    row.className = 'list-group-item'
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    ;[newID, newName, newExt, newEmail, newDept].forEach(val => {
        let cell = row.insertCell()
        let text = document.createTextNode(val)
        cell.appendChild(text)
    })
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    // ADD BOOTSTRAP CLASSES TO STYLIZE BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    // CREATE TEXT NODE FOR DELETE BUTTON AND SET TO 'X'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    row.appendChild(deleteBtn)
    // DELETE EMPLOYEE
    // HANDLE THE CLICK EVENT OF THE DELETE BUTTON
    deleteBtn.addEventListener('click', (e) => {
        // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
        if (confirm('Are you sure you want to delete this task?')) {
        // REMOVE THE SELECTED ROW
            table.deleteRow(row.rowIndex)
            updateCount()
            }
        })
    // RESET THE FORM
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.reset()
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    updateCount()
 })



