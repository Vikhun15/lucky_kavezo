# Markdown elmélet

**Jegyzetet összeállította: Oláh Katalin**

- **John Gruber** alkotta meg 2004-ben.
- Egy jelölőnyelv, amely szöveg formázását teszi lehetővé.
- A Markdown használata más, mint a WYSIWYG szerkesztő használata (*pl. Word*).
- Fájl kiterjesztése: *.md* vagy *.markdown*

## Miért érdemes használni?

- A Markdown gyors és egyszerű módja a jegyzetek készítésének, a weboldal tartalmának létrehozásához és a nyomtatásra kész dokumentumok készítéséhez.
- többféle dokumentum készítésére alkalmas:
    - weblap
    - dokumentum
    - jegyezet
    - prezentáció
    - e-mail
    - műszaki dokumentáció
- a Markdown hordozható, egyszerű szöveges fájl, amit tetszőleges szövegszerkesztő programba megnyitható.
- platformfüggetlen
- számos webes és asztali alkalmazás támogatja

# Oldal tagolása

## Címsorok

- 6-féle címsor különböztetünk meg a HTML-hez hasonlóan.
- A címsor jele a `#` jel.
- A jelet és a cím szövegét mindig szóközzel el kell választani.
- Szintaktika:

        # Címsor1

        ## Címsor2

        ### Címsor3

        #### Címsor4

        ##### Címsor5

        ###### Címsor6

### Alternatív szintaxis az 1-es és 2-es szintű címsorokra

- Szintaktika:

        Főcím
        =====

        Alcím
        -----

## Bekezdések

- A bekezdések létrehozásához használjunk egy vagy több üres sort.
- Szintaktika:

        Első bekezdés

        Második bekezdés

## Sortörés

- Ahhoz, hogy egy bekezdésen belül sortörést tudjunk végrehajtani a sorok végén kettő, vagy annál több szóközt kell elhelyezni, és utána sort emelünk.
- Szintaktika:

        Ez egy  
        többsoros  
        bekezdés.

- De használhatjuk a <br> HTML tag-et is bekezdésen belüli sortörésre.

## Listák, felsorolások

### Számozatlan lista, felsorolás

- Számozatlan lista esetén az elemek elejére kell elhelyezni egy `+`, vagy `-`, vagy `*` jelet.
- Bármelyik jelet helyezzük el a kimenetben akkor is az első szintű elemek szimbóluma telikerek, a második szinten üres kör lesz a felsorolásjel.
- Szintaktika:

        - első elem
        - második elem
        - harmadik elem

- Készíthetünk többszintű számozatlan felsorolást is. A további szinteket tabulátorral kell beljebb tagolni.
- Szintaktika:

        - első elem
        - második elem
            - második szint első elem
            - második szint második elem
        - harmadik elem

### Számozott lista, felsorolás

- Számozott lista esetén az elemek elejére egy számot kell írni és a szám után egy pontot.
- Bármilyen arabszámot írthatunk, a Markdown akkor is automatikusan 1-től növekvő sorrendbe fogja sorszámozni a lista elemeit.
- Szintaktika:

        1. első elem
        2. második elem
        3. harmadik elem

- Készíthetünk többszintű sorszámozott felsorolást is. A további szinteket tabulátorral kell beljebb tagolni.
- Szintaktika:

        1. első elem
        2. második elem
            1. második szint első elem
            2. második szint második elem
        3. harmadik elem

## Vízszintes vonal

- Vízszintes vonalat lehet készíteni:
    - három csillaggal (`***`)
    - három aláhúzásjellel (`___`)
    - három kötőjellel (`---`)
- Mind a három esetnek ugyanaz az lesz az eredménye.

# Szövegformázás

## Félkövér stílus

- A félkövér stílus jele a `**` vagy `__` jel, amit a kiemelendő szöveg elé és mögé kell elhelyezni.
- Szintaktika:

        **kiemelendő szövegrész**
    
    vagy

        __kiemelendő szövegrész__

## Dőlt stílus

- A dőlt stílus jele a `*` jel, vagy az aláhúzás jel (`_`), amit a kiemelendő szöveg elé és mögé kell elhelyezni.
- Szintaktika:

        *kiemelendő szövegrész*

    vagy 

        _kiemelendő szövegrész_

## Félkövér és dőlt stílus egyszerre

- Ha egyszerre szeretnénk a két stílust alkalmazni akkor a 3 darab `*`, vagy 3 darab `_` jelet kell használnunk.
- Szintaktika:

        ***kiemelendő szövegrész***
    
    vagy
    
        ___kiemelendő szövegrész___

- Alternatív megoldási lehetőségek:

        **_kiemelendő szövegrész_**
    
    vagy

        __*kiemelendő szövegrész*__

