import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import prusImg from "@/assets/prus.jpg.asset.json";
import lalkaImg from "@/assets/lalka.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Bolesław Prus i „Lalka” — strona informacyjna' },
      {
        name: "description",
        content:
          'Strona o Bolesławie Prusie i jego powieści „Lalka”: biografia, twórczość i informacje.',
      },
    ],
  }),
  component: PrusSite,
});

type TabId = "info" | "biografia" | "tworczosc" | "omnie";

const TABS: { id: TabId; label: string }[] = [
  { id: "info", label: "Informacje" },
  { id: "biografia", label: "Biografia B. Prusa" },
  { id: "tworczosc", label: "Twórczość B. Prusa" },
  { id: "omnie", label: "O mnie" },
];

function StaticImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-full items-center justify-center overflow-hidden rounded-md bg-[var(--prus-bg-soft)] min-h-[260px]">
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
}

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/\n\s*\n/)
        .map((p, i) => (
          <p key={i} className="mb-4 whitespace-pre-line leading-relaxed text-[15px]">
            {p.trim()}
          </p>
        ))}
    </>
  );
}

const WSTEP = `Cześć! Strona (wciąż w rozbudowie) zawiera różnorodne informacje dotyczące literatury, a więc pisarzy, książek, epok literackich, filmowych ekranizacji. Skupiam się na przełomie XIX/XX wieku, jestem popularyzatorem twórczości polskich pisarzy, szczególnie Bolesława Prusa i jego najsłynniejszych powieści. Jeśli też cenisz „Lalkę", lubisz wracać do najlepszej klasyki polskiej literatury, szanujesz lub chcesz lepiej poznać najcenniejsze książki — ZAPRASZAM!`;

const TRESC1 = `Ten znakomity pisarz to także humanista, etyk i patriota, który namawiając Nas do bycia „lepszymi" ludźmi kierował się bezinteresownie i wyłącznie naszym dobrem i dobrem kraju. Tacy ludzie zasługują na pamięć i szacunek, warto też zrozumieć ich pragnienia, dokonania i cele, o które walczyli karabinem, słowem lub piórem. Nie mam zamiaru i prawa „dydaktyzować" lub pouczać, lecz chcę zwrócić Twoją uwagę na ciekawe aspekty życia Bolesława Prusa i pokazać go z innej, mniej znanej strony.`;

