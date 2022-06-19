function pulaLinha() {
  document.write("<br>");
}
function mostra(frase) {
  document.write(frase);
  pulaLinha();
}
var ano = 2022;

//document.write("Diana tem " + (ano - 1996) + " anos");
mostra("Diana tem " + (ano - 1996) + " anos");
//document.write("Samantha tem " + (ano - 2015) + " anos")
mostra("Samantha tem " + (ano - 2015) + "anos");
mostra(
  " A diferença de idade entre Diana e Samantha é: " + (2015 - 1996) + " anos"
);
mostra(
  "No ano de 2045, Diana terá: " +
    (2045 - 1996) +
    " anos" +
    " e a Samantha terá: " +
    (2045 - 2015) +
    " anos :-)"
);
mostra(
  "No ano de 2060, Diana terá: " +
    (2060 - 1996) +
    " anos" +
    " e a Samantha terá: " +
    (2060 - 2015) +
    " anos :-("
);