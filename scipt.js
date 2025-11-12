for (let i = 0; i < 5; i++) {

    for (let j = 0; j < 10; j++) {
        if (i ==0 ||  i==4||j==0||j==9)  {
            document.write('*&nbsp;&nbsp;');// html entity
        }else document.write('&nbsp;&nbsp;&nbsp;&nbsp;');
    }
    document.write("<br>");
}

for (let i = 0; i < 10; i++) {
    for (let j = 10; j > i; j--) {
        document.write("*&nbsp;&nbsp;");
    }
    document.write("<br>");
}
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
        document.write("*&nbsp;&nbsp;");
    }
    document.write("<br>");
}
for (let i = 0; i <=10; i++) {

    for (let j = i; j <=0; j--) {
        document.write("*&nbsp;&nbsp;");
    }
    document.write("<br>");
}