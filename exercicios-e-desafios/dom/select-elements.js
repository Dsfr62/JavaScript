function show () {
    let element = document.getElementById("name");
    let el = document.getElementsByName("phone");
    console.log(element.value);
    console.log(el[0].value);
    let query = document.querySelectorAll("div#phones input[name='phone']")
    console.log(query[0])
    let tag = document.getElementsByTagName("input");
    console.log(tag)
};