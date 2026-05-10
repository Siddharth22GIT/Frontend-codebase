type UserProps={
    name:string;
    age:number;
}

//component as a function

function UserComponent(props:UserProps): string{
    return`
    <div style="border:1px solid black; padding 10px; width:200px;">
    <h2> ${props.name}</h2>
    <p>Age:${props.age}</p>
    `;
}
//usuage

const output=UserComponent({name:"abc",age:23});

//dom
const app=document.getElementById("app");

if(app){
    app.innerHTML=output;
}