const ARTYKUL1 = `Bolesław Prus – co o nim wiesz?

Mam nadzieję, Szanowny Czytelniku i Droga Czytelniczko, że już znasz powszechny pogląd, że „Bolesław Prus był pisarzem, autorem słynnej powieści pt. „Lalka" oraz kilku małych, niezwykle udanych opowiadań lub nowel, na przykład „Kamizelki", „Antka", „Katarynki" i zgadzasz się z tą tezą. Zatrzymajmy się chwilę przy powyższym stwierdzeniu, gdyż taką właśnie wiedzę ma większość polskich czytelników, o ile tylko uważali na lekcjach języka polskiego i upływ czasu nie zatarł im tego faktu w pamięci. Szczerze dopowiem, iż obawiam się, czy niezbyt optymistycznie „wysoko" ustaliłem punkt wyjściowy tej powszechnej wiedzy i początek mojej opowieści o Prusie, ale jestem optymistą, więc przejdźmy dalej.

Znając powyższe fakty, skrótowo dopowiem, że do powieści autorstwa Prusa, „okazałych" jakością, przesłaniem i objętością stron, zaliczamy także „Emancypantki", „Faraona" i „Placówkę", a tych „krótszych" – „Anielkę", „Dzieci" i „Dusze w niewoli", zaś zwięzłych i pięknych nowel i opowiadań napisał Prus co najmniej dwadzieścia! Nie będę więc ich tutaj wyliczał, ale zastanów się teraz przez krótką chwilę nad moim pytaniem: Ile znasz i potrafisz wymienić dzieł Prusa nie licząc kilku oczywistych? Ich tematyki nie zamierzam dzisiaj omawiać, ale najwygodniej jest zerknąć na półkę z „Prusem" w jakiejkolwiek większej bibliotece lub księgarni, albo wpisać po prostu hasło „Prus" do wyszukiwarki wikipedia.org (z google.com bywa różnie), a wtedy szybko odnajdziesz spis i linki obszernych opisów większości tytułów autorstwa Prusa, a to pozwoli się zreflektować.

Skoro poznaliśmy już nieco obszerniej jego literacki dorobek, nie omawiając wszak tematyki i treści, czas na pierwszą niespodziankę: Otóż fakt, że Bolesław Prus był pisarzem to, według mnie, około 10% wiedzy o nim, czyli wiedzy, kim był, co myślał, czego się bał, o co walczył, o co apelował i prosił, przed czym przestrzegał Nas, Polaków i czego pragnął dla udręczonego kraju, ukochanej ojczyzny, będącej wówczas pod zaborami?

Dlaczego zaledwie 10%? Pozwolę sobie na krótki przykład. Wiedza na poziomie: „Prus? Pisarzem!" kojarzy mi się z pytaniem: „Warszawa? Stolica!" Ja zaś pragnę Twojej odpowiedzi w stylu: „Warszawa? Stolica, prawie 2 milionowe miasto w Polsce centralnej nad Wisłą, założone w XIII wieku. Ośrodek polityczny, kulturalny, naukowy i gospodarczy, którego 1300 obiektów wpisano do rejestru zabytków. Miasto słynne między innymi z… i wymieniasz kilkanaście zabytków". Nieźle, co? Zatrzymajmy się na tym etapie. Właśnie taką wiedzę o Prusie zaraz zdobędziesz i przejdę do faktów.

Ustaliliśmy na początku bezsporną prawdę, że Bolesław Prus był pisarzem, więc doprecyzuję tylko, że był przede wszystkim prozaikiem, nowelistą, powieściopisarzem, a w początkach kariery zawodowym humorystą, chociaż wesołe „Na kłopoty Babuni" lub „Ze wspomnień cyklisty" powstały znacznie później. A teraz czas na najważniejsze, czyli uzupełnienie wiedzy i faktów dotyczących życia Bolesława Prusa, które dla łatwiejszego zapamiętania wymieniłem (zapewne nietypowo) w liście numerowanej, zaczynając numerację od numeru dwa, gdyż jedynką jest „pisarz". Być może tak łatwiej całość spamiętać? Prus był więc:

2. Współtwórcą polskiego realizmu, czołowym przedstawicielem pozytywizmu i naturalizmu;

3. Najwytrwalszym kronikarzem Warszawy i wybornym felietonistą, czym zajmował się aż 37 lat (napisał 345 kronik w „Kurierze Warszawskim", 373 felietonów w „Kurierze Codziennym" oraz 178 kronik w „Tygodniku Ilustrowanym");

4. Publicystą i de facto pierwszym polskim profesjonalnym, „zawodowym" literatem, chociaż dzisiaj nazwalibyśmy go raczej dziennikarzem;

5. Estetykiem i myślicielem, a jego teksty charakteryzuje wyraźny dydaktyzm;

6. Teoretykiem prasy, rzeźby, malarstwa, architektury, teatru, fotografii, grafiki artystycznej (i nie jest to lista kompletna);

7. Popularyzatorem wiedzy i nauki – prowadził tzw. odczyty, czyli prelekcje dla robotników i rzemieślników oraz ludzi najuboższych;

8. Utylitarystą i propagatorem tak zwanej „pracy u podstaw";

9. Społecznikiem – według własnej koncepcji „bycia użytecznym";

10. Patriotą i przykładnym obywatelem, szczególnie miasta Warszawy, w której został pochowany – na jego nagrobku widnieje sentencja „Serce serc", które trafnie podsumowało jego szacunek społeczeństwa.

Czy to dużo? Myślę, że tak i bardzo mnie ciekawi, czy Ty też tak sądzisz? Powyższe punkty wymieniłem, gdyż taki właśnie był Bolesław Prus, a właściwie Aleksander Głowacki, bo tak się naprawdę nazywał. Mówiąc lub pisząc o Bolesławie Prusie, zawsze tłumaczę już na początku moim Czytelnikom lub Słuchaczom, że nie mam zamiaru kreować wyidealizowanej, wyolbrzymionej lub jakiejś pompatycznej postaci Prusa, gdyż staram się bazować tylko na faktach, które poznałem, czytając możliwie dużo jego własnych tekstów (kronik, notatek, listów, książek) oraz rzetelnych opracowań jego życia i twórczości, napisanych przez wybitnych badaczy, szczególnie tzw. Prusologów. Nie chcę teraz wchodzić w szczegóły, ale proszę mi wierzyć na słowo, że Głowacki vel Prus błądził, trudził się, bał się, szukał, pytał, cierpiał, chorował, sprzeczał się i miewał własne, ale konfrontacyjne osądy jak każdy z Nas. Sęk w tym, że jego bogata i ciekawa osobowość zasługuje na lepsze poznanie, pamięć i szersze uznanie niż tylko jako pisarza i autora „Lalki".

Zdaję sobie sprawę, iż ciężko jest pozyskać czyjeś zaufanie i uznanie, zdobyć szacunek i autorytet, dlatego właśnie zdecydowałem się w moim felietonie przemówić głosem najtęższych „głów i umysłów", które poświęciły mnóstwo czasu, energii i siły, aby możliwie dobrze zbadać i poznać osobowość Bolesława Prusa. Ich właśnie określamy umownie „Prusologami", czyli badaczami i ekspertami całości życiorysu. Uzasadnienie wszystkich dziewięciu punktów, które wymieniłem powyżej, to dobry pretekst do kolejnej i obszernej biografii Prusa, ale dzisiaj zachęcam do lektury konkretnych książek, w których znajdziesz rzetelne i szczegółowe uzasadnienie moich punktów (szczególnie od punktu 2 do 9).

Zacznę nietypowo – od końca. Otóż bycie społecznikiem, patriotą i przykładnym obywatelem, a raczej Wielkim Polakiem, wiąże się bezpośrednio z historią całego życia Aleksandra Głowackiego. Miał trudne dzieciństwo, a już w wieku szesnastu lat wziął udział w Powstaniu Styczniowym i sam później skonkludował: „Ja, dawny ja, pochowany jestem razem z moimi nadziejami pod Białką, skąd drugi Ja wyrósł: dwumiesięczne szaleństwo, zwątpienie w tego rodzaju zabawy i kalectwo…" – ciekawostek i niesamowitych faktów są setki. Dlatego zachęcam do poznania jego biografii w książce Moniki Piątkowskiej pt. „Prus. Śledztwo biograficzne", (Warszawa, wyd. ZNAK, 2017 r.). lub znaczenie starszej, bardziej szczegółowej i obiektywnej „Kalendarz życia i twórczości Bolesława Prusa" autorstwa Krystyny Tokarzówny i Stanisława Fity (Warszawa, wyd. PIW, 1969 r.). W nich poznasz także wyjaśnienie punktów siódmego i ósmego, a więc zamiłowanie Prusa do potęgi i roli wiedzy i nauki dla rozwoju społeczeństwa i kraju. Prus był propagatorem utylitaryzmu i pracy u podstaw, bo właśnie „wsparta" najbiedniejsza i największa warstwa narodu może najszybciej pomnożyć bogactwo ogólnonarodowe i przyczynić się do odzyskania upragnionej niepodległości. Ostrzegał też przed grożącą germanizacją i rusyfikacją, usilnie działał społecznie, popularyzował powszechną higienę, edukację, aktywność fizyczną (miłośnik rowerów!). Warto wiedzieć, iż przyczynił się do powstania Kasy Pożyczkowej dla Robotników i Rzemieślników, Towarzystwa Kolonii Letnich, Kasy im. J. Mianowskiego, Stowarzyszenia Kursów dla Analfabetów Dorosłych, Komitetu Obywatelskiego Pomocy dla Robotników i ich Rodzin; był prezesem Towarzystwa Literatów i Dziennikarzy Polskich. Czy te dokonania nie są przekonującym argumentem?

Uzasadnienie i kolejne informacje dla punktów od pierwszego od szóstego zawarte są w czterech książkach, które przedstawiam znowu numerycznie dla większej przejrzystości:

1. „Bolesław Prus jako estetyk". Autor: Cezary Zalewski, wyd. Uniwersytetu Jagiellońskiego, Kraków 2014 r. Zawiera dziewiętnaście artykułów.

2. „Bolesław Prus publicysta – redaktor – teoretyk prasy". Autor: Wiesław Sonczyk, wyd. Elipsa, Warszawa 2000 r. Zawiera ona trzy rozdziały z trzydziestoma poszczególnymi punktami (tematami).

3. „Bolesław Prus pisarz nowoczesny". Redakcja: Jakub A. Malik, wyd. KUL, Lublin 2009 r. Zawiera czternaście artykułów, każdy innego autorstwa.

4. „Bolesław Prus – humorysta w wielkim stylu". Autor: Edward Pieścikowski, Wydawnictwo Poznańskie, Poznań 2012 r. Zawiera trzynaście artykułów.

Każda z powyższych książek zaskakuje wnikliwością i obszernością omawianych tematów. Zawierają one w sumie 76 opracowań szczegółowych (sumarycznie liczących około 1300 stron tekstu) i informuję o tym nie w celu zniechęcenia lub przestraszenia ich liczbą, lecz wręcz przeciwnie! Chcę podkreślić fakt wielkiego wyboru, rozmaitość zagadnień, pokazać obszerny zasób zaskakujących i ciekawych tematów. Wybierz tematykę, która Ciebie zainteresowała, jeśli tylko chcesz poznać Prusa, a przy okazji sprawdzić (i potwierdzić) wiarygodność mojej listy dziesięciu cech Aleksandra używającego pseudonimu Bolesław. Każdy znajdzie w nich dla siebie ciekawy wątek, a dla przykładu i lepszej orientacji w ich tematyce wymienię zaraz przykładowe rozdziały, nie zdradzając jednak ich puenty i konkluzji autorów, aby nie „spojlerować" (coraz modniejsze określenie) i nie zepsuć przyjemności samodzielnego czytania.

Cezary Zalewski w książce „Bolesław Prus jako estetyk" szczegółowo opowiada i przedstawia zaskakująco trafne i wciąż aktualne refleksje Prusa dotyczące fotografii, muzyki, sztuki, malarstwa, teatru, rzeźby, architektury. Dowiemy się także, co pisarz i miłośnik nowych wynalazków, technologii, postępu myślał o kinetoskopie, kinematografie, fonografie i biopleografie (tajemnicze nazwy, nieprawdaż?). Poznamy jego opinie (ale nie sugestywne, lecz krytyczne i uzasadnione), które wyraził w swoich kronikach: o kreacjach artystycznych Heleny Modrzejewskiej, obrazach Matejki, Malczewskiego, Siemiradzkiego, koncertach Paderewskiego, Noskowskiego i wielu innych, wybitnych Polakach. Osobiście zgadzam się z poglądem Prusa, który pisząc o roli sztuki w roku 1885, stwierdził, że powinna ona „wskazywać nowe przedmioty, nowe własności, nowe zjawiska".

Obszerne opracowanie pt. „Bolesław Prus – publicysta, redaktor, teoretyk prasy" Wiesława Sonczyka to niezwykłe źródło wiedzy o Prusie. Zawiera trzy rozdziały z trzydziestoma poszczególnymi punktami (tematami), w których poznamy między innymi jego społeczną i dziennikarską misję, opinie o roli gazet, gorzkie refleksje dotyczące polskiego społeczeństwa i (uwaga!) oddziaływania reklam. No właśnie, już w maju roku 1892 w swojej kronice tygodniowej „Małe słówko o Nałęczowie" Prus napisał rzecz dziś oczywistą i boleśnie aktualną: „Reklama jest hańbą wieku i obłąkaniem Europy. A że u nas coraz głośniejsze znajduje echo i coraz częściej wykrzywia nam rozsądek, więc godzi się przeciwko niej protestować (…) Reklama sprawia to, że zamiast podziwu dla istotnej wielkości bardzo często podziwiamy zarozumialców i szarlatanów, że nawet zatraciliśmy zdolność oceniania wielkich wypadków i ludzi (…) Wobec reklamy wszyscy zgłupieliśmy, straciliśmy odwagę i charakter" (str. 331 w książce W. Sonczyka). Ostra wypowiedź, ale tak się składa, że zawodowo nauczam między innymi marketingu (w szkole średniej) i etyki (w szkole podstawowej), a temat znaczenia i oddziaływania reklamy omawiam z uczniami, realizując podstawę programową i przytoczona w dużym skrócie wypowiedź Prusa wcale nie straciła na znaczeniu, warto ją przedyskutować nawet dzisiaj. Jako ostatnią zachętę dopowiem, że książka Wiesława Sonczyka zawiera wiele smutnych prawd opisujących „choroby" ciała, duszy i nastoju Prusa, ale też unikatowe wiersze (Prus poetą?) napisane między innymi do cioci Domiceli i brata Leona. Oto jego króciutki „krakowiak" z humorystycznej gazetki szkolnej pt. „Kurier Łobuzów": „Jestem sobie tęgi student, wąsy mi urosły – Panienki się uśmiechają, (Chór łobuzów za kulisami) – Że studenty osły!"

Książka „Bolesław Prus pisarz nowoczesny", pod redakcją Jakuba A. Malika, zawiera 14 artykułów różnych autorów, w tym m. in. opis dalszych losów Wokulskiego i analizę postaci w „Lalce", wizję Prusa pt. „Stulecie Odrodzenia Polski 1908 – 2008", a więc futurystyczne losy Polski „za sto lat", sens wykładu profesora Dębickiego („alter ego Prusa") w „Emancypantkach", wypowiedzi Prusa o Żydach, rewolucji roku 1905, religii, mediumizmie, Ochorowiczu, Mickiewiczu i Sienkiewiczu. Dowiesz się, Czytelniku, jak wiele wspólnego ma Czesław Miłosz z Prusem i dlaczego jest on „pisarzem nowoczesnym – dla przykładu zacytuję Macieja Glogera (UKW w Bydgoszczy): „Prus jest niewątpliwie pisarzem i myślicielem nowoczesnym, a więc aktualnym i wartym studiowania także dziś. Czytając Prusa, na pewno lepiej będziemy rozumieli zjawiska nas nurtujące i rzeczywistość nas otaczającą" (str. 222).

Edward Pieścikowski (UAM w Poznaniu) w swojej książce „Bolesław Prus – humorysta w wielkim stylu" omówił 13 różnych kwestii, w tym konkretne wątki w np. „Anielce", „Omyłce", „Lalce", „Emancypantkach" i „Placówce". Możemy dokładnie zapoznać się z ówczesnymi „grzechami narodowymi" (str. 140), rozważania Prusa o wynalazkach, kosmosie, religii, „Młodej Polsce". Zostały tutaj wymienione niezrealizowane pomysły literackie, jego liczne aforyzmy i wielowątkowe idee tematyczne zaskakujące treścią, gdyż dotyczą także kobiet, mężczyzn, dzieci, duszy, dzieci, klimatu i burzy (str. 112). Autor książki konkludował m. in.: „Tymczasem jego materiały rękopiśmienne (…) pokazują, że nie sposób pisarzowi imputować osłabienia, czy skostnienia wyobraźni, nie sposób zarzucać wyjałowienia problemowego i tematycznego. Snuł przecież – jak widzieliśmy – nader śmiałe projekty literackie, zapisywał wręcz intrygujące pomysły fabularne, nie mieszczące się już w konwencji realistycznej" (str. 135).

Reasumując powyższe wiadomości i przykładowe, całkiem pobieżne opisy, zawartości czterech konkretnych książek wybranych przeze mnie, przedstawionych z tytułu i treści, chciałbym ponownie podkreślić cel mojego artykułu: Warto zainteresować się Prusem! Tak po prostu, bo warto, sięgając po jego książkę, której jeszcze nie znasz lub kilka felietonów, których treść może wciąż zaskoczyć stylem, współczesnością i mądrością przekazu. Samych kronik napisał Prus ponad tysiąc, więc wybór jest spory i szczerze wyznam, że sam nie poznałem wszystkich!

A może przeczytasz jakąś konkretną książkę o Prusie? Jest ich wiele, ja wymieniłem tylko cztery, które są niestety mało znane, a zasługują na uwagę, gdyż opisują one wiarygodnie, ciekawie i wnikliwie poszczególne aspekty jego życia czy światopoglądu. Polecam teraz te konkretne teksty opisujące Bolesława Prusa. W tym roku obchodziliśmy 110 rocznicę śmierci i 175. rocznicę urodzin Prusa, znajdź więc chwilę na chociaż jedną książkę, gdyż warte są Twojego czasu. Już teraz życzę miłej lektury i pożegnam się z Tobą tak, jak między Prusofilami wypada: „Ku chwale Prusa!"

T.B.

Profil FB: https://www.facebook.com/WokulskiStach`;

