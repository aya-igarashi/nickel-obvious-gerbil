document.getElementById("toform").onclick = function(){
  // ログイン処理
  
  // 成功した場合はページ遷移
  location.href = "/toform";
};

document.getElementById("tosearch").onclick = function(){

  const search_junle = document.getElementById("exampleFormControlSelect1").value;
  const tbody = document.getElementById('tbody'); 
  
  while(tbody.firstChild) tbody.removeChild(tbody.firstChild);

  
  const url = '/find'; // 通信先
  const req = new XMLHttpRequest(); // 通信用オブジェクト
  req.open('POST', url, true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({search_junle: search_junle}));
  req.onreadystatechange = function(){
    if(req.readyState == 4 && req.status == 200) {
      console.log(req.response);
      const results = JSON.parse(req.response);
           
      for(let i in results) {
        const tr = document.createElement('tr');
        const td_junle = document.createElement('td');
        td_junle.innerHTML = results[i].junle;
        const td_name = document.createElement('td');
        td_name.innerHTML = results[i].name;    
        const td_HPlink = document.createElement('td');
        const a_HPlink=document.createElement('a');
        a_HPlink.innerText=results[i].HPlink;
        a_HPlink.href=results[i].HPlink;
        td_HPlink.appendChild(a_HPlink);
        const td_memo = document.createElement('td');
        td_memo.innerHTML = results[i].memo;
        const td_rating = document.createElement('td');
        td_rating.innerHTML = results[i].rating;
        tr.appendChild(td_junle);
        tr.appendChild(td_name);
        tr.appendChild(td_HPlink);
        tr.appendChild(td_memo);
        tr.appendChild(td_rating);
        tbody.appendChild(tr);
      }
    }
  }
  
};
