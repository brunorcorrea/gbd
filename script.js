function copiar(){
    let text = document.getElementById("link").value;
    let t = text;
    let start = '<iframe src="https://onlinegdb.com/embed/';
    end = '?theme=dark" width="100%" height="500px"></iframe>';
    let a = t.slice(0,7);
    if(a == "") alert("O campo está vazio!");
    else
    {
        if(a != "<iframe")
        {
            text = text.slice(38,47);
            let full = start + text + end;
            document.getElementById("link").value = full;
            text = document.querySelector("#link");
            text.select();
            document.execCommand("copy");
            alert("Copiado com sucesso!");
            document.getElementById("link").value = "";
        }
        else alert("O elemento já é um iframe");
    }
}