const ARTYKUL2 = `„Lalka" i jej 5 kontynuacji, czyli dalsze losy Wokulskiego.

Książki posiadają wielką siłę i magię, szczególnie te będące arcydziełami i skarbami literatury danego kraju. Bez wątpienia do tej elity należy powieść „Lalka" autorstwa Bolesława Prusa. Jej treść, czyli przekaz i refleksja czytelnika po jej uważnym, dojrzałym przeczytaniu, potrafią wywrzeć silne emocje i zadumę, gdyż rację miał pisarz twierdząc w roku 1889 w jednej ze swoich kronik tygodniowych, że: „kto 'Lalkę' przeżył, wiele przeżył."

Mam nadzieję, że znasz już tę książkę i jeśli jako lektura szkolna wydała się zbyt długa lub nudna, daj jej proszę drugą szansę. Kto odkrył jej potencjał ten wie, że potrafi ona stać się „przeżyciem egzystencjalnym" i znam setki osób, które podobnie jak ja, mają ją żywo i bezustannie w pamięci. Dlaczego? Nie będę dziś pisał o sile i magii tej książki, gdyż to temat na osobny felieton, lecz skupmy się na równie ważnym pytaniu: „Co działo się dalej?" - udzielę więc arcy ważnej odpowiedzi na tę dręczącą nas kwestię.

Jakie były późniejsze koleje wszystkich jej bohaterów, skoro Bolesław Prus pozostawił zakończenie otwarte? Autor celowo nie rozstrzygnął losów jej postaci (z wyjątkiem Ignacego Rzeckiego), a my musimy to uszanować i nie każdy czytelnik pragnie kontynuacji jej fabuły.

Po przeczytaniu książki większość osób analizuje wydarzenia i zachowania bohaterów „Lalki" snując przewidywania dalszych kolei ich życia: Czy Izabela Łęcka pozostanie w wiedeńskim klasztorze? Wokulski zginął wysadzając ruiny zamku w Zasławiu, czy wrócił do pracowni Geista w Paryżu? Co się stało ze Stawską i Ochockim, którzy otrzymali pokaźne sumy pieniędzy w testamentach – ona od Rzeckiego, on od Stacha? Jak długo żył jeszcze doktor Szuman i działał sklep prowadzony przez młodego Szlangbauma wobec nasilających się antyżydowskich zachowań? Te i dziesiątki innych pytań może zadać sobie każdy z czytelników; ja przedstawię Tobie pięć możliwych i „gotowych" odpowiedzi, a jedną opiszę szczegółowo.

Od wielu lat staram się czytać wszystkie dostępne książki, opracowania, wartościowe artykuły dotyczące pisarza i jego twórczości. Wybrałem i przedstawiam w kolejności alfabetycznej pięć tytułów, które zostały opublikowane w dużych nakładach (są łatwo dostępne i tanie), mają różnorodne pomysły, więc potrafią trafić w różne gusta literackie:

1. „Alkaloid" autor (nieznany) pod pseudonimem Aleksander Głowacki. Wyd. Powergraph, Warszawa, 2012. Moja własna recenzja w kluczowych słowach: Wokulski w Azji Wschodniej, podróże w czasie, narkotyki, Tesla, Einstein, Witkacy, Ochocki, fantastyka.

2. „Córka Wokulskiego" autor Roman Praszyński. Wyd. mwk, Warszawa, 2012. Moja własna recenzja w kluczowych słowach: córka Wokulskiego Natalia, cyrk, przemoc, Rosja, seks, wulgaryzmy, nieobyczajna Łęcka, archanioły, Emil (młody Głowacki) – syn Prusa.

3. „LALKI" autorka Alicja Pruś. Wyd. Siedmioróg, Wrocław, 2013. Moja własna recenzja w kluczowych słowach: Wokulski, śledztwo, baron Krzeszowski, Meliton, Stawska, lalki, Maruszewicz, opis wielu miejsc Warszawy.

4. „Stanisław i Izabela – Epilog Lalki" autor Piotr S. Wirski. Wyd. Oficyna Wydawnicza MOST, Warszawa, 1997. Moja własna recenzja znajduje się poniżej listy, gdyż tej książce poświęcę więcej uwagi.

5. „Wokulski w Paryżu" autor Krzysztof Rutkowski. Wyd. słowo/obraz/terytoria, Gdańsk, 2010. Moja własna recenzja w kluczowych słowach: Wokulski, Paryż, Suzin, mazagran i pijaństwo, Geist, melancholia i filozofia.

W tym felietonie (zapraszam do wcześniejszych) skupię się konkretnie na książce pt. „Stanisław i Izabela – epilog Lalki" autorstwa Piotra S. Wirskiego i tutaj szybko wyjaśnię, że tajemniczy autor przyjął pseudonim dawnego rządcy kamienicy kupionej przez Wokulskiego, przyjaciela Ignacego Rzeckiego. Nie wyjawię puenty tej książki, aby „nie spojlerować" i zachęcam do jej przeczytania, gdyż jest tego warta. Otóż jest ona „najdelikatniejszą" oraz najszczęśliwszą z wszystkich znanych mi kilkunastu mniej lub bardziej popularnych, oficjalnych i „fachowo" napisanych kontynuacji oryginalnej „Lalki". To jej wielka zaleta. Napisana została ze smakiem i literackim rozsądkiem, czyli nie epatuje seksem, przemocą, wulgaryzmami, akcją science fiction.

Myślisz może, że jest z tego powodu nudna? Nie, jest po prostu napisana w duchu i poszanowaniu oryginalnej koncepcji literackiej samego Bolesława Prusa. Oto pierwsze zadanie z jej tylnej okładki: „Stanisław Wokulski nie popełnił samobójstwa, nie zginął w ruinach Zasławia, a Izabela Łęcka ani nie schroniła się w klasztornej celi, ani nie rzuciła w wir nowych romansów." Mało tego, ucieszy serce każdego czytelnika fakt, iż Łęcka przekazała kwiaty na grób Rzeckiego, Stach odnalazł szczęście i odniósł niebywałe sukcesy, które zostały wreszcie zauważone i docenione! Dowiemy się w tej książce dokładnie o losach Suzina, Wąsowskiej, Ochockiego, Mraczewskiego i Klejna. Zwiedzimy wraz z bohaterami wiele miast (na pewno polubisz portowe Ipswich), a nawet popłyniesz do Afryki! Wielkie wrażenie zrobi na Tobie wewnętrzna przemiana Izabeli Łęckiej. Dzięki tej książce my także uspokoimy się emocjonalnie znając możliwą (hipotetyczną) odpowiedź na dręczące pytania: „Jak potoczyły się losy bohaterów 'Lalki', co będzie dalej?". Nie ukrywam, że książka kończy się happy endem, jest diametralnie inna od wyżej wspomnianych „alternatyw" i ucieszy serce zatroskanych czytelników! Celowo wspomniałem niewiele jej treści, abyś chciał(a) ją poznać.

Już wiesz, że mamy do wyboru kilka publikacji, o których powyżej wspomniałem, a każda minuta poświęcona „Lalce" lub książkom jej dedykowanym jest wartościowa, dlatego często powtarzam i wspierajmy hasztag #lalkaforever

Oprac. T.B.

www.instagram.com/wokulski_prus/
www.facebook.com/WokulskiStach/`;

