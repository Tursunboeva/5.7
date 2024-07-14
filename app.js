 const $participantForm = document.querySelector("#participantForm");
 const $inputs =document.querySelectorAll(".form-input");
 const $partList=document.querySelector(".partList")


 const ALL_PART=localStorage.getItem("books")|| []

 function Part (name,age,url,club,birth){
    this.name=name;
    this.age=age;
    this.url=url;
    this.club=club;
    this.birth=birth
    this.time=new Date()
 }

 const renderPart= (parts ) =>{
  $partList.innerHTML="";
    parts.map(part=>{
    const $partItemDiv = document.createElement("div");
    $partItemDiv.innerHTML=`
    <img class="w-[100px]" src = "${part.url}>
    <div>
          <h3>Participant name: ${part.name} </h3>
          <p> Participant age: ${part.age}</p>
          <p> Participant club: ${part.club}</p>
          <p> Participant birth: ${part.birth}</p>
          <p> Participant time: ${part.time}</p>
    </div>
    `
    $partList.appendChild($partItemDiv)
    })
 }

 renderPart(ALL_PART);
 const createNewPart = (e)=>{
  e.preventDefault();
    
  let values=Array.from($inputs).map(input =>input.value)
  const part =new Part (...values)
  ALL_PART.push(part);
  localStorage.setItem("parts",JSON.stringify(ALL_PART))
  renderPart(ALL_PART)
 }
$participantForm.addEventListener("submit", createNewPart)