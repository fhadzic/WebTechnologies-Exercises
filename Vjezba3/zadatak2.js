document.write('<table>');
for (var i = 0; i < 15; i++) {
    if (i == 0)
        document.write("<th>" + 'X' + "</th>");
    document.write("<th>" + (i + 1) + "</th>");
}

for (var i = 0; i < 15; i++) {
    document.write("<tr>");
    for (var j = 0; j < 15; j++) {
        if (j == 0)
            document.write("<th>" + (i + 1) + "</th>");
        document.write("<td>" + (j + 1) * (i + 1) + "</td>");

    }
    document.write("</tr>");
}
document.write('</table>');