const BIOGRAFIA = `Młodość pisarza

Znany pod pseudonimem Bolesław Prus pisarz Aleksander Głowacki urodził się 20 sierpnia 1847 roku w Hrubieszowie. Jego rodzice wywodzili się z zubożałej szlachty i posiadali trochę ziemi, która jednak nie przynosiła im zysków. Chłopiec szybko stał się sierotą. Po śmierci matki i ojca kilkulatkiem zajęła się babka, a parę lat później zamieszkał u ciotki Domiceli Olszewskiej w Lublinie. Tam także rozpoczęła się jego edukacja. Kontynuował ją w Kielcach, dokąd przeprowadził się wraz z bratem Leonem. Za jego namową wziął udział w powstaniu styczniowym, podczas którego został ranny i dostał się do niewoli. Tylko dzięki wstawiennictwu ciotki i młodemu wiekowi udało mu się powrócić do domu. Po ukończeniu gimnazjum Prus zdecydował się na studia na Wydziale Matematyczno-Fizycznym w warszawskiej Szkole Głównej. Borykał się jednak z problemami finansowymi, gdyż praca korepetytora nie przynosiła mu dużych zysków, co poskutkowało porzuceniem nauki. Imał się różnych zawodów, w końcu próbując swoich sił w pisaniu tekstów.

Rozpoczęcie działalności pisarskiej

Za debiut Prusa powszechnie uważa się artykuł społeczny „Nasze grzechy" opublikowany w 1872 roku na łamach czasopisma „Opiekun Domowy". To właśnie wtedy rozpoczęła się przygoda pisarza z dziennikarstwem. Ukazały się zarówno jego pierwsze teksty popularnonaukowe, jak i felietony. Zdecydował wówczas, że swoim nazwiskiem podpisze tylko poważne artykuły, a inną twórczość artystyczną będzie wydawał pod pseudonimem. Profesja publicysty przyniosła Prusowi stabilizację finansową i możliwość rozwoju w wielu kierunkach. Wiązał się z różnymi czasopismami, a jego dużym sukcesem stało się objęcie redakcji tygodnika „Nowiny" w 1882 roku. Nieco wcześniej, bo pod koniec lat 70., miał miejsce rozkwit jego kariery nowelisty. Powstało parę krótkich opowiadań, a następnie także bardziej rozbudowanych powieści. Ukazywały się one najpierw nie w wersjach książkowych, lecz na łamach gazet. W latach 1887-1889 napisał „Lalkę", dzięki której zyskał ogromną popularność. Ożywiona działalność publicystyczna i społeczna sprawiła, że stał się cenionym autorytetem. Pogrzeb zmarłego na atak serca pisarza odbył się w maju 1912 roku i zgromadził tłumy miłośników jego twórczości.

Twórczość Bolesława Prusa

Na Prusa ogromny wpływ miały czasy, w jakich przyszło mu żyć. Popularne wówczas prądy literackie związane z pozytywizmem odcisnęły wielki ślad na twórczości pisarza. Widać to zarówno w formach, jakie przyjęły jego teksty (nowele, powieści lub opowiadania), jak i w poruszonej w utworach problematyce. Wczesna proza obracała się przede wszystkim wokół panujących na ziemiach polskich różnic społecznych oraz bezcelowości biernego życia potomków szlachty. Prus, obserwując rozgrywające się wokół niego wydarzenia i tragedie życiowe, opisywał je i analizował właśnie na kartach swoich książek.

Najważniejsze utwory Prusa

1. Powieści: „Lalka", „Anielka", „Faraon", „Emancypantki", „Placówka"

2. Nowele: „Antek", „Katarynka", „Kamizelka", „Nawrócony", „Z legend dawnego Egiptu"`;

