# 📌 Rättningsrapport – fed24d-the-last-todos-mikaelakihl

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för både G och VG. Alla funktionaliteter som efterfrågades för VG är implementerade: användare kan visa och återaktivera färdiga todos, skapa nya todos, använda lifting state up i komponentdelning, sortera ordningen på todos samt använda ett grafiskt ramverk (tailwindcss) och egna css-regler på ett strukturerat sätt med användning av flex/grid.

💡 **Förbättringsförslag:**  
Koden är överlag välstrukturerad och fungerar som avsett, men här är några förbättringsförslag: 

1. **Kommentarer:** De kvarstående kommentarerna i koden är delvis på svenska och kan vara oläsliga för en bredare publik, vilket kan göra det svårare för andra utvecklare att ge sig in i din kod. Överväg att översätta dem till engelska och komplettera med förtydligande kommentarer där funktioner och logik kan behöva en extra förklaring.

2. **Säkerställa konsekvens:** Koden använder både lucide-react och vanlig ikontext som t.ex. 'Done', vilket gör att UI kan kännas något inkonsekvent. Det kan förstärka användarupplevelsen att vara mer konsekvent i hur ikoner och text visas.

3. **Formatering av emoticon/emoji med text:** Det kan finnas små estetiska förbättringar i hur texter med emojis/ikoner (som i <option> elementen i TodoForm och filter dropdowns) hanteras, t.ex. att säkerställa vertikalt centrerad text eller en enhetlig marginal mellan emoji och text.

4. **Typvalidering och kantscenarier:** Överväg om det finns fler kantscenarier, särskilt kopplat till användarinmatningar, som behöver hanteras. Till exempel borde applikationen hantera och guida användaren när de försöker lägga till en todo utan en titel eller emotion.

Studenter kan ta nytta av dessa förbättringsförslag dels genom att minska risken för framtida buggar, samt öka läsbarhet och användarvänlighet i den presenterade todo-applikationen.