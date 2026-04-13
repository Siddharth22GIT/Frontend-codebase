interface Employee{
    id: number;
    name: string;
    salary?: number; //optional
}

let emp:Employee = {
    id: 1,
    name: "Tundal",
    salary: 10000
}

const e1 = document.getElementById('output')

if(e1){
    e1.innerHTML = 
    "ID: " + emp.id + 
    "<br> Name: " + emp.name + 
    "<br> Salary: " + (emp.salary ?? "Not provided")
}