const TWORCZOSC = `Twórczość Bolesława Prusa obejmuje przede wszystkim powieści, nowele, opowiadania i felietony. Był jednym z najważniejszych pisarzy polskiego pozytywizmu.

Najważniejsze utwory:

Powieści:
– Lalka
– Faraon
– Emancypantki
– Placówka
– Dzieci

Nowele i opowiadania:
– Kamizelka
– Katarynka
– Antek
– Michałko
– Powracająca fala

Tematyka twórczości:
– życie codzienne Polaków w XIX wieku,
– problemy społeczne i bieda,
– edukacja i rozwój nauki,
– los ludzi ubogich,
– patriotyzm i przemiany społeczne.

Jeśli potrzebujesz odpowiedzi do szkoły, możesz napisać krótko:

„Bolesław Prus był pisarzem epoki pozytywizmu. Pisał powieści, nowele i felietony. Jego najbardziej znane utwory to „Lalka", „Faraon", „Placówka", „Katarynka" i „Kamizelka"."`;

const OMNIE = `Strona poświęcona Bolesławowi Prusowi i jego twórczości — w szczególności powieści „Lalka". Powstała z pasji do polskiej literatury przełomu XIX i XX wieku oraz z chęci popularyzacji dorobku Prusa wśród współczesnych czytelników.`;