# (Blokk)idézetek

- A szöveg, vagy bekezdés elé `>` jelet kell elhelyeznünk.
- A blokkokon belül nem csak bekezdéseket, hanem elhelyezhetünk más elemeket is.
- Szintaktika:

        > Ez egy blokkidézet.

## Egymásbaágyazott blokkidézetek

- Az idézeten belül további blokkokat a `>>` jellel tudjuk elkészíteni.
- Szintaktika:

        > Ez egy blokkidézet.
        >> Ez a beágyazott blokkidézet.

# Kódblokkok

## Kód kiemelés

- A szövegen belül egy-egy rövid kódrész kiemelését a backtick (`) jellel tehetjük meg.

        Kiemeljük a `<html>` tag-et.

## Egyszerű kódblokk

- Ha csak a kód szintaktikáját, felépítését szeretnénk megmutatni akkor elég, ha a kódot két tabulátorral beljebb húzzuk.

        Itt mutathatnánk be egy kód felépítését, vagy egy kód példát.
        

## Kódblokk és a backtick jel

- Ha kódblokkon belül szeretnénk backtick jelet használni, akkor a kódblokkot dupla backtick jellel kell körbe venni.

        ``A kódon belül `aposztróf kijelölést` szeretnénk használni.``

## Kódblokk és a szintaxis kiemelés

- A Markdownban ha a kódblokkon belül szintaxis kiemelést szeretnénk használni, azaz a kódhoz színes kiemelést adunk hozzá azt a három backtick jellel bekerekített kódblokhoz tudjuk hozzárendelni.
- A kezdő 3 backtick jel után be kell írni szóköz nélkül, hogy melyik nyelvet szeretnénk használni.

        ```json
        {
           "firstName": "Jakab",
           "lastName": "Gipsz",
           "age": 25
        }
        ```

# Linkek

- A szögletes zárójelek között kell meg adnunk a link szövegét és utána kerekzárójelbe a hivatkozást.
- Szintaktika:

        [Link szövege](link hivatkozása)

- Ha szeretnénk hozzá feliratot is készíteni, akkor a hivatkozás után idézőjelek között adhatjuk meg a buborék szöveget is.
- Szintaktika:

       [Link szövege](link hivatkozása "Felirat")

- Ha az url, vagy email címből rögtön linket szeretnénk készíteni akkor a `<` és `>` jelek közé kell rakni.
- Szintaktika:

        <Honlap url>

vagy

        <email cím>

## Linkek formázása

- Ha szeretnénk félkövér vagy dőlt stílussal kiemelni akkor a zárójeleken kívül lehet használni a stílushoz tartozó jeleket.
- Például a félkövér stílusra:

       **[Link szövege](link hivatkozása "Felirat")**


# Képek

- A kép beillesztését felkiáltó jellel (`!`) kell kezdeni. Utána szögletes zárójelek között a kép helyettesítő/alternatív szövegét határozhatjuk meg. Legvégül a kerek zárójelek között pedig a kép elérési útvonalát kell megadnunk.
- A kép elérési útvonala után szóközzel idézőjelek (`"`) között meghatározhatjuk a kép buborék szövegét is.
- Szintaktika:

        ![Helyettesítő szöveg](Kép elérési útvonala "Kép buborék szövege")

## Hivatkozás készítése képből

- Megoldható, hogy egy képből készítsünk egy linket.
- A link és a kép kódja kombinálható. 
- Szintaktika:
        
        [![Helyettesítő szöveg](Kép elérési útvonala "Kép buborék szövege")](link hivatkozása "Felirat")


# Táblázat

- A táblázat oszlop fejlécének kialakításánál három vagy több kötőjelet kell használni.
- A pipe (`|`) jel a cella határoló jele.

        | fejléc 1    | fejléc 2    |
        | ----------- | ----------- |
        | cella 1.1   | cella 1.2   |
        | cella 2.1   | cella 2.2   |

## Táblázaton belüli igazítás

- a kettőspont segítségével (`:`) határozhatjuk meg, hogy a cellán belül a tartalom hogyan legyen igazítva vízszintesen.
- Balra igazított: `:---`
- Középre igazított: `:---:`
- Jobbra igazított: `---:`
- A kötőjelek száma legalább 3.
- Szintaktika:

        | fejléc 1    | fejléc 2    | fejléc 3  |
        | :---        |  :----:     | ---:      |
        | cella 1.1   | cella 1.2   | cella 1.3 |
        | cella 2.1   | cella 2.2   | cella 2.3 |  

# Hasznos linkek

- https://www.markdownguide.org/
- https://daringfireball.net/projects/markdown/syntax 