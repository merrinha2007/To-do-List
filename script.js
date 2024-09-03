function adicionartarefas(){
    let input= document.getElementById('texto').value
     
    let li = document.createElement("li")
    li.innerHTML = input + '<span onclick="deletar(this)">❌</span>' //função dentro do javascript, sem estar no HTML, levando para a proxima função( this, puxa toda a função e joga para outra, colocando a variavel dela)

    document.querySelector("ul").appendChild(li)
    document.getElementById('texto').value=''
    
    
 }
 function deletar(li){
    li.parentElement.remove()
    
   
    

 }