function PrusSite() {
  const [tab, setTab] = useState<TabId>("info");
  const [article, setArticle] = useState<null | "a1" | "a2">(null);

  return (
    <div
      className="min-h-screen"
      style={{
        ["--prus-bg" as never]: "#f7f7f9",
        ["--prus-bg-soft" as never]: "#eef0f4",
        ["--prus-border" as never]: "#d9dde3",
        ["--prus-text" as never]: "#1f2330",
        ["--prus-muted" as never]: "#6b7280",
        ["--prus-accent" as never]: "#1e3a8a",
        ["--prus-accent-dark" as never]: "#152a63",
        backgroundColor: "var(--prus-bg)",
        color: "var(--prus-text)",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <header className="border-b border-[var(--prus-border)] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Bolesław Prus &middot; <span className="italic">„Lalka"</span>
          </h1>
          <nav className="flex flex-wrap gap-1">
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTab(t.id);
                    setArticle(null);
                  }}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-[var(--prus-accent)] text-white"
                      : "text-[var(--prus-text)] hover:bg-[var(--prus-bg-soft)]"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        {article ? (
          <ArticlePage id={article} onBack={() => setArticle(null)} />
        ) : tab === "info" ? (
          <InfoTab onOpenArticle={setArticle} />
        ) : tab === "biografia" ? (
          <SimpleTab title="Biografia B. Prusa" text={BIOGRAFIA} />
        ) : tab === "tworczosc" ? (
          <SimpleTab title="Twórczość B. Prusa" text={TWORCZOSC} />
        ) : (
          <SimpleTab title="O mnie" text={OMNIE} />
        )}
      </main>

      <footer className="mt-10 border-t border-[var(--prus-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-[var(--prus-muted)]">
          Strona o Bolesławie Prusie i powieści „Lalka".
        </div>
      </footer>
    </div>
  );
}

