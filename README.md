# real-estate-care
Deze applicatie is gemaakt door Lloyd Aipassa als afstudeer project voor het onderdeel "Front-end frameworks" 

## Werking applicatie

### login
De applicatie werkt als volgt. De inspecteur logt in, vult zijn gegevens in en komt terecht in het dashboard. Vanuit het dasboard 
kan de inspecteur navigeren naar toegewezen rapportages, uitgevoerde rapportages en de kennisbase. Ook vind je hier een knop voor de instellingen.
In de header kun je ten alle tijden uitloggen en in de footer kun je terug naar de vorige pagina, of terugkeren naar het dashboard. (zie afbeelding).

![Group 3](https://github.com/Lloyd-Aipassa/real-estate-care-eindopdracht/assets/109522422/dfe7b06c-abc1-4f05-b380-f8c448d25d62) <br><br/> 

### toegewezen rapportages
Vanuit het dashboard kan de inspecteur naar de toegewezen rapportages. Deze worden toegekend vanuit de backoffice en bevatten het adres, 
de datum voorwanneer de inspectie uiterlijk uitgevoerd moet worden en het soort inspectie. Als de inspecteur op de groene knop klikt, dan wordt 
hij automatisch doorgestuurd naar het juiste formulier voor de betreffende rapportage. (Zie afbeelding).<br><br>

![Group 1](https://user-images.githubusercontent.com/109522422/237060028-9f3c26e0-5878-4c8f-98e4-2d55f072b360.png)<br><br/> 

### completed pagina
Wanneer het formulier volledig ingevuld is, dan wordt de inspecteur geredirect naar de completed pagina. Hier kan de inspecteur 
het ingevulde formulier bekijken, aanpassen mocht dat nodig zijn, of een nieuw formulier invullen als daar aanleiding toe is. (zie afbeelding).

![Group 1 (1)](https://github.com/Lloyd-Aipassa/real-estate-care-eindopdracht/assets/109522422/89d46704-bc39-40ee-8dd1-88764f1e27bf)<br><br/>

### settings
Verder is er vanuit het dashboard een settings-knop waar de inspecteur bij de instellingen kan. Hier kan de inspecteur zijn wachtwoord
<br>aanpassen, informatie over zichzelf vinden, het thema aanpassen. geluid en notificaties aanpassen.  (zie afbeelding).

![Group 1 (2)](https://github.com/Lloyd-Aipassa/real-estate-care-eindopdracht/assets/109522422/b5dde12b-2220-4266-a4d4-222dbd0f1791)<br><br/> 

### kennis/informatiebase
De vierde en laatste knop op het dasboard is voor de kennis/informatiebase. Dit is een pagina/online bibliotheek van informatie 
<br>over een product, dienst, afdeling of een ander onderwerp. Hier kan de inspecteur alle informatie vinden betreffende de applicatie
of andere zaken die van toepassing zijn betreft zijn functie of Real Estate Care. 

![Group 2](https://github.com/Lloyd-Aipassa/real-estate-care-eindopdracht/assets/109522422/42f989f1-f4e0-4f3d-99fe-5d603124c8f8)<br><br/> 


## prototype

Momenteel is er een prototype gebouwd wat inhoudt dat de applicatie werkt, maar dat er een paar onderdelen nog niet volledig werkend zijn.  De volgende onderdelen zijn nog niet werkend:

 - Twee staps auth. wordt nu nog gesimuleerd.
 - De gebruiker kan momenteel nog niet zijn wachtwoord aanpassen in de instellingen.
 - Er is nog geen gebruik van notificaties
 - Er is nog geen gebruik geluid.
 - Er kunnen nog geen foto's worden opgeslagen middels het het formulier.

**Benodigdheden om de applicatie te draaien:**
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

Om het project volledig te laten werken is er uiteindelijk toch gekozen om een express server op te zetten icm mongoDB (dit viel uiteindelijk best mee om op te zetten, maar misschien interessant om te laten zien voor toekomstige sollicitaties). <br>
 **Hier vind u de code van de express server :**
 https://github.com/Lloyd-Aipassa/First-server 
 <br>
 
 **De live versie van de applicatie vind u hier:** 
 https://real-estate-care-lloyd-aipassa.netlify.app/
  <br>
  
 **Het backoffice formulier om nieuwe inspecties toe te voegen vind u hier:** 
 https://real-estate-care-add-inspection.netlify.app/
  <br>

# Heuristiek

***Heuristiek 1: Zichtbaarheid van de status is belangrijk***
Wanneer er informatie van de database ingeladen moet worden (bijvoorbeeld de openstaande inspecties of uitgevoerde inspecties) dan wordt er een loader getoond zodat de inspecteur weet dat de applicatie bezig is met het inladen van data.

***Heuristiek 2: Het systeem en de echte wereld komen overeen***
De taal is afgestemd op de inspecteur, en er is gekozen voor iconen die een duidelijk beeld scheppen wat betreft het onderwerp. Denk bijvoorbeeld aan een radar icoon voor instellingen, of een icoon met een vinkje die leidt naar alle uitgevoerde inspecties. 

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
De applicatie moet over het algemeen voor de inspecteur duidelijk zijn. Maar in de toekomst zou er eventueel een handleiding wat betreft de applicatie gemaakt kunnen worden. Deze zou dan weer eventueel geplaatst kunnen worden in knowledge base.

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

## Wat zou ik achteraf anders doen
Er is een keuze gemaakt voor vuetify3. Veel onderdelen werkten nog niet ten opzichte van vuetify2. één daarvan was bijvoorbeeld de datepicker. om die reden had ik moeten kiezen voor de standaard html datepicker. Deze werkt, maar qua ux is de standaard html datepicker helaas niet zo goed. Een ander onderdeel wat niet werkte was vuetify3 thema light / dark. Dus moest ik deze zelf bouwen en dit had mij veel tijd gekost. Ik had het project tijdelijk stop gezet om mij meer te gaan verdiepen in de javascript module.  Resumerend had ik moeten kiezen voor vuetify2, of in de toekomst goed uitzoeken of alle benodigde onderdelen werkend zijn of niet.

