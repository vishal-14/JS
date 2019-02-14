var employee_list = [
    { name: 'Vishal', age: 40, salary: 5000, dob: '7-7-1981'},
    { name: 'Arijit', age: 25, salary: 8000, dob: '5-11-1988'},
    { name: 'Anirudh', age: 45, salary: 10000, dob: '24-4-1973'},
    { name: 'Arjun', age: 45, salary: 1000, dob: '10-7-1949'},
    { name: 'Bheem', age: 19, salary: 100, dob: '18-4-1998'},
    { name: 'Neil', age: 25, salary: 800, dob: '11-10-2000'}
];
document.write("(Part1) <br> List of objects of Employee :- <br>")
employee_list.forEach(
    function(ele){
        document.write(JSON.stringify(ele) + "<br>")
    }
)


document.write("<br> (Part 2) <br> All employees with salary greater than 5000 :- <br>")
var count = 0;
employee_list.forEach(
    function(ele){
        if (ele.salary > 5000){
            count++
            document.write(count + ". " + ele.name + "<br>")
        }
    }    
)

//Age group
var group=[];
var groupedEmployees={};
employee_list.forEach(function(emp){if(!group.includes(emp.age))group.push(emp.age)});//finding all unique groups possible
for(let age of group)
{
groupedEmployees[age]=new Array();
for(let emp of employee_list)
{
if(age===emp.age)
{
groupedEmployees[age].push(emp);
}
}
}
document.write("<br> (Part3) <br> Grouping on the basis of Age:- <br>")
for(var i in groupedEmployees)
{
    document.write(i, " ")
    document.write(JSON.stringify(groupedEmployees[i]) + "<br>")
}

// Fetch employees with salary less than 1000 and age greater than 20. 
// Then give them an increment 5 times their salary.
document.write("<br> (Part 4) <br> All employees with salary less than 1000 and age greater than 20 are:- <br>")
c = 0
employee_list.forEach(
    function(ele){
        if (ele.salary < 1000 && ele.age>20){
            c++
            document.write(c + ". " + ele.name + ": " + ele.salary + "<br>")
        }
    }    
)

document.write("<br> And now their salaries are incremented by 5 times:- <br>")
c = 0
employee_list.forEach(
    function(ele){
        if (ele.salary < 1000 && ele.age>20){
            c++
            ele.salary *=5
            document.write(c + ". " + ele.name + ": " + ele.salary + "<br>")
        }
    }    
)