function InfoTab({ onOpenArticle }: { onOpenArticle: (id: "a1" | "a2") => void }) {
  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <Paragraphs text={WSTEP} />
        </div>
        <div className="rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <StaticImage src={prusImg.url} alt="Bolesław Prus" />
        </div>
      </section>

      <section className="rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
        <Paragraphs text={TRESC1} />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <ImageSlot label="Książka „Lalka”" />
        </div>
        <button
          onClick={() => onOpenArticle("a1")}
          className="group flex flex-col items-start gap-2 rounded-lg border border-[var(--prus-border)] bg-white p-5 text-left shadow-sm transition hover:border-[var(--prus-accent)] hover:shadow-md"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--prus-accent)]">
            Podstrona
          </span>
          <h3 className="text-lg font-semibold">Artykuł 1</h3>
          <p className="text-sm text-[var(--prus-muted)]">
            Bolesław Prus – co o nim wiesz?
          </p>
          <span className="mt-auto text-sm font-medium text-[var(--prus-accent)] group-hover:underline">
            Czytaj →
          </span>
        </button>
        <button
          onClick={() => onOpenArticle("a2")}
          className="group flex flex-col items-start gap-2 rounded-lg border border-[var(--prus-border)] bg-white p-5 text-left shadow-sm transition hover:border-[var(--prus-accent)] hover:shadow-md"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--prus-accent)]">
            Podstrona
          </span>
          <h3 className="text-lg font-semibold">Artykuł 2</h3>
          <p className="text-sm text-[var(--prus-muted)]">
            „Lalka" i jej 5 kontynuacji.
          </p>
          <span className="mt-auto text-sm font-medium text-[var(--prus-accent)] group-hover:underline">
            Czytaj →
          </span>
        </button>
      </section>
    </div>
  );
}

function SimpleTab({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <article className="rounded-lg border border-[var(--prus-border)] bg-white p-6 shadow-sm">
        <Paragraphs text={text} />
      </article>
    </div>
  );
}

function ArticlePage({ id, onBack }: { id: "a1" | "a2"; onBack: () => void }) {
  const title = id === "a1" ? "Artykuł 1" : "Artykuł 2";
  const text = id === "a1" ? ARTYKUL1 : ARTYKUL2;
  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={onBack}
        className="self-start rounded-md border border-[var(--prus-border)] bg-white px-3 py-2 text-sm font-medium text-[var(--prus-text)] transition hover:bg-[var(--prus-bg-soft)]"
      >
        ← Wróć
      </button>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <article className="rounded-lg border border-[var(--prus-border)] bg-white p-6 shadow-sm">
        <Paragraphs text={text} />
      </article>
    </div>
  );
}
