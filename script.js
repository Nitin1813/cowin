document.getElementById('submit').onclick= function(){
  let pin = document.getElementById('pincode').value;
  let date = document.getElementById('date').value;
  var dateE = new Date(date);
  let day = dateE.getDate();
  let month = dateE.getMonth();
  let year = dateE.getFullYear();
  console.log(month + " " + dateE)
  // console.log(date);
  // console.log(dateEntered.getFullYear());
  const a = new XMLHttpRequest();
a.open('GET', `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${day}-${month + 1}-${year}`);
a.send();
a.addEventListener('load',function(){
  const data = JSON.parse(this.responseText);
  console.log(data);

  console.log(data.sessions[0]);
  let appendChild = document.getElementById('centers');
  appendChild.innerHTML = "";
  for(let i = 0; i<data.sessions.length;i++){
    let name = data.sessions[i].name;
    let address = data.sessions[i].address;
    let age = data.sessions[i].min_age_limit;
    let oneDose = data.sessions[i].available_capacity_dose1;
    let twoDose = data.sessions[i].available_capacity_dose1;
    let liname = document.createElement('li');
    liname.innerHTML = name;
    let liAddress = document.createElement('li');
    let liage = document.createElement('li');
    let liDose1 = document.createElement('li');
    let liDose2 = document.createElement('li');
    let lisno = document.createElement('li');
    liAddress.innerHTML = address;
    liDose1.innerHTML = oneDose;
    liDose2.innerHTML = twoDose;
    lisno.innerHTML = i +1;
    liage.innerHTML = age;
    let ul = document.createElement('ul');
    ul.appendChild(lisno);
    ul.appendChild(liname);
    ul.appendChild(liAddress);
    ul.appendChild(liage);
    ul.appendChild(liDose1);
    ul.appendChild(liDose2);
    ul.className = 'center';
    
    appendChild.appendChild(ul);
  }
  // console.log(data.sessions.length)
})
}