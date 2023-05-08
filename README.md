# real-estate-care
Deze applicatie is gemaakt door Lloyd Aipassa als afstudeer project voor het onderdeel "Front-end frameworks" 
Er is een prototype gebouwd wat inhoudt dat de applicatie werkt, maar dat er een paar onderdelen nog niet volledig werkend zijn.  De volgende onderdelen zijn nog niet werkend:

 - Twee staps auth. wordt nu nog gesimuleerd.
 - De gebruiker kan momenteel nog niet zijn wachtwoord aanpassen in de instellingen.
 - Er is nog geen informatie beschikbaar over de inspecteur in de instellingen
 - Er is geen gebruik van notificaties
 - Er is geen gebruik geluid.

**Benodigdheden om de code te draaien:**

 - Node js
 - Een code editor 
 - Een terminal
 - (Ik weet het dit is vanzelfsprekend :)

## Project setup

Na het downloaden van de code kunt u de volgende opdrachten gebruiken om de code te draaien:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

<br><br>

## Overige informatie

Om het project volledig te laten werken is er uiteindelijk toch gekozen om een express server op te zetten icm mongoDB. (dit viel uiteindelijk best mee om op te zetten)
<br>

 **Hier vind u de server code:**
 https://github.com/Lloyd-Aipassa/First-server 
 <br>
 
 **De live versie van de applicatie vind u hier:** 
 https://jolly-dragon-277465.netlify.app/
  <br>
  


***Heuristiek 1: Zichtbaarheid van de status is belangrijk***
Wanneer er informatie van de database geladen moet worden bijvoorbeeld de openstaande inspecties of uitgevoerde inspecties dan wordt er een loader getoond zodat de inspecteur weet dat de data ingeladen wordt.

***Heuristiek 2: Het systeem en de echte wereld komen overeen***
De taal is afgestemd op de inspecteur, en er is gekozen voor iconen die een duidelijk beeld scheppen wat betreft het onderwerp. Denk bijvoorbeeld aan een radar icoon voor instellingen, of een icoon met een vinkje die leidt naar de uitgevoerde inspecties. 

***Heuristiek 3: Gebruiker heeft controle en vrijheid.***
Alles moet goed snel en bereikbaar zijn voor de inspecteur. Vanaf het dashboard kan overal naar genavigeerd. Om deze reden moet de inspecteur ten alle tijden snel naar het dashboard kunnen navigeren en om die reden staat in de footer altijd een knop die de inspecteur terugbrengt naar het dashboard. 
Verder is het mogelijk om ingevulde inspecties aan te kunnen wanneer deze verkeer ingevuld worden, en zelf verwijderd mocht de inspecteur hiervoor kiezen.  

***Heuristiek 4: Consistentie.*** 
Er is rekening gehouden met ux consistentie. Denk aan een logout knop in de header. Navigatie in de footer (back button, dashboard button) en daarnaast moeten alle instellingen vindbaar zijn in het instelling menu. Al blijft dit toch altijd relatief. De terug knop op een Android device zit standaard in de footer, terwijl op een ios device dit altijd bovenin te vinden is.

***Heuristiek 5: fouten.***
Het is uiteraard nog een prototype. Maar onderdelen die nog niet werken in het prototype laten de gebruiker weten dat het nu nog niet functioneel is, zodat de inspecteur niet uit frustratie zijn telefoon uit het raam gooit :) 

***Heuristiek 6: Denk mee met je bezoeker***
Gebruikersgemak is key. Wanneer een openstaande inspectie wordt toegevoegd, dan wordt automatisch het juiste formulier daaraan gekoppeld. De inspecteur hoeft deze er dan niet meer bij te zoeken. In de toekomst zou er eventueel een functie toegevoegd kunnen worden die bij formulieren veel voorkomende antwoorden automatisch aanvult (zo iets als github copilot). Dit zou bijvoorbeeld kunnen door integratie van AI.


***Heuristiek 7: Stem je website af op je bezoeker (Flexibiliteit en efficiency).***
Dit is more or less vanzelfsprekend. De app is volledig afgestemd naar de benodigdheden van de inspecteur. De vier knoppen op het dashboard leiden de inspecteur precies naar de benodigde informatie. Een knop met openstaande inspecties, een knop met uitgevoerde inspecties, een knop met knowledge base en een knop met instellingen.  

