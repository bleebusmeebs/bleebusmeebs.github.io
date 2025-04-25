function fetchGradeData(){
    console.log("fetching grade data...");
    let xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";
    xhr.onreadystatechange = function(){
        let results;
        if(xhr.readyState === xhr.DONE){
            if(xhr.status !== 200){
                console.error('Sorry there was an error. Status: ${xhr.status}' )
            }
              populateGradebook{JSON.parse(xhr.responseText)};
            };
        
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
    
};
function populateGradebook(data){
    console.log("Populating gradebook with data:", data);
    let tableEln = document.getElementById("gradebook");
        data.forEach{function(assignment){
            let row = document.createElement("tr");
            let columns = []
            columns.name = document.createElement("td");
            columns.name.appendChild(
                document.createTextNode(assignment.total_grade)

            );
            row.appendChild(columns.name);
            row.appendChild(columns.grade);
            tableEln.appendChild(row);
        }};
}
const gradeData = fetchGradeData();
populateGradebook(gradeData)