***Heuristiek 8: Hou het minimaal en verfijnd.***
Voor deze app heeft dit punt overlap met punt zeven. Het design in minimaal en afgestemd op de inspecteur. Het bevat geen overbodige tekst maar is duidelijk genoeg dat de inspecteur zich makkelijk een weg kan banen door de applicatie.

***Heuristiek 9: Maak foutmeldingen minder eng.***
Hier liggen verbeterpunten. Momenteel als een formulier niet of volledig wordt ingevuld, dan wordt dit aangegeven met een boodschap in grote rode letters. Aan de ene kant is dit duidelijk, aan de andere kant kan dit misschien iets luchtiger. 

***Heuristiek 10: Bied een helpende hand***
De applicatie moet over het algemeen voor de inspecteur duidelijk zijn. Maar in de toekomst zou er eventueel een handleiding betreft de applicatie gemaakt kunnen worden en geplaatst kunnen worden in knowledge base.

# wcag 2.1 a

## Principe 1: Waarneembaar
### Om te voldoen aan WCAG 2.1 Principe 1: Waarneembaar moet ervoor worden gezorgd dat mensen de website (en elementen op de website) kunnen ervaren en gebruiken met de zintuigen die voor hen beschikbaar zijn.

**Geef tekstalternatieven voor niet-tekstuele content.**  
Toegepast

**Geef een transcript voor audio- en videocontent.**  
Niet van toepassing

**Geef videocontent ondertiteling.**  
Niet van toepassing

**Zorg ervoor dat content logisch is gestructureerd.**  
Toegepast

**Gebruik semantische (betekenisvolle) code.**  
Hier ligt nog een verbeterpunt. Te veel gebruik van divjes.

**Zorg ervoor dat elke functie kan worden gebruikt wanneer de standaard tekst grootte wordt verdubbeld.**  
Tekst schaalt mee en wordt duidelijker zichtbaar

## Principe 2: Bedienbaar

### Om te voldoen aan WCAG 2.1 Principe 2: Bedienbaar moet ervoor worden gezorgd dat mensen content op de website kunnen vinden en gebruiken, ongeacht de manier waarop ze er gebruik van maken. Zoals bijvoorbeeld met hulptechnologieën.

**Zorg ervoor dat alles werkt met een toetsenbord.**  
Dit is bijna mogelijk volledig mogelijk, behalve met de dropdown menu. dit zou kunnen omdat er gebruik gemaakt is van vuetify 3  

**Toon de toetsenbordfocus.**  
Dit is nog niet werkend in het prototype. De knoppen veranderen wel van kleur in de fucus state, maar er komt geen extra border omheen.  

**Gebruik beschrijvende titels voor pagina’s en vensters.**  
Niet van toepassing het moet uiteindelijk een mobiele applicatie worden  

**Gebruik beschrijvende links zodat duidelijk is waar het naar toe leidt.**  
Dit is wel getracht, maar niet volledig mogelijk voor de dynamisch gegenereerde links  

**Gebruik geen knipperende inhoud.**  
Wordt niet gedaan

## Principe 3: Begrijpelijk

### Om te voldoen aan WCAG 2.1 Principe 3: Begrijpelijk moet ervoor worden gezorgd dat mensen en software de content kunnen begrijpen en snappen hoe de website werkt.

**Geef software de mogelijkheid om de taal van de pagina te bepalen.**  
Dit is niet van toepassing de applicatie is gericht voor een Nederlands bedrijf

**Maak de tekst leesbaar een begrijpelijk.**  
Toegepast.  

**Zorg ervoor dat alle formuliervelden zichtbare en betekenisvolle labels hebben.**  
Toegepast  

**Maak het gemakkelijk om foutieve invoer in formulieren te herkennen.**  
toegepast.

## Principe 4: Robuust

### Om te voldoen aan WCAG 2.1 Principe 4: Robuust moet ervoor worden gezorgd dat de content betrouwbaar kan worden geïnterpreteerd door een breed scala van user agents (met inbegrip van redelijk verouderde, huidige en verwachte browsers en hulptechnologieën).

**Maak gebruik van foutloze code**
Toegepast

**Zorg voor maximale compatibiliteit met huidige en toekomstige browsers en andere hulpprogramma’s.**  
Getest op de vier grootste browsers.  


**Zorg ervoor dat hulptechnologieën begrijpen waar elke functie voor dient en in welke staat deze zich bevindt.**  
Hier liggen nog verbeterpunten. Neem bijvoorbeeld een site die jouw app hardop leest deze komt niet door de login pagina.  


