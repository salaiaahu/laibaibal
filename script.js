// DEBUG: script.js version 2025-05-31_Final_Confirmed_All_Features
//------------- BUILDIN HYMNS ----------------------

const allHymns = [
    {
        "destext": "<h4 align=\"center\">PATHIAN CU THANGTHAT SI KO SEH</h4>\n<p>Doh is Ab.</p>\n<p><b>1. </b>Zeizong sertu Pathian, thangthat si ko seh, Vawlei a dawt ca'h a Fa-pa a kan pek; Sual ngaihthiam-nak ca a\n    nunnak kha a sian, Mi kip ca'h a nunnak kutka a hun cang.</p>\n<p><b>CHO: </b>Bawipa cu, thangthat u, Khua zakip cul dih seh, Bawipa cu, thangthat u, Mi kip i lawm hna seh, Fapa\n    Jesuh thawngin Pathian cu panh u. Zeizong vialte sertu Pathian thangthat u.</p>\n<p><b>2. </b>Maw Khamhnak tling thisen in a kan tlanhnak, A zummi kip sin i Pathian biakamnak; Lungtak in a zummi\n    misual bik hmanh nih, Jesuh sinin sual ngaihthiamnak a hmuh colh.</p>\n<p><b>CHO: </b>Bawipa cu, thangthat u, Khua zakip cul dih seh, Bawipa cu, thangthat u, Mi kip i lawm hna seh, Fapa\n    Jesuh thawngin Pathian cu panh u. Zeizong vialte sertu Pathian thangthat u.</p>\n<p><b>3. </b>A sermi thil vialte kong a kan cawnpiak, Fapa Jesuh thawngin lawmhnak a sang chin; Sihmanhseh Jesuh kan\n    hmuh te tikah cun, Khuaruahhar in lawmhnak a sang chinchin lai.</p>\n<p><b>CHO: </b>Bawipa cu, thangthat u, Khua zakip cul dih seh, Bawipa cu, thangthat u, Mi kip i lawm hna seh, Fapa\n    Jesuh thawngin Pathian cu panh u. Zeizong vialte sertu Pathian thangthat u.</p>",
        "id": "1",
        "name": "PATHIAN CU THANGTHAT SI KO SEH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DAWTNAK BAWI KA TUUKHAL A SI</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Dawtnak Bawi ka Tuukhal asi, A thatnak a dong bal lo, A mi ka si, zei ka bau lo, Ka Bawi a si zungzal lai.</p>\r\n<p><b>2. </b>Nunnak tiva a luan nak ah, Tlanh cia ka thlarau a hruai, Tlim-no ram-hring dawh khohnak ah, Vancung rawl a\r\n    ka pek lai.</p>\r\n<p><b>3. </b>Misual lampalh ka tlau sual tawn, Sihmanhseh law dawtnak in, A ka kawl i a ka phawrh than, Lunglawm in a\r\n    ka tlunter.</p>\r\n<p><b>4. </b>Thihnak khor fahnak ka tih lo, Nang ka sin na um ahcun, Nangmah thiangthunh ka hnangamnak, Na vailam ka\r\n    lam hruaitu.</p>\r\n<p><b>5. </b>Ka hmaiah cabuai kha na hun, Thluachuah ngandam na ka pek, Maw zeitluk i lunglawmhnak dah, Na hrai thiang\r\n    in a rung luang.</p>",
        "id": "2",
        "name": "DAWTNAK BAWI KA TUUKHAL A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SIANGPAHRANG BIA TUAH</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Vancung Siangpahrang hmaizahnak pe u, A sunparnak cu hla in thangthat u; Amah cu kan phaw le kan himnak\r\n    asi, Zungzal hmunmi sunparnak Pathian a si.</p>\r\n<p><b>2. </b>A thawnnak chim u, A velngeihnak zong, A puan ceunak nih zeizong a khuh dih. Vanrang le khuadawm cit in a\r\n    ra lai i, Vawleicung mi vialte bia a ceih hna lai.</p>\r\n<p><b>3. </b>Na kan zohkhenhnak holh in chim khawh lo, Thli chungah a khat, ceunak chung zongah Tlangcung in a rung i\r\n    tiva nelrawn tiang, Vanruah le dapti in dai tein an sur.</p>\r\n<p><b>4. </b>Ngakchia bantukin vawleicung mi nih, Nangmah kan in zumh, na kan hleng bal lo, Na velngeihnak cu zungzal\r\n    in a hmun ko, A kan Sertu, Khamtu le kan Hawi na si.</p>",
        "id": "3",
        "name": "SIANGPAHRANG BIA TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN SIANGPAHRANG CU HLORH U</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Zeizong vial-te sertu Bawipa a si, Tho law hla sa, Tho law hla sa, A kehram ah kun in bia cio tuah u, Kan\r\n    Siangpahrang cu hlorh u.</p>\r\n<p><b>CHO: </b>Cunglei tlanhnak thawng le a dawtnak thanh cio u, Lian ngan bik Bawipa, Sang in hlorh chin u,\r\n    Khuaruahhar sunparnak Nan an-sang in hlorh u, Kan Siangpahrang cu hlorh u.</p>\r\n<p><b>2. </b>A bia thawngin zeizong te aa hung cang, Tho law hla sa, Tho law hla sa, Zeizong vialte cungah nawl ngeitu\r\n    Bawi, Kan Siangpahrang cu hlorh u.</p>\r\n<p><b>CHO: </b>Cunglei tlanhnak thawng le a dawtnak thanh cio u, Lian ngan bik Bawipa, Sang in hlorh chin u,\r\n    Khuaruahhar sunparnak Nan an-sang in hlorh u, Kan Siangpahrang cu hlorh u.</p>\r\n<p><b>3. </b>Lianngan Bawipa sinah thanuam in ra, Tho law hla sa, Tho law hla sa, Miphun vialte lunglawm tein ra u, Kan\r\n    Siangpahrang cu hlorh u.</p>\r\n<p><b>CHO: </b>Cunglei tlanhnak thawng le a dawtnak thanh cio u, Lian ngan bik Bawipa, Sang in hlorh chin u,\r\n    Khuaruahhar sunparnak Nan an-sang in hlorh u, Kan Siangpahrang cu hlorh u.</p>\r\n<p><b>4. </b>Lianngan Bawipa a min thiang cu hlorh u, Tho law hla sa, Tho law hla sa Vanmi hna he a sining cu hlorh u,\r\n    Kan Siangpahrang cu hlorh u.</p>\r\n<p><b>CHO: </b>Cunglei tlanhnak thawng le a dawtnak thanh cio u, Lian ngan bik Bawipa, Sang in hlorh chin u,\r\n    Khuaruahhar sunparnak Nan an-sang in hlorh u, Kan Siangpahrang cu hlorh u.</p>",
        "id": "4",
        "name": "KAN SIANGPAHRANG CU HLORH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN IN THANGTHAT KAN PATHIAN</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Kan in thangthat, Pathian Kan lungthin le kan aw in, Khuaruahhar thil tuahtu, Vawlei mi nih an thangthat;\r\n    Leicung kan chuahka in thluachuah a kan petu, Rel cawk lo dawtnak he Nihin ni tiang kan Pa.</p>\r\n<p><b>2. </b>Zeizong tlingmi Pathian, Kan sinah um zungzal tuah, Donglo lawmhnak thinlung, Daihnak he kan hnem ko tuah,\r\n    Kan huppheng zungzal law kan hruai lam kan tlau ah, Lei le vancung zongah, Temhnak in kan luat-ter.</p>\r\n<p><b>3. </b>Thangthat lawmhnak vialte, Kan Pa Pathian pe ko u, Amah sin a ummi Fapa le Thiangthlarau he, Zungzal\r\n    hmunmi Pathian lei le van nih biakmi, Zungzal in zungzal tiang A hmun zungzal ko lai.</p>",
        "id": "5",
        "name": "KAN IN THANGTHAT KAN PATHIAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHBAWI KHA THANGTHAT KA DUH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>A kan Khamhbawi chungin a ceu A ngan zung zal a sunparnak, A min thangthat awkah, Vancungah kan zun khawh\r\n    ahcun, Khuaruahharnak hla ka sa lai, A kan Khamhbawi hmaiah, Akan Khamhbawi hmaiah.</p>\r\n<p><b>2. </b>Sualnak chungin kannih tlanh awk, Jesuh a thi kha a luanter, Pathian lunglawmhnak ca'h A mah thiannak le\r\n    sunparnak, A thiannak kha an tei kho lo, Thangthat zungzal u si, Thangthat zungzal u si.</p>\r\n<p><b>3. </b>A sung vancung thutdan cungah, Atu a kan Pengtu Bawipa, Jesuh a kan dawtnak, A tha ngaingai hlasak nak he,\r\n    A sunparnak hla saknak kha, Keimah ka sa te lai, Keimah ka sa te lai.</p>\r\n<p><b>4. </b>A hmai a ceu lunglawmhnak kha, Hmuh awk caah a kan auh cang, A sinah kan tlung lai, A kan dawt ca'h teinak\r\n    kan hmuh, A kan Khamhbawi Jesuh sinah, A zungzal kan um lai, A zungzal kan um lai.</p>",
        "id": "6",
        "name": "KHAMHBAWI KHA THANGTHAT KA DUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA BIA TUAH U</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Iang ngei thiannak he Bawipa cu bia cio tuah u, A hmaiah kun in a sunparnak thanh, Toidornak le\r\n    nawlngaihnak rimhmui thaw he cun, Ra u law Bawipa cu bia cio u si.</p>\r\n<p><b>2. </b>A kehram ah na thilrit cu rak thum tuah law, A zawnruahnak lungthin in an chan lai, Na ngaihchiatnak hnemh\r\n    in na thlacam an leh lai, Na ca a thabik lam ah na hruai lai.</p>\r\n<p><b>3. </b>A hmai ka hung panh awkah na zakzum hlah seh, Na tenpamnak ruangah na lung der hlah, A biatak le velngeih\r\n    zawnruah dawtnak ruangah, A hmunthiang ah umnak nawl na ngei lai.</p>",
        "id": "7",
        "name": "BAWIPA BIA TUAH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA CERHTI PUTTER</h4>\n<p>Doh is Eb</p>\n<p><b>1. </b>Pathian vel cu cerhti chuak bang, Ka lung nih hla phuah ko seh, A zaangfah tiva bang a luang, Thangthatnak\n    hla sa u si, Hla tha bik kha kan sakter tuah, Vancung mi nih an sakmi, Na dawtnak cu tlang bang a sang, Na\n    thangthat hla ka sa lai.</p>\n<p><b>2. </b>Bawmh duhnak lung na ka hmuhter, Na bawmhnak kha ka hmuh cang, Na vel ngeih ca'h vancung khua kha, Him\n    tein ka phak sawk lai, Lam palhmi keimah si tikah, Jesuh nih a ka kawl ko, Thihnak in keimah tlanh awkah, A sung\n    bik thi a thlet ko.</p>\n<p><b>3. </b>A zaangfahnak a kan pek ca, Nifate lei ka bat bang, A zaangfahnak keimah lung kha, Amah he ka lung a khat,\n    Lam palh hmangmi ka si ngai te, Ka dawt Pathian ka hlawt tawn, Ka lung ah hmelchunhnak ka pe, Vancung ca him in\n    chia fawn.</p>",
        "id": "8",
        "name": "NA CERHTI PUTTER",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN FA HNA THO U</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Pathian fa hna tho u! temtawntu ngeiloin, Kan bawi bik cu lungthin nunnak thazang dihlak pe u.</p>\r\n<p><b>2. </b>Pathian fa hna tho u! A pennak rau hmanh seh, Nan palhnak kaltak in u-nau dawtnak lungthin ngei u.</p>\r\n<p><b>3. </b>Pathian fa hna tho u! Nan Khrihfabu ca-ah, Nan Khrihfabu rian hlawhtlin awkah tho u law tuan u.</p>\r\n<p><b>4. </b>Khrih vailam cu put in, A keneh cu zul u, Khrih unau chuakkhat lungthin he tho u, Pathian fa hna.</p>",
        "id": "9",
        "name": "PATHIAN FA HNA THO U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KEIMAH KHAMHTU</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Khamhbawi dawtnak a ngan ngaingai, Lunglawmhnak hla ka sa lai, Sualnak in keimah tlanh awkah,\r\n    Vai-lamtahnak ah thi cang.</p>\r\n<p><b>CHO: </b>Bawipa thangthatnak hlaka sa, A thi in a ka tawl cang; Vailamtah nak kha a in i, Ka sualnak kha a thlah\r\n    cang.</p>\r\n<p><b>2. </b>Vancung ro kha co awk ca-ah, A tha bik bia a kan chimh, A kan dawtnak a ngan ca-ah, Kan sualnak kha a\r\n    thlah cang.</p>\r\n<p><b>CHO: </b>Bawipa thangthatnak hlaka sa, A thi in a ka tawl cang; Vailamtah nak kha a in i, Ka sualnak kha a thlah\r\n    cang.</p>\r\n<p><b>3. </b>A kan Khamhbawi a min a thang, Nifate ka thangthat lai, Ka thih tikah hell chung biaceih, Phakter kha a ka\r\n    duh lo.</p>\r\n<p><b>CHO: </b>Bawipa thangthatnak hlaka sa, A thi in a ka tawl cang; Vailamtah nak kha a in i, Ka sualnak kha a thlah\r\n    cang.</p>\r\n<p><b>4. </b>A kan Khamhbawi dawtnak a ngan, Hla tha in ka thangthat lai, Zungzal nunnak ram chungah khin, Amah he kan\r\n    um lai ta.</p>\r\n<p><b>CHO: </b>Bawipa thangthatnak hlaka sa, A thi in a ka tawl cang; Vailamtah nak kha a in i, Ka sualnak kha a thlah\r\n    cang.</p>",
        "id": "10",
        "name": "KEIMAH KHAMHTU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A THIANG, A THIANG, A THIANG!</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>A Thiang, A Thiang, A Thiang, A Lianngan bik Bawipa! Zingka kan in thangthatnak cu Na sin a kai lai, A\r\n    Thiang, A Thiang, A Thiang, Zaangfah thiam le A thawng, Pum khat Pathian Pa, Fapa, Thiang Thlarau.</p>\r\n<p><b>2. </b>A Thiang, A Thiang, A Thiang, Mi thiang an upatmi, Na bawithutdan hmaiah an sui luchin cu na chiah,\r\n    Che-ru-bim vialte hna, Na kehram ah kun in, Se-ra fim he, Zungzal Bawi an thangthat.</p>\r\n<p><b>3. </b>A Thiang, A Thiang, A Thiang, Mui nih in phen hmanh seh, Misual mi nih na lianhngannak hmu hmanh hna hlah\r\n    seh, Nangmah lawng na thiang ko, Mithiang dang an um lo, Thawnnak, dawtnak, Thiannak tling kan Pathian.</p>\r\n<p><b>4. </b>A Thiang, A Thiang, A Thiang, A Lianngan bik Bawipa, Lei le van le rili nih na min an in thangthat, A\r\n    Thiang, A Thiang, A Thiang, Zaangfah thiam le a thawng, Pum khat Pathian; Pa, Fapa, Thiang Thlarau. Amen.</p>",
        "id": "11",
        "name": "A THIANG, A THIANG, A THIANG!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA THLARAU NGAI TUAH!</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Ka thlarau ngai tuah, vancungmi hlasaknak, Vaw lei lawmhnak rili cung tiang a thang, Hlasaknak thawng tha\r\n    kha kan theih tikah cun, Lungthlennak le sual thlahnak bia a chim.</p>\r\n<p><b>CHO: </b>Biakam a tling, Vancung mi vialte nih khan, An aw ngaih awk tlak in hla an sa i, Zanlei tahnak zinglei\r\n    lunglawmhnak tha bik, Khuamuihnak kha dawtnak nih a ceuter.</p>\r\n<p><b>2. </b>Hla aw nan theih tikah hmailei ah kal u, \"Re theimi le sifak ra u,\" a ti, Khuamui chungah Bawi Jesuh nih\r\n    an auh cang, Vancung lam tha hmuhsaktu kha a si.</p>\r\n<p><b>CHO: </b>Biakam a tling, Vancung mi vialte nih khan, An aw ngaih awk tlak in hla an sa i, Zanlei tahnak zinglei\r\n    lunglawmhnak tha bik, Khuamuihnak kha dawtnak nih a ceuter.</p>\r\n<p><b>3. </b>Lamhlapi ah zanlei darkhing thawng bangin, Vawlei cungah Jesuh thawng a thang cang, Thong tampi thilrit a\r\n    phormi vialte nih, Tuukhal Bawipa nangmah sinah kan ra.</p>\r\n<p><b>CHO: </b>Biakam a tling, Vancung mi vialte nih khan, An aw ngaih awk tlak in hla an sa i, Zanlei tahnak zinglei\r\n    lunglawmhnak tha bik, Khuamuihnak kha dawtnak nih a ceuter.</p>\r\n<p><b>4. </b>Ngaihchiatnak caan kha atu sau hmanhsehlaw, Khuamui hlawt in lawmhnak khua a ceu lai Retheimi kalnak lam\r\n    kha a dih tikah, Thlarau hnangamnak suikhua kan phak lai.</p>\r\n<p><b>CHO: </b>Biakam a tling, Vancung mi vialte nih khan, An aw ngaih awk tlak in hla an sa i, Zanlei tahnak zinglei\r\n    lunglawmhnak tha bik, Khuamuihnak kha dawtnak nih a ceuter.</p>",
        "id": "12",
        "name": "KA THLARAU NGAI TUAH!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SUNPAR LUCHIN CHINH U</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Vawlei mi vialte nih zoh tuah, Ngaihchiatnak a ing Jesuh, A ral vialte a tei dih cang, Mi vialte nih khan\r\n    an biak.</p>\r\n<p><b>CHO: </b>Sun-par luchin sun-par luchin, Bawi Jesuh kha chinhter tuah. A lianngan bik Bawi Jesuh kha Siangpahrang,\r\n    siangpahrang chin.</p>\r\n<p><b>2. </b>Vancung khua ummi vialte nih, Bawi Jesuh a thang an that, Biaceih thutdan cung an thutter, Vancung mi nih\r\n    an lawmh tawn.</p>\r\n<p><b>CHO: </b>Sun-par luchin sun-par luchin, Bawi Jesuh kha chinhter tuah. A lianngan bik Bawi Jesuh kha Siangpahrang,\r\n    siangpahrang chin.</p>\r\n<p><b>3. </b>Hling luchin kha misual mi nih, Bawi Jesuh kha an chinhter, Mithiang mi le vancung mi nih, Jesuh min kha\r\n    an thangthat.</p>\r\n<p><b>CHO: </b>Sun-par luchin sun-par luchin, Bawi Jesuh kha chinhter tuah. A lianngan bik Bawi Jesuh kha Siangpahrang,\r\n    siangpahrang chin.</p>\r\n<p><b>4. </b>Amah hlorh in au cio tuah u! Ral tei lawmhnak kha an tuah. Sunparnak ngan bik a hmuh cang. Zohtuah! Bawi\r\n    Jesuh a si.</p>\r\n<p><b>CHO: </b>Sun-par luchin sun-par luchin, Bawi Jesuh kha chinhter tuah. A lianngan bik Bawi Jesuh kha Siangpahrang,\r\n    siangpahrang chin.</p>",
        "id": "13",
        "name": "SUNPAR LUCHIN CHINH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SIANGPAHRANG LUCHIN CHINH U</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Khrih kan Bawipa, Sui luchin chinh u, Dong hin loin thangthat ko u si; A min upat sunh-lawihnak um seh,\r\n    Atu in zungzal tiang.</p>\r\n<p><b>CHO: </b>Chinhter u si, (Chinhter u si), Chinhter u si, (Chinhter u si), Sunparnak ram ah kan Siangpahrang,\r\n    Chinhter, Chinhter u si, Thang-thatnak dong lo in.</p>\r\n<p><b>2. </b>Vanmi run nih sangin an thangthat, A bawithutdan hmaiah an thangthat; Miphun vialte zong nih thangthat u,\r\n    Bawibik cu thangthat u.</p>\r\n<p><b>CHO: </b>Chinhter u si, (Chinhter u si), Chinhter u si, (Chinhter u si), Sunparnak ram ah kan Siangpahrang,\r\n    Chinhter, Chinhter u si, Thang-thatnak dong lo in.</p>\r\n<p><b>3. </b>Sualnak vialte teitu Bawi a si, A Thlarau in kan lungthin peng seh. Amah min in teitu kan si lai, Zungzal\r\n    in chinhter u.</p>\r\n<p><b>CHO: </b>Chinhter u si, (Chinhter u si), Chinhter u si, (Chinhter u si), Sunparnak ram ah kan Siangpahrang,\r\n    Chinhter, Chinhter u si, Thang-thatnak dong lo in.</p>",
        "id": "14",
        "name": "SIANGPAHRANG LUCHIN CHINH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWI CUNGNUNG BIK THANGTHAT U</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Thangthat tuah u, Lei le van sertu Bawi kan Siang pa hrang, Ka thlarau thangthat tuah, na damnak le\r\n    tlannak a si, A theimi nih a biakinn naih chin ko u, Hmun khat ah thangthat ti u si.</p>\r\n<p><b>2. </b>Thangthat tuah u, Zeizong vialte uktu Bawipa a si! A thla tangah him tein an huh phenh i an cawm ko, Na\r\n    herh vialte ti le rawl zong Bawipa nih, An pek lengmang, na hngal lo maw?</p>\r\n<p><b>3. </b>Thangthat tuah u, Nanmah bawmtu le hupphengtu Bawi cu, A zaangfah le velngeihnak in nan mah an zohkhenh\r\n    hna, Ruat than tuah u, Pathian he hawikomhnak cu, Zeitluk a that kha nan hngalh lai!.</p>",
        "id": "15",
        "name": "BAWI CUNGNUNG BIK THANGTHAT U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HMUNKHAT AH KAN I PUM</h4> <p>Doh is D</p> <p><b>1. </b>Bawipa thluachuah hal awk ca kannih kan i pum, A nawl theihter awkah a kan chimhhrin zau; Lungder zaangchia mi-khuaruahhar a damter. A min thangthat hla sa, A mi a philhlo.</p> <p><b>2. </b>Kannih hruai awk ca'h Pathian kan sinah a um, A uk, a zohkhenh, a penmi ram thiang cu; Cuca'h a hramthawk in sual ral cu kan tei cang Bawipa, kan sin a um, Thangthat in um seh.</p> <p><b>3. </b>Bawipa kan in thangthat; kan hruaitu thawng na si, Kannih hruaitu si zungzal awk kan in nawl; Na Khrih-fa-bu temh-in-nak in luat ko hna seh. Na min thangthat ko seh, Bawipa, kan luatter.</p>",
        "id": "16",
        "name": "HMUNKHAT AH KAN I PUM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA KHAMHTU DAWTNAK</h4> <p>Doh is Ab</p> <p><b>1. </b>Na-za-reth Jesuh hmaiah cun khuaruahhar ngai in ka dir, Sual thurmi kei hmanh a ka dawt, Khuaruahhar ngai ngai a si.</p> <p><b>CHO: </b>Zei tluk khuaruahhar Khuaruahhar tiin ka sak zungzal lai. Zeitluk khuaruahhar, Khuaruahhar, Khamhtu a ka dawtnak cu!</p> <p><b>2. </b>\"Na duhnak bang siseh,\" ti'n kei ruangah dum ah thla a cam, Amah ca a tah a si lo, Kei ca thlan thi dor a tla.</p> <p><b>CHO: </b>Zei tluk khuaruahhar Khuaruahhar tiin ka sak zungzal lai. Zeitluk khuaruahhar, Khuaruahhar, Khamhtu a ka dawtnak cu!</p> <p><b>3. </b>Ka sual ngaihchiatnak a kalpi, Amah theng te nih aa phorh, Kalvary lei panh in a kal, Temh-innak he a thi cang.</p> <p><b>CHO: </b>Zei tluk khuaruahhar Khuaruahhar tiin ka sak zungzal lai. Zeitluk khuaruahhar, Khuaruahhar, Khamhtu a ka dawtnak cu!</p> <p><b>4. </b>Tlanh ciami hna he sunparnak in, A hmai ka hmuh tikah, Dong loin kaa lawmh laimi cu, A dawtnak kong sak a si.</p> <p><b>CHO: </b>Zei tluk khuaruahhar Khuaruahhar tiin ka sak zungzal lai. Zeitluk khuaruahhar, Khuaruahhar, Khamhtu a ka dawtnak cu!</p>",
        "id": "17",
        "name": "KA KHAMHTU DAWTNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUADEI VANKAM A CEU TIKAH</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Khuadei vankam ceu in, Ka lung nih a au i, Jesuh thangthat siseh, Riantuan thlacam zongah, Jesuh sinah kaa\r\n    hrim, Jesuh thangthat siseh.</p>\r\n<p><b>2. </b>Ka ngaih a chiat ahcun, Ka lung a ka hnemh tawn, Jesuh thangthat siseh, Kaa lawmhnak zor hmanhseh, Ka\r\n    hnangamnak a si, Jesuh thangthat siseh.</p>\r\n<p><b>3. </b>Vancung zungzal lawmhnak, Aa dawh bik hla tha cu, Jesuh thangthat siseh, Khuamui tihnak zongah, A\r\n    thangthat hla thawngin, Jesuh thangthat siseh.</p>\r\n<p><b>4. </b>Leicung i ka nun lio, Ka hla tha bikmi cu, Jesuh thangthat siseh, Amah thangthatnak hla, Zungzal in hmun\r\n    ko seh, Jesuh thangthat siseh.</p>",
        "id": "18",
        "name": "KHUADEI VANKAM A CEU TIKAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA NANGMAH NA MIN KA DAWT KO</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>A min a tha Bawi Jesuh kha ka dawt ngaingai a min. Midang nih an theih khawh nakhnga, Chim awkah kal ka\r\n    duh. Chim awkah kal ka duh, Midang nih an theih khawh nakhnga Chim awkah kal ka duh.</p>\r\n<p><b>2. </b>Ka thlarau nunnak na si i zungzal in kan bochan. Thawngtha dang kha um hmanh sehlaw, Keimah ka duh ti lo.\r\n    Keimah ka duh ti lo, Thawngtha dang kha um hmanhsehlaw Keimah ka duh ti lo.</p>\r\n<p><b>3. </b>Ka duh vialte nangmah sinin keimah nih ka hmuh cang. Thawngtha dang kha um hmanh sehlaw, Keimah ka duh ti\r\n    lo. Keimah nih ka duh lo. Thawngtha dang kha um hmanhsehlaw Keimah nih ka duh lo.</p>\r\n<p><b>4. </b>Na thawngtha kha ka thangthat lai, Keimah ka thih hlan tiang, Nangmah sinah ka phak tikah, Zungzal hla ka\r\n    sa lai, Zungzal hla ka sa lai, Nangmah sinah ka phak tikah, Zungzal hla ka sa lai.</p>",
        "id": "19",
        "name": "BAWIPA NANGMAH NA MIN KA DAWT KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZEITLUK CAAN SUNG DAH!</h4> <p>Doh is F</p> <p><b>1. </b>A va sung dah thangthatnak le pumpak thlacam caan hi, Zumhnak thiang le kan hlasaknak hmunthiangah a hung phan; Biakam sung in a kan lehnak a aw nem cu ka theih, Vaw lei ah thennak um hmanhseh van ah kan i tong lai. Vancung ah kan i tong hna lai, ton thannak a um lai, Jesuh thisen kan zumh caah van ah kan i tong lai.</p> <p><b>2. </b>A va sung dah dawtnak thiang hi pum khat a kan siter, Pathian Fapa Jesuh chungah hmun khat ah a kan pumh; Thennak caan phan zau hmanh seh, a bia thiang a kan pek cang, A thluachuahnak kan ruahchan ca'h van ah kan i tong lai. Vancung ah kan i tong hna lai, ton thannak a um lai, Jesuh thisen kan zumh caah van ah kan i tong lai.</p> <p><b>3. </b>Thadi zaangbang in um hmanh si, tiva dawh kan phan lai, Hawidawt nih an kan hngahnak hmun a nuammi vanram ah; Thlichia le tilet vialte an lohnak caan a nai cang, Lawmhnak hla kan sa zungzal lai, van ah kan i tong lai. Vancung ah kan i tong hna lai, ton thannak a um lai, Jesuh thisen kan zumh caah van ah kan i tong lai.</p>",
        "id": "20",
        "name": "ZEITLUK CAAN SUNG DAH!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZAANGFAHNAK HRI TLAI IN</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Zaangfahnak hri tlai in, Lungthin hmunkhat tein, Jesuh thawngin pumkhat kan si, Vancung bantuk a si.</p>\r\n<p><b>2. </b>Kan Pa thutnak hmaiah, Lung khat in kan i pum, Kan ruahchannak kha aa khat ko, Lunglawmhnak kha a tam.</p>\r\n<p><b>3. </b>Ngaihchiatnak kan i hrawm, Thilrit zong kan i hrawm, Khi bantuk Bawipa phung kan zulh, Thluachuahnak kan\r\n    hmuh cio.</p>\r\n<p><b>4. </b>Kan i then than tikah, Ngaihchiatnak kha a tam; Siseh kan ruahchannak van ah, Ton thannak a um lai.</p>",
        "id": "21",
        "name": "ZAANGFAHNAK HRI TLAI IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA NA THLUACHUAH HE KAN THLAH</h4> <p>Doh is Eb</p> <p><b>1. </b>Bawipa na thluachuah he kan thlah, Kan lunglawmh daihnak khahter, Na dawtnak cu kan co cio i, Na velngeihnak in kan tei, Thazang kan pe thazang kan pe, Ram car chung kan kal lioah.</p> <p><b>2. </b>Lawmhnak le upat kan in pek, Na Thawngtha bia lawmhnak ca'h, Na kan khamhnak theipar tha cu, Kan lung chungah tam ko seh, Zumhawk tlakmi kan siter tuah, Biatak chungah kan hmunhter.</p> <p><b>3. </b>Vawlei cung hin na dawtnak nih, Kannih a kan auh tikah, Thih tihnak kha kan teipiak tuah, Na aw thawng kha kan ngaih lai, A zungzal in a zungzal in, Nang he kan um ti cang lai.</p>",
        "id": "22",
        "name": "BAWIPA NA THLUACHUAH HE KAN THLAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN NIH AN ZOH LAI</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Pathian nih an zoh lai, na thinphang hlah, Ceu le mui ah an hupphengtu a si, A mi hna cu zungzal in a ven\r\n    hna, Umhar lileng in an chia ta lai lo.</p>\r\n<p><b>CHO: </b>Pathian nih an zoh lai, A dongh tiangin, Hawikom tha bik, Tlantu kan Pa a si, Na auh tikah Jesuh nih an\r\n    leh lai. Va zum zungzal, Amah nih an zoh lai.</p>\r\n<p><b>2. </b>Pathian nih an zoh lai, chun nitlak in, Na kehlan cu lam dingah a hruai lai, Tuukhal bangin an hupphengtu\r\n    a si, Cerhti kamah him in a hruai tawn hna.</p>\r\n<p><b>CHO: </b>Pathian nih an zoh lai, A dongh tiangin, Hawikom tha bik, Tlantu kan Pa a si, Na auh tikah Jesuh nih an\r\n    leh lai. Va zum zungzal, Amah nih an zoh lai.</p>\r\n<p><b>3. </b>Pathian nih an zoh lai, chan chung nguh in, Hmuh bal lomi a thluachuah an pek lai, Caan dong hmanh seh\r\n    zungzal in an zohlai, Hnangam tein a sinah an auhlai.</p>\r\n<p><b>CHO: </b>Pathian nih an zoh lai, A dongh tiangin, Hawikom tha bik, Tlantu kan Pa a si, Na auh tikah Jesuh nih an\r\n    leh lai. Va zum zungzal, Amah nih an zoh lai.</p>",
        "id": "23",
        "name": "PATHIAN NIH AN ZOH LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LIANNGAN JEHOVAH, KA HRUAI TUAH</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Lianngan Je-ho-vah ka hruai tuah, Lamhar chung ka kal lioah, Kei santlai lo ka si caah na thawnnakkut in\r\n    ka hruai. Vancung changreu in ka khim tiang ka cawm ko, Vancung changreu in ka khim tiang ka cawmko</p>\r\n<p><b>2. </b>Cerhti thiangte run luanter tuah, Kan damnak cerhti thiang cu, Khuaruahhar ceu le simei nih ka lam cu ka\r\n    hruai hna seh. A thawng khamhtu; ka thazang le phaw si ko, A thawng khamhtu; ka thazang le phaw si ko.</p>\r\n<p><b>3. </b>Jordan tilet ka tan lioah phannak vialte lohter ko, Tilet tho hmanh seh, Ka hlawm ko, Kanaan ka\r\n    phanhterhim in. Na thangthatnak zungzal hla in ka sak lai, Na thangthatnak zungzal hla in ka sak lai.</p>",
        "id": "24",
        "name": "LIANNGAN JEHOVAH, KA HRUAI TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NAN SINAH PATHIAN UM KO SEH</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Kan bu in kan i ton than tiangin, Nan sinah Pathian um ko seh, Amah nih him in keng ko seh, Amah\r\n    chimhhrinnak in lam sial seh.</p>\r\n<p><b>CHO: </b>Kan i ton-than hlan tiang, Jesuh sin kan i ton tiang, Kan i ton than hlan tiang, Nanmah sinah Pathian um\r\n    ko seh.</p>\r\n<p><b>2. </b>Kan bu in kan i ton than tiangin, Kan sinah Pathian um ko seh, A thla in in huppheng ko seh. Nifate in\r\n    rawl in pe ko seh.</p>\r\n<p><b>CHO: </b>Kan i ton-than hlan tiang, Jesuh sin kan i ton tiang, Kan i ton than hlan tiang, Nanmah sinah Pathian um\r\n    ko seh.</p>\r\n<p><b>3. </b>Kan bu in kan i ton than tiangin, Nan sinah Pathian um ko seh, Sifahnak kha na hmuh tikah, Nangmah kha a\r\n    kut in pom ko seh.</p>\r\n<p><b>CHO: </b>Kan i ton-than hlan tiang, Jesuh sin kan i ton tiang, Kan i ton than hlan tiang, Nanmah sinah Pathian um\r\n    ko seh.</p>\r\n<p><b>4. </b>Kan bu in kan i ton than tiangin, Kan sinah Pathian um ko seh, Dawt ngiatnak puan kha lek ko seh, Thihnak\r\n    tilet kha daihter ko seh.</p>\r\n<p><b>CHO: </b>Kan i ton-than hlan tiang, Jesuh sin kan i ton tiang, Kan i ton than hlan tiang, Nanmah sinah Pathian um\r\n    ko seh.</p>",
        "id": "25",
        "name": "NAN SINAH PATHIAN UM KO SEH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KEIMAH HE UM TUAH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Keimah he um, khuamui dengmang cang ca, Khuamui chin ka Pa, ka sinah um tuah, Bawmtu dang nih an ka zamtak\r\n    tikah, Tang chiah bikmi bawmtu, ka Pa, ra tuah.</p>\r\n<p><b>2. </b>Ka nunnak ni, atu zau a dih lai, vawlei lawmhnak le sunpar a dong lai, Thlennak le ropnak ka velchum a um,\r\n    Aa thleng lo Pathian keimah he um tuah.</p>\r\n<p><b>3. </b>Nifate in, Nangmah tel kan duh ko, Tukforhnak na vel lawng nih a tei khawh, Nangmah bantukin hodah a ka\r\n    bawm? Khuadawm le vanfim ah kei he um tuah.</p>\r\n<p><b>4. </b>Nang um ahcun ral kha ka tih hna lo, Na lianhnak nih tukforhnak kha a tei. Thih fahnak kha khuazei ah dah\r\n    a um? Nang ka sinah um law ka tih lai lo.</p>\r\n<p><b>5. </b>Ka mit chinh in na vailam kha ka hmuh; Muihnak chungin vancung ka sawhpiak tuah. Van khua a dei cang,\r\n    Muihnak a dih cang. Nunnak, thihnak ah, Maw Pathian, um tuah.</p>",
        "id": "26",
        "name": "KEIMAH HE UM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MISUNG BAWIPA KA HRUAI TUAH</h4> <p>Doh is Ab</p> <p><b>1. </b>Ka lam a muih lio ah, Misung Bawipa ka ngei, Ka nunnak ni a liam deng; Ka tahhramnak ngai law, Tluril loin ka hruai, Misung Bawipa, inn ah ka hruai ko.</p> <p><b>CHO: </b>Misung Bawipa ka hruai, Fektein ka dirter, Thadi zaangbang mitenpam ka si, Totho le mui lakin ceunak lei ah ka hruai. Misung Bawipa, inn ah ka hruai ko.</p> <p><b>2. </b>Khua nih maw chialmal kaw, Zan mui nih a hun khuh, Ceunak vialte an lo dih; Tiva kam ah ka dir, Ka kut fek te'n ka tlai, Misung Bawipa, inn ah ka hruai ko.</p> <p><b>CHO: </b>Misung Bawipa ka hruai, Fektein ka dirter, Thadi zaangbang mitenpam ka si, Totho le mui lakin ceunak lei ah ka hruai. Misung Bawipa, inn ah ka hruai ko.</p> <p><b>3. </b>Nunnak ni liam a zal, Lam ka hmuhsak ko sawh, Teinak thazang thar ka pe; Kei lawng ka si ti lo, Nangmah he kan si cang, Misung Bawipa, inn ah ka hruai ko.</p> <p><b>CHO: </b>Misung Bawipa ka hruai, Fektein ka dirter, Thadi zaangbang mitenpam ka si, Totho le mui lakin ceunak lei ah ka hruai. Misung Bawipa, inn ah ka hruai ko.</p>",
        "id": "27",
        "name": "MISUNG BAWIPA KA HRUAI TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZANLEI THANGTHATNAK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Tlang in ni a liam riangmang, Van nih lei kha a tongh cang, Van ah khin arfi hna cu, Mei inn bang an ceu\r\n    lioah, Hngak law bia tuah.</p>\r\n<p><b>CHO: </b>Thiang bik, Thiang bik, Thiang bik, Bawipa Pathian! Van le lei ah na khat dih, An in lawmh, Van le lei\r\n    nih, Maw sang bik Bawi.</p>\r\n<p><b>2. </b>Nunnak Bawi van kulh chungah, Nangmah huhphenhnak inn ah Nangmah an kawlmi kan khawm, Na thladem tangin\r\n    kan pom, Kan umpi ko.</p>\r\n<p><b>CHO: </b>Thiang bik, Thiang bik, Thiang bik, Bawipa Pathian! Van le lei ah na khat dih, An in lawmh, Van le lei\r\n    nih, Maw sang bik Bawi.</p>\r\n<p><b>3. </b>Muih thlam aa zelh lioah khan, Dawt thinlung nih a kulh dih, Sunpar arfi lengah khin, Na hmai hmuh kan duh\r\n    ca-ah, Kan lung an zuang.</p>\r\n<p><b>CHO: </b>Thiang bik, Thiang bik, Thiang bik, Bawipa Pathian! Van le lei ah na khat dih, An in lawmh, Van le lei\r\n    nih, Maw sang bik Bawi.</p>\r\n<p><b>4. </b>Zan fikceu a liam tikah, Chun le zan an liam zongah, Vanmi Bawipa, na thawngin, Zing khuaceu a ra than i,\r\n    Muihnak a dih.</p>\r\n<p><b>CHO: </b>Thiang bik, Thiang bik, Thiang bik, Bawipa Pathian! Van le lei ah na khat dih, An in lawmh, Van le lei\r\n    nih, Maw sang bik Bawi.</p>",
        "id": "28",
        "name": "ZANLEI THANGTHATNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA HNGAK THIUTHEO</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Ka hngah thiutheo, Ni a hun i mer i chunhnu a phanhtiang, Ka hngah thiutheo, Zanlei khuamawt, Van kam ceu\r\n    a loh dih tiang, Chun laicer in zantim khuamawt caan ah a hun i thlen hnu, Fino rual fikceu a hung keh-Maw\r\n    chilchial vankam ceu tiang.</p>\r\n<p><b>2. </b>Ka hngah thiutheo, Rawl tuantu hna fa-phal put in an rat tiang, Vaupi nilin an hung liam hnu, Chimthli nih\r\n    a hun zulh bang, Rawl tuantu hna i hnawh ko u, ka lungthin theipar zun u, Nunnak par dawh cu uai ser in liam tuan\r\n    ko ning ti ka duh.</p>\r\n<p><b>3. </b>Ka hngah thiutheo, Lungvar kutka van-mi run nih an hun tiang, Sifak rethei si hmanh ninglaw, Cu kutka cu\r\n    kaa ruahchan, Lam hlapi i an hlasak thawng, an kal thawng cu ka theih hna, An ka auh lai caan lawng ka hngak, An\r\n    aan ngaih in hngak ko ning.</p>\r\n<p><b>4. </b>A ceu bikmi inn dawh ka hngak, Mithmuh bal lo inn dawh bik, Par tha en lio nunnak thingkung, Fing le tlang\r\n    nih hring dildel, Ka khamhnak caan tlin lai ka hngak, Ka Khamhtu pek laimi kha, Sualnak vialte an lo dih lai,\r\n    Ngaihchiat lungkuai an lo lai.</p>",
        "id": "29",
        "name": "KA HNGAK THIUTHEO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HNU DEUHPI AH</h4> <p>Doh is F</p> <p><b>1. </b>Khuaruahhar in tukforhnak ka tong tawn. Cuticun maw kan ton rih ko lai, Sualpalhnak chungah an um cio na in, Kannih bangin tukforh an ing lo.</p> <p><b>CHO: </b>Hnu deuhpi ah fiang te in kan hngalh lai, Hnu deuhpi ah fiang te'n kan hngalh lai, Ni ceu dawh ah lung dai in um ko u. Tuhnu ah fiang te in kan hngalh lai.</p> <p><b>2. </b>Ka dawtmi hna he thih nih a kan then, Lileng cihai in an kan liamtak, Chawva tling he midang an nun lio ah, Ziahhen derthawmmi kannih kan si.</p> <p><b>CHO: </b>Hnu deuhpi ah fiang te in kan hngalh lai, Hnu deuhpi ah fiang te'n kan hngalh lai, Ni ceu dawh ah lung dai in um ko u. Tuhnu ah fiang te in kan hngalh lai.</p> <p><b>3. </b>Thih tiang zumhtlakmi si ding a kan fial, Tuan fah retheih ni a sau lai lo, Riantuan retheih caan cu a dong cang lai, Van sui kutka luh lai i tim u.</p> <p><b>CHO: </b>Hnu deuhpi ah fiang te in kan hngalh lai, Hnu deuhpi ah fiang te'n kan hngalh lai, Ni ceu dawh ah lung dai in um ko u. Tuhnu ah fiang te in kan hngalh lai.</p> <p><b>4. </b>Lianhngannak in Jesuh a rat tikah, Van in a rung tum cu kan hmuh lai, A ceumi inn dawh bik ah kan ton lai, Tuhnu ah fiang chin in kan hngalh lai.</p> <p><b>CHO: </b>Hnu deuhpi ah fiang te in kan hngalh lai, Hnu deuhpi ah fiang te'n kan hngalh lai, Ni ceu dawh ah lung dai in um ko u. Tuhnu ah fiang te in kan hngalh lai.</p>",
        "id": "30",
        "name": "HNU DEUHPI AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZANLEI THLACAMNAK</h4> <p>Doh is Bb</p> <p><b>1. </b>Kan Bawi Jesuh kan ih hlanah, huhphenh nak kha kan in hal, Misual kan si run kan zaangfah, Kannih run kan thian-ter tuah.</p> <p><b>2. </b>Nihin ah kan palh sualmi kha, Bawipa run kan thlahpiak tuah! Keimah kha run ka zaangfah tuah, Nangmah bantuk si ka duh.</p> <p><b>3. </b>Kan ih kar ah kan pawngkam ah, Tih awk kha um hmanhseh law, Vanmi nih an kan zohkhenh ca'h, Zeihmanh kha kan tih lai lo.</p> <p><b>4. </b>Tu zan ah thi hmanh u si law, Kannih ca zei a poi lo, Thaizing ah na vancung khua ah, Kan thlarau aa hlau cang lai.</p>",
        "id": "31",
        "name": "ZANLEI THLACAMNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN KHAMHTU BAWI NI BANG A TLANG</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Kan Khamhtu Bawi, ni bang na tlang, Nangmah sin khua a mui bal lo, Bawipa na mui ka hmuhnak lai, Minmei\r\n    zam kha va thianter tuah.</p>\r\n<p><b>2. </b>Ka lung retheih tikah Bawipa, Ka tha a ba ka ih lai ca, Maw ka Bawipa, na tang chungah, Ka thabatnak\r\n    daihter ka duh.</p>\r\n<p><b>3. </b>Bawipa nangmah na um ca-ah, Thihnak caan kha ka thinphang lo, Keimah he um ti awk ca ah, Ka sin nifa ra\r\n    ruah, Bawipa.</p>\r\n<p><b>4. </b>Atu lio na bia a almi, Thawngthabia kha a almi nih, Tuhnu ah an palh nakhnga lo, Lam palhmi kha va hruai\r\n    tuah hna.</p>\r\n<p><b>5. </b>Zanlei ah ngaih a chiami le, Ngandam lo zaang a chiami kha, Nangmah thachin va pe hna law, An lung va\r\n    lawmhter tuah, Bawipa.</p>",
        "id": "32",
        "name": "KAN KHAMHTU BAWI NI BANG A TLANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NI A LIAM ZUAHMAH</h4> <p>Doh is F</p> <p><b>1. </b>Ni kha a liam riahmah cang, Khua kha a mui ciahmah cang, Ka batnak khan i din in, Bawipa, nang he chawnh ka duh.</p> <p><b>2. </b>Nangmah mit ah zeizong te, Fiang te in an lang dih ko, A thlite kan sualnak zong, Nangmah nih kan ngaithiam ko.</p> <p><b>3. </b>Vawlei cung ka nunnak ni, A liam tikah, maw Bawipa, Sual le ngaihchiatnak luat in, Nasin um awk ka la tuah.</p> <p><b>4. </b>Maw ka Bawipa Jesuh Khrih, Sualnak na ngei lo nain, Mi kan sinak na hngalh ko, Cuca'h zaang kan fah ko sawh.</p>",
        "id": "33",
        "name": "NI A LIAM ZUAHMAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NIH A RALKAP A HRUAI HNA</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Ngai u! aunak thawng cu, \"Hodah a kal lai?\" Mi ka khawmhsuat lio ah, Aih, nan ti hnga maw? Ka puanlang cu\r\n    lek in hmaisuang dohnak ah; Pathian le dinnak tanh in hodah kal lai?</p>\r\n<p><b>CHO: </b>Jesuh nih a hruai hna, a ralkap bu cu, Ral an tei in dinnak vawlei a khat lai.</p>\r\n<p><b>2. </b>Pathian thawnnak bochan in ral kan tei lai. Satan ralkap an tho, Ral thuam i hruk u, A thiang le a dingmi\r\n    cu kan dirpi lai; Pathian lei ah tang in ral cu do u si.</p>\r\n<p><b>CHO: </b>Jesuh nih a hruai hna, a ralkap bu cu, Ral an tei in dinnak vawlei a khat lai.</p>\r\n<p><b>3. </b>Rel cawk lo van ralkap hlasak in an ra. \"Kan hruaitu Siangpahrang thangthat si ko seh\" Hmuitinh thiang he\r\n    ka kip in kan i kom cang; An hlasak thawng ngai u, dohnak ah kal u.</p>\r\n<p><b>CHO: </b>Jesuh nih a hruai hna, a ralkap bu cu, Ral an tei in dinnak vawlei a khat lai.</p>",
        "id": "34",
        "name": "JESUH NIH A RALKAP A HRUAI HNA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA NUNNAK, BAWIPA CU THANGTHAT!</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Bawipa thangthat tuah u, A ngan bik Pathian, Kannih khamhnak ca ah lam tha kha a hun, Khamhnak a tha bik\r\n    kha a kan pek ca ah, Mei alh le minmei in a kan kaipi lai.</p>\r\n<p><b>CHO: </b>Nan... aw ngeih vialte in, Bawipa thangthat u, Mi lungchung muihnak kha a run ceuter lai, Amah pen\r\n    dinnak kha a kau chinchin lai, A sermi vial-te nih, A sermi vial-te nih Bawipa an hlorh, Maw ka thlarau thangthat\r\n    tuah.</p>\r\n<p><b>2. </b>Thlarau tlaumi sinah, Tlanhnak kha a pek, A sualmi ca thiannak tiva a luanter, A khamh ciami vialte kha a\r\n    kan dawt i, Kan thlacam a ngaih ca, Bawipa thangthat u.</p>\r\n<p><b>CHO: </b>Nan... aw ngeih vialte in, Bawipa thangthat u, Mi lungchung muihnak kha a run ceuter lai, Amah pen\r\n    dinnak kha a kau chinchin lai, A sermi vial-te nih, A sermi vial-te nih Bawipa an hlorh, Maw ka thlarau thangthat\r\n    tuah.</p>\r\n<p><b>3. </b>Bawipa thangthat tuah u, Kan vansan lioah, A zaangfahnak hri nih khan a kan tlaih cang, Zumh le ruahchan\r\n    in a teimi vialte he, Dawtnak ram ah tling tein kan i tong lai.</p>\r\n<p><b>CHO: </b>Nan... aw ngeih vialte in, Bawipa thangthat u, Mi lungchung muihnak kha a run ceuter lai, Amah pen\r\n    dinnak kha a kau chinchin lai, A sermi vial-te nih, A sermi vial-te nih Bawipa an hlorh, Maw ka thlarau thangthat\r\n    tuah.</p>",
        "id": "35",
        "name": "KA NUNNAK, BAWIPA CU THANGTHAT!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VANRANG TOI A PENGTU</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Vanrang toi a pengtu na si, Ni le thla ah thatnak kan hmuh, Arfi zong kha kan hmuh ca ah, Na lianhngannak\r\n    a lang ngaingai.</p>\r\n<p><b>2. </b>Keimah nunnak kha na si i, Ka kalnak lam kha na ceuter, Zantim caan ah arfi bangin, Na lawmhnak nih a kan\r\n    ceuter.</p>\r\n<p><b>3. </b>Na hmai chiat kha kan zan a si, Na velngeihnak kan chun a si, Chun cha in zaangfahnak a lang, Sual\r\n    khuadawm nih a phen kho lo.</p>\r\n<p><b>4. </b>Na biatak kha kannih kan pe, Luatnak le hnangamnak a si, Nang ca biaktheng kan lung cungah, Mei thiang\r\n    pakhat lawng a ceu tiang.</p>",
        "id": "36",
        "name": "VANRANG TOI A PENGTU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LUNGLAWMHNAK IN KAN IN THANGTHAT</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Lunglawmhnak in kan in thangthat, Sunpar Pathian dawtnak Bawi, Pangpar ni hoih in a par bang, Kan lung\r\n    panh in umter ko, Sual le ngaihchiat minmei tianter, Zumh khawh lonak muihnak zong, a hmunmi lung lawmhnak petu, Ni\r\n    ceunak run kan pe tuah.</p>\r\n<p><b>2. </b>Na sermi nih an in thangthat, Lei le van na cerh dih hna, Arfi le vanmi hla an sa, Thangthat dai lo Bawi\r\n    na si, Lo le tupi, nel le fingtlang, Ramlak pangpar rili luang, va hramthiam le cerhti luang nih, Nangmah lawmh awk\r\n    an kan sawm.</p>\r\n<p><b>3. </b>Leicung mi lawmhnak hla sa u, Deirel arfi an sakmi, Kan Pa dawtnak nih a kan pen, Unau dawtnih a kan tem,\r\n    Hlasak in hmaiah kan fong chin, Harnak ah teitu kan si, ni lei ah hla nih a kan hruai, Teinak nunnak hla a si.</p>",
        "id": "37",
        "name": "LUNGLAWMHNAK IN KAN IN THANGTHAT",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VANPANG CUNG KUTTIAL</h4> <p>Doh is F</p> <p><b>1. </b>Belshazzar le a bawi hawi thongkhat rawldanghnak puai ah, 'Sui hrai in manzu cu an ding,' tiah Cathiang chungah aa tial, Siangpahrang innpi chungah zan i an sopawt ling ah, Vanpang cung i kut a cuangmi nih an thlasen a hlauh hna.</p> <p><b>CHO: </b>Pathian kut vanpang ah a cuang, Pathian kut vanpang ah a cuang, \"Na chambau ko,\" maw \"Na tling ko,\" tinak khi dah a si hnga, Vanpang cungah kut nih ca a tial.</p> <p><b>2. </b>Saltang miraltha Daniel, mi zapi hmai ah a dir, Mi-porhlaw siangpahrang pa cu a palhnak ruangah a sik. Catial cu an rel tikah mi zapi thihnak a si, Siangpahrang pennak a rawk cang, ti in tialmi ca a si.</p> <p><b>CHO: </b>Pathian kut vanpang ah a cuang, Pathian kut vanpang ah a cuang, \"Na chambau ko,\" maw \"Na tling ko,\" tinak khi dah a si hnga, Vanpang cungah kut nih ca a tial.</p> <p><b>3. </b>Dinnak lei ah zumh ngamhnak a ngeihning cu zoh tuah u, Thlarau nih Daniel cu thawnnak a rak pek ca ah a si, Judea ram a inn in maw a saltannak hmun in dik, A Pathian vanpang cung kuttial sullam cu a rak hngalh cang.</p> <p><b>CHO: </b>Pathian kut vanpang ah a cuang, Pathian kut vanpang ah a cuang, \"Na chambau ko,\" maw \"Na tling ko,\" tinak khi dah a si hnga, Vanpang cungah kut nih ca a tial.</p> <p><b>4. </b>Kan tuahsermi vialte zong Pathian kut nih a tial dih, Maw misual na lungthin vialte lianngan Jesuh sinah pe, Mi kip cungah a tlung laimi biaceihnak ni ah cun, Kan sualnak vialte cu vanpang cungah tial a si ve lai.</p> <p><b>CHO: </b>Pathian kut vanpang ah a cuang, Pathian kut vanpang ah a cuang, \"Na chambau ko,\" maw \"Na tling ko,\" tinak khi dah a si hnga, Vanpang cungah kut nih ca a tial.</p>",
        "id": "38",
        "name": "VANPANG CUNG KUTTIAL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN PATHIAN RALHRUANG THAWNG A SI</h4> <p>Doh is D</p> <p><b>1. </b>Kan Pathian ral-hruang thawng a si, A rawk bal lomi ral-hruang, Sual tilian le zawtnak chungah teitu Bawi a si zungzal, Kannih ngaihchiatter awk, Satan nih a kawl ko, A thiam, thawnnak a ngan, Huatnak in aa thuam i, Lei ah a tluk an um lo.</p> <p><b>2. </b>Kan thawnnak lawng hngatchan ahcun, Kan zuamnak cu kan sung lai, Bawi lian bik 'kan bawmtu a si, Pathian nih a thimmi pa, Ahodah a si hnga, Bawi Khrih Jesuh a si, A min bawi Sa-ba-oth, A zungzal a khat ko, Sual raldoh a tei theo lai.</p> <p><b>3. </b>Khuachia khatmi vawlei nih hin, Hrawh awkah kan tlerh hmanh seh, Kan tih lai lo, kan nih tei awk, Pathian nih nawl a kan pek, Tihnung muihnak bawipa, Satan cu kan tih lo, A thinlinh kan in khawh, Zoh tuah a ciam te lai, Bia fang khat nih a thluk lai.</p> <p><b>4. </b>Cu bia cu Pathian bia a si, A zungzal in a hmun ko, Thlarau laksawng kan ta a si, Kan sin a tangmi thawngin, Leicung thawnnak vialte, Pumsa le thilri zong, Lo dih hmanh hna sehlaw, Pathian bia cu a hmun, A pennak zungzal a hmun.</p>",
        "id": "39",
        "name": "KAN PATHIAN RALHRUANG THAWNG A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RILI TI KHA A THEN HNA</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Hlan liopi ah Israel mi cu muihnak sal ah an tang. Pathian lianhngan thawnnak nih cun rili ti cu a then.</p>\r\n<p><b>CHO: </b>Rili ti cu a then, Rili ti cu a then, Jesuh he kan um caah tihmi ka ngei lo, Rili ti hmanh a then.</p>\r\n<p><b>2. </b>Sualnak tilet nih a ka khuh, tukforhnak a zual chin. Bawipa nih a ka ngaihthiam i rili ti cu a then.</p>\r\n<p><b>CHO: </b>Rili ti cu a then, Rili ti cu a then, Jesuh he kan um caah tihmi ka ngei lo, Rili ti hmanh a then.</p>\r\n<p><b>3. </b>Ka lam ah tih awk um hmanh seh, Jesuh he cun ka ngamh. A dawtnak vel he cun ka pawngin a ka um hnawh ko.</p>\r\n<p><b>CHO: </b>Rili ti cu a then, Rili ti cu a then, Jesuh he kan um caah tihmi ka ngei lo, Rili ti hmanh a then.</p>\r\n<p><b>4. </b>Ka thih ni ah cun ka Bawipa, Inn dawh leiah ka kal, Cun, nang nih na ka khamh caah, Rili ti cu na then.</p>\r\n<p><b>CHO: </b>Rili ti cu a then, Rili ti cu a then, Jesuh he kan um caah tihmi ka ngei lo, Rili ti hmanh a then.</p>",
        "id": "40",
        "name": "RILI TI KHA A THEN HNA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZEITLUK IN DAH NA LIANHNGAN KO!</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Bawipa Pathian, na tuahmi thil vialte hi, Ka ruah tikah ka lung nih a phan lo, Arfi le khua-dawm le khua\r\n    ri hna nih khin, Na thil ti khawh-nak kha an langhter ko.</p>\r\n<p><b>CHO: </b>Ka Khamhtu Bawi, nangmah kan thangthat ko, Zeitluk in dah na lianhngan ko! Ka Khamhtu Bawi, nangmah kan\r\n    thangthat ko, Zeitluk in dah na lianhngan ko!</p>\r\n<p><b>2. </b>Fing le tlang le ramlak ah kaa chawh tikah, Thingkung cung va te aw dawh ka theih hna, Tlangsang cungin,\r\n    khua le ram ka vung cuan i, Tivate le thlizil thawng ka theih hna.</p>\r\n<p><b>CHO: </b>Ka Khamhtu Bawi, nangmah kan thangthat ko, Zeitluk in dah na lianhngan ko! Ka Khamhtu Bawi, nangmah kan\r\n    thangthat ko, Zeitluk in dah na lianhngan ko!</p>\r\n<p><b>3. </b>Pathian nih a Fapa kha zuah hin loin, Keimah ca thih awkah a run thlah cang, Vailam cungah ka sualnak kha\r\n    a phawrh i, Sualnak chungin ka luatnak hnga a thi.</p>\r\n<p><b>CHO: </b>Ka Khamhtu Bawi, nangmah kan thangthat ko, Zeitluk in dah na lianhngan ko! Ka Khamhtu Bawi, nangmah kan\r\n    thangthat ko, Zeitluk in dah na lianhngan ko!</p>\r\n<p><b>4. </b>Thangthatnak he Khrih nih a rat than tikah, Lawmhnak inn ah cun a ka kalpi lai, Khi tikah a hmaiah kun in\r\n    ka biak lai, Pathian na lianhngannak kha ka chim lai.</p>\r\n<p><b>CHO: </b>Ka Khamhtu Bawi, nangmah kan thangthat ko, Zeitluk in dah na lianhngan ko! Ka Khamhtu Bawi, nangmah kan\r\n    thangthat ko, Zeitluk in dah na lianhngan ko!</p>",
        "id": "41",
        "name": "ZEITLUK IN DAH NA LIANHNGAN KO!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUMHTLAK NA SINAK A NGAN KO</h4> <p>Doh is Eb</p> <p><b>1. </b>Maw Pathian \"Zumhtlak na sinak\" a ngan ko, Na sinah thlennak thlam a leng bal lo, Na velngeih le zawnruahnak a hmun zungzal, Na si bangin na si zungzal ko lai.</p> <p><b>CHO: </b>\"Zumhtlak na sinak cu, A lian in a ngan ko,\" Zing khat hnu zing khat, thluachuah thar ka hmu. Ka herhmi vialte na kut nih a ka pek, \"Zumhtlak na sinak cu, Bawipa kei ca'h.\"</p> <p><b>2. </b>Cang-zi vang, thal, fur, khuasik caan hna zong nih, Ni, thla le arfi he vanrang cungin, \"Pathian dawtnak khuacaan\" cu an rel lengmang, Zumhtlak na si, na dawtnak a ngan ko.</p> <p><b>CHO: </b>\"Zumhtlak na sinak cu, A lian in a ngan ko,\" Zing khat hnu zing khat, thluachuah thar ka hmu. Ka herhmi vialte na kut nih a ka pek, \"Zumhtlak na sinak cu, Bawipa kei ca'h.\"</p> <p><b>3. </b>Kan sual na ngaihthiamnak le nangmah daihnak, Kan caah lawmhnak le hruaitu an si. Nihin ca thawnnak le hmailei ruahchannak Thluachuah vialte kei le mi kip ca ah.</p> <p><b>CHO: </b>\"Zumhtlak na sinak cu, A lian in a ngan ko,\" Zing khat hnu zing khat, thluachuah thar ka hmu. Ka herhmi vialte na kut nih a ka pek, \"Zumhtlak na sinak cu, Bawipa kei ca'h.\"</p>",
        "id": "42",
        "name": "ZUMHTLAK NA SINAK A NGAN KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A LIAN BIK PATHIAN TUM TUAH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Maw Siangpahrang lian bik, Lian bik Pathian tum tuah, Nangmah min kha, Kan in thangthat awkah, Kan daw\r\n    tuah, Maw Pathian, Teinak le ngannak he, Kan huppheng tuah.</p>\r\n<p><b>2. </b>Maw Pathian Bia tum tuah, Teinak na vainam he, Na fale hna, Kan thlacamnak ngai law, Ral teinak, kan pe\r\n    tuah, A thiangmi Jesuh Khrih, Kan sin tum tuah.</p>\r\n<p><b>3. </b>Maw Thiang Thlarau tum law, Kan lungthin ceuter tuah. Lam ding hmuhsak, Kan lung hnangam ko seh, Kannih\r\n    he, va um tuah, Maw Thiang Thlarau kan chung, Rung lut tuah law.</p>\r\n<p><b>4. </b>Pa, Fapa, Thiang Thlarau, Thum komh Pathian pakhat, Nangmah sinah thangthat le sunparnak, Lianhngan le\r\n    upatnak, Zungzal dong hin loin um camcin seh.</p>",
        "id": "43",
        "name": "A LIAN BIK PATHIAN TUM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LAM KA HMUHSAK</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Ceunak nunnem, hi muihnak chungah hin, lam ka hruai ko, Zan cu a mui ka inn a hla fawn, Lam ka hruai ko,\r\n    Ka ke ka veng ko, ti lawng hi kan hal, Kar khat te lawng, kei ca a za ko lai.</p>\r\n<p><b>2. </b>Lam ka hmuhsak ti in kan nawl bal lo, Ka ngaithiam ko, Ka lam kha keimah nih thim ka rak duh, Lam ka hruai\r\n    ko, Nuamhnak ka duh, sulnak nih a ka uk, Hmasa ka ruamkainak ruat ti sawh hlah.</p>\r\n<p><b>3. </b>Na thawnnak nih atu tiang a ka hruai, Ka hruai ko rih, Lam chukcho le lungpang tilian lakin, Zan a dih\r\n    tiang, Zinglei nichuah tikah ka hmuh te lai, Kalciami hna lunglawmhnak hmai dawh cu.</p>",
        "id": "44",
        "name": "LAM KA HMUHSAK (A/B)",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLICHIA A HRAN AH KAN DORNAK</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Kan himnak lung Jesuh a si, Thlichia a hran ah kan dornak, Harnak zeikhom in kan khamh rih, Thlichia a\r\n    hran ah kan dornak,</p>\r\n<p><b>CHO: </b>Maw, retheimi caah Jesuh kan lungpi, Retheimi ca lungpi a si, Maw, retheimi caah Jesuh kan lungpi,\r\n    Thlichia a hran ah kan dornak.</p>\r\n<p><b>2. </b>Chun ah naidem, zan ah dornak, Thlichia a hran ah kan dornak, Tihnung ral nih kan doh hmanhseh, Thlichia a\r\n    hran ah kan dornak,</p>\r\n<p><b>CHO: </b>Maw, retheimi caah Jesuh kan lungpi, Retheimi ca lungpi a si, Maw, retheimi caah Jesuh kan lungpi,\r\n    Thlichia a hran ah kan dornak.</p>\r\n<p><b>3. </b>Thlichia nih a kan dum tikah, Kan dornak kha Jesuh a si, Himnak hmun in kan zam lai lo, Thlichia a hran ah\r\n    kan dornak,</p>\r\n<p><b>CHO: </b>Maw, retheimi caah Jesuh kan lungpi, Retheimi ca lungpi a si, Maw, retheimi caah Jesuh kan lungpi,\r\n    Thlichia a hran ah kan dornak.</p>\r\n<p><b>4. </b>Maw, kan lungpi, himnak fek bik, thlichia a hran ah kan dornak, Kannih naih ah zungzal um tuah, Thlichia a\r\n    hran ah kan dornak.</p>\r\n<p><b>CHO: </b>Maw, retheimi caah Jesuh kan lungpi, Retheimi ca lungpi a si, Maw, retheimi caah Jesuh kan lungpi,\r\n    Thlichia a hran ah kan dornak.</p>",
        "id": "45",
        "name": "THLICHIA A HRAN AH KAN DORNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A KA HRUAI</h4> <p>Doh is D</p> <p><b>1. </b>Pathian nih a ka hruai zungzal, Vancung lungdaihnak in a khat, Ka tuahnak le ka umnak ah, Jesuh kut in a ka hruai ko.</p> <p><b>CHO: </b>A ka hruai ko, A ka hruai ko, Amah kut in a ka hruai ko, A kut in a ka hruai ca ah, Lung fek zulhnak ka lung a si.</p> <p><b>2. </b>A caanah sifahnak lakah, A caan ah lunglawmhnak lakah, Ti daihnak le tilet lak ah, Jesuh kut in a ka hruai ko.</p> <p><b>CHO: </b>A ka hruai ko, A ka hruai ko, Amah kut in a ka hruai ko, A kut in a ka hruai ca ah, Lung fek zulhnak ka lung a si.</p> <p><b>3. </b>Bawipa, na kut tlaih ka duh ko, Zeitik hmanh ah al ka duh lo, Khuazei hmanh ah na ka hruai ca'h, Hnangam te in ka um zungzal.</p> <p><b>CHO: </b>A ka hruai ko, A ka hruai ko, Amah kut in a ka hruai ko, A kut in a ka hruai ca ah, Lung fek zulhnak ka lung a si.</p> <p><b>4. </b>Vawlei riantuan a dih tikah, Na liannak in ka tei tikah, Jordan na ka tanpi caah, Thihnak tilet ka tih lai lo.</p> <p><b>CHO: </b>A ka hruai ko, A ka hruai ko, Amah kut in a ka hruai ko, A kut in a ka hruai ca ah, Lung fek zulhnak ka lung a si.</p>",
        "id": "46",
        "name": "A KA HRUAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH, KHAMHTU, KA HRUAI TUAH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Jesuh, Khamhtu, ka hruai tuah, Nun caan thlichia tho chungin, Tilet nih a ka khuh lai, Lungpang le\r\n    ti-hrual chungah, Lam ding nang nih ka hmuhsak, Jesuh Khamhtu ka hruai tuah,</p>\r\n<p><b>2. </b>Sunghno nih nau a awih bang, Rilipi cu na awih khawh, Tilet nih na nawl an ngaih, \"Dai u,\" na ti i an dai,\r\n    Rili cungah nawlngeitu, Jesuh Khamhtu ka hruai tuah,</p>\r\n<p><b>3. </b>Ti kam he kaa naih tikah, Tihnung tilet thawng a thang, Na tang ah na ka pom i, Dai tein kaa dinhnak hnga,\r\n    \"Tih hlah! atu kan hruai lai,\" ti na aw-nem ka theihter.</p>",
        "id": "47",
        "name": "JESUH, KHAMHTU, KA HRUAI TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA THUP TUAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>A hmun lung-pi hun cia a um, Ka thup tuah, Sifah re-theihnak a tampi, Ka thup tuah, Bawipa dawtnak ka\r\n    lungchung ah, Mi thlen khawh lonak hmun ah khan, Zungzal a fek lungpi chungah, Ka thup tuah.</p>\r\n<p><b>2. </b>Sualnak ram ka phak nak hnga lo, Ka thup tuah, Bawipa chungah a zungzal in, Ka thup tuah, Vawlei cung\r\n    sunparnak chungah, Sualnak nih a ka forh lio ah, A hmun zungzal lungpi chungah, Ka thup tuah.</p>\r\n<p><b>3. </b>Ngaihchiatnak khua a muih lioah, Ka thup tuah, Sunparnak khua a dei hlan tiang, Ka thup tuah, Jordan tilet\r\n    ka nai tkah, Na tang chungah ka luh ter tuah, A hmun zungzal lungpi chungah, Ka thup tuah.</p>",
        "id": "48",
        "name": "KA THUP TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KEIMAH NAK SANG DEUHMI LUNGPI</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>A tu le atu khua a mui, Na luhnak lam kha a har ko, Ngaihchiatnak atu le atu, Nangmah thlarau kha a huh\r\n    ko,</p>\r\n<p><b>CHO: </b>Jesuh sinah ka tlikter tuah, (tlikter tuah) Keimah nakin a cung Jesuh kha, (Jesuh kha) Jesuh sinah ka\r\n    tlikter tuah, (tlikter tuah) Keimah nakin a cung Jesuh kha.</p>\r\n<p><b>2. </b>Atu le a tu ni a sau, Voi tampi kehlan a rit ko, Vawlei nun lam ka kal lio ah, Jesuh thladem kha a dai ko,</p>\r\n<p><b>CHO: </b>Jesuh sinah ka tlikter tuah, (tlikter tuah) Keimah nakin a cung Jesuh kha, (Jesuh kha) Jesuh sinah ka\r\n    tlikter tuah, (tlikter tuah) Keimah nakin a cung Jesuh kha.</p>\r\n<p><b>3. </b>Jesuh pawngah um ko u si, Kan that le kan chiat ah siseh, Chuk le cho kan zuan ah si seh, Khuamui lak kan\r\n    kal ah siseh.</p>\r\n<p><b>CHO: </b>Jesuh sinah ka tlikter tuah, (tlikter tuah) Keimah nakin a cung Jesuh kha, (Jesuh kha) Jesuh sinah ka\r\n    tlikter tuah, (tlikter tuah) Keimah nakin a cung Jesuh kha.</p>",
        "id": "49",
        "name": "KEIMAH NAK SANG DEUHMI LUNGPI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUNGZAL KAN HNGATCHANMI PATHIAN</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Zungzal kan hngatchanmi Pathian, Kan hmailei ruahchannak, Thlitu hran phenh awkah kan ra, Zungzal hmunmi\r\n    kan inn.</p>\r\n<p><b>2. </b>Nangmah na thutnak thladem ah, Mithiang him in an um, Na ban lawng hmanh kannih caah, Zungzal himnak a si.</p>\r\n<p><b>3. </b>Fing le tlang a sem hlanpi in, Vawlei um hlan zongah, Zungzal a ummi kan Pathian, Zeitik hmanh ah na hmun.</p>\r\n<p><b>4. </b>Nang ca ah cun chan tampi hi, Mitthep kar an tling lo, Hnulei hmailei caan a um lo, Zungzal hmunmi na si.</p>\r\n<p><b>5. </b>Caan nih tilian a luan bangin, Mihrin a liampi hna; Zanmang zinglei a loh bangin, Kannih zong kan si ko.</p>\r\n<p><b>6. </b>A zungzal kan hngatchan Pathian, Kan hmailei ruahchannak; Nangmah huhphenh awkah kan ra, Na inn kan\r\n    phakter tuah.</p>",
        "id": "50",
        "name": "ZUNGZAL KAN HNGATCHANMI PATHIAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AN KHAMH KHAWH</h4> <p>Doh is Bb</p> <p><b>1. </b>Thin-phangmi, nang nih tih hin lo in, Nangmah na Bawipa cung va bochan tuah, Thlacam tuah, na vailam rit hmanhsehlaw, Amah nih an bawmh lai,</p> <p><b>CHO: </b>Amah nih nangmah kha an khamh khawh lai, Amah kut cu ral huhphenhnak a si, Amah nih nangmah kha an khamh khawh lai, Khi a si ca'h phang hlah.</p> <p><b>2. </b>Thinphangmi, na ral kha tam hmanhseh, Ral dohnak lei naa zuamnak lianhter tuah, Bawipa lianngannak he na doh ahcun, Ral-teimi na si cang.</p> <p><b>CHO: </b>Amah nih nangmah kha an khamh khawh lai, Amah kut cu ral huhphenhnak a si, Amah nih nangmah kha an khamh khawh lai, Khi a si ca'h phang hlah.</p> <p><b>3. </b>Thinphangmi, na lam a har tikah Bawipa nih tihnak in an chuahter lai, Bawmhnak na duh ahcun Amah naih tuah, Amah min lianhter tuah,</p> <p><b>CHO: </b>Amah nih nangmah kha an khamh khawh lai, Amah kut cu ral huhphenhnak a si, Amah nih nangmah kha an khamh khawh lai, Khi a si ca'h phang hlah.</p>",
        "id": "51",
        "name": "AN KHAMH KHAWH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN NIH AN ZOH LAI</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Sifah innak ca thinphang hlah, Pathian nih an zoh lai, Amah dawtnak thla tang um tuah, Pathian nih an zoh\r\n    lai.</p>\r\n<p><b>CHO: </b>Pathian nih an zoh lai, Nifa kalnak khuallam ah khan, Amah nih an zohkhenh, Pathian nih an zoh lai (an\r\n    zoh lai)</p>\r\n<p><b>2. </b>A fakpi rian na tuan tikah, Pathian nih an zoh lai, Na kalnak lam phannak um lo, Pathian nih an zoh lai.</p>\r\n<p><b>CHO: </b>Pathian nih an zoh lai, Nifa kalnak khuallam ah khan, Amah nih an zohkhenh, Pathian nih an zoh lai (an\r\n    zoh lai)</p>\r\n<p><b>3. </b>Na duh vialte kha an pek lai, Pathian nih an zoh lai, Pek lo in zei hmanh um lai lo, Pathian nih an zoh\r\n    lai.</p>\r\n<p><b>CHO: </b>Pathian nih an zoh lai, Nifa kalnak khuallam ah khan, Amah nih an zohkhenh, Pathian nih an zoh lai (an\r\n    zoh lai)</p>\r\n<p><b>4. </b>Tukforhnak kha na hmuh tikah, Pathian nih an zoh lai, Amah tangchung ah va um tuah, Pathian nih an zoh\r\n    lai.</p>\r\n<p><b>CHO: </b>Pathian nih an zoh lai, Nifa kalnak khuallam ah khan, Amah nih an zohkhenh, Pathian nih an zoh lai (an\r\n    zoh lai)</p>",
        "id": "52",
        "name": "PATHIAN NIH AN ZOH LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KEI LAWNG KA SI LO</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>\"Tih hlah, na sin ka um,\" A sung bik ceunak, Fino bang in a cer, Ka lam a ceuter. Khuadawm muihnak lakah\r\n    cer in a rung tlang. \"Nang lawng cun kan kaltak bal lai lo,\" tiah a ka ti.</p>\r\n<p><b>CHO: </b>(Kei lawng ka si lo, Kei lawng ka si lo, \"Kan kaltak bal lo,\" a ka ti. Aka kaltak bal lai lo)2 A ka\r\n    kaltak bal lai lo.</p>\r\n<p><b>2. </b>Rose pangpar an ziam tawn, Cuailo par dawh zong, Nitlang zong a dul i, Vankam ceu a lo. Jesuh Sha-ron par\r\n    dawh a mi ca a en. Jesuh, van ni ceu dawh nih a ka kaltak bal lo.</p>\r\n<p><b>CHO: </b>(Kei lawng ka si lo, Kei lawng ka si lo, \"Kan kaltak bal lo,\" a ka ti. Aka kaltak bal lai lo)2 A ka\r\n    kaltak bal lai lo.</p>\r\n<p><b>3. </b>Hmuh khawh lomi harnak nih ka naih hmanhseh, Khamhtu nih a ka naih, \"Tih hlah,\" a ka ti. Thal caan chuak\r\n    caan rel va bang ka tha a nuam. Lunglawm in hlasa u, \"A ka kaltak lo,\" ti in.</p>\r\n<p><b>CHO: </b>(Kei lawng ka si lo, Kei lawng ka si lo, \"Kan kaltak bal lo,\" a ka ti. Aka kaltak bal lai lo)2 A ka\r\n    kaltak bal lai lo.</p>",
        "id": "53",
        "name": "KEI LAWNG KA SI LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KANNIH VAWLEI SERTU</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Kannih vawlei sertu, Kan Pa Pathian a si, Hi hngalhnak ca kan hna a ngam, Thinphannak a um lo, Kan nih\r\n    vawlei sertu, Kan Pa Pathian a si, Van le vawlei, Fing, tlang, rili, Lianhngannak in a ser.</p>\r\n<p><b>2. </b>Kannih vawlei sertu, Kan Pa Pathian a si, Amah lianhnak le khuaruahhar, Kannih sin a langhter, Pathian\r\n    vawlei cungah, Dawhnak tampi a um, Va phun dangdang, Pangpar tam zong, Pathian lawmhnak a si.</p>\r\n<p><b>3. </b>Kannih vawlei sertu, Kan Pa Pathian a si, Thatlonak cu Thawng hmanhsehlaw, Uktu Pathian a si, Raldoh a dih\r\n    rih lo, Jesuh nih a tei lai, Amah thawngin, vawlei le van remnak kha a si lai.</p>",
        "id": "54",
        "name": "KANNIH VAWLEI SERTU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA KHAMHTU KA THUP TUAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Maw ka Khamhtu, keimah thup tuah, Na hmun thiang chungah, Khi khua chung sunparnak toi ah, Nangmah sinah\r\n    ka ra.</p>\r\n<p><b>CHO: </b>Maw, ka Khamhtu Bawipa keimah kha ka thup; Ka dawtmi Khamhtu, Nangmah sinah ka ra.</p>\r\n<p><b>2. </b>Vancung a ceu khua tha chungah, Ka dawt hawikom he, Kan Bawi Jesuh velngeihnak in, Ton thannak a um lai.</p>\r\n<p><b>CHO: </b>Maw, ka Khamhtu Bawipa keimah kha ka thup; Ka dawtmi Khamhtu, Nangmah sinah ka ra.</p>\r\n<p><b>3. </b>Maw ka Khamhtu, keimah thup tuah, Na hmun thiang chungah, Tili cung vate a zuan bang, Nangmah sinah ka ra.</p>\r\n<p><b>CHO: </b>Maw, ka Khamhtu Bawipa keimah kha ka thup; Ka dawtmi Khamhtu, Nangmah sinah ka ra.</p>",
        "id": "55",
        "name": "KA KHAMHTU KA THUP TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN KUT CHUNGAH KA UM</h4> <p>Doh is C</p> <p><b>1. </b>Ka Khamhtu Bawi a ka hruaitu he cun, Thil zeihmanh ka cung tlung seh, ka him ko, Thlichia le ruahpi in a ka khamh lai, Amah kut chungah ka um.</p> <p><b>CHO: </b>Amah kut chungah ka um, Amah kut chungah ka um, Thil zeihmanh ka cung tlung seh ka him ko. Amah kut chungah ka um.</p> <p><b>2. </b>A dawtnak tang chungah a ka pom i, Daihnak bia kha a aw nih a ka chimh, Pathian nih a ka ven ca'h ka him ko, Amah kut chungah ka um.</p> <p><b>CHO: </b>Amah kut chungah ka um, Amah kut chungah ka um, Thil zeihmanh ka cung tlung seh ka him ko. Amah kut chungah ka um.</p> <p><b>3. </b>Amah nih ka nunnak a ven ca ah, Zeihmanh nih an kan then kho bal lai lo, Amah nih a ka huhphenh lai ka hngalh, Amah kut chungah ka um.</p> <p><b>CHO: </b>Amah kut chungah ka um, Amah kut chungah ka um, Thil zeihmanh ka cung tlung seh ka him ko. Amah kut chungah ka um.</p>",
        "id": "56",
        "name": "PATHIAN KUT CHUNGAH KA UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUADEI HLAN TIANG KAN UMPI HNA LAI</h4> <p>Doh is Eb</p> <p><b>1. </b>Na velchum ah thli a hran ca, Lawng a pil dengmang, Thli nih a hranh i a rawk deng, A thuk ti chungah.</p> <p><b>CHO: </b>Khamhbawi kha zoh u law, nan hnangam tuah u, \"Khuadei tiang kan umpi hna lai, Kan khamh lai, tih hlah u,\" a ti; Asi, kan khamh hna lai, tiah a ti, Khuadei tiang kan umpi hna lai. (pi hna lai)</p> <p><b>2. </b>Ruahchannak a dihmi hna kha, Lawng cungah an um, Bawipa auhnak aw an theih in, An lung aa lawm than,</p> <p><b>CHO: </b>Khamhbawi kha zoh u law, nan hnangam tuah u, \"Khuadei tiang kan umpi hna lai, Kan khamh lai, tih hlah u,\" a ti; Asi, kan khamh hna lai, tiah a ti, Khuadei tiang kan umpi hna lai. (pi hna lai)</p> <p><b>3. </b>Tilet cung thlichia a hran lio ah, Lawng a pil dengmang, Khamh awkah Jesuh a kal i, Phannak a dai cang.</p> <p><b>CHO: </b>Khamhbawi kha zoh u law, nan hnangam tuah u, \"Khuadei tiang kan umpi hna lai, Kan khamh lai, tih hlah u,\" a ti; Asi, kan khamh hna lai, tiah a ti, Khuadei tiang kan umpi hna lai. (pi hna lai)</p> <p><b>4. </b>Nannih dawtnak ca a tum i, Nang ca'h a thi cang; A tha lo hlaw in va zum tuah, Inn tha na phak lai.</p> <p><b>CHO: </b>Khamhbawi kha zoh u law, nan hnangam tuah u, \"Khuadei tiang kan umpi hna lai, Kan khamh lai, tih hlah u,\" a ti; Asi, kan khamh hna lai, tiah a ti, Khuadei tiang kan umpi hna lai. (pi hna lai)</p>",
        "id": "57",
        "name": "KHUADEI HLAN TIANG KAN UMPI HNA LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A KA THUH LAI</h4> <p>Doh is G</p> <p><b>1. </b>Vawlei sualnak tilet a tho, Tih awk thli-tu hran tikah, Bawipa nangmah thladem tangah, Dor awk caah ka zam lai.</p> <p><b>CHO: </b>Ral nih an ka tei nak hnga lo, Ka Bawipa run ka zoh khenh tuah, Bawipa, nangmah thladem tangah, Zungzal na ka zohkhenh lai.</p> <p><b>2. </b>Sifah hneksaknak um hmanh seh, Inn tha luh cu ka duh chin, A ka dawt ca'h thinhung bangin, Chimh-hrinnak a hna a tla.</p> <p><b>CHO: </b>Ral nih an ka tei nak hnga lo, Ka Bawipa run ka zoh khenh tuah, Bawipa, nangmah thladem tangah, Zungzal na ka zohkhenh lai.</p> <p><b>3. </b>Rulhreu le a ralkap bu nih, Serhsat an ka duh chinchin, Sihmanhsehlaw ka Pathian nih, Lunglawmhnak a ka pek lai.</p> <p><b>CHO: </b>Ral nih an ka tei nak hnga lo, Ka Bawipa run ka zoh khenh tuah, Bawipa, nangmah thladem tangah, Zungzal na ka zohkhenh lai.</p> <p><b>4. </b>Vawlei vailam ka put lioah, Ngaihchiatnak thli a hrang tawn, Jesuh ka thlarau huhphenh ca'h, Zeihmanh a ka hrawk kho lo.</p> <p><b>CHO: </b>Ral nih an ka tei nak hnga lo, Ka Bawipa run ka zoh khenh tuah, Bawipa, nangmah thladem tangah, Zungzal na ka zohkhenh lai.</p>",
        "id": "58",
        "name": "A KA THUH LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUMHNAK HRAMFEK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Maw mithiang hna, nannih nan zumhnak hram kha, Pathian bia chungah fek te in a hmun ko, Bawipa Pathian nih\r\n    a chimmi bia tha cu, Bochan awk tlak le zumh awk tlak bik na si. Bochan awk tlak le zumh awk tlak bik na si.</p>\r\n<p><b>2. </b>\"Nangmah he ka um cang, na thinphang ti hlah, Nangmah na Pathian ka si ca ah kan auh, Khuaruahharnak ka\r\n    kut chungah nangmah kha, Na thazang le na lung kha ka hmunhter lai. Na thazang le na lung kha ka hmunhter lai.</p>\r\n<p><b>3. </b>\"Sifahnak tili chung na kalnak hnga lo, Kan khamh cang, zeihmanh phang hlah, na rawk lai lo, Thihnak le\r\n    sualnak chungin na luat kho cang, Nangmah thianter awkah ka thi ka thlet cang. Nangmah thianter awkah ka thi ka\r\n    thlet cang.</p>\r\n<p><b>4. </b>\"Tiva bangin zaangfahnak ka luanter cang, Hi ti a dingmi hell chung an phan lai lo, A zungzal kan\r\n    zohkhenh, kan bawmh hna lai i, A zungzal nanmah he kan um ti lai ta. A zungzal nanmah he kan um ti lai ta.\"</p>\r\n<p><b>5. </b>\"Jesuh bochan in a ummi vialte kha, Keimah nih zeitik hmanh ka kaltak lai lo, Satan kut chung fah in awk\r\n    ka siang lai lo, Zeitik hmanh keimah he zungzal nan um lai. Zeitik hmanh keimah he zungzal nan um lai.\"</p>",
        "id": "59",
        "name": "ZUMHNAK HRAMFEK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN HE UM</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Vawlei cung tihphannak tam um hmanhseh, Zeica ahdah ka tih hnga, A lang lo Pathian he ka kal ahcun,\r\n    Khuazei hmanh ah ka kal ngam hnga.</p>\r\n<p><b>CHO: </b>Cucaah hawile hna Pathian lei ah nan lung fek seh, Zeitik hmanh lung rawk loin, Pathian sin kan phak\r\n    ahcun, Maw lawmhnak zeitluk in dah kan hmuh lai.</p>\r\n<p><b>2. </b>Sifahnak a phun kip tlung hmanhsehlaw, Zeicaahdah ka tih hnga, Pathian kha keimah sin a um ahcun, Khuazei\r\n    hmanh ah ka kal ngam lai.</p>\r\n<p><b>CHO: </b>Cucaah hawile hna Pathian lei ah nan lung fek seh, Zeitik hmanh lung rawk loin, Pathian sin kan phak\r\n    ahcun, Maw lawmhnak zeitluk in dah kan hmuh lai.</p>\r\n<p><b>3. </b>Thihnak hor tihnung chung um hmanh ninglaw, Zei caah dah ka tih hnga, Ka kut fek tein a ka tlaih ahcun,\r\n    Khua zeihmanh ah ka kal ngam hnga.</p>\r\n<p><b>CHO: </b>Cucaah hawile hna Pathian lei ah nan lung fek seh, Zeitik hmanh lung rawk loin, Pathian sin kan phak\r\n    ahcun, Maw lawmhnak zeitluk in dah kan hmuh lai.</p>\r\n<p><b>4. </b>Miphun vialte nih ka ral hmanhsehlaw, Zei caah dah ka tih hnga, Pathian lianhnak ka cung a um hnuah,\r\n    Khuazei hmanh ah ka kal ngam lai.</p>\r\n<p><b>CHO: </b>Cucaah hawile hna Pathian lei ah nan lung fek seh, Zeitik hmanh lung rawk loin, Pathian sin kan phak\r\n    ahcun, Maw lawmhnak zeitluk in dah kan hmuh lai.</p>",
        "id": "60",
        "name": "PATHIAN HE UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHBAWI HRUAINAK KIP AH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Tiva dawh luannak nelrawn tha ah siseh, Rili tilet a thomi lakah siseh, Khamhbawi Jesuh nih a ka hruainak\r\n    kip ah, Thawngtha bia chim ah lunglawmin ka kal lai.</p>\r\n<p><b>CHO: </b>Khamhbawi hruainak kip ah, Lunglawm in ka kal lai, Khamhbawi nih a ka hruainak ah lawm in ka kal lai.</p>\r\n<p><b>2. </b>Lam harnak lungpang le horkuang ah siseh, Totho lak le thlichia hrang lakah siseh, A hawi sin in a tlaumi\r\n    tuu kawl awkah, Khamhbawi a ka hruai ahcun ka kal ko lai.</p>\r\n<p><b>CHO: </b>Khamhbawi hruainak kip ah, Lunglawm in ka kal lai, Khamhbawi nih a ka hruainak ah lawm in ka kal lai.</p>\r\n<p><b>3. </b>Khamhbawi a ka hruainak kip ah ka zulh lai, Lawmh le ngaihchiat zongah a nawl ka ngaih lai, Himnak lam kha\r\n    amah nih cun a hngalh i, Ni bang a ceumi inn ah a ka kalpi.</p>\r\n<p><b>CHO: </b>Khamhbawi hruainak kip ah, Lunglawm in ka kal lai, Khamhbawi nih a ka hruainak ah lawm in ka kal lai.</p>",
        "id": "61",
        "name": "KHAMHBAWI HRUAINAK KIP AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA THLARAU A THUH</h4> <p>Doh is D</p> <p><b>1. </b>Jesuh ka Bawipa cu ka Khamhtu a si, Khamhtu khuaruahhar ngai a si, Lungpi chungah ka thlarau kha a thuh i, Lawmhnak tiva kha ka hmuh hna.</p> <p><b>CHO: </b>Lungpi chungah ka thlarau kha a thuh ko, Thladem petu lungpi chungah, Amah dawtnak chung ah-khan ka nunnak cu, A chiah i a ka huhphenh fawn, A kut in a ka huphenh ko.</p> <p><b>2. </b>Jesuh ka Bawipa cu ka Khamhtu a si, Ka thilrit kha a ka lakpiak, Amah nih a ka dawmh i ka ril lai lo, Nifatin thazang a ka pek.</p> <p><b>CHO: </b>Lungpi chungah ka thlarau kha a thuh ko, Thladem petu lungpi chungah, Amah dawtnak chung ah-khan ka nunnak cu, A chiah i a ka huhphenh fawn, A kut in a ka huphenh ko.</p> <p><b>3. </b>Thluachuah relcawklo in a ka pek zungzal, Thiltha ka hman cawk lo tiangin, Ka lunglawmh in Pathian cu ka thangthat ko, Cu bantuk keimah Tlantu cu.</p> <p><b>CHO: </b>Lungpi chungah ka thlarau kha a thuh ko, Thladem petu lungpi chungah, Amah dawtnak chung ah-khan ka nunnak cu, A chiah i a ka huhphenh fawn, A kut in a ka huphenh ko.</p> <p><b>4. </b>Puanrang aih in van i A-mah ton awkah, Keimah cu ka hung kai tikah, Mi thong tampi hna he A-mah dawtnak cu, Kei zong fak pi'n ka sa ve lai.</p> <p><b>CHO: </b>Lungpi chungah ka thlarau kha a thuh ko, Thladem petu lungpi chungah, Amah dawtnak chung ah-khan ka nunnak cu, A chiah i a ka huhphenh fawn, A kut in a ka huphenh ko.</p>",
        "id": "62",
        "name": "KA THLARAU A THUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A THLA TANGAH</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Bawipa thla tang, him tein ka dor zungzal, Zan tlai in thlichia hrang chin hmanhsehlaw, Ka zumh ko rih\r\n    lai, A kut in a ka hruai, A ka tlanh cang i a fa ka si cang.</p>\r\n<p><b>CHO: </b>A thla tangah ka um zungzal, Amah a kan dawtnak in zeihmanh nih a ka then kho lai lo, A thla tangah ka\r\n    him ko.</p>\r\n<p><b>2. </b>A thla tang cu ngaihchiami dornak a si, Bawipa sin ah lung daih dinhnak a um, Vawlei ah kei ca damnak si a\r\n    um lo, Khikhin lung daih le hnangamnak ka hmu.</p>\r\n<p><b>CHO: </b>A thla tangah ka um zungzal, Amah a kan dawtnak in zeihmanh nih a ka then kho lai lo, A thla tangah ka\r\n    him ko.</p>\r\n<p><b>3. </b>Bawipa thla tang a sung bik lunglawmhnak ah, Vawlei harnak a dongh tiang ka um lai, A ka huhphenh ca sual\r\n    nih a ka tei lo, Bawi Jesuh hngatchan in ka him zungzal.</p>\r\n<p><b>CHO: </b>A thla tangah ka um zungzal, Amah a kan dawtnak in zeihmanh nih a ka then kho lai lo, A thla tangah ka\r\n    him ko.</p>",
        "id": "63",
        "name": "A THLA TANGAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SAWMKUA LE PAKUA</h4> <p>Doh is Ab</p> <p><b>1. </b>Pathian tuurun kha him te in an um, Sawm kua le pakua kha an bok, Tuu pakhat cu a khaltu sinin a chuak, A tha bik sui khua chungin a chuak, Tuukhal lungnem zohkhenhnak chungin a chuak, Ram harnak ka le hlingbur lakah khan, Ram harnak ka le hlingbur lakah khan.</p> <p><b>2. </b>Bawipa, mah' hin tlanh ciami an um ko, Nangmah ca ah a za lo maw? \"Hi zong hi keimah ta,\" Tuukhal nih a ti, \"Keimah sin in a chuakmi a si, Harnak chung le ramlak ah um hmanhsehlaw, Tuu kha kawl awkah keimah ka kal lai, Tuukha kawl awkah keimah ka kal lai.\"</p> <p><b>3. </b>Tlanhmi nih a Tlantu lam a hngal lo, A thuk horkuang a tanmi kha, Lam har bik i tuu aw kha a theih tikah, Bawipa nih hor thuk kha a tan ko, Ramlak i tuu tlaumi cu a va hmuh cang, A tlau i bawmh herhmi kha a bawmh cang, A tlau i bawmhherhmi kha a bawmh cang,</p> <p><b>4. </b>Ramthuk lak i a tlaumi tuu nih khan, Na thlet thi kha a hngal lo maw? A zammi tuu kha na hmuh than hlan tiangin, Na thisen chuakmi kha a hngal lo. Bawipa na innak cu chap chin lengmang in, Ramlak hling nih nifa an in chunh ko Ramlak hling nih nifa an in chunh ko.</p> <p><b>5. </b>Tlang sang le horkuang thuk lungpi phen in, lunglawmhnak aw thawng a hung thang, Cu lunglawmhnak cu van kutka a phan i, \"Lawm tuah u, tuu ka hmuh cang,\" a ti, Bawi thutdan velchum i vanmi nih an leh, \"Hallelujah! Bawipa nih a hmuh cang! Hallelujah! Bawipa nih a hmuh cang!\"</p>",
        "id": "64",
        "name": "SAWMKUA LE PAKUA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TLAWMPAL KAN CAWL HNUAH</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>A tlawm-pal kan cawl hnuah van ah kan i pum, Tlawmpal sifah in hnuah van ah kan i pum. Vailamtahnak kan\r\n    put hnuah Bawi Jesuh he kan um te lai, A tlawmpal kan cawl hnuah van ah kan i pum.</p>\r\n<p><b>CHO: </b>Thihnak kan lonh tikah hnangamnak kan hmuh lai, Retheihnak um loin van ah kan i pum.</p>\r\n<p><b>2. </b>A tlawmpal kan tah hnuah van ah kan i pum, A tlawm pal kan ngan hnu ah van ah kan i pum. Tukforh tlawmte\r\n    kan in hnuah vancung khua ah kan pum te lai, Faphal tlawmpal kan pumhtak, Van ah kan i pum.</p>\r\n<p><b>CHO: </b>Thihnak kan lonh tikah hnangamnak kan hmuh lai, Retheihnak um loin van ah kan i pum.</p>\r\n<p><b>3. </b>Dawtmi he kan i then i van ah kan i pum Dawtnak bia kha kan chim i van ah kan i pum. Thihnak tiva kan tan\r\n    hnu in Kanaan ram ah kan phan theo lai. A tlawmpal kan cawl hnuah, Van ah kan i pum.</p>\r\n<p><b>CHO: </b>Thihnak kan lonh tikah hnangamnak kan hmuh lai, Retheihnak um loin van ah kan i pum.</p>",
        "id": "65",
        "name": "TLAWMPAL KAN CAWL HNUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA CHUNGAH KA THUP</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Ngaihchiat le sifahnak ka in lioah khan, Ka thlarau Jesuh sinah zuan a duh ta, Kei sual retheimi na fa si\r\n    ka duh ko, A zungzal Pathian keimah ka huppheng tuah</p>\r\n<p><b>CHO: </b>Nangmah chungah, ka huppheng tuah, Azungzal Pathian keimah ka huppheng tuah.</p>\r\n<p><b>2. </b>Chun hnangamnak le zan ngaihchiatnak lakah, Tukforhnak a tampi ka in lioah khan, Hi vawlei nun chung tilet\r\n    tho lakah hin, A zungzal Pathian keimah ka huppheng tuah.</p>\r\n<p><b>CHO: </b>Nangmah chungah, ka huppheng tuah, Azungzal Pathian keimah ka huppheng tuah.</p>\r\n<p><b>3. </b>Ral he kan i doh caan a tampi tikah, A ka hupphengtu sin ka zoh i ka chimh, Hneksaknak rili chung tilet\r\n    thawh tikah, Jesuh, ka thlarau hngatchannak nang na si.</p>\r\n<p><b>CHO: </b>Nangmah chungah, ka huppheng tuah, Azungzal Pathian keimah ka huppheng tuah.</p>",
        "id": "66",
        "name": "NA CHUNGAH KA THUP",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA HERHNAK BANG ZAANG KAN CHAP LAI</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Ral le tihnak a nai tikah, Ka hna nih a theih a thawng kha, \"Na herhnak bang zaang kan chap lai,\"\r\n    Khamhbawi Jesuh nih a ka chimh.</p>\r\n<p><b>CHO: </b>A bia ka ral lung hau a si, Khi bia ah keimah nih kaa dor; Nangmah na nun a sau bangin, \"Na herhnak bang\r\n    zaang kan chap lai.\"</p>\r\n<p><b>2. </b>Hi bang biakam ka hmuh lioah Ka lung chung hna a ngam zungzal, Zeitintiah na nun chung vial te, \"Na\r\n    herhnak bang zaang kan chap lai.\"</p>\r\n<p><b>CHO: </b>A bia ka ral lung hau a si, Khi bia ah keimah nih kaa dor; Nangmah na nun a sau bangin, \"Na herhnak bang\r\n    zaang kan chap lai.\"</p>\r\n<p><b>3. </b>Ka thihnak caan a nai tikah Ka zumh rih lai, na biakam kha, Ka zumh bang in ka nun lioah, \"Na herhnak bang\r\n    zaang kan chap lai.\"</p>\r\n<p><b>CHO: </b>A bia ka ral lung hau a si, Khi bia ah keimah nih kaa dor; Nangmah na nun a sau bangin, \"Na herhnak bang\r\n    zaang kan chap lai.\"</p>",
        "id": "67",
        "name": "NA HERHNAK BANG ZAANG KAN CHAP LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NGAIHMANH, PATHIAN DAWTNAK CU</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Ngai hmanh u, Pathian dawtnak cu, Khuaruahhar ngai a si, Pathian fa ah misual hmanh hi, A kan canter dah\r\n    ngai.</p>\r\n<p><b>CHO: </b>Ngai hmanh! Khuaruahhar dawtnak, Pathian a kan dawtnak cu zeitluk in dah a lianhngan! Pathian fa a kan\r\n    ti cang. A khamhmi kan si caah.</p>\r\n<p><b>2. </b>Kan ca a thi a thlet ca ah, Khamhbawi he kan i naih, Ka fa dawtmi hna tiah a au, A tang ah kan um lai.</p>\r\n<p><b>CHO: </b>Ngai hmanh! Khuaruahhar dawtnak, Pathian a kan dawtnak cu zeitluk in dah a lianhngan! Pathian fa a kan\r\n    ti cang. A khamhmi kan si caah.</p>\r\n<p><b>3. </b>Kan sunpar nak zei bantuk dah, Atu a lang rih lo. Khamhbawi a langh than te tikah, Amah bang kan si lai.</p>\r\n<p><b>CHO: </b>Ngai hmanh! Khuaruahhar dawtnak, Pathian a kan dawtnak cu zeitluk in dah a lianhngan! Pathian fa a kan\r\n    ti cang. A khamhmi kan si caah.</p>\r\n<p><b>4. </b>Khi bia a zummi vialte cu, Khamhbawi bang kan si lai, Thihnak teitu minthang Khamhbawi, Na hmai hmuh ka\r\n    duh ko.</p>\r\n<p><b>CHO: </b>Ngai hmanh! Khuaruahhar dawtnak, Pathian a kan dawtnak cu zeitluk in dah a lianhngan! Pathian fa a kan\r\n    ti cang. A khamhmi kan si caah.</p>",
        "id": "68",
        "name": "NGAIHMANH, PATHIAN DAWTNAK CU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DAWTNAK NIH A KA CAWI</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Sualnak chungah ka tla cang, Daihnak tikam hlat ah, Ka lung chung kha a thur tuk, Ka chuak than kho ti lo,\r\n    Siseh rili Bawipa nih, Ka aunak kha a theih, Tichungin a ka cawi cang. Atu ka him.</p>\r\n<p><b>CHO: </b>A dawtnak nih (nak nih) A ka cawi cang, (cawi cang) Bawmtu um lo tikah. Adawtnak nih, (Aka cawi cang).</p>\r\n<p><b>2. </b>Amah ka lung ka pek dih, Amah tlaihchannak in, A sunparnak chung ka um, A thangthat hla ka sa, A ngan a\r\n    dingmi dawtnak, Hla dawh bik he aa tlak, Zungzal dawt riantuannak zong, Amah pe u,</p>\r\n<p><b>CHO: </b>A dawtnak nih (nak nih) A ka cawi cang, (cawi cang) Bawmtu um lo tikah. Adawtnak nih, (Aka cawi cang).</p>\r\n<p><b>3. </b>A phang thlarau van zoh tuah, Jesuh a khamh khawh dih, A dawtnak in an cawi lai, Rili tilet chungin, Rili\r\n    uktu Bawipa kha, A bia tilet an ngaih, Na Khamhbawi si awk a duh, Nihin siter,</p>\r\n<p><b>CHO: </b>A dawtnak nih (nak nih) A ka cawi cang, (cawi cang) Bawmtu um lo tikah. Adawtnak nih, (Aka cawi cang).</p>",
        "id": "69",
        "name": "DAWTNAK NIH A KA CAWI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHTU KA HRUAI</h4> <p>Doh is Db</p> <p><b>1. </b>Lam kha ka palh nakhnga lo, (nak hnga lo) Bawipa, lam ka hmuhsak tuah, (hmuhsak tuah) Na sinah ka um lioah (um lioah) Ral nih an ka hrawk kho lo (hrawk kho lo)</p> <p><b>CHO: </b>Lam ka hmuhsak, Bawipa lam ka hmuhsak tuah, Lam kha ka palh nak hnga lo, (nak hnga lo) Khamhbawi lam ka hmuhsak tuah (hmuhsak tuah)</p> <p><b>2. </b>Tilet kha a thawh tikah, Ka thlarau huhphenh awk ah, Keimah sinah va um tuah, Na zaangfahnak ka bochan.</p> <p><b>CHO: </b>Lam ka hmuhsak, Bawipa lam ka hmuhsak tuah, Lam kha ka palh nak hnga lo, (nak hnga lo) Khamhbawi lam ka hmuhsak tuah (hmuhsak tuah)</p> <p><b>3. </b>Numnak thlitu a hran ca'h, Mitthli a hulnak khua ah, Keimah ka phak hlan tiangin, Khamhbawi, lam ka hmuhsak tuah.</p> <p><b>CHO: </b>Lam ka hmuhsak, Bawipa lam ka hmuhsak tuah, Lam kha ka palh nak hnga lo, (nak hnga lo) Khamhbawi lam ka hmuhsak tuah (hmuhsak tuah)</p>",
        "id": "70",
        "name": "KHAMHTU KA HRUAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUARUAHHAR DAWTNAK</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>A sual cia vawlei cung mi kha, Pathian nih a dawt hna; A tha bik khamhnak sung bik kha, Man loin a pek\r\n    hna.</p>\r\n<p><b>CHO: </b>Maw khuaruahharnak ngaingai, Jesuh a kan dawt nak; Kannih khamhnak ca Amah cu Kalvari ah a thi.</p>\r\n<p><b>2. </b>Kan zumh ahcun kan Bawi a si, A nung than Pathian Fa, Thihnak in a kan khamh cang i, A thi in a kan tawl,</p>\r\n<p><b>CHO: </b>Maw khuaruahharnak ngaingai, Jesuh a kan dawt nak; Kannih khamhnak ca Amah cu Kalvari ah a thi.</p>\r\n<p><b>3. </b>Dawtnak in a tlinter dih cang, A mithiang hna sinah, Bawi Jesuh bia an zumh caah, Dinhdaihnak kha an hmuh,</p>\r\n<p><b>CHO: </b>Maw khuaruahharnak ngaingai, Jesuh a kan dawt nak; Kannih khamhnak ca Amah cu Kalvari ah a thi.</p>\r\n<p><b>4. </b>A zummi lunglawm in kal u, Vancung a tha inn ah, Vawlei ah nan zumhnak bangin, Vancung ah nan hmuh lai.</p>\r\n<p><b>CHO: </b>Maw khuaruahharnak ngaingai, Jesuh a kan dawt nak; Kannih khamhnak ca Amah cu Kalvari ah a thi.</p>",
        "id": "71",
        "name": "KHUARUAHHAR DAWTNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DAWTNAK NIH VAILAM AH A THLAI</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Vailam ah Khamhtu a thi, Thiannak cerhka a hun cang, Ka sualnak vialte a thianter lai, Dawtnak thukpi a\r\n    ngeih ca, A Pa thutdan a kal tak, A kong zeihmanh ka chim kho rih lo.</p>\r\n<p><b>CHO: </b>Khenhmi thir nih an tlai lo, Siseh a ka dawtnak nih, Ka bawipa cu vailam ah a thlai, Ka caah thihnak a\r\n    in, Kei cu mi luat ka si cang. (Jesuh lawng nih sual man a cham khawh).</p>\r\n<p><b>2. </b>Hnabei dong ka si lioah, Ka sual phawrh dingin a ra, Kei ca thi ding dang ho an um lo, Ka nunnak vialte ka\r\n    pek, Thangthatnak hla ka sa lai, Khuaruahhar vel in a ka khamh ca.</p>\r\n<p><b>CHO: </b>Khenhmi thir nih an tlai lo, Siseh a ka dawtnak nih, Ka bawipa cu vailam ah a thlai, Ka caah thihnak a\r\n    in, Kei cu mi luat ka si cang. (Jesuh lawng nih sual man a cham khawh).</p>\r\n<p><b>3. </b>Ka sual lung a thianter cang, Thlarau in a ka umpi Nifa ka thilrit a ka phawrhpiak. Ka vahvaihnak hmun\r\n    kipah, Ka inn dawh cu ka naih chin, Cu hmun ah Bawipa cu ka hmuh lai.</p>\r\n<p><b>CHO: </b>Khenhmi thir nih an tlai lo, Siseh a ka dawtnak nih, Ka bawipa cu vailam ah a thlai, Ka caah thihnak a\r\n    in, Kei cu mi luat ka si cang. (Jesuh lawng nih sual man a cham khawh).</p>",
        "id": "72",
        "name": "DAWTNAK NIH VAILAM AH A THLAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A TANG CHUNGAH KA UM!</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Lawmhnak le hawikomhnak tha ka hmuh cang, A zungzal, A tang chungah ka um, Lunglawmhnak le daihnak ah ka\r\n    um cang, A zungzal a tang chungah ka um.</p>\r\n<p><b>CHO: </b>Amah hngatchan, Tihphannak in ka luat dih cang, Amah hngat chan, A zungzal a tang chungah ka um.</p>\r\n<p><b>2. </b>Lam ka kal lioah phannak a um lo, A zungzal, A tang chungah ka um, Nifate in lam a ceu chin lengmang, A\r\n    zungzal a tang chungah ka um.</p>\r\n<p><b>CHO: </b>Amah hngatchan, Tihphannak in ka luat dih cang, Amah hngat chan, A zungzal a tang chungah ka um.</p>\r\n<p><b>3. </b>Phannak le tihnak a um kho hnga maw, A zungzal, A tang chungah ka um, Bawipa naih tikah, Lawmhnak kha ka\r\n    hmuh, A zungzal a tang chungah ka um.</p>\r\n<p><b>CHO: </b>Amah hngatchan, Tihphannak in ka luat dih cang, Amah hngat chan, A zungzal a tang chungah ka um.</p>",
        "id": "73",
        "name": "A TANG CHUNGAH KA UM!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA NANGMAH KAN DAWT DEUH</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Vawlei chawhlawn vialte nakin, Nangmah kha kan dawt deuh, A rawk kho lomi hnangamnak, Na ka zaangfah caah.</p>\r\n<p><b>CHO: </b>Dawtnak le velngeihnak bia kha (nak via kha) A cheu hmanh kan thei lo, Thiannak kong kha kan chim ahcun,\r\n    A cheu hmanh kan thei lo.</p>\r\n<p><b>2. </b>Vawlei kawidua vialte nakin, Nangmah kha kan dawt deuh, Nangmah lawng kha hla tha nakin, A zungzal kan\r\n    ruah deuh.</p>\r\n<p><b>CHO: </b>Dawtnak le velngeihnak bia kha (nak via kha) A cheu hmanh kan thei lo, Thiannak kong kha kan chim ahcun,\r\n    A cheu hmanh kan thei lo.</p>\r\n<p><b>3. </b>Ka lung kha na ka lawmhter cang, Hi ca zungzal kaa lawm, Dawtnak kha a um lo ahcun, Lungrawhnak a um lai.</p>\r\n<p><b>CHO: </b>Dawtnak le velngeihnak bia kha (nak via kha) A cheu hmanh kan thei lo, Thiannak kong kha kan chim ahcun,\r\n    A cheu hmanh kan thei lo.</p>\r\n<p><b>4. </b>Maw a sung bik ka Khamhtu Bawi, Nang he kan um ahcun; Vawlei cung khuazei ka hmanh ah, Zeitluk in kan i\r\n    lawm!</p>\r\n<p><b>CHO: </b>Dawtnak le velngeihnak bia kha (nak via kha) A cheu hmanh kan thei lo, Thiannak kong kha kan chim ahcun,\r\n    A cheu hmanh kan thei lo.</p>",
        "id": "74",
        "name": "BAWIPA NANGMAH KAN DAWT DEUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUARUAHHAR VEL</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Khuaruahhar vel a va thlum dah, Kei santlai lo a khamh, Ka rak tlau nain a ka hmuh, Ka mit a deiter than.</p>\r\n<p><b>2. </b>Cu ral nih ka phannak a hloh, Tihnak vialte an lo, Zumhnak ka ngeih hnu in ka hngalh, Cu vel a sunlawi\r\n    zia.</p>\r\n<p><b>3. </b>Tihphan awk le harnak phun kip, Ton bu in ka ra cang, Cu vel nih cun ka hna ngamter, Inn ah a ka hruai\r\n    lai.</p>\r\n<p><b>4. </b>Zungzal hmun nuam kan um hnu cun, Ni bangin kan ceu lai, Pathian kan thangthat zungzal lai, Thabat a um\r\n    lai lo.</p>",
        "id": "75",
        "name": "KHUARUAHHAR VEL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MAW BETHLEHEM NANG KHUA HMETE</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Maw Bethlehem nang khua hmete, Dai tein na um ziar ko! Naa hngilh karah nangmah cungin, Dai tein arfi an\r\n    lan. A daimi na lam cung ah, Zungzal ceunak a tlang, Kum tam ruahchannak le tihnak, Nangmah ah an i tong.</p>\r\n<p><b>2. </b>Maw nannih deirel arfi hna, Mithiang chuahnak kha chim u, Pathian thangthat in mi sinah, Daihnak um ko\r\n    seh, ti in. Meri nih Khrih a hrin cang, Vancungmi an i pum, Mi hngilh lioah an rung tum i, Dawtnak in an rung zoh.</p>\r\n<p><b>3. </b>Dai te in khuaruahhar bikmi, Laksawng cu a kan pek cang; Pathian nih a van thluachuahnak, Vawlei mi kha a\r\n    cheuh hna. Leicung mi nih a rat thawng, An thei kho lo nain, Lungnemmi vialte lung chungah, Bawi Khrih cu a lut\r\n    lai.</p>\r\n<p><b>4. </b>A thiangmi Bethlehem Ngakchia, Kannih sinah rung tum tuah, Kan sualnak hlonh in kan chungah, Lut law nihin\r\n    hring than tuah; Vanmi nih Khrismas lawmhnak, An chimmi thawng kan theih, Kan sin ra tuah, Kan sin um tuah, Kan\r\n    Bawi Immanuel.</p>",
        "id": "76",
        "name": "MAW BETHLEHEM NANG KHUA HMETE",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VANCUNGMI HLA</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Khi tuukhal nih zantim ah khan, Vancungmi hlasak thawng kha an theih, A bia thawngin an i lawm ko,\r\n    Vancungmi nih hi hla kha an sak.</p>\r\n<p><b>CHO: </b>A lianngan bik Bawi si ko seh! Vawlei ah remnak bia thang ko seh, A zungzal in thang ko cang seh, Vawlei\r\n    mi i lawm ko u.</p>\r\n<p><b>2. </b>Tuukhal mi nih lianhnak an hmuh, Ngai tuah u, ceunak thawngtha a si, Khuk bil in a kut kha an tlaih, A tha\r\n    bik hla nih khan a zelh ko.</p>\r\n<p><b>CHO: </b>A lianngan bik Bawi si ko seh! Vawlei ah remnak bia thang ko seh, A zungzal in thang ko cang seh, Vawlei\r\n    mi i lawm ko u.</p>\r\n<p><b>3. </b>Mikhamhtu Pathian thimmi kha, Kan leiba kha cham awk ah a ra; Retheih sifah ngaihchiatnak he, Kannih\r\n    sualnak kha a kan tlanh cang.</p>\r\n<p><b>CHO: </b>A lianngan bik Bawi si ko seh! Vawlei ah remnak bia thang ko seh, A zungzal in thang ko cang seh, Vawlei\r\n    mi i lawm ko u.</p>",
        "id": "77",
        "name": "VANCUNGMI HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RA U, A ZUMMI VIALTE</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ra u, a zummi hna, Lunglawm le thanuam in, Ra tuah u, Bethlehem khua ah ra u, Ra law zoh tuah u, Van Bawi\r\n    fa a hrin cang.</p>\r\n<p><b>CHO: </b>Amah kha bia cio u si, Amah kha bia cio u si, Amah kha bia cio u si, Khrih kan Bawi.</p>\r\n<p><b>2. </b>Van hlaremhbu sa u, Jesuh hlorh in sa u, Van cung mithiang mi vialte nih sa u, Pathian sunparnak,\r\n    Sunparnak cungnung bik.</p>\r\n<p><b>CHO: </b>Amah kha bia cio u si, Amah kha bia cio u si, Amah kha bia cio u si, Khrih kan Bawi.</p>\r\n<p><b>3. </b>Bawipa kan in thangthat, Nihin ah a chuakmi, Maw Jesuh, sunpar vialte kan in pek, Pathian kan Pa Bia,\r\n    Pumsa in a lang cang.</p>\r\n<p><b>CHO: </b>Amah kha bia cio u si, Amah kha bia cio u si, Amah kha bia cio u si, Khrih kan Bawi.</p>",
        "id": "78",
        "name": "RA U, A ZUMMI VIALTE",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAWLEI LAWM TUAH!</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Vawlei lawm tuah, Bawipa a tum, Vawlei bawi a si lai, Nan lung vialte remh cio tuah u, Vanrang toi hla\r\n    phuah u, Vanrang toi hla phuah u, Vanrang vangrang toi hla phuah u.</p>\r\n<p><b>2. </b>Vawlei lawm tuah, Jesuh a uk, Mi vialte hla sa u, Lei le rili fingtlang vialte, Au than cio ko tuah u, Au\r\n    than cio ko tuah u, Au than au than cio ko tuah u.</p>\r\n<p><b>3. </b>Sifah sualnak a lo dih lai, Hling chunh a um lai lo, Vawlei cung hmun khuaza ram kip, Thluachuah pek ah a\r\n    tum, Thluachuah pek ah a tum, Thluachuah thluachuah pek ah a tum. Thluachuah thluachuah pek ah a tum.</p>\r\n<p><b>4. </b>Dinnak phungtha velngeihnak in, Vawlei a uk dih cang, Amah dawtnak khuaruahhar cu, ///Mi vialte a\r\n    hngalhter.///</p>",
        "id": "79",
        "name": "VAWLEI LAWM TUAH!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RA TUAH, RA TUAH, EMMANUEL</h4>\r\n<p>Doh is E</p>\r\n<p><b>1. </b>Ra tuah, ra tuah, Emmanuel, Israel thongtla run tlan hna, Ngaihchiat lunghno an tah lio ah, Pathian Fapa a\r\n    rat hlan tiang.</p>\r\n<p><b>CHO: </b>Lawm tuah! Lawm tuah! Emmanuel, A ra than lai, Maw Israel.</p>\r\n<p><b>2. </b>Ra tuah, ra tuah, Nang Je-si-nge, Satan kut in na mi luatter, Hell chungin na mi khamh tuah hna, Thihnak\r\n    ralteinak run pe hna.</p>\r\n<p><b>CHO: </b>Lawm tuah! Lawm tuah! Emmanuel, A ra than lai, Maw Israel.</p>\r\n<p><b>3. </b>Ra tuah, Ceunak, Bawi kan lungthin, Na rat thawngin lawmhter ko tuah, Muihnak kha run ceuter ko tuah,\r\n    Khuadawm tianter law ceu kan pe.</p>\r\n<p><b>CHO: </b>Lawm tuah! Lawm tuah! Emmanuel, A ra than lai, Maw Israel.</p>\r\n<p><b>4. </b>Ra tuah David Fa, Kan Bawipa, Vancung innka kan hunpiak tuah, Vancung ram ah kan huhphenh tuah, Lam har\r\n    kha kan khampiak ko sawh, Lawm tuah! Lawm tuah! Emmanuel a ra than lai, Maw Israel.</p>\r\n<p><b>CHO: </b>Lawm tuah! Lawm tuah! Emmanuel, A ra than lai, Maw Israel.</p>",
        "id": "80",
        "name": "RA TUAH, RA TUAH, EMMANUEL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH KHUARUAHHAR VEL</h4> <p>Doh is Db</p> <p><b>1. </b>Jesuh khuaruahhar vel cu, Ka sual nakin ngan deuh, Holh in zeiti'n kan phuan lai, Khoika'h ka thangthat lai, Ka thilrit a ka lakpiak, Ka thlarau a luatter. Khuaruahhar Jesuh vel nih a kan umpi ca'h.</p> <p><b>CHO: </b>Chim cawk lo khuaruahhar Jesuh vel cu, Jesuh vel cu, Rili pi nak hmanh in a thuk deuh, in a thuk deuh, Khuaruahhar vel, Kei misual bik ca hmanh ah a za ko. Ka nawlbia buarnak hmanh in a ngan deuh. Ka sual ningzah nakin a ngan deuh, Maw, Jesuh na minsung bik cu thangthat in um ko seh.</p> <p><b>2. </b>Jesuh khuaruahhar vel cu, Ka sungh nakin ngan deuh, Ngaihthiam ka si cang ca ah, Tling lakin a kan khamh, Temnak cikcin a chah dih, Luatnak zong a ka pek, Khuaruahhar Jesuh vel nih a kan umpi ca'h.</p> <p><b>CHO: </b>Chim cawk lo khuaruahhar Jesuh vel cu, Jesuh vel cu, Rili pi nak hmanh in a thuk deuh, in a thuk deuh, Khuaruahhar vel, Kei misual bik ca hmanh ah a za ko. Ka nawlbia buarnak hmanh in a ngan deuh. Ka sual ningzah nakin a ngan deuh, Maw, Jesuh na minsung bik cu thangthat in um ko seh.</p> <p><b>3. </b>Jesuh khuaruahhar vel cu, Ka thurnak a thianh dih, A thawnnak in a ka thlen, A fa ah a ka ser. Daihnak le van a ser hna, Zungzal a hmun dingin, Khuaruahhar Jesuh vel nih a kan umpi ca'h.</p> <p><b>CHO: </b>Chim cawk lo khuaruahhar Jesuh vel cu, Jesuh vel cu, Rili pi nak hmanh in a thuk deuh, in a thuk deuh, Khuaruahhar vel, Kei misual bik ca hmanh ah a za ko. Ka nawlbia buarnak hmanh in a ngan deuh. Ka sual ningzah nakin a ngan deuh, Maw, Jesuh na minsung bik cu thangthat in um ko seh.</p>",
        "id": "81",
        "name": "JESUH KHUARUAHHAR VEL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NOEL HMASA BIK</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Noel hmasa bik a chuahnak cu, Vanmi nih tlimno rawn i tuukhal an chimh hna, Tlimno rawn i tuu an zoh\r\n    lioah, Cu khuasik khuamawt le zantim ah cun.</p>\r\n<p><b>CHO: </b>Noel, Noel, Noel, Noel, Israel Siangpahrang a chuak.</p>\r\n<p><b>2. </b>Van an zoh, arfi pakhat an hmuh: Nichuah nak lei lam hlapi ah khin a ceu i, Vawlei cung ah fak piin a ceu,\r\n    Chun le zan hlan in a ceu cam cin ko.</p>\r\n<p><b>CHO: </b>Noel, Noel, Noel, Noel, Israel Siangpahrang a chuak.</p>\r\n<p><b>3. </b>Cu arfi ceunak zoh in mifim, Pathum nichuahnak lei lamhlapi in an ra, Siangpahrang pakhat kawl an tum i,\r\n    Arfi kha khuazeika hmanh ah an zulh.</p>\r\n<p><b>CHO: </b>Noel, Noel, Noel, Noel, Israel Siangpahrang a chuak.</p>\r\n<p><b>4. </b>Nitlaklei ah hi arfi aa thawn, Bethlehem khua cungah mi chimh bang aa din ko, Khika khin a tang i a um\r\n    colh; Bawi Jesuh Khrih ihnak cung zawn te ah.</p>\r\n<p><b>CHO: </b>Noel, Noel, Noel, Noel, Israel Siangpahrang a chuak.</p>\r\n<p><b>5. </b>Mifim pathum hna cu an vung lut, Hmaizahnak le upatnak in an khuk an bil, An laksawng sung bik kha i put\r\n    in, An sui le marh le frankinsens an pek.</p>\r\n<p><b>CHO: </b>Noel, Noel, Noel, Noel, Israel Siangpahrang a chuak.</p>",
        "id": "82",
        "name": "NOEL HMASA BIK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZANTIM DAI AH A RA</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Zantim ah a liannganmi hla, Vawlei ah a rung thang, Vancungmi nih vawlei naih in an tingtang tumnak in,\r\n    Vancung Siangpahrang Bawi sin in, Daihnak mi sin tum seh, Dai zirziar in vawlei a um, Vanmi hla thawng ngaih ah.</p>\r\n<p><b>2. </b>Vanrang aa hungmi khin an ra, An thla samh zual lo in, An zai tingtang lei partha bang en in aa zel\r\n    chialmal, Leizur cungah an thla an zam, Vancung mithiang mi nih, Babel inn sa lungmawng rual sin, Vanmi zaihla an\r\n    vel.</p>\r\n<p><b>3. </b>Sualnak phorhrit tang a ummi, Nannih leicung mi hna, Thadi le zaangbang harnak in chosang a kaimi hna,\r\n    Cuan cio tuah u, lunglawmhnak caan, A tlung cang, ra tuah u, Lam pawng naidem tang i din in, Van hla sak thawng\r\n    ngai u.</p>\r\n<p><b>4. </b>Ni le thla an liam lengmang ko, Profet hna chim chung bang. Kum cang aa mer lengmangmi cu, Sui chan a\r\n    chuak te lai, Lei cungah daihnak a um lai, Harnak um ti loin, Vancung an hlasakmi kha, Mi nih an hun leh lai.</p>",
        "id": "83",
        "name": "ZANTIM DAI AH A RA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NGAIHMANH! VANMI AUTHAWNG</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Ngaihmanh, vanmi authawng cu, \"Bawi hrinthar thangthat ko u, Leicung ah daihnak um seh, Pathian le mi an i\r\n    rem, Miphun vialte hna dir u, Vanmi he hlasa ti u. Bethlehem ah Jesuh Khrih, Kan Khamhtu cu a chuak cang.\r\n    Ngaihmanh! vanmi authawng cu, \"Bawi hrinthar thangthat ko u.\"</p>\r\n<p><b>2. </b>Vancungmi lak Siangpahrang, A zungzal a nung kan Bawi, A caan a tlin in a tum, Lengnu tak ah a rung lang.\r\n    Vawlei mi bang kan Bawi nih, Mi kha khamh a kan duh ca. A thiangmi a rung tum cang, Jesuh kan Emmanuel, Ngaihmanh!\r\n    vanmi authawng cu, \"Bawi hrinthar thangthat ko u.\"</p>\r\n<p><b>3. </b>Daihnak Bawi, kan Siangpahrang, Dinnak Bawi thangthat ko u, Ceunak, nunnak mi vialte, Pek awkah a rung tum\r\n    cang. A sunparnak kaltak in, Thihnak in nunnak thar ah. Vawlei cung mi vialte ca Hrinnak kha a in kan Bawi,\r\n    Ngaihmanh! vanmi authawng cu, \"Bawi hrinthar thangthat ko u.\"</p>",
        "id": "84",
        "name": "NGAIHMANH! VANMI AUTHAWNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NANG CAAH UMNAK A UM</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Na Bawi thutdan le sui luchin kha na kaltak, Vawlei cung mi vialte ca na ra, Na hrinnak ca ah khan,\r\n    Bethlehem khua chungah, Hrinnak inn hmanh kha a um lo.</p>\r\n<p><b>CHO: </b>Keimah lung chungah rung um tuah, Nang caah umnak hmun kha a um, Keimah lung chungah rung um ko tuah,\r\n    Nang caah umnak hmun kha a um.</p>\r\n<p><b>2. </b>Vancung mi nih lawmhnak hla kha annih an sa, Na chuahnak kong kha an chim lioah, Sihmanhseh nautatnak in\r\n    hrinnak kha na hmuh, Vawlei ah toidornak na in.</p>\r\n<p><b>CHO: </b>Keimah lung chungah rung um tuah, Nang caah umnak hmun kha a um, Keimah lung chungah rung um ko tuah,\r\n    Nang caah umnak hmun kha a um.</p>\r\n<p><b>3. </b>Cenghngia nih kua an ngeih, Vate nih bu an ngeih, Tupi chung thing hluaimim borh tangah, Sisehlaw Pathian\r\n    fa vawlei na um lioah, Ihnak hmun hmanh kha na ngei lo.</p>\r\n<p><b>CHO: </b>Keimah lung chungah rung um tuah, Nang caah umnak hmun kha a um, Keimah lung chungah rung um ko tuah,\r\n    Nang caah umnak hmun kha a um.</p>\r\n<p><b>4. </b>Jesuh nih teinak in a rung tum than tikah, Muko tum thawng he a rung tum lai, Jesuh aw nih keimah kha a ka\r\n    auh tikah, \"Ka pawngah um tuah,\" a ti lai.</p>\r\n<p><b>CHO: </b>Keimah lung chungah rung um tuah, Nang caah umnak hmun kha a um, Keimah lung chungah rung um ko tuah,\r\n    Nang caah umnak hmun kha a um.</p>",
        "id": "85",
        "name": "NANG CAAH UMNAK A UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MAW KHUARUAHHAR MIN</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Maw khuaruahhar Min, Profet nih hlanpi in an hngalh cang; A ratnak kha an rak hmuh cang, Daihnak\r\n    Siangpahrang cu.</p>\r\n<p><b>CHO: </b>Khuaruahhar Fimchimtu Bawipa! A lianngan bik Bawipa! Zungzal a hmunmi Daihnak Bawi! Pathian Fapa Jesuh.</p>\r\n<p><b>2. </b>Maw Mi lianngan, Vanmi run le mithiang nih an thangthat; Min vialte lakah cungnung bik, Kan i dornak a si.</p>\r\n<p><b>CHO: </b>Khuaruahhar Fimchimtu Bawipa! A lianngan bik Bawipa! Zungzal a hmunmi Daihnak Bawi! Pathian Fapa Jesuh.</p>\r\n<p><b>3. </b>Maw Misung bik, Sang in an hlorh, sang bik nawlngeitu cu; Amah thawngin sualnak kan tei, Van ah a kan\r\n    luhpi.</p>\r\n<p><b>CHO: </b>Khuaruahhar Fimchimtu Bawipa! A lianngan bik Bawipa! Zungzal a hmunmi Daihnak Bawi! Pathian Fapa Jesuh.</p>",
        "id": "86",
        "name": "MAW KHUARUAHHAR MIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIHFAMI I LAWM U</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Khrihfami i lawm u, thinlung tak le aw in, Kan chimmi hi ngai hmanh u; Thawngtha! nihin ah Khrih a chuak\r\n    cang Caw le laa a hmai an kun, Atu caw rawl einak kuang ah, A chuak cang Khamhtu, Nihin a chuak cang.</p>\r\n<p><b>2. </b>Khrihfami i lawm u, thinlung tak le aw in, Dong lo nuamhnak thawng nan theih, Lawm tuah! hi ca Khrih cu a\r\n    chuak cang, Van cung innka cu a hun, Mi ca ah zungzal nuamhnak ah, Hi ca Khrih a chuak, Hi ca a chuak cang.</p>\r\n<p><b>3. </b>Khrihfami i lawm u, thinlung tak le aw in, Thlan zongnan tih ti lai lo, Daihnak! Khrih nih khamh awk a\r\n    chuak cang, An auh nang le mi vialte, A umnak inn co awk caah, Khamhtu Khrih a chuak, Khamh awk a chuak cang.</p>",
        "id": "87",
        "name": "KHRIHFAMI I LAWM U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHIKA CAWRAWL KUANG CHUNGAH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Khika lamhla cawrawl einak kuang chungah, Van Bawi ngakchuan sem kha puan zual in an thlim, Vancung arfi\r\n    nih a ihnak ah an zoh, Bawi hniang Jesuh ramro cungah aa hngilh ko.</p>\r\n<p><b>2. </b>Cawrual an hram thawngin ngakchia sem aa hlau, Sihmanhsehlaw Bawi hniang Jesuh a tap lo, Kan dawt Bawipa\r\n    Jesuh, van in run kan zoh, Fingrei cah tiang ka ihnak pawngah um tuah.</p>\r\n<p><b>3. </b>\"Ka kiangah um, Bawipa Jesuh,\" tiah kan nawl, Zungzal in ka pawngah um law, ka daw fawn, Ngakchia vialte\r\n    thluachuah vanluh kan pe tuah, Van ah nang he um ti awkah ka tlakter.</p>",
        "id": "88",
        "name": "KHIKA CAWRAWL KUANG CHUNGAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A DAI ZAN, A THIANG ZAN</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>A dai zan, A thiang zan, Zeizong vialte a dai, Nau le a nu velchum ah A dawhmi ceunak aa zel, Dai tein aa\r\n    hngilh ko, Dai tein aa hngilh ko.</p>\r\n<p><b>2. </b>A dai zan, A thiang zan, Khuamui a ceu dih cang, Tuukhal nih van hla an theih Hallelujah! Siangpahrang,\r\n    Kan Khamhtu a chuak cang, Kan Khamhtu a chuak cang.</p>\r\n<p><b>3. </b>A dai zan, A thiang zan, Khuaruahhar Arfi nih, Nichuah siangpahrang a hruai, Jesuh kha laksawng an pek,\r\n    Khamhbawi Khrih a chuak cang, Jesuh Khrih a chuak cang.</p>\r\n<p><b>4. </b>A dai zan, Thiang bik zan, Van arfi, Kan ceuh tuah, Vanmi he Hallelujah! Siangpahrang thangthat u si,\r\n    Khrih Khamhtu a chuak cang, Jesuh Khrih a chuak cang.</p>",
        "id": "89",
        "name": "A DAI ZAN, A THIANG ZAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZAN AH TUUKHAL AN TUU AN ZOH</h4> <p>Doh is G</p> <p><b>1. </b>Zan ah tuukhal an tuu an zoh, Vawlei an thut lioah, Vancungmi kha a rung tum i, A rung ceu an hmai ah.</p> <p><b>2. </b>'tih hlah,' a ti, vawlei mi hna, \"Lunglawmhnak thawngtha chin, Ka tum, ka put nannih ca-ah, Lawmhnak a tam nihin.</p> <p><b>3. </b>\"David khua ah nihin a hrin, David miphun simi, Mikhamh Khrih a simi Pathian, Ngakchia a hrin,\" a ti.</p> <p><b>4. </b>\"Puan in an hlawm hnuah an chiah, Cawkuang chungah an thlim, Nannih atu Amah kawl u, Nan ton lai, Ngakchia sem.\"</p> <p><b>5. </b>Vancungmi nih a chim tikah Vancungmi run an lang, Miceu micerh an si ngai ta, Pathian kha an thangthat.</p> <p><b>6. </b>\"Vancung a ummi Pathian kha, A thang tha bik ko seh, Vawlei ah daihnak tlung ko seh, Mi ca'h a vel tum seh.\"</p>",
        "id": "90",
        "name": "ZAN AH TUUKHAL AN TUU AN ZOH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VANMI HLA AN SA</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Vansang pi khin vanmi nih, Leicung ah hla an run sak, Tlang nih a hun lehnak ah, An hla kha an rak\r\n    hrawlter.</p>\r\n<p><b>CHO: </b>(Glori-a in excelsis De-o, Glori-a in excelsis De-o) Pathian cu cung nung bik ah thang`hat, Pathian cu,\r\n    cung nung bik ah thang`hat.</p>\r\n<p><b>2. </b>Bethlehem khua ah ra law, Ngakchia cu ra zoh tuah u, Khukbil in bia cio tuah u, Bawipa Khrih kan\r\n    Siangpahrang.</p>\r\n<p><b>CHO: </b>(Glori-a in excelsis De-o, Glori-a in excelsis De-o) Pathian cu cung nung bik ah thang`hat, Pathian cu,\r\n    cung nung bik ah thang`hat.</p>\r\n<p><b>3. </b>Vanmi nih an thangthatmi, Cu cawkuang ah nan hmuh lai, Mary le Josef le tiah, Bawi Khrih thangthat cio u\r\n    si.</p>\r\n<p><b>CHO: </b>(Glori-a in excelsis De-o, Glori-a in excelsis De-o) Pathian cu cung nung bik ah thang`hat, Pathian cu,\r\n    cung nung bik ah thang`hat.</p>",
        "id": "91",
        "name": "VANMI HLA AN SA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DAVID KHUA CHUNGAH</h4> <p>Doh is G</p> <p><b>1. </b>Hlan lioah David khua chungah, Caw inn pakhat a rak um, Cu ka caw rawleinak kuang ah Mary nih a fa a thlim, Bawi Jesuh nun nem bik te, Cawkuang chungah a hngilh ko.</p> <p><b>2. </b>Van in vawlei ah a rung tum, Pathian zeizong te Bawipa, Bethlehem cawinn ah a chuak Cawkuang chungah khan an thlim, Rethei sifak mi sinah, Thiang tein leiah a nung.</p> <p><b>3. </b>Ngakchia a rak si lio vialte, A nu a rak pomtu kha, A dawt i a hmaizah ngaingai tha tein a zohkhenh fawn, Kannih ngakchia vialte hi, Amah bang si awk kan si.</p> <p><b>4. </b>A donghnak bik ah kan hmuh lai, Amah nih a kan dawt ca'h, Kha lungnemmi ngakchia te kha, Van ah khin kan Bawi a si, A umnak vanram nuam ah, A fale a kan hruai lai.</p> <p><b>5. </b>Caw inn chungah si ti loin, Sunparnak vancung khua ah, Pathian orhlei kam ah thu in, Kan hmuh lai, lianhngannak he, A fale cu arfi bang, Kan ceu lai, a kiang vel ah.</p>",
        "id": "92",
        "name": "DAVID KHUA CHUNGAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NICHUAHLEI SIANGPAHRANG PATHUM</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Nichuahlei Siangpahrang kannih, Pathum nih khual kan tlawn pah in, Lo le cerh le fing le tlang ah, Arfi\r\n    kan zulh lengmang.</p>\r\n<p><b>CHO: </b>Maw, khuaruahharmi zan arfi, Aa dawh ngaingaimi arfi, Nitlaklei ah kan hruai lengmang, Na ceunak kan\r\n    phak hlan tiang.</p>\r\n<p><b>2. </b>Bethlehem chuakmi Siangpahrang, Chinh thanawk sui ka rak i put, Dong hin loin kan siangpahrang, Kannih kan\r\n    umpi tuah.</p>\r\n<p><b>CHO: </b>Maw, khuaruahharmi zan arfi, Aa dawh ngaingaimi arfi, Nitlaklei ah kan hruai lengmang, Na ceunak kan\r\n    phak hlan tiang.</p>\r\n<p><b>3. </b>Pek dingah frenkensens ka ngei, Pathian biaknak caah zihmui, Mi vialte nih an thangthat i, Lianngan\r\n    Pathian an biak.</p>\r\n<p><b>CHO: </b>Maw, khuaruahharmi zan arfi, Aa dawh ngaingaimi arfi, Nitlaklei ah kan hruai lengmang, Na ceunak kan\r\n    phak hlan tiang.</p>\r\n<p><b>4. </b>Cinthling kei ka laksawng a si, Hi zihmui rim a khami hi; Ngaihchiat khuaruahhar le thi chuah,\r\n    Hmelchunhnak cu a si.</p>\r\n<p><b>CHO: </b>Maw, khuaruahharmi zan arfi, Aa dawh ngaingaimi arfi, Nitlaklei ah kan hruai lengmang, Na ceunak kan\r\n    phak hlan tiang.</p>\r\n<p><b>5. </b>Zohhmanh, thangthatnak in a tho, Pathian kannih kan Khamhtu cu, Hallelujah, Hallelujah, Van le lei ah a\r\n    thang.</p>\r\n<p><b>CHO: </b>Maw, khuaruahharmi zan arfi, Aa dawh ngaingaimi arfi, Nitlaklei ah kan hruai lengmang, Na ceunak kan\r\n    phak hlan tiang.</p>",
        "id": "93",
        "name": "NICHUAHLEI SIANGPAHRANG PATHUM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SUNPARNAK RAM I VANMI HNA</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Sunparnak ram i vanmi hna, Leiah nan thla run zam u, Sernak kong a rak chimtu hna, Messiah chuahnak kong\r\n    chim u.</p>\r\n<p><b>CHO: </b>Ra law, bia u, Ra law, bia u, Bawi Khrih Siangpahrang chuak thar.</p>\r\n<p><b>2. </b>Fing le tlang le tlimno rawn ah, Zan i tuu a cawngmi hna, Mi sinah Pathian a um cang, Vawlei Ceunak a ra\r\n    cang.</p>\r\n<p><b>CHO: </b>Ra law, bia u, Ra law, bia u, Bawi Khrih Siangpahrang chuak thar.</p>\r\n<p><b>3. </b>Tinfim hna, nan khuaruah bang u, Ceunak hlapi ah a tlang, Phun kip duhmi cu kawl cio u, A chuah arfi nan\r\n    hmuh cang.</p>\r\n<p><b>CHO: </b>Ra law, bia u, Ra law, bia u, Bawi Khrih Siangpahrang chuak thar.</p>\r\n<p><b>4. </b>Biaktheng hmai i a kun mithiang, Kum saupi a ngangmi hna, Bawipa cu a rung tum cang i, Biakinn chungah a\r\n    lang lai, Ra law, bia u, Ra law, bia u. Bawi Khrih Siangpahrang chuak thar.</p>\r\n<p><b>CHO: </b>Ra law, bia u, Ra law, bia u, Bawi Khrih Siangpahrang chuak thar.</p>",
        "id": "94",
        "name": "SUNPARNAK RAM I VANMI HNA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH KONG TAM CHIN IN</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Jesuh kong tam chin ka hngalh lai, A vel kong tam chin in chim ning; A khamhnak tling cu hngalh chin in,\r\n    Kei dawt ruang i a thihnak zong.</p>\r\n<p><b>CHO: </b>Jesuh kong tam chin in, Jesuh kong tam chin in, A khamhnak tling cu hngalh chin in, Kei dawt ruang i a\r\n    thihnak zong.</p>\r\n<p><b>2. </b>Jesuh kong tam chin in hngal ning, A thiannak tam chin in hngal ning; Pathian thlarau cawnpiak tu nih,\r\n    Khrih kong dihlak a ka hmuhsak.</p>\r\n<p><b>CHO: </b>Jesuh kong tam chin in, Jesuh kong tam chin in, A khamhnak tling cu hngalh chin in, Kei dawt ruang i a\r\n    thihnak zong.</p>\r\n<p><b>3. </b>A bia thawngin tam chin ka hngalh, Ka Bawipa he cun kan um ti; A awnem cu ka theih zungzal, Zumh tlak a\r\n    bia kei ca a si.</p>\r\n<p><b>CHO: </b>Jesuh kong tam chin in, Jesuh kong tam chin in, A khamhnak tling cu hngalh chin in, Kei dawt ruang i a\r\n    thihnak zong.</p>\r\n<p><b>4. </b>A sunparnak a sang hringhran, A pennak ram a kau chinchin; Daihnak Bawipa a ratnak zong, A lianhngannak in\r\n    ka hngalh chin.</p>\r\n<p><b>CHO: </b>Jesuh kong tam chin in, Jesuh kong tam chin in, A khamhnak tling cu hngalh chin in, Kei dawt ruang i a\r\n    thihnak zong.</p>",
        "id": "95",
        "name": "JESUH KONG TAM CHIN IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SUAL THLAHNAK, DAIHNAK LE THAWNNAK</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Jesuh he lawmh na duh ah cun, A van thlua chuah rel tuah; Amah bia kha kan zumh ahcun, Sithatnak kan hmuh\r\n    lai.</p>\r\n<p><b>CHO: </b>Sualthlahnak, daihnak, thawnnak, A thiannak le hnangamnak cu; Jesuh thawngin kei ca an si, Lunglawm in\r\n    thangthatnak hla kan sa lai.</p>\r\n<p><b>2. </b>A velngeihnak le dawtnak ca, Sual phunphun kha a thlah; Daihnak zong kha a si ca ah, Sualthlah tikah kan\r\n    hmuh,</p>\r\n<p><b>CHO: </b>Sualthlahnak, daihnak, thawnnak, A thiannak le hnangamnak cu; Jesuh thawngin kei ca an si, Lunglawm in\r\n    thangthatnak hla kan sa lai.</p>\r\n<p><b>3. </b>Midang thlarau forh khawh awkah, A Thiang Thlarau an pek; Bawi Jesuh lawng kannih chungah, A zungzal in a\r\n    um.</p>\r\n<p><b>CHO: </b>Sualthlahnak, daihnak, thawnnak, A thiannak le hnangamnak cu; Jesuh thawngin kei ca an si, Lunglawm in\r\n    thangthatnak hla kan sa lai.</p>\r\n<p><b>4. </b>Jesuh thawng in kannih sinah, Pathian nih pek a duh, Ngakchia bantuk kan zumh ahcun, Sithatnak kan hmuh\r\n    lai.</p>\r\n<p><b>CHO: </b>Sualthlahnak, daihnak, thawnnak, A thiannak le hnangamnak cu; Jesuh thawngin kei ca an si, Lunglawm in\r\n    thangthatnak hla kan sa lai.</p>",
        "id": "96",
        "name": "SUAL THLAHNAK, DAIHNAK LE THAWNNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HAWHRA NAK RANG DEUH IN</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Maw Jesuh a thiangmi si ngaingai ka duh, Ka lung chungah nangmah zungzal um kan duh, Ka biak sualmi hlaw\r\n    tuah, ka ral kha chuahter, Na ka tawl ahcun hawhra nakin ka rang.</p>\r\n<p><b>CHO: </b>Hawhra nakin, ka lung a thiang lai, Na ka tawl ahcun hawhra nakin ka rang.</p>\r\n<p><b>2. </b>Maw Jesuh ka thian lonak vialte ka tawl, Na thi in ka sualnak vialte kha na tawl, Ka thian nakhnga zeizong\r\n    te ka hlawt dih cang, Na ka tawl ahcun hawhra nakin ka rang.</p>\r\n<p><b>CHO: </b>Hawhra nakin, ka lung a thiang lai, Na ka tawl ahcun hawhra nakin ka rang.</p>\r\n<p><b>3. </b>Jesuh ka thiannak nangmah lawng kha kan hal, Ka hmuh khawh tiangin na ke hram in kan nawl, Ka zumhnak in\r\n    na thletmi thi kha ka hmuh, Na ka tawl ahcun hawhra nakin ka rang.</p>\r\n<p><b>CHO: </b>Hawhra nakin, ka lung a thiang lai, Na ka tawl ahcun hawhra nakin ka rang.</p>\r\n<p><b>4. </b>Lung thatnak dawtnak in nangmah kha kan ngan, A tu ra tuah law, lung thar kha ka va bunh, Aan kawlmi, \"Ra\r\n    hlah,\" tiah na dawn bal hna lo, Na ka tawl ahcun hawhra nakin ka rang.</p>\r\n<p><b>CHO: </b>Hawhra nakin, ka lung a thiang lai, Na ka tawl ahcun hawhra nakin ka rang.</p>",
        "id": "97",
        "name": "HAWHRA NAK RANG DEUH IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUARUAHHARNAK KONG KA SA LAI</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Khuaruahharnak kong ka sa lai, Khamhbawi Jesuh Khrih kong kha, Vancung khua in amah a ra, Vailamtahnak kha\r\n    a in,</p>\r\n<p><b>CHO: </b>Khuaruahhar nak bia ka sak lai, Kei ca a thimi kong kha Vancungmi he kan sak te lai, Hi bia kha ka sak\r\n    ti lai.</p>\r\n<p><b>2. </b>Ka tlau tikah a ka hmuh cang, Lampalh tu kha a hmuh cang, A kut chungah a ka pom cang, Lamtha chung ah a\r\n    ka sanh.</p>\r\n<p><b>CHO: </b>Khuaruahhar nak bia ka sak lai, Kei ca a thimi kong kha Vancungmi he kan sak te lai, Hi bia kha ka sak\r\n    ti lai.</p>\r\n<p><b>3. </b>Ka zawt tikah Khrih a ka damh, ka rilh tam ca zaang a tlawm, ka mitcaw, tihnak kha a um, Him in lam a ka\r\n    hmuhsak.</p>\r\n<p><b>CHO: </b>Khuaruahhar nak bia ka sak lai, Kei ca a thimi kong kha Vancungmi he kan sak te lai, Hi bia kha ka sak\r\n    ti lai.</p>\r\n<p><b>4. </b>Keimah cungah khuamui a tlung, Ngaihchiat lam ah ka kal ko. Kei he Jesuh zungzal a um, Him in lam a ka\r\n    hmuhsak.</p>\r\n<p><b>CHO: </b>Khuaruahhar nak bia ka sak lai, Kei ca a thimi kong kha Vancungmi he kan sak te lai, Hi bia kha ka sak\r\n    ti lai.</p>\r\n<p><b>5. </b>Ka thihnak caan kha a phak tiang, Jesuh a ka domhtlaih rih, Ka dawtmi ka hmuh khawh hna tiang, Vancung\r\n    khua a ka kaipi.</p>\r\n<p><b>CHO: </b>Khuaruahhar nak bia ka sak lai, Kei ca a thimi kong kha Vancungmi he kan sak te lai, Hi bia kha ka sak\r\n    ti lai.</p>",
        "id": "98",
        "name": "KHUARUAHHARNAK KONG KA SA LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KEI CA JESUH A SI</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Bawipa Jesuh hlei in van ah, Bochan awk dang um lo! Ka nun chung ka sak awk hla kha, Kei ca Jesuh a si,\r\n    Keimah ca sifahnak a in, Athletmi thi in a ka tawl, Pathian he a ka remter cang, Kei ca Jesuh a si.</p>\r\n<p><b>2. </b>Vawlei rumnak ka tlaihchan lo, Kei ca Jesuh a si! Vawlei chaw kha ka duh ti lo, Kei ca Jesuh a si, Vawlei\r\n    rumnak a hmun lai lo, Zeizong vialte a rawk dih lai, Ka lunglawmhnak a dih lai lo, Kei ca Jesuh a si.</p>\r\n<p><b>3. </b>Pamnak sifah ka ing na in, Kei ca Jesuh a si! Ka zai lonak Bawipa a hngalh, Kei ca Jesuh a si, Ka ngeihmi\r\n    le ka chaw vialte, Vawlei cung ah sung hmanhning law, Vawlei thil ka bochan lai lo, Kei ca Jesuh a si.</p>\r\n<p><b>4. </b>Ral kut chungah phan hmanh ninglaw, Kei ca Jesuh a si! Rawhnak nih ka kulh hmanhsehlaw, Kei ca Jesuh a si!\r\n    Vawlei ral dohnak tih awk nih, Ka thlarau kha doh hmanh seh law, Bawipa min in ka tei cang lai, Kei ca Jesuh a si!</p>",
        "id": "99",
        "name": "KEI CA JESUH A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH CU KA ZEIZONG A SI</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Bawi Jesuh cu keimah ca ah, Nunnak lawmhnak a si, Nifate in ka thawnnak le Ka thazang a si fawn,\r\n    Ngaihchiat tikah a sin ka kal, Amah lawng nih a ka lawmhter, Ngaihchiat tikah ka Hawi tha bik, Jesuh si.</p>\r\n<p><b>2. </b>Bawi Jesuh cu keimah ca ah, Hawikom thabik si, Thluachuahnak kha ka hal tikah, A ka pek zungzal ko, Ni a\r\n    tlanter, ruah a surter, Rawl le lawmhnak kha a ka pek, Ni le ruah le rawl tha vialte, A ka pek.</p>\r\n<p><b>3. </b>Bawi Jesuh cu keimah ca ah, Zeizong vialte a si, Hi tluk zumhawk Hawikom tha hi, Zeitin ka hlawt khawh\r\n    hnga, Amah zulh cu lam ding a si, Chun he zan he a ka zohkhenh, Chun he zan he ka zulh ko lai, Bawipa cu.</p>\r\n<p><b>4. </b>Jesuh nakin keimah caah, Hawitha deuh an um lo, Nunnak dongh tiangin ka zumh lai, Atu ka zumh bangin, Cu\r\n    bantuk Hawi tha he nun cu, Dongh ngei lo nunnak nuam a si, Zungzal nunnak, zungzal lawmhnak, Keimah ca.</p>",
        "id": "100",
        "name": "JESUH CU KA ZEIZONG A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NA KONG KAN RUAH LIOAH</h4> <p>Doh is A</p> <p><b>1. </b>Jesuh na kong kan ruah lioah, Lawmhnak ngaingai a si, Nangmah hmai kha kan hmuh tikah, Kan lung aa lawm chin lai.</p> <p><b>2. </b>Jesuh nangmah na min nakin, Minsung deuh a um lo, Vancung le vawlei cung ah khan, Aa dawhbik a si ko.</p> <p><b>3. </b>Ngaihchiami an hnangamnak le, Lungthleng mi lunglawmhnak, A rilmi le an kawlmi ca'h, Dawtnak ngan bik na si.</p> <p><b>4. </b>Nang an hmutu hna lawmhnak cu, Holh in an chim kho lo, Rel cawk lo dawtnak ngan bik kha, Na dawtmi nih an hngalh.</p> <p><b>5. </b>Jesuh, kan lawmhnak bik si ko, Zungzal dong ti loin, Kan sunparnak cu nang si ko, Vawlei le vancung tiang.</p>",
        "id": "101",
        "name": "JESUH NA KONG KAN RUAH LIOAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMH DUH AH A KAWL</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Tuukhal nih duhsah in, Tlang kha a lonh tawn. A tlau tuu khamh awkah, A kawl len ko,</p>\r\n<p><b>CHO: </b>Khamh duh a kawl, Khamh duh a kawl, A tlaumi tuu kha khamh duh a kawl, Khamh duh a kawl, Khamh duh a\r\n    kawl, A tlaumi tuu kha, Khamh duh a kawl,</p>\r\n<p><b>2. </b>Tangka a tlaumi cu, Thinfual in a kawl, A sungmi chawtha kha, Hmuh tiang a kawl,</p>\r\n<p><b>CHO: </b>Khamh duh a kawl, Khamh duh a kawl, A tlaumi tuu kha khamh duh a kawl, Khamh duh a kawl, Khamh duh a\r\n    kawl, A tlaumi tuu kha, Khamh duh a kawl,</p>\r\n<p><b>3. </b>Kan dawtmi Pathian nih, A thawng a thanh hna, A thi cia a nung than, Tlau cia hmuh cang.</p>\r\n<p><b>CHO: </b>Khamh duh a kawl, Khamh duh a kawl, A tlaumi tuu kha khamh duh a kawl, Khamh duh a kawl, Khamh duh a\r\n    kawl, A tlaumi tuu kha, Khamh duh a kawl,</p>\r\n<p><b>CHO: </b>Khamh duh a kawl, Khamh duh a kawl, A tlaumi tuu kha khamh duh a kawl, Khamh duh a kawl, Khamh duh a\r\n    kawl, A tlaumi tuu kha, Khamh duh a kawl,</p>",
        "id": "102",
        "name": "KHAMH DUH AH A KAWL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH THAWNG IN TEINAK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Tuanbia hlun kha ka theih cang, Khamhtu ratnak le sunparnak, Kalvary ah a nunnak a hloh, Mi tha lo khamh\r\n    awkah, A hramnak aw ka theih cang, Thi thiang tlanhnak aw thlum a si. Cun ka sualnak kaa ngaichih i, Teinak kha ka\r\n    hmuh cang.</p>\r\n<p><b>CHO: </b>Aw! Jesuh thawng in teinak, Ka thlarau ca zungzal A ka kawl i tlanhnak thi he a ka ratpi; Ka hngalh hlan\r\n    in a ka dawt, Ka dawt ve awk a si ko, Tei dingin a ka kalpi, Thiannak thisen chungah.</p>\r\n<p><b>2. </b>Damter tu a si ka hngalh, Thianter khotu a sinak zong, Kebei mi lam an kal kho than i, Mitcaw nih khua an\r\n    hmuh, \"Jesuh ra law ka damter, Ka lungthin vialte,\" tiah ka au, Jesuh ka sin ah a ra i, Teinak kha a ka pek.</p>\r\n<p><b>CHO: </b>Aw! Jesuh thawng in teinak, Ka thlarau ca zungzal A ka kawl i tlanhnak thi he a ka ratpi; Ka hngalh hlan\r\n    in a ka dawt, Ka dawt ve awk a si ko, Tei dingin a ka kalpi, Thiannak thisen chungah.</p>\r\n<p><b>3. </b>Umnak a remh cang ka hngalh, Keimah ca ah a sungmi inn, Sui an phahmi lam kong zong ka theih, Lungvar\r\n    umnak pinah, Vanmi hna hlasaknak le, A kan tlanhnak tuanbia hlun cu, Cu ni ah cun ka sa ve lai, Teinak hla sunglawi\r\n    cu.</p>\r\n<p><b>CHO: </b>Aw! Jesuh thawng in teinak, Ka thlarau ca zungzal A ka kawl i tlanhnak thi he a ka ratpi; Ka hngalh hlan\r\n    in a ka dawt, Ka dawt ve awk a si ko, Tei dingin a ka kalpi, Thiannak thisen chungah.</p>",
        "id": "103",
        "name": "JESUH THAWNG IN TEINAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA RIAN NUNH THAN BAWIPA</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Bawipa kannih sinah, Dawtnak in rung um ko, Thiang thlarau he kannih sin ah, Rung kan umpi ko tuah,</p>\r\n<p><b>CHO: </b>Kan sinah um zungzal, Bawipa kan in nawl ko, Bawipa ra law kannih sinah ruahchannak kan pe tuah.</p>\r\n<p><b>2. </b>Bawipa kannih sinah, Na thiannak kha phan seh, Na thawnnak in kan huppheng ko, Kan sinah rung um tuah,</p>\r\n<p><b>CHO: </b>Kan sinah um zungzal, Bawipa kan in nawl ko, Bawipa ra law kannih sinah ruahchannak kan pe tuah.</p>\r\n<p><b>3. </b>Kannih kan tha a ba, Bawipa rung kan hruai tuah. Na dawtnak in kan dawmhtlaih tuah, Kan sinah rung um ko.</p>\r\n<p><b>CHO: </b>Kan sinah um zungzal, Bawipa kan in nawl ko, Bawipa ra law kannih sinah ruahchannak kan pe tuah.</p>\r\n<p><b>4. </b>Kan lung chung sualnak cu, Bawipa run thianter ko, Na min thannak langhter u si, Zungzal kan ceuter tuah.</p>\r\n<p><b>CHO: </b>Kan sinah um zungzal, Bawipa kan in nawl ko, Bawipa ra law kannih sinah ruahchannak kan pe tuah.</p>",
        "id": "104",
        "name": "NA RIAN NUNH THAN BAWIPA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHNAK</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Bawi Jesuh Khrih zaangfahnak kha, Lawm in sa cio tuah u; Vawlei vialte a zelh lai ca, Nan lunglawm cio\r\n    tuah u!</p>\r\n<p><b>CHO: </b>A kan khamhnak thawngtha kha, Atu a tlung cang, A kan Khambawi Jesuh nih, Atu an khamh cang.</p>\r\n<p><b>2. </b>Mitcaw mi nih Jesuh zoh u, Ngaihchiami lawm tuah u; Jesuh nih an chuahter cang hna, Thong chung ummi lawm\r\n    tuah.</p>\r\n<p><b>CHO: </b>A kan khamhnak thawngtha kha, Atu a tlung cang, A kan Khambawi Jesuh nih, Atu an khamh cang.</p>\r\n<p><b>3. </b>A kan dawt ca Jesuh a thi, thangthat a tlak ngaingai; Vawlei cungah daihnak um seh, Pathian thangtha ko\r\n    seh.</p>\r\n<p><b>CHO: </b>A kan khamhnak thawngtha kha, Atu a tlung cang, A kan Khambawi Jesuh nih, Atu an khamh cang.</p>",
        "id": "105",
        "name": "KHAMHNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MIN SUNG</h4> <p>Doh is Ab</p> <p><b>1. </b>Jesuh min kha vaa lak hmanh u, Ngaihchia milung rethei hna, Nangmah hnangamnak an pek lai, Na kalnak kip ah keng tuah.</p> <p><b>CHO: </b>Maw sung bik, dawtnak min, Vancung le vawlei lawmhnak, Maw sungbik, dawtnak min, Vancung le vawlei lawmhnak.</p> <p><b>2. </b>Thinphannak vialte an phenh ca, Jesuh min i ken zungzal, Tukforhnak nih an naih tikah, Amah min khan thlacam tuah.</p> <p><b>CHO: </b>Maw sung bik, dawtnak min, Vancung le vawlei lawmhnak, Maw sungbik, dawtnak min, Vancung le vawlei lawmhnak.</p> <p><b>3. </b>Maw Jesuh a min sung bik kha, Kan thlarau a lawmhter ca'h, A kut in a kan pom tikah, Amah kha hla kan phuah lai.</p> <p><b>CHO: </b>Maw sung bik, dawtnak min, Vancung le vawlei lawmhnak, Maw sungbik, dawtnak min, Vancung le vawlei lawmhnak.</p> <p><b>4. </b>Bawi Jesuh min kan theih tikah, Amah hmaiah kan kun lai, Vancung khua ah kan tlun tikah, \"Bawi bik a si,\" kan ti lai.</p> <p><b>CHO: </b>Maw sung bik, dawtnak min, Vancung le vawlei lawmhnak, Maw sungbik, dawtnak min, Vancung le vawlei lawmhnak.</p>",
        "id": "106",
        "name": "MIN SUNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A SUALMI HNA RA U</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Jesuh vancung a um nain Vaw lei cungah a rung tum, Mi vialte ca a rung tum i, A zawmi a damter hna, Baibal\r\n    ca chungin na hngalh lai, Mitha mingan bik a si.</p>\r\n<p><b>2. </b>Khua vialte ah aa chok lengmang, Mi vialte a zaangfah hna, Mithalo, tlu-kiak vialte le, Mitcaw, kebei,\r\n    mithi mi, A bia in a damter than ca, Khuaruahhar ngaingai a si.</p>\r\n<p><b>3. </b>Jesuh vawlei a um lio ah, Tha chin bia lawng a chimh hna, Keimah zong Jesuh ka zum i, Ka lunglawmhnak a um\r\n    cang, Ka zumh sualnak kha Pathian nih, Tha tein a ka remhpiak.</p>\r\n<p><b>4. </b>Thachin a kan pek Pathian nih, Jesuh nih a kan chimh cang, Mi a cheu nih khan an zumh i, A cheu nih an zum\r\n    ve lo, A zum lomi nih sifahnak, Jesuh bia bang an in lai.</p>\r\n<p><b>5. </b>Keimah caah Bawi Jesuh cu, Vailamtahnak ah a thi, Amah hawi nih khan an vui i, Ni thum hnuah a tho than,\r\n    Vancung khua chungah a um i, Mi vialte a zaangfah hna.</p>",
        "id": "107",
        "name": "A SUALMI HNA RA U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUARUAHHAR KHAMHTU</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Sualthlahnak kha Khrih nih a ser, Khuaruahhar ngaingai a si! Ka sualthlahnak man kha a pek, Khamhnak\r\n    khuaruahhar a si!</p>\r\n<p><b>CHO: </b>Khuaruahharnak kha Jesuh a si, Maw ka Jesuh, Khuaruahharnak kha Jesuh a si, Ka Bawipa.</p>\r\n<p><b>2. </b>Ka lungchung sualnak a thianter, Khuaruahhar Khamhbawi a si! Keimah he a kal ti zungzal, Nifatin a kan\r\n    zohkhenh!</p>\r\n<p><b>CHO: </b>Khuaruahharnak kha Jesuh a si, Maw ka Jesuh, Khuaruahharnak kha Jesuh a si, Ka Bawipa.</p>\r\n<p><b>3. </b>A thiang thi kha a thlet ca ah, Amah ka thangthat theo lai. Ka thlarau kha a dawt ca ah, Pathian sin a\r\n    phakpi lai,</p>\r\n<p><b>CHO: </b>Khuaruahharnak kha Jesuh a si, Maw ka Jesuh, Khuaruahharnak kha Jesuh a si, Ka Bawipa.</p>\r\n<p><b>4. </b>Teinak thazang kha a ka pek, Khuaruahhar Khamhbawi a si, Ka lung Amah sin ka pek lai, Vawlei zeihmanh ruat\r\n    loin.</p>\r\n<p><b>CHO: </b>Khuaruahharnak kha Jesuh a si, Maw ka Jesuh, Khuaruahharnak kha Jesuh a si, Ka Bawipa.</p>",
        "id": "108",
        "name": "KHUARUAHHAR KHAMHTU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZEIDAH A TUAH?</h4> <p>Doh is Db</p> <p><b>1. </b>Khuaruahhar kan tuanbia ngai tuah, A tlaumi lakah kan rak um, Sunparnak ram in a rung tum, Rel cawk lo man in a kan khamh.</p> <p><b>CHO: </b>Hodah tlaunak in a kan khamh? Zeidah a tuah? Khoi ka'h a um? Kannih sin a um ve ko!</p> <p><b>2. </b>Vawlei le vancungmi lakah, A ngan bik Siangpahrang a si, Vailam cungah khenh chihmi cu, Kan Khamhtu Pathian Fa a si.</p> <p><b>CHO: </b>Hodah tlaunak in a kan khamh? Zeidah a tuah? Khoi ka'h a um? Kannih sin a um ve ko!</p> <p><b>3. </b>Atu A mah hmaiah kun in, Khamhbawi sinah naa pe lai maw? A duhnak zong kha na hngalh lai, A tu zau nangmah an khamh lai.</p> <p><b>CHO: </b>Hodah tlaunak in a kan khamh? Zeidah a tuah? Khoi ka'h a um? Kannih sin a um ve ko!</p>",
        "id": "109",
        "name": "ZEIDAH A TUAH?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SIBAWI NGAN</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Hramhthiammi Jesuh a nai cang, A ngan Sibawi a si ko, Thinlung uaimi a lawmhter hna, Jesuh au thawng va\r\n    ngai tuah.</p>\r\n<p><b>CHO: </b>Vanmi nih thangthat ko u, Amah min kha len ko u, Amah kong kha hla sa u, Jesuh thachin Jesuh.</p>\r\n<p><b>2. </b>Nan sualnak kha an tawl cang hna, A aunak aw kha ngai u, Dai tein vancung ah kal u, Lu nunnak ah va lut u.</p>\r\n<p><b>CHO: </b>Vanmi nih thangthat ko u, Amah min kha len ko u, Amah kong kha hla sa u, Jesuh thachin Jesuh.</p>\r\n<p><b>3. </b>Thlan in a tho thanmi Jesuh, Atu Jesuh ka zumh ko. A kan khamhbawi a min Jesuh, A tampi ka dawt ko ta.</p>\r\n<p><b>CHO: </b>Vanmi nih thangthat ko u, Amah min kha len ko u, Amah kong kha hla sa u, Jesuh thachin Jesuh.</p>\r\n<p><b>4. </b>Ra u, thangthat hla sa tuah u, A min tha kha kan chuan lai, Nan aw tha rak chuah cio tuah u, Jesuh kha kan\r\n    thangthat lai.</p>\r\n<p><b>CHO: </b>Vanmi nih thangthat ko u, Amah min kha len ko u, Amah kong kha hla sa u, Jesuh thachin Jesuh.</p>",
        "id": "110",
        "name": "SIBAWI NGAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZA TLAUMI A KAWL</h4> <p>Doh is Bb</p> <p><b>1. </b>A tlaumi a kawl, nem te'n an auh hna, Tlangsang cung a vakvaimi hna zong, \"Bawipa aw nih ka sin ra u,\" a ti Atu zongah Bawipa nih an auh.</p> <p><b>CHO: </b>Lam hlatnak le, tlang sannak zongin, A vakvaimi ratpi hna u (pi hna u), Khamhtu hruangchung le a inn chungah. A tlaumi kha luhpi hna u, luhpi hna u.</p> <p><b>2. </b>A tlaumi kawl tuah, Bawipa Jesuh ca'h, Thlarau der le lungkuaimi hna kha, Khamhnak lam ah hruai zungzal ko hna law; Nun dongh lonak hmun ah kalter hna.</p> <p><b>CHO: </b>Lam hlatnak le, tlang sannak zongin, A vakvaimi ratpi hna u (pi hna u), Khamhtu hruangchung le a inn chungah. A tlaumi kha luhpi hna u, luhpi hna u.</p> <p><b>3. </b>Velngeihnak thawng chim in kal lengmang tuah, Nitin Bawipa Khrih zul lengmang ko, A rilmi hlawm hna, a dermi hnem hna; Lam le nunnak Bawi Jesuh panh in.</p> <p><b>CHO: </b>Lam hlatnak le, tlang sannak zongin, A vakvaimi ratpi hna u (pi hna u), Khamhtu hruangchung le a inn chungah. A tlaumi kha luhpi hna u, luhpi hna u.</p>",
        "id": "111",
        "name": "ZA TLAUMI A KAWL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KEIMAH KHA A KA KAWL</h4> <p>Doh is G</p> <p><b>1. </b>A kan Khamhtu Bawi Bethlehem khua ah, Caw rawleinak kuang chungah a hrin cang. Maw khuaruahharnak ngaingai a si ko, Keimah kha kawl duh ah.</p> <p><b>CHO: </b>Keimah kha a ka kawl, (ka kawl ka kawl) Keimah kha a ka kawl, Maw lunglawmhnak kha khuaruahharnak in, Keimah a ka kawl ko.</p> <p><b>2. </b>Maw Bawi Jesuh nih vailamtahnak ah, Ka sualnak caah thihnak a in cang, Maw zeitluk in dah khuaruahhar a si, Keimah ca'h a thi cang.</p> <p><b>CHO: </b>Keimah kha a ka kawl, (ka kawl ka kawl) Keimah kha a ka kawl, Maw lunglawmhnak kha khuaruahharnak in, Keimah a ka kawl ko.</p> <p><b>3. </b>Bawi Jesuh nih a zungzal vawlei mi, Lam palh sualmi tuu vialte kha a kawl, A saupi duhsah te in a ka auh, Keimah kha a ka auh.</p> <p><b>CHO: </b>Keimah kha a ka kawl, (ka kawl ka kawl) Keimah kha a ka kawl, Maw lunglawmhnak kha khuaruahharnak in, Keimah a ka kawl ko.</p> <p><b>4. </b>Jesuh vawlei ah a rung tum than lai, Kum saupi si hmanhseh hi bia a hmun, Vancung in a rung tum lio ka hmuh lai, A tum lai keimah ca.</p> <p><b>CHO: </b>Keimah kha a ka kawl, (ka kawl ka kawl) Keimah kha a ka kawl, Maw lunglawmhnak kha khuaruahharnak in, Keimah a ka kawl ko.</p>",
        "id": "112",
        "name": "KEIMAH KHA A KA KAWL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A KAN KHAMH CANG</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>A kan khamh cang, khuaruahhar in, A kan Khamhbawi nih a thi cang; Rulhreu temnak a phoih dih cang. Bawi\r\n    Jesuh nih a kan khamh cang.</p>\r\n<p><b>CHO: </b>A kan khamh cang, a kan khamh cang, A thlet thi in a kan tawl cang, Vailamtah cung thihnak a in; A kan\r\n    Khamhbawi kei ca a thi.</p>\r\n<p><b>2. </b>A kan khamh cang, rulhreu temnak, A phoih dih cang keimah cungah; A kan Khamhbawi thangthat u si. A vailam\r\n    kha pu cio u si.</p>\r\n<p><b>CHO: </b>A kan khamh cang, a kan khamh cang, A thlet thi in a kan tawl cang, Vailamtah cung thihnak a in; A kan\r\n    Khamhbawi kei ca a thi.</p>\r\n<p><b>3. </b>Khamh a duh vial a khamh dih cang, Khuaruahharnak hlasa u si; Tingtang tum in thangthat u si. Khamhbawi\r\n    min kha thangthat u si.</p>\r\n<p><b>CHO: </b>A kan khamh cang, a kan khamh cang, A thlet thi in a kan tawl cang, Vailamtah cung thihnak a in; A kan\r\n    Khamhbawi kei ca a thi.</p>",
        "id": "113",
        "name": "A KAN KHAMH CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AMAH KA DAWT</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Ka lung in vawlei sunpar a lo dih, Phannak in Jesuh thi nih a ka khamh, Vailamtahnak tang ah ka lungthin\r\n    cu, Jesuh thi nih hawhra bangin a tawl dih cang.</p>\r\n<p><b>CHO: </b>Ka dawt ko, ka dawt ko, A ka dawt hmasa i Kalvary thingcung in a ka tlanh cang ca ah.</p>\r\n<p><b>2. </b>Sualnak ramlak chungah ka rak tlau cang, Ka lungchung duhnak sal kha ka rak si; Pathian ton lai kha ka rak\r\n    tih ngaingai, Sihmanhsehlaw Jesuh thi nih a ka thianh cang.</p>\r\n<p><b>CHO: </b>Ka dawt ko, ka dawt ko, A ka dawt hmasa i Kalvary thingcung in a ka tlanh cang ca ah.</p>\r\n<p><b>3. </b>Sualnak rak ka tem hmanhseh ka luat cang, Mitcaw ka si nain ceu ka hmu cang; Rak thi hmanhning Khrih\r\n    chungah ka nung cang, Daihnak a ka pekmi vawlei cung chim awkah.</p>\r\n<p><b>CHO: </b>Ka dawt ko, ka dawt ko, A ka dawt hmasa i Kalvary thingcung in a ka tlanh cang ca ah.</p>",
        "id": "114",
        "name": "AMAH KA DAWT",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH KONG KA CHIM TUAH</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Bawipa Jesuh kong ka chim tuah, Theih ka duh ko. Jesuh mah-ka a um ahcun, Ka hal laimi, Lam pawng hmuhmi\r\n    hna, Rili tuanbia, Bawi Jesuh konglam ka chim dih tuah.</p>\r\n<p><b>2. </b>Ngakchia a kehram an dir kong, Ka chim hmasa, A thluachuahnak ka cung a um, Hi ka ruah lai, Zaangfahnak\r\n    bia-thlum, Velngeih tuannak, Khrih hmaipanh ah dawtnak thlam a leng.</p>\r\n<p><b>3. </b>Khuapi chung tiangin ka zulh lai, Ngakchia bu hna, Tum-hnah an hler tikah, kei zong, Ka hler ve lai, A\r\n    thangthattu ah, \"Jesuh Bawipa, Hosanna,\" tiin ka sak ve lai.</p>",
        "id": "115",
        "name": "JESUH KONG KA CHIM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH MIN</h4> <p>Doh is C</p> <p><b>1. </b>Bawi Jesuh min a thlum ngaingai, A min chim ka dai bal lai lo, Bawi Jesuh min sung bik nih cun, Ka lunglawmhnak a tlinter.</p> <p><b>CHO: </b>\"Jesuh\" a min a thlum ko, \"Jesuh\" ni fa aa khat ko, Zungzal thangthat awk tlak min, Mithiang nih aupi cio u (mithiang nih au pi cio u).</p> <p><b>2. </b>Jesuh min kha ka duh ngaingai, Ka ngaihchiat a hngalh i a phorh, Tihphan in a ka huhphenh ca'h, Bawi Jesuh min ka duh ko.</p> <p><b>CHO: </b>\"Jesuh\" a min a thlum ko, \"Jesuh\" ni fa aa khat ko, Zungzal thangthat awk tlak min, Mithiang nih aupi cio u (mithiang nih au pi cio u).</p> <p><b>3. </b>Ka lung a lawmhter zungzal ca'h, A min theih ka dai bal lai lo, A thawngin ka mitthli a hul, Jesuh min hlorh cio ko u.</p> <p><b>CHO: </b>\"Jesuh\" a min a thlum ko, \"Jesuh\" ni fa aa khat ko, Zungzal thangthat awk tlak min, Mithiang nih aupi cio u (mithiang nih au pi cio u).</p> <p><b>4. </b>Ka dawtmi Jesuh minthlum cu, Bia in an chim kho bal lai lo. A thangthat karh chin awk caah, Jesuh min thangthat cio u.</p> <p><b>CHO: </b>\"Jesuh\" a min a thlum ko, \"Jesuh\" ni fa aa khat ko, Zungzal thangthat awk tlak min, Mithiang nih aupi cio u (mithiang nih au pi cio u).</p>",
        "id": "116",
        "name": "JESUH MIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZAANGFAHNAK THACHIN BIA</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Zaangfahnak thachin bia, Lungthin puar a tei khawh, Vawlei a dawt ca ah A Fapa a kan pek.</p>\r\n<p><b>CHO: </b>Aho hmanh nih nan zumh ahcun, Zungzal nunnak kha nan hmuh lai, Zungzal nunnak kha nan hmuh lai.</p>\r\n<p><b>2. </b>Ramlak rul tar zohmi, Damnak an hmuh bangin, Bawi Jesuh kha an zoh, Zungzal nunnak ca ah.</p>\r\n<p><b>CHO: </b>Aho hmanh nih nan zumh ahcun, Zungzal nunnak kha nan hmuh lai, Zungzal nunnak kha nan hmuh lai.</p>\r\n<p><b>3. </b>A sualmi an thi lai, Biaceihnak kan theih cang, Na bia zumh lo ahcun, An rawk ngaingai lai ta.</p>\r\n<p><b>CHO: </b>Aho hmanh nih nan zumh ahcun, Zungzal nunnak kha nan hmuh lai, Zungzal nunnak kha nan hmuh lai.</p>\r\n<p><b>4. </b>Vawlei sual phawt awkah, Bawi Jesuh a ra lo; A sualmi khamh awkah, A nunnak kha a pek.</p>\r\n<p><b>CHO: </b>Aho hmanh nih nan zumh ahcun, Zungzal nunnak kha nan hmuh lai, Zungzal nunnak kha nan hmuh lai.</p>\r\n<p><b>5. </b>Zumh lomi zaangfah ca, Zumhnak lung a pek hna; Thachin a kan pekmi, Zungzal in um ko seh.</p>\r\n<p><b>CHO: </b>Aho hmanh nih nan zumh ahcun, Zungzal nunnak kha nan hmuh lai, Zungzal nunnak kha nan hmuh lai.</p>",
        "id": "117",
        "name": "ZAANGFAHNAK THACHIN BIA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AIZE! KA KHAMHTU THISEN A CHUAK MAW?</h4> <p>Doh is Ab</p> <p><b>1. </b>Aize! ka Khamhtu Bawi thisen, Keimah ca'h a chuak maw? Santlai lo kei ruangah hin maw, A lu sung a pek ko?</p> <p><b>2. </b>Keimah nun sualpalh ca ah maw? Vailam thing cung a hram, Khuaruahhar zaangfah le velngeih, Dawtnak chim khawh lo cu.</p> <p><b>3. </b>Zeizong vialte Sertu Bawi Khrih, A rak thih lio ah khan, Lei le van nih an hramh dih i, Ni zong kha a tlang lo.</p> <p><b>4. </b>Ngaihchiat mitthli cham khawh lomi, Dawtnak lei ka bat cang, Bawipa, ka pum pe hmanhning law, Cu nih a rul kho lo.</p>",
        "id": "118",
        "name": "AIZE! KA KHAMHTU THISEN A CHUAK MAW? (A/B)",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SUNPARNAK A UM</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>A kan Khamhbawi a lu cungah, A lianhngannak a hmun; A sunparnak a cer a tlang, A hmur in vel a luang, A\r\n    hmur in vel a luang.</p>\r\n<p><b>2. </b>Jesuh Khrih he tahchunh awk tlak, Ahohmanh an um lo; Vancungmi hna lak hmanh ah khin, A lomi an um lo, A\r\n    lomi an um lo.</p>\r\n<p><b>3. </b>Sifahnak nih a ka phum kha, Jesuh nih a ka hmuh, Ningzah tih awk vailam put in, Ka ngaihchiatnak a phorh,\r\n    Ka ngaihchiatnak a phorh.</p>\r\n<p><b>4. </b>Jesuh zohkhenh domhtlaihnak in, Keimah ka lu a nung, Thihnak kha ka tei khawh naklai, (Thlan in a ka khamh\r\n    cang)2</p>\r\n<p><b>5. </b>Amah umnak vancung khua ah, Keimah a ka kalpi, Ka Pa lianhnak a ka hmuhter, (Ka lunglawmhnak a tling)2</p>\r\n<p><b>6. </b>Pathian a ngan velngeihnak kha, Keimah ka hmuh dah ngai, Ka lung thonghra ngei hmanhning law, (Bawipa ka\r\n    chanh dih lai)2.</p>",
        "id": "119",
        "name": "SUNPARNAK A UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAILAM PAWNGAH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Jesuh nangmah ka keng tuah, A sungmi na thi in, Mi vialte an thian khawhnak, Kalvary tlang in a luang.</p>\r\n<p><b>CHO: </b>Vailam ah, Vailam ah, Ka lianhnak si ko seh, Ka thlarau vangcung khua ah, Lungdainak phan ko seh.</p>\r\n<p><b>2. </b>Vailam pawngah ther pah in, Dawt hramhnak kha ka hmuh, Zinglei deirel arfi nih, Ka velchum a run ceuh.</p>\r\n<p><b>CHO: </b>Vailam ah, Vailam ah, Ka lianhnak si ko seh, Ka thlarau vangcung khua ah, Lungdainak phan ko seh.</p>\r\n<p><b>3. </b>Pathian tuufa vailam ah, Na huahnak ka hngalhter, A thladem in nifate, Him in ka huppheng ko.</p>\r\n<p><b>CHO: </b>Vailam ah, Vailam ah, Ka lianhnak si ko seh, Ka thlarau vangcung khua ah, Lungdainak phan ko seh.</p>\r\n<p><b>4. </b>Vailam pawngin ka hngah lai, Zumh le ruahchannak he, Hmun dawhbik ka phak hlan tiang, Tiva ral sui khua\r\n    cu.</p>\r\n<p><b>CHO: </b>Vailam ah, Vailam ah, Ka lianhnak si ko seh, Ka thlarau vangcung khua ah, Lungdainak phan ko seh.</p>",
        "id": "120",
        "name": "VAILAM PAWNGAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH VAILAMTAH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Jesuh vailam a tang-ah, Umnak ka lung a si, Ni a linhnak ram chungah hin, Kei ca lungpi a si; Keimah\r\n    ramlak ka um tikah, Kei ca naidem a si, Mi nih thilrit kaltak awkah, Retheihnak in aa din.</p>\r\n<p><b>2. </b>Jesuh nih vailam cungah, Kei ca sifah a in, Keimah zungzal ka hmuhmi kha, Lu hlo Jesuh a si, Ka zoh tikah\r\n    ka ngaih a chia, Khuaruahhar in ka ther, Amah cu zaangfah thiam a si, Kei santlai lo ka si.</p>\r\n<p><b>3. </b>Maw vailam na thladem cu, Ka dornak si ko seh, Zei dang ceunak duh hin lo in, A hmai ceu lawng ka duh,\r\n    Miaknak, sunghnak zei ruat loin, Vawlei hi lan ko seh, Ka ningzahnak ka pum sualnak, Vailam ka sunparnak.</p>",
        "id": "121",
        "name": "JESUH VAILAMTAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KALVARY LEI PANH IN</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Maw zan khuamui nih ka lungthin cu a khuh, Ka retheihnak Khamhtu nih a hngalh, Ka lungretheih caan ah ka\r\n    pawng ah a ra, Hnangamnak le daihnak a ka pek.</p>\r\n<p><b>CHO: </b>Kal-va-ry lei panhin kei ruangah a kal, Keimah ruangah sifah a in, Kalvary lei panh in kei ruangah a\r\n    kal, Kei luatnak ca a thi.</p>\r\n<p><b>2. </b>Misual kei nih a hmaiah kun in ka biak, Pathian ngaihthiamnak ka rak hngal lo, Jesuh nih na sual leiba an\r\n    champiak cang, Ti in aw thawng ka lung ah a thang.</p>\r\n<p><b>CHO: </b>Kal-va-ry lei panhin kei ruangah a kal, Keimah ruangah sifah a in, Kalvary lei panh in kei ruangah a\r\n    kal, Kei luatnak ca a thi.</p>\r\n<p><b>3. </b>Khamhtu a ka dawtnak khuaruahhar a si, Sunparnak kaltak in Kal-va-ry ah, Serhsat phunkip ing in keimah ca\r\n    a kal, A min zungzal thangthat si ko seh.</p>\r\n<p><b>CHO: </b>Kal-va-ry lei panhin kei ruangah a kal, Keimah ruangah sifah a in, Kalvary lei panh in kei ruangah a\r\n    kal, Kei luatnak ca a thi.</p>",
        "id": "122",
        "name": "KALVARY LEI PANH IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SUNPARNAK A UM</h4> <p>Doh is Ab</p> <p><b>1. </b>A kan Khamhbawi a lu cungah, A lianhngannak a hmun; A sunparnak a cer a tlang, A hmur in vel a luang, A hmur in vel a luang.</p> <p><b>2. </b>Jesuh Khrih he tahchunh awk tlak, Ahohmanh an um lo; Vancungmi hna lak hmanh ah khin, A lomi an um lo, A lomi an um lo.</p> <p><b>3. </b>Sifahnak nih a ka phum kha, Jesuh nih a ka hmuh, Ningzah tih awk vailam put in, Ka ngaihchiatnak a phorh, Ka ngaihchiatnak a phorh.</p> <p><b>4. </b>Jesuh zohkhenh domhtlaihnak in, Keimah ka lu a nung, Thihnak kha ka tei khawh naklai, (Thlan in a ka khamh cang)2</p> <p><b>5. </b>Amah umnak vancung khua ah, Keimah a ka kalpi, Ka Pa lianhnak a ka hmuhter, (Ka lunglawmhnak a tling)2</p> <p><b>6. </b>Pathian a ngan velngeihnak kha, Keimah ka hmuh dah ngai, Ka lung thonghra ngei hmanhning law, (Bawipa ka chanh dih lai)2.</p>",
        "id": "123",
        "name": "HRING DILDEL TLANG KHIKHIN A UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">CERHTI A UM</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Immanuel thihri chungin, Thisen tiva a luang, Khi thi chungah a pilmi cu, Sualnak in a thiang cang;\r\n    Sualnak in a thiang cang, Sualnak in a thiang cang, Khi thi chungah a pilmi cu, Sualnak in a thiang cang.</p>\r\n<p><b>2. </b>Mifir vailam an tahmi nih, Khamhnak thi kha a hmuh; Amah bangin sual hmanhning law, A ka ngaihthiam theo\r\n    lai; A ka ngaihthiam theo lai, A ka ngaihthiam theo lai, Amah bangin sual hmanhning law, A ka ngaihthiam theo lai.</p>\r\n<p><b>3. </b>Thahnak a huah maw tuu fate, A sungmi thi a hmuh, Sual thlahnak le dawtnak hla kha, Ka thih hlan tiang sa\r\n    ning. Ka thih hlan tiang sa ning, Ka thih hlan tiang sa ning, Sual thlahnak le dawtnak hla kha, Ka thih hlan tiang\r\n    sa ning.</p>\r\n<p><b>4. </b>Amah chungin thi kha a luang, Keimah ka hmuh tikah, A kan tlanhnak lunglawmhnak hla, (A zungzal ka sak\r\n    lai)3. A kan tlanhnak lunglawmhnak hla, A zungzal ka sak lai.</p>\r\n<p><b>5. </b>A thi luangmi ka hmuh tikah, Dinnak dawtnak a si, A zungzal in a luang theo lai, (Misual thiannak a si)3 A\r\n    zungzal in a luang theo lai, Misual thiannak a si.</p>",
        "id": "124",
        "name": "CERHTI A UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAILAMTAH KA HUN ZOH TIKAH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Vailam thing cung ka zoh tikah, Sunparnak Bawi kha ka hmuh i, Porhlawt le ruamkainak vialte, Atu zei ah ka\r\n    rel ti lo.</p>\r\n<p><b>2. </b>Pathian Bawi Khrih thihnak hlei in, Ruamkainak dang zeihmanh um lo; Zeizong ka lungchung duhnak kha, A\r\n    thihnak ca pek ka duh ko.</p>\r\n<p><b>3. </b>A kut, ke le a lu zoh tuah, Ngaihchiat le zaangfah an luang ti, Cu bang in an i tong kho maw, A lu hling\r\n    in chinh a tlak maw?</p>\r\n<p><b>4. </b>Ka ngeih vialte pe hmanh ninglaw, Laksawng a tam tuk bal lai lo, A sung bik zaangfahnak caah, Pum le\r\n    thlarau pek ka duh ko.</p>",
        "id": "125",
        "name": "VAILAMTAH KA HUN ZOH TIKAH (A/B)",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KALVARY AH KA HRUAI</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Ka nunnak Bawi kan thangthat lai, Sunpar nang ca si seh, Na hling luchin ka philh sual lai. Kalvary ah ka\r\n    hruai.</p>\r\n<p><b>CHO: </b>Gethsemani na thlacamnak, Na tahhramnak vialte he khan, Na dawtnak ka philh nakhnga lo, Kalvary ah ka\r\n    hruai.</p>\r\n<p><b>2. </b>An in vuinak thlan ka hmuhsak, Lunghno in an in tah, Ceunak puan thuamh in vanmi nih, Nangmah kha an in\r\n    ven.</p>\r\n<p><b>CHO: </b>Gethsemani na thlacamnak, Na tahhramnak vialte he khan, Na dawtnak ka philh nakhnga lo, Kalvary ah ka\r\n    hruai.</p>\r\n<p><b>3. </b>Meri bang zingah laksawng he, Na sin ka ratter tuah, Na thlan lawngmi kha ka hmuhsak, Kalvary ah ka hruai.</p>\r\n<p><b>CHO: </b>Gethsemani na thlacamnak, Na tahhramnak vialte he khan, Na dawtnak ka philh nakhnga lo, Kalvary ah ka\r\n    hruai.</p>\r\n<p><b>4. </b>Bawipa, nang ca nifa vailam, Put awk ka lung a si, Na ngaihchiatnak in ve ka duh, Kei ca na in dih cang.</p>\r\n<p><b>CHO: </b>Gethsemani na thlacamnak, Na tahhramnak vialte he khan, Na dawtnak ka philh nakhnga lo, Kalvary ah ka\r\n    hruai.</p>",
        "id": "126",
        "name": "KALVARY AH KA HRUAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TUUFA THISEN</h4> <p>Doh is D</p> <p><b>1. </b>Vawlei cung sualnak vialte kha, A thiang thi in a tawi dih cang, Pathian Fa thangthat hmu ko seh, Sualnak khan a kan khamh dih cang, Lam kan tlau ca ah harnak le, Sifah retheih kan huat na in, Kan sualnak kha kan tawlpiak tuah, Hawhra bangin kan thianter tuah.</p> <p><b>CHO: </b>Hawhra rang nakin, Kan thianter deuh tuah, Na thi in na kan tawl ah cun, (tawl ahcun) Hawhra nakin kan thiang deuh lai (deuh lai)</p> <p><b>2. </b>Pathian fa hling luchin an chinh, Vailamtahnak kha an put ter, Ngaihchiat sifahnak kha a in, Siseh law sawhsawh a si lo, Keimah sualnak thianter awk ah, Na thihnak hmun ah ka hruai tuah. Hawhra nakin ka thian nakhnga, A thiang na thi in ka tawl tuah.</p> <p><b>CHO: </b>Hawhra rang nakin, Kan thianter deuh tuah, Na thi in na kan tawl ah cun, (tawl ahcun) Hawhra nakin kan thiang deuh lai (deuh lai)</p> <p><b>3. </b>Khamhbawi keimah lam ka tlau cang, Ka sualnak kha a tam ca ah, Ka lungchung sualnak a khah ca'h, Ti nih a thianter kho lai lo, Jesuh biakamnak kha ka zumh, Na thi thletnak ah ka kal lai. Hawhra bangin ka thian nakhnga, Na lianhnak in ka thianter tuah.</p> <p><b>CHO: </b>Hawhra rang nakin, Kan thianter deuh tuah, Na thi in na kan tawl ah cun, (tawl ahcun) Hawhra nakin kan thiang deuh lai (deuh lai)</p>",
        "id": "127",
        "name": "TUUFA THISEN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DAIHNAK CAAH A TLING CANG</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Misual mi nih thachin bia, An hngal kho hlei lo; Jesuh a thi nangmah ca, A chim a rau cang,</p>\r\n<p><b>CHO: </b>Daihnak ca ah a tling cang, Tuahser awk vialte, A sualmi khamhnak ca ah, Tuahnak a tling cang.</p>\r\n<p><b>2. </b>Vancung in Jesuh a tum, Lei ah a thi cang, Harnak vialte a tei dih, A bia ngai tuah u,</p>\r\n<p><b>CHO: </b>Daihnak ca ah a tling cang, Tuahser awk vialte, A sualmi khamhnak ca ah, Tuahnak a tling cang.</p>\r\n<p><b>3. </b>A thami kha kawl awkah, Nan zuam cio cang maw? Kan duh kawlnak dih cang seh, Van in a pen cang,</p>\r\n<p><b>CHO: </b>Daihnak ca ah a tling cang, Tuahser awk vialte, A sualmi khamhnak ca ah, Tuahnak a tling cang.</p>\r\n<p><b>4. </b>Bawi Jesuh bia va zum law, A min bochan tuah, Mit-hmai tha nih an hloh khawh, Pamnak a kan pek.</p>\r\n<p><b>CHO: </b>Daihnak ca ah a tling cang, Tuahser awk vialte, A sualmi khamhnak ca ah, Tuahnak a tling cang.</p>\r\n<p><b>5. </b>Mit-hmai tha na kawlmi kha, Vawlei ah chia ta, Bawipa he na um ahcun, Na tei khawh cang lai.</p>\r\n<p><b>CHO: </b>Daihnak ca ah a tling cang, Tuahser awk vialte, A sualmi khamhnak ca ah, Tuahnak a tling cang.</p>",
        "id": "128",
        "name": "DAIHNAK CAAH A TLING CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KALVARY</h4> <p>Doh is Bb</p> <p><b>1. </b>Kalvary ah Jesuh a thi, A kan Khamhbawi khika'h an thah Keimah ca thi sung a chuak cang, Khi tlang in ngaihthiamnak a tling</p> <p><b>CHO: </b>Maw Kal-va-ry, Maw Kalvary, Khika'h kei ca a thi a chuak, Maw Kal-va-ry, Thluachuahnak tlang, Keimah Khamhtu thihnak a si.</p> <p><b>2. </b>Lungpi a kuai khua a mui dih, Khamhbawi a lu a khun, a thi Biaknak inn puan zar kha a tlek, Khamhnak lam tha kha a hun cang.</p> <p><b>CHO: </b>Maw Kal-va-ry, Maw Kalvary, Khika'h kei ca a thi a chuak, Maw Kal-va-ry, Thluachuahnak tlang, Keimah Khamhtu thihnak a si.</p> <p><b>3. </b>Maw Bawi Jesuh zeitin in dah, Vailam put in sifah na in, Kal-va-ry ah kei ca na thi, Na nunnak keimah ca na hloh.</p> <p><b>CHO: </b>Maw Kal-va-ry, Maw Kalvary, Khika'h kei ca a thi a chuak, Maw Kal-va-ry, Thluachuahnak tlang, Keimah Khamhtu thihnak a si.</p>",
        "id": "129",
        "name": "KALVARY",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZOH TUAH, NA NUNG LAI</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Vailamtahnak cungah tarmi nan hmuh tikah, Chikkhat te ah nunnak nan hmuh lai; Cu si ca sualmi nih zoh in\r\n    kawl tuah u, Vailamtahnak an thahmi zoh tuah.</p>\r\n<p><b>CHO: </b>Zoh tuah! Nan nung lai! An tarmi kha zoh tuah, Nunnak kha nan hmuh lai, Nunnak kha atu nan hmu zau lai.</p>\r\n<p><b>2. </b>Amah nih sualthlahnak kha a duh lo ahcun, Zeicadah vailamtah a in lai, Misual thihnak in a kan tlanh duh\r\n    lai maw? Zeicadah a thi kha a luan lai?</p>\r\n<p><b>CHO: </b>Zoh tuah! Nan nung lai! An tarmi kha zoh tuah, Nunnak kha nan hmuh lai, Nunnak kha atu nan hmu zau lai.</p>\r\n<p><b>3. </b>Ngaihchihnak lawng nih sualnak a thlah kho lai lo, A thi lawngin khamhnak kha kan hmuh, Nan sual vialte\r\n    kha rak pu tuah u, a ti, Jesuh nih kan tawlpiak lai, a ti.</p>\r\n<p><b>CHO: </b>Zoh tuah! Nan nung lai! An tarmi kha zoh tuah, Nunnak kha nan hmuh lai, Nunnak kha atu nan hmu zau lai.</p>\r\n<p><b>4. </b>A kan chimhmi bia kha zum loin um hin hlah, Zumhnak caan dang a um ti lai lo, Vawlei dongh tikah voi khat\r\n    a ra than lai, Nan bia kan ceih te hna lai, a ti.</p>\r\n<p><b>CHO: </b>Zoh tuah! Nan nung lai! An tarmi kha zoh tuah, Nunnak kha nan hmuh lai, Nunnak kha atu nan hmu zau lai.</p>",
        "id": "130",
        "name": "ZOH TUAH, NA NUNG LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DAWTNAK THIANG, DAWTNAK THA BIKMI</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Dawtnak thiang, dawtnak tha bikmi, Van lawmhnak vawlei ah rung, Kan lungchung ah nang rung um law, Na vel\r\n    cu kan chinhter tuah. Bawi Khrih, zaangfah thiam bik Bawipa, Kan dawt bik Bawi na si fawn. Na khamhnak cu kan pe ko\r\n    sawh, Lungrethei hna-ngam ter ko.</p>\r\n<p><b>2. </b>Khuaruahhar vansan lung chungah, Na dawtnak thlarau thlah ko, Nangmah dawtnak roco kan duh, Na biakam\r\n    hnangamnak cu. Lianngan Pathian, kan sin rung tum, Na velngeihnak kan hmuhter; A zungzal kan sinah um seh, Kan\r\n    sinin kir ti hlah seh.</p>\r\n<p><b>3. </b>Na mithar cu tlinter cang hna, Thiang le dotla kan siter, Na khamhnak cu kan hmuhter ko, Nangmah he remnak\r\n    tling cu; Vancung khua i na kehram ah, Nangmah kan in biak tikah, Kan sunparnak a karh chin lai, Nang kan in\r\n    thangthat chin lai.</p>",
        "id": "131",
        "name": "DAWTNAK THIANG, DAWTNAK THA BIKMI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HOLH IN KA CHIM KHO LO</h4> <p>Doh is G</p> <p><b>1. </b>Jesuh keimah a ka dawt ca, Vailamtahnak kha a huah cang; Keimah tlanh awkah dawtnak kha, Holh in ka chim kho lo.</p> <p><b>CHO: </b>Bawi Jesuh dawtnak a vel kha (dawtnak a vel kha) Ka hmurka in ka chim kho lo (ka chim kho lo) Amah a dawtnak a tam ca'h, Holh in ka chim kho lo.</p> <p><b>2. </b>Keimah ka lu nunter awkah, Ngaihchiat sifahnak kha a huah; Hling luchin an chinh luchin ah, Sifah ka chim kho lo.</p> <p><b>CHO: </b>Bawi Jesuh dawtnak a vel kha (dawtnak a vel kha) Ka hmurka in ka chim kho lo (ka chim kho lo) Amah a dawtnak a tam ca'h, Holh in ka chim kho lo.</p> <p><b>3. </b>Ka Bawipa hnangamnak ka hmuh, Pathian sinin a ka halpiak; Thisen sung in a ka tlanh cang, Holh in ka chim kho lo.</p> <p><b>CHO: </b>Bawi Jesuh dawtnak a vel kha (dawtnak a vel kha) Ka hmurka in ka chim kho lo (ka chim kho lo) Amah a dawtnak a tam ca'h, Holh in ka chim kho lo.</p> <p><b>4. </b>A ka naih tikah kaa lawm i, Dinhnak tha kha a ka pek ko; Ruahchannak a ka pekmi kha, Holh in ka chim cawk lo.</p> <p><b>CHO: </b>Bawi Jesuh dawtnak a vel kha (dawtnak a vel kha) Ka hmurka in ka chim kho lo (ka chim kho lo) Amah a dawtnak a tam ca'h, Holh in ka chim kho lo.</p>",
        "id": "132",
        "name": "HOLH IN KA CHIM KHO LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIH VAILAM AH</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Khrih vailam kei chawrnak a si, Caan hlun chungin ka hmun ko, A thiang tuanbia ceunak vialte, Vailam parah\r\n    an i pum.</p>\r\n<p><b>2. </b>Ngaihchiatnak a ka tlunh tikah, Ruahchan a lo, tih a zual, Vailam nih a ka hlaw lai lo, Zohhmanh, daihnak\r\n    he a ceu.</p>\r\n<p><b>3. </b>Lunglawmhnak ni a tlan tikah, Ka lam ceu dawtnak a um, Vailam ceu thlam a chuakmi nih, Ni ceu kha a\r\n    dawhter chin.</p>\r\n<p><b>4. </b>Thluachuah vanluh, sifah retheih, Vailam nih a thianter ko; Khingthlai khawh lo daihnak a um, A hmun\r\n    zungzal lawmhnak he.</p>",
        "id": "133",
        "name": "KHRIH VAILAM AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SARAM THISEN IN A SI LO</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Judah Biak theng cungah, Saram phunphun an thah; Siseh cu saram thisen nih, Sualnak a tawl kho lo.</p>\r\n<p><b>2. </b>Siseh Pathian Tuufa, Kan sualnak kalpitu, A thi in sualtlanh thawinak cu, Saram nakin sung deuh.</p>\r\n<p><b>3. </b>Keimah nih ka zumh i, Na khamhnak ka hmuh cang, Sualnak vialte kaa ngaihchih i, Na sin ka phuan Bawipa.</p>\r\n<p><b>4. </b>Vailamtahnak cungah, Sifahnak kha na in, Ka lung in ka ruah tikah cun, Na kan dawtnak ka hngalh.</p>\r\n<p><b>5. </b>Biaknak Pathian Tuufa, A zummi lunglawmhnak, Ka zumh i biak ka duh ko cang, A dawtnak ka thangthat.</p>",
        "id": "134",
        "name": "SARAM THISEN IN A SI LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NUNNAK THI SUNG</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ngaituah nunnak thi sung bik cu, A luang lio atu ah, A kan Khamhtu thi tiva cu, Hawhra bantuk raannak,\r\n    Hawhra bantuk raannak.</p>\r\n<p><b>CHO: </b>Hawhra bang raannak ah i kholh tuah u, A kholh duh vialte ahohmanh, An sual a thianter lai.</p>\r\n<p><b>2. </b>Kalvary tlang ah Khamhtu nih, Ngaihchiatnak kha a in; Amah thi sung a chuakmi kha, Hawhra bantuk raannak,\r\n    Hawhra bantuk raannak.</p>\r\n<p><b>CHO: </b>Hawhra bang raannak ah i kholh tuah u, A kholh duh vialte ahohmanh, An sual a thianter lai.</p>\r\n<p><b>3. </b>Kan dihlak in kan kal kho lai, Tiva thi luannak ah, A thi sung bik kan zumh ahcun, Hawhra bang kan thiang\r\n    lai, Hawhra bang kan thiang lai.</p>\r\n<p><b>CHO: </b>Hawhra bang raannak ah i kholh tuah u, A kholh duh vialte ahohmanh, An sual a thianter lai.</p>\r\n<p><b>4. </b>Bawi Jesuh a tum than tikah, A zummi a khawmh lai, A thi chuahnak a zummi lawng, Vancung khua an co lai,\r\n    Vancung khua an co lai.</p>\r\n<p><b>CHO: </b>Hawhra bang raannak ah i kholh tuah u, A kholh duh vialte ahohmanh, An sual a thianter lai.</p>",
        "id": "135",
        "name": "NUNNAK THI SUNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THI SUNG</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Bawi Jesuh thi a chuakmi cu, Keimah ca a sung bik, Tihnak le sualpalhnak chungin, Ka thlarau aa din cang.</p>\r\n<p><b>CHO: </b>Maw khuaruahhar tiva a luang, A kan Khamhbawi chungin, Van phak tiangin ka hla tha cu, \"Thi sung\r\n    thletmi\" a si.</p>\r\n<p><b>2. </b>\"An sualnak le palhnak vialte, Ka ngaihthiam cang hna lai, Annih caah ka Fa a thi,\" tiah Pathian nih a ti.</p>\r\n<p><b>CHO: </b>Maw khuaruahhar tiva a luang, A kan Khamhbawi chungin, Van phak tiangin ka hla tha cu, \"Thi sung\r\n    thletmi\" a si.</p>\r\n<p><b>3. </b>Philh khawh lomi ka sualnak nih, A ka tihter lai lo, A sung thi a chuakmi thawng in, Ngaihthiamnak ka hmuh\r\n    cang.</p>\r\n<p><b>CHO: </b>Maw khuaruahhar tiva a luang, A kan Khamhbawi chungin, Van phak tiangin ka hla tha cu, \"Thi sung\r\n    thletmi\" a si.</p>\r\n<p><b>4. </b>Zaang a dermi ka pumsa nih, Zawtnak kha tong hmanhseh, Khi thi chungah kaa dinh ahcun, Lungdai in ka thi\r\n    lai.</p>\r\n<p><b>CHO: </b>Maw khuaruahhar tiva a luang, A kan Khamhbawi chungin, Van phak tiangin ka hla tha cu, \"Thi sung\r\n    thletmi\" a si.</p>",
        "id": "136",
        "name": "THI SUNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A THI CHUNGAH THAWNNAK A UM</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Na sual thilrit in na luat cang lai maw? A thi chung thawnnak, Thawnnak a um, Sualnak chungah teinak na\r\n    ngei lai maw? Thawnnak a thi chungah a um.</p>\r\n<p><b>CHO: </b>Thawnnak a um, Khuaruahhar thawnnak, Tuufa thi chungah khan, Thawnnak a um, Khuaruahhar thawnnak, Tuufa\r\n    thi sungmi chungah khan.</p>\r\n<p><b>2. </b>Porhhlawt lungsualnak in na luat lai maw? A thi chung thawnnak, Thawnnak a um, Kal-va-ry ti in tlengh\r\n    awkah ra tuah, Thawnnak a thi chungah a um.</p>\r\n<p><b>CHO: </b>Thawnnak a um, Khuaruahhar thawnnak, Tuufa thi chungah khan, Thawnnak a um, Khuaruahhar thawnnak, Tuufa\r\n    thi sungmi chungah khan.</p>\r\n<p><b>3. </b>Hawhra rang nakin na rang deuh lai maw? A thi chung thawnnak, Thawnnak a um, Ti luang ah sualthurnak a\r\n    thiang dih cang, Thawnnak a thi chungah a um.</p>\r\n<p><b>CHO: </b>Thawnnak a um, Khuaruahhar thawnnak, Tuufa thi chungah khan, Thawnnak a um, Khuaruahhar thawnnak, Tuufa\r\n    thi sungmi chungah khan.</p>\r\n<p><b>4. </b>Na Bawi Jesuh ca rian na tuan lai maw? A thi chung thawnnak, thawnnak a um, Nifa a thangthat hla na sa lai\r\n    maw? Thawnnak a thi chungah a um.</p>\r\n<p><b>CHO: </b>Thawnnak a um, Khuaruahhar thawnnak, Tuufa thi chungah khan, Thawnnak a um, Khuaruahhar thawnnak, Tuufa\r\n    thi sungmi chungah khan.</p>",
        "id": "137",
        "name": "A THI CHUNGAH THAWNNAK A UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAILAM TAHNAK</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>A hlatpi tlangcungah vailamtahnak a dir, Temh ningzah hmelchunhnak a si, Sihmanhseh misual ca ka Bawipa a\r\n    thihnak, Vailamtah nak cu ka tlaihchan.</p>\r\n<p><b>CHO: </b>Vailamtahnak cu ka tlaihchan ko, Ka nunnak kha a dongh hlan tiangin, Vailamtahnak cu ka tlaih lai i, Sui\r\n    luchin sung ah ka thlen te lai.</p>\r\n<p><b>2. </b>Vailamtahnak zeitluk vawlei zomhtaih a in, Siseh kei ca duhnak a si, Pathian Tuufa a vancung sunpar kaltak\r\n    in, Kalvary ah thihnak a in.</p>\r\n<p><b>CHO: </b>Vailamtahnak cu ka tlaihchan ko, Ka nunnak kha a dongh hlan tiangin, Vailamtahnak cu ka tlaih lai i, Sui\r\n    luchin sung ah ka thlen te lai.</p>\r\n<p><b>3. </b>Vailamtahnak a thiang thi aa nehmi cungah, Ka hmuh aa dawhnak khuaruahhar, Vailam cungah Jesuh temhinnak\r\n    in a thi, Keimah sualnak thianter awk ah.</p>\r\n<p><b>CHO: </b>Vailamtahnak cu ka tlaihchan ko, Ka nunnak kha a dongh hlan tiangin, Vailamtahnak cu ka tlaih lai i, Sui\r\n    luchin sung ah ka thlen te lai.</p>\r\n<p><b>4. </b>Vailamtahnak zungzal dinnak in ka zulh lai, Lunglawm in ningzah ka in lai, Vancung ka inn ah khin a ka auh\r\n    te lai i, A sunparnak kha kaa hrawm ve lai.</p>\r\n<p><b>CHO: </b>Vailamtahnak cu ka tlaihchan ko, Ka nunnak kha a dongh hlan tiangin, Vailamtahnak cu ka tlaih lai i, Sui\r\n    luchin sung ah ka thlen te lai.</p>",
        "id": "138",
        "name": "VAILAM TAHNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THIANNAK THISEN</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Zohhmanh u, sualnak a kalpitu khi, Thihnak Kalvary tlang cungah, Vailamtahnak thing cungah khan an tar,\r\n    Keimah ca a thi kha a luang cang.</p>\r\n<p><b>CHO: </b>A kan Khamhtu a hnak chungin thisen le ti kha a chuak cang, Ka lung chungah um zungzal seh, Misual\r\n    thiannak tiva.</p>\r\n<p><b>2. </b>A zaangfahnak ti thiangkha a luang cang, A kan Khamhtu thihnak hmun in, A zungzal in khi ka ah vaa kholh\r\n    u, Thlarau Khamhtu Bawipa sinah cun.</p>\r\n<p><b>CHO: </b>A kan Khamhtu a hnak chungin thisen le ti kha a chuak cang, Ka lung chungah um zungzal seh, Misual\r\n    thiannak tiva.</p>\r\n<p><b>3. </b>A thi luannak ah aa kholhmi vialte, An sual hawhra bang a thiang lai, Nan sualnak vialte kha hun kalpi u,\r\n    \"Ra bai u,\" nan Khamhtu nih a ti.</p>\r\n<p><b>CHO: </b>A kan Khamhtu a hnak chungin thisen le ti kha a chuak cang, Ka lung chungah um zungzal seh, Misual\r\n    thiannak tiva.</p>\r\n<p><b>4. </b>Ka tlau bal ti lai lo sualnak chungah, A ka Khamhtu Bawipa Jesuh, A thiang bikmi thlarau in ka hruai law,\r\n    Na lawmhnak mui kha ka hmuhter ko.</p>\r\n<p><b>CHO: </b>A kan Khamhtu a hnak chungin thisen le ti kha a chuak cang, Ka lung chungah um zungzal seh, Misual\r\n    thiannak tiva.</p>",
        "id": "139",
        "name": "THIANNAK THISEN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN FA RALDOH AH A KAL</h4> <p>Doh is Bb</p> <p><b>1. </b>Pathian Fapa nih raldohnak tei awkah a chuak cang, A thi in hmelchunhnak a ser, Hodah a zul ngam lai? Temhnak a ing khomi hna le, Lungsaunak a ngeimi, Vailamtahnak a phor khomi, Amah zulmi an si.</p> <p><b>2. </b>Jesuh ca'h lu a hlomi nih, Thihnak rili ral ah, Jesuh a hmai kha a hmuh i, A khamhnak kha a hal. Jesuh bangin ngaihthiam lung in, Sifah a in lioah, A thattu ca ah thla a cam, Hodah a zul ngam lai?</p> <p><b>3. </b>Thiang Thlarau nih a rung tum i, Zultu hleihnih cungah, An ruahchannak kha an hngalh i, Zeihmanh an tih cio lo. Vainam har le chiandeih ho kha, Annih nih an ngamh ko, Annih keneh hna kha zul in, Hodah a kal ngam lai?</p> <p><b>4. </b>Nutar, patar, ngaknu, tlangval, Ngakchia le mi vialte, Jesuh caah lu a hlomi, Jesuh hmai hla an sa, Sifahnak le retheihnak he, Van lam chosang an kai; An lam kha kan zulh khawh nakhnga, Zaang thawnnak kan pe tuah.</p>",
        "id": "140",
        "name": "PATHIAN FA RALDOH AH A KAL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZOH LAW NUNG</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Bawipa sinin thawng ka theih, Hal-le-lu-jah, Cu thawngtha cu nang kan thanh lai; A biathiang chungah a um\r\n    Hal-le-lu-jah, Zoh law nung tuah ti bia thiang a si.</p>\r\n<p><b>CHO: </b>Maw unau, zoh law nung tuah, Jesuh zoh law na nung lai, A bia thiang chungah a um. Hal-le-lu-jah, Zoh\r\n    law nung tuah ti bia thiang a si.</p>\r\n<p><b>2. </b>A dawtnak thawngtha ka ngei, Hal-le-lu-jah, Nangmah ca ah thanhmi thawngtha; Cunglei in thanhmi thawngtha\r\n    Hal-le-lu-jah, Jesuh chimmi biatak cu ka hngalh.</p>\r\n<p><b>CHO: </b>Maw unau, zoh law nung tuah, Jesuh zoh law na nung lai, A bia thiang chungah a um. Hal-le-lu-jah, Zoh\r\n    law nung tuah ti bia thiang a si.</p>\r\n<p><b>3. </b>Nunnak cu pek na si cang, Hal-le-lu-jah, Zungzal nunnak cu na ngei lai; Amah lawng kha va zoh tuah,\r\n    Hal-le-lu-jah, Jesuh lawng khamh khotu asi.</p>\r\n<p><b>CHO: </b>Maw unau, zoh law nung tuah, Jesuh zoh law na nung lai, A bia thiang chungah a um. Hal-le-lu-jah, Zoh\r\n    law nung tuah ti bia thiang a si.</p>",
        "id": "141",
        "name": "ZOH LAW NUNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A NUNG</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Thihnak in a tho than cang, Ka Khamhtu Bawi Jesuh, Amah a nun kha ka hngalh, Zei bia hmanh chim hna seh, A\r\n    dawtnak kut kha ka hmuh, A aw thlum kha ka theih, Ka herh lio caan kip ah ka pawngah a um.</p>\r\n<p><b>CHO: </b>A nung, A nung, Khrih Jesuh a nung ko, Kan i chok ti, Bia kan i ruah, Ka umnak kip ah khan, A nung, A\r\n    nung, Khamhnak kha pek awkah, Ka hngalhnak na ka hal ahcun, Ka lung chungah a nung.</p>\r\n<p><b>2. </b>Ka pawng khuaza kip ah hin, A dawtnak kha ka hmuh, Ka lung re-thei hmanh seh law, Ka lung a dong lai lo,\r\n    Lam a ka hmuhsak ka hngalh, Thlichia tho chungah khan, Amah a langh laini kha a phan cang lai.</p>\r\n<p><b>CHO: </b>A nung, A nung, Khrih Jesuh a nung ko, Kan i chok ti, Bia kan i ruah, Ka umnak kip ah khan, A nung, A\r\n    nung, Khamhnak kha pek awkah, Ka hngalhnak na ka hal ahcun, Ka lung chungah a nung.</p>\r\n<p><b>3. </b>Lawm tuah, lawm tuah, Maw Khrihfa, Fakpi in thangthat tuah, Hal-le-lu-jah tiin, Jesuh Khrih Siangpahrang\r\n    cu, A kawlmi vialte ruahchannak le, Bawmtu a si, Ahohmanh amah tluk tha cu an um lo.</p>\r\n<p><b>CHO: </b>A nung, A nung, Khrih Jesuh a nung ko, Kan i chok ti, Bia kan i ruah, Ka umnak kip ah khan, A nung, A\r\n    nung, Khamhnak kha pek awkah, Ka hngalhnak na ka hal ahcun, Ka lung chungah a nung.</p>",
        "id": "142",
        "name": "A NUNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THAWHTHAN NI</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Maw lei, thawhthan ni lianngan, Thanh hna khua zakip ah, Lunglawmhnak khua a dei ni, Thihnak a teinak ni.\r\n    Thihnak in nunnak lei ah, Vawlei in van ah khin, Teinak hla he Bawi Khrih nih, A kan phanhter lan cang.</p>\r\n<p><b>2. </b>Zungzal a nungmi Bawipa, Thawhthannak ceu tha cu, Kannih kan hmuh khawh nak hnga, Kan lungthin thiang ko\r\n    seh. \"Nannih vialte i lawm u,\" Nunnak Bawi nih a ti, Jesuh kan Siangpahrang cu, Thangthat cio ko u si.</p>\r\n<p><b>3. </b>Maw van, i lawm ko cang tuah, Maw lei, nan hla thawh u, Leicung um zeizong kip nih, Lawm in um cang ko u.\r\n    Hmuh lo thil sem kip zong nih, Lawm in hla sa tuah u, Zungzal lawmhnak Bawi Khrih cu, A tho than cang tiin.</p>",
        "id": "143",
        "name": "THAWHTHAN NI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NIHIN KHRIH A THO THAN</h4> <p>Doh is D</p> <p><b>1. </b>Nihin Jesuh a tho cang, Hal-le-lu-jah! Minung le vancungmi hna, Hal-le-lu-jah! Teinak hla fakpi'n sa u, Hal-le-lu-jah! Van le vawlei mi sa u, Hal-le-lu-jah!</p> <p><b>2. </b>Khamhnak rian kha a lim cang, Hal-le-lu-jah! Thihnak ral kha a tei cang, Hal-le-lu-jah! Thihnak nih a tlai kho lo, Hal-le-lu-jah! Pa-ra-dais kha a hun cang, Hal-le-lu-jah!</p> <p><b>3. </b>Kan Siangpahrang a nung than, Hal-le-lu-jah! Maw thihnak na sivai tah? Hal-le-lu-jah! Thihnak in a kan khamh cang, Hal-le-lu-jah! Maw, thlan na mi teinak tah? Hal-le-lu-jah!</p> <p><b>4. </b>Khrih kan hruaitu kan zulh lai, Hallelujah! Thangthatmi kan Bawipa cu, Hal-le-lu-jah! Amah bang kan tho than lai, Hal-le-lu-jah! Teinak in teinak chin ah, Hal-le-lu-jah!</p>",
        "id": "144",
        "name": "NIHIN KHRIH A THO THAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH A THO CANG!</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Thlan chungah nang na um, Jesuh ka Khamhtu, Na thawh lai ni na ngan, Jesuh ka Bawi.</p>\r\n<p><b>CHO: </b>Thlan chungin Jesuh a tho, Lianhngannak in ral kha a tei hna, Mithi khua in thihnak teitu Bawi a tho,\r\n    Ami pen awkah khan a zungzal a nung, A tho cang (A tho cang) A tho cang (A tho cang) Hal-le-lu-jah, a tho cang.</p>\r\n<p><b>2. </b>An hngah a thahnem lo, Jesuh ka Khamhtu, Thlan kha an phih fawn ko, Jesuh ka Bawi.</p>\r\n<p><b>CHO: </b>Thlan chungin Jesuh a tho, Lianhngannak in ral kha a tei hna, Mithi khua in thihnak teitu Bawi a tho,\r\n    Ami pen awkah khan a zungzal a nung, A tho cang (A tho cang) A tho cang (A tho cang) Hal-le-lu-jah, a tho cang.</p>\r\n<p><b>3. </b>Thih nih an tlai kho lo, Jesuh ka Khamhtu, Thihnak kha na hrawh cang, Jesuh ka Bawi.</p>\r\n<p><b>CHO: </b>Thlan chungin Jesuh a tho, Lianhngannak in ral kha a tei hna, Mithi khua in thihnak teitu Bawi a tho,\r\n    Ami pen awkah khan a zungzal a nung, A tho cang (A tho cang) A tho cang (A tho cang) Hal-le-lu-jah, a tho cang.</p>",
        "id": "145",
        "name": "JESUH A THO CANG!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA BAWI A NUNG THAN TI KA HNGALH</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Ka Bawipa a nung than ti ka hngalh, A dir than lai, Vaw lei cungah, Ka hngalh ko zungzal nunnak a pek, A\r\n    sin a um vel le thawnnak.</p>\r\n<p><b>CHO: </b>Ka hngalh, ka hngalh, Jesuh a nung than, Vawlei cung ah a dir than lai, Ka hngalh, ka hngalh, Nunnak\r\n    Bawipa cu, Vel le thawnnak a sin a um.</p>\r\n<p><b>2. </b>A biakam a pelh bal lo ka hngalh, A bia a hmun, Zei tik hmanh ah, Thihnak nih ka pumsa tei hmanh seh, Ka\r\n    hmuh than theo lai, tu hnu ah.</p>\r\n<p><b>CHO: </b>Ka hngalh, ka hngalh, Jesuh a nung than, Vawlei cung ah a dir than lai, Ka hngalh, ka hngalh, Nunnak\r\n    Bawipa cu, Vel le thawnnak a sin a um.</p>\r\n<p><b>3. </b>Ka umnak inn a remh ti ka hngalh, Ka um ve lai, A umnak ah, A ka hramhnak khuaruahhar a si, Kei ca a ra\r\n    lai, tu hnu ah.</p>\r\n<p><b>CHO: </b>Ka hngalh, ka hngalh, Jesuh a nung than, Vawlei cung ah a dir than lai, Ka hngalh, ka hngalh, Nunnak\r\n    Bawipa cu, Vel le thawnnak a sin a um.</p>",
        "id": "146",
        "name": "KA BAWI A NUNG THAN TI KA HNGALH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SUNPARNAK NA TA A SI</h4> <p>Doh is E</p> <p><b>1. </b>Thihnak teitu Bawi, A tho thanmi Bawi, Sunpar na ta a si, Thihnak na tei ca'h; Vanmi nih lung an thawn, Thlankhar lungpi kha, Na ruak zualnak puan kha, Tha tein an chiah.</p> <p><b>CHO: </b>Thihnak teitu Bawi, A tho thanmi Bawi Sunpar na ta a si, Thihnak na tei ca'h.</p> <p><b>2. </b>Zohhmanh, a tho than, Jesuh, na Bawipa, Dawtnak in an chawnh i, Tihnak um ti lo; Amah kawhmi bu nih, Teinak sa hna seh, An Bawi a nun than ca'h, I lawm ko hna seh.</p> <p><b>CHO: </b>Thihnak teitu Bawi, A tho thanmi Bawi Sunpar na ta a si, Thihnak na tei ca'h.</p> <p><b>3. </b>Zungzal nunnak Bawi, Kan in zumh ko cang, Nang lo cun nunnak hi, Pakpalawng a si; Teitu nak thawng deuh ah, Kannih kan ser ko, Him te'n Jordan tan in, Na inn kan phakter.</p> <p><b>CHO: </b>Thihnak teitu Bawi, A tho thanmi Bawi Sunpar na ta a si, Thihnak na tei ca'h.</p>",
        "id": "147",
        "name": "SUNPARNAK NA TA A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NELRAWN CUAILO PAR THA</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Jesuh hawi tha ka ngei cang, Ka zeizongte a si, Ka thlarau ca a thatning ka chim cawk lo, Nelrawn cuailo\r\n    par tha en, Ka Bawipa cu a si, Thianter le damter ka herh bikmi a si, Ngaihchiat lioah hnangamnak, Retheih caan ah\r\n    dinhnak, Na zeizong ka cungah khing ko, a ti; Nelrawn tha cuailo par tha en, Deirel ceu dawh a si, Ka thlarau ca a\r\n    thatning ka chim cawk lo.</p>\r\n<p><b>CHO: </b>Ngaihchiat lioah hnangamnak, Retheih caan ah dinhnak Na zeizong ka cungah khing ko, a ti; Nelrawn tha\r\n    cuailo par tha en, Deirel ceu dawh a si, Ka thlarau ca a thatning ka chim cawk lo.</p>\r\n<p><b>2. </b>Ka ngaihchiatnak a hloh dih, Thanuamnak a ka pek, Tukforh ka in tikah ka suttung a si, Ka zeizong te ka\r\n    pek dih, Ka siasal vialte zong, A ka hlawm i a sinah a ka um ter. Vawlei nih ka hlaw hmanhseh, Tukforhnak tlung\r\n    hmanhseh, Jesuh thawngin ka hmuitinh ka theih lai, Nelrawn tha cuailo par tha en, Deirel ceu dawh a si, Ka thlarau\r\n    ca a thatning ka chim cawk lo.</p>\r\n<p><b>CHO: </b>Ngaihchiat lioah hnangamnak, Retheih caan ah dinhnak Na zeizong ka cungah khing ko, a ti; Nelrawn tha\r\n    cuailo par tha en, Deirel ceu dawh a si, Ka thlarau ca a thatning ka chim cawk lo.</p>\r\n<p><b>3. </b>Kei a ka kaltak bal lo, A ka hlaw bal fawn lo, Zumhnak in a nawl ka ngaih i ka nunpi, Ka ralhau hruangpi a\r\n    si, Zeihmanh ka tih lai lo, A manna changreu in a ka khimter lai. Sunparnak ka co tikah, A hmai dawh ka hmuh lai,\r\n    Lunglawmhnak tiva kam ah ka ton lai, Nelrawn tha cuailo par tha en, Deirel ceu dawh a si, Ka thlarau ca a thatning\r\n    ka chim cawk lo.</p>\r\n<p><b>CHO: </b>Ngaihchiat lioah hnangamnak, Retheih caan ah dinhnak Na zeizong ka cungah khing ko, a ti; Nelrawn tha\r\n    cuailo par tha en, Deirel ceu dawh a si, Ka thlarau ca a thatning ka chim cawk lo.</p>",
        "id": "148",
        "name": "NELRAWN CUAILO PAR THA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">CHINHTER U SI</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Jesuh min kha thangthat ko u, Vanmi nih thangthat fawn; Vanmi nih thangthat fawn, Sunparnak kha va pe u\r\n    law.</p>\r\n<p><b>CHO: </b>Chinhter u si, Chinhter u si, Chinhter u si, lianngan Khamhtu Bawi bik cu. Chinhter u si,chinhter u si\r\n    Chinhter u si,Bawi bik cu.</p>\r\n<p><b>2. </b>Bawi Jesuh ca a thimi hna, Amah thangthatnak in, Amah thangthatnak in, Kan Khamhbawi ca hlasa u si.</p>\r\n<p><b>CHO: </b>Chinhter u si, Chinhter u si, Chinhter u si, lianngan Khamhtu Bawi bik cu. Chinhter u si,chinhter u si\r\n    Chinhter u si,Bawi bik cu.</p>\r\n<p><b>3. </b>Jen-tail mi nih philh hin hlah u, Nan ca Khamhbawi innak; Nan ca Khamhbawi innak, Amah sinah laksawng pe\r\n    u.</p>\r\n<p><b>CHO: </b>Chinhter u si, Chinhter u si, Chinhter u si, lianngan Khamhtu Bawi bik cu. Chinhter u si,chinhter u si\r\n    Chinhter u si,Bawi bik cu.</p>\r\n<p><b>4. </b>Vawlei miphun zakip vialte, Jesuh hlorh cio ko u, Jesuh hlorh cio ko u, A lianngan bik Bawi si ko seh,\r\n    (Bawi bik cu, Bawi bik cu chinhter u, Bawi bik cu chinhter u).</p>\r\n<p><b>CHO: </b>Chinhter u si, Chinhter u si, Chinhter u si, lianngan Khamhtu Bawi bik cu. Chinhter u si,chinhter u si\r\n    Chinhter u si,Bawi bik cu.</p>\r\n<p><b>5. </b>Vancung mithiang mi hna he khin, Amah cu kan biak lai, Amah cu kan biak lai, A zungzal hla kan sa ti lai,\r\n    (Bawi bik cu, Bawi bik cu chinhter u, Bawi bik cu chinhter u).</p>\r\n<p><b>CHO: </b>Chinhter u si, Chinhter u si, Chinhter u si, lianngan Khamhtu Bawi bik cu. Chinhter u si,chinhter u si\r\n    Chinhter u si,Bawi bik cu.</p>",
        "id": "149",
        "name": "CHINHTER U SI (A/B/C)",
        "nameb": "2"
    },
    {
        "destext": "<h4 align=\"center\">GALILEE PHILHLONAK</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Galilee ah Bawipa Jesuh, Cawnpiak pah in, A umkal tawn, Vancung kong cawnpiaknak caah, Tahchunhnak kha a\r\n    hman tawn hna.</p>\r\n<p><b>CHO: </b>Maw, Galilee ram thluachuakmi Jesuh a chung ah a leng tawn, Kan ram zong nih Jesuh a herh, A chungah\r\n    leng ve seh kan ti.</p>\r\n<p><b>2. </b>Pangpar phunkip tlimno vialte, Lei le van thil, Vialte hna nih, Pathian thatnak a sunparning, A thiannak\r\n    he an kan chimh fawn.</p>\r\n<p><b>CHO: </b>Maw, Galilee ram thluachuakmi Jesuh a chung ah a leng tawn, Kan ram zong nih Jesuh a herh, A chungah\r\n    leng ve seh kan ti.</p>\r\n<p><b>3. </b>Fiang tein hmu kho u si law, Vawlei dihlak, Biakinn a si, Sermi thil vialte hna zong hi, Pathian lamkal tu\r\n    an si dih.</p>\r\n<p><b>CHO: </b>Maw, Galilee ram thluachuakmi Jesuh a chung ah a leng tawn, Kan ram zong nih Jesuh a herh, A chungah\r\n    leng ve seh kan ti.</p>",
        "id": "150",
        "name": "GALILEE PHILHLONAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA CU SIANGPAHRANG A SI</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Ngaihmanh, hladawh bik thawng cu, Van in a rung thang, \"Cung nung bik Pathian cu thangthat u,\" Mithiang le\r\n    vancung mi nih, Lunglawm in hla kha an sa i \"Bawipa Siangpahrang a si,\" ti in an au.</p>\r\n<p><b>2. </b>Cu teinak hla aw thawng cu, Khua zakip a thang, Rili tilet tho bangin, Lawmhnak thawng cu; \"Hal-le-lu-jah\r\n    Bawipa cu, Khuazakip ah an thangthat i \"Bawipa Siangpahrang a si,\" tiin an au.</p>\r\n<p><b>3. </b>Nannih vanmi vialte hna, Pathian thangthat u, Pumkhat Pathian, Pa, Fapa le Thiang-thlarau; Hlan i a rak si\r\n    bangin, Tlanhmi hna nih khan zungzal in \"Bawipa Siangpahrang a si,\" tiin an au.</p>",
        "id": "151",
        "name": "BAWIPA CU SIANGPAHRANG A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MAW THONG TAMPI NIH HLA AN SA</h4> <p>Doh is G</p> <p><b>1. </b>Maw thong tampi nih hla an sa, (Ka khamhtu thangthatnak,)2 Kan Pathian tlanhnak thawngtha le, (Dawtnak le zaangfahnak,)3</p> <p><b>2. </b>Kan siangpahrang a kan Hruaitu, (Thawnnak run kan pe tuah),2 Vawlei cung mi vial te sinah, (Na tha chin thanh awkah)3</p> <p><b>3. </b>Kan Bawi Jesuh na min thiang hi, (Damnak le hnangamnak)2 Misualmi vialte hna ca-ah, (Daihnak nunnak a si)3</p> <p><b>4. </b>Sualnak vialte Teitu nih cun, (Chuahnak nawl a pek hna)2 A thur bik ca'h thi a thlet i, (Kei ca zong a si ve)3.</p>",
        "id": "152",
        "name": "MAW THONG TAMPI NIH HLA AN SA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A KA TLANH CANG CAAH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Sak ka duh ngaimi hla ka ngei, A ka tlanh cang caah, Ka Tlantu le ka Khamhbawi kong, A ka tlanh cang caah.</p>\r\n<p><b>CHO: </b>A ka tlanh cang caah, A ka tlanh cang caah, A min in kaa thangthat lai, A ka tlanh cang caah, Ka\r\n    Khamhbawi min in kaa thangthat lai.</p>\r\n<p><b>2. </b>Lunglawmhtertu Bawi Khrih ka ngei, A ka tlanh cang caah, A riantuan ka laksawng sung bik, A ka tlanh cang\r\n    caah.</p>\r\n<p><b>CHO: </b>A ka tlanh cang caah, A ka tlanh cang caah, A min in kaa thangthat lai, A ka tlanh cang caah, Ka\r\n    Khamhbawi min in kaa thangthat lai.</p>\r\n<p><b>3. </b>Fiangte hngaltu tha bik ka ngei, A ka tlanh cang caah, Zumh lonak le tihnak an lo, A ka tlanh cang caah.</p>\r\n<p><b>CHO: </b>A ka tlanh cang caah, A ka tlanh cang caah, A min in kaa thangthat lai, A ka tlanh cang caah, Ka\r\n    Khamhbawi min in kaa thangthat lai.</p>\r\n<p><b>4. </b>Kei ca remh cia inn tha a um, A ka tlanh cang caah, Zungzal ka umnak ding inn tha, A ka tlanh cang caah!.</p>\r\n<p><b>CHO: </b>A ka tlanh cang caah, A ka tlanh cang caah, A min in kaa thangthat lai, A ka tlanh cang caah, Ka\r\n    Khamhbawi min in kaa thangthat lai.</p>",
        "id": "153",
        "name": "A KA TLANH CANG CAAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH, KA LUNGTHIN IN KAN DUH</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Jesuh ka lungthin in kan duh, Na zaangfahnak kha kaa hmuh lai, Nangmah duh bangin ka ser ko, Nangmah\r\n    lawngte kan dawt ko lai.</p>\r\n<p><b>CHO: </b>Ruahnak lung tha kha run ka pe, A thiang khua kha ka hmuhter tuah, Ka lung chung kha run ceuter law, Na\r\n    umnak kei ca van a si.</p>\r\n<p><b>2. </b>Bawipa nangmah nih na kan dawt, Misual mi kha nang ca kan si, Thanuam in nangmah lei kan hoih, Na lawmhnak\r\n    hmai kha kan hmuh lai.</p>\r\n<p><b>CHO: </b>Ruahnak lung tha kha run ka pe, A thiang khua kha ka hmuhter tuah, Ka lung chung kha run ceuter law, Na\r\n    umnak kei ca van a si.</p>\r\n<p><b>3. </b>Lawmhnak phundang tam hmanhsehlaw, Pangpar tha kha hmu hmanhning law, Ka thlarau hlautu ah zeihmanh, Na\r\n    zaangfahnak bantuk um lo.</p>\r\n<p><b>CHO: </b>Ruahnak lung tha kha run ka pe, A thiang khua kha ka hmuhter tuah, Ka lung chung kha run ceuter law, Na\r\n    umnak kei ca van a si.</p>\r\n<p><b>4. </b>Nangmah loin ceunak um lo, Ka lungchung kha a ceutertu, Vawlei harnak ceuter ko tuah, Lawmhnak vialte nang\r\n    ta an si.</p>\r\n<p><b>CHO: </b>Ruahnak lung tha kha run ka pe, A thiang khua kha ka hmuhter tuah, Ka lung chung kha run ceuter law, Na\r\n    umnak kei ca van a si.</p>",
        "id": "154",
        "name": "JESUH, KA LUNGTHIN IN KAN DUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LUNGVAR MANSUNG BIK</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Bawi Jesuh thawngtha ka hmuh cang, Lawmhnak hla ka sa lai, Jesuh he kan i tlak caah, Lawmhnak hla ka sa\r\n    lai,</p>\r\n<p><b>CHO: </b>Bawi Jesuh thawngtha ka hmuh cang, Lawmhnak hla ka sa lai, Jesuh he kan i tlak ca ah, Lawmhnak hla ka sa\r\n    lai.</p>\r\n<p><b>2. </b>Kan tlangbawi bik Jesuh a si, A ngan bik kan Bawipa, Kan tlangbawi bik vancung khua ah, Bawi thutdan ah a\r\n    thu,</p>\r\n<p><b>CHO: </b>Bawi Jesuh thawngtha ka hmuh cang, Lawmhnak hla ka sa lai, Jesuh he kan i tlak ca ah, Lawmhnak hla ka sa\r\n    lai.</p>\r\n<p><b>3. </b>A ngan bikmi Siangpahrang chin, Mikhamh Pathian a si, Kannih caah ni bang a ceu, Kan damnak zaang a si.</p>\r\n<p><b>CHO: </b>Bawi Jesuh thawngtha ka hmuh cang, Lawmhnak hla ka sa lai, Jesuh he kan i tlak ca ah, Lawmhnak hla ka sa\r\n    lai.</p>\r\n<p><b>4. </b>Kan raithawinak Jesuh a si, Kan ca a thi a thlet, Pathian Tuufa a thihnak cu, Kannih nunnak a si.</p>\r\n<p><b>CHO: </b>Bawi Jesuh thawngtha ka hmuh cang, Lawmhnak hla ka sa lai, Jesuh he kan i tlak ca ah, Lawmhnak hla ka sa\r\n    lai.</p>",
        "id": "155",
        "name": "LUNGVAR MANSUNG BIK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SUI LE NGUN IN A SI LO</h4> <p>Doh is D</p> <p><b>1. </b>Sui le ngun in a si lo, Keimah sualtlanhnak, Vawlei chawhlawn nih ka thlarau a khamh lo, Vailamtahnak thi lawng ka hram fek lung a si, Keimah Khamhbawi thih ca'h, a tu ka him cang.</p> <p><b>CHO: </b>Keimah tlanhnak ngun in a si lo, Sui zongin a si fawn lo, Bawi Jesuh thi nih a ka cawk cang, Chim cawk lo dawtnak man sung.</p> <p><b>2. </b>Sui le ngun in a si lo, Keimah sualtlanhnak, Keimah lungchung sualnak kha a rit ko cang, Vailamtahnak thi lawng ka hram fek lung a si, Ka khamhtu thihnak lawng nih a liam khawh lai.</p> <p><b>CHO: </b>Keimah tlanhnak ngun in a si lo, Sui zongin a si fawn lo, Bawi Jesuh thi nih a ka cawk cang, Chim cawk lo dawtnak man sung.</p> <p><b>3. </b>Sui le ngun in a si lo, Keimah sualtlanhnak, Raithawinak zong nih a kan khamh kho fawn lo, Vailamtahnak thi lawng ka hram fek lung a si, Ka tihnak Khamhbawi thihnak nih a hloh cang.</p> <p><b>CHO: </b>Keimah tlanhnak ngun in a si lo, Sui zongin a si fawn lo, Bawi Jesuh thi nih a ka cawk cang, Chim cawk lo dawtnak man sung.</p> <p><b>4. </b>Sui le ngun in a si lo, Keimah sual tlanhnak, Khi bang in vancung luhnak ka caw kho lo, Vailam tahnak thi lawng ka hram fek lung a si, Khamhbawi thihnak in sual tlanhnak ka hmuh cang.</p> <p><b>CHO: </b>Keimah tlanhnak ngun in a si lo, Sui zongin a si fawn lo, Bawi Jesuh thi nih a ka cawk cang, Chim cawk lo dawtnak man sung.</p>",
        "id": "156",
        "name": "SUI LE NGUN IN A SI LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWI LUCHIN TAMPI IN CHINH</h4> <p>Doh is E</p> <p><b>1. </b>Bawi luchin tam pi in Amah cu chinh tuah u, Bawi thutdan cung thumi Tuufa, Hla in thangthatmi cu, Ka thlarau i hlau tuah, Na ca a thimi cu, A Lianngan bik na Siangpahrang, Zungzal in thangthat tuah.</p> <p><b>2. </b>Dawtnak Bawi, kan Khamhtu, Sui luchin chinh tuah u, A kut ke le a hnak khenhnak, Sunparnak an si cang, Van cungmi hna zong nih, Amah an zoh ngam lo, Khuaruahhar bik, Khuaruahhar chin, Kannih a kan khamhnak.</p> <p><b>3. </b>Daihnak Bawi chinh tuah u, Khua zakip kha a uk, Nichuah, nitlak, chaklei thlanglei, Daihnak kha um cang seh, A pennak a dong lo, A ke hram vel chum ah, A dawhmi van pangpar rimhmui, Zungzal in a par lai.</p> <p><b>4. </b>Kum le caan uktu Bawi, Sui luchin chinh tuah u, Van le vawlei sertu a si, Zeizong vialte Pathian, Khamhtu kan in thangthat, Kan ca'h thih na huah ca'h, Nangmah thangthatnak zungzal in, A dong bal ti lai lo.</p>",
        "id": "157",
        "name": "BAWI LUCHIN TAMPI IN CHINH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HLA DAWH A KA SAKTER</h4> <p>Doh is Ab</p> <p><b>1. </b>Ka lungchung ah hladawh ngaingai cu, Jesuh nih nem te'n a sak, Tih hlah nangmah sinah ka um ko, Dai tein um tuah, a ti.</p> <p><b>CHO: </b>Jesuh, Jesuh, Jesuh, Min thlum bik a si; Ka duhnak a tlinter, Kal pah hla a ka sakter.</p> <p><b>2. </b>Sualnak nih ka nunnak tingtang hri, A chah i a rawk dih cang, Siseh Jesuh nih a peh than ca, Lawmhnak awdawh a um than.</p> <p><b>CHO: </b>Jesuh, Jesuh, Jesuh, Min thlum bik a si; Ka duhnak a tlinter, Kal pah hla a ka sakter.</p> <p><b>3. </b>Amah velngeihnak in ka rum ko, Himnak a thla tang kaa dor, A hmaipanh kha ka zoh zungzal i, Lawmhnak hla ka sa lengmang.</p> <p><b>CHO: </b>Jesuh, Jesuh, Jesuh, Min thlum bik a si; Ka duhnak a tlinter, Kal pah hla a ka sakter.</p> <p><b>4. </b>A rauh hlanah a tum than lai i, A sinah a ka hruai lai. Hngalh lo ram ah khin kan zuang lai i, Amah he kan uk ti lai.</p> <p><b>CHO: </b>Jesuh, Jesuh, Jesuh, Min thlum bik a si; Ka duhnak a tlinter, Kal pah hla a ka sakter.</p>",
        "id": "158",
        "name": "HLA DAWH A KA SAKTER",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA CU KA TUUKHAL A SI</h4> <p>Doh is Bb</p> <p><b>1. </b>Jesuh cu ka Tuukhal a si, Zeihmanh ka tih ti lo, Ram hring lakah a ka ihter, Ti pawngah a ka hruai.</p> <p><b>2. </b>Ka nunnak kha a tlunter than, A min thangthat awk ca'h, A kut in dinnak lam tha ah, A ka kalpi lengmang.</p> <p><b>3. </b>Thihnak hor ah kal hmanhning law, Ka thin a phang lai lo, Na thiangthunh le na tanbo nih, Ka hna an ka ngamter.</p> <p><b>4. </b>Keimah ka ral hna hmaika ah, Rawl kha na ka dangh i, Ka lu kha chiti na thuh i, Ka hrai kha a liam ko.</p> <p><b>5. </b>Thatnak le zaangfahnak hna nih, An ka zulh camcin lai, Bawipa Pathian innchung ahcun, Zungzal in ka um lai.</p>",
        "id": "159",
        "name": "BAWIPA CU KA TUUKHAL A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AA DAWH BIK JESUH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Aa dawh bik Jesuh, Zeizong vialte pengtu, Pathian le minung i Fapa, Nangmah kan bochan, Nangmah kan upat,\r\n    Nang ka thlarau sunpar luchin.</p>\r\n<p><b>2. </b>Ram-hring an i dawh, Thing an i dawh chinchin, Sunparnak in an i thuam dih, Jesuh aa dawh deuh, Jesuh a\r\n    thiang deuh, Ngaihchiami lung a lawmhter hna.</p>\r\n<p><b>3. </b>Nitlang aa dawh ko, Thlapa aa dawh chinchin, Vancung arfi vialte zong khi, Vanmi vialte nih, An thangthat\r\n    leng in, Jesuh cu a thiang i a ceu.</p>",
        "id": "160",
        "name": "AA DAWH BIK JESUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THANGTHAT U! THANGTHAT U!</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Lawm u, Lawm u, Kan dawtmi Khamhtu Bawi Jesuh, Leicung mi nih Amah lianhnak sa u, Vanmi zong nih Jesuh\r\n    lianhnak kha thangthat u, Amah dawtnak le velngeihnak chim u; Tuukhal bangin a mi kha a zohkhenh hna, A ban chungah\r\n    chun nitlak a pom hna. Lawm u, Lawm u, Kan dawtmi Khamhtu Bawi Jesuh! Amah lawmhnak zungzal hla in sa u!</p>\r\n<p><b>2. </b>Lawm u, Lawm u, Kan dawtmi Khamhtu Bawi Jesuh, Kan sual ca hrengkhenh sifahnak a in, Kan fehnak zungzal\r\n    kan hngatchannak kha a si, An thah cangmi Jesuh kha va bia u, Kan sifahnak a ingmi Jesuh lawm u, Amah dawtnak lawmh\r\n    cawk loin a tam. Lawm u, Lawm u, Kan dawtmi Khamhtu Bawi Jesuh! Amah lawmhnak zungzal hla in sa u!</p>\r\n<p><b>3. </b>Lawm u, Lawm u, Kan dawtmi Khamhtu Bawi Jesuh, Vancung khua ah Amah thawng kha a ngan, Jesuh Khamhbawi\r\n    zungzal in zungzal tiang a uk, Siangpahrang, Bawi, Profet, Tlangbawi a si, A rat tikah vawlei kha a pen dih lai,\r\n    Lianhnak, Sunparnak, Bawipa ta an si. Lawm u, Lawm u, Kan dawtmi Khamhtu Bawi Jesuh! Amah lawmhnak zungzal hla in\r\n    sa u!.</p>",
        "id": "161",
        "name": "THANGTHAT U! THANGTHAT U!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN HNGAH LIO JESUH A KAN HMU LAI MAW?</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Bawi Jesuh a rung tum than te tikah, Chun, zan zei caan ti loin, Lung dinnak in kannih nih kan hngak maw?\r\n    Meifar vialte timh cia in.</p>\r\n<p><b>CHO: </b>Maw kannih, vialte kan i tim cang maw? Thlarau tha umnak inn ca, Kan hngah lio Jesuh a kan hmu lai maw?\r\n    Hngak ko, Jesuh tumnak kha hngak ko.</p>\r\n<p><b>2. </b>Pakhat hnu pakhat a kan auh tikah, Zinglei khua a dei lioah, A kan pekmi chaw kan pek than tikah, A tha, a\r\n    kan ti lai maw?</p>\r\n<p><b>CHO: </b>Maw kannih, vialte kan i tim cang maw? Thlarau tha umnak inn ca, Kan hngah lio Jesuh a kan hmu lai maw?\r\n    Hngak ko, Jesuh tumnak kha hngak ko.</p>\r\n<p><b>3. </b>A kan chimh takmi kha kan tuah cang maw? Kan tha a um chung vialte, Mawhchiatnak in kannih kan luat ahcun,\r\n    Hnangamnak kha kan hmuh lai.</p>\r\n<p><b>CHO: </b>Maw kannih, vialte kan i tim cang maw? Thlarau tha umnak inn ca, Kan hngah lio Jesuh a kan hmu lai maw?\r\n    Hngak ko, Jesuh tumnak kha hngak ko.</p>\r\n<p><b>4. </b>A hngak vialte thluachuahnak um ko seh, Liannak chung an um te lai. Chun, zan, le zantim caan zongah\r\n    siseh, Kan hngahnak a hmu lai maw?.</p>\r\n<p><b>CHO: </b>Maw kannih, vialte kan i tim cang maw? Thlarau tha umnak inn ca, Kan hngah lio Jesuh a kan hmu lai maw?\r\n    Hngak ko, Jesuh tumnak kha hngak ko.</p>",
        "id": "162",
        "name": "KAN HNGAH LIO JESUH A KAN HMU LAI MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH A TUM THAN LAI</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Khuadeinak arfi deirel chuah caan ah siseh, Khuamuihnak ka in ni a chuah lioah siseh, Jesuh lianhnak he hi\r\n    vawlei ah a tum lai, A zummi a khawmh hna lai.</p>\r\n<p><b>CHO: </b>Maw ka Pathian, zeitikah dah lawmhnak hla ka sak lai? Hal-le-lu-jah! Jesuh tum than, Hal-le-lu-jah!\r\n    Amen! Hal-le-lu-jah! Amen!</p>\r\n<p><b>2. </b>Chun ling ah siseh, zanlei sang zongah siseh, Zantim khuamui, mui cirik caan khum-ah siseh, Pathian\r\n    lianhngannak in Jesuh kha a tum lai, A zummi a khawmh hna lai.</p>\r\n<p><b>CHO: </b>Maw ka Pathian, zeitikah dah lawmhnak hla ka sak lai? Hal-le-lu-jah! Jesuh tum than, Hal-le-lu-jah!\r\n    Amen! Hal-le-lu-jah! Amen!</p>\r\n<p><b>3. </b>Mithiangmi hna le, vancungmi cu hmunkhat ah, An thawng a thang lai, vancung in a tum lioah, Pathian\r\n    lianhnak kha, A velchum ah a tlang lai, A zummi a khawmh hna lai.</p>\r\n<p><b>CHO: </b>Maw ka Pathian, zeitikah dah lawmhnak hla ka sak lai? Hal-le-lu-jah! Jesuh tum than, Hal-le-lu-jah!\r\n    Amen! Hal-le-lu-jah! Amen!</p>\r\n<p><b>4. </b>Kan lung tum bik cu, phak kan duh ko thih loin, Ngaihchiat, tahhram, zawt, retheih, sifah luatnak in,\r\n    Pathian nih minmei in a kan kaipi ahcun, Zeitluk in kan i lawmh lai.</p>\r\n<p><b>CHO: </b>Maw ka Pathian, zeitikah dah lawmhnak hla ka sak lai? Hal-le-lu-jah! Jesuh tum than, Hal-le-lu-jah!\r\n    Amen! Hal-le-lu-jah! Amen!</p>",
        "id": "163",
        "name": "JESUH A TUM THAN LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MIN AN AU TIKAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Bawi Jesuh a tum than tikah vancung muko kan theih lai, Zungzal in ceunak ni bang in a tlang lai, Khamhnak\r\n    a hmumi vialte he vancung ah kan i tong lai, Min an au tikah kei zong ka um ve lai.</p>\r\n<p><b>CHO: </b>Vancung ah an kan auh tikah, Vancung ah an kan auh tikah, Vancung ah an kan auh tikah, Min an au tikah\r\n    kei zong ka um ve lai.</p>\r\n<p><b>2. </b>A ceu bikmi zingka ah a thimi an tho than lai i, Jesuh thawhthan sunparnak chung an lut lai, Vancung Amah\r\n    sinah a khamh ciami vialte an um lai, Min an au tikah kei zong ka um ve lai.</p>\r\n<p><b>CHO: </b>Vancung ah an kan auh tikah, Vancung ah an kan auh tikah, Vancung ah an kan auh tikah, Min an au tikah\r\n    kei zong ka um ve lai.</p>\r\n<p><b>3. </b>Zingka in nitlak tiang Bawipa Jesuh ca tuan cio tuah u, A zaangfahnak sung bikmi chim cio tuah u, Cun kan\r\n    nunnak a dongh i kan rian zong kha a dih tikah, Min an au tikah kei zong ka um ve lai.</p>\r\n<p><b>CHO: </b>Vancung ah an kan auh tikah, Vancung ah an kan auh tikah, Vancung ah an kan auh tikah, Min an au tikah\r\n    kei zong ka um ve lai.</p>",
        "id": "164",
        "name": "MIN AN AU TIKAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA CU A TUM THAN LAI</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Bawipa cu a rung tum than lai, Timh cia in um tuah u, Sunparnak in a rung tum lai, Timh cia in um tuah u,\r\n    Amah cu dinnak Bawi a si, A tlanhmi thluachuah a pek lai, Bawi thutdan ah bia a ceih lai, Timh cia in um tuah u.</p>\r\n<p><b>CHO: </b>Nu-pi-thi rat tikah naa tim lai maw? Nu-pi-thi rat tikah naa tim lai maw? Zing, chun le zan caan zongah,\r\n    Mei inn zinan rawn cia in, Nu-pi-thi rat tikah naa tim cang maw?</p>\r\n<p><b>2. </b>Bawipa cu a tum than zau lai, Timh cia in um tuah u, Amah zummi a hruai hna lai, Timh cia in um tuah u,\r\n    Vancung darkhing kha an tum lai, Bawipa khamhnak a tlun tikah, Nan meiinn tha tein vang law, Timh cia in um tuah u.</p>\r\n<p><b>CHO: </b>Nu-pi-thi rat tikah naa tim lai maw? Nu-pi-thi rat tikah naa tim lai maw? Zing, chun le zan caan zongah,\r\n    Mei inn zinan rawn cia in, Nu-pi-thi rat tikah naa tim cang maw?</p>\r\n<p><b>3. </b>Bawipa nih bia a ceih dih lai, Timh cia in um tuah u, Muko auhnak thawng kan theih lai, Timh cia in um\r\n    tuah u, Tlangcung le ramkip mi vialte, Biaceih awkah a kan auh lai, Amah hmaiah kan dir cio lai, Timh cia in um\r\n    tuah u.</p>\r\n<p><b>CHO: </b>Nu-pi-thi rat tikah naa tim lai maw? Nu-pi-thi rat tikah naa tim lai maw? Zing, chun le zan caan zongah,\r\n    Mei inn zinan rawn cia in, Nu-pi-thi rat tikah naa tim cang maw?</p>",
        "id": "165",
        "name": "BAWIPA CU A TUM THAN LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NUPI THITU RAT TIKAH</h4> <p>Doh is E</p> <p><b>1. </b>Nupi thitu ratnak ca kan meiinn kan tim maw? Meiinn zinan rawn in kan mei cu a vang lai maw? Zan caan ah, khi zan caan ah, A rat tikah kannih meiinn a vang lai maw?</p> <p><b>CHO: </b>I tim cang u! I tim cang u! Maw, a ratnak ca'h i tim cang u!</p> <p><b>2. </b>Nupi thitu rat tikah a aw kan thei lai maw? A rat tikah lunglawm in hla kan sa kho lai maw? Zan caan ah, khi zan caan ah, A rat tikah kannih meiinn a vang lai maw?</p> <p><b>CHO: </b>I tim cang u! I tim cang u! Maw, a ratnak ca'h i tim cang u!</p> <p><b>3. </b>Nupi thitu a rat tiang dong loin i tim u. Cu lo ahcun a rat tikah thennak a um lai, Zan caan ah, khi zan caan ah, A rat tikah kannih meiinn a vang lai maw?.</p> <p><b>CHO: </b>I tim cang u! I tim cang u! Maw, a ratnak ca'h i tim cang u!</p>",
        "id": "166",
        "name": "NUPI THITU RAT TIKAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NIHIN RUNG TUM SEHLAW</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Jesuh vawlei ah a tum than lai, Nihin tum sual seh law, Thawnnak le dawtnak in pen awkah, Nihin rung tum\r\n    sehlaw, A thimmi ngaknu lak awkah, A tlanhmi le tawlmi vialte, Vawlei khuazakip ah an um, Nihin rungtum sehlaw.</p>\r\n<p><b>CHO: </b>Thangthat ko ning, ka lung a lawmhter lai, Thangthat ko ning, Luchin ka chinh tikah, Thangthat ko ning,\r\n    A lam remh awk caah, Thangthat ko ning, Jesuh a tum te lai.</p>\r\n<p><b>2. </b>Satan uknak a ciam zau te lai, Nihin va ciam seh law! Ngaihchiat tahhram a um ti lai lo, Nihin ah siseh\r\n    law, Khrih ah a thimi an tho lai, Khrih ton awk van in an ngan lai, Khi sunpar zeitik kan hmuh lai, Nihin ah\r\n    sisehlaw.</p>\r\n<p><b>CHO: </b>Thangthat ko ning, ka lung a lawmhter lai, Thangthat ko ning, Luchin ka chinh tikah, Thangthat ko ning,\r\n    A lam remh awk caah, Thangthat ko ning, Jesuh a tum te lai.</p>\r\n<p><b>3. </b>Zumhfek le miding kan si lai maw? Nihin a tum ahcun, Tih loin, lunglawm in hngak u si, Nihin a rat ahcun,\r\n    A rat lai hmelchunh a karh chin, Nichuahlei in ceu a lang cang, Hngak ko, a caan a nai deng cang, Nihin tum sual\r\n    sehlaw.</p>\r\n<p><b>CHO: </b>Thangthat ko ning, ka lung a lawmhter lai, Thangthat ko ning, Luchin ka chinh tikah, Thangthat ko ning,\r\n    A lam remh awk caah, Thangthat ko ning, Jesuh a tum te lai.</p>",
        "id": "167",
        "name": "NIHIN RUNG TUM SEHLAW",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A MAN A SUNG</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Kan lungthin Bawipa Biakinn thiang a si tikah, A chungah Bawipa a um, Thlacamnak thiang he a min in kan i\r\n    pum i, Zeitluk in dah kan i lawmh.</p>\r\n<p><b>CHO: </b>A zummi hna caah cun a sunglawi bik, A cohlangmi hna caah a sunglawi bik; A min in kan i pum i,\r\n    thluachuahnak kan hal lioah, Kan thlacamnak a cohlan.</p>\r\n<p><b>2. </b>A sunparnak chungin ceunak phun tling a tum, Kan ruahchannak zor hmanh seh, A dawtnak a ngan ruangah\r\n    teinak kan hmuh lai, Amah he kan um ca ah.</p>\r\n<p><b>CHO: </b>A zummi hna caah cun a sunglawi bik, A cohlangmi hna caah a sunglawi bik; A min in kan i pum i,\r\n    thluachuahnak kan hal lioah, Kan thlacamnak a cohlan.</p>\r\n<p><b>3. </b>A kan hruainak kan zulh i kan hna a ngamter, Kan chungah lawmhnak a khat, A hmunmi a kut in a kan huhphenh\r\n    zungzal, ti cu fiang tein kan zumh.</p>\r\n<p><b>CHO: </b>A zummi hna caah cun a sunglawi bik, A cohlangmi hna caah a sunglawi bik; A min in kan i pum i,\r\n    thluachuahnak kan hal lioah, Kan thlacamnak a cohlan.</p>\r\n<p><b>4. </b>Biatak hngalhnak in a vel chungah thang u si, Hnangamnak tling ngei u si. Siangpahrang inn ah zatial tlaih\r\n    in kan leng lai, Lawmhnak a dong ti lai lo.</p>\r\n<p><b>CHO: </b>A zummi hna caah cun a sunglawi bik, A cohlangmi hna caah a sunglawi bik; A min in kan i pum i,\r\n    thluachuahnak kan hal lioah, Kan thlacamnak a cohlan.</p>",
        "id": "168",
        "name": "A MAN A SUNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN PENNAK A NAI CANG</h4> <p>Doh is Bb</p> <p><b>1. </b>Vancung khua a tha pennak thlarau khua nih a kan awrh ko, A kum fatin mithiang mi kha an i khawm, Vancung khua pennak ni khua nih a kan naih chin ciahmah ko, Vancung pennak rung tlun cu a nai ko cang.</p> <p><b>CHO: </b>Vancung pennak thlarau khua kha kan naih deng, Vancung pennak thlarau khua kha kan naih deng, Ka thlarau i tim cang tuah, pumhnak muko an tum lai A lianngan, nun uk Pathian a lang lai.</p> <p><b>2. </b>Vancung khua Pathian thlarau khuatha ruahchannak lungthin in Mikhamhtu Pathian a langh lai kha kan hngak, A kan tlanh cang vawlei cung khuahrum rulhreu sal cannak in, Vancung pennak rung tlun cu a nai ko cang.</p> <p><b>CHO: </b>Vancung pennak thlarau khua kha kan naih deng, Vancung pennak thlarau khua kha kan naih deng, Ka thlarau i tim cang tuah, pumhnak muko an tum lai A lianngan, nun uk Pathian a lang lai.</p> <p><b>3. </b>Vancung pennak a tlun tikah a lian Pathian kan hmuh lai, Kan lu a kantu kha a lang hmasa lai, Hal-le-lui-jah a thi in a kan cawk thluachuahnak a si, Maw Pathian vancung pennak nih a kan naih.</p> <p><b>CHO: </b>Vancung pennak thlarau khua kha kan naih deng, Vancung pennak thlarau khua kha kan naih deng, Ka thlarau i tim cang tuah, pumhnak muko an tum lai A lianngan, nun uk Pathian a lang lai.</p> <p><b>4. </b>Khua sau ngannak ca hi vaw lei khua hna kha an re a thei, A rauh ca'h mi vialte an lung a rawk cang, Vancung kong kha bia ngai tein an thanuamter ko u si, Zeitintiah vancung pennak nai dengmang cang.</p> <p><b>CHO: </b>Vancung pennak thlarau khua kha kan naih deng, Vancung pennak thlarau khua kha kan naih deng, Ka thlarau i tim cang tuah, pumhnak muko an tum lai A lianngan, nun uk Pathian a lang lai.</p>",
        "id": "169",
        "name": "PATHIAN PENNAK A NAI CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH A RA LIO</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Hlaphuah u si, Pathian Fa a tum lai, Thi in khamhnak a hmumi vialte ca, A rung tum lai i a kan cawi dih\r\n    lai, Jesuh a rung tum than lai.</p>\r\n<p><b>CHO: </b>Jesuh a rungtum lai, rung tum than lai, Jesuh a rung tum than lai; (a rung tum than lai) Khua kip ah\r\n    Pathian lawmhnak hla thek u, Jesu a rung tum than lai.</p>\r\n<p><b>2. </b>Jesuh tum tikah mithi an tho lai, Kan sianlomi he kan i tong dih lai, Vancung Pathian sinah kan kai dih\r\n    lai, Jesuh a rung tum than lai.</p>\r\n<p><b>CHO: </b>Jesuh a rungtum lai, rung tum than lai, Jesuh a rung tum than lai; (a rung tum than lai) Khua kip ah\r\n    Pathian lawmhnak hla thek u, Jesu a rung tum than lai.</p>\r\n<p><b>3. </b>Jesuh a tum lai, mithiang a khamh lai, Ral thawhnak vawlei kha a daihter lai, Ngaihchiat thinphan sualnak\r\n    a lo dih lai, Jesuh a rung tum than lai.</p>\r\n<p><b>CHO: </b>Jesuh a rungtum lai, rung tum than lai, Jesuh a rung tum than lai; (a rung tum than lai) Khua kip ah\r\n    Pathian lawmhnak hla thek u, Jesu a rung tum than lai.</p>\r\n<p><b>4. </b>Ka ra lai tiah biakam a pel lai lo, Pathian thim ciami ahodah an si? Jesuh a ngangmi ahodah an si? Jesuh a\r\n    rung tum than lai.</p>\r\n<p><b>CHO: </b>Jesuh a rungtum lai, rung tum than lai, Jesuh a rung tum than lai; (a rung tum than lai) Khua kip ah\r\n    Pathian lawmhnak hla thek u, Jesu a rung tum than lai.</p>",
        "id": "170",
        "name": "JESUH A RA LIO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA KHA HNGAK KO</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Bawipa kha hngak ko, Bia a kan kam bangin, Bawipa kha hngak ko, Van in a tum lai, Bawipa kha hngak ko,\r\n    Zumhnak in hngak ko, Na lungthin dihlak in hngak ko.</p>\r\n<p><b>CHO: </b>Hi thawnnak, Hi thawnnak, Thiannak le sualnak, tei khotu thawnnak a si, Hi thawnnak, Hithawn nak,\r\n    Pen-te-cos ni hmuhmi thawnnak.</p>\r\n<p><b>2. </b>Bawipa kha hngak ko, Na zeizong Jesuh pe, Bawipa kha hngak ko, Sual thlah kan si cang, Bawipa kha hngak\r\n    ko, Van thli hmuh awkah, Na lungthin dihlak in hngak ko.</p>\r\n<p><b>CHO: </b>Hi thawnnak, Hi thawnnak, Thiannak le sualnak, tei khotu thawnnak a si, Hi thawnnak, Hithawn nak,\r\n    Pen-te-cos ni hmuhmi thawnnak.</p>\r\n<p><b>3. </b>Bawipa kha hngak ko, Tlangsang deuh kha cuan law, Bawipa kha hngak ko, Ruahnak sangpi he, Bawipa kha hngak\r\n    ko, Van mei hmuh awkah, Na lungthin dihlak in hngak ko.</p>\r\n<p><b>CHO: </b>Hi thawnnak, Hi thawnnak, Thiannak le sualnak, tei khotu thawnnak a si, Hi thawnnak, Hithawn nak,\r\n    Pen-te-cos ni hmuhmi thawnnak.</p>",
        "id": "171",
        "name": "BAWIPA KHA HNGAK KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN, KA LUNG CHUNGAH RUNG TUM</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Pathian, Thlarau ka lungah rungtum tuah, Ka lungthin kha lei in van ah kaipi, Mithawng na si, Lungder caan\r\n    ah ka bawm, Kan dawt awk na si bang, in daw ko ning.</p>\r\n<p><b>2. </b>Nang, ka Pathian le, Siangpahrang na si, Ka lungthin, thawnnak le nunnak na ta, Na vailamtahnak kha na ka\r\n    hmuhsak, Vailam tlaih cu nang nih ka cawnpiak ko.</p>\r\n<p><b>3. </b>Ka kiang na um run ka hngalhter zungzal, Pumsa harnak tuar hi nang ka cawnpiak, Zumh lonak sual ral lian,\r\n    khamhnak ca ah, Lung dongh hnu thlacam khawhnak ka cawnpiak.</p>\r\n<p><b>4. </b>Vanmi an in dawt bang, dawt ka cawnpiak, Dawtnak thiang lawng in ka pum khahter tuah, Thiang Thlarau in\r\n    tipilnak run ka pe, Ka lung cu velngeihnak biaktheng siseh.</p>",
        "id": "172",
        "name": "PATHIAN, KA LUNG CHUNGAH RUNG TUM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THIANG THLARAU, NA CEUNAK HE</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Thiang Thlarau, na ceunak kha, Keimah lung chungah ceu tuah, A muihnak kha lohter law, Ka muihnak hi\r\n    ceuter ko.</p>\r\n<p><b>2. </b>Thiang Thlarau, na thawnnak in, Ka lung chung kha thianter tuah, Sualnak nih caan sau tuk in, Ka lung\r\n    chung kha a pen cang.</p>\r\n<p><b>3. </b>Thiang Thlarau, na lawmhnak in, Ka lungthin chung khahter tuah, Sifahnak vialte tianter, Ngaihchiatnak\r\n    lung damter ko.</p>\r\n<p><b>4. </b>Thiang Thlarau, Pathian Thlarau, Ka lungthin chungah um tuah, Siasal biaknak hlonh dih law, Nangmah lawng\r\n    ka Bawi si ko.</p>",
        "id": "173",
        "name": "THIANG THLARAU, NA CEUNAK HE",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HNANGAMTERTU A TLUNG</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Minung umnak kip ah, Hi thawng hi thanh tuah u, Minung lung chung kip ah, Fahnak umnak paohah; Khrihfa-mi\r\n    vialte nih, Hi lawmhnak thanh hna seh, Hnangamtertu a tlung.</p>\r\n<p><b>CHO: </b>Hnangamtertu a tlung, Hnangamtertu a tlung, Vancung in Thiang Thlarau, Pa nih a kan kamhmi; Minung umnak\r\n    kip ah, Hi thawng hi thanh tuah u, Hnangamtertu a tlung.</p>\r\n<p><b>2. </b>Zan mui cu kan lonh cang, Kan ca khua a dei i, Vawlei lungthin tihnung, A dai ngaihchiatnak kha, Kan\r\n    ralchan tlangcung in, Ni a chuah bantuk khin, Hnangamtertu a tlung.</p>\r\n<p><b>CHO: </b>Hnangamtertu a tlung, Hnangamtertu a tlung, Vancung in Thiang Thlarau, Pa nih a kan kamhmi; Minung umnak\r\n    kip ah, Hi thawng hi thanh tuah u, Hnangamtertu a tlung.</p>\r\n<p><b>3. </b>Bawi vialte Siangpahrang damnak kha i put in, Sualnak chung sal tangmi, Luatnak kha a pek hna, A luatmi\r\n    vialte nih, Hi teinak hla an sa, Hnangamtertu a tlung.</p>\r\n<p><b>CHO: </b>Hnangamtertu a tlung, Hnangamtertu a tlung, Vancung in Thiang Thlarau, Pa nih a kan kamhmi; Minung umnak\r\n    kip ah, Hi thawng hi thanh tuah u, Hnangamtertu a tlung.</p>\r\n<p><b>4. </b>Kan lungthin chungah hin dawtnak hi karh ko seh, Zungzal lotlau ding kha kan zaangfahnak hna hnga, Vawlei\r\n    sual mui chungah, kannih ceuter awkah, Hnangamtertu a tlung.</p>\r\n<p><b>CHO: </b>Hnangamtertu a tlung, Hnangamtertu a tlung, Vancung in Thiang Thlarau, Pa nih a kan kamhmi; Minung umnak\r\n    kip ah, Hi thawng hi thanh tuah u, Hnangamtertu a tlung.</p>\r\n<p><b>5. </b>Maw van hram deng tiangin, mah hi thang dih ko seh, Van mi-thiang hna bangin, vawlei mi vialte nih,\r\n    Donghnak ngei lo dawtnak, hla hi sa cio u si, Hnangamtertu a tlung.</p>\r\n<p><b>CHO: </b>Hnangamtertu a tlung, Hnangamtertu a tlung, Vancung in Thiang Thlarau, Pa nih a kan kamhmi; Minung umnak\r\n    kip ah, Hi thawng hi thanh tuah u, Hnangamtertu a tlung.</p>",
        "id": "174",
        "name": "HNANGAMTERTU A TLUNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THIANG THLARAU LAM HMUHSAKTU</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Thiang Thlarau lamhmuh-saktu, Khrihfa pawngah um zungzal, Kan kut in nifa hruai tuah, Vancung khua kan kai\r\n    lioah, Thawngtha bik kan theih tikah, Retheimi an tha a nuam, \"Na lam kha kan hmuhsak lai, Zul tuah,\" bia nem in a\r\n    ti.</p>\r\n<p><b>2. </b>Keimah he um ti ka hawi, Keimah bawmtu ka Khamhbawi, Khuamui ah kanchia ta hlah, Thinphannak kan huah\r\n    tikah, Thlitu hrang ruahpi sur i, Kan ruahchannak lung a dong, \"Na lam kha kan hmuhsak lai, Zul tuah,\" bia nem in a\r\n    ti.</p>\r\n<p><b>3. </b>Riantuannak a dih tikah, Pathian auhnak thawng ngai tuah, Ruahchannak in thla kan cam, Kan min tial cang\r\n    kha kan hngalh, Thihnak tiva tan tikah, Jesuh thi hngatchan ca ah, \"Na lam kha kan hmuhsak lai, Zul tuah,\" bianem\r\n    in a ti.</p>",
        "id": "175",
        "name": "THIANG THLARAU LAM HMUHSAKTU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN THAW, NANG KA CHEM</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Pathian thaw, nang ka chem, Nunnak thar ka pe tuah, Na duhmi le na tuanmi kha, Ka tuan khawh ve nak-hnga.</p>\r\n<p><b>2. </b>Pathian thaw, nang ka chem, Ka lung a thian hlan tiang, Nang he lungthin khat ka put tiang, Tuan awk le\r\n    innak ah.</p>\r\n<p><b>3. </b>Pathian thaw, nang ka chem, Na mi ka si tiangin, Vawlei sermi ka pumsa hi, Na mei in lumter tuah.</p>\r\n<p><b>4. </b>Pathian thaw, nang ka chem, Ka thi bal ti lai lo; Sihmanhsehlaw zungzal nunnak, Na sinah ka hmuh lai.</p>",
        "id": "176",
        "name": "PATHIAN THAW, NANG KA CHEM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAN THURO, THIANG THLARAU, TUM TUAN</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Van Thuro, Thiang Thlarau, tum tuah, Na thawnnak thazang he, Dawtnak mei thiang kan kaupiak tuah, Kan lung\r\n    kikdai chungah.</p>\r\n<p><b>2. </b>Lung tho loin hla kan sa tawn, Kan zuamnak a lo dih, Kan kaa in Ho-sa-na a dai, Kan dawtnak a ziam cang.</p>\r\n<p><b>3. </b>Bawipa, hi bangin a zungzal, Kan nung kho bal lai maw? Kan in dawtnak a tlawm, a der, Na dawtnak a ngan\r\n    ko.</p>\r\n<p><b>4. </b>Van thuro, Thiang Thlarau, tum tuah, Na thawnnak thazang he, Kan dawtnak mei alhter awk ca, Khamhbawi\r\n    dawtnak thanh ko.</p>",
        "id": "177",
        "name": "VAN THURO, THIANG THLARAU, TUM TUAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HAWIKOM THA BIK KAA NGEIH CANG</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Hawikom tha bik kaa ngeih cang, Ka herhmi a ka pek dih, A sung bik ka Khamhtu bawi, Zumhnak mit in ka zoh\r\n    i, Zeitik caan paoh ah ka hmuh, Lam thluangthluan a ka umpi.</p>\r\n<p><b>CHO: </b>Hal-le-lu-jah Ka Khamhtu he kan kal ti tawn, Ka dawt Khamhtu, Misung Khamhtu, A tlingmi a dawtnak\r\n    chungah a ka chiah i, Keimah lawng a ka kaltak bal lo.</p>\r\n<p><b>2. </b>Ka sualnak vialte a tawl, Thianghlim tein a ka chiah A sung bik ka Khamhtu bawi, Ngandamnak a ka pek i,\r\n    Hnangamnak bia a ka ruah, Nifa thluachuah a ka pek.</p>\r\n<p><b>CHO: </b>Hal-le-lu-jah Ka Khamhtu he kan kal ti tawn, Ka dawt Khamhtu, Misung Khamhtu, A tlingmi a dawtnak\r\n    chungah a ka chiah i, Keimah lawng a ka kaltak bal lo.</p>\r\n<p><b>3. </b>Vansannak ka ton zongah, Mirh zimziam in a ka hnemh, A sung bik ka Khamhtu bawi, Ka phut lomi dinnak cu, A\r\n    tang ah pom in ka hmuh, Bawmtu ka Bawipa a si.</p>\r\n<p><b>CHO: </b>Hal-le-lu-jah Ka Khamhtu he kan kal ti tawn, Ka dawt Khamhtu, Misung Khamhtu, A tlingmi a dawtnak\r\n    chungah a ka chiah i, Keimah lawng a ka kaltak bal lo.</p>\r\n<p><b>4. </b>Umnak inn a kan timhpiak, Lungvar tamhmi tikam ah, A sung bik ka Khamhtu Bawi, Nunnak ni bang a liam cun,\r\n    Khi varal ah ka um lai, Zungzal ceunak khuapi ah,</p>\r\n<p><b>CHO: </b>Hal-le-lu-jah Ka Khamhtu he kan kal ti tawn, Ka dawt Khamhtu, Misung Khamhtu, A tlingmi a dawtnak\r\n    chungah a ka chiah i, Keimah lawng a ka kaltak bal lo.</p>",
        "id": "178",
        "name": "HAWIKOM THA BIK KAA NGEIH CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA HRUAI ZUNGZAL SIANGPAHRANG</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Kan hruai zungzal Siangpahrang, Dohnak ni a phan cang, Ral teinak khua zakip ah, Na deu a um kan inn, Na\r\n    vel cu kan tha a si, Timhnak caan chungah hin; Kan ral dohnak hla kan sa, Atu kan hruai Bawipa.</p>\r\n<p><b>2. </b>Kan hruai zungzal Siangpahrang, Sualnak ral a dih tiang, Thiang bik biathli kan theih lai, Daihnak Amen\r\n    ti-in, Fei, nam thawng bang a si lo, Khuangdar tum zong si lo; Dawtnak le zaangfahnak in, Vancung pennak a ra.</p>\r\n<p><b>3. </b>Kan hruai zungzal Siangpanhrang, Tih lo in kan in zulh, Na hmai a langhnak paoh ah, Lawmhnak zinglei\r\n    bangin, Na vailam kan cung a ra, Kan kal a ceunak in; Teinak luchin remh cia he, Kan hruai thawnnak Bawipa.</p>",
        "id": "179",
        "name": "KA HRUAI ZUNGZAL SIANGPAHRANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIHFA RALKAP KAL U</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Khrihfa ralkap mi hna, Dohnak ah kal u, Hmailei ah a kalmi Jesuh kha zoh u; Jesuh kan Siangpahrang, Hmaiah\r\n    a kan sak, Raldoh zuam a kalmi, Jesuh kha zoh u,</p>\r\n<p><b>CHO: </b>Khrihfa ralkap mi hna, Ral dohnak ah kal, Hmailei ah a kalmi Jesuh kha zoh u.</p>\r\n<p><b>2. </b>Jesuh min an theih ah, Rulhreu mi an tli, Khrihfa ralkapmi nih, Teinak hmu u si, Aunak thawng an theih in,\r\n    Rulhreu pennak rawk, U le nau au len u, Lawmhnak in thangthat.</p>\r\n<p><b>CHO: </b>Khrihfa ralkap mi hna, Ral dohnak ah kal, Hmailei ah a kalmi Jesuh kha zoh u.</p>\r\n<p><b>3. </b>Ralkap rian an tuan bang, Khrihfabu an tuah, Hmailei mithiang keneh, Kannih kan zulh hna, Kannih then lo\r\n    in kawp, Pum khat te kan si, Dawtnak, zumhnak, bochannak, Kan lungtak a si.</p>\r\n<p><b>CHO: </b>Khrihfa ralkap mi hna, Ral dohnak ah kal, Hmailei ah a kalmi Jesuh kha zoh u.</p>\r\n<p><b>4. </b>Vawlei mi-lian pennak, An rawk len nain, Bawi Jesuh pennak kha, Zungzal a hmun ko, Rulhreu puarpennak kha,\r\n    Teinak an hmu lo, Jesuh bia a kan kam, Amah bia a hmun.</p>\r\n<p><b>CHO: </b>Khrihfa ralkap mi hna, Ral dohnak ah kal, Hmailei ah a kalmi Jesuh kha zoh u.</p>\r\n<p><b>5. </b>Vawlei mi vialte hna, Lut Khrihfabu ah, Nan teinak hlasaknak, Nannih zong sa u; Rel cawk lo chan lakah,\r\n    Van le vawlei mi, Thangthat le upatnak, Jesuh pe u si.</p>\r\n<p><b>CHO: </b>Khrihfa ralkap mi hna, Ral dohnak ah kal, Hmailei ah a kalmi Jesuh kha zoh u.</p>",
        "id": "180",
        "name": "KHRIHFA RALKAP KAL U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIH LE KHRIHFABU CAAH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Khrih le Khrihfabu ca ah, Lungkhat te in kan dir; A thangthat tu kan hmur, Sifak bawmtu kan kut; Mitlau\r\n    kawltu kan ke, Khrih ca ah an si.</p>\r\n<p><b>CHO: </b>Khrih le Khrihfabu ca ah, Lungkhat te in kan dir; Bawi Khrih le Khrihfabu ca ah, Kan nunnak kan pek.</p>\r\n<p><b>2. </b>Khrih le Khrihfabu ca ah, Thlacam in rian kan tuan; Ngamh le lungtho ngai in, A rianthiang kan tuan lai;\r\n    Kan biakamnak fek seh, Khrih ca ah ti in.</p>\r\n<p><b>CHO: </b>Khrih le Khrihfabu ca ah, Lungkhat te in kan dir; Bawi Khrih le Khrihfabu ca ah, Kan nunnak kan pek.</p>\r\n<p><b>3. </b>Khrih le Khrihfa-bu ca ah, Ho-sa-na hla kan sa; A kan luatter hnu cun, Teinak bia a kan kamh; \"Khrih le\r\n    Khrihfabu ca,\" Kan lungtum a si.</p>\r\n<p><b>CHO: </b>Khrih le Khrihfabu ca ah, Lungkhat te in kan dir; Bawi Khrih le Khrihfabu ca ah, Kan nunnak kan pek.</p>",
        "id": "181",
        "name": "KHRIH LE KHRIHFABU CAAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIHFABU I PUMHNAK HLA</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Hlau tuah, Hlau tuah, Bawi Jesuh nih atu an auh, Hlau tuah, hlau tuah, a chim thawng kha zum tuah, Kal\r\n    tuah, Kal tuah, Lawmhnak thawng kha va chim tuah u, Bawi Jesuh vailamtahnak kha va put tuah u.</p>\r\n<p><b>CHO: </b>Kal tuah, hla kha sa tuah, Kal tuah, zingka arfi kannih ca ceu cang, Kal tuah, Kannih hmaiah, A lianngan\r\n    Khamhbawi lam a kan hmuhsak A zungzal bia kha ngai u kan kal lio ah, Ho-sa-na ti in au cio ko tuah u law, A ding\r\n    raltha-mi rual hna, Bawi Jesuh lawng nan hngalh ca, Khamhnak kong kha hi vawlei ah thanter u,</p>\r\n<p><b>2. </b>Thanh tuah, Thanh tuah, Leicung i a rami ceunak, Thawng tha a tlung, rili a lonh dih cang, Rianrang kal\r\n    tuah, Din nak thawng kha va chim tuah u, Inn a ummi vialte zong va philh hlah u.</p>\r\n<p><b>CHO: </b>Kal tuah, hla kha sa tuah, Kal tuah, zingka arfi kannih ca ceu cang, Kal tuah, Kannih hmaiah, A lianngan\r\n    Khamhbawi lam a kan hmuhsak A zungzal bia kha ngai u kan kal lio ah, Ho-sa-na ti in au cio ko tuah u law, A ding\r\n    raltha-mi rual hna, Bawi Jesuh lawng nan hngalh ca, Khamhnak kong kha hi vawlei ah thanter u,</p>\r\n<p><b>3. </b>Pathian, Khrihfabu vialte nih an kut an samh, Fing le tlang kar a tlaumi khamh awkah, Lunglawmhnak in nan\r\n    kut kha va samh ko tuah u, Khamhbawi tuukawm chungah an luh than khawh nakhnga.</p>\r\n<p><b>CHO: </b>Kal tuah, hla kha sa tuah, Kal tuah, zingka arfi kannih ca ceu cang, Kal tuah, Kannih hmaiah, A lianngan\r\n    Khamhbawi lam a kan hmuhsak A zungzal bia kha ngai u kan kal lio ah, Ho-sa-na ti in au cio ko tuah u law, A ding\r\n    raltha-mi rual hna, Bawi Jesuh lawng nan hngalh ca, Khamhnak kong kha hi vawlei ah thanter u,</p>\r\n<p><b>4. </b>Zoh tuah, zoh tuah, biakamnak nih an naih ko cang, A kan Khambawi a ngan bik Siangpahrang. Hi vawlei cung\r\n    zeizong vialte a tei dih cang. A ngan bik Hal-le-lu-jah, tiah kan au lai ta.</p>\r\n<p><b>CHO: </b>Kal tuah, hla kha sa tuah, Kal tuah, zingka arfi kannih ca ceu cang, Kal tuah, Kannih hmaiah, A lianngan\r\n    Khamhbawi lam a kan hmuhsak A zungzal bia kha ngai u kan kal lio ah, Ho-sa-na ti in au cio ko tuah u law, A ding\r\n    raltha-mi rual hna, Bawi Jesuh lawng nan hngalh ca, Khamhnak kong kha hi vawlei ah thanter u,</p>",
        "id": "182",
        "name": "KHRIHFABU I PUMHNAK HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA, NA PENNAK KA DUH</h4> <p>Doh is G</p> <p><b>1. </b>Bawipa nangmah pennak, Keimah nih ka duh ko, Kan tlanhtu nih a thi sung in, A khamhmi Khrihfabu.</p> <p><b>2. </b>Pathian, na Khrihfabu, Na hmaiah an dir ko, Nang ca a sung bikmi an si, Na kut chung an um ko.</p> <p><b>3. </b>Pathian na pennak ca'h, Ka thlacamnak a kai, Ka thazang lungtho in ka pek, Vawlei rian a dih tiang.</p> <p><b>4. </b>Lawmhnak sung bik nakin, Van lam ka sunter deuh, Hawikomhnak thiang biakam sung le, A dawt thangthatnak hla.</p> <p><b>5. </b>Na biatak a hmunh bang, Vawlei sunparnak le, Vancung lunglawmhnak sung bik cu, Zion nih a co lai.</p>",
        "id": "183",
        "name": "BAWIPA, NA PENNAK KA DUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NI KHATKHAT AH</h4> <p>Doh is Db</p> <p><b>1. </b>Pathian thangthatnak in van khi a khat i, Vawlei sualnak a muih tuk hringhran ca'h, Ngaknu thiang in Jesuh vawlei ah a chuak, Keimah zohchunh awkah mi sin a um.</p> <p><b>CHO: </b>Nun in a ka dawt, Thih in a ka khamh, Thlan khor ah ka sual a kalpi dih cang, Thawhthannak in khamhnak a tlinter dih cang, A ra than te lai, Maw sunparnak ni.</p> <p><b>2. </b>Bawi Jesuh cu Kal-va-ry tlang ah an hruai, Thi seh tiah thing cungah thir an khenh chih, Ngaihchiat, temh-in phunkip thing cungah a tuar, Ka sual rit phawr Ka Tlanhtu cu a si.</p> <p><b>CHO: </b>Nun in a ka dawt, Thih in a ka khamh, Thlan khor ah ka sual a kalpi dih cang, Thawhthannak in khamhnak a tlinter dih cang, A ra than te lai, Maw sunparnak ni.</p> <p><b>3. </b>Dum chungah cun amah lawngin an kaltak, Thlan chungah khan dai zirziar in aa din, Vancung mi nih a thlan hngah awkah an ra, Khamhtu cu ruahchannak ngan bik a si.</p> <p><b>CHO: </b>Nun in a ka dawt, Thih in a ka khamh, Thlan khor ah ka sual a kalpi dih cang, Thawhthannak in khamhnak a tlinter dih cang, A ra than te lai, Maw sunparnak ni.</p> <p><b>4. </b>Thlan nih amah cu a thup kho ti lo i, Thlan khar lungpi kha a-mah in aa thawn; Thihnak kha a tei i thlan in a tho than; Vancung ah a kai, zungzal ka Bawipa.</p> <p><b>CHO: </b>Nun in a ka dawt, Thih in a ka khamh, Thlan khor ah ka sual a kalpi dih cang, Thawhthannak in khamhnak a tlinter dih cang, A ra than te lai, Maw sunparnak ni.</p> <p><b>5. </b>Jesuh rat thannak muko an tum te lai, A sunpar van ah ni bangin a tlang; Khi ni ah ka dawtmi hna he an ra lai; A lianngan bik Khamhtu Jesuh kei ca.</p> <p><b>CHO: </b>Nun in a ka dawt, Thih in a ka khamh, Thlan khor ah ka sual a kalpi dih cang, Thawhthannak in khamhnak a tlinter dih cang, A ra than te lai, Maw sunparnak ni.</p>",
        "id": "184",
        "name": "NI KHATKHAT AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA ZUMHMI KA HNGALH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Pathian nih zei ca velngeihnak a ka pek ka hngal lo, Dawtnak in zeica tlanh tlak lo, A ka tlanh ka hngal\r\n    lo.</p>\r\n<p><b>CHO: </b>Sihmansehlaw, ka zumhmi ka hngalh, Ka Pathian sinah ka chiahmi vialte, Khi ni tiang a huhphenh khawh\r\n    lai, Cu-caah ka ningzak lo.</p>\r\n<p><b>2. </b>Zeitin khamh hmuhnak zumhnak hi a ka pek ka hngal lo, Ka lungchung ah A-mah bia nih, Daihnak a ka pek\r\n    zong.</p>\r\n<p><b>CHO: </b>Sihmansehlaw, ka zumhmi ka hngalh, Ka Pathian sinah ka chiahmi vialte, Khi ni tiang a huhphenh khawh\r\n    lai, Cu-caah ka ningzak lo.</p>\r\n<p><b>3. </b>Zeitin Thlarau nih misual lung a thlen hi ka hngal lo, Baibal in Jesuh kong a thanh, Zumhnak lung a kan\r\n    pek.</p>\r\n<p><b>CHO: </b>Sihmansehlaw, ka zumhmi ka hngalh, Ka Pathian sinah ka chiahmi vialte, Khi ni tiang a huhphenh khawh\r\n    lai, Cu-caah ka ningzak lo.</p>\r\n<p><b>4. </b>Zeitik ka Bawi rat lai hngalh lo, Zan ah maw chun ceu ah, Nelrawn ah maw kan kal ti lai, Van ah dah kan\r\n    ton lai?.</p>\r\n<p><b>CHO: </b>Sihmansehlaw, ka zumhmi ka hngalh, Ka Pathian sinah ka chiahmi vialte, Khi ni tiang a huhphenh khawh\r\n    lai, Cu-caah ka ningzak lo.</p>",
        "id": "185",
        "name": "KA ZUMHMI KA HNGALH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN PUPA ZUMHNAK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Kan pupa zumhnak a nungmi! Mei le nam zong hrawh khawh lo mi, Hi bia sunglawi kan theih tik ah, Kan lung\r\n    cu lawmhnak in a khat. Kan pupa zumhnak thiang Bawipa, Kan hmun ko lai, kan thih tiangin.</p>\r\n<p><b>2. </b>Kan pupa bang in kan tuan lai, Mi vialte nang ca tei awkah, Pathian pekmi biatak thawng in, Mi zakip nih\r\n    an luat cang lai. Kan pupa zumhnak thiang Bawipa, Kan hmun ko lai, kan thih tiangin.</p>\r\n<p><b>3. </b>Kan pupa hna zumhnak bangin, Hawikom le ral kan dawt hna lai, Kan thanter lai dawtnak thawng cu, Kan\r\n    hmurka le kan ziaza in. Kan pupa zumhnak thiang Bawipa, Kan hmun ko lai, kan thih tiangin.</p>",
        "id": "186",
        "name": "KAN PUPA ZUMHNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA SUNPARNAK AN CHIM</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Nangmah sunparnak kha an chim, Zion, kan Pathian khuapi Zungzal a hmunmi Pathian nih, A umnak ca-ah an\r\n    ser; Zungzal Lungpi cung sakmi cu, Zei nih dah an hninh khawh lai? Khamhnak hau in kulh na si i, Na ral kha na tih\r\n    hna lo.</p>\r\n<p><b>2. </b>Zohhmanh, zungzal dawtnak chungin, Nunnak ti cu a rung luang, Na fale vialte a cawm hna, Chamhbaunak an\r\n    tih lai lo, Cu bantuk tiva luan lio ah, Hodah tihal in ba lai? Bawipa a kan petu thawngin, Velngeihnak a dong lai\r\n    lo.</p>\r\n<p><b>3. </b>A hmunkip velchum hna ah cun, Lianhngannak, himnak ca ah, Mei le khuadawm cu an lo i, Bawipa a nai\r\n    hngalhnak ca, Zungzal Lungpi cung sakmi cu, Zei nih dah an hninh khawh lai? Khamhnak hau in kulh na si i, Na ral\r\n    kha na tih hna lo.</p>",
        "id": "187",
        "name": "NA SUNPARNAK AN CHIM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NITLANNAK AH KAN KAL</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Nitlannak ah kan kal, dawh in a cer chin, Zing van sen le zan dapti lakah kan kal, Fek te-in hmailei\r\n    nifatin in kan kal, Lam thluangthluan Jesuh zul tuah.</p>\r\n<p><b>CHO: </b>Zul tuah, Jesuh kha kan zulh lai, Zul tuah, Nifate zul tuah, Hmai ah a kan hruainak kip ah, Lam\r\n    thluangthluan Jesuh cu kan zul lai.</p>\r\n<p><b>2. </b>A ceu bik nitlang le a muibik zantim, Hring dildel tlim-no le thal vulvau par caan, Zei caan paoh ah Jesuh\r\n    fialmi cu zul tuah, Lam thluangthluan Jesuh zul tuah.</p>\r\n<p><b>CHO: </b>Zul tuah, Jesuh kha kan zulh lai, Zul tuah, Nifate zul tuah, Hmai ah a kan hruainak kip ah, Lam\r\n    thluangthluan Jesuh cu kan zul lai.</p>\r\n<p><b>3. </b>Aa dawh bik nitlang le a muimi thladem, Thlichia to-tho hrang in hnabei dongh tikah, nitlak khuamuih\r\n    zongah A-mah i bochan, Lam thluangthluan Jesuh zul tuah.</p>\r\n<p><b>CHO: </b>Zul tuah, Jesuh kha kan zulh lai, Zul tuah, Nifate zul tuah, Hmai ah a kan hruainak kip ah, Lam\r\n    thluangthluan Jesuh cu kan zul lai.</p>",
        "id": "188",
        "name": "NITLANNAK AH KAN KAL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIH CAAH ZUMHTLAK SINAK</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Ralchan nitlak nelrawn in hmelchunhnak a lang, \"Khrih ca-ah zumhtlak si u,\" ti langhnak a si; Cu hla dawh\r\n    cu aa hrawl, Fing le tlang kip hrawngin, \"Khrih ca-ah zumhtlak si u,\" tinak hla dawh a si.</p>\r\n<p><b>CHO: </b>Nan tei hlan tiang, nan tei hlan tiang in, Kan Ralbawi ngan bik cu a au, A bia bang kan tuan lai. Ram cu\r\n    kan lak cang lai, Bawi Khrih ca-ah zumhtlak si nak in kan tei cang lai.</p>\r\n<p><b>2. </b>Vawlei pumpi cul in an authawng cu ngai u, \"Khrih ca-ah zumhtlak si u,\" ti langhnak a si; Tho law ral tha\r\n    in tuan, Ralvengtu nih a ti, \"Khrih ca ah zumhtlak si u,\" ti nak hla dawh a si.</p>\r\n<p><b>CHO: </b>Nan tei hlan tiang, nan tei hlan tiang in, Kan Ralbawi ngan bik cu a au, A bia bang kan tuan lai. Ram cu\r\n    kan lak cang lai, Bawi Khrih ca-ah zumhtlak si nak in kan tei cang lai.</p>\r\n<p><b>3. </b>Zumhtlakmi vialte he sualnak cu kan tei lai, \"Khrih ca ah zumhtlak si u,\" ti langhnak a si; Satan ral hrat\r\n    hmanhseh, Hla thiang kan sak hnawh lai,</p>\r\n<p><b>CHO: </b>Nan tei hlan tiang, nan tei hlan tiang in, Kan Ralbawi ngan bik cu a au, A bia bang kan tuan lai. Ram cu\r\n    kan lak cang lai, Bawi Khrih ca-ah zumhtlak si nak in kan tei cang lai.</p>\r\n<p><b>4. </b>Bawi Jesuh ke hram ah, Seino thazang chuah in, \"Khrih caah zumhtlak sinak\" in rian kan tuan lai; Thawngtha\r\n    kan aupi lai, Vawlei pumpi cul in, \"Bawi Khrih caah zumhtlak sinak\" cu kan dirpi lai.</p>\r\n<p><b>CHO: </b>Nan tei hlan tiang, nan tei hlan tiang in, Kan Ralbawi ngan bik cu a au, A bia bang kan tuan lai. Ram cu\r\n    kan lak cang lai, Bawi Khrih ca-ah zumhtlak si nak in kan tei cang lai.</p>\r\n<p><b>CHO: </b>Nan tei hlan tiang, nan tei hlan tiang in, Kan Ralbawi ngan bik cu a au, A bia bang kan tuan lai. Ram cu\r\n    kan lak cang lai, Bawi Khrih ca-ah zumhtlak si nak in kan tei cang lai.</p>",
        "id": "189",
        "name": "KHRIH CAAH ZUMHTLAK SINAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWI KHRIH AH NICHUAH, NITLAK UM LO</h4> <p>Doh is Eb</p> <p><b>1. </b>Nichuah, nitlak, chaklei, thlanglei, Khrih ah thennak um lo; Dawt hawikomhnak pakhat lawng te, Khuazakip a cul ko.</p> <p><b>2. </b>Bawi Khrih chungah miphun 'kip nih, Lungkhat in kan i pum, Sui hri bang A-mah riantuan nih, Phunkip mi a kan komh.</p> <p><b>3. </b>Cu ca'h lung le thin komh tuah u, Nan phun zeihmanh siseh, Kan Pa riantuanmi vialte cu, U-nau khat kan si dih.</p> <p><b>4. </b>Khrih ah Chak, Thlang an i tong i, Nichuah, Nitlak hna zong. A-mah lungthin ngei vialte hi, Pum khat kan si dih cang.</p>",
        "id": "190",
        "name": "BAWI KHRIH AH NICHUAH, NITLAK UM LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIHFABU PUMHNAK HRAM</h4> <p>Doh is Eb</p> <p><b>1. </b>Kan Khrihfabu a hram kha, Bawipa Jesuh a si, Mah cu ti le a bia in, A ser tharmi a si; A lengnu thiang si awkah, Vancung in a rung kawl, A-mah thi in a cawk i, A nunnak ca'h a thi.</p> <p><b>2. </b>Miphun kip chung thimmi kha, Hrin khat an si dih cang, An khamhnak a hrampi cu, Bawi pakhat zumh a si; Min thiang pakhat an thangthat, Rawl thiang kha an ei ti, Velngeihnak in a cawm hna, Nunhmunh ruahchannak he.</p> <p><b>3. </b>Riantuan hremnak lakah khan, Ral dohnak lak zongah, A zungzal daihnak duh ah, Lungsaunak in an ngan, Sunparnak an hmuh tikah, Thluachuahnak in an khim, Teitu Khrihfabu nih cun, Daihnak bu a cang lai.</p> <p><b>4. </b>Pa, Fa, Thiang Thlarau he, Hi vawlei cungah hin, A kal ciami hna he zong, Hawikomhnak kha a ngei; Mithiang lunglawmmi hna bang, Na sin kan um nakhnga, Bawipa, na that velngeihnak, Kannih zong kan pe tuah.</p>",
        "id": "191",
        "name": "KHRIHFABU PUMHNAK HRAM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">FEK TEIN DIR U SI</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Khrihfa ralkap mi hna, Bawi Jesuh bochan in, Thawngthabia a thiang bik aupi cio u, Raldohnak le\r\n    ngaihchiatnak, Rili bang lian ko hmanhseh, Jesuh thawngin hodah a kan tei hnga.</p>\r\n<p><b>CHO: </b>Fek te-in dir u si, Teinak tiang kal chin lengmang u si, Bawi bik ralkap tha kan si, Bia a kan kam\r\n    bantukin, Teinak sui luchin kan hmuh cio lai.</p>\r\n<p><b>2. </b>Jesuh Khrih bochan in, Rulhreu ral do u si, Nan ngun-nam hler u law, hmaiah kal u, Bawi Jesuh nih, nan\r\n    hmaiah ka dir zungzal lai, a ti, A bia kam bantuk in kan tei theo lai.</p>\r\n<p><b>CHO: </b>Fek te-in dir u si, Teinak tiang kal chin lengmang u si, Bawi bik ralkap tha kan si, Bia a kan kam\r\n    bantukin, Teinak sui luchin kan hmuh cio lai.</p>\r\n<p><b>3. </b>Vawlei ngaihchiatnak le, Sifah kan lonh tikah, Vancung khua ah kan hawidawtmi hna he, Dong lo-in Pathian\r\n    thangthatnak hla kan sa zungzal lai, Ngaihchiat sifah retheih um ti lai lo.</p>\r\n<p><b>CHO: </b>Fek te-in dir u si, Teinak tiang kal chin lengmang u si, Bawi bik ralkap tha kan si, Bia a kan kam\r\n    bantukin, Teinak sui luchin kan hmuh cio lai.</p>",
        "id": "192",
        "name": "FEK TEIN DIR U SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAIBAL THIANG, CAUK THIANG</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Baibal Cathiang, Pathian Bia, A sung bik ro thil kei ca, Ka semnak a ka chimh i, Zei ka si a ka cawnpiak.</p>\r\n<p><b>2. </b>Ka vahvaih tik mawh-chiattu, Khamhtu dawtnak hmuh-saktu, A ka hruaitu le vengtu, Dantat maw laksawng pe\r\n    tu.</p>\r\n<p><b>3. </b>Ramcar chung ngaihchiat sifah, Khuaruah har hnangam tertu, Mi nih thihnak tei khawhnak, Zumhnak nung a\r\n    hmuhsaktu.</p>\r\n<p><b>4. </b>A ra laimi lawmhnak le, Misual dantatnak chimtu; Maw a sung bik Cauk Thiang, A sung bik ro thil kei ca.</p>",
        "id": "193",
        "name": "BAIBAL THIANG, CAUK THIANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAIBAL I TLAIH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Baibal cauk cu thlah lo in i tlaih ko, A sungmi a cawnpiaknak thlau hna hlah, A itmi nunnak kha a tun\r\n    thawh than hna, Thih hnu nunnak kong biakam a fehter.</p>\r\n<p><b>CHO: </b>Baibal kha i tlaih, Baibal kha i tlaih, Kan mei inn le lam hruaitu, Baibal kha.</p>\r\n<p><b>2. </b>Lungvar man sung Baibal kha i tlaih zungzal, Tlu ril a thawh, nun hmunhnak a pek hna, A sunlawinak kong\r\n    kan chim cawk bal lai lo; Caan um lioah a thluachuahnak kawl tuah.</p>\r\n<p><b>CHO: </b>Baibal kha i tlaih, Baibal kha i tlaih, Kan mei inn le lam hruaitu, Baibal kha.</p>\r\n<p><b>3. </b>Kephau caan kipah ceunak mei inn a si, Tlu ril lo-in, seino mi a hruai hna, A lotlaumi nunnak ruahchannak\r\n    a pek; Tar ca thiangthunh Ca uk tha bik a si.</p>\r\n<p><b>CHO: </b>Baibal kha i tlaih, Baibal kha i tlaih, Kan mei inn le lam hruaitu, Baibal kha.</p>",
        "id": "194",
        "name": "BAIBAL I TLAIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAIBAL KHA FEK TEIN I TLAIH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Na khual tlawnnak lam i na kal lengmang lioah, Biatak te-in na ruah awk ka duh mi a um, Maw ka fapa, ngai\r\n    tuah, hi ka chim lio ah, Baibal kha fek te-in i tlaih.</p>\r\n<p><b>CHO: </b>Baibal kha fek te-in i tlaih, Baibal kha fek te-in i tlaih, Na nun ah siseh, na thih zong ah siseh,\r\n    Baibal kha fek te-in i tlaih.</p>\r\n<p><b>2. </b>Vanchiatnak le ngaihchiat mitthli tlaknak siseh, Tukforhnak zong kum saupi na in ah si seh, Khrihfa si i\r\n    zuam tih lo-in fong chin law, Khrihfa si i zuam tih lo-in fong chin law, Baibal kha fek te-in i tlaih.</p>\r\n<p><b>CHO: </b>Baibal kha fek te-in i tlaih, Baibal kha fek te-in i tlaih, Na nun ah siseh, na thih zong ah siseh,\r\n    Baibal kha fek te-in i tlaih.</p>\r\n<p><b>3. </b>Pathian kan Pa kha zum law thawnnak na hmuh lai, Vailam kha i zohchih law na tlau bal lai lo; Na kal pah\r\n    in lawmhnak hla kha i sak tuah, Baibal kha fek te-in i tlaih.</p>\r\n<p><b>CHO: </b>Baibal kha fek te-in i tlaih, Baibal kha fek te-in i tlaih, Na nun ah siseh, na thih zong ah siseh,\r\n    Baibal kha fek te-in i tlaih.</p>\r\n<p><b>4. </b>Baibal cu ruahchannak hram le ceunak a si, Zan ah lam an hruaitu arfi ceu kha a si, A hruainak na zulh\r\n    ahcun na tlau lai lo, Baibal kha fek te-in i tlaih.</p>\r\n<p><b>CHO: </b>Baibal kha fek te-in i tlaih, Baibal kha fek te-in i tlaih, Na nun ah siseh, na thih zong ah siseh,\r\n    Baibal kha fek te-in i tlaih.</p>",
        "id": "195",
        "name": "BAIBAL KHA FEK TEIN I TLAIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUARUAHHAR NUNNAK BIA</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Hla in ka sinah run chim tuah, Khuaruahhar nun nak bia, An i dawhnak ka hmuh ter tuah, Khuaruahhar nunnak\r\n    bia, Nunnak bia dawh bik cu a zumhning ka cawnpiak.</p>\r\n<p><b>CHO: </b>(A dawh bik bia, khuaruahhar bia, Zungzal nunnak bia kha, A dawh bik bia, khuaruahhar bia, Zungzal\r\n    nunnak bia kha)2.</p>\r\n<p><b>2. </b>Jesuh nih mikip a pek hna, Khuaruahhar nunnak bia, Misual, a aw nem ngai tuah u, Khuaruahhar nunnak bia,\r\n    Man lo-in a kan pek vancung a kan tlunter.</p>\r\n<p><b>CHO: </b>(A dawh bik bia, khuaruahhar bia, Zungzal nunnak bia kha, A dawh bik bia, khuaruahhar bia, Zungzal\r\n    nunnak bia kha)2.</p>\r\n<p><b>3. </b>Dawh in a thang lai Thawngthabia, Khuaruahhar nunnak bia, Ngaihthiamnak mikip a pek hna, Khuaruahhar\r\n    nunnak bia, Jesuh a kan Khamhtu kannih kan thianter tuah.</p>\r\n<p><b>CHO: </b>(A dawh bik bia, khuaruahhar bia, Zungzal nunnak bia kha, A dawh bik bia, khuaruahhar bia, Zungzal\r\n    nunnak bia kha)2.</p>",
        "id": "196",
        "name": "KHUARUAHHAR NUNNAK BIA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MI KIP CA BAIBAL THIANG</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Mi vialte nih Baibal ca rel, Kan i tinhmi si cio ko seh, Khuaza kip ah a than hlan tiang, Thli nih kalpi\r\n    lengmang ko seh.</p>\r\n<p><b>CHO: </b>Rili le fing tlang vialte ah, Pathian bia sung rung ceu ko tuah, Zan mui lak ah a vak mi hna, Pathian\r\n    sin ah an phak hlan tiang.</p>\r\n<p><b>2. </b>A phaknak kipah a ceunak, Ni bangin a tlang zungzal ko, Sual riantuannak kha a tei i, Muihnak khuadawm kha\r\n    a tian dih.</p>\r\n<p><b>CHO: </b>Rili le fing tlang vialte ah, Pathian bia sung rung ceu ko tuah, Zan mui lak ah a vak mi hna, Pathian\r\n    sin ah an phak hlan tiang.</p>\r\n<p><b>3. </b>Kan Pa Pathian hmai a langhter, Ngaihthiam dawtnak he a ceu ko, Adam phun tlau ciami sinah, Van hnangamnak\r\n    bia kha a chim.</p>\r\n<p><b>CHO: </b>Rili le fing tlang vialte ah, Pathian bia sung rung ceu ko tuah, Zan mui lak ah a vak mi hna, Pathian\r\n    sin ah an phak hlan tiang.</p>\r\n<p><b>4. </b>Lung retheimi a dinhter hna, Ngaihchiami an hna a ngamter, Lungdermi thazang a thawnter, Zungzal\r\n    ruahchannak a pek hna.</p>\r\n<p><b>CHO: </b>Rili le fing tlang vialte ah, Pathian bia sung rung ceu ko tuah, Zan mui lak ah a vak mi hna, Pathian\r\n    sin ah an phak hlan tiang.</p>",
        "id": "197",
        "name": "MI KIP CA BAIBAL THIANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NI SARIH CHUNG HIM TEIN</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Ni sarih chungah kan Pa, Him te-in a kan zoh rih, Atu Biaknak inn chungah, Thluachuahnak kha hal u si. Ni\r\n    sarih lak tha bik ni, Zungzal daih hmelchunhnak ni. Ni sarih lak tha bik ni, Zungzal daih hmelchunhnak ni.</p>\r\n<p><b>2. </b>Kan Khamhbawi sung bik min in, Nangmah lianhnak kha kan kawl, Na hmai tha kha kan hmuhsak, Kan ningzah\r\n    sualnak kha tawl, Nihin lungdaihnak um seh, Lungdaihnak ni tha a si, Nihin lung daihnak um seh, Lungdaihnak ni tha\r\n    a si.</p>\r\n<p><b>3. </b>Na min thangthat awk kan ra, Naite na um hngalhter tuah, Na inn ah kan um lio ah, Nangmah lianhnak hmuhter\r\n    tuah, Zungzal sithatnak kha, Mah zongah hin tlawm kan pe, Zungzal kan sithatnak kha, Mah zongah hin tlawm kan pe.</p>\r\n<p><b>4. </b>Jesuh Khrih lunglawmhnak bia, Mitha misual nih an ngaih, Velngeihnak kha karhter tuah, Sifahnak vialte\r\n    thianter, Hi bang Nizarh ul u si, Vancung ah kan kai hlan tiang, Hi bang Nizarh ul u si, Vancung ah kan kai hlan\r\n    tiang.</p>",
        "id": "198",
        "name": "NI SARIH CHUNG HIM TEIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MAW DINHNAK LE LAWMHNAK NI</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Maw dinhnak le lawmhnak ni, Thangthat le ceunak ni, Ngaihchiat khuaruahhar damnak, Aa dawh bik, a ceu bik\r\n    Bawipa nih thihnak tei in, Thlarau tum ni a si, \"Thiang bik, thiang bik, thiang bik\" tiah, Na thangthat hla an sa.</p>\r\n<p><b>2. </b>Maw dinhnak le lawmhnak ni, Ceunak hramthawk na si, Khamhtu Jesuh a thawh ni, Kannih lawmh ni na si,\r\n    Bawipa nih thihnak tei in, Thlarau tum ni a si, Mah ni sunglawi ni ah cun, Ceu phun thum a kan pek.</p>\r\n<p><b>3. </b>Thlarau rawltam mi ca-ah, Van manna a surter, A thiangmi pumhnak hmun ah, Muko in a auh hna; Ni bang\r\n    Pathian Thawngthabia, A ceunak hmun kip ah, Nunnak tiva a luang i, Thlarau zong a nunter.</p>\r\n<p><b>4. </b>Dinhnak le lawmhnak nihin, Thluachuahnak thar kan hmun, Zarh thar kan luhmi chungah, Hi lawmhnak a dong\r\n    lo, Dinhnak le lawmhnak ni thar, A hung chuah than tiangin, Pa, Fapa le Thiang Thlarau, Thangthat in um ko seh.</p>",
        "id": "199",
        "name": "MAW DINHNAK LE LAWMHNAK NI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DINHNAK NI BAWIPA</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Dinhnak Ni Bawipa nang na si, Nihin na inn chungah kan kun, Kan biakamnak le hla saknak, Rimthaw bang in\r\n    na sin kai seh.</p>\r\n<p><b>2. </b>Vawlei cung Dinhnak ni hmanh hi, A phak tikah kan i lawm tawn, Nangmah dawtmi hna ca ah cun, Dinh Ni\r\n    lianngan, na ruah van ah.</p>\r\n<p><b>3. </b>Cu hmun ah retheih a um lo, Sualnak le Hell a um ti lo, Dong lo thangthat hlasak nak cu, Ai-hramnak nih a\r\n    phan ti lo.</p>\r\n<p><b>4. </b>Cu dinhnak tling, dinhnak nuam bik, Tihphan thla-launak a um lo; Zan mui le minmei a um lo; A sunglawi\r\n    ceunak lawng a si.</p>\r\n<p><b>5. </b>Kan awrh bikmi maw dinhnak ni, Hi sualnak le harnak ram ah; Chan thar in run thawk ko cang law, Kan thih\r\n    zongah Bawipa min in.</p>",
        "id": "200",
        "name": "DINHNAK NI BAWIPA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA ZUMH!</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Maw ka nunnak, an Khamhtu Bawipa nih, Luatnak tling an pek cang, Bawipa a tu Ka lungthin i thlek ning,\r\n    Nang ca lawng ka si lai.</p>\r\n<p><b>CHO: </b>Ka zumh (Ka zumh) Ka zumh (Ka zumh) Ka zumh, nang ta lawng ka si lai, Bawipa ka bawm Kei tlanhnak ah na\r\n    thisung na thlet cang, Nang ca lawng ka si lai.</p>\r\n<p><b>2. </b>a vel thawng in na zaangfahnak ka hmuh, Na dawtnak kei nunnak, Maw Khrih nangmah lawng kan zumh zungzal\r\n    lai. Nangmah lawng kan zumh lai.</p>\r\n<p><b>CHO: </b>Ka zumh (Ka zumh) Ka zumh (Ka zumh) Ka zumh, nang ta lawng ka si lai, Bawipa ka bawm Kei tlanhnak ah na\r\n    thisung na thlet cang, Nang ca lawng ka si lai.</p>\r\n<p><b>3. </b>Ka ralchiatnak Bawipa nang nih na hngalh, Lam tlau lai ka phang ko, Thazang thar hmuh awkah nang kan\r\n    bochan, Nangmah lawng kan bochan.</p>\r\n<p><b>CHO: </b>Ka zumh (Ka zumh) Ka zumh (Ka zumh) Ka zumh, nang ta lawng ka si lai, Bawipa ka bawm Kei tlanhnak ah na\r\n    thisung na thlet cang, Nang ca lawng ka si lai.</p>\r\n<p><b>4. </b>Na velngeihnak Bawipa atu kan pe, Zaihla in kan sak lai; Lunglawm te-in hi bang kan chim cio lai, \"Khrih\r\n    ta lawng kan si lai.\"</p>\r\n<p><b>CHO: </b>Ka zumh (Ka zumh) Ka zumh (Ka zumh) Ka zumh, nang ta lawng ka si lai, Bawipa ka bawm Kei tlanhnak ah na\r\n    thisung na thlet cang, Nang ca lawng ka si lai.</p>",
        "id": "201",
        "name": "KA ZUMH!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MAW LAWMHNAK NI</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Maw lawmhnak ni, Bawi Jesuh kha, Keimah ka biak ka zumhnak ni, A-tu keimah lung aa lawm ca, Mi sinah ka\r\n    chim lai a si.</p>\r\n<p><b>CHO: </b>Lawmhnak ni, lawmhnak ni, Jesuh ka sual a tawlnak ni; Thlacamnak kha a ka cawnpiak, Ni-fa-te in a ka\r\n    lawmhter, Lawmhnak ni, Lawmhnak ni, Jesuh ka sual a tawlnak ni.</p>\r\n<p><b>2. </b>A dih cang rian-pi a dih cang, Keimah cu Jesuh mi ka si, Jesuh authawng ka theih ka hung, A ka auh ca,\r\n    lawmhnak tampi.</p>\r\n<p><b>CHO: </b>Lawmhnak ni, lawmhnak ni, Jesuh ka sual a tawlnak ni; Thlacamnak kha a ka cawnpiak, Ni-fa-te in a ka\r\n    lawmhter, Lawmhnak ni, Lawmhnak ni, Jesuh ka sual a tawlnak ni.</p>\r\n<p><b>3. </b>Hnangam lo-in saupi ka um, Ka ra ko lai, hi umnak ah, Bawipa sinin i then hin hlah, A liannganbik Bawipa a\r\n    si.</p>\r\n<p><b>CHO: </b>Lawmhnak ni, lawmhnak ni, Jesuh ka sual a tawlnak ni; Thlacamnak kha a ka cawnpiak, Ni-fa-te in a ka\r\n    lawmhter, Lawmhnak ni, Lawmhnak ni, Jesuh ka sual a tawlnak ni.</p>\r\n<p><b>4. </b>Ka biakarnak Pathian theih cang, Nifate in ka kar than lai, A hnu bik ka thih caan tiangin, A ka dawt ca\r\n    kaa lawm te lai.</p>\r\n<p><b>CHO: </b>Lawmhnak ni, lawmhnak ni, Jesuh ka sual a tawlnak ni; Thlacamnak kha a ka cawnpiak, Ni-fa-te in a ka\r\n    lawmhter, Lawmhnak ni, Lawmhnak ni, Jesuh ka sual a tawlnak ni.</p>",
        "id": "202",
        "name": "MAW LAWMHNAK NI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NI FATIN A THLUM CHIN KO</h4> <p>Doh is Bb</p> <p><b>1. </b>Jesuh cu nifa tein ka lungthin in ka naih chin, Zinglei niceu dawhnak in ka Bawipa cu a dawh deuh, Ka lungthin mitthlam ah Amah cu a dawh chin ca-ah, Ni khat hnu nikhat in ka ca-ah a thlum chin lengmang.</p> <p><b>CHO: </b>Hi sui (Hi sui khuapi dawhnak cu) Khuapi dawhnak cu, (a cheu hmanh kan hngal lo) A cheu (Hi sui khuapi dawhnak cu) hmanh kan hngal lo, (Acheu hmanh kan hngal lo hngal lo) Khi ka'h (Khika'h Bawipa a dawhning) Bawipa a dawh ning cu, (cu fiang te-in ka hmuh te lai) Fiang te-in kan hmuh lai (Fiang tein kan hmuh lai)</p> <p><b>2. </b>Lam hlatpi hmanh in a sunparnak nih ka mit a hlan, Cuailo par ian lo, deirel ian lo ka Bawipa a si, A van ka ngaihnak lungthin cu diriam te-in a hnemh, Nikhat hnu nikhat in ka ca-ah a thlum chin lengmang.</p> <p><b>CHO: </b>Hi sui (Hi sui khuapi dawhnak cu) Khuapi dawhnak cu, (a cheu hmanh kan hngal lo) A cheu (Hi sui khuapi dawhnak cu) hmanh kan hngal lo, (Acheu hmanh kan hngal lo hngal lo) Khi ka'h (Khika'h Bawipa a dawhning) Bawipa a dawh ning cu, (cu fiang te-in ka hmuh te lai) Fiang te-in kan hmuh lai (Fiang tein kan hmuh lai)</p> <p><b>3. </b>Ka lung re a theih lio ah hnangamnak a ka pek tawn, Ka ngaihchiat lungkuai lio-ah a tang chungah a ka pom, Ka sualnak thilrit a ka chawngtu Jesuh cu ka dawt, Nikhat hnu nikhat in ka ca-ah a thlum chin lengmang.</p> <p><b>CHO: </b>Hi sui (Hi sui khuapi dawhnak cu) Khuapi dawhnak cu, (a cheu hmanh kan hngal lo) A cheu (Hi sui khuapi dawhnak cu) hmanh kan hngal lo, (Acheu hmanh kan hngal lo hngal lo) Khi ka'h (Khika'h Bawipa a dawhning) Bawipa a dawh ning cu, (cu fiang te-in ka hmuh te lai) Fiang te-in kan hmuh lai (Fiang tein kan hmuh lai)</p>",
        "id": "203",
        "name": "NI FATIN A THLUM CHIN KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A AW KA HNGALH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ka Khamhtu ka hmu lo na-in, Nifa ka sin-ah bia a chim, Ka Bawi ah ka thim cang ca-ah, Bawipa thangthat a\r\n    aw ka hngalh.</p>\r\n<p><b>CHO: </b>A aw ka hngalh Ka Khamhtu aw, Lunglawmh thanuamh nak a ka pek, Bia a ka ruah tik-ah ka lawm, Bawipa\r\n    thangthat, A aw ka hngalh.</p>\r\n<p><b>2. </b>A muisam ka hmu lo na-in, Thlichia lak-ah a aw ka theih, Tilet cu dai u, a ti hna, Ni a tlang i zeizong an\r\n    dai.</p>\r\n<p><b>CHO: </b>A aw ka hngalh Ka Khamhtu aw, Lunglawmh thanuamh nak a ka pek, Bia a ka ruah tik-ah ka lawm, Bawipa\r\n    thangthat, A aw ka hngalh.</p>\r\n<p><b>3. </b>Bia-tak le bia ding a ka chimn, Mit hmuh lo lawmhnak le dinhnak, Hna-ngam dawtnak kong a ka chimh, Vancung\r\n    inn dawh kong a ka chimh.</p>\r\n<p><b>CHO: </b>A aw ka hngalh Ka Khamhtu aw, Lunglawmh thanuamh nak a ka pek, Bia a ka ruah tik-ah ka lawm, Bawipa\r\n    thangthat, A aw ka hngalh.</p>",
        "id": "204",
        "name": "A AW KA HNGALH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NUNNAK RAWL KA PE TUAH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Nunnak rawl ka pe tuah, Maw ka Bawipa Rili pawngah rawl na pek hna bang khan, Ka thlarau nih an duh maw\r\n    nunnak bia Nang mah lawng zungzal nunnak rawl na si.</p>\r\n<p><b>2. </b>Kei sinah na biatak, Ka phaw ve tuah, Ga-li-lee ah changreu na phawt bang khan; Temnak khihnak vialte a\r\n    cat dih lai; Nangmah chungah hnangamnak ka hmuh lai.</p>\r\n<p><b>3. </b>Nunnak changreu na si, Keimah ca-ah, Na bia thiang cu ka khamhnak lam a si, Nangmah he zungzal ka um khawh\r\n    nakhnga, Na dawtnak biatak cu ka cawnpiak tuah.</p>\r\n<p><b>4. </b>Maw Bawipa, Thiang Thlarau ka pe ko sawh, Ka hmuh khawh nakhnga ka mit kha tawng seh, Na Baibal chung Bia\r\n    Thiang ka hmusak tuah, Hi cauk chungin Bawipa nang kan hmuh.</p>",
        "id": "205",
        "name": "NUNNAK RAWL KA PE TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH THI LAWNG IN</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Ka sualnak zei in thiang lai, Jesuh thi lawngin a thiang ko. Zeidah a ka damter lai? Jesuh thi lawngin ka\r\n    dam lai.</p>\r\n<p><b>CHO: </b>Maw thletmi sung bik thi, Hawhra bang rantertu, Cerhti dang ka tong lo, Jesuh thi lawngin a thiang ko.</p>\r\n<p><b>2. </b>Keimah thianter awk ca-ah, Jesuh thi lawngin a thiang ko. Keimah sual ngaihthiam awkah, Jesuh thi lawngin\r\n    a thiang ko.</p>\r\n<p><b>CHO: </b>Maw thletmi sung bik thi, Hawhra bang rantertu, Cerhti dang ka tong lo, Jesuh thi lawngin a thiang ko.</p>\r\n<p><b>3. </b>Keimah sual ca ingtu ah, Jesuh thi lawngin a thiang ko. Atu tiang zei kaa hlei lo, Jesuh thi lawngin a\r\n    thiang ko.</p>\r\n<p><b>CHO: </b>Maw thletmi sung bik thi, Hawhra bang rantertu, Cerhti dang ka tong lo, Jesuh thi lawngin a thiang ko.</p>\r\n<p><b>4. </b>Ka ruahchan lungnemnak ca, Jesuh thi lawngin a thiang ko; Keimah miding sinak ah, Jesuh thi lawngin a\r\n    thiang ko.</p>\r\n<p><b>CHO: </b>Maw thletmi sung bik thi, Hawhra bang rantertu, Cerhti dang ka tong lo, Jesuh thi lawngin a thiang ko.</p>",
        "id": "206",
        "name": "JESUH THI LAWNG IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NANG CA KEIMAH KA THI</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Nang ca keimah ka thi, Ka thi nang ca ka thlet, Nangmah kha kan tlanh i, Nun thannak kha kan pek; (Nangmah\r\n    caah ka lu ka hloh, Kei ca zeidah na hloh?)2</p>\r\n<p><b>2. </b>Ka Pa umnak inn tha, Vancung a ceu umnak, Vawlei ka um lio-ah, A zapi ka chiahtak; (A dihlak in ka\r\n    chiahtak cang, Zeidah nang na chiahtak?)2</p>\r\n<p><b>3. </b>Nang ca a tam ka huah, Holh chim khawh lo tiangin, Hell in nang khamh awkah, Fak bikmi kha ka in; (Nangmah\r\n    caah a tam ka huah, Zeidah kei ca na in?)2</p>\r\n<p><b>4. </b>Vancung ka umnak in, Khamhnak dawtnak kan put, Tlanhnak a man loin, Ka dawt sual-thlahnak he, (Nangmah ca\r\n    laksawng tha ka put, Keica zeidah na put?)2.</p>",
        "id": "207",
        "name": "NANG CA KEIMAH KA THI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KEIMAH PHILHLONAK AH</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Kan in biak maw Bawipa, Khuaruahhar na vel ca, Nihin tiangin na kan huhphenh ko, Na thatnak kha kan lawmh,\r\n    dong lo na dawtnak, Nangmah hmaiah kun in, Hmaizahnak kan in pek.</p>\r\n<p><b>CHO: </b>Nangmah na nawlbia sung bangin, Nihin ah hin, Na cabuai ah nang he kan i chawn, \"Mah hi nan tuah lai,\r\n    Keimah philhlonak ah\" Na rak timi kha kan ruat than.</p>\r\n<p><b>2. </b>Na nunnak changreu kha, Ei awkah kan tlak lo, A til-tlawt khawmh awk zong kan tlak lo, Siseh nangmah\r\n    thatnak, thawngin kan ra i, Na velngeihnak thawng in, Kannih kan i tel ve.</p>\r\n<p><b>CHO: </b>Nangmah na nawlbia sung bangin, Nihin ah hin, Na cabuai ah nang he kan i chawn, \"Mah hi nan tuah lai,\r\n    Keimah philhlonak ah\" Na rak timi kha kan ruat than.</p>\r\n<p><b>3. </b>Kannih nih thazang thar, Ruahnak thar la u si, Zumhnak in kan hmuhmi thil thawng hin, Bawipa a rat than\r\n    tiang, amah thihnak kha, Vancung khua kan phak tiangin, Langhter cio u si.</p>\r\n<p><b>CHO: </b>Nangmah na nawlbia sung bangin, Nihin ah hin, Na cabuai ah nang he kan i chawn, \"Mah hi nan tuah lai,\r\n    Keimah philhlonak ah\" Na rak timi kha kan ruat than.</p>",
        "id": "208",
        "name": "KEIMAH PHILHLONAK AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN SUAL NAKIN NGAN DEUHMI VEL</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Kan dawt Bawi i khuaruahhar vel cu, Kan sual palhnak nakin a ngan deuh, Kal-va-ry tlang ah khin a chuak\r\n    cang, Khika ah tuufa thi cu a luang.</p>\r\n<p><b>CHO: </b>Pathian (Pathian dawtnak) dawtnak (Pathian dawtnak) ngaihthiam le thianter khotu dawtnak, Pathian\r\n    (Pathian dawtnak) dawtnak (Pathian dawtnak) Sualnak vialte a teitu dawtnak.</p>\r\n<p><b>2. </b>Sualnak le hnabei donghnak nih cun, Tilet bangin kan khuh deng hmanhseh, Khi nakin a ngan deuhmi vel nih,\r\n    Himnak vailam ah cun a kan hruai.</p>\r\n<p><b>CHO: </b>Pathian (Pathian dawtnak) dawtnak (Pathian dawtnak) ngaihthiam le thianter khotu dawtnak, Pathian\r\n    (Pathian dawtnak) dawtnak (Pathian dawtnak) Sualnak vialte a teitu dawtnak.</p>\r\n<p><b>3. </b>Sualnak hma-neh cu kan thup kho lo, Zei nih dah a thianh a tlengh khawh lai? Zoh tuah, khika ah thisen a\r\n    luang, Hawhra nakin na rang deuh cang lai.</p>\r\n<p><b>CHO: </b>Pathian (Pathian dawtnak) dawtnak (Pathian dawtnak) ngaihthiam le thianter khotu dawtnak, Pathian\r\n    (Pathian dawtnak) dawtnak (Pathian dawtnak) Sualnak vialte a teitu dawtnak.</p>\r\n<p><b>4. </b>Khuaruahhar dong lo sung bik vel cu, A zummi nih man loin an hmuh; Nannih Amah hmai hmuh a duhmi, Atu a\r\n    vel kha i lak tuah u.</p>\r\n<p><b>CHO: </b>Pathian (Pathian dawtnak) dawtnak (Pathian dawtnak) ngaihthiam le thianter khotu dawtnak, Pathian\r\n    (Pathian dawtnak) dawtnak (Pathian dawtnak) Sualnak vialte a teitu dawtnak.</p>",
        "id": "209",
        "name": "KAN SUAL NAKIN NGAN DEUHMI VEL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH KE HRAMAH THUT IN</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Bawi Jesuh ke hram ah thut in, A bia tha tha ka theih hna, Lunglawmhnak hmun thiang bik a si, Nifatin um\r\n    ka duh ko, Bawi Jesuh ke hram ah thut in, Liam cia caan ka vun ruat hna, A dawtnak a sung tuk hringhran, Ka\r\n    lungthin dihlak ka pek.</p>\r\n<p><b>2. </b>Bawi Jesuh ke hram ah thut in, Thluachuahnak ngan bik ka hmuh, Sualnak le ngaihchiatnak ka thumh, Dinhnak\r\n    nuam ah a ka hruai, Bawi Jesuh ke hram ah thut in, Mitthli tla in thla ka cam, A dawtnak tling in a ka hramh,\r\n    Nifatin a ka hnemh tawn.</p>\r\n<p><b>3. </b>Misung Khamhtu thluachuah ka pe, Na ke-hram ka thut lio ah, Dawtnak lungthin in run ka zoh, Na mithmai ceu\r\n    cu hmu ning, Jesuh lungput ka pe, Bawipa, Amah bang ka thianter ve, Jesuh sinah ka umter ko, Ka dinnak Bawipa a si.</p>",
        "id": "210",
        "name": "JESUH KE HRAMAH THUT IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLICHIA A HRANGMI IN</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Totho thlichia hrangmi chung le, Ngaihchiat tilet a thomi in, Daihnak le dornak hmun a um, Velngeihnak\r\n    thutdan toi ah khan.</p>\r\n<p><b>2. </b>Jesuh nih a thisen sungin, Kannih vialte a kan tlanh cang, Thisen cawkmi velngeih thutdan, Kan ca\r\n    hnangamnak hmun a si.</p>\r\n<p><b>3. </b>Thlarau lung khat tlonlen tinak, Hawikom rualremnak hmun a um, Dang tlei hmanh zumh in an leng ti,\r\n    Velngeihnak thutdan velchum ah.</p>\r\n<p><b>4. </b>Va bangin van ah kan zuang lai, Sual hnahnawh ti lo hmun ah khin; Pathian sunpar lianhngannak nih,\r\n    Velngeih thutdan a khuh tikah.</p>",
        "id": "211",
        "name": "THLICHIA A HRANGMI IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">FACANG PHAL PUT IN</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Zingka caan ah phun tuah, Dawtnak thlaici kha vorh, Chun caan an phun bangin, Zan caan zongah phun,\r\n    Khawmhnak caan zong awt tuah, Hlehnak caan zong hngak tuah, Facang phal kha put in lawm in kan ra lai.</p>\r\n<p><b>CHO: </b>Facang phal put in, Facang phal put in, Facang phal kha put in lawm in kan ra lai, Facang phal put in,\r\n    Facang phal put in, Facang phal kha put in lawm in kan ra lai.</p>\r\n<p><b>2. </b>Ni ceunak ah phun tuah, Thladem zongah phun tuah, Khuasik caan le minmei phan awk an si lo, Khawmh caan a\r\n    phak tik-ah, Rian zong a dih cang lai, Facang phal kha put in lawm in kan ra lai.</p>\r\n<p><b>CHO: </b>Facang phal put in, Facang phal put in, Facang phal kha put in lawm in kan ra lai, Facang phal put in,\r\n    Facang phal put in, Facang phal kha put in lawm in kan ra lai.</p>\r\n<p><b>3. </b>Tah pah in va kal tuah, Bawipa ca-ah phun tuah, Rawhnak nih kannih kan ngaihchiatter hmanhseh, Tahnak a\r\n    dih tik-ah, Jesuh a kan lawmh lai, Facang phal kha put in lawm in kan ra lai.</p>\r\n<p><b>CHO: </b>Facang phal put in, Facang phal put in, Facang phal kha put in lawm in kan ra lai, Facang phal put in,\r\n    Facang phal put in, Facang phal kha put in lawm in kan ra lai.</p>",
        "id": "212",
        "name": "FACANG PHAL PUT IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RATPI HNA</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ngai tuah ramlak khuamui chungah, Tuukhal pa au kha na theih lai, Tuu run chungin a tlaumi tuu, A kawh\r\n    lengmang nak hna aw cu.</p>\r\n<p><b>CHO: </b>Ratpi hna, Ratpi hna! Sual nak hmun khan hun chuahpi hna! A tlaumi tuu vialte! Jesuh sinah cun ratpi\r\n    hna.</p>\r\n<p><b>2. </b>A tlaumi tuu kha kawl awkah, Tuukhal pa hodah a bawm lai? Khuasih lonak tuu kawm chungah, Ho dah tuu a\r\n    luhter hna lai?</p>\r\n<p><b>CHO: </b>Ratpi hna, Ratpi hna! Sual nak hmun khan hun chuahpi hna! A tlaumi tuu vialte! Jesuh sinah cun ratpi\r\n    hna.</p>\r\n<p><b>3. </b>Ramlak le tlangcung zongah khan, Annih tahnak aw kha ngai tuah, Bawipa nih nan sin-ah a chim, \"Ka tuu kha\r\n    na kawllai\" a ti.</p>\r\n<p><b>CHO: </b>Ratpi hna, Ratpi hna! Sual nak hmun khan hun chuahpi hna! A tlaumi tuu vialte! Jesuh sinah cun ratpi\r\n    hna.</p>",
        "id": "213",
        "name": "RATPI HNA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH TUM THAN TIANG KAN TUAN LAI</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Sifahnak in ruahchan ram tha, Zeitikdah ka phak lai? Zeitikah ralthuam ka chiah lai, Hnangamnak ka hmuh\r\n    lai?</p>\r\n<p><b>CHO: </b>Jesuh (Jesuh) tum than tiangin, Hngak ko, (hngak ko) a tum hlan tiang, Riantuan (riantuan) a dih tikah,\r\n    Inn tha chung kan um lai.</p>\r\n<p><b>2. </b>Vawlei cung hnangamnak um lo, Zeihmanh a tling kho lo, Vawlei cung sau nuamhnak um lo, Sifah nak ram a si.</p>\r\n<p><b>CHO: </b>Jesuh (Jesuh) tum than tiangin, Hngak ko, (hngak ko) a tum hlan tiang, Riantuan (riantuan) a dih tikah,\r\n    Inn tha chung kan um lai.</p>\r\n<p><b>3. </b>Hnangam le sunpar hmuh awkah, Lam dang va pial ti hlah, Vancung khua tha kan phak hlan tiang, A kan hruai\r\n    zungzal lai.</p>\r\n<p><b>CHO: </b>Jesuh (Jesuh) tum than tiangin, Hngak ko, (hngak ko) a tum hlan tiang, Riantuan (riantuan) a dih tikah,\r\n    Inn tha chung kan um lai.</p>\r\n<p><b>4. </b>A ka khamhtu Bawi Kan Hmuh Cang, Lam dang kan zul lai lo; Kan thih tikah amah thawngin,Vancung khua kan\r\n    phan lai.</p>\r\n<p><b>CHO: </b>Jesuh (Jesuh) tum than tiangin, Hngak ko, (hngak ko) a tum hlan tiang, Riantuan (riantuan) a dih tikah,\r\n    Inn tha chung kan um lai.</p>",
        "id": "214",
        "name": "JESUH TUM THAN TIANG KAN TUAN LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA AUHNAK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Bawipa nih a facang lo chungah, Riantuan awk a kan auh, Facang zuntu kha an tlawm ca-ah, An caan kha a\r\n    luan cang.</p>\r\n<p><b>CHO: </b>Lunglawm in Bawipa thawngin chuak tuah, Dawtnak velngeihnak he, Khamhnak laksawng thenh awk tha bik kha,\r\n    Mi vialte hngalhter hna.</p>\r\n<p><b>2. </b>Sifakmi hna kha lawmhnak chungah, Zaangfah rawldanghnak ah, Bawipa nunnak zungzal co awkah, Annih cu run\r\n    hruai hna.</p>\r\n<p><b>CHO: </b>Lunglawm in Bawipa thawngin chuak tuah, Dawtnak velngeihnak he, Khamhnak laksawng thenh awk tha bik kha,\r\n    Mi vialte hngalhter hna.</p>\r\n<p><b>3. </b>Atu thawk in tuan hramthawk cang tuah, A ceu a dih zau lai, A donghnak caan kha a tlun tikah, Kan tuan kho\r\n    ti lai lo.</p>\r\n<p><b>CHO: </b>Lunglawm in Bawipa thawngin chuak tuah, Dawtnak velngeihnak he, Khamhnak laksawng thenh awk tha bik kha,\r\n    Mi vialte hngalhter hna.</p>",
        "id": "215",
        "name": "BAWIPA AUHNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A ZUNTU KHUAZEI AH DAH AN UM?</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Sualnak lo lakah a thami facang, A zuntu, mi khuazei ah dah an um, Kan zun tikah hlehnak bia ngai kan\r\n    hman, Buk rawn hlan tiang dinh lo te-in tuan u,</p>\r\n<p><b>CHO: </b>Facang buk chungah rawn bawmh awkah, A zun hngami hna khuazei ah dah an um? Sualnak lo lak i a thami\r\n    rawl, Lak awkah ahodah a kan bawm lai?</p>\r\n<p><b>2. </b>Lam vialte karlak ah kawltuah u si, Belh tam nain facang zong a um rih, Lamcung zongah tha te-in kawl u\r\n    law, Vancung chiah awk ka kip ah i zuam tuah,</p>\r\n<p><b>CHO: </b>Facang buk chungah rawn bawmh awkah, A zun hngami hna khuazei ah dah an um? Sualnak lo lak i a thami\r\n    rawl, Lak awkah ahodah a kan bawm lai?</p>\r\n<p><b>3. </b>Lo rawl kha a zat ling te a si ko, Rawl fim caan kha leicung mi nih an ngan, Tuan awk a tam na-in zuntu an\r\n    tlawm, A caan a luan ahcun a tlol dih lai.</p>\r\n<p><b>CHO: </b>Facang buk chungah rawn bawmh awkah, A zun hngami hna khuazei ah dah an um? Sualnak lo lak i a thami\r\n    rawl, Lak awkah ahodah a kan bawm lai?</p>\r\n<p><b>4. </b>Mi vialte hna hlehnak kha i put u, A sungmi thlaici kha buk ah rawn u; Lo uk a tum hlan tha tein tuan u,\r\n    Rawltuan a dih tikah nan i lawm lai.</p>\r\n<p><b>CHO: </b>Facang buk chungah rawn bawmh awkah, A zun hngami hna khuazei ah dah an um? Sualnak lo lak i a thami\r\n    rawl, Lak awkah ahodah a kan bawm lai?</p>",
        "id": "216",
        "name": "A ZUNTU KHUAZEI AH DAH AN UM?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUNGZAL RIANTUAN KO</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Lo chungah rian tuan awk tampi a um, Facang a za i a hleptu an tlawm, Bawipa aw nih rian tuantu vialte\r\n    kha, Ka bia kha ngai u, a ti hna.</p>\r\n<p><b>CHO: </b>Tuan ko u, tuan ko u, Lunglawmhnak in nan ruah lai, Bawipa nih, \"Thanuamnak kha an pek hna lai, Nitlak\r\n    hlan tiangin tuan ko u.</p>\r\n<p><b>2. </b>Rawl chiahnak buk ah facang khahter u, Lunglawmhnak he zuamnak in hla sa u, Nitlak khua muih hlan tiangin\r\n    tuan ko u, Biatak in riantuan zungzal u.</p>\r\n<p><b>CHO: </b>Tuan ko u, tuan ko u, Lunglawmhnak in nan ruah lai, Bawipa nih, \"Thanuamnak kha an pek hna lai, Nitlak\r\n    hlan tiangin tuan ko u.</p>\r\n<p><b>3. </b>Riantuan a har i ni sau hmanhsehlaw, A tuanmi nih lung lawmhnak an hmuh lai, Bawipa nih a thim ciami\r\n    vialte cu, Lunglawmhnak bik a kan pek lai.</p>\r\n<p><b>CHO: </b>Tuan ko u, tuan ko u, Lunglawmhnak in nan ruah lai, Bawipa nih, \"Thanuamnak kha an pek hna lai, Nitlak\r\n    hlan tiangin tuan ko u.</p>\r\n<p><b>4. </b>Vancung khua chungah lunglawmhnak a um, A har riantuanmi vial nih an hmuh lai, Bawipa nih dawtnak bia a\r\n    chim tikah, An-nih riantuan a dih cang lai.</p>\r\n<p><b>CHO: </b>Tuan ko u, tuan ko u, Lunglawmhnak in nan ruah lai, Bawipa nih, \"Thanuamnak kha an pek hna lai, Nitlak\r\n    hlan tiangin tuan ko u.</p>",
        "id": "217",
        "name": "ZUNGZAL RIANTUAN KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THANGTHATNAK A UM HNGA MAW?</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Vancung a tha a ceu khua khi ka ruat ni-hin, Ni tlak tik ka tlunnak ding khua khi, Khamhtu dawtnak\r\n    thawngin khi ram ka phak tikah, Sunparnak kei ca a um hnga maw?</p>\r\n<p><b>CHO: </b>Thangthatnak kei ca a um hnga maw? Vawlei cung ka nunnak ni a liam tikah cun, (tikah cun) Zungzal kaa\r\n    dinhnak inn tha ka phak khawh tikah, Thangthatnak kei ca a um hnga maw? (um hnga maw)</p>\r\n<p><b>2. </b>Ka tuan khawh tiang Bawipa hngatchan in ka tuan lai, Thlarau tlaitu ah run ka ser tuah, A-mah sunparnak\r\n    hmaiah khin ka dir tikah, Thangthat kha kei ca a si nakhnga.</p>\r\n<p><b>CHO: </b>Thangthatnak kei ca a um hnga maw? Vawlei cung ka nunnak ni a liam tikah cun, (tikah cun) Zungzal kaa\r\n    dinhnak inn tha ka phak khawh tikah, Thangthatnak kei ca a um hnga maw? (um hnga maw)</p>\r\n<p><b>3. </b>Bawipa ka hmuh tikah ka lunglawmhnak vialte, Zeitluk in dah ka chim khawh te hnga, Aa dawh le a ceu sui\r\n    khua tha ka phak tikah, Thangthat le sunpar kei ca si cang.</p>\r\n<p><b>CHO: </b>Thangthatnak kei ca a um hnga maw? Vawlei cung ka nunnak ni a liam tikah cun, (tikah cun) Zungzal kaa\r\n    dinhnak inn tha ka phak khawh tikah, Thangthatnak kei ca a um hnga maw? (um hnga maw)</p>",
        "id": "218",
        "name": "THANGTHATNAK A UM HNGA MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZEICADAH NA HNGAH, KA NAU?</h4> <p>Doh is A</p> <p><b>1. </b>Zeica'hdah na hngah, ka nau, Zeica'hdah na rauh ka hawi dawt, Nangmah kha kan Khamhbawi an hngah ko, A mi he umnak pek an duh.</p> <p><b>CHO: </b>Zeica'h Zeica'h, a tu na rat bal lo. Zeica'h, Zeica'h a tu na rat bal lo? 2.Zeica'hdah na ngan, ka hawi, Zei thathnem ruahchan dah na ngeih, Lam dang khuazeihmanh ah a um lo, Bawi Jesuh lawng nih an khamh khawh.</p> <p><b>3. </b>Nangmah chungah khan, ka nau, A Thiang Thlarau nih khan an kawh, Zeica'hdah khamhnak kha na duh lo, Sual retheihnak na hlonh khawh lai.</p> <p><b>CHO: </b>Zeica'h Zeica'h, a tu na rat bal lo. Zeica'h, Zeica'h a tu na rat bal lo? 2.Zeica'hdah na ngan, ka hawi, Zei thathnem ruahchan dah na ngeih, Lam dang khuazeihmanh ah a um lo, Bawi Jesuh lawng nih an khamh khawh.</p> <p><b>4. </b>Zeicahdah na ngan, ka nau? Khamhnak caan a lan dengmang cang, Thluachuahnak kha nangmah pek an duh, Na rauh ahcun na thi ko lai.</p> <p><b>CHO: </b>Zeica'h Zeica'h, a tu na rat bal lo. Zeica'h, Zeica'h a tu na rat bal lo? 2.Zeica'hdah na ngan, ka hawi, Zei thathnem ruahchan dah na ngeih, Lam dang khuazeihmanh ah a um lo, Bawi Jesuh lawng nih an khamh khawh.</p>",
        "id": "219",
        "name": "ZEICADAH NA HNGAH, KA NAU?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HODAH A KINGTU A SI?</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Hodah a kingtu a si? Hngak hmanh, khuaruahhar a si, Khual tlawngmi kha Bawipa a si, Amah tluk kan hmu bal\r\n    lo, Ka thlarau lunglawmhnak a si, Inn-ka na hunh lai lo maw?</p>\r\n<p><b>2. </b>Inn-ka kingh in an hngah ko, An hngah, an hngah, i ruat ko, Inn-ka hun awk ah, a har maw? Ram kung le tul\r\n    an hnok ko, Innka hunnak kha an harter, Tul nih a zelh tuk ca-ah.</p>\r\n<p><b>3. </b>A kingh len ko atu tiang, An hngah, an hngah, lianhnak he, A si, Khamhbawi nih an hngah ko, An pemh mi kut\r\n    in a kingh, Hling tah luchin a chinh na-in, A mithmai kha a panh ko.</p>",
        "id": "220",
        "name": "HODAH A KINGTU A SI?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NIHIN KHAMHBAWI AN AUH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Nihin Khamhbawi an auh, Lampalh mi ra; Nangmah thlarau a tlau, Palh in kal hlah.</p>\r\n<p><b>2. </b>Khamhbawi Jesuh a au, Atu ngai tuah; Biaknak inn ah ra tuah, Jesuh sinah.</p>\r\n<p><b>3. </b>Nihin Jesuh au ko, Dornak kawl tuah; Biaceihnak thli a hrang, Thihnak nai ta.</p>\r\n<p><b>4. </b>Thiang Thlarau nih an auh, A bia ngai tuah; Lut tuah ngaihchia loin, Zaang an fah lai.</p>",
        "id": "221",
        "name": "NIHIN KHAMHBAWI AN AUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NEM TEIN AN AUH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Maw a tlau i a bami ra kir tuah, Tuukhal tha nih cun an lem lengmang ko, Khamh awkah an kawl, thianh awkah\r\n    an hngah, Rau lo te-in a sinah ra kir tuah.</p>\r\n<p><b>CHO: </b>Nem tein an auh, Thinfual in an nawl, Tuukhal tha an auh-nak kha ngai tuah, Nem te-in an auh, thinfual\r\n    in an nawl, Dawtnak in, \"Ka sin ra tuah,\" an ti.</p>\r\n<p><b>2. </b>An hngah ko rih zeica-ah na thih lai? Saupi tuu run chungin tlau cang hmanhlaw, A nunnak thi in nangmah\r\n    kha an tlanh, Khuaruahhar dawtnak chim khawh lomi cu.</p>\r\n<p><b>CHO: </b>Nem tein an auh, Thinfual in an nawl, Tuukhal tha an auh-nak kha ngai tuah, Nem te-in an auh, thinfual\r\n    in an nawl, Dawtnak in, \"Ka sin ra tuah,\" an ti.</p>\r\n<p><b>3. </b>A bia kha ngai tuah, a dawtnak ruat tuah, Nangmah sualnak kha thing cungah a in, Ngaihthiamnak tling le\r\n    zungzal nunnak cu, A sermi remnak thawngin an pek cang.</p>\r\n<p><b>CHO: </b>Nem tein an auh, Thinfual in an nawl, Tuukhal tha an auh-nak kha ngai tuah, Nem te-in an auh, thinfual\r\n    in an nawl, Dawtnak in, \"Ka sin ra tuah,\" an ti.</p>\r\n<p><b>4. </b>Lam ding in lut tuah, Lamtak in lut tuah, Jesuh in lut tuah, inn-ka kha a si, Amah nih nem te-in an auh\r\n    lengmang, Ra lut tuah law tlau than ti lo dingin.</p>\r\n<p><b>CHO: </b>Nem tein an auh, Thinfual in an nawl, Tuukhal tha an auh-nak kha ngai tuah, Nem te-in an auh, thinfual\r\n    in an nawl, Dawtnak in, \"Ka sin ra tuah,\" an ti.</p>",
        "id": "222",
        "name": "NEM TEIN AN AUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RA TUAH U!</h4> <p>Doh is D</p> <p><b>1. </b>A hmur ka kha a tha ko, A biakamnak a hmun, A biakam khuaruahharnak, A hmun i a tling cang, A vailamtahnak naih ning, Tihphannak le harnak, Ngaihchiat le tahnak chungin, Ka sin ra tuah, a ti.</p> <p><b>CHO: </b>Ra tuah u ka sin, (Ra tuah u ka sin) Ra tuah u ka sin; (ra tuah u ka sin;) Thil a rit, re-a thei, ra tuah, ka sinah. Ra tuah u, ka sin (Ra tuah u ka sin), ra tuah u, ka sin, (ra tuah u ka sin;) Thil a rit, re a thei, ra tuah, ka sinah.</p> <p><b>2. </b>Maw leicung mi vialte hna, Bawipa kaltak hlah u, A dongh tiang a hmunh lai ca'h, Bawipa kha naih tuah u, Kannih khamhnak dang um lo, Sualnak lawng kan ngei ko, Kan rak in zamtak na-in, Na sin um kan duh than,</p> <p><b>CHO: </b>Ra tuah u ka sin, (Ra tuah u ka sin) Ra tuah u ka sin; (ra tuah u ka sin;) Thil a rit, re-a thei, ra tuah, ka sinah. Ra tuah u, ka sin (Ra tuah u ka sin), ra tuah u, ka sin, (ra tuah u ka sin;) Thil a rit, re a thei, ra tuah, ka sinah.</p> <p><b>3. </b>Ka sin ra tuah u, a ti, A tum caan a nai cang. Dai te'n an auhnak ngai tuah, Kan Bawipa sin naih tuah, Fing tlang rili khua kip le, A hlat a naih zongah, Khamhbawi na kut in tlai law, A zungzal in zul tuah.</p> <p><b>CHO: </b>Ra tuah u ka sin, (Ra tuah u ka sin) Ra tuah u ka sin; (ra tuah u ka sin;) Thil a rit, re-a thei, ra tuah, ka sinah. Ra tuah u, ka sin (Ra tuah u ka sin), ra tuah u, ka sin, (ra tuah u ka sin;) Thil a rit, re a thei, ra tuah, ka sinah.</p>",
        "id": "223",
        "name": "RA TUAH U!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHBAWI SINAH RA TUAH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Khamhbawi sinah hung tuah, ra bai-bai, Baibal ca nih lam an hmuhsak lai, Kanmah lakah ni-hin a dir ko,\r\n    Dawtnak in an kawh ko.</p>\r\n<p><b>CHO: </b>Kan sualnak lung kha a thlen tikah, Kan i pum i kan i nuam lai ta, Bawi Jesuh he kan i pumhnak kha,\r\n    Vancung khua chung a si.</p>\r\n<p><b>2. </b>Bawi Jesuh nih ngakchia rat a duh, Mi lung zapi lawm ko seh atu, Nangmah kan thim lai, kan Bawi Jesuh, Rau\r\n    hlah, atu ra tuah.</p>\r\n<p><b>CHO: </b>Kan sualnak lung kha a thlen tikah, Kan i pum i kan i nuam lai ta, Bawi Jesuh he kan i pumhnak kha,\r\n    Vancung khua chung a si.</p>\r\n<p><b>3. </b>Nihin kan sinah Jesuh a um, Pathian nawlbia kha ngai tha te-in, Na thei lo maw a chim dawtnak in, Ka fa,\r\n    na ra lai maw?.</p>\r\n<p><b>CHO: </b>Kan sualnak lung kha a thlen tikah, Kan i pum i kan i nuam lai ta, Bawi Jesuh he kan i pumhnak kha,\r\n    Vancung khua chung a si.</p>",
        "id": "224",
        "name": "KHAMHBAWI SINAH RA TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN NIH AN AUH KO RIH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Pathian auhnak, ngai duh lo-in, Leicung nuamhnak ka duh ca-ah, Zei can dah ka um ko rih lai? Zeicandah ka\r\n    hngilh ko rih lai?</p>\r\n<p><b>CHO: </b>Pathian nih an auh ko, (Pathian nih an auh) Amah auhnak kha ngai tuah, (Pathian nih an auh tuah) Amah aw\r\n    kha ngai tuah, (Amah aw kha) Pathian nih an auh ko, (Pathian nih an auh) Pathian nih an auh ko, (Pathian nih an\r\n    auh) Amah aw kha ngai tuah, Sunparnak lianhngannak khua co awkah.</p>\r\n<p><b>2. </b>Pathian nih a ka auh ko rih, Amah dawtnak aw nemte cu, Zeirel lo-in maw ka um lai? Tho lo-in maw ka um ko\r\n    lai?</p>\r\n<p><b>CHO: </b>Pathian nih an auh ko, (Pathian nih an auh) Amah auhnak kha ngai tuah, (Pathian nih an auh tuah) Amah aw\r\n    kha ngai tuah, (Amah aw kha) Pathian nih an auh ko, (Pathian nih an auh) Pathian nih an auh ko, (Pathian nih an\r\n    auh) Amah aw kha ngai tuah, Sunparnak lianhngannak khua co awkah.</p>\r\n<p><b>3. </b>Pathian nih ka lung innkhar cu, Atu tiangin a kingh ko rih, Ka lung innka cu fek chin in, Keimah nih maw\r\n    ka hrenh ko lai?</p>\r\n<p><b>CHO: </b>Pathian nih an auh ko, (Pathian nih an auh) Amah auhnak kha ngai tuah, (Pathian nih an auh tuah) Amah aw\r\n    kha ngai tuah, (Amah aw kha) Pathian nih an auh ko, (Pathian nih an auh) Pathian nih an auh ko, (Pathian nih an\r\n    auh) Amah aw kha ngai tuah, Sunparnak lianhngannak khua co awkah.</p>\r\n<p><b>4. </b>Pathian nih a ka auh ko rih, Leh loin ka um kho ti lo; Leicung nuamhnak, in kaltak ning, Pathian aw ka\r\n    lung a phan cang.</p>\r\n<p><b>CHO: </b>Pathian nih an auh ko, (Pathian nih an auh) Amah auhnak kha ngai tuah, (Pathian nih an auh tuah) Amah aw\r\n    kha ngai tuah, (Amah aw kha) Pathian nih an auh ko, (Pathian nih an auh) Pathian nih an auh ko, (Pathian nih an\r\n    auh) Amah aw kha ngai tuah, Sunparnak lianhngannak khua co awkah.</p>",
        "id": "225",
        "name": "PATHIAN NIH AN AUH KO RIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">INNKHAR RAK HUNG TUAH!</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Bawi Jesuh nih an auh cang, A bami A-mah sinah, Amah nih an khamh theo lai, Innkhar rak hung tuah.</p>\r\n<p><b>CHO: </b>A lam rak awnh tuah (A lam rak awnh tuah, a lam rak awnh tuah) A lam rak awnh tuah (rak awnh tuah, a lam\r\n    rak awnh tuan) Amah nih an khamh theo lai, Innkhar rak hung tuah.</p>\r\n<p><b>2. </b>Kan Khamhtu Bawi a rung tum, A nunnak nang ca a pek; Thlan chungin a tho than cang, Innkhar rak hung tuah.</p>\r\n<p><b>CHO: </b>A lam rak awnh tuah (A lam rak awnh tuah, a lam rak awnh tuah) A lam rak awnh tuah (rak awnh tuah, a lam\r\n    rak awnh tuan) Amah nih an khamh theo lai, Innkhar rak hung tuah.</p>\r\n<p><b>3. </b>Jesuh nih an hngah ko hna, A-mah nan phak khawh hlan tiang A lam kha nan awnh ah cun, Nan lung aa lawm\r\n    lai.</p>\r\n<p><b>CHO: </b>A lam rak awnh tuah (A lam rak awnh tuah, a lam rak awnh tuah) A lam rak awnh tuah (rak awnh tuah, a lam\r\n    rak awnh tuan) Amah nih an khamh theo lai, Innkhar rak hung tuah.</p>\r\n<p><b>4. </b>Jesuh sin-ah hung tuah u, Khamhnak ni caan a nai cang, Nan caan kha a luan hlan-ah, Innkhar hung bai tuah.</p>\r\n<p><b>CHO: </b>A lam rak awnh tuah (A lam rak awnh tuah, a lam rak awnh tuah) A lam rak awnh tuah (rak awnh tuah, a lam\r\n    rak awnh tuan) Amah nih an khamh theo lai, Innkhar rak hung tuah.</p>",
        "id": "226",
        "name": "INNKHAR RAK HUNG TUAH!",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NIHIN AH NA TLUNG LAI MAW?</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Nihin ah inn ah tlung than tuah, Na lam palh sualnak in, Sualnak puan naa aihmi kha, A tawl lai Jesuh nih,\r\n    Puanrang mi aih na duh ahcun, A thi in va tawl tuah, A biakam-nak na zum lai maw? Inn ah na tlung than lai maw?</p>\r\n<p><b>CHO: </b>Nihin ah na tlung lai maw? Nihin ah na tlung lai maw? A mui chung khuaceunak lei ah, Jesuh sin na kal\r\n    lai maw? Nihin ah na tlung lai maw? Nihin ah na tlung lai maw? Vancung Bawipa Pathian sinah, Nihin ah na tlung lai\r\n    maw?</p>\r\n<p><b>2. </b>Bawi Jesuh nih an hngah ko hna, A tlaumi tlung than tuah, Ngang ti lo-in hung tuah u, Sunghnak a um lai\r\n    lo, Min thang Bawipa nih an khamh lai, A sinah kal tuah u, An auh lio-ah na kal lai maw? Nihin ah na kal lai maw?</p>\r\n<p><b>CHO: </b>Nihin ah na tlung lai maw? Nihin ah na tlung lai maw? A mui chung khuaceunak lei ah, Jesuh sin na kal\r\n    lai maw? Nihin ah na tlung lai maw? Nihin ah na tlung lai maw? Vancung Bawipa Pathian sinah, Nihin ah na tlung lai\r\n    maw?</p>\r\n<p><b>3. </b>Sualnak palhnak thilrit phormi, Bawipa sinah kal tuah; Sualnak vialte hlaw ta tuah, Inn chungah lut tuah\r\n    u, Bawipa biakamnak a thami, An auhnak na zumh lai, Bawi Jesuh khamhnak a lian ko, A sinah na kal lai maw?</p>\r\n<p><b>CHO: </b>Nihin ah na tlung lai maw? Nihin ah na tlung lai maw? A mui chung khuaceunak lei ah, Jesuh sin na kal\r\n    lai maw? Nihin ah na tlung lai maw? Nihin ah na tlung lai maw? Vancung Bawipa Pathian sinah, Nihin ah na tlung lai\r\n    maw?</p>",
        "id": "227",
        "name": "NIHIN AH NA TLUNG LAI MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NIH A CHAM DIH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Khamhbawi bia kha ka theih, Na zaang a tlawm taktak, Zaang tlawmmi ni-fa-te, Thlacam pah in va hngak.</p>\r\n<p><b>CHO: </b>Jesuh a cham dih, Lei ka bat vialte, Sualnak in ka lung a thur, A thian a ranter ve.</p>\r\n<p><b>2. </b>Atu kan hngalh Bawipa, Nang hlei mi dang um lo; Thinghmui hma damter kho, Lunghak nemter khotu.</p>\r\n<p><b>CHO: </b>Jesuh a cham dih, Lei ka bat vialte, Sualnak in ka lung a thur, A thian a ranter ve.</p>\r\n<p><b>3. </b>Na zaangfahnak chim awkah, Zei hmanh san ka tlai lo, Ka lung sualnak fak tuk, Na thi in ka tawl ko.</p>\r\n<p><b>CHO: </b>Jesuh a cham dih, Lei ka bat vialte, Sualnak in ka lung a thur, A thian a ranter ve.</p>\r\n<p><b>4. </b>Ka thihnak kha a phan, Vancung lei ah ka kal, Khamhbawi thangthatnak hla Vanmi hmaiah ka sak.</p>\r\n<p><b>CHO: </b>Jesuh a cham dih, Lei ka bat vialte, Sualnak in ka lung a thur, A thian a ranter ve.</p>\r\n<p><b>5. </b>Vancung khua ngan chungah, A-mah sin ka phan lai, Bawi Jesuh kehram ah, Ka ngeihmi ka chiah lai.</p>\r\n<p><b>CHO: </b>Jesuh a cham dih, Lei ka bat vialte, Sualnak in ka lung a thur, A thian a ranter ve.</p>",
        "id": "228",
        "name": "JESUH NIH A CHAM DIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HMUN A UM RIH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Pathian inn tha chungah umnak a um, A lianh-ngannak he nannih an auh hna; Lut tuah, a tu lut tuah, umnak a\r\n    um.</p>\r\n<p><b>2. </b>Chun ni ceunak caan kha a dih deng cang, Ni a tla dengmang cang, Atu ra tuah; Umnak ca inn a um rih, va\r\n    lut tuah.</p>\r\n<p><b>3. </b>Nupi thitnak chung an i pumh lioah, An auhmi kha na si ahcun lut tuah; Umnak ca inn a um rih, va lut tuah.</p>\r\n<p><b>4. </b>A khat deng-mang lawmhnak inn chungah khan, Zokzok in na luh ahcun na hmuh lai; Umnak ca inn a um rih, va\r\n    lut tuah!</p>\r\n<p><b>5. </b>Innka hun lioah luhnak caan a um, Naa timh ahcun kal law na phak te lai; Kal tuah, lut tuah, umnak kha a\r\n    um rih!</p>\r\n<p><b>6. </b>Lut tuah, lut tuah, puai chungah khan dir tuah, Zungzal dawtnak ti kha nan din cio lai; Atu kal tuah, na\r\n    umnak ding a um rih.</p>",
        "id": "229",
        "name": "HMUN A UM RIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH CA UMNAK NA NGEI MAW?</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Na sualnak ca a ing Jesuh, A umnak hmun a um maw? Inn-khar kingh in luh awk a ra, Misual nih an duh lai\r\n    maw?</p>\r\n<p><b>CHO: </b>Siangpahrang Bawi Jesuh ca-ah, Umnak hmun kha remh cio u; Na lungthin innka kauhter law, Hung in luhter\r\n    ko tuah law.</p>\r\n<p><b>2. </b>Na rian ca le nuamhnak ca-ah, Na lungah hmun a um ko, Si na seh na Bawipa ca-ah, Umnak hmun a um ve maw?</p>\r\n<p><b>CHO: </b>Siangpahrang Bawi Jesuh ca-ah, Umnak hmun kha remh cio u; Na lungthin innka kauhter law, Hung in luhter\r\n    ko tuah law.</p>\r\n<p><b>3. </b>Bawi Jesuh a tum than tikah, A thawngtha in an auh lai, Nihin a thawngtha hla sa u, Thaizing ngang loin\r\n    zum tuah.</p>\r\n<p><b>CHO: </b>Siangpahrang Bawi Jesuh ca-ah, Umnak hmun kha remh cio u; Na lungthin innka kauhter law, Hung in luhter\r\n    ko tuah law.</p>\r\n<p><b>4. </b>Na caan le lungthin va pe tuah, Velngeihnak ni liam hlanah, Bawi Jesuh nih an auh lioah, Rau hin lo tein\r\n    ra tuah.</p>\r\n<p><b>CHO: </b>Siangpahrang Bawi Jesuh ca-ah, Umnak hmun kha remh cio u; Na lungthin innka kauhter law, Hung in luhter\r\n    ko tuah law.</p>",
        "id": "230",
        "name": "JESUH CA UMNAK NA NGEI MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MISUAL MI, RA TUAH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Misual nangmah kha an auh, Bawi Jesuh nih, Nang ca thla kan cam lioah, Atu ra tuah, Na sualnak atu hlaw\r\n    tuah, Maw misual mi, Bawipa thachin kha ruat tuah, A-tu ra tuah.</p>\r\n<p><b>2. </b>Na thil phorh kha a rit maw? Nang misual mi, Bawi Jesuh nih an chan lai, Atu ra tuah, Jesuh nih an hleng\r\n    lai lo, Sualnak ngeimi, Nangmah kan dawt lai, a ti, Atu ra tuah.</p>\r\n<p><b>3. </b>Nem tein an auh, ngai tuah, Sualnak ngeimi, A sin thachin hmuh awkah, Atu ra tuah, Jesuh nih an auh tikah,\r\n    Maw phorh ritmi, Nangmah caah thla kan cam, Atu ra tuah.</p>",
        "id": "231",
        "name": "MISUAL MI, RA TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BIANGAI TEIN KAN CHIMH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>A kan Khamhbawi nih kei ca a thi cang, Sual palhnak chungin a ka chuahter cang; Pathian Fapa a zummi\r\n    vialte cu, Zungzal in an nung lai.</p>\r\n<p><b>CHO: </b>Bia ngaite, in kan chimh, Nang sinah ka chim, Bia ngaite in kan chimh, Nang sinah ka chim, Pathian Fapa\r\n    a zummi nih bia ngai, Zungzal in an nung lai.</p>\r\n<p><b>2. </b>Bawipa cungah ka sualnak vialte cu, Ka chiah, ka leiba a ka champiak dih; Bawipa bia kha a zummi vialte cu\r\n    Zungzal in an nung lai.</p>\r\n<p><b>CHO: </b>Bia ngaite, in kan chimh, Nang sinah ka chim, Bia ngaite in kan chimh, Nang sinah ka chim, Pathian Fapa\r\n    a zummi nih bia ngai, Zungzal in an nung lai.</p>\r\n<p><b>3. </b>Mipam si hmanhning law a bia zumning, Sualnak kha ngei hmanhning kaa bochan lai, Pathian bia a zummi\r\n    lunglawmhnak kha, Zungzal nunnak a si.</p>\r\n<p><b>CHO: </b>Bia ngaite, in kan chimh, Nang sinah ka chim, Bia ngaite in kan chimh, Nang sinah ka chim, Pathian Fapa\r\n    a zummi nih bia ngai, Zungzal in an nung lai.</p>\r\n<p><b>4. </b>Tlak hmanh hlahning ka zumh zungzal ko lai, Rat a duhmi cu an hlaw hna lai lo, Ti-in Bawipa zummi au cio\r\n    tuah u, Zungzal in an nung lai.</p>\r\n<p><b>CHO: </b>Bia ngaite, in kan chimh, Nang sinah ka chim, Bia ngaite in kan chimh, Nang sinah ka chim, Pathian Fapa\r\n    a zummi nih bia ngai, Zungzal in an nung lai.</p>",
        "id": "232",
        "name": "BIANGAI TEIN KAN CHIMH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA LUNGKA PAWNGAH KA DIR</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Na lung ka pawngah ka dir ko, Luhnak kha kan hal lengmang ko, Bia nem tein maw misual hna, \"Luhnak kan\r\n    hal, na lung chungah\"</p>\r\n<p><b>CHO: </b>Na lung ka pawngah ka dir ko, Kan hal caan kip ah run ngai tuah, Maw sual ritmi na lung hung tuah,\r\n    \"Luhnak kan hal, na lung chungah\"</p>\r\n<p><b>2. </b>Nangmah caah hling an ka chinh, Caan saupi nangmah kha kan ngan, Maw sual ritmi na lung hung tuah, \"Luhnak\r\n    kan hal, na lung chungah.\"</p>\r\n<p><b>CHO: </b>Na lung ka pawngah ka dir ko, Kan hal caan kip ah run ngai tuah, Maw sual ritmi na lung hung tuah,\r\n    \"Luhnak kan hal, na lung chungah\"</p>\r\n<p><b>3. </b>Zei ual loah forh kan duh lo, Ka ngaihchiat le fahnak ruat tuah, Nangmah tlanh awk ka thih caah, \"Na lung\r\n    chungah, ka lut hnga maw?\"</p>\r\n<p><b>CHO: </b>Na lung ka pawngah ka dir ko, Kan hal caan kip ah run ngai tuah, Maw sual ritmi na lung hung tuah,\r\n    \"Luhnak kan hal, na lung chungah\"</p>\r\n<p><b>4. </b>Nangmah caah lunglawmh daihnak Vancung khua in ka run put cang, Maw sual ritmi na lung hung tuah, \"Luhnak\r\n    kan hal, na lung chungah.\"</p>\r\n<p><b>CHO: </b>Na lung ka pawngah ka dir ko, Kan hal caan kip ah run ngai tuah, Maw sual ritmi na lung hung tuah,\r\n    \"Luhnak kan hal, na lung chungah\"</p>",
        "id": "233",
        "name": "NA LUNGKA PAWNGAH KA DIR",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAWLEI CEUNAK CU JESUH A SI</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Hi vawlei cu sual mui lakah a tlau cang, Vawlei ceunak Jesuh a si! Chun niceu bang Amah lianhnak kha a\r\n    tlang, Vawlei ceunak Jesuh a si!</p>\r\n<p><b>CHO: </b>Nannih vialte ceunak ah ra u, Muihnak chungin ceunak a chuak cang, Mitcaw mi nih khua kan hmuh khawh\r\n    cang, Vawlei ceunak Jesuh a si!</p>\r\n<p><b>2. </b>Jesuh hngatchanmi ca khuamui a um lo, Vawlei ceunak Jesuh a si! Lam hmuhsaktu zulmi nih ceunak an hmuh,\r\n    Vawlei ceunak Jesuh a si!</p>\r\n<p><b>CHO: </b>Nannih vialte ceunak ah ra u, Muihnak chungin ceunak a chuak cang, Mitcaw mi nih khua kan hmuh khawh\r\n    cang, Vawlei ceunak Jesuh a si!</p>\r\n<p><b>3. </b>Sualnak in mitcaw, mui lak aa chokmi hna, Vawlei ceunak Jesuh a si! An fial bang i tawl law ceunak an hmuh\r\n    lai, Vawlei ceunak Jesuh a si!</p>\r\n<p><b>CHO: </b>Nannih vialte ceunak ah ra u, Muihnak chungin ceunak a chuak cang, Mitcaw mi nih khua kan hmuh khawh\r\n    cang, Vawlei ceunak Jesuh a si!</p>\r\n<p><b>4. </b>Vancung khua ah ni ceunak a herh ti lo, Khi khua ceunak Jesuh a si; Sui khuali-pi ceunak cu Tuufa a si,\r\n    Vawlei ceunak Jesuh a si!</p>\r\n<p><b>CHO: </b>Nannih vialte ceunak ah ra u, Muihnak chungin ceunak a chuak cang, Mitcaw mi nih khua kan hmuh khawh\r\n    cang, Vawlei ceunak Jesuh a si!</p>",
        "id": "234",
        "name": "VAWLEI CEUNAK CU JESUH A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AA HUNG CIAMI HAUKA</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Aa hung ciami hauka chungin, Vailam-tah ceunak a ra, Jesuh dawtnak ni ceu bangin, Kannih sinah a lang\r\n    cang.</p>\r\n<p><b>CHO: </b>Jesuh dawtnak a tam bik ca, Khi hauka cu keimah luhnak, Keimah caah, Kei ca an hun cia cang.</p>\r\n<p><b>2. </b>Khamhnak kha a duhmi vialte, Hi hauka mi dihlak ca, Chaw ngei, ngei lo, a lian, a hme, Mi phunkip an zapi\r\n    ca.</p>\r\n<p><b>CHO: </b>Jesuh dawtnak a tam bik ca, Khi hauka cu keimah luhnak, Keimah caah, Kei ca an hun cia cang.</p>\r\n<p><b>3. </b>Thinphang le aw-lok-chongmi ca, Zaangfahnak kaa a hun ko, Vailam-tahnak nan put caah, Nunnak laksawng nan\r\n    hmuh lai.</p>\r\n<p><b>CHO: </b>Jesuh dawtnak a tam bik ca, Khi hauka cu keimah luhnak, Keimah caah, Kei ca an hun cia cang.</p>\r\n<p><b>4. </b>Mah hin kan put vailamtahnak, Thihnak ral ah kan chiah lai, Nunnak laksawng kan i lak i, Jesuh kha kan\r\n    dawt chin lai.</p>\r\n<p><b>CHO: </b>Jesuh dawtnak a tam bik ca, Khi hauka cu keimah luhnak, Keimah caah, Kei ca an hun cia cang.</p>",
        "id": "235",
        "name": "AA HUNG CIAMI HAUKA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NANGMAH LE KEIMAH CAAH</h4> <p>Doh is Ab</p> <p><b>1. </b>Dai-te le nem tein Jesuh a kan auh, Keimah le nang a kan auh; Zoh tuah vancung innka in a kan hngah ko, Nang le keimah a kan hngah.</p> <p><b>CHO: </b>Ra u, sifah ingmi vial ra u, Lungtak tein Bawi Jesuh nih a kan auh, Misual mi ra u, a ti.</p> <p><b>2. </b>Jesuh kawhnak kha zeicadah kan ngaih lo, Nang le kei mah a kan kawh; Thluachuah a kan pek zei c'ah dah kan duh lo, Nang le keimah ca a si.</p> <p><b>CHO: </b>Ra u, sifah ingmi vial ra u, Lungtak tein Bawi Jesuh nih a kan auh, Misual mi ra u, a ti.</p> <p><b>3. </b>Kan caan a dih i kan ni zong a nai cang, Nangmah le keimah caah; Kan thihnak thladem nih ralchan a phanh cang. Nangmah le keimah caah.</p> <p><b>CHO: </b>Ra u, sifah ingmi vial ra u, Lungtak tein Bawi Jesuh nih a kan auh, Misual mi ra u, a ti.</p> <p><b>4. </b>A dawtnak khuaruahhar nih a kan phak cang, Nangmah le keimah sinah; Palhsualnak um hmanhseh a kan ngaihthiam lai; Nangmah le kei sualnak kha.</p> <p><b>CHO: </b>Ra u, sifah ingmi vial ra u, Lungtak tein Bawi Jesuh nih a kan auh, Misual mi ra u, a ti.</p>",
        "id": "236",
        "name": "NANGMAH LE KEIMAH CAAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NIH AN AUH</h4> <p>Doh is C</p> <p><b>1. </b>Jesuh nih nem tein an auh lengmang, Nihin an auh, nihin an auh, Lu-nun dawtnak lam zeica'h nan duh lo? Hlat hlah law, hlat hin hlah u.</p> <p><b>CHO: </b>Nihin an auh, (Nihin an auh, nihin an auh), Ni-hin an auh, (Nihin an auh, nihin an auh), Jesuh an auh ko, (Jesuh an auh ko, Jesuh an auh ko), Jesuh nih nem te-in an auh.</p> <p><b>2. </b>Re-thei-mi dinh duh ah Jesuh a au, Nihin a au, nihin a au, Amah sinah nan thil ritmi thum u, Nannih an hlaw hna lai lo.</p> <p><b>CHO: </b>Nihin an auh, (Nihin an auh, nihin an auh), Ni-hin an auh, (Nihin an auh, nihin an auh), Jesuh an auh ko, (Jesuh an auh ko, Jesuh an auh ko), Jesuh nih nem te-in an auh.</p> <p><b>3. </b>Jesuh an hngah lioah atu ra u, Ni-hin an hngah, nihin an hngah, Amah kehram ah nan sualnak phuang u, Hngak hlah u atu ra u.</p> <p><b>CHO: </b>Nihin an auh, (Nihin an auh, nihin an auh), Ni-hin an auh, (Nihin an auh, nihin an auh), Jesuh an auh ko, (Jesuh an auh ko, Jesuh an auh ko), Jesuh nih nem te-in an auh.</p> <p><b>4. </b>Jesuh dawtnak bia thawng atu ngai u, Ni-hin ngai u, nihin ngai u, A min a zummi kha an i lawm lai, Hngak hlah u, atu ngai u.</p> <p><b>CHO: </b>Nihin an auh, (Nihin an auh, nihin an auh), Ni-hin an auh, (Nihin an auh, nihin an auh), Jesuh an auh ko, (Jesuh an auh ko, Jesuh an auh ko), Jesuh nih nem te-in an auh.</p>",
        "id": "237",
        "name": "JESUH NIH AN AUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RAT DUHMI VIALTE</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>\"A theimi vialte ra u,\" ti-in au tuah, Vanrang kulh chung ah hi thawngtha kha an duh; Mi umnak vialte ah\r\n    lawmhnak bia thanh u, Rat duhmi vialte ra u.</p>\r\n<p><b>CHO: </b>Rat duhmi zeihmanh, Rat duhmi zeihmanh; Tlang le hor khua zakip ah thawngtha va thanh, A kan dawt kan Pa\r\n    nih misual a auh hna, \"Rat duhmi vialte ra u.\"</p>\r\n<p><b>2. </b>Rat duhmi vialte nih ngang len hna hlah seh, Vancung innka a hung atu an lut kho; Lu-nunnak lam ngai cu\r\n    Jesuh a si ko, Rat duhmi vialte ra u.</p>\r\n<p><b>CHO: </b>Rat duhmi zeihmanh, Rat duhmi zeihmanh; Tlang le hor khua zakip ah thawngtha va thanh, A kan dawt kan Pa\r\n    nih misual a auh hna, \"Rat duhmi vialte ra u.\"</p>\r\n<p><b>3. </b>Rat duhmi vialte an bia-kamnak a hmun, Rat duhmi vialte a zungzal in an nung; Rat duhmi vialte lu-nunnak\r\n    kha a um, Rat duhmi vialte ra u.</p>\r\n<p><b>CHO: </b>Rat duhmi zeihmanh, Rat duhmi zeihmanh; Tlang le hor khua zakip ah thawngtha va thanh, A kan dawt kan Pa\r\n    nih misual a auh hna, \"Rat duhmi vialte ra u.\"</p>",
        "id": "238",
        "name": "RAT DUHMI VIALTE",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NIH MISUAL A HLAWM HNA</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Ngai tuah u, misual mi hna, Vancung lam a palhmi hna, Sual-rit he a rilmi hna, Jesuh nih an khamh hna lai.</p>\r\n<p><b>CHO: </b>Hla sa u, (Hla sa u, sa u,) sa than rih u, (Hla sa than rih u,) Misual mi (Misual mi an khamh hna lai),\r\n    an khamh hna lai (Misualmi an khamh hna lai) Hi bia fiang (Hi bia fiang te -in) te-in chim u (Fiang te-in chim u),\r\n    Jesuh nih an khamh hna lai.</p>\r\n<p><b>2. </b>Ra u, hnangam nan hmuh lai, A bia a fiang zum ko u, A sual bikmi a hlawm lai, Misualmi a khamh hna lai.</p>\r\n<p><b>CHO: </b>Hla sa u, (Hla sa u, sa u,) sa than rih u, (Hla sa than rih u,) Misual mi (Misual mi an khamh hna lai),\r\n    an khamh hna lai (Misualmi an khamh hna lai) Hi bia fiang (Hi bia fiang te -in) te-in chim u (Fiang te-in chim u),\r\n    Jesuh nih an khamh hna lai.</p>\r\n<p><b>3. </b>Ka sual thurnak vialte cu, Na ka tawlpiak cang ca-ah Atu cu lungthiang te-in, Nangmah hmaiah ka dir cang.</p>\r\n<p><b>CHO: </b>Hla sa u, (Hla sa u, sa u,) sa than rih u, (Hla sa than rih u,) Misual mi (Misual mi an khamh hna lai),\r\n    an khamh hna lai (Misualmi an khamh hna lai) Hi bia fiang (Hi bia fiang te -in) te-in chim u (Fiang te-in chim u),\r\n    Jesuh nih an khamh hna lai.</p>\r\n<p><b>4. </b>Jesuh nih misual a hlawm, Misual mi ka si nain, Sualnak zeizong a thiang cang, Van ah a ka luhpi lai.</p>\r\n<p><b>CHO: </b>Hla sa u, (Hla sa u, sa u,) sa than rih u, (Hla sa than rih u,) Misual mi (Misual mi an khamh hna lai),\r\n    an khamh hna lai (Misualmi an khamh hna lai) Hi bia fiang (Hi bia fiang te -in) te-in chim u (Fiang te-in chim u),\r\n    Jesuh nih an khamh hna lai.</p>",
        "id": "239",
        "name": "JESUH NIH MISUAL A HLAWM HNA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHTU BAWI LUT KO SEH</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Innka hram khualpa a dir, Lut ko seh Voi tampi a ra cang i, Lut ko seh, A kal hlanah luhter tuah, Luhter\r\n    tuah, A thiang Bawipa, Jesuh Khrih Pathian Fapa, Lut ko seh.</p>\r\n<p><b>2. </b>Na lungthin innka hung tuah, Luhter tuah, Na rauh ahcun a kal lai, Luhter tuah, Luhter tuah na hawi a si,\r\n    Na thlarau kha a khamh lai, A dongh tiangin an bawmh lai, Lut ko seh.</p>\r\n<p><b>3. </b>A dawtnak aw na thei maw? Lut ko seh, Nihin theng ah hunpiak tuah, Lut ko seh, Innka hramah a dir ko,\r\n    Lunglawmhnak kha an pek lai, A min kha na upat lai, Lut ko seh.</p>\r\n<p><b>4. </b>Atu vancung khualpa kha, Luhter tuah, Vancung changreu an pek lai, lut ko seh, Nangmah sualnak an thlah\r\n    lai, Na hawi he naa then tikah, An lak lai vangcung inn ah, Lut ko seh.</p>",
        "id": "240",
        "name": "KHAMHTU BAWI LUT KO SEH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A TLAUMI FA</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Inn ah ra tlung, Nangmah cu na ba ko, Lam kha a muih ca-ah, Na re a thei ko cang, Maw a tlaumi fa, Inn ah\r\n    ra tlung tuah,</p>\r\n<p><b>CHO: </b>Inn ah ra tlung cang tuah. 2.Inn ah ra tlung, Nangmah kan in hngak ko, Zanlei khuamui zongah, Hauka in\r\n    kan in hngak, Maw a tlaumi fa, Inn ah ra tlung tuah.</p>\r\n<p><b>3. </b>Inn ah ra tlung, ngaihchiat harnak chungin, Sual le ningzahnak le, Tukforhtu kut chungin. Maw a tlaumi fa,\r\n    Inn ah ra tlung tuah.</p>\r\n<p><b>CHO: </b>Inn ah ra tlung cang tuah. 2.Inn ah ra tlung, Nangmah kan in hngak ko, Zanlei khuamui zongah, Hauka in\r\n    kan in hngak, Maw a tlaumi fa, Inn ah ra tlung tuah.</p>\r\n<p><b>4. </b>Inn ah ra tlung, Rawl tampi a um ko, Lawmhnak in donnak le, Hawikom he tonnak zong, Maw a tlaumi fa, Inn\r\n    ah ra tlung tuah.</p>\r\n<p><b>CHO: </b>Inn ah ra tlung cang tuah. 2.Inn ah ra tlung, Nangmah kan in hngak ko, Zanlei khuamui zongah, Hauka in\r\n    kan in hngak, Maw a tlaumi fa, Inn ah ra tlung tuah.</p>",
        "id": "241",
        "name": "A TLAUMI FA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUM KO TUAH U</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Sualnak lam zul-mi vialte hna, Bawipa nan zumh ahcun, Dinh-daihnak kha an pek hna lai, Mi nunnem ngai a\r\n    si.</p>\r\n<p><b>CHO: </b>Zum cio tuah u, zum cio tuah u, Zum cio ko tuah u, An khamh hna lai, an khamh hna lai, A zummi vialte.</p>\r\n<p><b>2. </b>Bawi Jesuh cu thing cungah khan, Fahnak a in ca-ah, A thi in a tawlmi vialte, Hawhra nak an rang deuh.</p>\r\n<p><b>CHO: </b>Zum cio tuah u, zum cio tuah u, Zum cio ko tuah u, An khamh hna lai, an khamh hna lai, A zummi vialte.</p>\r\n<p><b>3. </b>Jesuh, lam le biatak a si, Dinhnak ram kalnak lam; Zungzal thluachuah a pek hna lai, Amah zummi vialte.</p>\r\n<p><b>CHO: </b>Zum cio tuah u, zum cio tuah u, Zum cio ko tuah u, An khamh hna lai, an khamh hna lai, A zummi vialte.</p>\r\n<p><b>4. </b>Ram tha zoh in kal tuah u law, A thiang bu vialte hna, Nun dongh lonak zungzal inn tha, Vancung kan Pa\r\n    sinah,</p>\r\n<p><b>CHO: </b>Zum cio tuah u, zum cio tuah u, Zum cio ko tuah u, An khamh hna lai, an khamh hna lai, A zummi vialte.</p>",
        "id": "242",
        "name": "ZUM KO TUAH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA, KA RA TLUNG</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Pathian sin in ka tlau hnuah, Atu ka ra tlung; Sualnak lam sau tuk zulh hnuah, Bawipa ka ra tlung.</p>\r\n<p><b>CHO: </b>Ka ra tlung, ka ra tlung, Tlau ti lo dingin, Na ta zungzal si dingin, Bawipa ka ra tlung.</p>\r\n<p><b>2. </b>Kum tampi ka lohlak hnuah, Atu ka ra tlung; Ngaihchihnak mitthli tla bu-in, Bawipa ka ra tlung.</p>\r\n<p><b>CHO: </b>Ka ra tlung, ka ra tlung, Tlau ti lo dingin, Na ta zungzal si dingin, Bawipa ka ra tlung.</p>\r\n<p><b>3. </b>Sual le tlau hi ka ba ko cang, Atu ka ra tlung; Na dawtnak bia ka zumh cang lai, Bawipa, ka ra tlung.</p>\r\n<p><b>CHO: </b>Ka ra tlung, ka ra tlung, Tlau ti lo dingin, Na ta zungzal si dingin, Bawipa ka ra tlung.</p>\r\n<p><b>4. </b>Ka ruahnak le thinlung a zaw, Atu ka ra tlung, Thazang le ruahchannak ka pe, Bawipa ka ra tlung.</p>\r\n<p><b>CHO: </b>Ka ra tlung, ka ra tlung, Tlau ti lo dingin, Na ta zungzal si dingin, Bawipa ka ra tlung.</p>",
        "id": "243",
        "name": "BAWIPA, KA RA TLUNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA SUALNAK KHA CHIATA LAW</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Misual mi Jesuh nih an auh hna, A sinah ra tuah, Ra tuah u, sual ngaichihmi vialte, Jesuh kehram ah,</p>\r\n<p><b>CHO: </b>Na sualnak kha chiah dingin, Bawi Jesuh sinah kal tuah, Na sualnak kha chia ta law, Jesuh ke-hram ah.</p>\r\n<p><b>2. </b>A zummi kal u lawmhnak kawl tuah, Bawipa sin kal tuah, Na lungchung retheihnak thilrit kha, Jesuh sin chia\r\n    tuah,</p>\r\n<p><b>CHO: </b>Na sualnak kha chiah dingin, Bawi Jesuh sinah kal tuah, Na sualnak kha chia ta law, Jesuh ke-hram ah.</p>\r\n<p><b>3. </b>Na zumhnak nih khan an lawmhter lai, Jesuh sin kal tuah, Na thlarau ca-ah lawmhnak a tam, Jesuh sin kal\r\n    tuah,</p>\r\n<p><b>CHO: </b>Na sualnak kha chiah dingin, Bawi Jesuh sinah kal tuah, Na sualnak kha chia ta law, Jesuh ke-hram ah.</p>\r\n<p><b>4. </b>Ra tuah u, nannih umnak a um, Jesuh sin kal tuah, Thilrit nan ngeihmi vialte zong kha, Jesuh sin chia\r\n    tuah.</p>\r\n<p><b>CHO: </b>Na sualnak kha chiah dingin, Bawi Jesuh sinah kal tuah, Na sualnak kha chia ta law, Jesuh ke-hram ah.</p>",
        "id": "244",
        "name": "NA SUALNAK KHA CHIATA LAW",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA SUAL THLAHNAK A UM</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Khamhbawi min kha zum law a sin va kal tuah, Lungthin thar kha an serpiak lai, Thatter a kan duh lioah va\r\n    kal tuah u, Nang ca sualthlahnak kha a um.</p>\r\n<p><b>CHO: </b>Na sualthlahnak kha a um, (a um) Na sualthlahnak kha a um, (a um) A kan Khamhtu Bawi Jesuh a thi,\r\n    Sualthlahnak bia a kan chimh cang.</p>\r\n<p><b>2. </b>Sualnak lam zulhnak thihnak hmun phaknak kha, Zulh na duh chin lengmang ko maw? Dawtnak in a aunak kha na\r\n    al lai maw? Sual thlahnak bia nang an pek lai.</p>\r\n<p><b>CHO: </b>Na sualthlahnak kha a um, (a um) Na sualthlahnak kha a um, (a um) A kan Khamhtu Bawi Jesuh a thi,\r\n    Sualthlahnak bia a kan chimh cang.</p>\r\n<p><b>3. </b>A phan lai ral hrial law vai-lamtah naih tuah, Vai-lamtah nih nang an khamh lai, Na zumh tikah chikkhat te\r\n    in thlarau nih, Nangmah cu thachin an pek lai.</p>\r\n<p><b>CHO: </b>Na sualthlahnak kha a um, (a um) Na sualthlahnak kha a um, (a um) A kan Khamhtu Bawi Jesuh a thi,\r\n    Sualthlahnak bia a kan chimh cang.</p>",
        "id": "245",
        "name": "NA SUAL THLAHNAK A UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMH HMUH AWKAH ZEITINDAH KA TUAH LAI?</h4> <p>Doh is F</p> <p><b>1. </b>Ngaihchiat thilrit lak ka thlarau, Khamh awkah zeitindah ka tuah lai? Thlitu a hran tikah tilet thawh bantukin, Ngaihchiatnak cu ka cungah a phan. Zei ka tuah lai? Zei ka tuah lai? Khamh awkah zeidah ka tuah lai?</p> <p><b>2. </b>Khamh awkah zeitin ka tuah lai? Thancho lio nuamhnak a dih tik le, Ka hawikom dawt vialte lei in an liam tikah, An thlan hmun cungin ka tah lioah, Zei ka tuah lai? Zei ka tuah lai? Khamh awkah zeiti'n ka tuah lai?</p> <p><b>3. </b>Zawtfahnak kha a phak tikah, Khamh awk ah zeitin dah ka tuah lai? Vawlei fahnak minmei rauh hlanah a tian lai, Caan a dih bal lo hmuh khawh awkah, Khamhnak kha ka hmuh khawh nakhnga, Zei bantukin dah ka tuah lai?</p> <p><b>4. </b>Ka zaangfah law run ka zoh tuah, Keimah kha lunglawmhnak ka pe tuah; Bawipa na sin hlei in, Aho sin ka kal lai? A maan dih lungthin na damter khawh; Khi bantukin a si caah, Bawi Jesuh lawng kha ka panh lai.</p>",
        "id": "246",
        "name": "KHAMH HMUH AWKAH ZEITINDAH KA TUAH LAI?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH SIN KAL LAW CHIM TUAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Jesuh sin kal law, na sualnak phuang tuah, Nunnak caah amah bia va zum tuah, Na lung retheih thilrit a\r\n    zanter lai, Bawipa zoh tuah, na sualnak an thlah lai,</p>\r\n<p><b>CHO: </b>Jesuh sin kal tuah, Na sualnak kha chim tuah. Amah lei zoh tuah, na sual an thlahpiak lai, Jesuh sin kal\r\n    tuah, Amah hngatchan tuah, Bawipa nih na sualnak an thlahpiak khawh lai.</p>\r\n<p><b>2. </b>Jesuh sin kal tuah, na sualnak a ngan, Na sualnak thetse bantuk tam hmanh-seh, Sualnak an thlah lai i naa\r\n    lawmh lai ca, Bawi Jesuh thi a luan kha i ken tuah.</p>\r\n<p><b>CHO: </b>Jesuh sin kal tuah, Na sualnak kha chim tuah. Amah lei zoh tuah, na sual an thlahpiak lai, Jesuh sin kal\r\n    tuah, Amah hngatchan tuah, Bawipa nih na sualnak an thlahpiak khawh lai.</p>\r\n<p><b>3. </b>Jesuh sin kal law, na phannak chim tuah, Na phannak hngal law nangmah an pom lai, Zumhnak karhter law\r\n    mitthli an hnawh lai, A zungzal lawm tuah, na hna a ngam lai.</p>\r\n<p><b>CHO: </b>Jesuh sin kal tuah, Na sualnak kha chim tuah. Amah lei zoh tuah, na sual an thlahpiak lai, Jesuh sin kal\r\n    tuah, Amah hngatchan tuah, Bawipa nih na sualnak an thlahpiak khawh lai.</p>",
        "id": "247",
        "name": "JESUH SIN KAL LAW CHIM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA RA LIO</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Ngaihchiat lung rawh ka phak ahcun, Pathian auhnak ka ngaih lai, Pathian nang kan zumh ca-ah khan, Ka hung\r\n    ni-hin na sinah.</p>\r\n<p><b>CHO: </b>Ka hun lioah, Ka hun lioah, Thlua-chuahnak hmuh ka duh ca, Ka hun lioah, Ka hun lioah, Ka lung daihnak\r\n    hmuh ka duh.</p>\r\n<p><b>2. </b>A thiang nunnem nun tha bikmi, Jesuh sinah kei ka hung, Pathian nang mah kut chungah khan, Ka zohkhenh ka\r\n    domh-tlai tuah.</p>\r\n<p><b>CHO: </b>Ka hun lioah, Ka hun lioah, Thlua-chuahnak hmuh ka duh ca, Ka hun lioah, Ka hun lioah, Ka lung daihnak\r\n    hmuh ka duh.</p>\r\n<p><b>3. </b>Pathian nangmah sin kep lawngah, Ka thlarau daihnak a um, Ka thih tikah vanmi lakah, Ka thlarau nang na\r\n    hmuh lai.</p>\r\n<p><b>CHO: </b>Ka hun lioah, Ka hun lioah, Thlua-chuahnak hmuh ka duh ca, Ka hun lioah, Ka hun lioah, Ka lung daihnak\r\n    hmuh ka duh.</p>\r\n<p><b>4. </b>Ka sinah um, i lawm ko ning, Hi vawlei lam har ahhin, Ngaihchiatnak lawmhnak siter tuah, Khuamui kha\r\n    ceunak siter.</p>\r\n<p><b>CHO: </b>Ka hun lioah, Ka hun lioah, Thlua-chuahnak hmuh ka duh ca, Ka hun lioah, Ka hun lioah, Ka lung daihnak\r\n    hmuh ka duh.</p>",
        "id": "248",
        "name": "KA RA LIO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HRINTHANNAK KHA ING TUAH</h4> <p>Doh is Eb</p> <p><b>1. </b>Bawi pakhat Jesuh sinah zan ah a ra, Mi khamh ceunak lam kha amah hal duh ah, Jesuh nih fiang te-in a chim hi bia kha, \"Hrin thannak kha ing tuah.\"</p> <p><b>CHO: </b>Hrin thannak kha ing tuah. (ingtuah) Hrin thannak kha ing tuah (ingtuah) Hitihin bia ngai te kha kan chimh cang hna, \"Hrin thannak kha ing tuah.\" (ingtuah)</p> <p><b>2. </b>Pathian Fa Jesuh bia a ceihtak mi kha, Vawlei cung mi zakip nih ngai ko hna seh, A chiahtak bia zei ual lo-ah canter hlah, \"Hrin thannak kha ing tuah.\"</p> <p><b>CHO: </b>Hrin thannak kha ing tuah. (ingtuah) Hrin thannak kha ing tuah (ingtuah) Hitihin bia ngai te kha kan chimh cang hna, \"Hrin thannak kha ing tuah.\" (ingtuah)</p> <p><b>3. </b>Khamh ciami he lawmhnak hla thawh duhmi hna, Vancung khua lu-nun daihnak luh duhmi nih, Zungzal lu-nunnak kha hmuh nan duh ahcun, Zungzal lu-nunnak kha hmuh nan duh ahcun, \"Hrin thannak kha ing tuah.\"</p> <p><b>CHO: </b>Hrin thannak kha ing tuah. (ingtuah) Hrin thannak kha ing tuah (ingtuah) Hitihin bia ngai te kha kan chimh cang hna, \"Hrin thannak kha ing tuah.\" (ingtuah)</p> <p><b>4. </b>Vancung khua hmuh na duhmi kha a um ko, A tha kutka pawngah nangmah an hngah ko, A si ca'h hi bia chimh-hrinnak kha ngai tuah, \"Hrin thannak kha ing tuah.\"</p> <p><b>CHO: </b>Hrin thannak kha ing tuah. (ingtuah) Hrin thannak kha ing tuah (ingtuah) Hitihin bia ngai te kha kan chimh cang hna, \"Hrin thannak kha ing tuah.\" (ingtuah)</p>",
        "id": "249",
        "name": "HRINTHANNAK KHA ING TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAWLEI HNA HNAWHNAK</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Vawlei hna-hnawhnak le sual sifahnak, Van ka zoh tikah kai ka duh ko ta, Vancung ah sualnak a um ti lai\r\n    lo, An auhnak aw nih, \"Hung bai tuah\" an ti.</p>\r\n<p><b>2. </b>Nitin ka kalnak vancung khua lam kha, A zungzal sualnak nih a ka hlen tawn, Siseh na sualnak naa ngaihchih\r\n    ahcun, Sualthlah na hmuh lai, tiah bia ka theih cang.</p>\r\n<p><b>3. </b>A thiang le a tha bik khua chungah khin, Misual ka si ca ka kal ngam hnga maw? A thiang le a tleu thutnak\r\n    hmai ka ah, Bawi Jesuh nih zaangfah in a ka auh.</p>\r\n<p><b>4. </b>Nangmah aw a si, ka theih ka Bawipa, Na kut nih zungzal in a ka naih tawn; A sungmi thi kha keimah ca na\r\n    thlet, Bawi thutnak hmaiah dir tuah, na ka ti.</p>\r\n<p><b>5. </b>Dinnak Bawi keimah kha run ka chawn tuah, Ka laksawng sung bik kha nang ca a si, Hling luchin naa chinh,\r\n    kei nih sui luchin; Na thihnak kha kei ca nunnak a si.</p>\r\n<p><b>6. </b>Bawipa ka nunnak vialte kha kan pek, Atu ah ka lung chung ngaihchia ngaingai. Ka pum-puluk le zeizong te\r\n    kan pek, Ka philh hin hlah law kan dawt zungzal lai.</p>",
        "id": "250",
        "name": "VAWLEI HNA HNAWHNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH SINAH NA KAL CANG MAW?</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Sual thianh thiam mi sinah khan na kal cang maw? A thi in sual thianhnak na hmu maw? Jesuh vel kha tling\r\n    te-in na zum cang maw? A thi in sual thianhnak na hmu maw?</p>\r\n<p><b>CHO: </b>Bawi Jesuh (Bawi Jesuh) a thi in (a thi in) Nangmah sualthianhnak na hmu cang maw? (hmu cang maw) Na\r\n    thlarau puan haw-hra bang a thiang cang maw? A thi in sual thianhnak na hmu maw?</p>\r\n<p><b>2. </b>Nifate in Jesuh sinah na kal maw? A thi in sual thianhnak na hmu maw? Vai-lamtah a ingmi kha naa hngatchan\r\n    maw? A thi in sual thianhnak na hmu maw?</p>\r\n<p><b>CHO: </b>Bawi Jesuh (Bawi Jesuh) a thi in (a thi in) Nangmah sualthianhnak na hmu cang maw? (hmu cang maw) Na\r\n    thlarau puan haw-hra bang a thiang cang maw? A thi in sual thianhnak na hmu maw?</p>\r\n<p><b>3. </b>Khamhbawi tum tikah na lung a thiang lai maw? A thi in sual thianhnak na hmu maw? Na thlarau vancung luh\r\n    awkah na tim maw? A thi in sual thianhnak na hmu maw?</p>\r\n<p><b>CHO: </b>Bawi Jesuh (Bawi Jesuh) a thi in (a thi in) Nangmah sualthianhnak na hmu cang maw? (hmu cang maw) Na\r\n    thlarau puan haw-hra bang a thiang cang maw? A thi in sual thianhnak na hmu maw?</p>\r\n<p><b>4. </b>Na sualnak na nehmi puan kha hlaw cang tuah, A thi in na sualnak va thianh tuah, A thiang lomi caah nunnak\r\n    ti a luang, A thi in sual thianhnak na hmu maw?</p>\r\n<p><b>CHO: </b>Bawi Jesuh (Bawi Jesuh) a thi in (a thi in) Nangmah sualthianhnak na hmu cang maw? (hmu cang maw) Na\r\n    thlarau puan haw-hra bang a thiang cang maw? A thi in sual thianhnak na hmu maw?</p>",
        "id": "251",
        "name": "JESUH SINAH NA KAL CANG MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAILAM CUNG IN KA KHAMH</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>A ka dawtu ka Khamhtu, Ka tah thawng cu run ngai. Phang ngaiin na sin ka ra, Vailam cungin ka khamh. Sual\r\n    in ka um ko lioah, Keimah ca-ah na thi. Na vel in ka huppheng ko, Vailam cungin ka khamh.</p>\r\n<p><b>CHO: </b>Ka cohlang ko, Bawipa na ngaihchiat-ter hlah ning. Misual khamhtu atu vailam cungin ka khamh.</p>\r\n<p><b>2. </b>Tlau hmanhning thla ka cam lai, Thla ka cam zungzal lai, Nunnak lampi nang na si, Vailam cungin ka khamh,\r\n    A man loin ka vel cu kan pek cang hna, na ti, Ka zaangfah ko ka Bawipa, Vailam cungin ka khamh.</p>\r\n<p><b>CHO: </b>Ka cohlang ko, Bawipa na ngaihchiat-ter hlah ning. Misual khamhtu atu vailam cungin ka khamh.</p>\r\n<p><b>3. </b>Na thisen in ka tawl law, Ka thianh ko ka Bawipa, Ti lian chungah ka pil cang, Vailam cungin ka khamh,\r\n    Zumhnak lawngin ngaihthiamnak, Ngaihthiamnak cu ka hmuh, Zumhnak in na sin ka ra, Vailam cungin ka khamh.</p>\r\n<p><b>CHO: </b>Ka cohlang ko, Bawipa na ngaihchiat-ter hlah ning. Misual khamhtu atu vailam cungin ka khamh.</p>",
        "id": "252",
        "name": "VAILAM CUNG IN KA KHAMH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LAM PALHMI TUU</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Lam palhmi tuu ka si, Tuu run chung ka um lo, Tuukhal aw kha ka ngai lo i Ka duh paoh in ka um, A\r\n    vak-vaimi ka si, Ka inn um ka duh lo, Ka Pa aw ngaih ka duh lo i, Ram hla ah ka kal cang.</p>\r\n<p><b>2. </b>Tuukhal tu kawl bangin, Pa nih a fa a kawl, Fing le tlang cungah a kal i R am lakah a vailen, Rawltam in\r\n    ka um i, ka thih deng a ka hmuh, Dawtnak te-in A ka pom i, Lam-palhtu a ka khamh.</p>\r\n<p><b>3. </b>Jesuh ka Tuukhal nih, Ka thlarau kha a dawt, Amah thi in a ka tlengh i Amah a ka damter, A tlaumi a kawl\r\n    i, A hmutu kha a si, Amah nih a tlau mi tuu kha Kawm ah a ka luhpi.</p>\r\n<p><b>4. </b>Lam palh tuu ka rak si, Aho bia ka ngai lo, Atu Tuukhal aw ngaih ka duh, Tuurun chung um ka duh, Fa tlau\r\n    ka si ti lo, Vah-vaih ka duh ti lo, Ka Pa aw kha ngaih ka duh cang, Amah inn um ka duh.</p>",
        "id": "253",
        "name": "LAM PALHMI TUU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUM TUAH NAN NUNG LAI</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Zoh tuah Kal-va-ry vailam cungin, Mi zakip ca nunnak thi a luang, A zummi cu zungzal an nung lai, Zum\r\n    tuah, nan nung lai.</p>\r\n<p><b>CHO: </b>Zum tuah, nan nung lai, Zum tuah, na nung lai; Vailam cungin nunnak thi a luang, Zum tuah, nan nung lai.</p>\r\n<p><b>2. </b>Na sualnak vialte a thianter cang, Khamhnak hmun kha na phak khawh theo lai, Bawi Jesuh cu nunnak lam a\r\n    si, Zum tuah, nan nung lai.</p>\r\n<p><b>CHO: </b>Zum tuah, nan nung lai, Zum tuah, na nung lai; Vailam cungin nunnak thi a luang, Zum tuah, nan nung lai.</p>\r\n<p><b>3. </b>Thlan in a thomi Bawi kha zoh tuah, Khulrang in Amah sinah kal tuah, A hmai ceu nih lawmhnak an pek lai,\r\n    Zum tuah, nan nung lai.</p>\r\n<p><b>CHO: </b>Zum tuah, nan nung lai, Zum tuah, na nung lai; Vailam cungin nunnak thi a luang, Zum tuah, nan nung lai.</p>\r\n<p><b>4. </b>Khamhtu Bawi nih a ka chuahter cang, Sual muihnak chung ka rak umnak khan; Vanram thiang cu a ka phakter\r\n    lai, Zum tuah, nan nung lai.</p>\r\n<p><b>CHO: </b>Zum tuah, nan nung lai, Zum tuah, na nung lai; Vailam cungin nunnak thi a luang, Zum tuah, nan nung lai.</p>",
        "id": "254",
        "name": "ZUM TUAH NAN NUNG LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH, KA RA</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Ngaihchiat, khuamui, thongtlaknak chungin, Jesuh ka ra, Jesuh ka ra, Na ceunak, luatnak, lawmhnak chungah,\r\n    Jesuh, na sin ka ra. Ka zawtnak in na damnak chungah, Ka pamnak in na rumnak chungah, Ka sualnak chungin nangmah\r\n    sinah, Jesuh, na sin ka ra.</p>\r\n<p><b>2. </b>Ningzah awk tlak ka tlaunak chungin, Jesuh ka ra, Jesuh ka ra, Nangmah vai-lamtah nunnak chungah, Jesuh,\r\n    na sin ka ra. Ngaih-chiatnak in na damnak chungah, Retheih-nak chungin na daihnak ah, Harnak chungin lunglawmhnak\r\n    chungah, Jesuh, na sin ka ra.</p>\r\n<p><b>3. </b>Porh-lawtnak le ruamkainak chungin, Jesuh ka ra, Jesuh ka ra, Nangmah duhnak chung i um awkah, Jesuh, na\r\n    sin ka ra. Nangmah dawtnak chung i um awk le, Hnabei donghnak in ruahchannak ah, Thu ro bang na sinah ka hung\r\n    zuang, Jesuh, na sin ka ra.</p>",
        "id": "255",
        "name": "JESUH, KA RA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA NUN CHUNG PALHNAK</h4> <p>Doh is G</p> <p><b>1. </b>Ka lu nun lio palhnak kha a tam tuk, Ka lung chung sualnak a tam ko, Mitthli tlak ca'h khua ka hmu lo, Sisehlaw a sinah ka ra.</p> <p><b>CHO: </b>A sual zaang ngei lo ka si kha, Atu le atu ka ruat, Sisehlaw Jesuh a ka tlunter tikah, A sinah ka kal lai ta.</p> <p><b>2. </b>Jesuh kha a dawmi lak nauta bik, Thlacammi lak lung der bikmi, Ka si na-in a ka auh i, Keimah kha a ka thawl lai lo.</p> <p><b>CHO: </b>A sual zaang ngei lo ka si kha, Atu le atu ka ruat, Sisehlaw Jesuh a ka tlunter tikah, A sinah ka kal lai ta.</p> <p><b>3. </b>Ka palhnak Jesuh vel nih a tlengh i, Ka lung sualnak a tawl ve lai, Leicung ka ke palh hmang mi kha, Van kutka ah an lut ve lai.</p> <p><b>CHO: </b>A sual zaang ngei lo ka si kha, Atu le atu ka ruat, Sisehlaw Jesuh a ka tlunter tikah, A sinah ka kal lai ta.</p> <p><b>4. </b>Ka lu nun lio palhnak kha a tam tuk, Sualnak in ka thlarau a zaw, Mitthli nih ka mit phen hmanh seh, Jesuh a ka tlunter sawk lai.</p> <p><b>CHO: </b>A sual zaang ngei lo ka si kha, Atu le atu ka ruat, Sisehlaw Jesuh a ka tlunter tikah, A sinah ka kal lai ta.</p>",
        "id": "256",
        "name": "KA NUN CHUNG PALHNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA THAWNGTHA KHA KA THEIH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Keimah kha tawl duh ah, Kal-va-ry na thlet thi in, Pathian na kan auhnak thawng kha, Thawngtha kha ka\r\n    theih cang.</p>\r\n<p><b>CHO: </b>Bawipa ka ra ko, Atu na sinah, Ka sualnak kha tlenghter tuah, Na thletmi thi chungah.</p>\r\n<p><b>2. </b>Lung der thur hmanhning law, Ka tha na nuamter ko; Pathian, keimah thur sualnak kha, Na ka tlengh hirhiar\r\n    ko.</p>\r\n<p><b>CHO: </b>Bawipa ka ra ko, Atu na sinah, Ka sualnak kha tlenghter tuah, Na thletmi thi chungah.</p>\r\n<p><b>3. </b>Jesuh, nangmah lawng nih, Na ka tuahser ko ta, Vel-ngeihnak phunkhat phunkhat in, Na ka pek thuat ko ta.</p>\r\n<p><b>CHO: </b>Bawipa ka ra ko, Atu na sinah, Ka sualnak kha tlenghter tuah, Na thletmi thi chungah.</p>\r\n<p><b>4. </b>Jesuh a lianhnak vel, Sualnak a tlengh thiam thi, Pathian laksawng a kan pekmi, Kan hngat-channak a si.</p>\r\n<p><b>CHO: </b>Bawipa ka ra ko, Atu na sinah, Ka sualnak kha tlenghter tuah, Na thletmi thi chungah.</p>",
        "id": "257",
        "name": "NA THAWNGTHA KHA KA THEIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIH NA HLAWT KO RIH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Khrih na hlawt rih, Nifa an auh len nain, Zeica hen Khrih zumh cu naa hnek khawh lo, Vawlei nuamhnak cu\r\n    maw naa ruahchan rih lai, Parbang a ziam laimi nuamhnak cu maw?</p>\r\n<p><b>CHO: </b>Lung retheimi hna Jesuh sinah ra u, Nan caan um lioah ra tuah u, Nanmah khamh awkah atu an hngah ko hna,\r\n    Ngai tuah u, nihin an auh hna.</p>\r\n<p><b>2. </b>Khrih na hlawt rih, Caan sung na ngeih lio zongah, Zan a nai cang, zeitindah na um lai? Cerhti pawng hmun\r\n    a um na-in na duh lo, Cerhti nang caah a lak in a luang.</p>\r\n<p><b>CHO: </b>Lung retheimi hna Jesuh sinah ra u, Nan caan um lioah ra tuah u, Nanmah khamh awkah atu an hngah ko hna,\r\n    Ngai tuah u, nihin an auh hna.</p>\r\n<p><b>3. </b>Khrih na hlawt rih, Vel an ngeih ko rih na-in, Na sualnak cu na mertak hna ahcun, Nangmah khamh awkah timh\r\n    cia in a um ko, Ngaihthiam in cohlan awk ah an hngah ko.</p>\r\n<p><b>CHO: </b>Lung retheimi hna Jesuh sinah ra u, Nan caan um lioah ra tuah u, Nanmah khamh awkah atu an hngah ko hna,\r\n    Ngai tuah u, nihin an auh hna.</p>\r\n<p><b>4. </b>Khrih na hlawt rih, dawtnak bia an kamh nain, Na lung herh lai, cu dawtnak co lo cun, Na zumhnak kha i\r\n    tlaih, hmai ah kal zau, Sual ngaih-chihnak he, Amah panh cang.</p>\r\n<p><b>CHO: </b>Lung retheimi hna Jesuh sinah ra u, Nan caan um lioah ra tuah u, Nanmah khamh awkah atu an hngah ko hna,\r\n    Ngai tuah u, nihin an auh hna.</p>",
        "id": "258",
        "name": "KHRIH NA HLAWT KO RIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TAH NIH A KA KHAMH LO</h4> <p>Doh is Eb</p> <p><b>1. </b>Tah nih a ka khamh lo, Mit-thli tla len hmanhsehlaw, Ka thinphan a dai kho lo, Ka sual cia tawl kho lo, Tah nih a ka khamh lo.</p> <p><b>CHO: </b>Jesuh a tap keimah ca'h, Jesuh thi cang thing cungah, Thlah awkah a kan hngah ko, Amah lawng a khamh kho.</p> <p><b>2. </b>Tuan nih a ka khamh lo, Rian tha bik tuan hmanh ninglaw, Ruah thatnak ka ngeih zongah, Ka thla an tharter kho lo, Tuan nih a ka khamh lo.</p> <p><b>CHO: </b>Jesuh a tap keimah ca'h, Jesuh thi cang thing cungah, Thlah awkah a kan hngah ko, Amah lawng a khamh kho.</p> <p><b>3. </b>Hngah nih a ka khamh lo, zaangnem sualnak a tampi, Zaangfah in a ka auh lio, Hngah ahcun thihnak a si, Hngah nih a ka khamh lo.</p> <p><b>CHO: </b>Jesuh a tap keimah ca'h, Jesuh thi cang thing cungah, Thlah awkah a kan hngah ko, Amah lawng a khamh kho.</p> <p><b>4. </b>Zumhnak in a khamh lai, Na Fa tap kan zumhter tuah, Amah tuahser bochan in, Vancung khua kan phak khawhnak, Zumhnak in a khamh lai.</p> <p><b>CHO: </b>Jesuh a tap keimah ca'h, Jesuh thi cang thing cungah, Thlah awkah a kan hngah ko, Amah lawng a khamh kho.</p>",
        "id": "259",
        "name": "TAH NIH A KA KHAMH LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAILAMTAHNAK AH KA RA</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Vai-lam-tahnak ah ka ra, Ka mitcaw chaw ka ngei lo, Pek awk zeihmanh ka ngei lo, Khamhnak tha bik ka hmuh\r\n    ko.</p>\r\n<p><b>CHO: </b>Bawi Jesuh nangmah kan zumh, Na tha bik Kal-va-ry Tuufa Vai-lam-tahnak ah ka hung, Bawi Jesuh ka khamh\r\n    ko sawh. 2. Nangmah kha saupi kan duh, Si-na-seh ka lungthur cang, \"Kan tawl lai, a chim hi bang,\" Dawtnak in Jesuh\r\n    a ti.</p>\r\n<p><b>3. </b>Ka ngeihmi vialte kan pek, Ka hawi, chaw, thil a zapi, Ka thlarau, ka pum dihlak, A zungzal na fa ka si.</p>\r\n<p><b>CHO: </b>Bawi Jesuh nangmah kan zumh, Na tha bik Kal-va-ry Tuufa Vai-lam-tahnak ah ka hung, Bawi Jesuh ka khamh\r\n    ko sawh. 2. Nangmah kha saupi kan duh, Si-na-seh ka lungthur cang, \"Kan tawl lai, a chim hi bang,\" Dawtnak in Jesuh\r\n    a ti.</p>\r\n<p><b>4. </b>Bawipa biakamnak ka zumh, Na thi thletnak bia tha kha; Ka lung cu ka thumh ko cang, Nangmah he thih ka\r\n    ngamh ko.</p>\r\n<p><b>CHO: </b>Bawi Jesuh nangmah kan zumh, Na tha bik Kal-va-ry Tuufa Vai-lam-tahnak ah ka hung, Bawi Jesuh ka khamh\r\n    ko sawh. 2. Nangmah kha saupi kan duh, Si-na-seh ka lungthur cang, \"Kan tawl lai, a chim hi bang,\" Dawtnak in Jesuh\r\n    a ti.</p>",
        "id": "260",
        "name": "VAILAMTAHNAK AH KA RA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA SI BANGIN</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Ka si bangin thatnak um lo, Misual kei ca na thi a chuak, Nangmah sinah ka ra ko ta, Pathian Tuufa, ka ra,\r\n    ka ra.</p>\r\n<p><b>2. </b>Ka si bang kei mipam, mitcaw, Ka cuhmi kha ka hmuh ko lai, Ka duh vialte na ngeih ko sawk, Pathian Tuufa,\r\n    ka ra, ka ra.</p>\r\n<p><b>3. </b>Ka si bangin,na ka in lai, Ka sualnak cu ka ngaithiam ko, Na bia zapi ka zumh ngaingai, Pathian Tuufa,\r\n    kara, ka ra.</p>\r\n<p><b>4. </b>Ka si bangin na dawtnak ca, Ka lung thawnnak ka thumh ko cang, Nangmah mi lawng ka si zungzal, Pathian\r\n    Tuufa, ka ra, ka ra.</p>",
        "id": "261",
        "name": "KA SI BANGIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHTU BAWI BIK TUM TUAH</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Ka tahnak kha ngai law ka zaangfah tuah, Khamhtu Bawibik tum tuah, Ka thlarau nih an herh ko nangmah kha,\r\n    Khamhtu Bawibik tum tuah,</p>\r\n<p><b>CHO: </b>Inn hlatpi in tlang le fing ka lonh dih, Keimah nih lam palh in ka ra, Run ka la law, Na fa hi ka keng\r\n    tuah, Khamhtu Bawibik tum tuah.</p>\r\n<p><b>2. </b>Zan dornak ah a ka phentu um lo, Khamhtu Bawibik tum tuah, Run ka zoh law lu-nunnak ka hmuh lai, Khamhtu\r\n    Bawibik tum tuah.</p>\r\n<p><b>CHO: </b>Inn hlatpi in tlang le fing ka lonh dih, Keimah nih lam palh in ka ra, Run ka la law, Na fa hi ka keng\r\n    tuah, Khamhtu Bawibik tum tuah.</p>\r\n<p><b>3. </b>Ka lam a har i keimah ka ba ko, Khamhtu Bawibik tum tuah, Nangmah dawt merhnak thlam keimah ka hmuh.\r\n    Khamhtu Bawibik tum tuah.</p>\r\n<p><b>CHO: </b>Inn hlatpi in tlang le fing ka lonh dih, Keimah nih lam palh in ka ra, Run ka la law, Na fa hi ka keng\r\n    tuah, Khamhtu Bawibik tum tuah.</p>\r\n<p><b>4. </b>A rawk a man dih lung kha na hlaw lo, Khamhtu Bawibik tum tuah; Ka thlacam aunak kha run ka ngai ko,\r\n    Khamhtu Bawibik tum tuah.</p>\r\n<p><b>CHO: </b>Inn hlatpi in tlang le fing ka lonh dih, Keimah nih lam palh in ka ra, Run ka la law, Na fa hi ka keng\r\n    tuah, Khamhtu Bawibik tum tuah.</p>",
        "id": "262",
        "name": "KHAMHTU BAWI BIK TUM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A ZUNGZAL CA VOI KHAT LAWNG</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Hmasa phungbia in luatnak cu a tha, Jesuh a thi thlet in khamhnak kan hmuh, Adam chiatserh sualnak ka\r\n    chung in, Jesuh a kan khamh lai nihin.</p>\r\n<p><b>CHO: </b>A kan khamh cang, Maw misual zum tuah, A kan khamh cang, Unau zum tuah u, Hreng-khenh hngat in thilrit a\r\n    thumh lai, Jesuh nih a kan khamh cang lai.</p>\r\n<p><b>2. </b>Sualnak in kannih nih kan luat cang lai, Jesuh khamhnak fiang tein a lang cang, \"Ka sinah ra,\" ti in a kan\r\n    auh, Ra tuah, atu a kan khamh lai.</p>\r\n<p><b>CHO: </b>A kan khamh cang, Maw misual zum tuah, A kan khamh cang, Unau zum tuah u, Hreng-khenh hngat in thilrit a\r\n    thumh lai, Jesuh nih a kan khamh cang lai.</p>\r\n<p><b>3. </b>Pathian fale kan si ca lawmhnak in, Tukforhnak kha kan i sum kho lai ta, Thihnak kan in, lu nun kan hmuh\r\n    cang, Lu nun khamhnak thluachuah a si.</p>\r\n<p><b>CHO: </b>A kan khamh cang, Maw misual zum tuah, A kan khamh cang, Unau zum tuah u, Hreng-khenh hngat in thilrit a\r\n    thumh lai, Jesuh nih a kan khamh cang lai.</p>",
        "id": "263",
        "name": "A ZUNGZAL CA VOI KHAT LAWNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KALVARY AH</h4> <p>Doh is C</p> <p><b>1. </b>Porhhlawt ruam-kainak in ka rak um, Ka Bawipa thihnak zei rel loin, A thihnak kha zei ti hngalh loin, Kal-va-ry ah.</p> <p><b>CHO: </b>Amah velngeih, zaangfahnak thawngin, Ngaih-thiamnak man loin ka hmuh cang, Ka thlarau nih thilrit a thumh cang, Kal-va-ry ah.</p> <p><b>2. </b>Pathian bia in ka sualnak ka hngalh, A bia ka al ca'h ka tha a ther, A sual ka thlarau a thian hlantiang, Kal-va-ry ah.</p> <p><b>CHO: </b>Amah velngeih, zaangfahnak thawngin, Ngaih-thiamnak man loin ka hmuh cang, Ka thlarau nih thilrit a thumh cang, Kal-va-ry ah.</p> <p><b>3. </b>Atu ka zeizong Jesuh ka pek, Ka lung a ka lawmhter tu Bawipa, Ka thlarau nih lawmhnak hla a sak, Kal-va-ry ah.</p> <p><b>CHO: </b>Amah velngeih, zaangfahnak thawngin, Ngaih-thiamnak man loin ka hmuh cang, Ka thlarau nih thilrit a thumh cang, Kal-va-ry ah.</p> <p><b>4. </b>Maw dawtnak thiang bik, Khamhnak sertu, Velngeihnak mi cung a tluntertu, Pathian nih pehtlaihnak hlei a donh, Kal-va-ry ah.</p> <p><b>CHO: </b>Amah velngeih, zaangfahnak thawngin, Ngaih-thiamnak man loin ka hmuh cang, Ka thlarau nih thilrit a thumh cang, Kal-va-ry ah.</p>",
        "id": "264",
        "name": "KALVARY AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A HMUNMI LUNGPI</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>A hmunmi lung Bawi Jesuh, Nangmah chungah ka thup tuah, Fei chunh ca na hnak chungin, Ti le thi a luang\r\n    kei ca, Ka sualnak kha a tawl cang, Keimah thiannak ah hi bang.</p>\r\n<p><b>2. </b>Ka kut rian ka tuannak nih, Pathian phung a tlinh kho lo, Ngol loin kaa zuamnak nih, Ka mitthli tla\r\n    hmanhsehlaw, Ka sualnak an thianh kho lo, Nangmah lawng keimah khamh kho.</p>\r\n<p><b>3. </b>Kut in zeihmanh kaa put lo, Na vailam kha kaa tlaih ko, Puan loin nangmah sinah, Ka ra i na ka pek ko,\r\n    Keimah fih awk ka si ca, Nangmah thi in ka tawl tuah.</p>\r\n<p><b>4. </b>Ka thawchuah a dongh tikah, Ka mit a chin ka thih ca, Vancung ah ka hung zuang i, Nang kan hmuh,\r\n    biaceihnak ah, A hmunmi lung, Bawi Jesuh, Nangmah chungah ka thup tuah.</p>",
        "id": "265",
        "name": "A HMUNMI LUNGPI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA LAWNG HRENNAK A FEK LAI MAW?</h4> <p>Doh is F</p> <p><b>1. </b>Thli lakah na lawng-hrennak a fek maw? Khuadawn le minmei an kai cuahmah, Rili a thang i lawng hri cu a reng, Na lawng hrennak cu a fek hnga maw?</p> <p><b>CHO: </b>Nunnak kilkawm tu lawng-hrennak tha, Ti lian hmanhseh fek tein a dir, Hninh khawh lo Lungpi nih a tlaih ko, Khamhtu dawtnak thuk ah hramsih ser cang.</p> <p><b>2. </b>Thli chia hninh khawh lo fek in hren a si, Khamhtu kut nih fek te'n a tlaih ca, Cu hrennak hri cun kei a ka tem cang, Bawipa thawnnak nih fek te'n a tlaih.</p> <p><b>CHO: </b>Nunnak kilkawm tu lawng-hrennak tha, Ti lian hmanhseh fek tein a dir, Hninh khawh lo Lungpi nih a tlaih ko, Khamhtu dawtnak thuk ah hramsih ser cang.</p> <p><b>3. </b>Tihphan caan zongah fek tein a tlaih, Ti chung lungpang suk awk um hmanhseh, Totho thlichia i herh len hmanhsehlaw, Na nunnak tilawng a hrawk kho lo.</p> <p><b>CHO: </b>Nunnak kilkawm tu lawng-hrennak tha, Ti lian hmanhseh fek tein a dir, Hninh khawh lo Lungpi nih a tlaih ko, Khamhtu dawtnak thuk ah hramsih ser cang.</p> <p><b>4. </b>Thihnak lilet chungah fek te'n a dir, Thihnak tilian nih kan fan hmanhseh; Rili thang hmanh seh a rawk kho ti lo, Kan ruahchannak Bawipa chung a hmun.</p> <p><b>CHO: </b>Nunnak kilkawm tu lawng-hrennak tha, Ti lian hmanhseh fek tein a dir, Hninh khawh lo Lungpi nih a tlaih ko, Khamhtu dawtnak thuk ah hramsih ser cang.</p> <p><b>5. </b>Zan mui si hmanh seh, fiang tein kan hmuh, Ceu le dawh kan lawng dinhnak hmun cu; Khi van ti kam ah kan i din cang lai, Thlichia tilet an um ti lai lo.</p> <p><b>CHO: </b>Nunnak kilkawm tu lawng-hrennak tha, Ti lian hmanhseh fek tein a dir, Hninh khawh lo Lungpi nih a tlaih ko, Khamhtu dawtnak thuk ah hramsih ser cang.</p>",
        "id": "266",
        "name": "NA LAWNG HRENNAK A FEK LAI MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">CEUNAK LUHTER TUAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Na pumsa sualnak nih khan an tei dengmang, Vawlei cung tukforhnak kha phan awk a si, Khuamui chuahter law,\r\n    ceunak lam kha hung tuah, Ceunak kha hung lut ko seh.</p>\r\n<p><b>CHO: </b>Ceunak kha luhter ko tuah, Ceunak kha luhter ko tuah, Na lung chung innkhar vialte kha hung hna law,\r\n    Ceunak kha hung lut ko seh.</p>\r\n<p><b>2. </b>Pathian na zumhnak kha a rawh dengmang i, Na halnak vialte zong kha na sungh hmanh ah, Na lung chung\r\n    innkhar vialte kha hung hna law, Ceunak kha luhter ko tuah.</p>\r\n<p><b>CHO: </b>Ceunak kha luhter ko tuah, Ceunak kha luhter ko tuah, Na lung chung innkhar vialte kha hung hna law,\r\n    Ceunak kha hung lut ko seh.</p>\r\n<p><b>3. </b>Lunglawmhnak in ceunak kha rak tlai ko cang, Nangmah an thiantertu kha a si ngaingai, Sual muihnak\r\n    thianter law, a lam kha awnh tuah, Ceunak a hung lut zau lai.</p>\r\n<p><b>CHO: </b>Ceunak kha luhter ko tuah, Ceunak kha luhter ko tuah, Na lung chung innkhar vialte kha hung hna law,\r\n    Ceunak kha hung lut ko seh.</p>",
        "id": "267",
        "name": "CEUNAK LUHTER TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HMUN SANG CHIN AH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Cunglei ram cu ka panh lengmang, Nifa te-in hmun sang ka phan, Thlacam pah in ka fuh hnu ah, Bawipa\r\n    hmunsang ah ka dirter.</p>\r\n<p><b>CHO: </b>Bawipa, ka thawh law dir tuah ning, Zumhnak in vancung ram nuam ah, Ka phanh bal lo mi ram ah cun,\r\n    Bawipa, hmunsang chin ka phanhter.</p>\r\n<p><b>2. </b>Tihphannak ram mui chungah hin, Sau deuh um cu ka zuam ti lo, Mi cheu nih um duh hmanh hna seh, Kei tinhmi\r\n    cu hmunsang a si.</p>\r\n<p><b>CHO: </b>Bawipa, ka thawh law dir tuah ning, Zumhnak in vancung ram nuam ah, Ka phanh bal lo mi ram ah cun,\r\n    Bawipa, hmunsang chin ka phanhter.</p>\r\n<p><b>3. </b>Satan sual thurnak tong hmanhning, Va bang a sang in zuan ka duh, Mithiang mi hla sak thawng hna cu,\r\n    Zumhnak hnathlam in ka theih cang.</p>\r\n<p><b>CHO: </b>Bawipa, ka thawh law dir tuah ning, Zumhnak in vancung ram nuam ah, Ka phanh bal lo mi ram ah cun,\r\n    Bawipa, hmunsang chin ka phanhter.</p>\r\n<p><b>4. </b>A sannak bik ram cu phan in, Sunpar ceunak cu co ka duh, Vanram phanh tiang thlacam pah in, Bawipa\r\n    hmunsang ah ka hruai ko.</p>\r\n<p><b>CHO: </b>Bawipa, ka thawh law dir tuah ning, Zumhnak in vancung ram nuam ah, Ka phanh bal lo mi ram ah cun,\r\n    Bawipa, hmunsang chin ka phanhter.</p>",
        "id": "268",
        "name": "HMUN SANG CHIN AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN NUNTER THAN</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Maw Pathian, thihnak tei in, Vancung kalmi, Na dawt Fapa Jesuh ca-ah kan in thangthat.</p>\r\n<p><b>CHO: </b>Hal-le-lu-jah, Lianhngan, sunpar; Hal-le-lu-jah, Amen! Hal-le-lu-jah, Nang ta kan si, Kan nunter than\r\n    tuah.</p>\r\n<p><b>2. </b>Maw Pathian, nangmah ceunak Thlarau ca-ah, Khamhbawi a kan hmuhsak ca-ah kan in thangthat.</p>\r\n<p><b>CHO: </b>Hal-le-lu-jah, Lianhngan, sunpar; Hal-le-lu-jah, Amen! Hal-le-lu-jah, Nang ta kan si, Kan nunter than\r\n    tuah.</p>\r\n<p><b>3. </b>Thah ciami Tuufa,sunpar thangthat si seh, Kan sual vialte phortu le a kan thiantertu.</p>\r\n<p><b>CHO: </b>Hal-le-lu-jah, Lianhngan, sunpar; Hal-le-lu-jah, Amen! Hal-le-lu-jah, Nang ta kan si, Kan nunter than\r\n    tuah.</p>\r\n<p><b>4. </b>Kan nunter than law, Na dawtnak sung bik le, Na vancung mei in, kan lung chung hi alhter ko.</p>\r\n<p><b>CHO: </b>Hal-le-lu-jah, Lianhngan, sunpar; Hal-le-lu-jah, Amen! Hal-le-lu-jah, Nang ta kan si, Kan nunter than\r\n    tuah.</p>",
        "id": "269",
        "name": "KAN NUNTER THAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN RIAN CA, KUT TAM A HERH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Pathian, na rian-tuannak ah hin, Kut tampi a herh ko, Kannih tel kan duh ve ca-ah, Kan laksawng kan rak\r\n    put.</p>\r\n<p><b>2. </b>Bawipa, nangmah kan in dawt i, Na rian kan duh ca-ah, Kan laksawng kha kan rak put i, Na kehram ah kan\r\n    chiah.</p>\r\n<p><b>3. </b>Bawipa, kan laksawng tel lo hin, A tuan kho lo an um, Jesuh min in kan cohlang law, Na duh bangin hmang\r\n    ko.</p>",
        "id": "270",
        "name": "PATHIAN RIAN CA, KUT TAM A HERH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA KUT LAWNG IN KA KAI LAI MAW?</h4> <p>Doh is D</p> <p><b>1. </b>Ka kut lawng in ka kai lai maw, Khamhbawi Jesuh tonnak ah, Nikhat hmanh A-mah ca tuan lo, Zei ka pe lo, Keimah nih.</p> <p><b>CHO: </b>Ka kut lawng in ka kai lai maw? Hi bang Khamhbawi ka hmuh lai, Hawikom te hmanh sawm hin loin, Zeiti'n hi bangin kai lai.</p> <p><b>2. </b>Ka thih lai ca ka thinphang lo, Jesuh nih a ka khamh ca'h, Hawi sawm loin a ka hmuh lai, Ngaihchiat loin um kho lo.</p> <p><b>CHO: </b>Ka kut lawng in ka kai lai maw? Hi bang Khamhbawi ka hmuh lai, Hawikom te hmanh sawm hin loin, Zeiti'n hi bangin kai lai.</p> <p><b>3. </b>Kum fate in ka sual lengmang, cu si ca ka hnangam lo, Jesuh nawl in um ka duh cang, A zungzal zulh ka duh ko.</p> <p><b>CHO: </b>Ka kut lawng in ka kai lai maw? Hi bang Khamhbawi ka hmuh lai, Hawikom te hmanh sawm hin loin, Zeiti'n hi bangin kai lai.</p> <p><b>4. </b>Maw lung thiangmi, it hlah, tho tuah, Jesuh ca rian kha tuan tuah, Thihnak nih an phak hlanah hin, Midang kha va forh tuah hna.</p> <p><b>CHO: </b>Ka kut lawng in ka kai lai maw? Hi bang Khamhbawi ka hmuh lai, Hawikom te hmanh sawm hin loin, Zeiti'n hi bangin kai lai.</p>",
        "id": "271",
        "name": "KA KUT LAWNG IN KA KAI LAI MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH CU SUNPAR PEK A SI CANG</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Sunpar pek a si cang, Van Bawi thutdan cungah, Siangpahrang luchin a chinh, A hmaiah mithiang an kun.</p>\r\n<p><b>CHO: </b>Cu sunparnak pekmi, Khamh tu pawngah him in, Tu hnu ah,Tu hnu-ah, Tu hnu-ah, (Tu hnu ah, Tu hnu ah Kan\r\n    lung a tling te lai, Tu hnu-ah)2.</p>\r\n<p><b>2. </b>Puanrang aih in an dir, Rel cawk lo mithiang hna, Tum-hnah kutput cio he, Upatnak pek in hla an sa.</p>\r\n<p><b>CHO: </b>Cu sunparnak pekmi, Khamh tu pawngah him in, Tu hnu ah,Tu hnu-ah, Tu hnu-ah, (Tu hnu ah, Tu hnu ah Kan\r\n    lung a tling te lai, Tu hnu-ah)2.</p>\r\n<p><b>3. </b>Vawlei caah thlahmi, Tuufa hlawi in an sak, Tuufa thisen thawinak thawngin, Bawi luchin an i chinh.</p>\r\n<p><b>CHO: </b>Cu sunparnak pekmi, Khamh tu pawngah him in, Tu hnu ah,Tu hnu-ah, Tu hnu-ah, (Tu hnu ah, Tu hnu ah Kan\r\n    lung a tling te lai, Tu hnu-ah)2.</p>\r\n<p><b>4. </b>Thiang Thlarau, na vel in, Lawmhnak cu na kan pek; Mithiang hna he um ti awk in, Vancung ah na kan hruai.</p>\r\n<p><b>CHO: </b>Cu sunparnak pekmi, Khamh tu pawngah him in, Tu hnu ah,Tu hnu-ah, Tu hnu-ah, (Tu hnu ah, Tu hnu ah Kan\r\n    lung a tling te lai, Tu hnu-ah)2.</p>",
        "id": "272",
        "name": "JESUH CU SUNPAR PEK A SI CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A RAWKMI HLAWM TUAH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>A rawkmi kha hlawm tuah, Thi deng zohkhenh tuah, Sualnak thlan in zaangfah in hung chuak tuah, A palhmi\r\n    kha hram tuah, A rilmi tung tuah; Jesuh khamh thiamnak kong kha va chim tuah.</p>\r\n<p><b>CHO: </b>A rawkmi kha hlawm tuah, Thi deng zohkhenh tuah, Jesuh tlaih-channak nih, An khamh hna lai.</p>\r\n<p><b>2. </b>Sualnak ngaihchih-mi fa, A ngan ko rih hna, Amah bia zeiah an rel lo nain, Lungtak in va sawm tuah, Nem\r\n    tein sawm tuah, An zumh ahcun ngaih-thiamnak an hmuh lai.</p>\r\n<p><b>CHO: </b>A rawkmi kha hlawm tuah, Thi deng zohkhenh tuah, Jesuh tlaih-channak nih, An khamh hna lai.</p>\r\n<p><b>3. </b>Mi lungthin chungah khan, Rul-hreu a hrolh ca, Thihnak le rawhnak nih khan a uk cang, Sihmanhseh dawtnak\r\n    in, Na tongh hna ahcun, A rawk cia lung kha a nung than kho lai.</p>\r\n<p><b>CHO: </b>A rawkmi kha hlawm tuah, Thi deng zohkhenh tuah, Jesuh tlaih-channak nih, An khamh hna lai.</p>\r\n<p><b>4. </b>A rawkmi kha hlawm tuah, Tuan awk rian a si, Jesuh nih thazang fehnak an pek lai, Dawtnak in kirter tuah,\r\n    A bi lam chungah, An nih ca Khamhtu a thih kha chim hna.</p>\r\n<p><b>CHO: </b>A rawkmi kha hlawm tuah, Thi deng zohkhenh tuah, Jesuh tlaih-channak nih, An khamh hna lai.</p>",
        "id": "273",
        "name": "A RAWKMI HLAWM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TUAN KO U</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Tuan ko u, tuan ko u, Pathian mithi kan si, Bawi Jesuh kalnak lam tha kha zul tuah u si, Kan baat ahcun\r\n    A-mah nih a kan dinhter lai, Kan ton kip rian kha zuamnak in tuan ko u si.</p>\r\n<p><b>CHO: </b>Tuan len ko (tuan len ko), tuan len ko (tuan len ko), tuan len ko (tuan len ko), tuan len ko (tuan len\r\n    ko), Ruahchan in (in zum tuah) zum ko tuah (zum tuah) Bawipa a rat hlan tiang tuan tuah.</p>\r\n<p><b>2. </b>Rawltam-mi caah riantuan law pawcawm hna u, Thaba-mi kha lu nunnak ah phakter hna u, Vai-lamtah\r\n    hmelchunhnak kannih lawmhnak a si, \"Khamhnak kha man pek loin hmuh tuah u,\" kan ti.</p>\r\n<p><b>CHO: </b>Tuan len ko (tuan len ko), tuan len ko (tuan len ko), tuan len ko (tuan len ko), tuan len ko (tuan len\r\n    ko), Ruahchan in (in zum tuah) zum ko tuah (zum tuah) Bawipa a rat hlan tiang tuan tuah.</p>\r\n<p><b>3. </b>Tuan ko u, khuamui khua-hrum sual pennak chungah, Tuan ko u, miphun vialte tuan awkah a chiah, Khamhnak\r\n    kha man pek loin kan chim tik hna ah, Je-ho-vah kan Pathian min kha an thangthat lai.</p>\r\n<p><b>CHO: </b>Tuan len ko (tuan len ko), tuan len ko (tuan len ko), tuan len ko (tuan len ko), tuan len ko (tuan len\r\n    ko), Ruahchan in (in zum tuah) zum ko tuah (zum tuah) Bawipa a rat hlan tiang tuan tuah.</p>\r\n<p><b>4. </b>A donghnak bik ah Jesuh thawngin kan kal lai, A raang puan le sui luchin kha kan hmuh cio lai, A dingmi\r\n    vialte umnak ah kan um ve lai, Khamhnak man pek loin hmuhnak kong kan sak lai.</p>\r\n<p><b>CHO: </b>Tuan len ko (tuan len ko), tuan len ko (tuan len ko), tuan len ko (tuan len ko), tuan len ko (tuan len\r\n    ko), Ruahchan in (in zum tuah) zum ko tuah (zum tuah) Bawipa a rat hlan tiang tuan tuah.</p>",
        "id": "274",
        "name": "TUAN KO U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HUNG TUAH U</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Amah thawng nungmi nih Amah kha kan thlau, Hmuh than nak caan kha a tlung, Kan Pa kan kawl zungzal mi kha\r\n    kan hngal lo, A duh lo rian kha kan tuan.</p>\r\n<p><b>CHO: </b>Hungtuah u (Hung tuah u, tuah u) Hung tuah u, (Hung tuah u, tuah u) Amah min thangthatnak (Amah min\r\n    thangthatnak) hmun ah (thangthatnak hmun ah, Chak le thlang mi vial hung tuah u, Vancung khua tha kan phak lai.</p>\r\n<p><b>2. </b>Tuu tlaumi bangin kan Bawi sinin kan tlau, Sualnak hlingbur a kan donh, Kir than awkah a kan auhnak thawng\r\n    ngai tuah, A thangthatnak hla sa u.</p>\r\n<p><b>CHO: </b>Hungtuah u (Hung tuah u, tuah u) Hung tuah u, (Hung tuah u, tuah u) Amah min thangthatnak (Amah min\r\n    thangthatnak) hmun ah (thangthatnak hmun ah, Chak le thlang mi vial hung tuah u, Vancung khua tha kan phak lai.</p>\r\n<p><b>3. </b>Kan pipu thawk in kan duh cio bikmi kha, Kannih sin a rung phan cang, Cu si ca thangthat u, a kan Khamhtu\r\n    Bawi, Thluachuah ruahpi rung sur seh.</p>\r\n<p><b>CHO: </b>Hungtuah u (Hung tuah u, tuah u) Hung tuah u, (Hung tuah u, tuah u) Amah min thangthatnak (Amah min\r\n    thangthatnak) hmun ah (thangthatnak hmun ah, Chak le thlang mi vial hung tuah u, Vancung khua tha kan phak lai.</p>\r\n<p><b>4. </b>Kannih kan sunparnak ni kha a nai cang, Khua zong a dei dengmang cang, Bawipa nih ral vialte a tei dih\r\n    cang i, Vawlei cung a pen zungzal.</p>\r\n<p><b>CHO: </b>Hungtuah u (Hung tuah u, tuah u) Hung tuah u, (Hung tuah u, tuah u) Amah min thangthatnak (Amah min\r\n    thangthatnak) hmun ah (thangthatnak hmun ah, Chak le thlang mi vial hung tuah u, Vancung khua tha kan phak lai.</p>",
        "id": "275",
        "name": "HUNG TUAH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HIKA AH KA UM, KA THLAH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Jesuh aunak thawng kha ngai tuah, Nihin hodah a tuan lai? Lo kha a za siah-mah len ko, Hodah rawltuan a\r\n    thawk lai, Biatak tein an auh lengmang, Zaangzet man tha nan hmuh lai, Lunglawm in hodah a kal lai? Hodah ei, ei, a\r\n    ti lai, Hodah ei, ei a ti lai.</p>\r\n<p><b>2. </b>Rili ral na tan khawh lo ah, Phundang mi na forh kho lo, Nannih nan pawng misual thawng kha, Va chim rih\r\n    law va hlau hna, Tangka tam na pek khawh loah, Nuhmei nu bang phaisa pe, Jesuh ca na tuahnak hme bik, A sungmi,\r\n    tiah a ruah sawk, A sungmi, tiah a ruah sawk.</p>\r\n<p><b>3. </b>Vancungmi bang na chim lo ah, Jesuh dawtnak kha hmuh sak, Paul bantuk na thiam khawh lo ah, Jesuh thihnak\r\n    kong hmuh sak, Mipuar kha na hlauh khawh loah, Annih ca thla va cam tuah, Ngakchia sem Jesuh ban chungah, Rak lem\r\n    diahmah ko tuah hna, Rak lem diahmah ko tuah hna.</p>\r\n<p><b>4. </b>Jesuh nih an auh tikah khan, Mi thlarau an thih lioah, Keimah cu zeihmanh ka thiam lo, Zeitik-hmanh ah va\r\n    chim hlah, An pek rian lunglawmhnak in la, Na duhmi kha thlah ko tuah, An auh tikah va chim colh tuah, Keimah ka um\r\n    ka fial tuah, An auh tikah va chim colh tuah, Keimah ka um ka fial tuah, Keimah ka um ka fial tuah.</p>",
        "id": "276",
        "name": "HIKA AH KA UM, KA THLAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZION KHUA AH KAN KAL LIO</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Jesuh a dawmi ra, Nan lawmhnak hngalhter tuah, Nannih dihlak hlasa cio u, Nannih dihlak hlasa cio u, Bawi\r\n    thutdan pawngah cun, Bawi thutdan pawngah cun.</p>\r\n<p><b>CHO: </b>Zion khua kan kal lai, Zoh duh awk, aa dawh khua Zion Cunglei ah a ummi Zion, Pathian khua tha ah kan\r\n    kal lai.</p>\r\n<p><b>2. </b>Pathian hngal lomi nih, Hlasak al hmanh hna seh, Vancung Bawibik fa hna nih cun, Vancung Bawibik fa hna\r\n    nih cun, Hla cu an sak theo lai, Hla cu an sak theo lai.</p>\r\n<p><b>CHO: </b>Zion khua kan kal lai, Zoh duh awk, aa dawh khua Zion Cunglei ah a ummi Zion, Pathian khua tha ah kan\r\n    kal lai.</p>\r\n<p><b>3. </b>Zion tlang cu a tha, Lawmhnak a tam a um, Vancung khua kha kan phak hlanah, Vancung khua kha kan phak\r\n    hlanah, Kan hmuh nuamhnak a tam, Kan hmuh nuamhnak a tam.</p>\r\n<p><b>CHO: </b>Zion khua kan kal lai, Zoh duh awk, aa dawh khua Zion Cunglei ah a ummi Zion, Pathian khua tha ah kan\r\n    kal lai.</p>\r\n<p><b>4. </b>Khi ca hlasa u si, mitthli kha a hul lai, Im-ma-nu-el ram in kan kal i, Im-ma-nu-el ram in kan kal i, Khua\r\n    thabik kan phan lai, khua thabik kan phan lai.</p>\r\n<p><b>CHO: </b>Zion khua kan kal lai, Zoh duh awk, aa dawh khua Zion Cunglei ah a ummi Zion, Pathian khua tha ah kan\r\n    kal lai.</p>",
        "id": "277",
        "name": "ZION KHUA AH KAN KAL LIO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAILAMTAH RALKAP</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Vai-lamtah ralkap ka si maw? Bawipa hnu ka zul maw? A-mah riantuan ka tih lai lo, A min tha ka thanh lai.</p>\r\n<p><b>CHO: </b>Min ah cun (Min ah cun) min sung a si (min sung a si) Kei ca a thimi cu (Kei ca a thimi cu)\r\n    Vai-lamtahnak ka put ca-ah, Sui luchin ka hmuh lai.</p>\r\n<p><b>2. </b>Midang laksawng hmuhter awkah, Ka thih tiang ka tuan lai, Vancung phakter tu ka si lai, Minmei cung khua\r\n    tha ah.</p>\r\n<p><b>CHO: </b>Min ah cun (Min ah cun) min sung a si (min sung a si) Kei ca a thimi cu (Kei ca a thimi cu)\r\n    Vai-lamtahnak ka put ca-ah, Sui luchin ka hmuh lai.</p>\r\n<p><b>3. </b>Raldoh awk ral kha an um maw? Tilian tihnung chungah, Vawlei chaw nih Pathian sinah, A ka phakter lai maw?</p>\r\n<p><b>CHO: </b>Min ah cun (Min ah cun) min sung a si (min sung a si) Kei ca a thimi cu (Kei ca a thimi cu)\r\n    Vai-lamtahnak ka put ca-ah, Sui luchin ka hmuh lai.</p>\r\n<p><b>4. </b>Mi ngan si awkah kaa zuam lai, Bawipa ral ka thatter, Na rian ca sifah ka in lai, Nangmah bawmhnak ka\r\n    herh.</p>\r\n<p><b>CHO: </b>Min ah cun (Min ah cun) min sung a si (min sung a si) Kei ca a thimi cu (Kei ca a thimi cu)\r\n    Vai-lamtahnak ka put ca-ah, Sui luchin ka hmuh lai.</p>",
        "id": "278",
        "name": "VAILAMTAH RALKAP",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH LAWNG NIH MAW VAILAM A PUT LAI?</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Hi vawlei ah Jesuh lawng nih, Vailam a put lai maw? Mikip ca put awk a um ko, Keica zong a um ve.</p>\r\n<p><b>2. </b>Vailamtahnak cu ka put lai, Thihnak caan ka phak tiang, Cun Bawi luchin cu kaa chinh lai, Ka inn ka phak\r\n    tikah.</p>\r\n<p><b>3. </b>An khenhmi Jesuh ke-hram ah, Thlalang lung phah cungah, Ka sui luchin cu ka chiah lai, A min ka thangthat\r\n    lai.</p>\r\n<p><b>4. </b>Maw vailam sung! Maw sui luchin! A lianngan thawhthan ni, Vancungmi hna rung tum tuah u, Ka thlarau kai pi\r\n    u.</p>",
        "id": "279",
        "name": "JESUH LAWNG NIH MAW VAILAM A PUT LAI?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HMAI AH KAL</h4> <p>Doh is Db</p> <p><b>1. </b>Bawipa na Pathian zum in, Hmaiah kal, hmaiah kal, A bia fek te'n i tlaih in, Hmai ah kal, A minthiang kha hlaw hin hlah, Ning-zahnak a si hmanh ah, A min thannak kha chim in, Hmai ah kal.</p> <p><b>2. </b>Riantuan awkah an au maw? Hmaiah kal, hmaiah kal, Atu Amah riantuan tuah, Hmai ah kal, Zumhnak le dawtnak fonh in, Amah kha i bochan tuah, A dongh tiang fek te'n dir in, Hmai ah kal.</p> <p><b>3. </b>Amah nih thlaici an pek, Hmai ah kal, hmaiah kal. Tuh law na zun than hna lai, Hmai ah kal, Na Bawipa kuttang ah khan, Hngah in um zungzal ko tuah, Na thlacamnak a theih lai, Hmai ah kal.</p> <p><b>4. </b>A donghnak kha a nai cang, Hmai ah kal, hmaiah kal. A rian kha tuan zungzal law, Hmai ah kal, Khrih cu na vo, na nunnak, Vancung changreu kha a si, Sunparnak ni na phan lai, Hmai ah kal.</p>",
        "id": "280",
        "name": "HMAI AH KAL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUN AH ZEITINDAH SI LAI?</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Khuadei ah lu-nunnak ci kan vorh, Chun ah Pathian lu nunnak ci kan vorh, Zanlei ah lu-nunnak ci kan vorh,\r\n    Zantim ah lu-nunnak ci kan vorh, Zun ah zeitindah lai, Zun ah zeitindah si lai?</p>\r\n<p><b>CHO: </b>Zan ah kan vorh siseh, Chun ah kan vorh, Zaang-hrim le, zaang cham ah kan vorh si seh, A zuntu vanmi an\r\n    si ca-ah, Vancung thlaici kha vorh ko u.</p>\r\n<p><b>2. </b>Lam pawng lu-nun thlaici kan vorh ah, Lung lakah lu-nun thlaici kan vorh ah, Hling lak lu-nun thlaici kan\r\n    vorh ah, Vawlei tha ah thlaici kan vorh ah. Zun ah zeitindah lai, Zun ah zeitindah si lai?</p>\r\n<p><b>CHO: </b>Zan ah kan vorh siseh, Chun ah kan vorh, Zaang-hrim le, zaang cham ah kan vorh si seh, A zuntu vanmi an\r\n    si ca-ah, Vancung thlaici kha vorh ko u.</p>\r\n<p><b>3. </b>Lungfah in sualnak ci nan vorh ah, Lungrawh in sualnak thlaici nan vorh ah, Min chiat in sualnak ci nan\r\n    vorh ah, ningzah in sualnak ci nan vorh ah, Zun ah zeitindah lai, Zun ah zeitindah si lai?</p>\r\n<p><b>CHO: </b>Zan ah kan vorh siseh, Chun ah kan vorh, Zaang-hrim le, zaang cham ah kan vorh si seh, A zuntu vanmi an\r\n    si ca-ah, Vancung thlaici kha vorh ko u.</p>",
        "id": "281",
        "name": "ZUN AH ZEITINDAH SI LAI?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIHFA I RALRING U</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Khrihfa, i ralring u, rawhnak a nai, Lung a dermi le ral a chiami hna, Khual nan tlawn lioah, Ther le phan\r\n    pah in, Nanmah nan rawh nakhnga sualnak a tam. Khrihfa i ralring u, Khrihfa i ralring u, Khrihfa i ralring u,\r\n    rawhnak a nai.</p>\r\n<p><b>2. </b>Khrihfa, nan lung fek u, thli a hrang lai, Khua nih a fakpi in dawm hmanhsehlaw, Khuadawmnak le thlitu a\r\n    tian zaulai, Khamhbawi sinah a zungzal nan um lai. Khrihfa lawm in kal u, Khrihfa lawm in kal u, Khrihfa lawm in\r\n    kal u, thlihran zongah,</p>\r\n<p><b>3. </b>Khrihfa, thlacam tuah u, lampalh a fawi, Nan Bawi nih an auhnak kha zum ko u, Nan Khamhbawi sinah thla nan\r\n    cam ahcun, Tukforh le hneksaknak nan tei khawh lai. Khrihfa thlacam tuah u, Khrihfa thlacam tuah u, Khrihfa thlacam\r\n    tuah u, lam palh a fawi.</p>",
        "id": "282",
        "name": "KHRIHFA I RALRING U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUL TUAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ka Bawi Jesuh sinah tlang cung ah ka kal lai, Khua zeihmanh ti hna fim le ni ceunak ka ah, Khua zei a ka\r\n    hruainak hmanh ah ka zulh zungzal lai, A kalnak vancung khua tiang in ka kal lai.</p>\r\n<p><b>CHO: </b>Zul tuah zul tuah, kei zong ka zul ve lai, Khuazei ka ramkip hmanh ah kan zulh lai ta, Zul tuah, zul\r\n    tuah, kei zong ka zul ve lai, Khuazei ka ram kip hmanh ah kan zulh lai ta.</p>\r\n<p><b>2. </b>Ka Khamhtu sinah ngaihchiatnak lam ah ka kal, Khuazei hmanh ah thli le ruah nih ka nam hmanhseh, Amah nih\r\n    a ka zohkhenh ahcun ka tih lai lo, Bawipa pawng ka um ahcun ka hna ngam lai.</p>\r\n<p><b>CHO: </b>Zul tuah zul tuah, kei zong ka zul ve lai, Khuazei ka ramkip hmanh ah kan zulh lai ta, Zul tuah, zul\r\n    tuah, kei zong ka zul ve lai, Khuazei ka ram kip hmanh ah kan zulh lai ta.</p>\r\n<p><b>3. </b>Harnak hor le lam harnak ah kal hmanhning law, Ka thlarau kha ka Khamhtu nih a kil zungzal, Amah kalnak\r\n    lam tha ah him tein a kalpi Vancung khua an pumhnak tiangin a hruai lai.</p>\r\n<p><b>CHO: </b>Zul tuah zul tuah, kei zong ka zul ve lai, Khuazei ka ramkip hmanh ah kan zulh lai ta, Zul tuah, zul\r\n    tuah, kei zong ka zul ve lai, Khuazei ka ram kip hmanh ah kan zulh lai ta.</p>",
        "id": "283",
        "name": "ZUL TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA HMUH NAKHNGA, KA MIT AUTER</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ka hmuh nakhnga, ka mit auter, Keimah ca i na biatak cu, Ka kut chungah na tawh cu chia ko, Hrenhnak phoih\r\n    in ka luatter seh, Hnangam tein nang kan hngak ko. Na duhnak kha hmuh ka duh ko, Ka mit auter, ka ceuter ko,\r\n    Pathian Thlarau.</p>\r\n<p><b>2. </b>Ka theih nakhnga, ka hna awnter, Na rak thlahmi na biatak cu, Ka hna chungah cu aw a luh in, Aw dik lo cu\r\n    an lo dih lai, Hnangam tein nang kan hngak ko. Na duhnak kha hmuh ka duh ko, Ka hna awnter, ka ceuter ko, Pathian\r\n    Thlarau.</p>\r\n<p><b>3. </b>Ka chim nakhnga, ka ka ah cuang, Na biatak cu khua zakip ah, Ka lung hung law ka timhter cang tuah, Na\r\n    dawtnak cu i hrawm awk ah, Hnangam tein nang kan hngak ko. Na duhnak kha hmuh ka duh ko, Ka lung hung tuah, ka\r\n    ceuter ko, Pathian Thlarau.</p>",
        "id": "284",
        "name": "KA HMUH NAKHNGA, KA MIT AUTER",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLAICI ZUNTU AUHNAK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Khuazakip i rawl vialte cu, An tuan caan kha a cu cang, Tlang cung i le, nelrawn i zong, An za tein an\r\n    hmin cang.</p>\r\n<p><b>CHO: </b>Maw, Kan Bawipa, kan in nawl ko, facang zuntu run thlah hna. A caan kha a luan dih hlanah, Rian rang in\r\n    run thlah tuah hna.</p>\r\n<p><b>2. </b>Zing ah siseh, chun ah siseh, Ni a tlak dengmang zongah, Bawipa, hmunkip le ram kip ah, Rawltuan tu kha va\r\n    fial hna.</p>\r\n<p><b>CHO: </b>Maw, Kan Bawipa, kan in nawl ko, facang zuntu run thlah hna. A caan kha a luan dih hlanah, Rian rang in\r\n    run thlah tuah hna.</p>\r\n<p><b>3. </b>Maw nang, Bawipa nih, A thlahmi, Pum tuah sui facang phal cu, Na nunnak ni a liam tikah, Lawmhnak he naa\r\n    din cang lai.</p>\r\n<p><b>CHO: </b>Maw, Kan Bawipa, kan in nawl ko, facang zuntu run thlah hna. A caan kha a luan dih hlanah, Rian rang in\r\n    run thlah tuah hna.</p>",
        "id": "285",
        "name": "THLAICI ZUNTU AUHNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TUAN TUAH, ZAN CAAN A RA LIO</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Tuan tuah, zan caan a ra lio, Zing khuadei hramthawk in, Dap cin lio zongah tuan tuah, Pangpar samh lioah,\r\n    Ni a hung san deuh tikah, Ni lin zongah tuan tuah, Tuan rih, riantuan ngolnak caan zan a phan cang lai.</p>\r\n<p><b>2. </b>Tuan tuah, zan caan a ra lio, Chun ni lin ah tuan tuah, Chun lai cer hmanh ah tuan tuah, Dinh caan a phan\r\n    lai, Mit-thep kar hmanh dai thlang hlah, Chaw-hlawn khon caan a si, Mi rian tuan ti lonak caan zan a phan cang lai.</p>\r\n<p><b>3. </b>Tuan tuah, zan caan a ra lio, Atu ni a tla lio, Van kam a ceu chungah hin, Tuan tuah a liam lai, A hmanung\r\n    bik ceunak cu, A lanh dih hlanah hin, Tuan tuah, khua a muihnak caan zan a phan cang lai.</p>",
        "id": "286",
        "name": "TUAN TUAH, ZAN CAAN A RA LIO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN PHILH BAL LAI LO</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>\"Kan philh bal lai lo,\" ti bia-kamnak thawngin, Ka nunnak cu zeihmanh nih a hrawk kho lo, Vawlei ah zan\r\n    muihnak caan tlung hmanhsehlaw, Khikhin zungzal a ceumi khua tha a um.</p>\r\n<p><b>CHO: </b>Kan philh in kan (Kan philh in kan kaltak) kaltak bal lai lo, (bal lai lo, bal lai lo), Ka kut in kan\r\n    tlaih lai, Ka tangah kan pom lai, Kan philh in kan kal (tak, kan kal) tak bal lai lo (tak bal lai lo). ka Khamhtu\r\n    Bawi na si, kan zoh zungzal lai.</p>\r\n<p><b>2. </b>\"Kan philh bal lai lo,\" ti biakamnak ka zumh, Dawtnak le lawmh nak hlasak in ka kal lai, Vawlei le ka hawi\r\n    nih ka hlaw hmanh hna seh, Vancung ka inn ah cun philh ni a um lo.</p>\r\n<p><b>CHO: </b>Kan philh in kan (Kan philh in kan kaltak) kaltak bal lai lo, (bal lai lo, bal lai lo), Ka kut in kan\r\n    tlaih lai, Ka tangah kan pom lai, Kan philh in kan kal (tak, kan kal) tak bal lai lo (tak bal lai lo). ka Khamhtu\r\n    Bawi na si, kan zoh zungzal lai.</p>\r\n<p><b>3. </b>Sui kutka hram ah keimah ka dir tikah, Ngaih-chiatnak le harnak vialte an lo lai, Zeitluk ngaih nuammi\r\n    thawngthanhnak dah si lai, \"Zumh tlak saltha lut tuah,\" ti aan-ka biak cu.</p>\r\n<p><b>CHO: </b>Kan philh in kan (Kan philh in kan kaltak) kaltak bal lai lo, (bal lai lo, bal lai lo), Ka kut in kan\r\n    tlaih lai, Ka tangah kan pom lai, Kan philh in kan kal (tak, kan kal) tak bal lai lo (tak bal lai lo). ka Khamhtu\r\n    Bawi na si, kan zoh zungzal lai.</p>",
        "id": "287",
        "name": "KAN PHILH BAL LAI LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DANIEL ZIA A ZULMI</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Pathian nawl a ngaimi cu, Ruahchan awk a si, Da-niel bangin ul ko u, Thlachuah ti ko u si.</p>\r\n<p><b>CHO: </b>Da-niel bantuk ngamh tuah, Pakhat nih ngamh u, Ruahchannak ngeih awk ngamh tuah, Chim zong ngamh tuah u.</p>\r\n<p><b>2. </b>Dir a ngamh lomi vial cu, Nunnak an liam cang, Da-niel bang lungfekmi cu, Pathian caah an thawng.</p>\r\n<p><b>CHO: </b>Da-niel bantuk ngamh tuah, Pakhat nih ngamh u, Ruahchannak ngeih awk ngamh tuah, Chim zong ngamh tuah u.</p>\r\n<p><b>3. </b>Sual fakpi tuah duhmi cu, Tam an um ngaingai, Da-niel zia zulmi hna nih, Doh ahcun an tei lai.</p>\r\n<p><b>CHO: </b>Da-niel bantuk ngamh tuah, Pakhat nih ngamh u, Ruahchannak ngeih awk ngamh tuah, Chim zong ngamh tuah u.</p>\r\n<p><b>4. </b>Tukforh hmangtu tih hlah u, Da-niel ruat u si, Phunglam tha a zulmi nih, Hngatchan in tei u si.</p>\r\n<p><b>CHO: </b>Da-niel bantuk ngamh tuah, Pakhat nih ngamh u, Ruahchannak ngeih awk ngamh tuah, Chim zong ngamh tuah u.</p>",
        "id": "288",
        "name": "DANIEL ZIA A ZULMI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TUKFORHNAK AH TEL HLAH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Tukforhnak ah tel hlah, Sualnak a si theo, Voi khat na tei ahcun, Voi dang a fawi deuh, Ral-that in fong\r\n    chin ko, Puarnak i sum tuah, Jesuh kha va or tuah, Lam an hmuhsak lai.</p>\r\n<p><b>CHO: </b>Khamhbawi bawmhnak hna-ngamnak, Zaang thatnak kha va hal tuah, Nangmah kha domht-laih an duh, Lam kha an\r\n    hmuhsak lai.</p>\r\n<p><b>2. </b>Hawitha lo kha hrial tuah, Bia tha lo sum ko, Pathian min kha upat, Va hmang sawhsawh hlah, Velngeihnak\r\n    lungthin le, Na lungtak tein, Jesuh kha va or tuah, Lam an hmuhsak lai.</p>\r\n<p><b>CHO: </b>Khamhbawi bawmhnak hna-ngamnak, Zaang thatnak kha va hal tuah, Nangmah kha domht-laih an duh, Lam kha an\r\n    hmuhsak lai.</p>\r\n<p><b>3. </b>Ral kha a teimi nih, Zumhnak in an tei, Sui luchin kan hmuh lai, A teimi vial nih, Jesuh a kan Khamhtu,\r\n    Zaang an thatter lai, Jesuh kha va or tuah, Lam an hmuhsak lai.</p>\r\n<p><b>CHO: </b>Khamhbawi bawmhnak hna-ngamnak, Zaang thatnak kha va hal tuah, Nangmah kha domht-laih an duh, Lam kha an\r\n    hmuhsak lai.</p>",
        "id": "289",
        "name": "TUKFORHNAK AH TEL HLAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH HE KAN KAL AHCUN</h4> <p>Doh is C</p> <p><b>1. </b>Rel cawk lo tihnung umnak horkuang chungah si seh, Ni tlannak i lungdai in ka um zongah siseh, Fiang tein ka hngalh ko, Muihnak le ceunak ah, Khuazei hmanh ah, Jesuh he ka kal ngam lai.</p> <p><b>CHO: </b>Khuazei hmanhah Jesuh he ka (he ka) kal ngam lai, Amah um ahcun khuazei ka hmanh hi vancung a si, A vai-lamtah putnak nawl cu (nawl cu) dawtnak a si, (a si) Khuazeihmanh ah Jesuh he ka kal ngam lai.</p> <p><b>2. </b>Thet-se rawn kha tan in sual rethei mi hna sinah, Thluachuah lu nunnak bia kha phorh awk a herh ahcun, Khi ka riantuan awkah, Harnak tampi hmanh seh, Khuazei hmanh ah, Jesuh he ka kal ngam lai.</p> <p><b>CHO: </b>Khuazei hmanhah Jesuh he ka (he ka) kal ngam lai, Amah um ahcun khuazei ka hmanh hi vancung a si, A vai-lamtah putnak nawl cu (nawl cu) dawtnak a si, (a si) Khuazeihmanh ah Jesuh he ka kal ngam lai.</p> <p><b>3. </b>Rili ral ah ka hawi nih an rian an tlaih lio ah, Ka umnak ah vailam put ka vo a si ahcun, Amah ka zumh nak cu, Fiang te'n ka langhter lai, Jesuh he cun, khuazei hmanh ah ka um lai.</p> <p><b>CHO: </b>Khuazei hmanhah Jesuh he ka (he ka) kal ngam lai, Amah um ahcun khuazei ka hmanh hi vancung a si, A vai-lamtah putnak nawl cu (nawl cu) dawtnak a si, (a si) Khuazeihmanh ah Jesuh he ka kal ngam lai.</p>",
        "id": "290",
        "name": "JESUH HE KAN KAL AHCUN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TUAN ZUNGZAL KO</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Maw ka hawile zoh tuah ngiatnak, Vancung ah a lang A kan bawmtu a ra te lai, Teinak a nai cang.</p>\r\n<p><b>CHO: </b>\"Ka rat than hlan tiang tuan u,\" Jesuh a kan chimh, Maw Bawipa kan tuan zungzal lai, Na bia kha kan\r\n    zumh.</p>\r\n<p><b>2. </b>Zohhmanh ral tampi an hung lio, Rul-hreu hmai a sa Zaang thawngmi a cheu an ril cang, Kan thawnnak a dai.</p>\r\n<p><b>CHO: </b>\"Ka rat than hlan tiang tuan u,\" Jesuh a kan chimh, Maw Bawipa kan tuan zungzal lai, Na bia kha kan\r\n    zumh.</p>\r\n<p><b>3. </b>Zungzal tei ngiatnak kha zoh tuah, Muko thawng kha ngai Hmai a kan saktu a min in, Ral kha kan tei lai.</p>\r\n<p><b>CHO: </b>\"Ka rat than hlan tiang tuan u,\" Jesuh a kan chimh, Maw Bawipa kan tuan zungzal lai, Na bia kha kan\r\n    zumh.</p>\r\n<p><b>4. </b>Ral dohnak kha a sau ko i, Bawmhnak a nai cang, Kannih Ralbawi a phan deng cang, Lunglawm cio tuah u.</p>\r\n<p><b>CHO: </b>\"Ka rat than hlan tiang tuan u,\" Jesuh a kan chimh, Maw Bawipa kan tuan zungzal lai, Na bia kha kan\r\n    zumh.</p>",
        "id": "291",
        "name": "TUAN ZUNGZAL KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RALKAP HRIAM THA PUMI KA SI</h4> <p>Doh is Bb</p> <p><b>1. </b>Ralkap hriam tha aa putmi ka si caah, Siangpahrang bia thawng kha ka ngai ko lai, Do u law tiah bia thawng ka theih ahcun, Bawipa bochan in ral kha ka doh hna lai.</p> <p><b>CHO: </b>Doh u law, ti thawng kha ngai cio tuah u, Zoh tuah u, zaangchia mi lung a pur cang, Ralkap hriam tha aa putmi ka si ca'h Ka bawipa nih a ka bochan lai ta, Ralkap hriam tha aa putmi ka si ca'h Ka Bawipa nih a ka bochan lai ta.</p> <p><b>2. </b>Ralkap hriam tha aa putmi ka si caah, Ral-hruang chung ah khan hriamtha ka ken lai, Ral an i tuk thawng kha ka theih ahcun, Mahka hin ka um ko, tiah ka chimh hna lai.</p> <p><b>CHO: </b>Doh u law, ti thawng kha ngai cio tuah u, Zoh tuah u, zaangchia mi lung a pur cang, Ralkap hriam tha aa putmi ka si ca'h Ka bawipa nih a ka bochan lai ta, Ralkap hriam tha aa putmi ka si ca'h Ka Bawipa nih a ka bochan lai ta.</p> <p><b>3. </b>Hriam aa putmi ralkap kha ka si caah, Thangthatnak sui luchin cu ka hmuh lai, Ral-hruang kha tha tein ka vel ahcun, Laksawng pek lioah kei zong ka hmuh ve lai.</p> <p><b>CHO: </b>Doh u law, ti thawng kha ngai cio tuah u, Zoh tuah u, zaangchia mi lung a pur cang, Ralkap hriam tha aa putmi ka si ca'h Ka bawipa nih a ka bochan lai ta, Ralkap hriam tha aa putmi ka si ca'h Ka Bawipa nih a ka bochan lai ta.</p>",
        "id": "292",
        "name": "RALKAP HRIAM THA PUMI KA SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH CA THO TUAH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Jesuh ca atu tho tuah, Vailam ralkap vialte, Ngiatnak puan kha va lek tuah, I teiter hin hlah u, Thawnnak\r\n    in an tei dih tiang, Ralkap a hruai hna lai, Ral dihlak an tei tikah, Bawibik a si ngaingai.</p>\r\n<p><b>2. </b>Jesuh ca atu tho tuah, Muko thawng kha ngai tuah, Amah ral kha va do u, Nihin tho law kal tuah, Ral tam\r\n    hmanhseh phang hlah u, Zaangthawnnak in tei u, Zaang thawngmi nan si caah, Ral tam nain tho u.</p>\r\n<p><b>3. </b>Jesuh ca atu tho tuah, Amah thawng lawng tein, Nan zaang nan bochan ahcun, Nan sungh lai kha ruat ko,\r\n    Darphaw, Pathian thawngtha kha, Vaa chon law thlacam tuah, Kahnak rian a um caah, Jesuh ca i tim u.</p>\r\n<p><b>4. </b>Jesuh ca atu tho tuah, Dohnak a sau lai lo, Nihin dohnak thawng nan theih, Thaizing thannak si ko, Ral a\r\n    teimi vialte nih, Sui luchin nan hmuh lai, Nannih nan Bawi Jesuh he, A zungzal nan nung lai.</p>",
        "id": "293",
        "name": "JESUH CA THO TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN PATHIAN A RA LIO</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Bawipa a ratnak sunparnak kha ka mit nih a hmuh cang Thin-hunnak mitsur thei an khonnak hmun kha a naan\r\n    dih cang Tih a nungmi a vainam har nim-tlau kha a chuahter cang, Kan Pathian a ra lio.</p>\r\n<p><b>CHO: </b>Lawm u, Lawm u, Hal-le-lu-jah! Lawm u, Lawm u, Hal-le-lu-jah! Lawm u, Lawm u, Hal-le-lu-jah! Kan Pathian\r\n    a ra lio.</p>\r\n<p><b>2. </b>Riah-nak hmun mei ceu tampi lakah Amah cu ka hmuh i Khi ka laifang ah cun Amah caah biaktheng kha an ser;\r\n    A ceu tuk lo meiinn lak hmanh ah a dinnak ka hmuh khawh, Kan Pathian a ra lio.</p>\r\n<p><b>CHO: </b>Lawm u, Lawm u, Hal-le-lu-jah! Lawm u, Lawm u, Hal-le-lu-jah! Lawm u, Lawm u, Hal-le-lu-jah! Kan Pathian\r\n    a ra lio.</p>\r\n<p><b>3. </b>Muko a tum cang i kir than u, a kan ti bal lai lo Amah biaceih thutdan hmai ah mi lungthin kha a vamh hna\r\n    Maw ka thlarau Amah cu let law ka ke hna i lawm u, Kan Pathian a ra lio.</p>\r\n<p><b>CHO: </b>Lawm u, Lawm u, Hal-le-lu-jah! Lawm u, Lawm u, Hal-le-lu-jah! Lawm u, Lawm u, Hal-le-lu-jah! Kan Pathian\r\n    a ra lio.</p>\r\n<p><b>4. </b>Lily pangpar dawh bangin ram hlapi ah Jesuh a chuak, amah sunparnak nih nang le kei zong kha a kan\r\n    dawhter; Khamh awkah a thih bang mi luatter awkah thi ve u si, Kan Pathian a ra lio.</p>\r\n<p><b>CHO: </b>Lawm u, Lawm u, Hal-le-lu-jah! Lawm u, Lawm u, Hal-le-lu-jah! Lawm u, Lawm u, Hal-le-lu-jah! Kan Pathian\r\n    a ra lio.</p>",
        "id": "294",
        "name": "KAN PATHIAN A RA LIO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RAL MI NAI ZOH TUAH U</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Ral an nai zoh tuah! ngiatnak puan hler u! Sualnak raldohnak Pathian ca, Nan hriam tim tuah u, dir\r\n    thiu-theo ko u, Pathian Bia chungah nan zia bunh tuah.</p>\r\n<p><b>CHO: </b>Tho tuah, Khrihfa, ngiatnak puan dum tuah u, Timh cia ralring in Khrihfa au u, Hmai ah fong u, Ho-sa-na,\r\n    tiah au u, Khrihfabu Ralbawi Jesuh a si.</p>\r\n<p><b>2. </b>Ral he ton duh ah, hmai ah fong chin u, Kannih nih kan tei lai kan hngalh, Kan ral dohnak kha Jesuh ca a\r\n    tha, Bia tha caah kan taang bal lai lo.</p>\r\n<p><b>CHO: </b>Tho tuah, Khrihfa, ngiatnak puan dum tuah u, Timh cia ralring in Khrihfa au u, Hmai ah fong u, Ho-sa-na,\r\n    tiah au u, Khrihfabu Ralbawi Jesuh a si.</p>\r\n<p><b>3. </b>Vancung um kan Pa, run kan ngai ko tuah, Pathian na vel in run kan bawm, Ral a dih tik le, kan tei hna\r\n    tikah, Na teinak lu chin kan i chinh lai.</p>\r\n<p><b>CHO: </b>Tho tuah, Khrihfa, ngiatnak puan dum tuah u, Timh cia ralring in Khrihfa au u, Hmai ah fong u, Ho-sa-na,\r\n    tiah au u, Khrihfabu Ralbawi Jesuh a si.</p>",
        "id": "295",
        "name": "RAL MI NAI ZOH TUAH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH ZUMH CU A NUAM</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Jesuh zumh cu a tha bik ko, A bia bang in zumh a nuam, A biakam chungah i dinh le hngalh cu, Bawipa nih a\r\n    duh.</p>\r\n<p><b>CHO: </b>Jesuh, Jesuh, ka zumhning cu, Lungtak in ka ruat than tawn, Jesuh, Jesuh, mi sung Jesuh, A vel ruangah\r\n    ka zumh chin.</p>\r\n<p><b>2. </b>Jesuh zumh cu a tha hringhran, A thi in a ka tawlnak, Damnak ti thiang ah a ka hnim, Ka zumhnak a tlawm\r\n    na-in.</p>\r\n<p><b>CHO: </b>Jesuh, Jesuh, ka zumhning cu, Lungtak in ka ruat than tawn, Jesuh, Jesuh, mi sung Jesuh, A vel ruangah\r\n    ka zumh chin.</p>\r\n<p><b>3. </b>Jesuh zumh cu a tha taktak, Sual lung-puamnak cu a hloh, Jesuh nih a dawtnak ruangah, Zungzal a ka umpi\r\n    lai.</p>\r\n<p><b>CHO: </b>Jesuh, Jesuh, ka zumhning cu, Lungtak in ka ruat than tawn, Jesuh, Jesuh, mi sung Jesuh, A vel ruangah\r\n    ka zumh chin.</p>\r\n<p><b>4. </b>Ka zumh ca ka lung a lawm khun, Misung Jesuh hawitha bik, Ka sinah a um ti ka hngalh, Zungzal a ka umpi\r\n    lai.</p>\r\n<p><b>CHO: </b>Jesuh, Jesuh, ka zumhning cu, Lungtak in ka ruat than tawn, Jesuh, Jesuh, mi sung Jesuh, A vel ruangah\r\n    ka zumh chin.</p>",
        "id": "296",
        "name": "JESUH ZUMH CU A NUAM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AHODAH BAWIPA A TANH?</h4> <p>Doh is C</p> <p><b>1. </b>Bawipa sin a hodah A tangmi a si, Mi zei dah a bawm lai, Mi dang sawm awkah? Vawlei hi chuah tak in, Ral nan doh lai maw? Bawipa cu a hodah A kalpiak kho lai? Na velngeih auh thawng le, Na zaangfah thawng in. Bawipa na sin kan tang, Nangmah ta kan si.</p> <p><b>2. </b>Sunpar thangthat duh ah, Ralkap kan si lo, Pathian a kan dawt ca'h Ral tei hla kan sa, Kan caah thih a huah, Kannih a kan tlanh, Jesuh nih a kan thim, A sin kan tang lai. Na dawtnak thazang le Na vel thiang thawng in. Bawipa na sin kan tang, Nangmah ta kan si.</p> <p><b>3. </b>Sui le lungvar loin, Jesuh na kan cawk, Na luchin tamhnak ah, Na tlanhmi kan si, Na sin a rami cu, Na thlua-chuahnak in, Nang nih na kan khahter, Na kan luatter fawn. Na kan tlanhnak thawng le Na vel thiang thawng in. Bawipa na sin kan tang, Nangmah ta kan si.</p>",
        "id": "297",
        "name": "AHODAH BAWIPA A TANH?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH, KA VAILAM I PUT IN</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Jesuh ka vailam i put in, Zeizong kaltak in kan zulh, Rethei sifak sihmanh ning law, Nang cu ka ta na si\r\n    cang. Vawlei cung sunpar lianh-ngannak, Kaa ruahchanmi a lo cang, Si-na-seh zeitluk in ka rum, Pathian cu ka ta a\r\n    si.</p>\r\n<p><b>2. </b>Vawlei sunpar, ka kal tak seh, Khamhbawi zong a rak kaltak, Mi lung le hmai nih an ka hlen, Sihmanhseh\r\n    nang cu na ding. Maw ka Pathian, fimnak Bawipa, Ral nih an ka huat zongah, Ka cungah na hmai tlanter law, Zeizong\r\n    te a ceu ko lai.</p>\r\n<p><b>3. </b>Sifah retheih ing hmanhning law, Nangmah kha kan naih chin lai, Harnak zong nih ka tlunh hmanh seh,\r\n    Dinhnak nuam chin ka hmuh lai. Nangmah ka sin na um ahcun, Ngaihchiat nih a ka tei lo, Nang ka sin na um lo ahcun,\r\n    Lawmhnak zong a thahnem lo.</p>\r\n<p><b>4. </b>Vel-ngeihnak in sunparnak ah, Zumh le thlacam in kal tuah, Zungzal vancung khua na phak tiang, Bawipa kut\r\n    nih an hruai lai. Leicung na rian a dih zau lai; Na khual-tlawnnak ni hna zong; Ruahchannak cu lunglawmhnak ah,\r\n    Thlacam cu thangthatnak ah.</p>",
        "id": "298",
        "name": "JESUH, KA VAILAM I PUT IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA CAAN NA KUT CHUNGAH AN UM</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Ka caan na kut chungah umter ka duh Pathian, Nunnak hawikom thlarau tiangin zohkhenh awkah kan pek.</p>\r\n<p><b>2. </b>Ka caan na kut chungah um seh zei caan paoh ah, Lawmh le ngaihchiat zei caan paoh kha, rem in na hmuh theo\r\n    lai.</p>\r\n<p><b>3. </b>Ka caan na kut chungah an um ka phang lai lo, Na fa kei hi mit-thli tla in na ka chia bal lai lo.</p>\r\n<p><b>4. </b>Ka caan na kut chungah an um ca nang kan zumh; Thih hnu na orh-lei ah um in zungzal ka din cang lai.</p>",
        "id": "299",
        "name": "KA CAAN NA KUT CHUNGAH AN UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NANGMAH DAWT CHIN KA DUH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Nangmah dawt chin ka duh, Ka Bawi Jesuh. Keimah thlacamnak kha ngaihter kan duh; Ka bia ka ngaihpiak tuah,\r\n    \"Nangmah dawt deuh kan duh, Ka Bawi Jesuh, Dawt deuh kan duh.\"</p>\r\n<p><b>2. </b>Vawlei cung hna-ngamnak ka rak kawl tawn, Atu nang lawng kan kawl tha bik ka pe, Zungzal ka thlacamnak;\r\n    \"Nangmah dawt chin siseh, Ka Bawi Jesuh, Dawt deuh kan duh.\"</p>\r\n<p><b>3. </b>Sifah huat hmanh ninglaw, Ka zei poi lo, Na thlahmi paoh ka duh, tha bik pe ko. Hi bangin kan sak lai:\r\n    \"Nangmah dawt deuh kan duh, Ka Bawi Jesuh, Dawt deuh kan duh.\"</p>\r\n<p><b>4. </b>Ka thaw chuah dongh tikah, Kan thangthat lai, Ka chim hmanung bik kha, Hi bia si lai, Atu tiang thla ka\r\n    cam, Dawt chin lung ka pe tuah, Ka Bawi Jesuh, Dawt deuh kan duh.</p>",
        "id": "300",
        "name": "NANGMAH DAWT CHIN KA DUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA CAAN THA TEIN HMANG TUAH</h4> <p>Doh is F</p> <p><b>1. </b>Na caan tha te'n hmang tuah, Na Bawipa chawn tuah, Amah cu zungzal in, Fek tein zum tuah, Pathian fale khawm hna, Zaang tlawmmi bawm hna, A van thluachuahnak cu, Na hmuh khawh nakhnga.</p> <p><b>2. </b>Na caan tha te'n hmang tuah, Vawlei a dong lio, Na caan sung vialte cu, Jesuh he hmang ko, Jesuh bang si awkah, Amah i zohchun, Na tuahmi rian kipah, Amah bantukin.</p> <p><b>3. </b>Na caan tha te'n hmang tuah, Na hruaitu siseh, A sinah zeitik hmanh, Then loin um tuah Lawmh le ngaihchiat zongah, Amah cu zul ko, Jesuh lei kha zoh law, A bia kha zum ko.</p> <p><b>4. </b>Na caan tha te'n hmang tuah, Dai tein um tuah, Na ruahmi thil kip kha, Amah nawl siseh, Nunnak tikhor ah khin, Nangmah an hruai lai, Van zongah khin a rian, Na tuan khawhnak lai.</p>",
        "id": "301",
        "name": "NA CAAN THA TEIN HMANG TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLACAM HI KAN LUNGCHUNG DUHNAK</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Thlacam hi kan lungchung duhnak, Chimmi he chim lo he, Kan lungchung i a lummi mei, A ummi cu a si.</p>\r\n<p><b>2. </b>Thlacam hi ngaih-chiatnak thil phorh Mit-thli tlak hi a si; Cunglei kan mit nih a zoh i, Pathian lawng a\r\n    nai hih.</p>\r\n<p><b>3. </b>Thlacam hi a fawi bikmi holh, Ngakchia hmanh chim khawh mi, A sang bik Bawipa sin tiang zong, A phan khomi\r\n    a si.</p>\r\n<p><b>4. </b>Nangmah in Pathian sin kan phan, Nunnak, Biatak le Lam, Thlacam lam kha nang nih na zulh; Bawipa, kan\r\n    cawnpiak ve.</p>",
        "id": "302",
        "name": "THLACAM HI KAN LUNGCHUNG DUHNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA NAIHTER KA PATHIAN</h4> <p>Doh is G</p> <p><b>1. </b>Nangmah naih deuh ka Pa, Keimah ka duh, Na vailam tahnak kha Van lam a si, Keimah hlasak dihlak, Nangmah naih deuh a si. Nangmah naih chin, ka Pa, Keimah ka duh.</p> <p><b>2. </b>Lam palhmi Jakob bang, Ni a tla cang, Khuamui ka ih tikah, Chantling ah lung, Ka mang in keimah nih, Naih deuh ka duh ka ti, Nangmah naih deuh ka Pa, Keimah ka duh.</p> <p><b>3. </b>Vancung lam langhter tuah, Hlei kainak ah, Na ka pekmi vialte, Zaang na fah ca'h, Van in kut an kan zaoh, Keimah naih deuhter ko. Na ka naih deuh lioah, Ka duh ka Pa.</p> <p><b>4. </b>Keimah kaa hlauh tikah, Kan biak te lai, Sifahnak kha a dih, Hla ka sa lai, Atu sifahnak ca, Nangmah naih deuh ka Pa, Nangmah naih chin ka duh, Ka duh ngaingai.</p>",
        "id": "303",
        "name": "KA NAIHTER KA PATHIAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LA LANHTAK HLAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ka Khamhtu Bawi ka lanhtak hlah Ka aunak ngai tuah, Midang zong na auh tik hna ah, Ka hrial sual hin hlah.</p>\r\n<p><b>CHO: </b>Mawi Bawi Jesuh ka aunak ngai tuah. Midang kha na auh tik hna ah, ka lanhtak hin hlah.</p>\r\n<p><b>2. </b>Na dawt thutnak hmai rat ka duh, Lung daihnak ka pe, Ngaihchih lung in kan biak lioah, Zumh fehnak ka pe.</p>\r\n<p><b>CHO: </b>Mawi Bawi Jesuh ka aunak ngai tuah. Midang kha na auh tik hna ah, ka lanhtak hin hlah.</p>\r\n<p><b>3. </b>Na thatnak lawng kha ka bochan, Na hmaihmuh ka zuam, Thlarau lungrawk mi damter ko, Na vel in kan khamh.</p>\r\n<p><b>CHO: </b>Mawi Bawi Jesuh ka aunak ngai tuah. Midang kha na auh tik hna ah, ka lanhtak hin hlah.</p>\r\n<p><b>4. </b>Ka hnangam tertu na si ko, Nun hmunhnak na si, Nangmah hlei ah keimah nih cun, Bochan awk um lo.</p>\r\n<p><b>CHO: </b>Mawi Bawi Jesuh ka aunak ngai tuah. Midang kha na auh tik hna ah, ka lanhtak hin hlah.</p>",
        "id": "304",
        "name": "LA LANHTAK HLAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KEIMAH ZONG</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Khamhbawi laksawng a tampi kha Ruah bantukin a sur ko, Vawlei car kha a hrin tikah Keimah zong ka surhter\r\n    tuah.</p>\r\n<p><b>CHO: </b>Keimah zong, keimah zong, keimah zong ka surter tuah. 2. Pathian ka Pa, ka lanhtak hlah, Keimah lung kha\r\n    tawi hmanhseh; Dantat awk kha tlak hmanhning law, Keimah kha ka ruat rih ko.</p>\r\n<p><b>3. </b>A kan Khamhbawi ka lanhtak hlah, Nangmah sinah thuh ka duh, Na thachin hmuh ka duh tuk cang, Na duhnak\r\n    bang ka ser ko.</p>\r\n<p><b>CHO: </b>Keimah zong, keimah zong, keimah zong ka surter tuah. 2. Pathian ka Pa, ka lanhtak hlah, Keimah lung kha\r\n    tawi hmanhseh; Dantat awk kha tlak hmanhning law, Keimah kha ka ruat rih ko.</p>\r\n<p><b>4. </b>Maw Thlarau rak ka lanhtak hlah, Mitcaw mi khua hmuhter tuah, Jesuh thachin ka hmuhsak tuah, Keimah cungah\r\n    rung ceu ko.</p>\r\n<p><b>CHO: </b>Keimah zong, keimah zong, keimah zong ka surter tuah. 2. Pathian ka Pa, ka lanhtak hlah, Keimah lung kha\r\n    tawi hmanhseh; Dantat awk kha tlak hmanhning law, Keimah kha ka ruat rih ko.</p>",
        "id": "305",
        "name": "KEIMAH ZONG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AA DAWHMI THLA CAMNAK DUM</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Jesuh a kan hngahnak dum cu a um, Aa dawh ngaingai mi hmun cu a um, Bawipa a um ca zeizong te a ceu, Aa\r\n    dawhmi thlacamnak dum a si.</p>\r\n<p><b>CHO: </b>Maw aa dawhmi thlacamnak dum, thlacamnak dum, Maw aa dawh bikmi thlacamnak dum, Khamhtu a kan hngah ko,\r\n    Kutka cu a hun cang, Khi aa dawhmi thlacamnak dum ah.</p>\r\n<p><b>2. </b>Jesuh a kan hngahnak dum cu a um, Thilrit he kan luhnak dum a si, Bawipa hmurka in hnemhnak bia ka theih,\r\n    Aa dawhmi thlacamnak dum chungah.</p>\r\n<p><b>CHO: </b>Maw aa dawhmi thlacamnak dum, thlacamnak dum, Maw aa dawh bikmi thlacamnak dum, Khamhtu a kan hngah ko,\r\n    Kutka cu a hun cang, Khi aa dawhmi thlacamnak dum ah.</p>\r\n<p><b>3. </b>Jesuh a kan hngahnak dum cu a um, Amah ton awkah nang zong an auh, A hmai ah kun in thluachuahnak co tuah,\r\n    Aa dawhmi thlacamnak dum chungah.</p>\r\n<p><b>CHO: </b>Maw aa dawhmi thlacamnak dum, thlacamnak dum, Maw aa dawh bikmi thlacamnak dum, Khamhtu a kan hngah ko,\r\n    Kutka cu a hun cang, Khi aa dawhmi thlacamnak dum ah.</p>",
        "id": "306",
        "name": "AA DAWHMI THLA CAMNAK DUM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH KAN HAWI THA BIK A SI</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Kannih kan sual sifah ingtu, Kan hawi Jesuh a si lai, Pathian sinah kan duh vialte Hal ah cun a tha dah\r\n    ngai, Hna-ngamnak tampi um loin, Fahnak ngaihchiatnak kan huah, Kan duh vialte Pathian sinah, Hal loin kan um caah.</p>\r\n<p><b>2. </b>Fahnak le tukforh kan huah maw, Hna-hnawhnak in kan um dah? Kan lung belte rawk hin hlah seh, Pathian\r\n    sinah thlacam u, Sifah huahnak kha an chanhtu, Hawi khuazei ah na hmu maw, Kan ngaih-chiatnak kha Jesuh hngal,\r\n    Pathian sinah thlacam u.</p>\r\n<p><b>3. </b>Zaang ngei lomi kan si cio maw, Kan thil kha a rit tuk dah? Asungmi kan Khamhtu Jesuh, A ngaih lai, kan\r\n    hal tikah. Kan hawi nih an kan hlawt ahcun, Pathian Bawi sinah chim u, Akut in an lak an pom lai, Hna-ngamnak kan\r\n    hmuh lai ta.</p>",
        "id": "307",
        "name": "JESUH KAN HAWI THA BIK A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN CU ZUM TUAH</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Pathian zum u, dawtmi fa hna, Zum tuah, Amah nih lam an hruai lai, Pathian zum u, Thluachuahnak ca, Atu an\r\n    pek hna lai.</p>\r\n<p><b>CHO: </b>Zum u, Pathian bia bangin, Nifatin Amah kha zoh u, Pathian kha zum u, Pathian kha zum u, Nan lam hruaitu\r\n    cu a si.</p>\r\n<p><b>2. </b>Pathian zum u, rawhnak a nai, Zum tuah, A vel-ngeihnak na hmuh lai, Pathian zum u, Harnak caan ah, A thla\r\n    in an huh lai.</p>\r\n<p><b>CHO: </b>Zum u, Pathian bia bangin, Nifatin Amah kha zoh u, Pathian kha zum u, Pathian kha zum u, Nan lam hruaitu\r\n    cu a si.</p>\r\n<p><b>3. </b>Pathian zum u, ngaihchiat zongah, Zum tuah, Lungfahnak a daihter lai, Pathian zum u, Thilrih zongah,\r\n    Thazang thar hmuh awkah.</p>\r\n<p><b>CHO: </b>Zum u, Pathian bia bangin, Nifatin Amah kha zoh u, Pathian kha zum u, Pathian kha zum u, Nan lam hruaitu\r\n    cu a si.</p>\r\n<p><b>4. </b>Pathian zum u, Khual lam zongah Zum u, Vel le laksawng nan hmuh lai, Zum u, A aunak cu ngai u, Vancung i\r\n    ton awk ah.</p>\r\n<p><b>CHO: </b>Zum u, Pathian bia bangin, Nifatin Amah kha zoh u, Pathian kha zum u, Pathian kha zum u, Nan lam hruaitu\r\n    cu a si.</p>",
        "id": "308",
        "name": "PATHIAN CU ZUM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUNGZAL NANGMAH KAN HERH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Zungzal Nangmah kan herh, Nun tha Bawipa, Nangmah aw nem lawng nih, Ka hna-ngamter.</p>\r\n<p><b>CHO: </b>Kan herh ko, maw kan herh ko, A zungzal kan herh ko, Atu thluachuah ka pe tuah, Na sin ka ra.</p>\r\n<p><b>2. </b>Zungzal Nangmah kan herh, Run ka naih tuah, Tukforh ka in tikah, A ka tei lo.</p>\r\n<p><b>CHO: </b>Kan herh ko, maw kan herh ko, A zungzal kan herh ko, Atu thluachuah ka pe tuah, Na sin ka ra.</p>\r\n<p><b>3. </b>Zungzal Nangmah kan herh, Lawmh caan zongah, Nangmah tel lo in cun, Nun tha-hnem lo.</p>\r\n<p><b>CHO: </b>Kan herh ko, maw kan herh ko, A zungzal kan herh ko, Atu thluachuah ka pe tuah, Na sin ka ra.</p>\r\n<p><b>4. </b>Zungzal Nangmah kan herh, Na duhnak cu Nifa ka tuah nakhnga, Ka cawnpiak tuah.</p>\r\n<p><b>CHO: </b>Kan herh ko, maw kan herh ko, A zungzal kan herh ko, Atu thluachuah ka pe tuah, Na sin ka ra.</p>\r\n<p><b>5. </b>Zungzal Nangmah kan herh, A Thiang bikmi, Na mi ka siter tuah, Maw Pathian Fa.</p>\r\n<p><b>CHO: </b>Kan herh ko, maw kan herh ko, A zungzal kan herh ko, Atu thluachuah ka pe tuah, Na sin ka ra.</p>",
        "id": "309",
        "name": "ZUNGZAL NANGMAH KAN HERH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZAHOVA PATHIAN SINAH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Zungzal a nungmi ka Pathian Mi dang nak in kan dawt deuh, Vancung lampi ka kal lioah, Bawipa sinah kal ka\r\n    duh. Na sinah, na sinah, na sinah, na sinah, Vancung lamah ka kal lioah, Nangmah sinah kal ka duh.</p>\r\n<p><b>2. </b>Vawleicung lawmhnak le rumnak Sunparnak kha kaan hal lo, Nangmah sinah ka um lioah, Lunglawmhnak in ka\r\n    tuan lai. Na sinah, na sinah, na sinah, na sinah, Nangmah sinah ka um lioah, Lunglawm in ka tuan theo lai.</p>\r\n<p><b>3. </b>Fing le tlang khua-muihnak chungin, Tiva ral ah kan thlah law, A zungzal nunnak innka ah, Nangmah he ka\r\n    luhter tuah. Na sinah, na sinah, na sinah, na sinah, Zungzal nunnak khua tha chungah, Ka lut lai, Bawipa sinah.</p>",
        "id": "310",
        "name": "ZAHOVA PATHIAN SINAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA DUHNAK BANG SI KO SEH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Maw ka Bawipa nangmah sinah, A harnak lam ka kal lioah, Ka zohkhenh tuah law, Na duhnak bang si ko seh.</p>\r\n<p><b>CHO: </b>Nangmah duhnak bang si ko seh, Hi bangin chim awk ka cawnpiak, Maw ka Bawipa.</p>\r\n<p><b>2. </b>Ngaihchiat ka in, ka kawi a thi, Si-seh na bia ka ruah lioah, Hi bang ka chim lai, Na duhnak bang si ko\r\n    seh.</p>\r\n<p><b>CHO: </b>Nangmah duhnak bang si ko seh, Hi bangin chim awk ka cawnpiak, Maw ka Bawipa.</p>\r\n<p><b>3. </b>Ka lungthin hi thluachuah pe law, Na Thlarau umnak ah ser tuah, Hi bang ka chim lai, Na duhnak bang si ko\r\n    seh.</p>\r\n<p><b>CHO: </b>Nangmah duhnak bang si ko seh, Hi bangin chim awk ka cawnpiak, Maw ka Bawipa.</p>",
        "id": "311",
        "name": "NA DUHNAK BANG SI KO SEH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NIFATIN, NGOL LOIN</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ka nunnak in sung deuhmi, Nangmah pawngah um ka duh chin rih, Na thi thiang in ka tawl law, Nangmah\r\n    pawngah ka umter ko tuah.</p>\r\n<p><b>CHO: </b>Nifatin, (fatin) ngol loin (loin) Na thi thiang ka ruahter tuah, Nun tha dawtnak hri tha in, Keimah kha\r\n    run ka temtawn ko tuah.</p>\r\n<p><b>2. </b>Hi thlen hmang vawlei cungah, Nunnemnak in va ka kalpituah, Nangmah kha kan bochan ca, Ka palh bal lai lo\r\n    keimah lam kha.</p>\r\n<p><b>CHO: </b>Nifatin, (fatin) ngol loin (loin) Na thi thiang ka ruahter tuah, Nun tha dawtnak hri tha in, Keimah kha\r\n    run ka temtawn ko tuah.</p>\r\n<p><b>3. </b>Ka thih caan a tlun tiangin, Nangmah kha dawt chin kan duh, Pathian, Vancung khua ka hung tlun tiang, Na\r\n    dawtnak he ka then hlah, Pathian.</p>\r\n<p><b>CHO: </b>Nifatin, (fatin) ngol loin (loin) Na thi thiang ka ruahter tuah, Nun tha dawtnak hri tha in, Keimah kha\r\n    run ka temtawn ko tuah.</p>",
        "id": "312",
        "name": "NIFATIN, NGOL LOIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NANG CA THLA KAN CAMPIAK</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Khamhbawi nih keimah ca thla a ka campiak, Vawleicung ka kawi nak in a ka dawt deuh, Amah nih dawtnak in a\r\n    ka zoh zungzal i, Nangmah an Khamhtu si ve seh ka duh ko.</p>\r\n<p><b>CHO: </b>Nang ca thla kan campiak, Nang ca thla kan campiak, Nang ca thla kan campiak, Nang ca thla kan cam.</p>\r\n<p><b>2. </b>Zungzal nunnak a ka pe tu Pa ka ngei, Zungzal a hmunmi nunnak a sung bik kha, A mah sin vancung ram ah\r\n    khin a kan kawh lai, Keimah he na kal khawh nakhnga thla ka cam.</p>\r\n<p><b>CHO: </b>Nang ca thla kan campiak, Nang ca thla kan campiak, Nang ca thla kan campiak, Nang ca thla kan cam.</p>\r\n<p><b>3. </b>Ka ngeih laimi puan kha aa dawh bik a si, Vancung khua ka phak tikah ka co theu lai, Lawmhnak in ka co\r\n    tikah nangmah zong nih khan, Na co ve ah cun ka lung aa lawm chin lai.</p>\r\n<p><b>CHO: </b>Nang ca thla kan campiak, Nang ca thla kan campiak, Nang ca thla kan campiak, Nang ca thla kan cam.</p>\r\n<p><b>4. </b>Tiva thuk bik bangin daihnak kha ka ngei; Vawlei si-that a duhmi nih an sung lai; Hi daihnak cu vawlei mi\r\n    nih an hngal rih lo. Keimah Khamhbawi kha hngalh na duh ve lo maw?</p>\r\n<p><b>CHO: </b>Nang ca thla kan campiak, Nang ca thla kan campiak, Nang ca thla kan campiak, Nang ca thla kan cam.</p>",
        "id": "313",
        "name": "NANG CA THLA KAN CAMPIAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLACAMNAK CAAN LAWMHNAK A SI</h4> <p>Doh is D</p> <p><b>1. </b>Thlacamnak caan lawmhnak a si, Ka lung hnahnawh a um tikah, Ka Pa vancung thutnak hmaiah, Ka duhmi kha ka hal ko lai, Ka ngaih a chia, lawmhnak um hlah, Thla ka cam ca hnangam ka hmuh, Thlacamnak caan a um than ca, Tuk-forhnak in keimah ka luat.</p> <p><b>2. </b>Thlacam nak caan lawmhnak a si, Na thla in na sinah ka zuang, Ka duhnak vialte a hngalh ca'h, Vancung kan Pa ke-hram ka phan, Amah hih, \"Ka sinah ra tuah, Ka bia zum law, hngatchan,\" a ti. Ka lung retheih nak vialte cu, Amah cungah khan ka chuan lai.</p> <p><b>3. </b>Thlacamnak caan thlacamnak caan, Na hna-ngamnak ka hmuhter tuah, Pis-gah tlangpar in ka inn cu, Ka cuanh i khi ka'h ka zuan tiang, Hi pumsa puan bantuk simi, Hi vawlei ah ka kaltak lai, Pathian sinah ka kal caah, Thlacam caan cu ka kaltak lai.</p>",
        "id": "314",
        "name": "THLACAMNAK CAAN LAWMHNAK A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLACAM CAAN DAIHNAK A SI</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Thlacam caan daihnak a si, A hmai kan kun lioah, Jesuh kan hawitha Khamhtu sin kan rat tikah, Zumhnak he\r\n    kan naih ahcun, A khamhnak co awkah, Maw zeitluk hnemhnak a si, Zeitluk thlum dah a si.</p>\r\n<p><b>CHO: </b>Thlacam caan daihnak! Thlacam caan daihnak, Maw zeitluk hnemhnak a si, Zeitluk thlum dah a si.</p>\r\n<p><b>2. </b>Thlacam caan daihnak a si, Khamhtu a nai lioah, A fale nih a zaangfahnak kan theih tikah, Kan lung thilrit\r\n    vialte cu, A sin kan thumh tikah, Maw zeitluk hnemhnak a si, Zeitluk thlum dah a si.</p>\r\n<p><b>CHO: </b>Thlacam caan daihnak! Thlacam caan daihnak, Maw zeitluk hnemhnak a si, Zeitluk thlum dah a si.</p>\r\n<p><b>3. </b>Thlacam caan daihnak a si, Harnak kan ton tikah, Kan ngaihchiatnak cu Bawipa sin kan phuan lioah, A\r\n    zaangfahnak thinlung he, Phannak a hloh tikah, Maw zeitluk hnemhnak a si, Zeitluk thlum dah a si.</p>\r\n<p><b>CHO: </b>Thlacam caan daihnak! Thlacam caan daihnak, Maw zeitluk hnemhnak a si, Zeitluk thlum dah a si.</p>\r\n<p><b>4. </b>Thlacam caan daihnak a si, Amah bochan caah, Thlua-chuahnak kan herh bikmi cu kan hmuh theo lai Kan\r\n    zumhnak a tlin tikah, thilrit kan thumh dih lai, Maw zeitluk hnemhnak a si, zeitluk thlum dah a si.</p>\r\n<p><b>CHO: </b>Thlacam caan daihnak! Thlacam caan daihnak, Maw zeitluk hnemhnak a si, Zeitluk thlum dah a si.</p>",
        "id": "315",
        "name": "THLACAM CAAN DAIHNAK A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TAMH LO TEIN HNGAK KO</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Ngaihchiat thabatnak pinlei ah, Re-theimi dinhnak inn a um, Thlennak um ti lo inn ah khin, Phanh duh lo\r\n    hodah a um hnga?</p>\r\n<p><b>CHO: </b>Hngak ko, (hngak ko) tamh lo tein hngak ko u, Hngak ko, (hngak ko) tamh lo tein hngak ko u, Hngak ko\r\n    (hngak ko) hngak ko, (hngak ko) tamh lo tein hngak ko.</p>\r\n<p><b>2. </b>Vawlei thil kha rit hmanhsehlaw, nang kha vancung a tha inn ah, Ruah-channak in na phan sawk lai, Tamh hin\r\n    lo tein hngak ko tuah.</p>\r\n<p><b>CHO: </b>Hngak ko, (hngak ko) tamh lo tein hngak ko u, Hngak ko, (hngak ko) tamh lo tein hngak ko u, Hngak ko\r\n    (hngak ko) hngak ko, (hngak ko) tamh lo tein hngak ko.</p>\r\n<p><b>3. </b>Na lam ah hling um hmanhsehlaw, Hling luchin chinhmi kha ruat tuah, Nangmah ngaih-chiatnak tam ahcun,\r\n    Jesuh ngaih-chiatnak kha ruat tuah.</p>\r\n<p><b>CHO: </b>Hngak ko, (hngak ko) tamh lo tein hngak ko u, Hngak ko, (hngak ko) tamh lo tein hngak ko u, Hngak ko\r\n    (hngak ko) hngak ko, (hngak ko) tamh lo tein hngak ko.</p>\r\n<p><b>4. </b>Na rethei hmanhsehlaw tuan tuah, Na hmuh lo tikah lung rawk hlah; Awlnak ni kha a nai ko cang, Tamh hin lo\r\n    tein hngak ko tuah.</p>\r\n<p><b>CHO: </b>Hngak ko, (hngak ko) tamh lo tein hngak ko u, Hngak ko, (hngak ko) tamh lo tein hngak ko u, Hngak ko\r\n    (hngak ko) hngak ko, (hngak ko) tamh lo tein hngak ko.</p>",
        "id": "316",
        "name": "TAMH LO TEIN HNGAK KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHBAWI RUN KA NGAI TUAH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Khamhbawi run ka ngai tuah, Nangmah sin ka naih, Ka leiba cham awkah, Nangmah na thi cang, Na min tha ka\r\n    zumh tikah, Sual thlahnak kha ka hmuh cang, Nangmah kha zumh awkah Bawipa sin ka naih.</p>\r\n<p><b>2. </b>Khamhbawi run ka ngai tuah, Zaangfahnak kan hal, A zungzal ka khamh ko, Phannak daihter tuah, Na biakamnak\r\n    kha ka zumh, Tha chin kha na ka pek lai, Khamhtu Bawipa Pathian Nang sin thla ka cam.</p>\r\n<p><b>3. </b>Khamhbawi ka daw ko tuah, Keimah ka la tuah, Keimah lawng vawlei ah, Ka kaltak hin hlah, Ka lam kha run\r\n    ceuter tuah, Na ceunak ka velchum ah, Nangmah nih ceuter tuah, Maw ka Khamhtu Bawi.</p>\r\n<p><b>4. </b>Maw Bawipa ka thup tuah, Na sin ka chia ko; Riantuan na lim hlan tiang, Lam ka hmuhsak tuah, Khi tikah\r\n    lunglawmhnak hla, Ka sak lai, vancung khua ah, Khika khin Bawipa he, Zungzal um ka duh.</p>",
        "id": "317",
        "name": "KHAMHBAWI RUN KA NGAI TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HALLELUJAH! A DIH</h4> <p>Doh is G</p> <p><b>1. </b>A Fa Bawi Jesuh a zummi a dihlak kha, Pathian khamhnak lam a hun lai mi zapi ca'h.</p> <p><b>CHO: </b>Hal-le-lu-jah! Jesuh kha ka zumh ko. Pathian Fa Bawi Jesuh thi in a kan khamh cang! Hal-le-lu-jah! a dih, Jesuh kha ka zumh ko; Pathian Fa Bawi Jesuh thi in a kan Khamh cang.</p> <p><b>2. </b>Lam nih a har lai, tih awk um ko hmanhsehlaw, Ka Bawi Jesuh Khrih nih a ka zohkhenh sawk lai.</p> <p><b>CHO: </b>Hal-le-lu-jah! Jesuh kha ka zumh ko. Pathian Fa Bawi Jesuh thi in a kan khamh cang! Hal-le-lu-jah! a dih, Jesuh kha ka zumh ko; Pathian Fa Bawi Jesuh thi in a kan Khamh cang.</p> <p><b>3. </b>Ka dawtmi a tampi vancung ah an kal cang, Pathian inn chungah hi hla kha an nih an sa.</p> <p><b>CHO: </b>Hal-le-lu-jah! Jesuh kha ka zumh ko. Pathian Fa Bawi Jesuh thi in a kan khamh cang! Hal-le-lu-jah! a dih, Jesuh kha ka zumh ko; Pathian Fa Bawi Jesuh thi in a kan Khamh cang.</p> <p><b>4. </b>Ngakchia a tampi Pathian hmai-ka ah an dir, Teinak hla an sa i Bawipa kha an lawmh ko.</p> <p><b>CHO: </b>Hal-le-lu-jah! Jesuh kha ka zumh ko. Pathian Fa Bawi Jesuh thi in a kan khamh cang! Hal-le-lu-jah! a dih, Jesuh kha ka zumh ko; Pathian Fa Bawi Jesuh thi in a kan Khamh cang.</p> <p><b>5. </b>Sui phahmi lampi i hla an sak lioah khan, Khuazing kar-hlangtu le Siangpahrang kha ka hmuh.</p> <p><b>CHO: </b>Hal-le-lu-jah! Jesuh kha ka zumh ko. Pathian Fa Bawi Jesuh thi in a kan khamh cang! Hal-le-lu-jah! a dih, Jesuh kha ka zumh ko; Pathian Fa Bawi Jesuh thi in a kan Khamh cang.</p> <p><b>6. </b>Khi hla an saknak kaa chungah nangmah le keimah, Bawi Jesuh thangthatnak hla zungzal sa u si.</p> <p><b>CHO: </b>Hal-le-lu-jah! Jesuh kha ka zumh ko. Pathian Fa Bawi Jesuh thi in a kan khamh cang! Hal-le-lu-jah! a dih, Jesuh kha ka zumh ko; Pathian Fa Bawi Jesuh thi in a kan Khamh cang.</p>",
        "id": "318",
        "name": "HALLELUJAH! A DIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VANCUNGMI NIH AN LAK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Mirum pa innka hram pawngah a thu i, La-za-ruh cu a thi dengmang i, Vawlei sifah re-theihnak kha a in\r\n    cang, A thih hnuah lunglawmhnak a hmuh.</p>\r\n<p><b>CHO: </b>Lawmhnak chungah khan vancungmi nih an lak, Vancung khua ah hlasak thawng a khat, Vancung sunparnak ah\r\n    Khamhbawi nih a lak, A dawtmi hna sinah a kai cang.</p>\r\n<p><b>2. </b>Vawlei sifah in hnu ah kan thih ahcun, Kannih vialte kan lung aa lawm lai, Vawlei cung nunnak kha thilrit\r\n    phorh bantuk, Ngaih-chiatnak mitthli tlaknak a si.</p>\r\n<p><b>CHO: </b>Lawmhnak chungah khan vancungmi nih an lak, Vancung khua ah hlasak thawng a khat, Vancung sunparnak ah\r\n    Khamhbawi nih a lak, A dawtmi hna sinah a kai cang.</p>\r\n<p><b>3. </b>Jesuh hnu zulmi nih liam hmanh hna sehlaw, A sungmi hlawn vancung khua a um, Tukforh awlok-chonnak kha kan\r\n    kal tak lai, Thlennak caan ah kan lung a lawm lai.</p>\r\n<p><b>CHO: </b>Lawmhnak chungah khan vancungmi nih an lak, Vancung khua ah hlasak thawng a khat, Vancung sunparnak ah\r\n    Khamhbawi nih a lak, A dawtmi hna sinah a kai cang.</p>\r\n<p><b>4. </b>Pathian umnak leiah hmaiah fong chin tuah, Na fimnak kha Jesuh ca hmang tuah, Na tuannak tlawm hmanhseh,\r\n    laksawng a tam lai, Vailam put in luchin naa chinh lai.</p>\r\n<p><b>CHO: </b>Lawmhnak chungah khan vancungmi nih an lak, Vancung khua ah hlasak thawng a khat, Vancung sunparnak ah\r\n    Khamhbawi nih a lak, A dawtmi hna sinah a kai cang.</p>",
        "id": "319",
        "name": "VANCUNGMI NIH AN LAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RUAHCHANNAK LUNGPI</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Ka ruahchannak a hram a fek, Jesuh Khrih thi lawng in a si, Ka bochan dang a um ti lo, Jesuh a min lawng\r\n    in ka tei.</p>\r\n<p><b>CHO: </b>Lungfek in Jesuh ka bochan, A dang bochan awk a um lo, A dang bochan awk a um lo.</p>\r\n<p><b>2. </b>A mithmai ceu mui nih a phenh, A zaangfahnak kaa bochan lai, Thlichia hrang tilet tho hmanhseh, Ka\r\n    hngatchannak Bawipa a si.</p>\r\n<p><b>CHO: </b>Lungfek in Jesuh ka bochan, A dang bochan awk a um lo, A dang bochan awk a um lo.</p>\r\n<p><b>3. </b>A biakam bangin a thi cang, Phannak kip ah kaa bochan lai, Ka velchum vial a rawh tikah Ka bochannak Jesuh\r\n    Bawipa.</p>\r\n<p><b>CHO: </b>Lungfek in Jesuh ka bochan, A dang bochan awk a um lo, A dang bochan awk a um lo.</p>\r\n<p><b>4. </b>Muko thawng he a tum tikah, A hmaika ah ka dir te lai; A dinnak in kaa thuamh tikah, Sualnak loin ka um te\r\n    lai.</p>\r\n<p><b>CHO: </b>Lungfek in Jesuh ka bochan, A dang bochan awk a um lo, A dang bochan awk a um lo.</p>",
        "id": "320",
        "name": "RUAHCHANNAK LUNGPI (A/B)",
        "nameb": "1"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN BIAKAM CUNGAH KA DIR</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Bawi Jesuh biakamnak a ngaite ka zumh, A zungzal in Amah kha ka thangthat lai, Amah min lian zungzal seh\r\n    tiah ka chim lai, A biakamnak kha ka bochan lai.</p>\r\n<p><b>CHO: </b>Zumh in (Zumh in um ning, in um ning) um ning (Zum in um ning, in um ning) Ka Khamhbawi Pathian\r\n    biakamnak kha ka bochan; (kha ka bochan;) Zumh in (Zumh in um ning, in um ning), um ning (Zumh in um ning, in um\r\n    ning), Ka Khamhbawi Pathian biakamnak ka zum.</p>\r\n<p><b>2. </b>A rawk kho bal lo biakamnak kha ka zumh, Tukforhnak a tampi kha ka ing nain, Zungzal nungmi Pathian bia in\r\n    ka tei lai, Pathian biakamnak cung ah ka dir.</p>\r\n<p><b>CHO: </b>Zumh in (Zumh in um ning, in um ning) um ning (Zum in um ning, in um ning) Ka Khamhbawi Pathian\r\n    biakamnak kha ka bochan; (kha ka bochan;) Zumh in (Zumh in um ning, in um ning), um ning (Zumh in um ning, in um\r\n    ning), Ka Khamhbawi Pathian biakamnak ka zum.</p>\r\n<p><b>3. </b>Khamhbawi Jesuh na biakamnak kha ka zumh, Nangmah dawtnak hri in ka tem zungzal law, nangmah biakam nak cu\r\n    ka bochan caah, Thiang Thlarau he Satan ka tei lai.</p>\r\n<p><b>CHO: </b>Zumh in (Zumh in um ning, in um ning) um ning (Zum in um ning, in um ning) Ka Khamhbawi Pathian\r\n    biakamnak kha ka bochan; (kha ka bochan;) Zumh in (Zumh in um ning, in um ning), um ning (Zumh in um ning, in um\r\n    ning), Ka Khamhbawi Pathian biakamnak ka zum.</p>\r\n<p><b>4. </b>A fek bikmi biakamnak chungah ka dir, Thiang Thlarau auhnak kha zungzal ka ngaih lai, Ka Khamhbawi a si,\r\n    Jesuh cungah ka um, Pathian biakamnak kha ka zumh cang.</p>\r\n<p><b>CHO: </b>Zumh in (Zumh in um ning, in um ning) um ning (Zum in um ning, in um ning) Ka Khamhbawi Pathian\r\n    biakamnak kha ka bochan; (kha ka bochan;) Zumh in (Zumh in um ning, in um ning), um ning (Zumh in um ning, in um\r\n    ning), Ka Khamhbawi Pathian biakamnak ka zum.</p>",
        "id": "321",
        "name": "PATHIAN BIAKAM CUNGAH KA DIR",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LUNG TLINTERTU KHRIH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Maw Bawi Jesuh ka thlarau nih, Nangmah chung lawng te ah; Saupi ka kawl lung-daihnak kha, Atu lawngah ka\r\n    hmuh.</p>\r\n<p><b>CHO: </b>Mi lung duhnak tlinter thiammi, A dang hohmanh um lo (umlo) Lu nun, dawt, zungzal lawmhnak kha Nangmah\r\n    thawngin ka hmuh.</p>\r\n<p><b>2. </b>Lungdaih lawmhnak lawng ka kawl tawn; Pathian kha ruat lo in, Ka khamhbawi kha ka hlawt lioah, Dawtnak in\r\n    a ka tlaih.</p>\r\n<p><b>CHO: </b>Mi lung duhnak tlinter thiammi, A dang hohmanh um lo (umlo) Lu nun, dawt, zungzal lawmhnak kha Nangmah\r\n    thawngin ka hmuh.</p>\r\n<p><b>3. </b>Vawlei sithat lungdaihnak kha; Ka duh ka kawl lengmang, Ka hmuh cang tiah ka ruah tikah, An nih an lo dih\r\n    cang.</p>\r\n<p><b>CHO: </b>Mi lung duhnak tlinter thiammi, A dang hohmanh um lo (umlo) Lu nun, dawt, zungzal lawmhnak kha Nangmah\r\n    thawngin ka hmuh.</p>\r\n<p><b>4. </b>Lawmhnak a loh caah ka tap, Nangmah kha kan ruat lo; Khi tikah ka mit na auter, Na sunparnak ka hmuh.</p>\r\n<p><b>CHO: </b>Mi lung duhnak tlinter thiammi, A dang hohmanh um lo (umlo) Lu nun, dawt, zungzal lawmhnak kha Nangmah\r\n    thawngin ka hmuh.</p>",
        "id": "322",
        "name": "LUNG TLINTERTU KHRIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TLING TEIN KA ZUMH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Ka hngalh khawh lomi thil vialte, Jesuh sinah ka ratpi A bia-kamnak ka zumh caah, Lungtuai in ka um lai\r\n    lo.</p>\r\n<p><b>CHO: </b>A bia kha a zummi ka si, Tling le fek tein ka zumh, A bia kha a zummi ka si, Tling le fek tein ka zumh.</p>\r\n<p><b>2. </b>Ka sualnak Jesuh cung ka chuan, Amah thi in a ka tawl, Keimah kha a ka thianter ko, Vancung a ka kalpi\r\n    lai.</p>\r\n<p><b>CHO: </b>A bia kha a zummi ka si, Tling le fek tein ka zumh, A bia kha a zummi ka si, Tling le fek tein ka zumh.</p>\r\n<p><b>3. </b>Ka ralchiatnak Jesuh ka pek, amah kha ka hngatchan ko, Khuamui lam ah ka um nain, A ceunak cu a maw lo.</p>\r\n<p><b>CHO: </b>A bia kha a zummi ka si, Tling le fek tein ka zumh, A bia kha a zummi ka si, Tling le fek tein ka zumh.</p>\r\n<p><b>4. </b>Ka tha-nuamnak Jesuh ka pek, Kaa lawmhnak Bawipa a si; Vawlei vialte Bawipa a si, Ka tummi kha a ngeih\r\n    dih;</p>\r\n<p><b>CHO: </b>A bia kha a zummi ka si, Tling le fek tein ka zumh, A bia kha a zummi ka si, Tling le fek tein ka zumh.</p>\r\n<p><b>5. </b>Ka zeizong te Jesuh ka pek, Ka pum le ka thlarau zong, Ka ngeihmi le ka hmuh laimi, Jesuh kha ka chanh dih\r\n    lai.</p>\r\n<p><b>CHO: </b>A bia kha a zummi ka si, Tling le fek tein ka zumh, A bia kha a zummi ka si, Tling le fek tein ka zumh.</p>",
        "id": "323",
        "name": "TLING TEIN KA ZUMH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUM TUAH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Zum tuah, zummi hna zum tuah, Dohnak saupi hmanhseh, Nannih nan luat kho te lai, Pathian bawmhnak\r\n    thawngin. CHO: Zum tuah, zum tuah, Ningti khuamui hmanh seh, Zum tuah, zum tuah, Deirel a chuak deng cang.</p>\r\n<p><b>2. </b>Zum tuah, ral an kan dum ko, Tukforhnak a tamko; Pathian nih a kan bawmh lai, Lam kan palhnak hnga lo.</p>\r\n<p><b>3. </b>Bawipa nih a kan khamh khawh, Kan hawitha kha a si; Zum tuah, zummi hna zum tuah, A dongh tiang in zum\r\n    tuah.</p>",
        "id": "324",
        "name": "ZUM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAILAMTAH VAN LAM A SI</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Vancung khua vailam-tah lam in kal a herh, Hi hlei lam dang a um lo. A Ceumi Kutka ka phan bal lai lo,\r\n    Vailam-tah lam zulh lo ahcun.</p>\r\n<p><b>CHO: </b>Vailam-tah van lam a si, (a si) Vailam-tah van lam a si (a si) Keimah zulh awkah lunglawmhnak a si,\r\n    Vailam-tah van lam a si.</p>\r\n<p><b>2. </b>Thi thehmi lam kha keimah kal awk a herh, Khamhtu a kal cangnak lam. A cung sannak khua kha ka kai ahcun,\r\n    Pathian he ka thlarau a um.</p>\r\n<p><b>CHO: </b>Vailam-tah van lam a si, (a si) Vailam-tah van lam a si (a si) Keimah zulh awkah lunglawmhnak a si,\r\n    Vailam-tah van lam a si.</p>\r\n<p><b>3. </b>Hi vawlei cung in keimah ka kal cang lai, Zeitik hmanh kir ti loin. Ka inn ka kawl, Bawipa nih \"Ra!\" a ti,\r\n    Khi innka in a ka hngah ko.</p>\r\n<p><b>CHO: </b>Vailam-tah van lam a si, (a si) Vailam-tah van lam a si (a si) Keimah zulh awkah lunglawmhnak a si,\r\n    Vailam-tah van lam a si.</p>",
        "id": "325",
        "name": "VAILAMTAH VAN LAM A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HMAI TONH IN</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Hmaitonh in ka khamhtu Khrih cu, Ka hoi kho ve te hnga maw, A ka lak tikah ka hoi lai, Kei ca a thimi\r\n    Khrih cu.</p>\r\n<p><b>CHO: </b>Hmaitonh in ka hoi khawh te lai, Arfi pinlei van ah khin, Hmaitonh in a suparnak he, Ka hmuh te lai tu\r\n    hnuah.</p>\r\n<p><b>2. </b>Zumhnak lawngin atu ka hmuh, Muihnak nih phen hmanhseh law, Siseh Ni sung bik a ra lio, A sunpar\r\n    lianhngannak he.</p>\r\n<p><b>CHO: </b>Hmaitonh in ka hoi khawh te lai, Arfi pinlei van ah khin, Hmaitonh in a suparnak he, Ka hmuh te lai tu\r\n    hnuah.</p>\r\n<p><b>3. </b>Zeitluk thanuamnak dah si lai, Ngaihchiat sifah loh tik ah, Lam kawi vialte samh an si lai, Muihnak zong a\r\n    um lai lo.</p>\r\n<p><b>CHO: </b>Hmaitonh in ka hoi khawh te lai, Arfi pinlei van ah khin, Hmaitonh in a suparnak he, Ka hmuh te lai tu\r\n    hnuah.</p>\r\n<p><b>4. </b>Hmaitonh in tonnak caan nuam bik, Hmaitonh in hmuh le hngalh caan, A ka dawtu Jesuh Khrih he, Hmaitonh in\r\n    ton caan a si.</p>\r\n<p><b>CHO: </b>Hmaitonh in ka hoi khawh te lai, Arfi pinlei van ah khin, Hmaitonh in a suparnak he, Ka hmuh te lai tu\r\n    hnuah.</p>",
        "id": "326",
        "name": "HMAI TONH IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA JESUH, NANGMAH KAN ZUMH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Bawipa Jesuh nangmah kan zumh, Nangmah lawng kan zumh, Khamhnak tha na chim cangmi kha, Ka pe tuah.</p>\r\n<p><b>CHO: </b>Nang kan zumh ko, Nangmah lawng kan zumh; Nangmah lawng kan zumh ko, Nangmah lawng kan zumh.</p>\r\n<p><b>2. </b>Sual ngaih-thiamnak kha kan hal ko, Toidornak te in, Ngaih-thiamnak le vel-ngeihnak in, Ka pe tuah.</p>\r\n<p><b>CHO: </b>Nang kan zumh ko, Nangmah lawng kan zumh; Nangmah lawng kan zumh ko, Nangmah lawng kan zumh.</p>\r\n<p><b>3. </b>Bawipa Jesuh, ka thianter tuah, Na thi thletmi khan, Na ka thianter khawh lai ka zumh, Na thi in.</p>\r\n<p><b>CHO: </b>Nang kan zumh ko, Nangmah lawng kan zumh; Nangmah lawng kan zumh ko, Nangmah lawng kan zumh.</p>\r\n<p><b>4. </b>Lungchung thawnnak kan hal ko rih, Run ka pe zungzal; Na biachim awk na chiah vialte, Ka hngalhter.</p>\r\n<p><b>CHO: </b>Nang kan zumh ko, Nangmah lawng kan zumh; Nangmah lawng kan zumh ko, Nangmah lawng kan zumh.</p>\r\n<p><b>5. </b>Bawipa Jesuh zungzal kan duh, Ka kal tak hin hlah, Zungzal in nangmah kan zulh lai, Ka thih tiang.</p>\r\n<p><b>CHO: </b>Nang kan zumh ko, Nangmah lawng kan zumh; Nangmah lawng kan zumh ko, Nangmah lawng kan zumh.</p>",
        "id": "327",
        "name": "BAWIPA JESUH, NANGMAH KAN ZUMH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA LAM JESUH A KA HMUHSAK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ka lam Jesuh a ka hmuhsak, Zei bia dah ka herh rih hnga? Ka lu nun lioah domh-tlaitu, Zumh sualnak a um\r\n    hnga maw? Vancung daihnak le hna-ngamnak, Jesuh zumhnak in ka hmuh, Vawlei i ka huahmi vialte, Jesuh ding tein a\r\n    ceih. Vawlei i ka hmuhmi vialte, Jesuh ding tein a ceih.</p>\r\n<p><b>2. </b>Lamhar ah ka tha a nuamter, Lam vialte a ka hmuhsak, Hnek-saknak ka inn khawh nakhnga, Nunnak changreu a\r\n    ka pek, Ka kal lio i ka bat tikah, Ka thlarau tihal hmanh seh, Ka hmailei ah lungpi chungin, Lawmhnak cerhti luan\r\n    ka hmuh, Ka hmailei ah lungpi chungin, Lawmhnak cerhti luan ka hmuh,</p>\r\n<p><b>3. </b>Ka lam Jesuh a ka hmuhsak, Zeitluk in dah a ka dawt, Vancung ka Pa inn daihnak ah, Ka um nak-hnga bia a\r\n    kam, Ka thlarau kha hla a sa i, Vancung ah a zuan tikah, Lam kha Jesuh a ka hmuhsak, Zungzal hla in ka sak lai; Lam\r\n    kha Jesuh a ka hmuhsak, Zungzal hla in ka sak lai.</p>",
        "id": "328",
        "name": "KA LAM JESUH A KA HMUHSAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLUACHUAHNAK RUAHPI A SUR LAI</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Thlua-chuahnak ruahpi a sur lai, Dawtnak biakam nak bang in, Cawrh than caan kha a tlung te lai, Jesuh sin\r\n    in a tlung lai.</p>\r\n<p><b>CHO: </b>Thluachuah ruahsurnak Thluachuah ruahsurnak kan duh, Velngeih ruah a sur ciah-mah cang, Ruah sur tamnak\r\n    kan duh chin.</p>\r\n<p><b>2. </b>Thlua-chuahnak ruahpi a sur lai, A uaimi aa tung than lai, Ruahpi a sur thawng kan theih lai, Tlangcung le\r\n    tlangkar ah khan.</p>\r\n<p><b>CHO: </b>Thluachuah ruahsurnak Thluachuah ruahsurnak kan duh, Velngeih ruah a sur ciah-mah cang, Ruah sur tamnak\r\n    kan duh chin.</p>\r\n<p><b>3. </b>Thlua-chuahnak ruahpi a sur lai, Pathian atu kan pe tuah, Nangmah biakamnak a si ca, Tun thannak kha ra\r\n    kan pe.</p>\r\n<p><b>CHO: </b>Thluachuah ruahsurnak Thluachuah ruahsurnak kan duh, Velngeih ruah a sur ciah-mah cang, Ruah sur tamnak\r\n    kan duh chin.</p>\r\n<p><b>4. </b>Thlua-chuahnak ruahpi a sur lai, Nihin zong sur seh kan duh, Kan sualnak kha kan phuan lioah, Jesuh sinah\r\n    thla kan cam.</p>\r\n<p><b>CHO: </b>Thluachuah ruahsurnak Thluachuah ruahsurnak kan duh, Velngeih ruah a sur ciah-mah cang, Ruah sur tamnak\r\n    kan duh chin.</p>",
        "id": "329",
        "name": "THLUACHUAHNAK RUAHPI A SUR LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KEIMAH MIN A UM MAW?</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Bawipa, rumnak ka tum lo, Sui le ngun ka tum lo; Pathian ka kawl hmasa lai, Vancung luh ka duh ko; Nangmah\r\n    umnak inn chungah, Nangmah catlap chungah, Jesuh Bawipa ka chim tuah, keimah min a um maw?</p>\r\n<p><b>CHO: </b>Keimah (keimah) min a (min a) um maw, na catlap ran chungah, Na pennak cauk (cauk) chungah (chungah),\r\n    Keimah min a um maw? (um maw)</p>\r\n<p><b>2. </b>Rili thetse bantukin, Ka sualnak a tam ko, Na thi in, maw ka khamh tu, Ka sualnak na tlengh cang; \"Ka\r\n    sualnak tam hmanhsehlaw, Hawhra rang bangtukin, A thiang cang,\" tiah na zangfahnak in bia na ka chimh.</p>\r\n<p><b>CHO: </b>Keimah (keimah) min a (min a) um maw, na catlap ran chungah, Na pennak cauk (cauk) chungah (chungah),\r\n    Keimah min a um maw? (um maw)</p>\r\n<p><b>3. </b>A thiang, a tha khua chungah, Inn kha a ceu a tlang, A lian a ngan mithiang i aihmi puan kha a rang; Zei\r\n    te tihnak um ti lo, Khi khua tha chungah khin, Vanmi an dirkamh nak ah, ka min aa tial ve ko.</p>\r\n<p><b>CHO: </b>Keimah (keimah) min a (min a) um maw, na catlap ran chungah, Na pennak cauk (cauk) chungah (chungah),\r\n    Keimah min a um maw? (um maw)</p>",
        "id": "330",
        "name": "KEIMAH MIN A UM MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAWLEI KHUAZAKIP AH JESUH HE</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Vawlei khua zakip ah, Ka Bawi Jesuh he, Keimah cu him tein ka kal zungzal ko, Amah loin khuazei hmanh ah\r\n    kaa lawm lo, A um ahcun khua zeihmanh ah ka tih lo.</p>\r\n<p><b>CHO: </b>Khua zeihmanh ah, Jesuh thawngin ka him ko. Khuazei hmanh, Khua zeihmanh, Zeihmanh ka phang lo.</p>\r\n<p><b>2. </b>Jesuh a um tikah ka van a sang lo, Ka kawi a ka hlaw nain Jesuh um ko, A harbik lam chungah khan, Phan\r\n    hmanh ning law, Jesuh he ka um ahcun zungzal kaa lawm.</p>\r\n<p><b>CHO: </b>Khua zeihmanh ah, Jesuh thawngin ka him ko. Khuazei hmanh, Khua zeihmanh, Zeihmanh ka phang lo.</p>\r\n<p><b>3. </b>Khua zeihmanh ah thihnak caan kha cu ning law, Vancung khua ah, Jesuh a ka kalpi lai, Vawlei lam har\r\n    chungah ka chuak than lai lo, Khuazei hmanh ah Jesuh he ka hna ngam ko.</p>\r\n<p><b>CHO: </b>Khua zeihmanh ah, Jesuh thawngin ka him ko. Khuazei hmanh, Khua zeihmanh, Zeihmanh ka phang lo.</p>",
        "id": "331",
        "name": "VAWLEI KHUAZAKIP AH JESUH HE",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA THLARAU CA A THA</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Tidai bantuk in ka lam a daih tik le, Ngaih-chiatnak tilet thawh tikah, Zei kip si hna seh, ka cung a\r\n    tlungmi kha, Ka thlarau caah an tha dih ko.</p>\r\n<p><b>CHO: </b>Ka thlarau (Ka thlarau) ca a tha, (ca a tha), Ka thlarau, ka thlarau ca a tha.</p>\r\n<p><b>2. </b>Rul-hreu tuah hnek-saknak ah phan hmanhning law, Ka zumhnak ka chungah hmun seh, Ka si-cannak kha, Jesuh a\r\n    ka hmuh cang, Keimah ca a thi theng kha a thlet.</p>\r\n<p><b>CHO: </b>Ka thlarau (Ka thlarau) ca a tha, (ca a tha), Ka thlarau, ka thlarau ca a tha.</p>\r\n<p><b>3. </b>Maw nunnem dawtu tha kha ka ruah tikah, Ka sualnak phun kip vialte kha, Hrengkhenh kha a in, ca ka sualnak\r\n    a tlengh, Ka thlarau, Jesuh kha thangthat tuah.</p>\r\n<p><b>CHO: </b>Ka thlarau (Ka thlarau) ca a tha, (ca a tha), Ka thlarau, ka thlarau ca a tha.</p>\r\n<p><b>4. </b>Tu hnuah Jesuh thawng lawngin nun ka duh, Ka thih ahcun ka zei poi lo, Ka nun siseh, ka thih siseh\r\n    ngaihchia lo, Ka thlarau kha biazik na nawh ko.</p>\r\n<p><b>CHO: </b>Ka thlarau (Ka thlarau) ca a tha, (ca a tha), Ka thlarau, ka thlarau ca a tha.</p>",
        "id": "332",
        "name": "KA THLARAU CA A THA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JERUSALEM SUIKHUA KHA</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Je-ru-sa-lem suikhua kha! Cawhnuk le khuai-hli ti, In a khat, Nangmah kong kha ka ruat dih kho lai lo, Na\r\n    kong kha ka hngal kho lo, Lunglawm zeizat an um, Na lianh-ngannak zei bia dah! Nuamhnak ka chim kho lo.</p>\r\n<p><b>2. </b>Zion khua chungah an dir, Hlasaknak in a khat, Vancungmi he an cer ko, Mi-thiangmi zong an um; An\r\n    siangpahrang he an um, Riantuannak um ti lo, Khamhnak a hmu mi umnak, Ni a tlang zungzal ko.</p>\r\n<p><b>3. </b>Hmaisa mi kan zulh ahcun, Sualnak ral kan tei lai, Zungzal hna-ngamnak khua tha, Kannih zong kan phan lai;\r\n    Khi khua chungah ngaih-chiatnak, Zeihmanh a um lai lo, A thiannak zong kha a um, Zungzal a dong lai lo.</p>\r\n<p><b>4. </b>A nuambik vancung khua kha, Khamhnak a hmumi khua, Thluachuah vanluh umnak khua, Kannih nih phak kan duh,\r\n    Maw nun thabik kan Bawipa, Ram tha chungah a um, Khi ram ah kan phak tikah, Amah he kan din lai.</p>",
        "id": "333",
        "name": "JERUSALEM SUIKHUA KHA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A ZUNGZAL KAN IT LAN LAI LO</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>A zungzal kan it lan lai lo, Lunglawmhnak khua a dei lai, Thawhthan zing ah kan i tong lai, Thennak kha um\r\n    ti lo in; A thukbik tilian chungin le, Thetse rawn ramchung zong in, Fing le tlang kar khua-zakip in, Mi tampi an\r\n    tho than lai.</p>\r\n<p><b>CHO: </b>A zungzal kan it lan lai lo, Lunglawmhnak khua a dei lai, Thawhthan zing kan i ton tikah, Thennak a um\r\n    ti lai lo.</p>\r\n<p><b>2. </b>Pangpar bantuk aa dawh ngaingai, Kan lawmhnak nganbik te kha A nih he kan i then tikah, Ngaih-chiatnak kha\r\n    a ngan ko; Ni a tlak dengmang hlan tiangin, Thlan pawngah cun kan i hel, Kannih pangpar a uai caah, Kan ruahchannak\r\n    a dul cang.</p>\r\n<p><b>CHO: </b>A zungzal kan it lan lai lo, Lunglawmhnak khua a dei lai, Thawhthan zing kan i ton tikah, Thennak a um\r\n    ti lai lo.</p>\r\n<p><b>3. </b>A zungzal kan it lan lai lo, Thawhthannak ni a ra lio, Nunnak a kan petu Bawipa, Thangthatnak kha hmu ko\r\n    seh, A kan laaknak vanram ah khin, Zungzal ceunak khuapi ah, Thihnak hmual a um ti lai lo, Tah zong a um ti lai lo.</p>\r\n<p><b>CHO: </b>A zungzal kan it lan lai lo, Lunglawmhnak khua a dei lai, Thawhthan zing kan i ton tikah, Thennak a um\r\n    ti lai lo.</p>",
        "id": "334",
        "name": "A ZUNGZAL KAN IT LAN LAI LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NGAI LAW ZUM TUAH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>A tha ceunak chungah, Jesuh he kan kal i Kannih kalnak lam kha a ceuter, A duhnak kha kan zulh, Amah he\r\n    kan kal ti, A bia kha kan ngaih lai, zumhnak in.</p>\r\n<p><b>CHO: </b>Ngai law zum tuah, Lamdang a um ti lo, Jesuh lawmhnak hmuh awkah, Ngai law va zum tuah u.</p>\r\n<p><b>2. </b>Thil a rit kha nan phawrh, Rethei sifah nan ing, BAwipa nih an zaangfah hna caah, Nan thin kha phang hlah\r\n    u, Satan tukforh nak kha, Jesuh min zumhnak in kan tei lai.</p>\r\n<p><b>CHO: </b>Ngai law zum tuah, Lamdang a um ti lo, Jesuh lawmhnak hmuh awkah, Ngai law va zum tuah u.</p>\r\n<p><b>3. </b>Temhnak le sifahnak, Zeizong phannak vialte, Bawi Jesuh lawng nih a thawl khawh lai, Ngaih-chiatnak a\r\n    phunphun, Huatnak le tahnak zong, Jesuh zumhnak in kan tei khawh lai.</p>\r\n<p><b>CHO: </b>Ngai law zum tuah, Lamdang a um ti lo, Jesuh lawmhnak hmuh awkah, Ngai law va zum tuah u.</p>\r\n<p><b>4. </b>Kannih pumsa cung i, Zungzal a ummi thil, Bawipa kut chungah kan chanh ko lai; Kan pumpek lo ahcun, A\r\n    zaang-fahnak thachin, Zeihmanh kha kan hmu kho bal lai lo.</p>\r\n<p><b>CHO: </b>Ngai law zum tuah, Lamdang a um ti lo, Jesuh lawmhnak hmuh awkah, Ngai law va zum tuah u.</p>",
        "id": "335",
        "name": "NGAI LAW ZUM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUM IN RA TUAH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>A thabik Pathian thawngtha kha, Voikhat na theih than ko cang, An auhnak bia na ngai lai maw? Bawipa lam\r\n    na kawl lai maw?</p>\r\n<p><b>CHO: </b>Zum in ra tuah! (ra) Zum in ra tuah! (ra) Jesuh zul tuah! Na nung lai! (nung lai) Zum in ra tuah! (ra)\r\n    Zum in ra tuah! (ra) Jesuh zul tuah! Na nung lai!</p>\r\n<p><b>2. </b>Jesuh nih nangmah an hngah ko, Atu zum law va ngai tuah, Thiang Thlarau nih an forh lioah, Na pum dihlak\r\n    na pek lai.</p>\r\n<p><b>CHO: </b>Zum in ra tuah! (ra) Zum in ra tuah! (ra) Jesuh zul tuah! Na nung lai! (nung lai) Zum in ra tuah! (ra)\r\n    Zum in ra tuah! (ra) Jesuh zul tuah! Na nung lai!</p>\r\n<p><b>3. </b>Ziaza kha a dinter lai tiah, Na lung in va zum hmasa, Na zumhmi Bawipa Thawngtha kha, Na lungchung ah va\r\n    keng tuah.</p>\r\n<p><b>CHO: </b>Zum in ra tuah! (ra) Zum in ra tuah! (ra) Jesuh zul tuah! Na nung lai! (nung lai) Zum in ra tuah! (ra)\r\n    Zum in ra tuah! (ra) Jesuh zul tuah! Na nung lai!</p>\r\n<p><b>4. </b>Na duhnak Bawipa va pe law, A thiang thi kha va zum tuah, Vancung Jesuh kha va zoh tuah, Biakamnak kha va\r\n    zum tuah.</p>\r\n<p><b>CHO: </b>Zum in ra tuah! (ra) Zum in ra tuah! (ra) Jesuh zul tuah! Na nung lai! (nung lai) Zum in ra tuah! (ra)\r\n    Zum in ra tuah! (ra) Jesuh zul tuah! Na nung lai!</p>",
        "id": "336",
        "name": "ZUM IN RA TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA NGAIHCHIATNAK HLAW TUAH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Hi vawlei ngaih-chiatnak vialte kha hlaw tuah, Zanlei caan tikah khan, Duhsah kan ruah lai Khuamui chungah\r\n    chim tuah, Biatak in vaa pe, Jesuh sinah hal tuah, Thachin an pek lai.</p>\r\n<p><b>2. </b>Jesuh sinah chim tuah, Ngaih-chiatnak a hngalh, Jesuh na chimh ahcun, Thachin an pek lai. Na lam kha a ceu\r\n    cang, Va kal law, khawm tuah, Hal tuah, na ngaih-chiatnak, Na thil a zaang lai.</p>\r\n<p><b>3. </b>Ngaihchiat lungrawhnak he, Khuamui hmanhsehlaw, Nangmah nak sifakmi, Va bawm zungzal hna. Ngaih-chiatnak\r\n    kha hlaw tuah, Thachin hmuh awkah, Midang zong hmuh awkah, Jesuh sin hal tuah.</p>",
        "id": "337",
        "name": "NA NGAIHCHIATNAK HLAW TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH BOCHAN IN UM TUAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Nifate Jesuh min kha, Zum tuah, thli a hran tikah, Sifahnak tam hmanhsehlaw, Jesuh bochan in um tuah.</p>\r\n<p><b>CHO: </b>Nifate Bawipa Jesuh bochannak in va zum tuah, Baibal ca an cawnpiak bang, Jesuh bochan in um tuah.</p>\r\n<p><b>2. </b>Thiang Thlarau keimah chungah, A rung ceu ka lung chungah; Lam a ka hmuhsak zungzal, Jesuh bia lawng ka\r\n    zumh lai.</p>\r\n<p><b>CHO: </b>Nifate Bawipa Jesuh bochannak in va zum tuah, Baibal ca an cawnpiak bang, Jesuh bochan in um tuah.</p>\r\n<p><b>3. </b>Lam nuamh lioah hla sa law, Khuamuih tikah thlacam tuah, Harnak ah Jesuh au tuah, Jesuh bochan in um tuah.</p>\r\n<p><b>CHO: </b>Nifate Bawipa Jesuh bochannak in va zum tuah, Baibal ca an cawnpiak bang, Jesuh bochan in um tuah.</p>\r\n<p><b>4. </b>Hi vawlei dih hnu tiangin, Amah ka zumh zungzal lai; Lungvar khua phak tik zongah, Bawi Jesuh lawng ka\r\n    zumh lai.</p>\r\n<p><b>CHO: </b>Nifate Bawipa Jesuh bochannak in va zum tuah, Baibal ca an cawnpiak bang, Jesuh bochan in um tuah.</p>",
        "id": "338",
        "name": "JESUH BOCHAN IN UM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH KA DAWT TAKTAK</h4> <p>Doh is Ab</p> <p><b>1. </b>Ka theih duhmi minsung a um, A sunnak sak ka duh, Tingtang thawng bang ka hnathlam ah, Leicung a thlum bik min.</p> <p><b>CHO: </b>Jesuh ka dawt taktak, Jesuh ka dawt taktak Jesuh ka dawt taktak, A ka dawt hmasa ca'h.</p> <p><b>2. </b>Keimah tlanh awk thimi khamhtu, Dawtnak kong a ka chimh, Misual thlacamnak a thi sung, Chuakmi kong a ka chimh.</p> <p><b>CHO: </b>Jesuh ka dawt taktak, Jesuh ka dawt taktak Jesuh ka dawt taktak, A ka dawt hmasa ca'h.</p> <p><b>3. </b>Ka Pa nih ni fatin kei ca, A khonmi kong a chim, A muimi lam ka kal zongah, Ka lam ni a tlanter.</p> <p><b>CHO: </b>Jesuh ka dawt taktak, Jesuh ka dawt taktak Jesuh ka dawt taktak, A ka dawt hmasa ca'h.</p> <p><b>4. </b>Ka ngaih-chiatnak a thei khotu, Jesuh kong a ka chimh, Mi phorh khawh lo ka ngaih-chiatnak, Phorh awkah a ka bawmh.</p> <p><b>CHO: </b>Jesuh ka dawt taktak, Jesuh ka dawt taktak Jesuh ka dawt taktak, A ka dawt hmasa ca'h.</p>",
        "id": "339",
        "name": "JESUH KA DAWT TAKTAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RUAHCHANNAK THA BIK, JESUH KEI CA</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Ruah channak tha bik, Jesuh kei ca, Pathian sunparnak, Keimah ka tep cang, Khamhnak ro cotu Pathian cawk\r\n    mi, A thi sungbik in a ka tawl cang.</p>\r\n<p><b>CHO: </b>Mah hi ka tuanbia le hla a si, Chun nitlak i Khamhbawi thangthat hi, Mah hi ka tuanbia le hla a si, Chun\r\n    nitlak i khamhbawi thangthat hi.</p>\r\n<p><b>2. </b>Amah duhnak zulh, thil nuam bikmi, Lunglawmhnak thlam cu keimah ka hmuh cang, Vanmi nih van khin an rung\r\n    tum i, Dawtnak le vel ngeihnak an runpi.</p>\r\n<p><b>CHO: </b>Mah hi ka tuanbia le hla a si, Chun nitlak i Khamhbawi thangthat hi, Mah hi ka tuanbia le hla a si, Chun\r\n    nitlak i khamhbawi thangthat hi.</p>\r\n<p><b>3. </b>Amah duhnak zulh, dinhnak a si, Ka Khamhtu sinah keimah ka lawm ko, Van khi zoh in ka hngah zungzal i, A\r\n    thatnak le dawtnak a ka pek.</p>\r\n<p><b>CHO: </b>Mah hi ka tuanbia le hla a si, Chun nitlak i Khamhbawi thangthat hi, Mah hi ka tuanbia le hla a si, Chun\r\n    nitlak i khamhbawi thangthat hi.</p>",
        "id": "340",
        "name": "RUAHCHANNAK THA BIK, JESUH KEI CA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUMHNAK HI TEINAK A SI</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Nannih Khrihfa ralkap vialte, Tho u, hmaiah kal u, Ni ceunak kha zan muihnak nih, A khuh hlanah kal u,\r\n    Kannih kan ral tihnungmi kha, Kan celh chung do u si. Zumhnak hi vawlei a teitu, Asi kha kan hngalh ko.</p>\r\n<p><b>CHO: </b>Zumh hi teinak a si, Zumh hi teinak a si (Zumh hi teinak a si) Vawlei teitu a si ko, Teinak lianngan bik\r\n    cu.</p>\r\n<p><b>2. </b>Dawtnak kan hmelchunhnak a si, Pathian Bia kan vainam, Mithiang mi nih an zulhmi lam, Kannih zong kan zul\r\n    ve, Zumhnak in khua zakip ah khan, Phuchim bangin an kal. Thihnak an teinak zumhnak kha, Kan phaw a si ve ko.</p>\r\n<p><b>CHO: </b>Zumh hi teinak a si, Zumh hi teinak a si (Zumh hi teinak a si) Vawlei teitu a si ko, Teinak lianngan bik\r\n    cu.</p>\r\n<p><b>3. </b>Sualnak ral kha a teitu cu, Puanrang kha an pek lai, Vancung mithiang mi hna hmaiah, A min kha an chim\r\n    lai. Khi tikah ceunak tlang cung khan, Hmailei ah kan kal lai, Muihnak ralkap kan tei hna lai, Kan Bawi Jesuh min\r\n    in.</p>\r\n<p><b>CHO: </b>Zumh hi teinak a si, Zumh hi teinak a si (Zumh hi teinak a si) Vawlei teitu a si ko, Teinak lianngan bik\r\n    cu.</p>",
        "id": "341",
        "name": "ZUMHNAK HI TEINAK A SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HNANGAM LOMI RA U</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Khua zeihmanh in chuak u, hnangam lo rethei Jesuh thutnak hmaiah nan khuk bil u, Nan lungfahnak pu tuah;\r\n    ngaih-chiatnak rak pu, Nan ngaih-chiatnak cu Bawipa nih a tei.</p>\r\n<p><b>2. </b>Lungdongmi ca lawmhnak, Lampalh ca ceunak, Ngaih-chihmi caah ruahchannak na si, Lung hnemtu nih dai tein\r\n    hi bang a ti: Nan ngaih-chiatnak cu Bawipa nih a tei.</p>\r\n<p><b>3. </b>Pathian hmai in a rung luangmi ti thiang le, Nunnak changreu cu i lak cio tuah u, Dawtnak rawldanghnak ah\r\n    ra u, Bawipa nih Nan ngaih-chiatnak kha a tei hngal tuah u.</p>",
        "id": "342",
        "name": "HNANGAM LOMI RA U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA NGAIHCHIATNAK JESUH NIH A HNGALH</h4> <p>Doh is Ab</p> <p><b>1. </b>Na ngaih-chiatnak vialte, Jesuh nih a hngalh, Ngaih-chiami vialte, Thlacamnak kha a theih, Phang lo tein zum tuah, Na lungchung luhter, Na thilrit Bawipa putter an lawmhter lai.</p> <p><b>2. </b>Jesuh kha na lungthin in tha te'n va ruat, Na ral kut chungin, Nangmah kha an khamh lai, Amah duhnak bangin, Lam an hmuhsak lai, A sunparnak hmuh kha na phak khawh theo lai.</p> <p><b>3. </b>Ral kha na doh tikah, Jesuh nih a hngalh, Na lung kha a hngalh, Na auhnak zong a theih, Na thlarau kha thawnnak thar a pek lai i Lung-daihnak in na mitthli kha an hnawh lai.</p>",
        "id": "343",
        "name": "NA NGAIHCHIATNAK JESUH NIH A HNGALH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH, KAN DAWT</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Ka Jesuh kan dawt ko, Ka Bawipa na si, Nangmah thawngin sual duhnak phunkip ka hlawt, A ka Khamhtu le\r\n    Tlantu Bawipa na si, Hmasa kan dawtnak in atu kan dawt deuh.</p>\r\n<p><b>2. </b>Na ka dawt hmasa ca, Nangmah kha kan dawt, Keimah sual thlahnak ca, Vailam thah na in, Hling luchin naa\r\n    chinh ca nangmah kan dawt chin, Hmasa kan dawtnak in atu kan dawt deuh.</p>\r\n<p><b>3. </b>Ka nun siseh, ka thih siseh kan dawt lai, Ka nunnak um chung vialte kan thangthat lai, Ka cah lai caan\r\n    hmanh ah hi bang ka chim lai, Hmasa kan dawtnak in atu kan dawt deuh.</p>\r\n<p><b>4. </b>A zungzal in timh cia lawmhnak innchung ah, Kan in biak ngai te lai, Pathian vancung ah, Sunpar luchin\r\n    chinh in hi hla ka sa lai, Hmasa kan dawt nakin atu kan dawt deuh.</p>",
        "id": "344",
        "name": "JESUH, KAN DAWT(A/B)",
        "nameb": "1"
    },
    {
        "destext": "<h4 align=\"center\">HMUN A UM</h4> <p>Doh is Ab</p> <p><b>1. </b>A rawkmi kha hlawm hna u, A tlaumi kawl hna u, Lungsau in lamhruai hna u, Vancung lambi chungah, Zawn-ruahnak in tei hna u, Bawipa auhnak chim hna, Rawl danghnak puai a timh cang, Hmun a um tiah chim hna.</p> <p><b>CHO: </b>Hmun a um (Hmun a um, nan ca'h a um) Hmun a um (Hmun a um, nan ca'h a um) Rawl danghnak puai a timh cang, Hmun a um tiah chim hna.</p> <p><b>2. </b>Ngaih-chiatnak horkuang thuk le, Zan khua-muihnak chungin, Ni ceu dawh tlannak chung le, Hnangam daihnak chim hna, Jesuh sinah ratpi hna, A aunak chim than hna, Rawl danghnak puai a timh cang, Hmun a um tiah chim hna.</p> <p><b>CHO: </b>Hmun a um (Hmun a um, nan ca'h a um) Hmun a um (Hmun a um, nan ca'h a um) Rawl danghnak puai a timh cang, Hmun a um tiah chim hna.</p> <p><b>3. </b>Dawtnak thinlung he kal tuah, Bawipa min in kal tuah, Nunnak le Khamhnak tling cu, Khua zakip ah thanh u, Chunceu caan a dih deng cang, Zanmui a ra cang lai, Rawl danghnak puai a timh cang, Hmun a um tiah chim hna.</p> <p><b>CHO: </b>Hmun a um (Hmun a um, nan ca'h a um) Hmun a um (Hmun a um, nan ca'h a um) Rawl danghnak puai a timh cang, Hmun a um tiah chim hna.</p>",
        "id": "345",
        "name": "HMUN A UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA LUNGCHUNG AH JESUH A RUNG LUT</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Ka lung chung Bawi Jesuh a rung luh ka tein Kalung zong kha aa thleng dih cang, Ka lungchung Bawi Jesuh a\r\n    rung tum ka tein, Ka lung ah ceunak kha a tlung.</p>\r\n<p><b>CHO: </b>Bawi Jesuh kha ka lung chungah (chungah) a rung luh a um hnuah cun (ah cun) Tilian thawng bantukin ka\r\n    lungchungah ceunak Chikkhat ah ka lung kha a ceu.</p>\r\n<p><b>2. </b>Ka lung chung Bawi Jesuh a rung luh tikah cun, Holh tha lawng ka chim khawh cang lai, Ka lungchung Bawi\r\n    Jesuh a rung luh tikah cun, Ka sualnak vialte a tawl cang.</p>\r\n<p><b>CHO: </b>Bawi Jesuh kha ka lung chungah (chungah) a rung luh a um hnuah cun (ah cun) Tilian thawng bantukin ka\r\n    lungchungah ceunak Chikkhat ah ka lung kha a ceu.</p>\r\n<p><b>3. </b>Ka lungchung Bawi Jesuh a rung luh tikah cun, Zumh nak kha a fek bik ka hmuh, Ka lungchung Bawi Jesuh kha\r\n    a um ngai ahcun, Zumh sualnak vialte a lo cang.</p>\r\n<p><b>CHO: </b>Bawi Jesuh kha ka lung chungah (chungah) a rung luh a um hnuah cun (ah cun) Tilian thawng bantukin ka\r\n    lungchungah ceunak Chikkhat ah ka lung kha a ceu.</p>\r\n<p><b>4. </b>Bawi Jesuh ka lungthin chungah a um tikah Thihnak mui chung kha a ceu cang. Bawi Jesuh ka lungthin chungah\r\n    a um tikah, Khua tha innka ka hmuh colh cang.</p>\r\n<p><b>CHO: </b>Bawi Jesuh kha ka lung chungah (chungah) a rung luh a um hnuah cun (ah cun) Tilian thawng bantukin ka\r\n    lungchungah ceunak Chikkhat ah ka lung kha a ceu.</p>",
        "id": "346",
        "name": "KA LUNGCHUNG AH JESUH A RUNG LUT",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH, KA THLARAU DAWTU</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Jesuh, ka thlarau dawtu, Na sinah ka zuanter tuah, Tilian nih a ka tlun hnawh Thlitu hrang a tam caah, Ka\r\n    Khamhbawi ka huppheng tuah, Thlitu hrang a dih hlan tiang, Ka thlarau kha luhter tuah, Nangmah thladem a tangah.</p>\r\n<p><b>2. </b>A bawm thiam midang um lo, Nang lawng ka thlarau khamh kho, Keimah kha ka khamh rih tuah, Ka bawm ko, ka\r\n    chia ta hlah, Nangmah lawng keimah zum ko, Nangmah sinin zaang ka hmuh, Na thla tang ah dor ning law, Ka lu nangmah\r\n    khuh ka duh.</p>\r\n<p><b>3. </b>Jesuh Khrih nangmah lawng nih, Ka duhnak vialte na ngeih, Ril, mitcaw, beimi bawm tuah, Zawt damter,\r\n    lungdongmi hruai, Nangmah min a lian chin ko, Keimah misual ngai ka si, Keimah lung a tha hrim lo, Nangmah lawng a\r\n    tha na si.</p>\r\n<p><b>4. </b>Nangmah sinah keimah nih, Zaangfah ngaih-thiamnak ka hmuh Damnak cerhti luanter tuah, Ka chung thiannak\r\n    kha ka duh, Nunnak cerhti nang na si, Ka vuai tiang ka dinter tuah, Ka lung chungah hung put law, Zungzal tiangin\r\n    nang luang ko.</p>",
        "id": "347",
        "name": "JESUH, KA THLARAU DAWTU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAILAMTAH CUNGAH</h4>\r\n<p>Doh is E</p>\r\n<p><b>1. </b>Keimah Khamh Bawi ka ningzak lo, Amah rian ka tuan lai, Amah bia kha a thabik ko, Amah ka bochan lai.</p>\r\n<p><b>CHO: </b>Vailamtah nak cungah, A ceu ka hmuh hmasa, Ka lung retheihnak kha a tlau dih cang (tlau dih cang) Keimah\r\n    ka zumh ca, khikhin ceu ka hmuh, Atu chun nitlak keimah kaa lawm.</p>\r\n<p><b>2. </b>Bawi Jesuh a min ka hngalh ko, Amah kha ka hngatchan, Ka thlarau kha ning-zahter lo, Ruah-channak a hmun\r\n    cang.</p>\r\n<p><b>CHO: </b>Vailamtah nak cungah, A ceu ka hmuh hmasa, Ka lung retheihnak kha a tlau dih cang (tlau dih cang) Keimah\r\n    ka zumh ca, khikhin ceu ka hmuh, Atu chun nitlak keimah kaa lawm.</p>\r\n<p><b>3. </b>Amah pennak a feh bantuk, Amah biakar a fek, A kut chung i ka chiah vialte, Tha tein a ken ko.</p>\r\n<p><b>CHO: </b>Vailamtah nak cungah, A ceu ka hmuh hmasa, Ka lung retheihnak kha a tlau dih cang (tlau dih cang) Keimah\r\n    ka zumh ca, khikhin ceu ka hmuh, Atu chun nitlak keimah kaa lawm.</p>\r\n<p><b>4. </b>Keimah misual ka si nain, Ka sual a maimilh lai; Je-ru-sa-lem khua thar chungah, Umnak a ka pek lai.</p>\r\n<p><b>CHO: </b>Vailamtah nak cungah, A ceu ka hmuh hmasa, Ka lung retheihnak kha a tlau dih cang (tlau dih cang) Keimah\r\n    ka zumh ca, khikhin ceu ka hmuh, Atu chun nitlak keimah kaa lawm.</p>",
        "id": "348",
        "name": "VAILAMTAH CUNGAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUN NIH A KA RUAT HNGA MAW?</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Bawi Jesuh nih a ka ruat hnga maw? Ka lungre a theih ah hin, Ka thil a rih, ka lam a har tikah; Jesuh nih\r\n    a ka ruat hnga maw?</p>\r\n<p><b>CHO: </b>Asi, a ruah, a ruah, ka hngalh, Ka ngaih-chiatnak a ruah ko, Nitlak cu a har i zan a sau tikah,\r\n    Khamhbawi nih a ruah ko.</p>\r\n<p><b>2. </b>Bawi Jesuh nih a ka ruat hnga maw? Ka lam kha a muih tikah, Zanlei ni a vung tlak chialmal tikah, Ka pawng\r\n    um kha a ruat hnga maw?</p>\r\n<p><b>CHO: </b>Asi, a ruah, a ruah, ka hngalh, Ka ngaih-chiatnak a ruah ko, Nitlak cu a har i zan a sau tikah,\r\n    Khamhbawi nih a ruah ko.</p>\r\n<p><b>3. </b>Bawi Jesuh nih a ka ruat hnga maw? Tukforhnak ka in ah hin, Zan khuadei lung-rethei mitthli tla in, Ka um\r\n    ko hi a ruat hnga maw?</p>\r\n<p><b>CHO: </b>Asi, a ruah, a ruah, ka hngalh, Ka ngaih-chiatnak a ruah ko, Nitlak cu a har i zan a sau tikah,\r\n    Khamhbawi nih a ruah ko.</p>\r\n<p><b>4. </b>Ka dawtbik he kan i then ah hin, Jesuh a ka ruat hnga maw? Ngaihchiat lungkuai nak ka in tikah hin, Jesuh\r\n    nih a ka hmu hnga maw?</p>\r\n<p><b>CHO: </b>Asi, a ruah, a ruah, ka hngalh, Ka ngaih-chiatnak a ruah ko, Nitlak cu a har i zan a sau tikah,\r\n    Khamhbawi nih a ruah ko.</p>",
        "id": "349",
        "name": "JESUN NIH A KA RUAT HNGA MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DUM CHUNGAH KA VAK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Pangpar cung dap a tlak lioah, Keimah lawng dum chungah kaa chok i, Ka hna in ka theih a thabik bia kha,\r\n    Pathian Fapa bia a si.</p>\r\n<p><b>CHO: </b>Keimah a ka leng i bia a ka ruah, \"Ka mi na si\" tiah a ka chimh, Khi khin kan um lioah kan lawmhnak kha\r\n    Hohmanh nih an hngal lai lo.</p>\r\n<p><b>2. </b>A aw thlum le bia tha thawngin, Vate hmanh nih dai ziar in an um, Keimah a ka pekmi hla aw dawh cu, Ka\r\n    lungchung a cam zungzul</p>\r\n<p><b>CHO: </b>Keimah a ka leng i bia a ka ruah, \"Ka mi na si\" tiah a ka chimh, Khi khin kan um lioah kan lawmhnak kha\r\n    Hohmanh nih an hngal lai lo.</p>\r\n<p><b>3. </b>Khuamui phan hmanhseh ka tih lo, Amah he dum chungah um ka duh, Amah riantuan awkin a ka thlah i, \"Na sin\r\n    ka um lai,\" a ti.</p>\r\n<p><b>CHO: </b>Keimah a ka leng i bia a ka ruah, \"Ka mi na si\" tiah a ka chimh, Khi khin kan um lioah kan lawmhnak kha\r\n    Hohmanh nih an hngal lai lo.</p>",
        "id": "350",
        "name": "DUM CHUNGAH KA VAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN PATHIAN NIH KHUAL TLAWNG MI KHA</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Kan Pathian nih khual tlawngmi kha, Biakar fekbik kha a pek, Vawlei in vancung khua lam ah, \"Ka mit in kan\r\n    hmuhsak lai\"</p>\r\n<p><b>CHO: </b>Kan hmuhsak lai, Kan hmuhsak lai, Ka mit in kan hmuhsak lai, Vawlei in vacung khua lam ah Ka mit in kan\r\n    hmuhsak lai.</p>\r\n<p><b>2. </b>Sual fawrhnak na zuan deng tikah, Na hawi nih an hlawt ahcun, Bia-karnak kha na lung chungah Kan hmuhsak\r\n    nak na zumh lai.</p>\r\n<p><b>CHO: </b>Kan hmuhsak lai, Kan hmuhsak lai, Ka mit in kan hmuhsak lai, Vawlei in vacung khua lam ah Ka mit in kan\r\n    hmuhsak lai.</p>\r\n<p><b>3. </b>Na ruahchan lung a rawh tikah, A tlau dih ngaingai ahcun, Bawi Jesuh a biakam nak kha, Na lung i thle law\r\n    va zum.</p>\r\n<p><b>CHO: </b>Kan hmuhsak lai, Kan hmuhsak lai, Ka mit in kan hmuhsak lai, Vawlei in vacung khua lam ah Ka mit in kan\r\n    hmuhsak lai.</p>\r\n<p><b>4. </b>Thihnak khua a muih deng tikah, Na thihnak lai caan a nai, Na Bawipa au thawng va ngai tuah, \"Ka mit in\r\n    kan hmuhsak lai\".</p>\r\n<p><b>CHO: </b>Kan hmuhsak lai, Kan hmuhsak lai, Ka mit in kan hmuhsak lai, Vawlei in vacung khua lam ah Ka mit in kan\r\n    hmuhsak lai.</p>",
        "id": "351",
        "name": "KAN PATHIAN NIH KHUAL TLAWNG MI KHA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AMAH NIH KA SUALNAK A KALPI</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Bawipa thangthat in hla ka sa lai, Ka tlantu a si ca ah; Hla in ka sa lai a ka dawtnak, Zungzal in ka sa\r\n    lai</p>\r\n<p><b>CHO: </b>Amah nih ka sualnak a kalpi (kalpi) A min thiangbik cu, thangthat cio tuah u! Amah nih ka sualnak a\r\n    kalpi (kalpi) A min cu thangthat tuah u.</p>\r\n<p><b>2. </b>Amah sinah ka sual vialte he, Dinhnak duh ah ka ra i, Ka thlacam ngaih in a ka luatter, Hi hla hi ka sa\r\n    lai.</p>\r\n<p><b>CHO: </b>Amah nih ka sualnak a kalpi (kalpi) A min thiangbik cu, thangthat cio tuah u! Amah nih ka sualnak a\r\n    kalpi (kalpi) A min cu thangthat tuah u.</p>\r\n<p><b>3. </b>Amah nih thihnak a tei caah, Ka thih tiang ka thangthat lai; A zungzal in ka thangthat ko lai Zeitik hmanh\r\n    dong loin</p>\r\n<p><b>CHO: </b>Amah nih ka sualnak a kalpi (kalpi) A min thiangbik cu, thangthat cio tuah u! Amah nih ka sualnak a\r\n    kalpi (kalpi) A min cu thangthat tuah u.</p>",
        "id": "352",
        "name": "AMAH NIH KA SUALNAK A KALPI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SIANGPAHRANG FA</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Kei mah ka Pa cu mirum ngai a si, Vawleicung chaw vialte amah ta an si, Lungvar, sui le ngun, zeizong\r\n    vialte kha Keimah ka Pa ta a dihlak in an si.</p>\r\n<p><b>CHO: </b>Siangpahrang fa ka si, A dawtmi ka si, Jesuh ka khamhtu he, Siangpahrang fa kan si.</p>\r\n<p><b>2. </b>Ka Pa Pathian Fa mi khamhtu Bawi nih, Vawlei mi bantukin a rak vakvai ve, Sihmanhseh atu vancung a um i\r\n    Keimah zong vancung ah inn a ka pek lai.</p>\r\n<p><b>CHO: </b>Siangpahrang fa ka si, A dawtmi ka si, Jesuh ka khamhtu he, Siangpahrang fa kan si.</p>\r\n<p><b>3. </b>Vawlei cungah hin, Khualmi ka rak si, Sualnak cu ka lung duhmi a rak si tawn, Atu cu Pathian fa kha ka si\r\n    cang, Inn le puan dawh le luchin kha ka hmuh lai.</p>\r\n<p><b>CHO: </b>Siangpahrang fa ka si, A dawtmi ka si, Jesuh ka khamhtu he, Siangpahrang fa kan si.</p>\r\n<p><b>4. </b>Thlam maw inn tha zong zei ah ka rel hnga? Vancung ah inn dawhbik an ka sakpiak ko, Ral taang le vakvai\r\n    kha si ko hmanh ning \"Pathian thangthat si ko seh,\" tiah ka sak lai.</p>\r\n<p><b>CHO: </b>Siangpahrang fa ka si, A dawtmi ka si, Jesuh ka khamhtu he, Siangpahrang fa kan si.</p>",
        "id": "353",
        "name": "SIANGPAHRANG FA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THA CHIN KHA REL TUAH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Vawleicung sifahnak kha na hmuh tikah, Na ruahchannak kha a dongh dengmang ahcun, Thachin pakhat hnu\r\n    pakhat na rel lai i Pathian nih tampi an pek kha na hngalh lai.</p>\r\n<p><b>CHO: </b>Thachin pakhat hnu pakhat rel tuah, A tampi an pek kha na hngalh lai; Thachin rel tuah, pakhat hnu\r\n    pakhat, Pathian nih zeitluk an dawt kha na hngalh lai.</p>\r\n<p><b>2. </b>Si tha mirum mi kha na hmuh tik hna ah, Jesuh nih pek an duhmi thil kha va ruat, Chaw in na cawk khawh lo\r\n    na co awk thil kha, Vancung ah na hmuh lai mi kha, va ruat tuah.</p>\r\n<p><b>CHO: </b>Thachin pakhat hnu pakhat rel tuah, A tampi an pek kha na hngalh lai; Thachin rel tuah, pakhat hnu\r\n    pakhat, Pathian nih zeitluk an dawt kha na hngalh lai.</p>\r\n<p><b>3. </b>Harnak le sifahnak na cung tlung hmanhseh, Thachin pakhat hnu pakhat va rel than tuah, Lungfehnak le\r\n    thachin a si tiah ruat ko, Kannih thiannak ca harnak kha a herh ve.</p>\r\n<p><b>CHO: </b>Thachin pakhat hnu pakhat rel tuah, A tampi an pek kha na hngalh lai; Thachin rel tuah, pakhat hnu\r\n    pakhat, Pathian nih zeitluk an dawt kha na hngalh lai.</p>\r\n<p><b>4. </b>Ngaih-chiatnak kha tlung hmanhseh, Zeihmanh va phang hlah Pathian nih laksawng tha nangmah ca a chiah.\r\n    Khuadawm le nitlang vawlei ca a that bang Minung thatnak caah khuadawm kha a herh.</p>\r\n<p><b>CHO: </b>Thachin pakhat hnu pakhat rel tuah, A tampi an pek kha na hngalh lai; Thachin rel tuah, pakhat hnu\r\n    pakhat, Pathian nih zeitluk an dawt kha na hngalh lai.</p>",
        "id": "354",
        "name": "THA CHIN KHA REL TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HAWITHA KA HMUH CANG</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Keimah nih hawitha ka hmuh cang, Ka hngalh hlan in a ka dawt, Dawtnak hri in a ka hnuh i, Khi hri in a ka\r\n    tem dih Ka lungthin kha a ka tem i, Ho hmanh nih an phoih kho lo, Ka ta a si, a ta ka si, Zungzal in zungzal\r\n    tiangin.</p>\r\n<p><b>2. </b>Keimah nih hawitha ka hmuh cang, Keimah khamh awkah a thi, Nunnak kha a ka pek hleiah, A pum tiang zong a\r\n    ka pek, Keimah ta zeihmanh a um lo, Ka Bawipa ta a si dih, Ka thazang, nunnak, ka zeizong, Amah nih a pen zungzal.</p>\r\n<p><b>3. </b>Keimah nih hawitha ka hmuh cang, Sunparnak kha a ka pek, Vancung lam i ka kal lioah, Inntha chungah a ka\r\n    hruai, A zungzal a lianh-ngannak nih, A ka bawmtu a si cang, Ruahchan nak in ka tuan lai i, Hnangam in ka um te\r\n    lai.</p>\r\n<p><b>4. </b>Keimah nih hawitha ka hmuh cang, A ka hramh i a ka dawt, Fimnak lam kha a ka hmuhsak, Bochan awkah a tha\r\n    fawn, Khi tluk a ka dawmi sinin, Zeidah a ka then kho lai, Nunnak, thihnak, hrem hmun nih maw, Then hlah a ta ka si\r\n    ko.</p>",
        "id": "355",
        "name": "HAWITHA KA HMUH CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A KA HRUAINAK KIP AH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Lungnem nuntha tuukhal zoh tuah! Tidai pawng a dir lioah, Rawltam tihal mi kal u si, Ramtha chungah kal u\r\n    si.</p>\r\n<p><b>CHO: </b>A hmuhsak lam kan zulh lai (lam kan zulh lai) Ahmuhsak lam kan zulh lai (lam kan zulh lai)\r\n    Hal-le-lu-jah, Hal-le-lu-jah, Khua zakip ah kan zulh lai.</p>\r\n<p><b>2. </b>Nunnak kutka a lutmi lawng, Pathian nih a hlawm hna lai, Amah a lu a hlohnak in, Nunnak kha a kan pek\r\n    cang.</p>\r\n<p><b>CHO: </b>A hmuhsak lam kan zulh lai (lam kan zulh lai) Ahmuhsak lam kan zulh lai (lam kan zulh lai)\r\n    Hal-le-lu-jah, Hal-le-lu-jah, Khua zakip ah kan zulh lai.</p>\r\n<p><b>3. </b>Nunnak kawm ah him in a lut, A penmi tuu kha kan si, Amah kha Pathian a hngalh bang, Kannih zong a kan\r\n    hngalh ve.</p>\r\n<p><b>CHO: </b>A hmuhsak lam kan zulh lai (lam kan zulh lai) Ahmuhsak lam kan zulh lai (lam kan zulh lai)\r\n    Hal-le-lu-jah, Hal-le-lu-jah, Khua zakip ah kan zulh lai.</p>",
        "id": "356",
        "name": "A KA HRUAINAK KIP AH(A/B)",
        "nameb": "1"
    },
    {
        "destext": "<h4 align=\"center\">NUNNAK TI LUANNAK HMUN AH CUN</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Rethei le lungkuaimi hna caah dinnak a um, Nunnak tiluannak hmun ah cun, Vel nih a kan damter, Dawtnak nih\r\n    a kan hnemh, Nunnak ti-luannak hmun ah cun.</p>\r\n<p><b>CHO: </b>Nunnak ti-luannak hmun ah cun (luannak ah cun) Nunnak thing kung a khohnak ah, Hal-le-lu-jah Jesuh le\r\n    dinnak ruangah, ceunak chungah ka nung, Nunnak ti-luannak hmun ah cun (luannak ah cun)</p>\r\n<p><b>2. </b>Ka nunnak nangmah ca dong lo lawmhnak a um, Nunnak tiluannak hmun ah cun, Khrih nih hi vawlei ah, Zaangfah\r\n    luatnak an put, Nunnak tiluannak hmun ah cun.</p>\r\n<p><b>CHO: </b>Nunnak ti-luannak hmun ah cun (luannak ah cun) Nunnak thing kung a khohnak ah, Hal-le-lu-jah Jesuh le\r\n    dinnak ruangah, ceunak chungah ka nung, Nunnak ti-luannak hmun ah cun (luannak ah cun)</p>\r\n<p><b>3. </b>Khamhbawi thangthatnak hla tlanhcia mi he sa u, Nunnak ti-luannak hmun ah cun, Thahmi Tuufa lawm u,\r\n    Siangpahrang a si cang, Nunnak ti-luannak hmun ah cun.</p>\r\n<p><b>CHO: </b>Nunnak ti-luannak hmun ah cun (luannak ah cun) Nunnak thing kung a khohnak ah, Hal-le-lu-jah Jesuh le\r\n    dinnak ruangah, ceunak chungah ka nung, Nunnak ti-luannak hmun ah cun (luannak ah cun)</p>\r\n<p><b>4. </b>Khi vancung ceunak ah, Amah kan thangthat lai, Nunnak ti-luannak hmun ahcun, A vel le dawtnak in teinak,\r\n    tlinnak kan hmuh, Nunnak tiluannak hmun ah cun.</p>\r\n<p><b>CHO: </b>Nunnak ti-luannak hmun ah cun (luannak ah cun) Nunnak thing kung a khohnak ah, Hal-le-lu-jah Jesuh le\r\n    dinnak ruangah, ceunak chungah ka nung, Nunnak ti-luannak hmun ah cun (luannak ah cun)</p>",
        "id": "357",
        "name": "NUNNAK TI LUANNAK HMUN AH CUN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LAWMHNAK THLAM KA LUNG CHUNGAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Lawmhnak thlam ka lung chungah a um, Jesuh ceunak caah, Hi ceunak ni nak in ceu deuh, Ka lung chung ah a\r\n    um.</p>\r\n<p><b>CHO: </b>Maw hi lawmhnak, lawmhnak sungbik, Keimah lung chungah lawmhnak a um, Jesuh ceunak a langh tikah,\r\n    Lawmhnak ka lung chung a khat.</p>\r\n<p><b>2. </b>Hla dawh thlam ka lungchungah a um, Ka Bawipa thangthat nak; Holh in ka chim khawh lomi hla, Jesuh nih a\r\n    theih ko.</p>\r\n<p><b>CHO: </b>Maw hi lawmhnak, lawmhnak sungbik, Keimah lung chungah lawmhnak a um, Jesuh ceunak a langh tikah,\r\n    Lawmhnak ka lung chung a khat.</p>\r\n<p><b>3. </b>Thing ram hnah a corh than caan bangin, Ka lung corhnak a um, Va kai lawmhnak caan a tlun bang, Ka\r\n    lung-lawmhnak a tlung.</p>\r\n<p><b>CHO: </b>Maw hi lawmhnak, lawmhnak sungbik, Keimah lung chungah lawmhnak a um, Jesuh ceunak a langh tikah,\r\n    Lawmhnak ka lung chung a khat.</p>\r\n<p><b>4. </b>Thangthat, ruah-channak, lawmhnak, dawtnak, Ka lung ah a um i, Atu le hmailei thluachuah ca, Lunglawmhnak\r\n    kha ka ngei.</p>\r\n<p><b>CHO: </b>Maw hi lawmhnak, lawmhnak sungbik, Keimah lung chungah lawmhnak a um, Jesuh ceunak a langh tikah,\r\n    Lawmhnak ka lung chung a khat.</p>",
        "id": "358",
        "name": "LAWMHNAK THLAM KA LUNG CHUNGAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN KAN SIN A TAN AHCUN</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Bawipa cu lawm u, A vel-ngeihnak ruangah, Sual hremtu cu a thek dih hna, Thisen in a kan tlanh cang tih\r\n    awk um lo, Jesuh cu kan zeizong a si.</p>\r\n<p><b>CHO: </b>Pathian cu (Pathian cu kan sin) kan sin a tan (a tan cang ahcun, A) cang ahcun Aho nih dah doh in an kan\r\n    tei khawh hnga, Ho, ho? Ho (dah a kan tei hnga,) Ho nih dah an kan tei khawh ti hnga.</p>\r\n<p><b>2. </b>Bawipa bochan in, Nan tha tho chin ko seh, Nifa zumh-tlakmi si dingin, That-lonak lakah dinnak cu kan tanh\r\n    lai, Amah cu kan thawnnak a si.</p>\r\n<p><b>CHO: </b>Pathian cu (Pathian cu kan sin) kan sin a tan (a tan cang ahcun, A) cang ahcun Aho nih dah doh in an kan\r\n    tei khawh hnga, Ho, ho? Ho (dah a kan tei hnga,) Ho nih dah an kan tei khawh ti hnga.</p>\r\n<p><b>3. </b>A bia cu zum tuah, A biakamnak a hmun, Khrih cu zeizong vialte a si, Vawlei dong hmanhseh a bia zungzal a\r\n    hmun, Bawipa biafiang tialmi an si.</p>\r\n<p><b>CHO: </b>Pathian cu (Pathian cu kan sin) kan sin a tan (a tan cang ahcun, A) cang ahcun Aho nih dah doh in an kan\r\n    tei khawh hnga, Ho, ho? Ho (dah a kan tei hnga,) Ho nih dah an kan tei khawh ti hnga.</p>\r\n<p><b>4. </b>Bawipa chungah um, Him in an huhphenh lai, Zungzal nunnak caan a phan cang, A derthawm bik hmanh a kut in\r\n    a huhphenh hna, Hohmanh nih an chut kho lai lo!</p>\r\n<p><b>CHO: </b>Pathian cu (Pathian cu kan sin) kan sin a tan (a tan cang ahcun, A) cang ahcun Aho nih dah doh in an kan\r\n    tei khawh hnga, Ho, ho? Ho (dah a kan tei hnga,) Ho nih dah an kan tei khawh ti hnga.</p>",
        "id": "359",
        "name": "PATHIAN KAN SIN A TAN AHCUN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA CUNGAH I LAWM TUAH U</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Lungthin a dingmi vialte hna, Jesuh sinah lunglawm tuah u, Bawi Jesuh a thim vialte hna, Ngaihchiat\r\n    thinphannak kha hlaw tuah.</p>\r\n<p><b>CHO: </b>Lawm tuah, (Lawmtuah, Jesuh sin lawm) lawm tuah (Lawm tuah), Jesuh sinah lunglawm tuah u, Lawmtuah (Jesu\r\n    sin lawm tuah) lawm tuah (lawm tuah) Jesuh sinah lunglawm tuah u.</p>\r\n<p><b>2. </b>Bawi Jesuh kha lawm cio tuah u, Van le vawlei zong kha a uk; A kut chung ummi kan si i, A nunnak in a kan\r\n    tlanh cang.</p>\r\n<p><b>CHO: </b>Lawm tuah, (Lawmtuah, Jesuh sin lawm) lawm tuah (Lawm tuah), Jesuh sinah lunglawm tuah u, Lawmtuah (Jesu\r\n    sin lawm tuah) lawm tuah (lawm tuah) Jesuh sinah lunglawm tuah u.</p>\r\n<p><b>3. </b>Bawipa a ralkap vialte hna, Rul-hreu nih tei deng hmanh sehlaw, Jesuh a zulmi vialte kha Ral vialte nakin\r\n    an thawng deuh.</p>\r\n<p><b>CHO: </b>Lawm tuah, (Lawmtuah, Jesuh sin lawm) lawm tuah (Lawm tuah), Jesuh sinah lunglawm tuah u, Lawmtuah (Jesu\r\n    sin lawm tuah) lawm tuah (lawm tuah) Jesuh sinah lunglawm tuah u.</p>\r\n<p><b>4. </b>Chun caan ah khuamui hmanhsehlaw, Khuamui nih van phen hmanhsehlaw, Na thlarau tihnak a um lo, Nunnak a\r\n    dongh tiangin zum tuah.</p>\r\n<p><b>CHO: </b>Lawm tuah, (Lawmtuah, Jesuh sin lawm) lawm tuah (Lawm tuah), Jesuh sinah lunglawm tuah u, Lawmtuah (Jesu\r\n    sin lawm tuah) lawm tuah (lawm tuah) Jesuh sinah lunglawm tuah u.</p>",
        "id": "360",
        "name": "BAWIPA CUNGAH I LAWM TUAH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NAIH CHIN</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Na kan kawh thawng kha Bawipa ka theih cang, Na kan dawtnak a ka chimh, Zumhnak in na sinah kai chin ka\r\n    duh Na ke hram ah um ka duh.</p>\r\n<p><b>CHO: </b>Jesuh a in vai-lamtahnak kha, Keimah kha ka naihter tuah, Naih chin, naih chin, naih chin, naih chin ka\r\n    Bawipa; Naih chinter nangmah sinah.</p>\r\n<p><b>2. </b>Pathian na riantuan awkah ka thleidang, Nangmah min in tuah ka duh, Keimah ka thlarau ruahchannak hmu seh,\r\n    Kei ca nangmah nawl siseh.</p>\r\n<p><b>CHO: </b>Jesuh a in vai-lamtahnak kha, Keimah kha ka naihter tuah, Naih chin, naih chin, naih chin, naih chin ka\r\n    Bawipa; Naih chinter nangmah sinah.</p>\r\n<p><b>3. </b>Nangmah ke hram ah thla ka cam tikah, Lawmhnak zeitluk in ka hmuh, Kan dawi dua cio bantukin kan in nawl\r\n    Na ka chawnh ahcun ka duh.</p>\r\n<p><b>CHO: </b>Jesuh a in vai-lamtahnak kha, Keimah kha ka naihter tuah, Naih chin, naih chin, naih chin, naih chin ka\r\n    Bawipa; Naih chinter nangmah sinah.</p>\r\n<p><b>4. </b>A sungmi dawtnak, keimah ka hngal lo, Thihnak tiva tan hlanah, Lawmhnak bik kha keimah nih ka hmuh lai,\r\n    Thluachuahnak ka hmuh tikah.</p>\r\n<p><b>CHO: </b>Jesuh a in vai-lamtahnak kha, Keimah kha ka naihter tuah, Naih chin, naih chin, naih chin, naih chin ka\r\n    Bawipa; Naih chinter nangmah sinah.</p>",
        "id": "361",
        "name": "NAIH CHIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZEIZONGTE JESUH CA</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Mi Khamhbawi na dawtnak, Na ka pek ca, Zeihmanh ka thup lai lo, Nangmah sinin Dawtnak in ka kun lai, Ka\r\n    bia ka fehter lai. Na sinah ka laksawng, Ka rak put lai,</p>\r\n<p><b>2. </b>Velngeih thutdan hmaiah, Nangmah kan nawl, Zumhnak tlawm si hmanh ning, Nangmah ka zoh Vailam put kha ka\r\n    bawm, Na dawtnak chim awkah, Thlacam, hlasak khawhnak, Keimah ka bawm.</p>\r\n<p><b>3. </b>Lungthin thiang ka pe tuah, Nangmah bantuk, Nifate nangmah ca Riantuan ka duh. Dawtnak ka chimter tuah, Mi\r\n    zaang ka fahter tuah, Mi kha ka zumhter tuah, Nangmah caah.</p>\r\n<p><b>4. </b>Ka ngeihmi vialte kha, Ka nunnak he, Lawmh le ngaihchiat zongah, Nang ca an si Na hmai ka hmuh tikah, Na\r\n    tlanhmi ka thlarau, Bawi Jesuh, nangmah ca, Zungzal siseh.</p>",
        "id": "362",
        "name": "ZEIZONGTE JESUH CA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RAWL TUANTU A PUMH HNA</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Sunparnak ram in hlasak na thei maw? Lawmhnak hlasak na thei maw? Lungtho tein kan faphal pum u si, A\r\n    donghnak caan a phan deng cang,</p>\r\n<p><b>CHO: </b>Rawltuan uktu Bawipa a ra deng cang, Aan dawh hmaipanh cu kan hmuh cang lai, Rawltuan uktu Bawipa a ra\r\n    deng cang, Rawltuan tu a pumh hna lai.</p>\r\n<p><b>2. </b>Kan dawtmi hna nih, sunparnak ram in, Lunglawm in an run kan zoh, An rian an lim i harnak an lonh cang,\r\n    Kamhmi sui luchin an hmuh cang,</p>\r\n<p><b>CHO: </b>Rawltuan uktu Bawipa a ra deng cang, Aan dawh hmaipanh cu kan hmuh cang lai, Rawltuan uktu Bawipa a ra\r\n    deng cang, Rawltuan tu a pumh hna lai.</p>\r\n<p><b>3. </b>Sunparnak ram in hladawh a rung thang, Kan lung thin cu a thawnter, Cu hla aw dawh nih nunnak a thanter,\r\n    Ni lin tang rian kan tuan lioah,</p>\r\n<p><b>CHO: </b>Rawltuan uktu Bawipa a ra deng cang, Aan dawh hmaipanh cu kan hmuh cang lai, Rawltuan uktu Bawipa a ra\r\n    deng cang, Rawltuan tu a pumh hna lai.</p>\r\n<p><b>4. </b>Sunparnak ram in hla dawh a rung thang; Lawmhnak le par dawh enhnak, A nungmi zumhnak thawngin kan hngalh\r\n    cang, Kannih zong kan sa ti hna lai.</p>\r\n<p><b>CHO: </b>Rawltuan uktu Bawipa a ra deng cang, Aan dawh hmaipanh cu kan hmuh cang lai, Rawltuan uktu Bawipa a ra\r\n    deng cang, Rawltuan tu a pumh hna lai.</p>",
        "id": "363",
        "name": "RAWL TUANTU A PUMH HNA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH CA NUN</h4> <p>Doh is F</p> <p><b>1. </b>A ding nunnak Jesuh ca ngeih ka duh, Ka tuah kip amah lunglawmter awkah, Lunglawm lungtha he a sin umnak cu, Khicu keimah ca thluachuah lam a si.</p> <p><b>CHO: </b>Maw Jesuh Khamtu Bawipa,Ka pum nang kan pek ko, Ka sualnak thlah awk caah, Na pum na pek caah; Nang hlei Bawi dang ka ngei lo, Ka lung na thutnak ah; Ka nunnak kan pek, hi hnuah Nang ca lawng ka nung lai</p> <p><b>2. </b>Ka ca a thi, Jesuh ca nun ka duh, Ka sual thang-chiatnak Kal-va-ry ah a in, Khi bang dawtnak ca'h a bia ka ngaih lai, A lam zulh in ka zeizong ka pek lai.</p> <p><b>CHO: </b>Maw Jesuh Khamtu Bawipa,Ka pum nang kan pek ko, Ka sualnak thlah awk caah, Na pum na pek caah; Nang hlei Bawi dang ka ngei lo, Ka lung na thutnak ah; Ka nunnak kan pek, hi hnuah Nang ca lawng ka nung lai</p> <p><b>3. </b>Khua zakip ah Jesuh ca nun ka duh, A min thiang in rian kip kha ka tuan lai, Temhnak ngaih-chiatnak kha ka in lai i, Khi cu vailamtah put ah ka rel lai.</p> <p><b>CHO: </b>Maw Jesuh Khamtu Bawipa,Ka pum nang kan pek ko, Ka sualnak thlah awk caah, Na pum na pek caah; Nang hlei Bawi dang ka ngei lo, Ka lung na thutnak ah; Ka nunnak kan pek, hi hnuah Nang ca lawng ka nung lai</p> <p><b>4. </b>Vawlei caan chung Jesuh ca nun ka duh, A nih-thlam ka ca hlawntha bik a si, Rethei a tlaumi kha a kawl hna i, Amah sin dinh awkah a ratpi hna.</p> <p><b>CHO: </b>Maw Jesuh Khamtu Bawipa,Ka pum nang kan pek ko, Ka sualnak thlah awk caah, Na pum na pek caah; Nang hlei Bawi dang ka ngei lo, Ka lung na thutnak ah; Ka nunnak kan pek, hi hnuah Nang ca lawng ka nung lai</p>",
        "id": "364",
        "name": "JESUH CA NUN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZEIZONG VIALTE JESUH SINAH KA PEK LAI</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Zeizong hlawt tak in ka Khamhtu Nangmah kha kan zulh lai ta; Maw ka Bawipa, nangmah lei ah, Na lam kha kan\r\n    hmuhsak tuah.</p>\r\n<p><b>CHO: </b>Zeizong te ka pek, Zeizong te ka pek, Zeizong te Bawipa kut chungah, Keimah nih ka pek (Zeizongte ka\r\n    pek)</p>\r\n<p><b>2. </b>Maw ka Khamhtu Bawi, keimah nih Nangmah sinah naih ka duh; Ngaihchin in kan halnak bia kha, Ngai law, ka\r\n    khamh tuah, Bawipa.</p>\r\n<p><b>CHO: </b>Zeizong te ka pek, Zeizong te ka pek, Zeizong te Bawipa kut chungah, Keimah nih ka pek (Zeizongte ka\r\n    pek)</p>\r\n<p><b>3. </b>Maw a ka Khamhtu, keimah nih Vawlei lawmhnak ka chiahtak; Thiang Thlarau in, maw ka Bawipa, Rung um tuah\r\n    ka lung chungah.</p>\r\n<p><b>CHO: </b>Zeizong te ka pek, Zeizong te ka pek, Zeizong te Bawipa kut chungah, Keimah nih ka pek (Zeizongte ka\r\n    pek)</p>\r\n<p><b>4. </b>Maw kan Khamhtu Bawi, keimah nih, Khamhnak hla kha ka sak lai, Vancung ram tha ka phak hlan tiang, Nangmah\r\n    thawngin kaa lawm lai.</p>\r\n<p><b>CHO: </b>Zeizong te ka pek, Zeizong te ka pek, Zeizong te Bawipa kut chungah, Keimah nih ka pek (Zeizongte ka\r\n    pek)</p>",
        "id": "365",
        "name": "ZEIZONG VIALTE JESUH SINAH KA PEK LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NANGMAH KHA KAN HNGATCHAN</h4> <p>Doh is Eb</p> <p><b>1. </b>Ka lung in kan hngatchan, Nang Kal-va-ry Tuufa, Khamhtu Pathian, Thla kha ka cam lioah, Ka sualnak va thlah tuah, Nihin in Nangmah fa, ka siter tuah.</p> <p><b>2. </b>Keimah lung zaang-nemnak, Nangmah vel-ngeihnak nih, A fehter cang, Kei ca'h na thih caah Nangmah kan dawtnak cu, A mit lo mei bangin alh zungzal seh.</p> <p><b>3. </b>Khuamui lak khual ka tlawng, Ngaih-chiatnak kha ka tong Ka hruai ko sawh, Khuamui va ceuter tuah, Ka hna ngamter ko law; Nangmah sinin ka Pa, Lam tlau hlah ning.</p> <p><b>4. </b>Vawlei nun dongh tikah, Thihnak tikik nih cun A ka khuh lai, Cun dawtnak in Khamhbawi, Tihnak vialte hlo tuah, Him tein ka kaipi, Nangmah sinah.</p>",
        "id": "366",
        "name": "NANGMAH KHA KAN HNGATCHAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLARAU LO CHUNGAH VORH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Thlarau lo chungah vorh, Nifatin vorh u, Hmunkip le ramkip ah dawtnak thlaici vorh, Thlarau thiang he vorh\r\n    u, Bawipa kha zum u, Lunglawm tein tuan u laksawng kan hmu lai.</p>\r\n<p><b>CHO: </b>Hmai (Hmaipanh in vorh ko u), panh in vorh ko u, (Hmaipanh in vorh ko u), Ni a liam deng cang, (Ni a\r\n    liam deng cang) Zaangzel loin tuan u, Rian aa lim hlan tiang.</p>\r\n<p><b>2. </b>Thlarau lo chungah vorh, Thlacam zungzal u, Kan thlaici vorhmi zong an kheu tuan ko lai, Ruah sur tertu\r\n    Pathian, Zumh buin vorh u, Zing ciciai thlaikho dawh kan hmuh zau hna lai.</p>\r\n<p><b>CHO: </b>Hmai (Hmaipanh in vorh ko u), panh in vorh ko u, (Hmaipanh in vorh ko u), Ni a liam deng cang, (Ni a\r\n    liam deng cang) Zaangzel loin tuan u, Rian aa lim hlan tiang.</p>\r\n<p><b>3. </b>Thlarau lo chungah vorh, Zumhnak tlawm hmanhseh, Mitthli tla in lungdernak um len hmanhseh, Kan rian aa\r\n    lim hlan tiang, Vorh than len ko u, Zun caan a phanh tikah lawmhnak a hmun lai.</p>\r\n<p><b>CHO: </b>Hmai (Hmaipanh in vorh ko u), panh in vorh ko u, (Hmaipanh in vorh ko u), Ni a liam deng cang, (Ni a\r\n    liam deng cang) Zaangzel loin tuan u, Rian aa lim hlan tiang.</p>",
        "id": "367",
        "name": "THLARAU LO CHUNGAH VORH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA UM TAM PIIN RAK PU</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Bawipa thlua-chuahnak tling tein hmuh awkah na lungthin le, Nunnak he na kawl tawn maw? Na Pa biakamnak\r\n    kha hal law a bia bantukin ra tuah, Thluachuah nak lampi chungah.</p>\r\n<p><b>CHO: </b>Na lungthin (Na lungthin cu) cu liam thluahmah in a khahter lai, (a khah a liamter lai) Bawipa nih an\r\n    fial bangin, \"Na um vialte rak pu hna,\" Na lungthin cu (Na lungthin cu) liam thluahmah in a khahter lai. (a khah a\r\n    liamter lai) Thiang-thlarau thawnnak hmual he.</p>\r\n<p><b>2. </b>Na um rak pu law Jesuh thi chungah thiang tein tawl tuah, Mi chambau hna ra tuah u, Nannih thiannak hmuh\r\n    awk ah Bawipa thutdan hmai in hngak u, Thiang Thlarau a rung tum tiang.</p>\r\n<p><b>CHO: </b>Na lungthin (Na lungthin cu) cu liam thluahmah in a khahter lai, (a khah a liamter lai) Bawipa nih an\r\n    fial bangin, \"Na um vialte rak pu hna,\" Na lungthin cu (Na lungthin cu) liam thluahmah in a khahter lai. (a khah a\r\n    liamter lai) Thiang-thlarau thawnnak hmual he.</p>\r\n<p><b>3. </b>Um chung chiti a zor lo bang Bawipa vel zong a dong lo, A dawtnak aa thleng bal lo, A thiang thlarau le\r\n    thawn nak he bia a kan kam bantuk in, Um vialte a khahter lai.</p>\r\n<p><b>CHO: </b>Na lungthin (Na lungthin cu) cu liam thluahmah in a khahter lai, (a khah a liamter lai) Bawipa nih an\r\n    fial bangin, \"Na um vialte rak pu hna,\" Na lungthin cu (Na lungthin cu) liam thluahmah in a khahter lai. (a khah a\r\n    liamter lai) Thiang-thlarau thawnnak hmual he.</p>",
        "id": "368",
        "name": "NA UM TAM PIIN RAK PU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A KA HRUAINAK AH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Ka Khamhtu aunak thawng ka theih, Ka Khamhtu aunak thawng ka theih, Ka Khamhtu aunak thawng ka theih, \"Na\r\n    vailam putin ka zul,\" a ti. A ka hruainak ah ka zulh lai,A ka hruainak ah ka zulh lai, A ka hruainak ah ka zulh\r\n    lai, Khuazei hmanh ah, Amah ka zulh lai.</p>\r\n<p><b>2. </b>Amah he dum ah ka kal lai, Amah he dum ah ka kal lai, Amah he dum ah ka kal lai, Khua-zeihmanh ah Amah ka\r\n    zulh lai. A ka hruainak ah ka zulh lai,A ka hruainak ah ka zulh lai, A ka hruainak ah ka zulh lai, Khuazei-hmanh\r\n    ah, Amah ka zulh lai.</p>\r\n<p><b>3. </b>Biaceihnak tiangin ka zulh lai, Biaceihnak tiang in ka zulh lai, Biaceihnak tiangin ka zulh lai,\r\n    Khua-zeihmanh ah Amah ka zulh lai. A ka hruainak ah ka zulh lai,A ka hruainak ah ka zulh lai, A ka hruainak ah ka\r\n    zulh lai, Khua-zeihmanh ah, Amah ka zulh lai.</p>\r\n<p><b>4. </b>Vel le sunpar a ka pek lai, Vel le sunpar a ka pek lai, Vel le sunpar a ka pek lai, Lam dongh tiangin a ka\r\n    kalpi lai. A ka hruainak ah ka zulh lai,A ka hruainak ah ka zulh lai, A ka hruainak ah ka zulh lai, Khuazei-hmanh\r\n    ah, Amah ka zulh lai.</p>",
        "id": "369",
        "name": "A KA HRUAINAK AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NANGMAH HE KAN KAL LAI</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Mi dang ca rian-tuannak lam ah, Nangmah sinah ka kal ve lai, Thilrit phorh lung-retheih tik ah, Nangmah\r\n    nih ka bawm tuah, Bawipa.</p>\r\n<p><b>2. </b>Nangmah bia zumh aa harhmi cu, Cawnpiak awkah rak ka bawm tuah, Lam palhmi kha vancung lam cu, Hmuhsak\r\n    awkah ka cawnpiak tuah.</p>\r\n<p><b>3. </b>Lung-saunak kha ka cawnpiak law, Zumhnak fehtertu rian tha ah, Palhnak teitu bochannak ah, Nangmah kha kan\r\n    naih chinchin lai.</p>\r\n<p><b>4. </b>Nangmah bochannak le dawtnak, Ka nun lioah ka duh ngaingai Nangmah daihnak lawmhnak chungah, Bawipa, nang\r\n    he kan kal ti lai.</p>",
        "id": "370",
        "name": "NANGMAH HE KAN KAL LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA CA'H KA NUNG LAI</h4> <p>Doh is F</p> <p><b>1. </b>Ka nunnak le ka dawtnak kha, Nangmah sinah khan kan pek ko, Nangmah bia ka ngaih lai, Bawipa, A ka Khamhbawi Jesuh.</p> <p><b>CHO: </b>Keimah a ka Khamhtu caah Ka nunnak kha ka hman ko lai, Keimah ka lung aa lawm ngaingai, A ka Khamhbawi Jesuh.</p> <p><b>2. </b>Nangmah biak awkah ka um cang, Ka nunnak ca nang na thi cang, Tu hnu ah kan lawmh chinchin lai, Maw ka Khamhtu Jesuh.</p> <p><b>CHO: </b>Keimah a ka Khamhtu caah Ka nunnak kha ka hman ko lai, Keimah ka lung aa lawm ngaingai, A ka Khamhbawi Jesuh.</p> <p><b>3. </b>Ka thlarau khamh awkah, Bawipa, Kal-va-ry tlang cungah na thi, Ka pum dihlak nangmah kan pek, A ka Khamhbawi Jesuh.</p> <p><b>CHO: </b>Keimah a ka Khamhtu caah Ka nunnak kha ka hman ko lai, Keimah ka lung aa lawm ngaingai, A ka Khamhbawi Jesuh.</p>",
        "id": "371",
        "name": "NA CA'H KA NUNG LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA, KEIMAH NUNNAK HI THIANTER KO</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Bawipa, keimah nunnak hi Thianter ko, nangmah caah, Nangmah nih na ka dawt ca, Ka kut nih na riantuan seh,\r\n    Ka kut nih na riantuan seh.</p>\r\n<p><b>2. </b>Ka ke hi, Bawipa hmang law, Rianrang le dawh in kal seh, Zungzal hla in ka sak lai, Ka Siangpahrang\r\n    thangthatnak, Ka Siangpahrang thangthatnak.</p>\r\n<p><b>3. </b>Nangmah nih ka hmurka hi, Biatha chimnak ah hmang ko, Ka sui le ngun vialte zong, Nangmah thang-thatnak\r\n    siseh, Nangmah thangthatnak siseh.</p>\r\n<p><b>4. </b>Ka Pathian kan dawtnak hi, Na kehram ah ka rak put, Ka nunnak a dihlak in, Nangmah ta ah siter ko, Nangmah\r\n    ta ah siter ko.</p>",
        "id": "372",
        "name": "BAWIPA, KEIMAH NUNNAK HI THIANTER KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH, NA DUHNAK BANG SI KO SEH</h4> <p>Doh is Eb</p> <p><b>1. </b>Jesuh na duhnak bang, Kei duhnak siter ko, Na dawtnak kut thiang ah, Ka pum dihlak kan pek, Lawmh le ngaihchiat zongah, Lam ka hmuhsak ko tuah, \"Bawipa na nawl siseh,\" Tiah chim ka bawm ko tuah.</p> <p><b>2. </b>Jesuh na duhnak bang, Mitthli tlak lio zongah, Ruahchannak arfi cu, Zeituk hmanh muihter hlah, Kei zong nangmah bangin, Ka ngaihchiat ve tikah, \"Bawipa na nawl siseh,\" Tiah chim ka bawm ko tuah.</p> <p><b>3. </b>Jesuh na duhnak bang, Kei ca a tha dih ko, Zei bang caan thlen hmanh ah, Nangmah cu kan bochan, Vancung ka inn leiah, Hnangam te'n ka kal i, \"Bawipa na nawl siseh,\" Tiah zungzal sa ko ning.</p>",
        "id": "373",
        "name": "JESUH, NA DUHNAK BANG SI KO SEH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MAW JESUH, BIA KAN KAMH CANG</h4> <p>Doh is G</p> <p><b>1. </b>Maw Jesuh Khrih ka Bawipa, A dongh tiang kan biak lai, Zungzal in ka umpi tuah, Ka Bawipa le ka Hawi, Ral dohnak ka tih lai lo, Ka sin na um ahcun, Lam zong kha ka tlau lai lo, Nang na ka hruai ahcun.</p> <p><b>2. </b>Ka pawng na um ka hngalhter, Vawlei ka um lioah, Tukforhnak a phunphun kha, Ka hmuh i ka theih hna, Ral nih an ka naih zungzal, Ka pawng le ka chungin, Jesuh ra ka naih deuh law, Ka thlarau khamh ko sawh.</p> <p><b>3. </b>Maw Jesuh Khrih nangmah nih, Na zultu vialte cu, Na sunparnak ram ah khin, Um awk bia na kam hna, Cuca'h a donghnak tiangin, Nangmah cu kan biak lai, Nangmah kan zulh khawh nakhnga, Na vel run ka pe ko.</p>",
        "id": "374",
        "name": "MAW JESUH, BIA KAN KAMH CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA SI BANGIN KA CO</h4>\r\n<p>Doh is E</p>\r\n<p><b>1. </b>Khamhbawi Jesuh run ka ngai tuah, Ka thi lai na ka khamh lo ah, Nangmah luat khamhnak ka put tuah, Ka si\r\n    bang run ka co.</p>\r\n<p><b>CHO: </b>Ka si bang run ka co, Ka si bang run ka co, Jesuh, Khrih thihnak thawng lawng in, Ka si bang run ka co.</p>\r\n<p><b>2. </b>Na vel hngal lo ka sual tuk cang, Keimah ca na thi na thlet cang, Na ka ser khawh na duhnak bang, Ka si\r\n    bang run ka co.</p>\r\n<p><b>CHO: </b>Ka si bang run ka co, Ka si bang run ka co, Jesuh, Khrih thihnak thawng lawng in, Ka si bang run ka co.</p>\r\n<p><b>3. </b>Zeite hmanh ah kaa remh kho lo, Bia kan kamnak ka hrawh tuk ko, Na min tal in ka khamh ko sawh, Ka si bang\r\n    run ka co.</p>\r\n<p><b>CHO: </b>Ka si bang run ka co, Ka si bang run ka co, Jesuh, Khrih thihnak thawng lawng in, Ka si bang run ka co.</p>\r\n<p><b>4. </b>Na kehram ah run ka zoh tuah, Ka thlacamnak ka ngaihpiak tuah, Na bia bangin va tlinter tuah, Ka si bang\r\n    run ka co.</p>\r\n<p><b>CHO: </b>Ka si bang run ka co, Ka si bang run ka co, Jesuh, Khrih thihnak thawng lawng in, Ka si bang run ka co.</p>",
        "id": "375",
        "name": "KA SI BANGIN KA CO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TAM DEUH BAWIPA BANG SI AWK AH</h4> <p>Doh is Db</p> <p><b>1. </b>Bawipa bantuk si awkah kaa zuam lai, Amah nunnem toidornak bantukin, Tuannak lungthin din ralthatnak tam deuh in Riantuan lungthin thiannak tam deuh in a duh.</p> <p><b>CHO: </b>Ka lung la tuah, Na ca lawng si ko ning, Ka lung la tuah, Na ca si cang ko seh, Ka sual tlan tuah, Bawipa, atu kan nawl Ka thianter cang ko, nang ca si cang ko ning.</p> <p><b>2. </b>Tam deuh Bawipa bang si awk thla ka cam, Vai-lamtah innak ca thazang tam deuh, A pennak tlunter awk zuamnak tam deuh in, Tam deuh Amah ziaza mi tlau hruainak ca'h.</p> <p><b>CHO: </b>Ka lung la tuah, Na ca lawng si ko ning, Ka lung la tuah, Na ca si cang ko seh, Ka sual tlan tuah, Bawipa, atu kan nawl Ka thianter cang ko, nang ca si cang ko ning.</p> <p><b>3. </b>Tam deuh Bawipa bantuk ka nung cang lai, Tam deuh Amah dawtnak ka hmuhsak lai. Ga-li-lee a um bang tam deuh aa sumnak, Tam deuh in Bawipa bang um zungzal ka duh.</p> <p><b>CHO: </b>Ka lung la tuah, Na ca lawng si ko ning, Ka lung la tuah, Na ca si cang ko seh, Ka sual tlan tuah, Bawipa, atu kan nawl Ka thianter cang ko, nang ca si cang ko ning.</p>",
        "id": "376",
        "name": "TAM DEUH BAWIPA BANG SI AWK AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NANGMAH DUHNAK BANG KA SITER KO</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Nangmah duhnak bang ka siter ko, Um sertu na si, kei tlak ka si, Thlacam in nangmah kan hngah lioah,\r\n    Nangmah duhning te-in ka ser ko.</p>\r\n<p><b>2. </b>Nangmah duhnak bang ka siter ko, Ka Bawipa nangmah ka hneksak ko, Nangmah hmai i ka kun lioah hin, Hawhra\r\n    nak rang in run ka thianh ko.</p>\r\n<p><b>3. </b>Nangmah duhnak bang ka siter ko, Ka tha a ba i run ka bawm ko, Lianh-ngannak vialte na ta an si, Maw ka\r\n    Khamhtu Bawi ka damter ko.</p>\r\n<p><b>4. </b>Nangmah duhnak bang ka siter ko, Ka nunnak dihlak nangmah uk ko, Bawi Khrih ka chungin a langh hlan tiang\r\n    Na Thiang Thlarau in ka khahter ko.</p>",
        "id": "377",
        "name": "NANGMAH DUHNAK BANG KA SITER KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH TUANBIA KA CHIM TUAH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Bawipa Jesuh kong ka chim tuah, Ka lung chungah umter tuah, A sung bik tuanbia ka chim tuah, Zeidang nak\r\n    in a thlum bik. Vancung mi nih hla an sak mi, A chuahnak an lawmhnak hla, \"Cungnung Pathian thangtha ko seh, Lei ah\r\n    daihnak um ko seh.\"</p>\r\n<p><b>CHO: </b>Bawipa Jesuh kong ka chim tuah, Ka lung chungah umter tuah; A sungbik tuanbia ka chim tuah, Zei dang\r\n    nakin a thlumbik.</p>\r\n<p><b>2. </b>Rawltam in leicar nak hmun ah, Chun zan a innak chim tuah, Kan sualnak ca tukforh a in, Siseh a dongh\r\n    tiang a tei. Caan saupi rian har a tuan nak, Ngaihchiat a innak chim tuah, Serhsat le tuk-velhnak a ing, Inn ngei\r\n    loin a vakvai.</p>\r\n<p><b>CHO: </b>Bawipa Jesuh kong ka chim tuah, Ka lung chungah umter tuah; A sungbik tuanbia ka chim tuah, Zei dang\r\n    nakin a thlumbik.</p>\r\n<p><b>3. </b>Lungkuai, temhnak a inmi le, Thir an khenhnak kong chim tuah, Thlan chung an vuinak kong chim tuah, A\r\n    thawhthannak zong chim tuah. A dawtnak cu a thlumbik ko, Zei dang nakin a fiang deuh, Kei ca nunnak a pek mi nih\r\n    Mitthli a tlakter zungzal.</p>\r\n<p><b>CHO: </b>Bawipa Jesuh kong ka chim tuah, Ka lung chungah umter tuah; A sungbik tuanbia ka chim tuah, Zei dang\r\n    nakin a thlumbik.</p>",
        "id": "378",
        "name": "JESUH KONG KA CHIM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH KHRIH KAN KHAMHTU</h4> <p>Doh is G</p> <p><b>1. </b>Hodah van in a rung tum? Jesuh Khrih kan Khamhtu, Ngakchia sem in a hrin maw? Jesuh Khrih kan Khamhtu.</p> <p><b>CHO: </b>Lawmhnak in thangthat tuah u, Khamhnak kha a kan pek cang, Amah tluk tu an um lo, Jesuh Khrih kan Khamhtu.</p> <p><b>2. </b>Hodah thing cungah an thlai? Jesuh Khrih kan Khamhtu, Nang le kei ca'h a tuar maw? Jesuh Khrih kan Khamhtu.</p> <p><b>CHO: </b>Lawmhnak in thangthat tuah u, Khamhnak kha a kan pek cang, Amah tluk tu an um lo, Jesuh Khrih kan Khamhtu.</p> <p><b>3. </b>Hodah ngaihthiam a kan kam? Jesuh Khrih kan Khamhtu, Hodah \"Nan nung lai,\" a ti? Jesuh Khrih kan Khamhtu</p> <p><b>CHO: </b>Lawmhnak in thangthat tuah u, Khamhnak kha a kan pek cang, Amah tluk tu an um lo, Jesuh Khrih kan Khamhtu.</p> <p><b>4. </b>Hodah zungzal biaceihtu? Jesuh Khrih kan Khamhtu, Aho nawl dah kan ngaih lai? Jesuh Khrih kan Khamhtu.</p> <p><b>CHO: </b>Lawmhnak in thangthat tuah u, Khamhnak kha a kan pek cang, Amah tluk tu an um lo, Jesuh Khrih kan Khamhtu.</p> <p><b>5. </b>Hodah van in tum than lai? Jesuh Khrih kan Khamhtu, Hodah a kan hruai te lai? Jesuh Khrih kan Khamhtu.</p> <p><b>CHO: </b>Lawmhnak in thangthat tuah u, Khamhnak kha a kan pek cang, Amah tluk tu an um lo, Jesuh Khrih kan Khamhtu.</p>",
        "id": "379",
        "name": "JESUH KHRIH KAN KHAMHTU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NIH A KAN CEUTER</h4> <p>Doh is G</p> <p><b>1. </b>Bawi Jesuh nih atu a kan ceuter, Khua-muihnak ah meiinn a ceu tawn bangin, Cu bangin kan ceu lai khua muihnak ah, Kannih kan umnak cio in ceu u si.</p> <p><b>2. </b>Jesuh nih Amah ca'h a kan ceuter, Kan ceu lo zongah tha tein a kan hngalh, Kan ceunak hmuh awk van in a kan zoh, Kannih kan umnak cio in ceu u si.</p> <p><b>3. </b>Jesuh a kan ceuter, kan innpa ca, Sifahnak chung in an lung lawmhter u si, Kan nun chung ceu lo a tha bal lai lo, Kannih kan umnak cio in ceu u si.</p>",
        "id": "380",
        "name": "JESUH NIH A KAN CEUTER",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NIH A KA DAWT</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Jesuh a ka dawt ka hngalh, Baibal ca chungah aa tial, Ngakchia zong kha a dawt hna, Jesuh zaang an fah ca\r\n    ah.</p>\r\n<p><b>CHO: </b>Keimah a ka dawt, Keimah a ka dawt, Keimah a ka dawt, Baibal ca in ka hngalh.</p>\r\n<p><b>2. </b>Jesuh a ka dawt a si, Vancung kutka a hun cang, Ka sualnak kha a tawl lai, Ngakchia sem luhter lai.</p>\r\n<p><b>CHO: </b>Keimah a ka dawt, Keimah a ka dawt, Keimah a ka dawt, Baibal ca in ka hngalh.</p>\r\n<p><b>3. </b>Jesuh a ka dawt ko ta, Keimah a ka kalpi lai, Amah nih ka thih tikah, A ka lak lai vancung ah.</p>\r\n<p><b>CHO: </b>Keimah a ka dawt, Keimah a ka dawt, Keimah a ka dawt, Baibal ca in ka hngalh.</p>",
        "id": "381",
        "name": "JESUH NIH A KA DAWT",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LUNGVAR SUNG</h4>\r\n<p>Doh is E</p>\r\n<p><b>1. </b>A tum tikah, a tum tikah, A dawtmi khamh awkah, Amah lungvar, sungmi lungvar, Jesuh dawtmi hna.</p>\r\n<p><b>CHO: </b>Amah sumthawng an dawhter, Deirel arfi bangin, An i dawhnak in a ceu, A sumthawng lungvar.</p>\r\n<p><b>2. </b>A khawmh hna lai, a khawmh hna lai, A peng chung chiah awkah, A thiang a ceumi vialte kha, Jesuh dawtmi\r\n    hna.</p>\r\n<p><b>CHO: </b>Amah sumthawng an dawhter, Deirel arfi bangin, An i dawhnak in a ceu, A sumthawng lungvar.</p>\r\n<p><b>3. </b>Ngakchia no hna, ngakchia sem hna, Jesuh a dawtmi hna, A thimmi lungvar sung an si, A ngaite an si.</p>\r\n<p><b>CHO: </b>Amah sumthawng an dawhter, Deirel arfi bangin, An i dawhnak in a ceu, A sumthawng lungvar.</p>",
        "id": "382",
        "name": "LUNGVAR SUNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NIH KEIMAH HMANH KHA A KA DAWT</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Vancung khua a ummi kan Pathian nih, Baibal in a kan dawtnak kha a chim, Cu cauk ah bia tha tampi ka hmuh,\r\n    A sungbik cu Jesuh dawtnak a si.</p>\r\n<p><b>CHO: </b>Bawi Jesuh nih a ka dawt caah tampi kaa lawm, tampi kaa lawm, Keimah hmanh kha a ka dawt caah, Ka lung\r\n    aa lawm ngaingai.</p>\r\n<p><b>2. </b>Amah ka philh i lam tlau hmanh ning law, Ka tlaunak hmun kipah a ka ruah ko, Jesuh dawtnak kha ka ruah\r\n    than tikah, A kut chungah rianrang in ka tli ko.</p>\r\n<p><b>CHO: </b>Bawi Jesuh nih a ka dawt caah tampi kaa lawm, tampi kaa lawm, Keimah hmanh kha a ka dawt caah, Ka lung\r\n    aa lawm ngaingai.</p>\r\n<p><b>3. </b>Jesuh a ka dawt Amah ka dawt ve, Ka thlarau khamh awkah Jesuh a tum, Dawtnak in vailam ah a lu a hloh,\r\n    Jesuh a ka dawt ngai te a si ko.</p>\r\n<p><b>CHO: </b>Bawi Jesuh nih a ka dawt caah tampi kaa lawm, tampi kaa lawm, Keimah hmanh kha a ka dawt caah, Ka lung\r\n    aa lawm ngaingai.</p>\r\n<p><b>4. </b>A lianngan Siangpahrang ka hmuh tikah, Ka hla sungbik cu mah hi a si lai; A zungzal dong loin vanram ah\r\n    khin, \"Jesuh nih a ka dawt,\" tiah ka sak lai.</p>\r\n<p><b>CHO: </b>Bawi Jesuh nih a ka dawt caah tampi kaa lawm, tampi kaa lawm, Keimah hmanh kha a ka dawt caah, Ka lung\r\n    aa lawm ngaingai.</p>",
        "id": "383",
        "name": "JESUH NIH KEIMAH HMANH KHA A KA DAWT",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NGAKCHIA ZONG NIH AN AUPI LAI</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Ngakchuan semmawng hmanh nih tlanhnak kong an aupi lai, Khamhtu le a vailam tung put in a kan tlanhnak\r\n    kong, Rili ral um khua zakip mi lung hna-ngamternak ca, An thawhlawm in Pathian Baibal ca cu an kuat hna.</p>\r\n<p><b>CHO: </b>Ngakchuan semmawng hih lunglawmhnak thawng an thanh lai, Misung Khamhtu a dawtnak, Ngakchuan semmawng\r\n    nih an aupi lai i, Vancung lam cu an hmuhsak hna lai.</p>\r\n<p><b>2. </b>Ngakchuan semmawng hmanh nih Bawipa rian an tuan ve lai, Ngaih-chiatnak khuadawm le minmei cu an tianter\r\n    khawh lai, Lung rethei le thadi zaangbang ngaihchia lungkuai mi kha, Niceu dawh bang hnemhnak an-nem in an hnemh\r\n    khawh hna.</p>\r\n<p><b>CHO: </b>Ngakchuan semmawng hih lunglawmhnak thawng an thanh lai, Misung Khamhtu a dawtnak, Ngakchuan semmawng\r\n    nih an aupi lai i, Vancung lam cu an hmuhsak hna lai.</p>\r\n<p><b>3. </b>Semmawng rual cu Khamhtu nih a hnakkar ah a tenh hna, Velngeih thluachuah khamhnak cu an hrawm khawh ve\r\n    hna lai i, Dawtnak in a zohkhenh hna kha bia in a fianter, Zohkhenhtu vanmi Pathian nih a chiahpiak hna a ti.</p>\r\n<p><b>CHO: </b>Ngakchuan semmawng hih lunglawmhnak thawng an thanh lai, Misung Khamhtu a dawtnak, Ngakchuan semmawng\r\n    nih an aupi lai i, Vancung lam cu an hmuhsak hna lai.</p>",
        "id": "384",
        "name": "NGAKCHIA ZONG NIH AN AUPI LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NUNSUN CAAN CU A TAWI TUK</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Nun sun caan cu a tawi tuk, Hnah-kau tilh ko khi a hluan, Faphal vun tom ko a hluan, I tim u, Nunnak ni a\r\n    liam tuan e, Thihnak zong a liam tuan lai, Zawtfah harnak an lo lai, I tim u.</p>\r\n<p><b>CHO: </b>I tim u (i tim u) I tim u (i tim u) Jesuh nih an auh lengmang hna, I tim u, (i tim u) Sualnak caan nan\r\n    ngan ahcun, Kutka khar kanh nan si lai, Vansang au in nan um lai, I tim u.</p>\r\n<p><b>2. </b>Par dawh hna cu an ziam tawn, Seino iang zong an ziam ve, Caan sau maw nan nun lem lai, I tim u, Pathian\r\n    thlarau nih an auh, Maw misual vakvai ti hlah, Vansang au in nan um lai, I tim u.</p>\r\n<p><b>CHO: </b>I tim u (i tim u) I tim u (i tim u) Jesuh nih an auh lengmang hna, I tim u, (i tim u) Sualnak caan nan\r\n    ngan ahcun, Kutka khar kanh nan si lai, Vansang au in nan um lai, I tim u.</p>\r\n<p><b>3. </b>Caan nih rianrang in an liam, Thih hnu biaceihnak a nai, Jesuh sin hung zuang dingin, I tim u, Thihnak ni\r\n    a tlun hlanah, Nang luatnak ca thla ka cam, Hell ram nan panh nakhnga lo, I tim u.</p>\r\n<p><b>CHO: </b>I tim u (i tim u) I tim u (i tim u) Jesuh nih an auh lengmang hna, I tim u, (i tim u) Sualnak caan nan\r\n    ngan ahcun, Kutka khar kanh nan si lai, Vansang au in nan um lai, I tim u.</p>\r\n<p><b>4. </b>Nang misual ralring, bia ngai, Bawipa cu i thim ko cang, Van ah lawmhnak a leng lai, I tim tuah, Mui lakin\r\n    ceunak ah ra, Jesuh nih an sersiam lai, Vanlam lei panh in ra cang, I tim tuah.</p>\r\n<p><b>CHO: </b>I tim u (i tim u) I tim u (i tim u) Jesuh nih an auh lengmang hna, I tim u, (i tim u) Sualnak caan nan\r\n    ngan ahcun, Kutka khar kanh nan si lai, Vansang au in nan um lai, I tim u.</p>",
        "id": "385",
        "name": "NUNSUN CAAN CU A TAWI TUK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AA ZUAMMI KHRIHFA BU</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>A hlat a nai, Khrihfabu-mi Pumh awkah ra chuak cio tuah u, Ruah-channak le lung-lawmhnak in Pathian bia\r\n    kha ngai cio tuah u,</p>\r\n<p><b>CHO: </b>Aa zuammi Khrihfabu, Jesuh sin aa pummi, Lungkhat thinkhat tein, A min liannak chim u; Pathian pennak\r\n    caah, Zuam cio ko tuah u si; Kan Khrihfabu hmunhnak thlacam zungzal u si.</p>\r\n<p><b>2. </b>Kan Siangpahrang Thangthatnak hla Sak awk caah, kan i pum i Mino zong nih Pathian sinah, Zungzal lu-nunnak\r\n    kha an hmuh,</p>\r\n<p><b>CHO: </b>Aa zuammi Khrihfabu, Jesuh sin aa pummi, Lungkhat thinkhat tein, A min liannak chim u; Pathian pennak\r\n    caah, Zuam cio ko tuah u si; Kan Khrihfabu hmunhnak thlacam zungzal u si.</p>\r\n<p><b>3. </b>Kan Bawi riantuan, I tlaih ko u Kan biakamnak kha remh than u, Amah sin vancung phak hlan tiang, Zumh\r\n    karhnak in rian tuan u si.</p>\r\n<p><b>CHO: </b>Aa zuammi Khrihfabu, Jesuh sin aa pummi, Lungkhat thinkhat tein, A min liannak chim u; Pathian pennak\r\n    caah, Zuam cio ko tuah u si; Kan Khrihfabu hmunhnak thlacam zungzal u si.</p>",
        "id": "386",
        "name": "AA ZUAMMI KHRIHFA BU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAL LAW TUAN</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Khrihfa tho u, it ti hlah, Tahnak kan dinhtak lai maw? A nawl a kan pek lioah, Kan thu sawhsawh ko lai\r\n    maw?</p>\r\n<p><b>CHO: </b>Kal law tuan (kal law tuan) hramthawk cang hen, (hramthawk cang hen) Kal law kawl, (kal law kal) a\r\n    tlaumi hna, (a tlawm hna) Sual muih si-fahnak chungin, Rawldanghnak ah hun hruai hna.</p>\r\n<p><b>2. </b>Khamhtu kan daw taktak maw? A biakam kan zum kho maw? Kan zeizong kan pe siang maw? A bia kan ngai lai lo\r\n    maw?</p>\r\n<p><b>CHO: </b>Kal law tuan (kal law tuan) hramthawk cang hen, (hramthawk cang hen) Kal law kawl, (kal law kal) a\r\n    tlaumi hna, (a tlawm hna) Sual muih si-fahnak chungin, Rawldanghnak ah hun hruai hna.</p>\r\n<p><b>3. </b>Zumh hnga tluk in kan zum maw? A chim bangin kan nung maw? Amah ta lawng kan si maw? Zumhnak cu rian ah\r\n    lang seh.</p>\r\n<p><b>CHO: </b>Kal law tuan (kal law tuan) hramthawk cang hen, (hramthawk cang hen) Kal law kawl, (kal law kal) a\r\n    tlaumi hna, (a tlawm hna) Sual muih si-fahnak chungin, Rawldanghnak ah hun hruai hna.</p>\r\n<p><b>4. </b>Kan put hnga vai-lamtah cu, Sui luchin ruahchan ahcun; Teima tein tuan cio u, Caan a tawi ni a tlawm cang.</p>\r\n<p><b>CHO: </b>Kal law tuan (kal law tuan) hramthawk cang hen, (hramthawk cang hen) Kal law kawl, (kal law kal) a\r\n    tlaumi hna, (a tlawm hna) Sual muih si-fahnak chungin, Rawldanghnak ah hun hruai hna.</p>",
        "id": "387",
        "name": "KAL LAW TUAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA KHA ZUL KO</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Zei thil paoh tlung hmanhseh, Bawipa kha zul ko, Lam kha mui hmanhsehlaw, Hruaitu kha zul ko, Ral nih an\r\n    in lem i, Tih awk nai hmanhseh, Jesuh sin kal ahcun tih awk a um lo,</p>\r\n<p><b>CHO: </b>Raltha in (Ral tha in, hmailei ah kal tuah), hmailei ah kal tuah, Na thazang (Na thazang thar chin ko\r\n    seh; chin ko seh), thar chin ko seh, Nifa in na Khamhtu zul tuah, Amah nih a dongh tiang an hruai lai.</p>\r\n<p><b>2. </b>Khuazei na kal hmanh ah, Bawipa kha zul ko, Muihnak le harnak ah, Lam an hmuhsak lai, Amah ceunak nih na\r\n    lam a ceuter lai, Thetse ram vialte kha a parter dih lai</p>\r\n<p><b>CHO: </b>Raltha in (Ral tha in, hmailei ah kal tuah), hmailei ah kal tuah, Na thazang (Na thazang thar chin ko\r\n    seh; chin ko seh), thar chin ko seh, Nifa in na Khamhtu zul tuah, Amah nih a dongh tiang an hruai lai.</p>\r\n<p><b>3. </b>Lam ah i din loin, Bawipa kha zul ko, An fialmi nawl paoh cu, Khualrang in tuah ko, An fial tikah tho law,\r\n    hmai leiah kal tuah, Jesuh he kal ahcun na tlau kho lai lo,</p>\r\n<p><b>CHO: </b>Raltha in (Ral tha in, hmailei ah kal tuah), hmailei ah kal tuah, Na thazang (Na thazang thar chin ko\r\n    seh; chin ko seh), thar chin ko seh, Nifa in na Khamhtu zul tuah, Amah nih a dongh tiang an hruai lai.</p>",
        "id": "388",
        "name": "BAWIPA KHA ZUL KO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SEINO KAN SI LIOAH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Seino kan si lioah, Kan thazang tam lioah, Nang kan nunnak kan Bawipa cu, Kan lungthin kan in pek, Kan\r\n    laksawng cohlang tuah, Na duh bang kan siter, Kan Pa duhnak tlinter awkah, Kan nunchung kan bawm tuah.</p>\r\n<p><b>2. </b>Khoika kan um hmanh ah, Nangmah duhnak tuah le, Na hmaika i um bantukin, Lungthin kan ngeihter tuah, Thil\r\n    ngan thim theng loin, Thil hme nautat loin, Kan rian paoh cu nangmah kut in, Kan hmuh, kan hngalhter tuah.</p>\r\n<p><b>3. </b>Biatak le lungthin thiang, Kan duh nakhnga kan bawm, Caan tawite hmanh ruahnak tha lo, Kan ngeih nakhnga\r\n    lo le, Raltha le tih loin, Kan dir nakhnga kan bawm, A thiangmi thil a duhtu le, Thiang lo hua si kan bawm.</p>\r\n<p><b>4. </b>Bawi Jesuh Khrih Thlarau, Kan lungchung ceuter tuah, A thiang le dawtnak nunnak lam, Kan zulh khawh\r\n    nakhnga in, Kan hmailei kum caah, Nangmah nih kan tim ko, Kan Pa ram chung zungzal nunnak, Kannih kan phak hlan\r\n    tiang.</p>",
        "id": "389",
        "name": "SEINO KAN SI LIOAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TUANBIA HLUN KHA KA CHIM TUAH</h4> <p>Doh is C</p> <p><b>1. </b>Tuanbia hlun kha ka chim tuah, Jesuh dawtnak kong kha, Hmuh lomi cunglei thil kong, Jesuh sunparnak cu. Fiang tein ka chim ko tuah, Ngakchia sin chim bangin, Zaang tlawm le misual ka si, Bawmtu dang ka ngei lo.</p> <p><b>CHO: </b>Tuanbia hlun cu ka chim tuah, Tuanbia hlun cu ka chim tuah, Tuanbia hlun cu ka chim tuah, Jesuh dawtnak kong kha.</p> <p><b>2. </b>Duhsah tein ka chim tuah, Fiang te'n ka hngalh nak hnga, Cu tlanhnak khuaruahhar cu, Sual damternak a si. Voi tampi in ka chim tuah, Ka philh sual nakhnga lo, Dapti a tian zau bangin, Ka khamhnak ka philh tawn.</p> <p><b>CHO: </b>Tuanbia hlun cu ka chim tuah, Tuanbia hlun cu ka chim tuah, Tuanbia hlun cu ka chim tuah, Jesuh dawtnak kong kha.</p> <p><b>3. </b>Kan Pa pekmi hlan bia kha, Lungtak tein chim tuah, Sual thlahnak pek awk caah, Jesuh a tum philh hlah. Keimah lung hna-ngamter awk, Na duh ngaingai ahcun, Sifahnak ka phak tikah, Hi tuanbia ka chim tuah.</p> <p><b>CHO: </b>Tuanbia hlun cu ka chim tuah, Tuanbia hlun cu ka chim tuah, Tuanbia hlun cu ka chim tuah, Jesuh dawtnak kong kha.</p> <p><b>4. </b>Vawlei sunpar duhnak nih, A ka tei deng tikah, Hi bantuk tihnak chungah, Tuanbia hlun kha chim tuah. Sihmanhseh khi vancung ram, Sunparnak langh tikah, \"Bawi Jesuh nih an khamh cang,\" Hi tuanbia ka chim tuah.</p> <p><b>CHO: </b>Tuanbia hlun cu ka chim tuah, Tuanbia hlun cu ka chim tuah, Tuanbia hlun cu ka chim tuah, Jesuh dawtnak kong kha.</p>",
        "id": "390",
        "name": "TUANBIA HLUN KHA KA CHIM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NA UMNAK KHA VA CEUTER TUAH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>A har a ngan rian-tuannak kha na tuan khawh tiangin, Ceunak kha a hlatpi umtak hlah, Na pawng a ummi rian\r\n    tuannak kha a ceu tiangin, Na umnak kha va ceuter tuah.</p>\r\n<p><b>CHO: </b>Na umnak kha va ceuter tuah, Na umnak kha va ceuter tuah, A hlatpi mi an lam har kha va hmuhsak, ka fa,\r\n    Na umnak kha va ceuter tuah.</p>\r\n<p><b>2. </b>A nai te ah khuadawmnak kha na hawhter khawh lai, Nangmah lila nih va phen hna hlah, Mi lungthin chungah\r\n    hla fungkhat a luh khawh tiangin, Na umnak kha va ceuter tuah.</p>\r\n<p><b>CHO: </b>Na umnak kha va ceuter tuah, Na umnak kha va ceuter tuah, A hlatpi mi an lam har kha va hmuhsak, ka fa,\r\n    Na umnak kha va ceuter tuah.</p>\r\n<p><b>3. </b>Mah hin na fimnak vialte kha hmannak a si lai, Mah hin ar fi bantukin ceu tuah, Nangmah kut in nunnak\r\n    changreu kha na pek khawh lai, Na umnak kha va ceuter tuah.</p>\r\n<p><b>CHO: </b>Na umnak kha va ceuter tuah, Na umnak kha va ceuter tuah, A hlatpi mi an lam har kha va hmuhsak, ka fa,\r\n    Na umnak kha va ceuter tuah.</p>",
        "id": "391",
        "name": "NA UMNAK KHA VA CEUTER TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NAN SI KHO LAI MAW? BAWIPA NIH A TI</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Keimah he vai-lamtah awkah, Nan si kho lai maw? a ti, A si, thih tiang kan in zulh lai, Mithawng hna nih\r\n    khan an ti.</p>\r\n<p><b>CHO: </b>\"Bawipa kan ngamh ko,\" Na ta kan si dih, Kan ser than tuah law, nang bang thiang in, Na ceu hruainak cu,\r\n    kan cungah um seh, Cu na ceunak cun, Na sinah kan hruai ko.</p>\r\n<p><b>2. </b>Vailam an thah misual pa bang, Bawipa nan zoh kho lai maw? Ngaih-thiamnak in a thlarau cu, Pa-ra-dais hmun\r\n    sung a co.</p>\r\n<p><b>CHO: </b>\"Bawipa kan ngamh ko,\" Na ta kan si dih, Kan ser than tuah law, nang bang thiang in, Na ceu hruainak cu,\r\n    kan cungah um seh, Cu na ceunak cun, Na sinah kan hruai ko.</p>\r\n<p><b>3. </b>Ngaih-chiatnak nih minmei bangin, Na kiang in an kulh tikah, Thlarau nih zeizong a tei dih, Na lung cu a\r\n    fek lai maw?</p>\r\n<p><b>CHO: </b>\"Bawipa kan ngamh ko,\" Na ta kan si dih, Kan ser than tuah law, nang bang thiang in, Na ceu hruainak cu,\r\n    kan cungah um seh, Cu na ceunak cun, Na sinah kan hruai ko.</p>\r\n<p><b>4. </b>\"Nan si kho ngaingai lai maw?\" tiah, Bawipa nih zungzal a ti, Raltha hna nih an lu an suk, Gal-li-lee\r\n    mithawng bangin.</p>\r\n<p><b>CHO: </b>\"Bawipa kan ngamh ko,\" Na ta kan si dih, Kan ser than tuah law, nang bang thiang in, Na ceu hruainak cu,\r\n    kan cungah um seh, Cu na ceunak cun, Na sinah kan hruai ko.</p>",
        "id": "392",
        "name": "NAN SI KHO LAI MAW? BAWIPA NIH A TI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA LUNG CHUNGAH AW THLUM A RUNG THANG</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Bawi Jesuh nih hla dawh a ka pek, Van in a rungmi a si, Khi nak dawh deuh hla aw a um bal lo, Dawtnak hla\r\n    aw thlum a si.</p>\r\n<p><b>CHO: </b>Ka lung chungah aw thlum a rung thang, Van aw thawng he aa remmi hla dawh cu a thang, Ka lung chungah aw\r\n    thlum a rung thang, Dawtnak hla aw thlum a rung thang.</p>\r\n<p><b>2. </b>Kal-va-ry a thimi Khrih ka dawt, Ka sual a tawl dih caah, Ka lung chungah hla aw a khumh tak cang, Ka lung\r\n    chung a um ka hngalh.</p>\r\n<p><b>CHO: </b>Ka lung chungah aw thlum a rung thang, Van aw thawng he aa remmi hla dawh cu a thang, Ka lung chungah aw\r\n    thlum a rung thang, Dawtnak hla aw thlum a rung thang.</p>\r\n<p><b>3. </b>Sunparnak hla dong lo a si lai, Vancungmi he kan sak lai, Ngaih nuammi thangthatnak aw asi lai, Van\r\n    darkhing an tum tikah.</p>\r\n<p><b>CHO: </b>Ka lung chungah aw thlum a rung thang, Van aw thawng he aa remmi hla dawh cu a thang, Ka lung chungah aw\r\n    thlum a rung thang, Dawtnak hla aw thlum a rung thang.</p>",
        "id": "393",
        "name": "KA LUNG CHUNGAH AW THLUM A RUNG THANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWI KHRIH LE KHRIHFABU CAAH</h4> <p>Doh is D</p> <p><b>1. </b>\"Bawi Khrih le Khrihfabu caah,\" tiin, Au cio tuah u, kan Siangpahrang min thangthat u, Seino thazang in tuan kha i tim u si, Biatak le phung ding ca'h fek in dir u si.</p> <p><b>CHO: </b>Jesuh kan Khamhbawi ca le, A thi in a cawkmi, Amah a Khrihfabu ca-ah, Bawipa kan thianter ko.</p> <p><b>2. </b>\"Bawi Khrih le Khrihfabu caah,\" tiin, Thlacam in nifa kan vailam i put u si, Thiang Thlarau thawnnak kha i bochan cio in, Kan caan that bik lioah a rian tuan u si.</p> <p><b>CHO: </b>Jesuh kan Khamhbawi ca le, A thi in a cawkmi, Amah a Khrihfabu ca-ah, Bawipa kan thianter ko.</p> <p><b>3. </b>\"Bawi Khrih le Khrihfabu caah,\" thazang, fimnak, sui le ngun, kan chawva le kan caan zong, Amah cu a tha bik kan ngeihmi vialte, Kan lungthin tak le dawtnak he pe u si.</p> <p><b>CHO: </b>Jesuh kan Khamhbawi ca le, A thi in a cawkmi, Amah a Khrihfabu ca-ah, Bawipa kan thianter ko.</p> <p><b>4. </b>\"Bawi Khrih le Khrihfabu caah\" tiin, Porhhlawt, ruamkainak le mah zawn lawng ruahnak zong, Kan hlawt tikah kan Bawipa orhlei kam ah, Lunglawm in kan thu cio lai, dong ti loin.</p> <p><b>CHO: </b>Jesuh kan Khamhbawi ca le, A thi in a cawkmi, Amah a Khrihfabu ca-ah, Bawipa kan thianter ko.</p>",
        "id": "394",
        "name": "BAWI KHRIH LE KHRIHFABU CAAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHBAWI TUUKHAL BANGIN KAN HRUAI TUAH</h4> <p>Doh is Eb</p> <p><b>1. </b>Khamhbawi, tuukhal bangin kan hruai, Nangmah zohkhenhnak kan herh, Ram-nonak ah kan tlawnter tuah, Himnak ah tuukawm kan pe, Misung Jesuh, Misung Jesuh, Kannih kha na kan cawk cang, Misung Jesuh, Misung Jesuh, Nangmah mi kha kan si cang.</p> <p><b>2. </b>Na mi kan si ca'h kan daw tuah, Lam ding kha kan hmuhsak ko, Na tuu run kha kan zohkhenh tuah, Lam kan palh tikah kan kawl, Misung Jesuh, Misung Jesuh, Thla kan cam tikah ngai tuah, Misung Jesuh, Misung Jesuh, Thla kan cam tikah ngai tuah.</p> <p><b>3. </b>Kan co lai bia na ka kam cang, Mipam, misual sihmanh ning, Kan sualnak kha na kan ngaihthiam, Na vel in na kan luatter, Misung Jesuh, Misung Jesuh, Kan hmet lioin kan co tuah, Misung Jesuh, Misung Jesuh, Kan hmet lioin kan co tuah.</p> <p><b>4. </b>Ngakchia sem kan si ka tein, Na vel-ngeihnak kha kan kawlter, Nangmah lawng mi Khamhtu na si, Dawtnak in kan lung tlinter, Misung Jesuh, Misung Jesuh, Na kan dawt i kan daw rih, Misung Jesuh, Misung Jesuh, Na kan dawt i kan daw rih.</p>",
        "id": "395",
        "name": "KHAMHBAWI TUUKHAL BANGIN KAN HRUAI TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA NU THLACAM THEIH THAN KA DUH</h4>\r\n<p>Doh is Bb. Slow with feeling</p>\r\n<p><b>1. </b>Liam cia caantha hna kha, Ka vun nawl than ve tawn, Ka lung chungah a hung chuak than lengmang. Cawi\r\n    lainak kong ruah ah, Ngang-ngan ngaiin ka um, Ka nu thlacamnak theih than lai ka ngaih.</p>\r\n<p><b>CHO: </b>Ka nu thlacam (nak cu) Theih than lai ka ngaih ko, A aw nemte theih than lai ka ngaih ko, Kei ca\r\n    lawmhnak (lawmhnak) caan sung a si te lai, Ka nu thla cam theih than lai ka ngaih ko.</p>\r\n<p><b>2. </b>Jesuh bochan dingin, Thla a ka campiak tawn, Ceunak thawngtha lam cu ka zulh nakhnga, Bawipa dawtnak zum\r\n    in, Van inn dawh lei ka panh, Cu hmun ah ka nu ka ton than te lai.</p>\r\n<p><b>CHO: </b>Ka nu thlacam (nak cu) Theih than lai ka ngaih ko, A aw nemte theih than lai ka ngaih ko, Kei ca\r\n    lawmhnak (lawmhnak) caan sung a si te lai, Ka nu thla cam theih than lai ka ngaih ko.</p>\r\n<p><b>3. </b>Vawlei a nun lio i, A mit-hmai panh te nih, Hna-ngamnak le lunglawmhnak a ka pek, Van siangpahrang bawi\r\n    cu, Hla in a thangthat tawn, Vanmi hmanh nih ngaih an duh tawnmi hla.</p>\r\n<p><b>CHO: </b>Ka nu thlacam (nak cu) Theih than lai ka ngaih ko, A aw nemte theih than lai ka ngaih ko, Kei ca\r\n    lawmhnak (lawmhnak) caan sung a si te lai, Ka nu thla cam theih than lai ka ngaih ko.</p>\r\n<p><b>4. </b>Vawlei cu kaltak in sui luchin a co cang, A Bawipa tang chungah a din cang lai, Lawmhnak ni zingkhat ah a\r\n    ka don lai ka hngalh, Khi daihnak le dawtnak inn nuam ah khin.</p>\r\n<p><b>CHO: </b>Ka nu thlacam (nak cu) Theih than lai ka ngaih ko, A aw nemte theih than lai ka ngaih ko, Kei ca\r\n    lawmhnak (lawmhnak) caan sung a si te lai, Ka nu thla cam theih than lai ka ngaih ko.</p>",
        "id": "396",
        "name": "KA NU THLACAM THEIH THAN KA DUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HI VAWLEI HI DAWH TEIN</h4> <p>Doh is Ab</p> <p><b>1. </b>Hi vawlei hi dawh tein, Van zong khi khuaruahhar in, Nangmah nih na ser hna i, Na dawtnak a langh caah.</p> <p><b>CHO: </b>Zeizong Bawi nangmah sinah, Hi lunglawmhnak hla kan sa.</p> <p><b>2. </b>Chun le zan chung a ummi, A sungmi caantha vialte, Tlang le nel, thingkung, pangpar, Ni, thla, arfi ceunak ca'h.</p> <p><b>CHO: </b>Zeizong Bawi nangmah sinah, Hi lunglawmhnak hla kan sa.</p> <p><b>3. </b>Pakhat le pakhat dawtnak, Unau, nu, pa fale hna, Lei le vancung ummi hawi, Nunnem ruahnak vialte ca'h.</p> <p><b>CHO: </b>Zeizong Bawi nangmah sinah, Hi lunglawmhnak hla kan sa.</p> <p><b>4. </b>Zungzal in nangmah sinah, Thlacammi na Khrihfabu, Dawtnak kha khua zakip ah, A kalpitu caah hin.</p> <p><b>CHO: </b>Zeizong Bawi nangmah sinah, Hi lunglawmhnak hla kan sa.</p>",
        "id": "397",
        "name": "HI VAWLEI HI DAWH TEIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH KA CHIMH LAI</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Ka harnak vialte Jesuh ka chimh lai, Ka thilrit kei lawng ka phor kho lo, Ka lung retheih lioah a ka bawmh\r\n    lai, A ka dawt i a ka ruah zungzal.</p>\r\n<p><b>CHO: </b>Jesuh ka chimh lai, Jesuh ka chimh lai, Ka thilrit kei lawng ka phor kho lo. Jesuh ka chimh lai! Jesuh\r\n    ka chimh lai Jesuh lawng bawm kho tu cu a si.</p>\r\n<p><b>2. </b>Ka temh innak cu Jesuh ka chimh lai, Amah cu zawn ruah nak he a khat, Bawmhnak ka hal ah cun a ka khamh\r\n    lai, Ka temh innak cu a donghter lai.</p>\r\n<p><b>CHO: </b>Jesuh ka chimh lai, Jesuh ka chimh lai, Ka thilrit kei lawng ka phor kho lo. Jesuh ka chimh lai! Jesuh\r\n    ka chimh lai Jesuh lawng bawm kho tu cu a si.</p>\r\n<p><b>3. </b>Hneksaknak chungin Khamhu Bawi ka herh, Ka thilrit vialte chawng kho tu cu, Jesuh ka chimh lai, Jesuh ka\r\n    chimh lai, Ngaihchiatnak vialte a ka chan lai.</p>\r\n<p><b>CHO: </b>Jesuh ka chimh lai, Jesuh ka chimh lai, Ka thilrit kei lawng ka phor kho lo. Jesuh ka chimh lai! Jesuh\r\n    ka chimh lai Jesuh lawng bawm kho tu cu a si.</p>\r\n<p><b>4. </b>Vawlei nuamhnak nih an ka lem lengmang, Sualnak tuah dingin an ka lem tawn Jesuh ka chimh lai i, a ka\r\n    hruai lai, Vawlei vialte ka tei khawh nakhnga.</p>\r\n<p><b>CHO: </b>Jesuh ka chimh lai, Jesuh ka chimh lai, Ka thilrit kei lawng ka phor kho lo. Jesuh ka chimh lai! Jesuh\r\n    ka chimh lai Jesuh lawng bawm kho tu cu a si.</p>",
        "id": "398",
        "name": "JESUH KA CHIMH LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">INN, KA SEMNO INN</h4> <p>Doh is Eb</p> <p><b>1. </b>Khuali-pi chung i ka um lio caan ah khin, Nuamhnak phun zakip ka hmuh lio caan zongah, Khual ka tlawn ramlak ka um lioah si seh, Lungdaih hna-ngamtertu nang tluk an um lo.</p> <p><b>CHO: </b>Inn, ka semno inn, Dawh tlak hmanh hlah seh, Khin zawn ka ngai lengmang.</p> <p><b>2. </b>Thlataang pa, nang cu kan khua na hmuh lai ti, Bia in ca'h ning vung ka chimhpiak tuah hna law, Thing le ram tlep sialmal in zei lo cang hna, Senri, bingbir, zeitik in khua en hna lai.</p> <p><b>CHO: </b>Inn, ka semno inn, Dawh tlak hmanh hlah seh, Khin zawn ka ngai lengmang.</p> <p><b>3. </b>Caan cu dah ti'n va, thi-hring, khin-ser hna maw, \"Tho law,\" ti'n fing le tlang lung an panhter hna, Kan khua zawl lungrawn hnar le thingtian kip in, Lung hlau hna lai min tin kan run rep lo zong.</p> <p><b>CHO: </b>Inn, ka semno inn, Dawh tlak hmanh hlah seh, Khin zawn ka ngai lengmang.</p> <p><b>4. </b>Va bang zuan thiam ah khin kei va si ning law, Duh caan ah ka vung zuang hnga ngaih lungawi in, Sunghno ka nu a umnak ka innte cu, Ka thluachuah hmuhnak hmasa bik nang na si.</p> <p><b>CHO: </b>Inn, ka semno inn, Dawh tlak hmanh hlah seh, Khin zawn ka ngai lengmang.</p>",
        "id": "399",
        "name": "INN, KA SEMNO INN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">CHUNGKHAR DAWTNAK UM TIKAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Chungkhar dawtnak um tikah, Zeizong te aa dawh, Chungkhar dawtnak um tikah, Lunglawmhnak a tam, Daihnak\r\n    tampi a um i, Kaa kip ah nihnak a um, Dai tein caan nih a dih, Dawtnak umnak ah.</p>\r\n<p><b>CHO: </b>Dawtnak sung, Dawtnak thiang, Dai tein caan nih a dih, Dawtnak umnak ah.</p>\r\n<p><b>2. </b>Chungkhar dawtnak um tikah, Thlam chung hmanh a nuam, Huatnak le nah-chuahnak nih, Zei an tuah kho lo, Kan\r\n    nunnak nuamhter awkah, Kan lamhmi kip vawlei cu, Dawtnak umnak hmun ah cun, Pangpar an cang dih.</p>\r\n<p><b>CHO: </b>Dawtnak sung, Dawtnak thiang, Dai tein caan nih a dih, Dawtnak umnak ah.</p>\r\n<p><b>3. </b>Chungkhar dawtnak um tikah, Zeizong te aa rem, Dawtnak umnak hmun ah cun, Zeizong te a thaw, Innpa he\r\n    remnak a si, Rualchan he dawtnak a si, Khualtlung nih an i lawm i, Thangthatnak a tam.</p>\r\n<p><b>CHO: </b>Dawtnak sung, Dawtnak thiang, Dai tein caan nih a dih, Dawtnak umnak ah.</p>\r\n<p><b>4. </b>Bawi Jesuh Khrih nangmah nih, Kan sinah um tuah, Kan innchungkhar lakah hin, Nang Bawi ah si ko, Nang kan\r\n    sin na um ahcun, Zeihmanh kan tih ti lai lo, Nangmah nih kannih inn cu, Thlua-chuahnak pe ko.</p>\r\n<p><b>CHO: </b>Dawtnak sung, Dawtnak thiang, Dai tein caan nih a dih, Dawtnak umnak ah.</p>",
        "id": "400",
        "name": "CHUNGKHAR DAWTNAK UM TIKAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HAWHRA KHUH CUNGLEI KHUA IN</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Hawhra khuh cunglei khua in, Tanglei a deng khua tiang, Vanrang tangmi vialte nih, Phunglam an palh caah,\r\n    India, Thailand, Tuluk ram, Kawl khua, Lai Tlang ram kip, Mi phun zakip vialte nih Pathian kha an hngal lo.</p>\r\n<p><b>2. </b>Kannih Thawngthabia theimi, Ceunak a hmumi nih, Khuamui chung ummi hna cu, Kan ceuter lai lo maw? Khamhnak\r\n    thawng, maw Khamhnak thawng, Aupi cio ko tuah u, Ramkip hmunkip mi hna nih, Khamhtu an theih hlan tiang.</p>\r\n<p><b>3. </b>Maw, thli hna Amah kong kha, Khua kip ah kalpi u, Mi kip nih an theih hlan tiang, Kalpi lengmang ko u,\r\n    Tuufa nih misual caah, A thih an theih hlan tiang, Khamhtu Bawibik Siangpahrang thangthat in au cio u.</p>",
        "id": "401",
        "name": "HAWHRA KHUH CUNGLEI KHUA IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN I TEL VE HNGA MAW?</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>A ceumi sunparnak inn a um kan hngalh, Cunglei vansang pi ah khin, Tlanh ciami hna cu Jesuh he an um lai,\r\n    Kan i tel ve hnga maw?</p>\r\n<p><b>CHO: </b>Kan i tel ve hnga maw? Kan i tel ve hnga maw? Tlanh ciami hna cu Jesuh he an um lai, Kan i tel ve hnga\r\n    maw?</p>\r\n<p><b>2. </b>Puanrang aih in sui an phahmi lam cungah, Khuadawm tiannak van ah khin, An Pa dawtnak ceu dawh tangah an\r\n    leng lai, Kan i tel ve hnga maw?</p>\r\n<p><b>CHO: </b>Kan i tel ve hnga maw? Kan i tel ve hnga maw? Tlanh ciami hna cu Jesuh he an um lai, Kan i tel ve hnga\r\n    maw?</p>\r\n<p><b>3. </b>Kan Khamhtu dawtnak cu atu hei hmu in, Zumhtlak in zul u si law, Khi inn ah a fale a pumh tik hna ah, Kan\r\n    i tel ve hnga maw?</p>\r\n<p><b>CHO: </b>Kan i tel ve hnga maw? Kan i tel ve hnga maw? Tlanh ciami hna cu Jesuh he an um lai, Kan i tel ve hnga\r\n    maw?</p>\r\n<p><b>4. </b>Vai-lamtah cu kan i dornak a si i, A thi tlengh kan si ahcun, Laksawng sung rel cawk lo cu a kan pek lai,\r\n    Khika kan phanh tikah.</p>\r\n<p><b>CHO: </b>Kan i tel ve hnga maw? Kan i tel ve hnga maw? Tlanh ciami hna cu Jesuh he an um lai, Kan i tel ve hnga\r\n    maw?</p>",
        "id": "402",
        "name": "KAN I TEL VE HNGA MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NIH A PEN ZUNGZAL</h4>\r\n<p>Doh is E</p>\r\n<p><b>1. </b>Ni le thla a kal tawnnak lam, Jesuh a um a pen zungzal, A ngaite vawlei a deng tiang, A pennak a kau\r\n    chinchin lai.</p>\r\n<p><b>2. </b>Holh phun dang hmangmi vialte nih, A dawtnak kha an thangthat cio, Ngakchia zong nih a vel-ngeihnak, Aw\r\n    thlum tein hla kha an phuah.</p>\r\n<p><b>3. </b>A-mah sinah dong hin lo in, Thangthat le thlacam an kai ti; A min cu zi-hmui rimthaw bang, Zing fatein a\r\n    kai zungzal.</p>\r\n<p><b>4. </b>Hi vawlei cung mi vialte nih, Kan Siangpahrang thangthat tuah u, Vancungmi hna tum than tuah u, Nan aw\r\n    thlum in hla sa ve u.</p>\r\n<p><b>5. </b>Khua zakip kha Jesuh a uk, Thatnak a tam a karh chin ko; Sifakmi le re-theimi nih, A zungzal in an i lawm\r\n    lai.</p>",
        "id": "403",
        "name": "JESUH NIH A PEN ZUNGZAL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUARUAHHAR BAWIPA</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ka hngalh bal lomi hna-ngamnak cu ka hmuh cang, Vawlei pek khawh lo mi lawmhnak cu, Ka pum le ka thlarau\r\n    Amah sinah ka pek, Khuaruahhar, khuaruahhar ka Bawipa.</p>\r\n<p><b>CHO: </b>Khua-ruahhar Bawipa, Khua-ruahhar Bawipa, Van ah van mithiang hna nih an thangthat mi, Bawipa na biakinn\r\n    thiang chungah kan kun, Khuaruahhar, khuaruahhar Bawipa.</p>\r\n<p><b>2. </b>Kan nunnak vialte nangmah nawl siseh ti ka duh, Nangmah duhning in ka siter ko, Ka ngeihmi vialte zong,\r\n    nangmah sinah kan pek, Khua-ruahhar, khua-ruahhar ka Bawipa.</p>\r\n<p><b>CHO: </b>Khua-ruahhar Bawipa, Khua-ruahhar Bawipa, Van ah van mithiang hna nih an thangthat mi, Bawipa na biakinn\r\n    thiang chungah kan kun, Khuaruahhar, khuaruahhar Bawipa.</p>\r\n<p><b>3. </b>Ka thil ti khawhnak vial na ke-hram ah ka chiah, Na ka pekmi ka laksawng a si, Na sun-lawinak cu hlan in\r\n    an thangthat zungzal, Khua-ruahhar, khua-ruahhar ka Bawipa.</p>\r\n<p><b>CHO: </b>Khua-ruahhar Bawipa, Khua-ruahhar Bawipa, Van ah van mithiang hna nih an thangthat mi, Bawipa na biakinn\r\n    thiang chungah kan kun, Khuaruahhar, khuaruahhar Bawipa.</p>\r\n<p><b>4. </b>Aa dawhmi vialte nakin nang cu naa dawh deuh, Nang zeizong tuah khotu Nunnak bia; Na lianhngan thawnnak\r\n    he, Na duhnak tlinter ko, Khua-ruahhar, khua-ruahhar ka Bawipa</p>\r\n<p><b>CHO: </b>Khua-ruahhar Bawipa, Khua-ruahhar Bawipa, Van ah van mithiang hna nih an thangthat mi, Bawipa na biakinn\r\n    thiang chungah kan kun, Khuaruahhar, khuaruahhar Bawipa.</p>",
        "id": "404",
        "name": "KHUARUAHHAR BAWIPA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RAWL TUAN CAAN A CU CANG</h4> <p>Doh is Ab</p> <p><b>1. </b>Rawltuan caan a za cang, Zun an cu dih cang, Caan a luan lai ti-in kan Bawipa a au, A bia bang i hnawh u Rawltuan bawm hna u, Lungtho tein an rian cu va bawm hna u.</p> <p><b>CHO: </b>Rawl tuan caan a cu cang, Tuan caan um lioah Caan nih liam zau aa tim Nihin in tuan u.</p> <p><b>2. </b>Rawltuan caan a cu cang, Zeica'h hen na ngan, Rawltuan tu hla aw cu thlizil ah a hrawl, Tuantu nan thin fual u Thlai zun ciahmah u, Zanlei ninem muihnak nih a khuh hlan ah.</p> <p><b>CHO: </b>Rawl tuan caan a cu cang, Tuan caan um lioah Caan nih liam zau aa tim Nihin in tuan u.</p> <p><b>3. </b>Rawltuan caan a cu cang, Hodah aa thawh lai? Bawmtuah hna u, Faphal tom putpi hna u, Rawltuan caan cu nifa An liam ziahmah cang, A donghnak ah Bawipa nih an lawmh hna lai.</p> <p><b>CHO: </b>Rawl tuan caan a cu cang, Tuan caan um lioah Caan nih liam zau aa tim Nihin in tuan u.</p>",
        "id": "405",
        "name": "RAWL TUAN CAAN A CU CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH NIH AN KHAMH CANG</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Lung-lawmhnak thawngtha kan theih, Jesuh nih an khamh cang, Khi thawngtha kha thanh tuah u, Jesuh nih an\r\n    khamh cang, Ram vialte ah va kal law, Khua zakip rili ral tiang, Bawipa thawngtha va chim tuah, Jesuh nih an khamh\r\n    cang.</p>\r\n<p><b>2. </b>Tiva tan in va au tuah, Jesuh nih an khamh cang, A hla naimi sin chim tuah, Jesuh nih an khamh cang,\r\n    Tikulh vialte hlasa u, Khat lei tiang thanter tuah u, Vawlei ah lunglawmhnak kha, Jesuh nih an khamh cang.</p>\r\n<p><b>3. </b>Raldohnak chungah au u, Jesuh nih an khamh cang, Vai-lamtah thihnak caah, Jesuh nih an khamh cang,\r\n    Zaangfahnak kan duh tikah, Nan ruah lai khi thawngthabia, Thihnak teinak hla sa u, Jesuh nih an khamh cang.</p>\r\n<p><b>4. </b>Vawlei ah au tuah u law, Jesuh nih an khamh cang, Mi vialte lunglawmter hna, Jesuh nih an khamh cang, Fing\r\n    le tlang khua zakip ah, Khamhnak bia va chim tuah u, Khi bia teinak hlasaknak Jesuh nih an khamh cang.</p>",
        "id": "406",
        "name": "JESUH NIH AN KHAMH CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RILI KAM MEI KHA CEUTER TUAH</h4> <p>Doh is Bb</p> <p><b>1. </b>Kan Pathian a zaang-fahnak cu, Mei vannak hmun in a ceu, Sihmanhseh rili kam mei cu, Kan zohkhenh awkah a chiah.</p> <p><b>CHO: </b>Rili kam mei kha ceuter tuah, Rili tilet kha lonh seh, Tilet lakah mi an um lai, Nang nih na khamh khawh hna lai.</p> <p><b>2. </b>Sualnak zan-mui cu a ra cang, Tilet thawng kha a thang ko, Tilet chung a ummi hna nih, Mei ceu lawng kha an cuan ko.</p> <p><b>CHO: </b>Rili kam mei kha ceuter tuah, Rili tilet kha lonh seh, Tilet lakah mi an um lai, Nang nih na khamh khawh hna lai.</p> <p><b>3. </b>Nangmah meiinn kha ceuter tuah, Tilet lak a ummi ca'h, Lawng-dinhnak kha an phak hlan ah, Mui lakah an lo sual lai.</p> <p><b>CHO: </b>Rili kam mei kha ceuter tuah, Rili tilet kha lonh seh, Tilet lakah mi an um lai, Nang nih na khamh khawh hna lai.</p>",
        "id": "407",
        "name": "RILI KAM MEI KHA CEUTER TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">CEUNAK TLUNG KO SEH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Muihnak chung a um-mi sinah, Nangmah ceunak tlung ko seh, A kan Khamhtu Jesuh thawngin, Khamhnak kha an\r\n    hmuh khawh lai.</p>\r\n<p><b>CHO: </b>Maw Bawipa, ceunak run pe ko, Rili ral khua zakip ah, Na dawtnak le vel-ngeihnak cu, man pek loin an\r\n    hmuh lai.</p>\r\n<p><b>2. </b>Zan khuamui ngaih-chiatnak chungin, A tlaumi thlarau khamh tuah. A caan zong kha a dih zau lai, Rianrang\r\n    in i tim ko tuah.</p>\r\n<p><b>CHO: </b>Maw Bawipa, ceunak run pe ko, Rili ral khua zakip ah, Na dawtnak le vel-ngeihnak cu, man pek loin an\r\n    hmuh lai.</p>\r\n<p><b>3. </b>Nangmah nih na zultu hna cu, \"Thawngthabia kha chim ko u, Nanmah sinah ka um zungzal,\" tiah bia kha na kan\r\n    kam cang.</p>\r\n<p><b>CHO: </b>Maw Bawipa, ceunak run pe ko, Rili ral khua zakip ah, Na dawtnak le vel-ngeihnak cu, man pek loin an\r\n    hmuh lai.</p>\r\n<p><b>4. </b>Maw kal lengmang Gospel teinak, Rili le khua zakip ah, Muihnak vialte ceu cang ko seh, A caan kha a luan\r\n    hlan ah.</p>\r\n<p><b>CHO: </b>Maw Bawipa, ceunak run pe ko, Rili ral khua zakip ah, Na dawtnak le vel-ngeihnak cu, man pek loin an\r\n    hmuh lai.</p>",
        "id": "408",
        "name": "CEUNAK TLUNG KO SEH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUAZAKIP AH THANTER U</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Jesuh kong kha khua-zakip ah, Thanter u, Thawngtha bia cu, Misual kha khamhnak chim hna u, Ceunak kha karh\r\n    chin ko seh.</p>\r\n<p><b>CHO: </b>Thawngtha bia (Thawngtha bia) vawlei cung khua zakip ah (zakip ah) Thanter tuah u, Jesuh thawng kha\r\n    thanter tuah u, A min zungzal thangthat u.</p>\r\n<p><b>2. </b>Thawngtha bia chim tu thlah hna u, Ceunak kha kalpi hna seh, Sual-muihnak ramchung mi hna nih, Ceunak kha\r\n    an hmuh hlan tiang.</p>\r\n<p><b>CHO: </b>Thawngtha bia (Thawngtha bia) vawlei cung khua zakip ah (zakip ah) Thanter tuah u, Jesuh thawng kha\r\n    thanter tuah u, A min zungzal thangthat u.</p>\r\n<p><b>3. </b>Lawmhnak thawng kha kan thanter lai, Fing le tlang khua zakip ah, Jesuh kong kha kan chimh hna lai.\r\n    Dawtnak le khamhnak kong kha.</p>\r\n<p><b>CHO: </b>Thawngtha bia (Thawngtha bia) vawlei cung khua zakip ah (zakip ah) Thanter tuah u, Jesuh thawng kha\r\n    thanter tuah u, A min zungzal thangthat u.</p>\r\n<p><b>4. </b>Ramdang ca thla kan cam lioah, Kan ram kha philh hlah u sih; Jesuh Khrih kan Siangpahrang cu, Kan ram ah\r\n    hin Bawi cang seh.</p>\r\n<p><b>CHO: </b>Thawngtha bia (Thawngtha bia) vawlei cung khua zakip ah (zakip ah) Thanter tuah u, Jesuh thawng kha\r\n    thanter tuah u, A min zungzal thangthat u.</p>",
        "id": "409",
        "name": "KHUAZAKIP AH THANTER U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLACAMMI VIALTE</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Lunglawmhnak thawngtha bia kha, Khua zakip ah thanh u, An thahmi Jesuh thawng in, Khamhnak thachin bia\r\n    kha, A zungzal thawngthabia kha, A bia-kamnak a si; Bawi Jesuh a zummi nih, Laksawng tha an hmuh lai.</p>\r\n<p><b>CHO: </b>Bawipa, Pathian sinah thlacammi vialte nih Pathian khamhnak kha a ngai te an hmuh te lai, Bawipa Pathian\r\n    sinah thlacammi vialte nih Pathian khamhnak kha a ngai te an hmuh te lai.</p>\r\n<p><b>2. </b>Khuamui chungah a um i, Sualnak lam a zulmi, Pathian dawtnak kha zoh u, Bawi Jesuh kha zum u, Lungthin nan\r\n    ngeihmi vial in, A bia-kamnak zum u, Bawipa sin thlacammi nih, Rawhnak an phan lai lo.</p>\r\n<p><b>CHO: </b>Bawipa, Pathian sinah thlacammi vialte nih Pathian khamhnak kha a ngai te an hmuh te lai, Bawipa Pathian\r\n    sinah thlacammi vialte nih Pathian khamhnak kha a ngai te an hmuh te lai.</p>\r\n<p><b>3. </b>Vaw leicung phorh ritmi le, Sifah a ingmi hna, Nan thilrit kha chan awkah, Jesuh nih an ngan hna, A\r\n    sungbik nunnak laksawng, Mi vialte a pek hna, Zumhnak in a halmi cu khi laksawng an hmu lai.</p>\r\n<p><b>CHO: </b>Bawipa, Pathian sinah thlacammi vialte nih Pathian khamhnak kha a ngai te an hmuh te lai, Bawipa Pathian\r\n    sinah thlacammi vialte nih Pathian khamhnak kha a ngai te an hmuh te lai.</p>",
        "id": "410",
        "name": "THLACAMMI VIALTE",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">CEUNAK KHA RUN THLAH TUAH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Sualmui lakah na mi vialte kha an tang, Ceunak kha, (ceunak kha) run thlah tuah; (run thlah tuah) Khamhnak\r\n    an herh na in an kaltak dih cang, Khamhnak chung, (Khamhnak chung) au than hna.</p>\r\n<p><b>CHO: </b>Maw Pathian, (Maw Pathian, sualnak a) sual a kan thlah piaktu, (kan thlahpiaktu) Khua zakip mi au hna\r\n    law,(au hna law); Na hmaiah (Na hmaika ah) kun cio ko hna sehlaw, (kun cio ko hna sehlaw) Zungzal nang thangthat\r\n    awkah. (Zungzal nang thangthat awkah.)</p>\r\n<p><b>2. </b>Na phung-chimtu nih an halpiak hna nak kha, Run ngai law (Run ngai law) bawm tuah han; (bawm tuah hna) An\r\n    sual hremnak chungin an luat khawh nakhnga, Ceunak kha (ceunak kha) run thlah tuah.</p>\r\n<p><b>CHO: </b>Maw Pathian, (Maw Pathian, sualnak a) sual a kan thlah piaktu, (kan thlahpiaktu) Khua zakip mi au hna\r\n    law,(au hna law); Na hmaiah (Na hmaika ah) kun cio ko hna sehlaw, (kun cio ko hna sehlaw) Zungzal nang thangthat\r\n    awkah. (Zungzal nang thangthat awkah.)</p>\r\n<p><b>3. </b>Jesuh vel kha mi vialte sinah phan seh, Ceunak kha (ceunak kha) run thlah tuah; (run thlah tuah) Khrih\r\n    ruahnak bantuk an ngeih khawh cio nakhnga, Ceunak kha (ceunak kha) run thlah tuah.</p>\r\n<p><b>CHO: </b>Maw Pathian, (Maw Pathian, sualnak a) sual a kan thlah piaktu, (kan thlahpiaktu) Khua zakip mi au hna\r\n    law,(au hna law); Na hmaiah (Na hmaika ah) kun cio ko hna sehlaw, (kun cio ko hna sehlaw) Zungzal nang thangthat\r\n    awkah. (Zungzal nang thangthat awkah.)</p>",
        "id": "411",
        "name": "CEUNAK KHA RUN THLAH TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHUAKIP AH TUANBIA CHIM AWK KAN NGEI</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Khua zakip ah tuanbia chim awk kan ngei, Lam dingmi hmuhsak tu tuanbia, Biatak le zaang-fahnak tuanbia,\r\n    Daihnak le ceunak tuanbia, Daihnak le ceunak tuanbia.</p>\r\n<p><b>CHO: </b>Muihnak a lo lai, Khua a dei lai Chun ni lin caan a rung chuak lai, Dawtnak ceunak Jesuh pennak cu\r\n    vawlei ah a rungtum lai.</p>\r\n<p><b>2. </b>Miphun kip sinah hlasak awk kan ngei, Bawipa leiah lung thleng tu hla, Hi hla nih chiatnak a tei lai, Fei\r\n    le nam a khiah dih lai, Fei le nam a khiah dih lai.</p>\r\n<p><b>CHO: </b>Muihnak a lo lai, Khua a dei lai Chun ni lin caan a rung chuak lai, Dawtnak ceunak Jesuh pennak cu\r\n    vawlei ah a rungtum lai.</p>\r\n<p><b>3. </b>Khuakip ah Thawngthabia thanh awk kan ngei, Van in mi uktu Pathian nih, A Fa Khamhtu a run thlah i, Pathan\r\n    dawtnak a langhter, Pathian dawtnak a langhter.</p>\r\n<p><b>CHO: </b>Muihnak a lo lai, Khua a dei lai Chun ni lin caan a rung chuak lai, Dawtnak ceunak Jesuh pennak cu\r\n    vawlei ah a rungtum lai.</p>\r\n<p><b>4. </b>Khuakip ah Khamhbawi hmuhsak awk kan ngei, Ngaih-chiatnak lam a zulmi kha; Amah thawngin miphun kip nih,\r\n    Pathian dinnak an hngalh lai, Pathian dinnak an hngalh lai.</p>\r\n<p><b>CHO: </b>Muihnak a lo lai, Khua a dei lai Chun ni lin caan a rung chuak lai, Dawtnak ceunak Jesuh pennak cu\r\n    vawlei ah a rungtum lai.</p>",
        "id": "412",
        "name": "KHUAKIP AH TUANBIA CHIM AWK KAN NGEI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MAW ZION, KHULRANG TUAH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Maw nang Zion, Khua zakip ah Pathian cu, Ceunak a si, tiah rianrang in chim hna, Miphun kip sertu Pathian\r\n    nih mui chungin, Thlarau pakhat tlau a siang lo tiah chim.</p>\r\n<p><b>CHO: </b>Lung-lawmhnak Thawngtha, daihnak, luatnak, Khamhbawi Jesuh tlanhnak thawngtha thanter tuah.</p>\r\n<p><b>2. </b>Zohhmanh sualnak, Thonginn a ummi chungah, Thong zeizat dah, hrengkhenh in a um rih, Khamhtu thihnak aho\r\n    chimtu ngei loin, An co hnga nunnak kong kha an thei lo.</p>\r\n<p><b>CHO: </b>Lung-lawmhnak Thawngtha, daihnak, luatnak, Khamhbawi Jesuh tlanhnak thawngtha thanter tuah.</p>\r\n<p><b>3. </b>Holh phunkip le, Miphun zakip sinah khan, Pathian cu dawtnak a si, tiah thanh hna, A tlaumi khamh awkah\r\n    van in a rung tum, Nun ro kan co nakhnga thihnak a in.</p>\r\n<p><b>CHO: </b>Lung-lawmhnak Thawngtha, daihnak, luatnak, Khamhbawi Jesuh tlanhnak thawngtha thanter tuah.</p>\r\n<p><b>4. </b>Sunparnak thawng chim ah na fapale cu, Na chawhlawn he khua zakip ah thlah hna, Annih caah zungzal in thla\r\n    va cam ko, Na liammi vialte Jesuh an cham lai.</p>\r\n<p><b>CHO: </b>Lung-lawmhnak Thawngtha, daihnak, luatnak, Khamhbawi Jesuh tlanhnak thawngtha thanter tuah.</p>",
        "id": "413",
        "name": "MAW ZION, KHULRANG TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THAWNGTHA BIA DARKHING TUM TUAH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Lung-lawmhnak thawngtha bia kha Pengkhat hnu pengkhat thanh u, Darkhing thawng bang khua zakip ah,\r\n    Khamhbawi bia kha thanter u; Pathian a Fapa kha, A zummi a dihlak nih, Rawhnak ah an phan bal lai lo, Zungzal\r\n    nunnak an hmuh lai.</p>\r\n<p><b>CHO: </b>Lawmhnak bia thanter tuah, Pengkhat hnu pengkhat thanh u, Lawmhnak via man loin, Nangmah le kei ca a si.</p>\r\n<p><b>2. </b>Mi vialte hna ra tuah u, Darkhing thawng in an auh hna, Pathian dawtnak a ngan caah, Hlaw hin hlah u, u\r\n    nau hna, Nunnak changreu a si, Hi changreu a eimi cu, An sualnak kha tam hmanh sehlaw, Hawhra bang a ranter lai.</p>\r\n<p><b>CHO: </b>Lawmhnak bia thanter tuah, Pengkhat hnu pengkhat thanh u, Lawmhnak via man loin, Nangmah le kei ca a si.</p>\r\n<p><b>3. </b>Pathian bia a ngai lomi, Sifahnak kha an in lai, Khamhbawi aunak aw thawng a nem, Ralrinnak a kan pek\r\n    tawn, Khamhnak hmuh awk caah, Rau loin chuak cio tuah u, Nan hnulei kha zoh ti hlah u, Nan zoh ahcun nan liam lai.</p>\r\n<p><b>CHO: </b>Lawmhnak bia thanter tuah, Pengkhat hnu pengkhat thanh u, Lawmhnak via man loin, Nangmah le kei ca a si.</p>",
        "id": "414",
        "name": "THAWNGTHA BIA DARKHING TUM TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH TUANBIA CHIM KA DUH</h4> <p>Doh is Ab</p> <p><b>1. </b>Jesuh tuanbia chim ka duh, Hmuh lo cunglei thil kong, Jesuh le a sunparnak, Jesuh le a dawtnak, Hi bia bia-ngai a si ca'h, Hi tuanbia chim ka duh, Hi dawtnak bia lawngte nih, Ka lung kha a lawmhter.</p> <p><b>CHO: </b>Jesuh dawtnak tuanbia cu, Keimah zungzal chim ka duh; Keimah lung a lawmhter tu, Hi tuanbia lawng a si.</p> <p><b>2. </b>Jesuh tuanbia chim ka duh, Mangtha nakin tha deuh, Na ruah khawh lomi nakin, Khua-ruahhar theihtlei deuh, Keimah caah vel a ngei, Jesuh bia chim ka duh, Khi si caah keimah nih, A zungzal chim ka duh.</p> <p><b>CHO: </b>Jesuh dawtnak tuanbia cu, Keimah zungzal chim ka duh; Keimah lung a lawmhter tu, Hi tuanbia lawng a si.</p> <p><b>3. </b>Jesuh tuanbia chim ka duh, Chim lengmang a nuam ko, Keimah ka chim caan kip ah, Mi an i hlau diahmah, Pathian a kan pek bia kha, A kan khamhnak bia kha, Micheu an theih bal lo ca'h, Chim ka duh chin rih ta.</p> <p><b>CHO: </b>Jesuh dawtnak tuanbia cu, Keimah zungzal chim ka duh; Keimah lung a lawmhter tu, Hi tuanbia lawng a si.</p> <p><b>4. </b>Jesuh tuanbia chim ka duh, A hngal bikmi hna nih, Rawltam tihal bantukin, Theih than an duh caah, Vancung ah ka kai tikah, Ka hla thar sak laimi, Zungzal in ka duh tawnmi, Tuanbia kha a si lai.</p> <p><b>CHO: </b>Jesuh dawtnak tuanbia cu, Keimah zungzal chim ka duh; Keimah lung a lawmhter tu, Hi tuanbia lawng a si.</p>",
        "id": "415",
        "name": "JESUH TUANBIA CHIM KA DUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLAICI VORH U</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Khua a dei dengmang cang, Pathian thlaici vorh ah tho u, Nitlak tiang in Bawipa ca tuan len ko u, Mi\r\n    thinlung a tlau cia mi hna kha kawl than tuah hna u, Lungnemnak in Bawipa caah tuan ko u.</p>\r\n<p><b>CHO: </b>Thlaici kha vorh tuah u, (vorh u), thlaici kha vorh tuah u,(vorh tuah u), Fing le tlang le khua za\r\n    ramkip ah kal tuah u. Nunnak chang cheu hna u, Thawngtha bia aupi cio tuah u. Zumhnak in tuan ko u, laksawng a tam\r\n    lai.</p>\r\n<p><b>2. </b>Zingka tein tho u, Bawipa ca rian ot zau ko u, Khuamui tiang in ci tha kha vorh len ko u, Zumh lonak ngeih\r\n    loin ci tha kha vorh zungzal ko u, Zeizong hlaw ta dih law, Pathian zumhnak in.</p>\r\n<p><b>CHO: </b>Thlaici kha vorh tuah u, (vorh u), thlaici kha vorh tuah u,(vorh tuah u), Fing le tlang le khua za\r\n    ramkip ah kal tuah u. Nunnak chang cheu hna u, Thawngtha bia aupi cio tuah u. Zumhnak in tuan ko u, laksawng a tam\r\n    lai.</p>\r\n<p><b>3. </b>Lungnemnak le zuamnak in thlaici kha vorh len ko u, Nan vorh caah hnangamnak kha nan hmuh lai, Thlaici nan\r\n    vorh tikah tha le thinlung zong dong loin, Thlua-chuahnak ca Pathian sinah thlacam u.</p>\r\n<p><b>CHO: </b>Thlaici kha vorh tuah u, (vorh u), thlaici kha vorh tuah u,(vorh tuah u), Fing le tlang le khua za\r\n    ramkip ah kal tuah u. Nunnak chang cheu hna u, Thawngtha bia aupi cio tuah u. Zumhnak in tuan ko u, laksawng a tam\r\n    lai.</p>",
        "id": "416",
        "name": "THLAICI VORH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RAM KIP AH KAL U</h4> <p>Doh is A</p> <p><b>1. </b>Ram hlapi ah Pathian bia lomi tampi, Thlarau rel cawk lo kha an tlau lan lai, Hodah kal lai, Khamhnak kong kha chim awkah, Jesuh zoh i harnak kha ruat loin.</p> <p><b>CHO: </b>\"Nawl-ngeihnak a ka pek dih cang Nawl ngeihnak a ka pek dih cang, Ram kip ah kal in Thawngtha bia chim hna u; Nan sinah ka um zungzal lai,\" a ti.</p> <p><b>2. </b>Zohhmanh, vawlei khua zakip in an in sawm, Khrih ralkap hna, Tho u law lut tuah u, Khrihfa tho u, Lungkhat tein dir tuah u, Thawngtha bia in sualnak cikcin chat u.</p> <p><b>CHO: </b>\"Nawl-ngeihnak a ka pek dih cang Nawl ngeihnak a ka pek dih cang, Ram kip ah kal in Thawngtha bia chim hna u; Nan sinah ka um zungzal lai,\" a ti.</p> <p><b>3. </b>\"Zeica'h dah nan thih lai,\" Pathian nih a ti, \"Zeica'h dah nan thih lai\" tiah au chin ve, Thihnak tihnung tei awkah Jesuh a thi, Nunnak le khamhnak cu aupi cio u.</p> <p><b>CHO: </b>\"Nawl-ngeihnak a ka pek dih cang Nawl ngeihnak a ka pek dih cang, Ram kip ah kal in Thawngtha bia chim hna u; Nan sinah ka um zungzal lai,\" a ti.</p> <p><b>4. </b>\"Pathian thangthat siseh,\" tiah phun kip chungin, Hla-saknak kha khulrang in tlunter tuah, \"Hal-le-lu-jah! Bawipa cu kan Siangpahrang,\" Tiin khamhmi vialte cu an au lai.</p> <p><b>CHO: </b>\"Nawl-ngeihnak a ka pek dih cang Nawl ngeihnak a ka pek dih cang, Ram kip ah kal in Thawngtha bia chim hna u; Nan sinah ka um zungzal lai,\" a ti.</p>",
        "id": "417",
        "name": "RAM KIP AH KAL U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MINMEI A TIAN DIH TIKAH</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>A dawh ngaingai mi tlangcung in Minmei kha a tian tikah, Cerhti le tiva te cungah, Ni a tlang, lawmhnak a\r\n    tam Chuncha kan hmuh tikah Pathian Biakamnak cu kan hngalh than, Kannih kan i tonnak caan ah, Minmei kha a tian dih\r\n    lai.</p>\r\n<p><b>CHO: </b>Hi vawlei (Hi vaw lei) kan i ton bang, (kan i tong bang) Vancung ah (Vancung ah) kan i tong lai, (kan i\r\n    tong lai) Zinglei khua a ceunak chungah, Tha chin lawmhnak kan hmuh lai. Kannih kan i hmuhnak caan ah, Minmei kha a\r\n    tian dih lai.</p>\r\n<p><b>2. </b>Mi vialte nih vawlei cungah Palhnak kha an tuah lengmang, Khuamui chung i rian kan tuan ah, Dawtnak bia\r\n    kha kan hlawt tawn Kan Khamhtu nih, \"Ra u law, Nan tuan man kan pek lai,\" a ti, Zing leiah kan i tong than lai,\r\n    Minmei a tian dih tikah.</p>\r\n<p><b>CHO: </b>Hi vawlei (Hi vaw lei) kan i ton bang, (kan i tong bang) Vancung ah (Vancung ah) kan i tong lai, (kan i\r\n    tong lai) Zinglei khua a ceunak chungah, Tha chin lawmhnak kan hmuh lai. Kannih kan i hmuhnak caan ah, Minmei kha a\r\n    tian dih lai.</p>\r\n<p><b>3. </b>Minmei cu kannih cung leiah, A kai a loh dih tikah, Kan dawt kan hawi mi vialte he, Kannih kan i tong lai\r\n    maw? Khua-muihnak ram tiva ral ah Khua ceunak kha a tlung cang; Khua-ruahhar a ceu kan hmuh lai, Minmei a tian dih\r\n    tik ah.</p>\r\n<p><b>CHO: </b>Hi vawlei (Hi vaw lei) kan i ton bang, (kan i tong bang) Vancung ah (Vancung ah) kan i tong lai, (kan i\r\n    tong lai) Zinglei khua a ceunak chungah, Tha chin lawmhnak kan hmuh lai. Kannih kan i hmuhnak caan ah, Minmei kha a\r\n    tian dih lai.</p>",
        "id": "418",
        "name": "MINMEI A TIAN DIH TIKAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NIHNAK LE TAHNAK KHATTELEI AH</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Nihnak le tahnak khat-telei ah, A tu zau in ka phan cang lai, Ihnak le hlauhnak khat-telei ah, Cinnak le\r\n    hlehnak khat-telei ah, Atu zau in ka phan cang lai.</p>\r\n<p><b>CHO: </b>Na dawtmi umnak ca ah, Na serinn tha chung ka phakter, Bawipa.</p>\r\n<p><b>2. </b>Parnak le uainak khat-telei ah, Atu zau ah ka phan cang lai; Ceunak le muihnak khat-telei ah, Ruahchan le\r\n    thin-phannak ralchan ah, Atu zau in ka tlung lai ta.</p>\r\n<p><b>CHO: </b>Na dawtmi umnak ca ah, Na serinn tha chung ka phakter, Bawipa.</p>\r\n<p><b>3. </b>Khua-sihnak le khua-lumnak va ral, Atu zau in ka phak lai ta; Fing le tlang tiva ral khat lei ah, A\r\n    zungzal nunnak khua tha chungah, A tu zauah ka phan lai ta.</p>\r\n<p><b>CHO: </b>Na dawtmi umnak ca ah, Na serinn tha chung ka phakter, Bawipa.</p>",
        "id": "419",
        "name": "NIHNAK LE TAHNAK KHATTELEI AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LUNGLAWMH SUNPAR NI</h4> <p>Doh is D. Moderato</p> <p><b>1. </b>Van in Bawipa sunparnak he, A rung tum than lai caan cu, Vanmi le mi zeihmanh nih an hngal kho lo, Mithiang vialte an tho lai i, Amah ton ah an ra lai, Muko tum thawng cu an theih lai, tu hnuah.</p> <p><b>CHO: </b>Na tim cang maw? (cang maw?) na tim cang maw? Na Bawipa cu ton awkah, pa cu ton awk ah, (cu tawn awkah) Na tim cang maw? Na Siangpahrang ton awkah, Lunglawmh sunpar ni ca na tim maw?</p> <p><b>2. </b>Mitthep kar caan tawite chungah, I thlen-nawnnak a um lai, Thih thiam mi pum, thih thiam lo ah a cang lai, Vansang pi'n a rungtum tikah, Amah bang kan si ve lai, Chun maw, zantim maw, dei ah maw, a rat lai?</p> <p><b>CHO: </b>Na tim cang maw? (cang maw?) na tim cang maw? Na Bawipa cu ton awkah, pa cu ton awk ah, (cu tawn awkah) Na tim cang maw? Na Siangpahrang ton awkah, Lunglawmh sunpar ni ca na tim maw?</p> <p><b>3. </b>Sen duk bang sualnak tam hmanhseh, Kal-va-ry tlang car in luangmi, Sual thian ter khotu tiva cu kan kawl lai, Hawhra bang ranter kan si lai, Amah ser-siamnak thawngin, Vanrang ceu in a rat than caan phanh tikah.</p> <p><b>CHO: </b>Na tim cang maw? (cang maw?) na tim cang maw? Na Bawipa cu ton awkah, pa cu ton awk ah, (cu tawn awkah) Na tim cang maw? Na Siangpahrang ton awkah, Lunglawmh sunpar ni ca na tim maw?</p>",
        "id": "420",
        "name": "LUNGLAWMH SUNPAR NI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HLA THAR AN SA</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Vancung khua chungah kan hawi le hla an sa, A kan Khamhbawi a min kha an thangthat cio, Vawleicung sifah\r\n    retheihnak an philh cang, Mithiang mi nih lunglawmhnak hla thar an sa.</p>\r\n<p><b>CHO: </b>Bawipa thangthat u, (Bawipa thangthat u) Kal-va-ry tlang a thimi kha (thimi kha) Bawipa thangthat u,\r\n    (Bawipa thangthat u), Thihnak a tei, a nung than cang.</p>\r\n<p><b>2. </b>A zaangfahnak thangthat awk hla a tling ko, A zummi caah thachin nganbik a si. Kan Bawipa thihnak le\r\n    thawhthan nak thawngin, Pathian sinah a zungzal in kan um lai.</p>\r\n<p><b>CHO: </b>Bawipa thangthat u, (Bawipa thangthat u) Kal-va-ry tlang a thimi kha (thimi kha) Bawipa thangthat u,\r\n    (Bawipa thangthat u), Thihnak a tei, a nung than cang.</p>\r\n<p><b>3. </b>Nihin a thi in a tawl lomi vialte, Ahohmanh, khi hla thar an sa kho lai lo. A sualmi ngaihthiam awkah a\r\n    kan zaangfah, Lawmhnak he a zungzal in hla kan sa lai.</p>\r\n<p><b>CHO: </b>Bawipa thangthat u, (Bawipa thangthat u) Kal-va-ry tlang a thimi kha (thimi kha) Bawipa thangthat u,\r\n    (Bawipa thangthat u), Thihnak a tei, a nung than cang.</p>",
        "id": "421",
        "name": "HLA THAR AN SA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SIANGPAHRANG HMAI AH KAN DIR LAI</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Kan dir lai, Siangpahrang hmaiah, Vanmi he hla kan sa lai, Tu hnu ah, tu hnu ah, Ceunak kam kan kal lio\r\n    ah, Pathian kha kan lawmh ciahmah, Tu hnuah, (Tu hnu ah), tu hnu ah.(tu hnu ah),</p>\r\n<p><b>CHO: </b>Kan dir lai, (Kan dir lai) Siangpahrang hmaiah, Vanmi he hla kan sa lai, Thangthat u, Siangpahrang kha,\r\n    Hal-le-lu-jah, Hal-le-lu-jah, Kan dir lai, (Kan dir lai), Siangpahrang hmaiah.</p>\r\n<p><b>2. </b>Vancung darkhing kha tum tuah, Kan dir lai, Siangpahrang hmaiah, Tu hnuah, tu hnuah, Ngaih-chiatnak kha a\r\n    dong lai, Pathian min kha kan lawmh lai, Tu hnuah, (Tu hnu ah) tu hnuah (tu hnu ah)</p>\r\n<p><b>CHO: </b>Kan dir lai, (Kan dir lai) Siangpahrang hmaiah, Vanmi he hla kan sa lai, Thangthat u, Siangpahrang kha,\r\n    Hal-le-lu-jah, Hal-le-lu-jah, Kan dir lai, (Kan dir lai), Siangpahrang hmaiah.</p>\r\n<p><b>3. </b>Ka thlarau atu hlau tuah, Kan dir lai, Siangpahang hmaiah, Tu hnuah, tu hnuah, Pathian a co hnga pe tuah,\r\n    Amah he nan i lo lai, Tu hnuah, (Tu hnu ah) tu hnuah (tu hnu ah).</p>\r\n<p><b>CHO: </b>Kan dir lai, (Kan dir lai) Siangpahrang hmaiah, Vanmi he hla kan sa lai, Thangthat u, Siangpahrang kha,\r\n    Hal-le-lu-jah, Hal-le-lu-jah, Kan dir lai, (Kan dir lai), Siangpahrang hmaiah.</p>",
        "id": "422",
        "name": "SIANGPAHRANG HMAI AH KAN DIR LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JESUH BAN CHUNGAH HIM IN</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Jesuh ban chungah him in, Amah tang ah ka um, Hika hin a dawtnak ca, Lung-daihnak in ka um, Ngai u law,\r\n    vancung mi nih, Hi bia kha hla an sak, Thihnak ti khatte lei ah, Vancung khua ah an sak.</p>\r\n<p><b>CHO: </b>Jesuh ban chungah him in, Amah tang ah ka um. Hika hin a dawtnak ca, Lung daihnak in ka um.</p>\r\n<p><b>2. </b>Jesuh ban chungah him in, Tukforh in ka him ko, Thinphan lunghno a dai lai, Sualnak in ka rawk lo, Mitthli\r\n    tlaknak kha a tlawm, Sifahnak tlawm pal um rih, Ngaihchiat hna-hnawhnak zong kha, A dih dengmang ko cang.</p>\r\n<p><b>CHO: </b>Jesuh ban chungah him in, Amah tang ah ka um. Hika hin a dawtnak ca, Lung daihnak in ka um.</p>\r\n<p><b>3. </b>Keimah ca Bawi Jesuh nih, A sungmi lu a hloh, A hmun zungzal Pathian kha, Keimah ka hngatchan ko, Ka thih\r\n    caan a phak hlan tiang, Lungthat in um ko ning, Deirel a chuah hlan tiang in, Lung that in um ko ning.</p>\r\n<p><b>CHO: </b>Jesuh ban chungah him in, Amah tang ah ka um. Hika hin a dawtnak ca, Lung daihnak in ka um.</p>",
        "id": "423",
        "name": "JESUH BAN CHUNGAH HIM IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN LU NUNNAK INN KHA</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Khi lu-nunnak inn kha ruat tuah, Khat-telei tiva ral ceunak khua, A lian a ngan mithiang an um fawn, Nun\r\n    sunnak puankha an i aih.</p>\r\n<p><b>CHO: </b>Vancung ah (vancung ah) vancung ah (vancung ah) Khi lu-nunnak inn ruat tuah u (ruat tuah u) Vancung ah,\r\n    (vancung ah) vancung ah, vancung ah, Khi lu nunnak inn ruat tuah u.</p>\r\n<p><b>2. </b>A kal ciami kha ruat tuah u, Hmailei ah a kal mi kan hawi kha, Pathian sinah vancung inn chungah, Khi an\r\n    hlasakmi kha ruat tuah.</p>\r\n<p><b>CHO: </b>Vancung ah (vancung ah) vancung ah (vancung ah) Khi lu-nunnak inn ruat tuah u (ruat tuah u) Vancung ah,\r\n    (vancung ah) vancung ah, vancung ah, Khi lu nunnak inn ruat tuah u.</p>\r\n<p><b>3. </b>Ka Khamhbawi vancung ah a um, Ka hawi le ka rualchan zong an um, Ngaih-chiatnak le re-theihnak ka hlonh,\r\n    Vancung zongah kal ka duh fawn.</p>\r\n<p><b>CHO: </b>Vancung ah (vancung ah) vancung ah (vancung ah) Khi lu-nunnak inn ruat tuah u (ruat tuah u) Vancung ah,\r\n    (vancung ah) vancung ah, vancung ah, Khi lu nunnak inn ruat tuah u.</p>\r\n<p><b>4. </b>Ka thihnak caan a phan dengmang, Ka kalnak caan zong a phan fawn cang, Kan dawtmi hna vancung ah an um,\r\n    Annih nih an kan ngan lengmang.</p>\r\n<p><b>CHO: </b>Vancung ah (vancung ah) vancung ah (vancung ah) Khi lu-nunnak inn ruat tuah u (ruat tuah u) Vancung ah,\r\n    (vancung ah) vancung ah, vancung ah, Khi lu nunnak inn ruat tuah u.</p>",
        "id": "424",
        "name": "KAN LU NUNNAK INN KHA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHI RAM AH UM KA DUH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>A hlatpi ram um kha ka theih cang, A sunpar nak hohmanh chim khawh lo, Ni nak in a ceumi ram chungah, Bawi\r\n    Jesuh he zungzal um ka duh.</p>\r\n<p><b>CHO: </b>Khi ram ah (khi ram ah) khi ram ah (khi ram ah) Bawi Jesuh he zungzal um ka duh (um ka duh) Khi ram ah\r\n    (khi ram ah) khi ram ah (khi ram ah) Bawi Jesuh he zungzal um ka duh.</p>\r\n<p><b>2. </b>Baibal ca chung bia ka theih tikah, Thluachuah van luhnak kong kha ka theih, Thabat le rawltam tihal nak\r\n    kha, Khi ram kan phak tikah a dih lai.</p>\r\n<p><b>CHO: </b>Khi ram ah (khi ram ah) khi ram ah (khi ram ah) Bawi Jesuh he zungzal um ka duh (um ka duh) Khi ram ah\r\n    (khi ram ah) khi ram ah (khi ram ah) Bawi Jesuh he zungzal um ka duh.</p>\r\n<p><b>3. </b>Vancung khua thatnak hodah chim kho? Phannak ngaih-chiatnak a um ti lo, Fahnak, tahnak, mithi ngaihnak le,\r\n    Thih chin zeihmanh a um ti lai lo.</p>\r\n<p><b>CHO: </b>Khi ram ah (khi ram ah) khi ram ah (khi ram ah) Bawi Jesuh he zungzal um ka duh (um ka duh) Khi ram ah\r\n    (khi ram ah) khi ram ah (khi ram ah) Bawi Jesuh he zungzal um ka duh.</p>\r\n<p><b>4. </b>Khi ramtha chung i um awk caah, Pathian nih misual kha a forh hna, Hohmanh a forhnak an zumh ahcun,\r\n    Zungzal khi ram chungah an um lai.</p>\r\n<p><b>CHO: </b>Khi ram ah (khi ram ah) khi ram ah (khi ram ah) Bawi Jesuh he zungzal um ka duh (um ka duh) Khi ram ah\r\n    (khi ram ah) khi ram ah (khi ram ah) Bawi Jesuh he zungzal um ka duh.</p>",
        "id": "425",
        "name": "KHI RAM AH UM KA DUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HUNG CIO U</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Khi tiva ralchan ceu inn tha ah khin, Dawtnak in a kan zohmi sinah, Kannih vialte kan i tong kho lai maw?\r\n    Kan i tonnak hnga zeitluk inn tha.</p>\r\n<p><b>CHO: </b>Hung cio u, (Hung cio u), hung cio u, (hung cio u), tiva ral a ceunak inn chungah, Hung cio u, (Hung cio\r\n    u), hung cio u, (hung cio u) A zungzal a kan Dawtu sinah.</p>\r\n<p><b>2. </b>Zungzal ngaihchiat um lonak ram chungah, Kannih vialte kan i tong hnga maw? Zei bantuk i tonnak tha dah si\r\n    lai, Khamh ciami hla kansa kho hnga maw?</p>\r\n<p><b>CHO: </b>Hung cio u, (Hung cio u), hung cio u, (hung cio u), tiva ral a ceunak inn chungah, Hung cio u, (Hung cio\r\n    u), hung cio u, (hung cio u) A zungzal a kan Dawtu sinah.</p>\r\n<p><b>3. </b>A kan Khamhtu Bawi umnak khua chungah, Ton cionak kha a um te lai maw? A kan Dawtu bik kha kan hngal hnga\r\n    maw? Zei bantuk tonnak tha a si lai.</p>\r\n<p><b>CHO: </b>Hung cio u, (Hung cio u), hung cio u, (hung cio u), tiva ral a ceunak inn chungah, Hung cio u, (Hung cio\r\n    u), hung cio u, (hung cio u) A zungzal a kan Dawtu sinah.</p>",
        "id": "426",
        "name": "HUNG CIO U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MUIHNAK A UM LAI LO</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Muihnak a um lai lo, Jesuh rat in, Muihnak a um lai lo, Jesuh rat in, Muihnak a um lai lo, Jesuh rat in, A\r\n    dawtmi a khawmh hna lai.</p>\r\n<p><b>CHO: </b>A dawtmi a khawmh hna lai (hna lai) A dawtmi a khawmh hna lai (hna lai) Muihnak a lo dih lai, Jesuh rat\r\n    in, A dawtmi a khawmh hna lai.</p>\r\n<p><b>2. </b>Ngaihchiat a um lai lo, Jesuh rat in, Ngaihchiat a um lai lo, Jesuh rat in, Ngaihchiat a um lai lo, Jesuh\r\n    rat in, A dawtmi a khawmh hna lai.</p>\r\n<p><b>CHO: </b>A dawtmi a khawmh hna lai (hna lai) A dawtmi a khawmh hna lai (hna lai) Muihnak a lo dih lai, Jesuh rat\r\n    in, A dawtmi a khawmh hna lai.</p>\r\n<p><b>3. </b>Tahnak a um lai lo, Jesuh rat in, Tahnak a um lai lo, Jesuh rat in, Tahnak a um lai lo, Jesuh rat in, A\r\n    dawtmi a khawmh hna lai.</p>\r\n<p><b>CHO: </b>A dawtmi a khawmh hna lai (hna lai) A dawtmi a khawmh hna lai (hna lai) Muihnak a lo dih lai, Jesuh rat\r\n    in, A dawtmi a khawmh hna lai.</p>\r\n<p><b>4. </b>Donnak hla an sa lai, Jesuh rat in, Donnak hla an sa lai, Jesuh rat in, Donnak hla an sa lai, Jesuh rat\r\n    in, A dawtmi a khawmh hna lai.</p>\r\n<p><b>CHO: </b>A dawtmi a khawmh hna lai (hna lai) A dawtmi a khawmh hna lai (hna lai) Muihnak a lo dih lai, Jesuh rat\r\n    in, A dawtmi a khawmh hna lai.</p>",
        "id": "427",
        "name": "MUIHNAK A UM LAI LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TU HNUAH KHUA THA AH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Ni nakin a ceu khua a um ko, Zumhnak in a hnuah kan hmuh lai. Khi khin kanmah kan Pa hngak len ko, Kannih\r\n    umnak a ser lio dah ngai.</p>\r\n<p><b>CHO: </b>Tu hnuah (Tu hnu-ah) khua tha ah, (Khua tha ah) Kan ton lai a dawh tiva pawngah, (va pawngah) Tu hnu-ah\r\n    (Tu hnu-ah) khua tha ah, (khua tha ah), Kan ton lai aa dawh tiva pawngah.</p>\r\n<p><b>2. </b>Khi khua chungah hla kan sa te lai, Nun nuam lawmhnak hla tha a si lai. Zeitik hmanh kan thlarau ngaihchia\r\n    hlah, Kan tha bat lo ca dinh kan hau lo.</p>\r\n<p><b>CHO: </b>Tu hnuah (Tu hnu-ah) khua tha ah, (Khua tha ah) Kan ton lai a dawh tiva pawngah, (va pawngah) Tu hnu-ah\r\n    (Tu hnu-ah) khua tha ah, (khua tha ah), Kan ton lai aa dawh tiva pawngah.</p>\r\n<p><b>3. </b>Vancung a um kan dawt kan Pa kha, Thang-thatnak lungtho in kan pek lai, A kan dawtnak laksawng a pek ca,\r\n    Amah lawng nih a kan lawmhter lai.</p>\r\n<p><b>CHO: </b>Tu hnuah (Tu hnu-ah) khua tha ah, (Khua tha ah) Kan ton lai a dawh tiva pawngah, (va pawngah) Tu hnu-ah\r\n    (Tu hnu-ah) khua tha ah, (khua tha ah), Kan ton lai aa dawh tiva pawngah.</p>",
        "id": "428",
        "name": "TU HNUAH KHUA THA AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MAW LUNGLAWMHNAK</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Rian hrang tuan le sifahnak a dih lai, Lawmhnak khuatha chungah ka phak tikah, Ka dawtmi Bawipa sin ka um\r\n    tikah, A zungzal in lawmhnak kha ka hmuh lai.</p>\r\n<p><b>CHO: </b>Maw lunglawmhnak (lunglawmhnak), ka hmuh lai ta, (ka hmuh lai ta), Ka hmuh lai ta (Maw lunglawmhnak), ka\r\n    hmuh lai ta (ka hmuh lai ta), A dawtnak in a hmai ka zoh tikah, Kei ca sunparnak, Lawmhnak a si lai.</p>\r\n<p><b>2. </b>A dong lo a kan zaangfahnak thawngin, Vancung khua ah umnak ka hmuh tikah, Amah hmai tha kha ka zoh tikah\r\n    cun, A zungzal in lawmhnak kha ka hmuh lai.</p>\r\n<p><b>CHO: </b>Maw lunglawmhnak (lunglawmhnak), ka hmuh lai ta, (ka hmuh lai ta), Ka hmuh lai ta (Maw lunglawmhnak), ka\r\n    hmuh lai ta (ka hmuh lai ta), A dawtnak in a hmai ka zoh tikah, Kei ca sunparnak, Lawmhnak a si lai.</p>\r\n<p><b>3. </b>Khi hmun ah ka hawi kha ka ton hna lai, Ka velchum ah lawmhnak, ti bang a luang, Ka Bawipa minthmai tha ka\r\n    hmuh tikah, A zungzal in lawmhnak kha ka hmuh lai.</p>\r\n<p><b>CHO: </b>Maw lunglawmhnak (lunglawmhnak), ka hmuh lai ta, (ka hmuh lai ta), Ka hmuh lai ta (Maw lunglawmhnak), ka\r\n    hmuh lai ta (ka hmuh lai ta), A dawtnak in a hmai ka zoh tikah, Kei ca sunparnak, Lawmhnak a si lai.</p>",
        "id": "429",
        "name": "MAW LUNGLAWMHNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BEAULAH RAM AH KAN UM</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Lam hlatpi hna-hnawhnak thawng kha ka hna nih a theih i, Vawlei sualnak nih a ka kulh dih ti kha ka\r\n    hngalh, Lung awtawm le tihnak nih khan ka lem hmanh hna seh law, An ka thial kho lai lo, Beaulah ram in.</p>\r\n<p><b>CHO: </b>Beau-lah ram chungah ka um, Ram nuambik ram tha chung ah, (chungah) Khi ram ah, tiput le cerh dong loin\r\n    an luang ko, Dong loin manna changreu a um, A zungzal in ka khim ko, Beaulah ram chungah ka um caah.</p>\r\n<p><b>2. </b>Vawlei cung ah hin zumh lonak tilet nganpi a tho, Mi nih kan ral Satan kha doh awk a herh zungzal,\r\n    Sihmanhseh Pathian bia ralhruang chungah ka um ca-ah, A ka phan kho lai lo, Beaulah ram ah.</p>\r\n<p><b>CHO: </b>Beau-lah ram chungah ka um, Ram nuambik ram tha chung ah, (chungah) Khi ram ah, tiput le cerh dong loin\r\n    an luang ko, Dong loin manna changreu a um, A zungzal in ka khim ko, Beaulah ram chungah ka um caah.</p>\r\n<p><b>3. </b>Thlichia kha fakpi in hrang hmanhsehlaw ka tih lai lo, Pathian kut nih a ka huhphenh ca-ah ka him ko,\r\n    Beaulah ram chungah cun tihphan awk zeihmanh a um lo, Zungzal in ka him ko, Beaulah ram ah.</p>\r\n<p><b>CHO: </b>Beau-lah ram chungah ka um, Ram nuambik ram tha chung ah, (chungah) Khi ram ah, tiput le cerh dong loin\r\n    an luang ko, Dong loin manna changreu a um, A zungzal in ka khim ko, Beaulah ram chungah ka um caah.</p>\r\n<p><b>4. </b>Pathian riantuannak ka ruah tikah ka khuaruah a har, A bia kha ka theih tikah ka lung a lawm ngaingai,\r\n    Keimah khamhnak ca i a riantuannak ka hmuh tikah, Lunglawm in ka um lai, Beaulah ram ah.</p>\r\n<p><b>CHO: </b>Beau-lah ram chungah ka um, Ram nuambik ram tha chung ah, (chungah) Khi ram ah, tiput le cerh dong loin\r\n    an luang ko, Dong loin manna changreu a um, A zungzal in ka khim ko, Beaulah ram chungah ka um caah.</p>",
        "id": "430",
        "name": "BEAULAH RAM AH KAN UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VOI TAMPI KA RUAH TAWN</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Voi tampi keimah nih, lungtak in ka ruah tawn, Vancungkhua kha ka naih deuh i, Hmasa nakin nai deuh.</p>\r\n<p><b>CHO: </b>Vancung inn kha ka naih chin deuh, Vancung ka naih deuh cang, nihin, Hmasa nak in nai deuh.</p>\r\n<p><b>2. </b>Umnak tam a um mi, Ka Pa inn ka phak deng, A rang thutdan kha ka naih deuh, Nunnak tiva thiang zong.</p>\r\n<p><b>CHO: </b>Vancung inn kha ka naih chin deuh, Vancung ka naih deuh cang, nihin, Hmasa nak in nai deuh.</p>\r\n<p><b>3. </b>Phorh rit thumhnak hmun le, Dinhnak hmun ka phan deng, Vai-lamtah nak ka thumh cang lai, Sui luchin ka\r\n    hmuh deng.</p>\r\n<p><b>CHO: </b>Vancung inn kha ka naih chin deuh, Vancung ka naih deuh cang, nihin, Hmasa nak in nai deuh.</p>\r\n<p><b>4. </b>Thihnak tiva kam kha Ka phak dengmang tikah, Keimah ka dirpi tuah, Bawipa, Ka inn a nai deng cang.</p>\r\n<p><b>CHO: </b>Vancung inn kha ka naih chin deuh, Vancung ka naih deuh cang, nihin, Hmasa nak in nai deuh.</p>",
        "id": "431",
        "name": "VOI TAMPI KA RUAH TAWN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THIHNAK TIVA RAL AH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Thihnak va ral kan kai tikah, Bawi Jesuh he kan um ti lai; Sifah zeihmanh a um lai lo, Thennak zong kan\r\n    phan ti lai lo, Thihnak tiva ral ah.</p>\r\n<p><b>CHO: </b>Thihnak (Thihnak tiva ralah), tiva ralah, Thihnak (Thihnak tiva ral ah), tiva ral ah, Thihnak (Thihnak\r\n    tiva ral ah), tiva ralah, Then-lo nak kan phak lai (Then lonak kan phak lai), Then-lo (Then lonak kan phak lai),\r\n    nak kan phak lai, Then-lo nak kan phak lai (Then lonak kan phak lai), Then-lo (Then lonak kan phak lai), nak kan\r\n    phak lai, Thihnak tiva ral ah (Thihnak tiva ral ah),</p>\r\n<p><b>2. </b>Atu sifah tlung hmanh-sehlaw, Vancung ka inn khi ka ruah lai; Ka mitthli vialte Pathian nih, A hnawh tikah\r\n    kaa lawm chin lai, Thihnak tiva ral ah.</p>\r\n<p><b>CHO: </b>Thihnak (Thihnak tiva ralah), tiva ralah, Thihnak (Thihnak tiva ral ah), tiva ral ah, Thihnak (Thihnak\r\n    tiva ral ah), tiva ralah, Then-lo nak kan phak lai (Then lonak kan phak lai), Then-lo (Then lonak kan phak lai),\r\n    nak kan phak lai, Then-lo nak kan phak lai (Then lonak kan phak lai), Then-lo (Then lonak kan phak lai), nak kan\r\n    phak lai, Thihnak tiva ral ah (Thihnak tiva ral ah),</p>\r\n<p><b>3. </b>Van ralkap mi hna raltha in, Nan Bawi Jesuh kha zoh tuah u, Kan phak theo lai Amah inn kha, A nuam zungzal\r\n    khua tha chung khi, Thihnak tiva ral ah.</p>\r\n<p><b>CHO: </b>Thihnak (Thihnak tiva ralah), tiva ralah, Thihnak (Thihnak tiva ral ah), tiva ral ah, Thihnak (Thihnak\r\n    tiva ral ah), tiva ralah, Then-lo nak kan phak lai (Then lonak kan phak lai), Then-lo (Then lonak kan phak lai),\r\n    nak kan phak lai, Then-lo nak kan phak lai (Then lonak kan phak lai), Then-lo (Then lonak kan phak lai), nak kan\r\n    phak lai, Thihnak tiva ral ah (Thihnak tiva ral ah),</p>\r\n<p><b>4. </b>Bawipa nangmah nih ka hruai law, Ka lunglawmhnak a tling ko lai; A zungzal in kaan thangthat lai, Ka\r\n    mitthli vialte a hul lai, Thihnak tiva ral ah.</p>\r\n<p><b>CHO: </b>Thihnak (Thihnak tiva ralah), tiva ralah, Thihnak (Thihnak tiva ral ah), tiva ral ah, Thihnak (Thihnak\r\n    tiva ral ah), tiva ralah, Then-lo nak kan phak lai (Then lonak kan phak lai), Then-lo (Then lonak kan phak lai),\r\n    nak kan phak lai, Then-lo nak kan phak lai (Then lonak kan phak lai), Then-lo (Then lonak kan phak lai), nak kan\r\n    phak lai, Thihnak tiva ral ah (Thihnak tiva ral ah),</p>",
        "id": "432",
        "name": "THIHNAK TIVA RAL AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">JORDAN TIVA KAM AH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Jordan tiva kam ah ka dir, Lung-lawmhnak in ka zoh, Kanaan ram tha a lang, ka hmuh, Zungzal khin ka um\r\n    lai.</p>\r\n<p><b>CHO: </b>Khi ramtha chungah kan nih kan um lai (kan um lai) A zungzal a tha tiva ral ah, Khi ram ah Jesuh\r\n    thangthatnak hla kan sa lai, Jesuh he zungzal kan um lai.</p>\r\n<p><b>2. </b>Khi a dawhmi ram chungah khin, Zungzal ceunak a um, Kan Bawi Jesuh sunparnak kha, Zungzal in a ceu lai.</p>\r\n<p><b>CHO: </b>Khi ramtha chungah kan nih kan um lai (kan um lai) A zungzal a tha tiva ral ah, Khi ram ah Jesuh\r\n    thangthatnak hla kan sa lai, Jesuh he zungzal kan um lai.</p>\r\n<p><b>3. </b>Khi ramnuam le khuatha chungah, Zeitik dah ka phak lai, Kan Pa lawmhnak mithmai tha kha, Zeitik dah ka\r\n    hmuh lai.</p>\r\n<p><b>CHO: </b>Khi ramtha chungah kan nih kan um lai (kan um lai) A zungzal a tha tiva ral ah, Khi ram ah Jesuh\r\n    thangthatnak hla kan sa lai, Jesuh he zungzal kan um lai.</p>\r\n<p><b>4. </b>Ka lungchung lunglawmhnak a khat, Lei cung sau um lo in, Jordan tilet tho hmanh-sehlaw Lawmhnak in ka tan\r\n    lai.</p>\r\n<p><b>CHO: </b>Khi ramtha chungah kan nih kan um lai (kan um lai) A zungzal a tha tiva ral ah, Khi ram ah Jesuh\r\n    thangthatnak hla kan sa lai, Jesuh he zungzal kan um lai.</p>",
        "id": "433",
        "name": "JORDAN TIVA KAM AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TU HNUAH AMAH SINAH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Bawi Jesuh nih an auh hna, Nan hmaika a um liannak hmuh awkah ra tuah a ti, vancung in (vancung in)\r\n    Dawtnak biathlum he an auh, Sualnak khuamui chung um mi, Bawipa nih duhsah an auh, a run naih (a run naih)</p>\r\n<p><b>CHO: </b>Tu hnu-ah Amah sinah, Tu hnu-ah Amah sinah, Tu hnu-ah Bawi Jesuh he kan um te lai (um te lai) Tu hnu-ah\r\n    Amah sinah, Tuhnu ah Amah sinah, Tu hnu-ah Bawi Jesuh he kan um te lai.</p>\r\n<p><b>2. </b>A hmuhsak lam kan zulh lai, Kan phak laimi inn thabik Chung um awkah a kan auh, vancung in (Vancung in)\r\n    Khika thennak a um lo, Bochan i kan duhnak kha Kan zumhnak rawk lo tein, a kan naih (a kan naih)</p>\r\n<p><b>CHO: </b>Tu hnu-ah Amah sinah, Tu hnu-ah Amah sinah, Tu hnu-ah Bawi Jesuh he kan um te lai (um te lai) Tu hnu-ah\r\n    Amah sinah, Tuhnu ah Amah sinah, Tu hnu-ah Bawi Jesuh he kan um te lai.</p>\r\n<p><b>3. </b>Tukforh serhsat kan in mi, Vancung kan inn ca a um, Jesuh nih a kan dawt ko, Vancung in, (Vancung in)\r\n    Bawipa thiamnak a ngan bik, A zungzal thangthat u si, A biakam a rawk lai lo, zeitik hmanh (zeitikhmanh)</p>\r\n<p><b>CHO: </b>Tu hnu-ah Amah sinah, Tu hnu-ah Amah sinah, Tu hnu-ah Bawi Jesuh he kan um te lai (um te lai) Tu hnu-ah\r\n    Amah sinah, Tuhnu ah Amah sinah, Tu hnu-ah Bawi Jesuh he kan um te lai.</p>",
        "id": "434",
        "name": "TU HNUAH AMAH SINAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VANCUNG AH KAN TLUN TIKAH</h4> <p>Doh is C</p> <p><b>1. </b>Jesuh dawtnak khua-ruahhar cu, Fak pi-in hla sa u si, A ceu a tha vancung khua ah, Kannih umnak ca a remh.</p> <p><b>CHO: </b>Vancungah (vancung ah) ka tlun tikah; Zeitluk in nuamhnak (zeitluk) lawmhnak kan hmuh lai, Jesuh kan (Jesuh kan) hmuh tikah, Teinak hla fak pi'n kan sa lai.</p> <p><b>2. </b>Vancung lam kha kan kal lio-ah, Ngaih-chiatnak phunkip kan hmuh, Siseh law lam a dongh tikah, Phannak phunkip a lo lai.</p> <p><b>CHO: </b>Vancungah (vancung ah) ka tlun tikah; Zeitluk in nuamhnak (zeitluk) lawmhnak kan hmuh lai, Jesuh kan (Jesuh kan) hmuh tikah, Teinak hla fak pi'n kan sa lai.</p> <p><b>3. </b>Ni fate kan tuanmi rian kha, Zuamnak in tuan cio u si, Sifahnak kan hmuhmi vialte, Pathian nih a kan cham lai.</p> <p><b>CHO: </b>Vancungah (vancung ah) ka tlun tikah; Zeitluk in nuamhnak (zeitluk) lawmhnak kan hmuh lai, Jesuh kan (Jesuh kan) hmuh tikah, Teinak hla fak pi'n kan sa lai.</p> <p><b>4. </b>Hmaiah chiah cia laksawng tha kha, A rauh hlan ah kan hmuh lai, Lungvar innkhar a hun tikah, Van inn chungah kan lut lai.</p> <p><b>CHO: </b>Vancungah (vancung ah) ka tlun tikah; Zeitluk in nuamhnak (zeitluk) lawmhnak kan hmuh lai, Jesuh kan (Jesuh kan) hmuh tikah, Teinak hla fak pi'n kan sa lai.</p>",
        "id": "435",
        "name": "VANCUNG AH KAN TLUN TIKAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RAMNUAM CHUNG UM AWKAH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Zaang-fahnak lampi cho lei a kai, Jesuh nih vancung kalnak a ser, A ral mi a dihlak a tei cang, Hi lei ah\r\n    ra cio u, u le nau.</p>\r\n<p><b>CHO: </b>Ram nuam ah, um awkah, um awkah, um awkah, Hi lei ah ra cio u, u le nau, Ram nuam ah um awkah, um awkah,\r\n    um awkah, Hi lei ah ra cio u, u le nau.</p>\r\n<p><b>2. </b>Zaang-fahnak lam kha atu kawl tuah, Tu hnu ah khua-muihnak a phan lai, A zummi nih vanram an phak lai, Na\r\n    zumh ahcun nang ca ram a um.</p>\r\n<p><b>CHO: </b>Ram nuam ah, um awkah, um awkah, um awkah, Hi lei ah ra cio u, u le nau, Ram nuam ah um awkah, um awkah,\r\n    um awkah, Hi lei ah ra cio u, u le nau.</p>\r\n<p><b>3. </b>Jesuh nih zaangfah in a kan auh, A zum lomi zumhnak he ra u, Khi ca-ah zaang-fahnak nan hmuh lai, Pathian\r\n    zaang-fahnak chung kan lut lai.</p>\r\n<p><b>CHO: </b>Ram nuam ah, um awkah, um awkah, um awkah, Hi lei ah ra cio u, u le nau, Ram nuam ah um awkah, um awkah,\r\n    um awkah, Hi lei ah ra cio u, u le nau.</p>",
        "id": "436",
        "name": "RAMNUAM CHUNG UM AWKAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NITLAKNAK PINAH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Nitlak nak pinah, Maw zinglei dawh cu, Khamhtu he vancung kan len tikah, Lei rian har dih i, Maw ceunak\r\n    sunglawi, Nitlak nak pin le, caan dongh tikah.</p>\r\n<p><b>2. </b>Nitlak nak pinah, Minmei a um lo, Thlichia tihnak zong a um ti lo, Maw lawmhnak caantha, Ceunak dong loin,\r\n    Nitlak nak pin cu, zungzal lawmhnak.</p>\r\n<p><b>3. </b>Nitlak nak pinah, Kan Pa inn tiang in, Dawtnak kutnem nih a ka hruai lai, A bia thlum bik le, Kan um tinak\r\n    cu, Khi tiva ral ah, kan ro a si.</p>\r\n<p><b>4. </b>Nitlak nak pinah kan i tong than lai, A kal cia kan hawi dawtmi hna he, Khika ramnuam ah then a um ti lo,\r\n    Nitlak nak pinah kan i din lai.</p>",
        "id": "437",
        "name": "NITLAKNAK PINAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NI BANG A CEUMI KHUA</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Ni bang a ceumi khua a si, Vancung khuatha chung khi, Nitlak lonak ram ceunak cu, Khamhtu Jesuh a si.</p>\r\n<p><b>CHO: </b>A vailam kan put ahcun, (A vailam kan put ahcun), Sui luchin kan hmuh lai, (Sui luchin kha kan hmuh\r\n    lai), Vancung khua kan phak tikah, (Vancung khua kan, phak tikah), A zungzal in kan ceu lai.</p>\r\n<p><b>2. </b>Vancung khua ah hnangam a um, Thihnak tiva ral ah, Tihnung vialte a lohnak ah, Khi khin kan ro a um.</p>\r\n<p><b>CHO: </b>A vailam kan put ahcun, (A vailam kan put ahcun), Sui luchin kan hmuh lai, (Sui luchin kha kan hmuh\r\n    lai), Vancung khua kan phak tikah, (Vancung khua kan, phak tikah), A zungzal in kan ceu lai.</p>\r\n<p><b>3. </b>Pathian remhmi inn dawh bik cu, Mithiang umnak a si, Kan dawt ngaingai mi hna nih khan, Khikhin an kan don\r\n    lai.</p>\r\n<p><b>CHO: </b>A vailam kan put ahcun, (A vailam kan put ahcun), Sui luchin kan hmuh lai, (Sui luchin kha kan hmuh\r\n    lai), Vancung khua kan phak tikah, (Vancung khua kan, phak tikah), A zungzal in kan ceu lai.</p>\r\n<p><b>4. </b>Vawlei cung tih-phannak vialte, Zokzok in lonh ka duh, Vancung mithiang mi sinah khin, Thihnak a um lai\r\n    lo.</p>\r\n<p><b>CHO: </b>A vailam kan put ahcun, (A vailam kan put ahcun), Sui luchin kan hmuh lai, (Sui luchin kha kan hmuh\r\n    lai), Vancung khua kan phak tikah, (Vancung khua kan, phak tikah), A zungzal in kan ceu lai.</p>",
        "id": "438",
        "name": "NI BANG A CEUMI KHUA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHRIHFA, MANG THA</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ka dawt te it law dai tein i din, Na Khamhtu tang cungah na lu chia tuah, Kannih nakin Jesuh nih an dawt\r\n    deuh, Mangtha! Mangtha! Mangtha!</p>\r\n<p><b>2. </b>Ngakchia te bang dai tein it ko tuah, Ngaih-chiatnak nih an hlau kho ti lai lo, Zungzal dong lo dinhnak\r\n    tha na phan cang, Mangtha! Mangtha! Mangtha!</p>\r\n<p><b>3. </b>Vawlei in muihnak a loh dih hlan tiang, Caan dongh tikah a kan khawmh dih hlan tiang, Khua ceu maw vialte\r\n    an loh dih hlan tiang, Mangtha! Mangtha! Mangtha!</p>\r\n<p><b>4. </b>Dawtnak thiang nih dawh in an ser hlan tiang, Pathian na lawhnak ni bang a tlang lai, Sui luchin cu nang\r\n    caah a put lai, Mangtha! Mangtha! Mangtha!</p>\r\n<p><b>5. </b>A thutdan hmaiah kan i tong than lai, A thil pekmi zong kan i thuam te lai, A kan hngalh bang kannih kan\r\n    hngalh hlan tiang, Mangtha! Mangtha! Mangtha!</p>",
        "id": "439",
        "name": "KHRIHFA, MANG THA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SUI KHUALIPI</h4> <p>Doh is Ab</p> <p><b>1. </b>Thihnak tiva ral ah khin khuadawh cu a um, A sunparnak chim khawh lomi cu, Khika'h ni a tla lo, thinghnah zong a uai lo, Cu sui khuapi dawh le nuam ah cun.</p> <p><b>CHO: </b>Khika ni, a tla lo, Thinghnah zong a uai lo, Khi ka'h mithiang mi nih, An Khamhtu an hmuh lai, Cu sui khuapi dawh le nuam ah cun.</p> <p><b>2. </b>Khika ah kan dawt Bawipa a kan tlantu cu, A zummi nih lawm in kan hmuh lai, Zungzal in van arfi hna bang in kan ceu lai, Cu sui khuapi dawh le nuam ah cun.</p> <p><b>CHO: </b>Khika ni, a tla lo, Thinghnah zong a uai lo, Khi ka'h mithiang mi nih, An Khamhtu an hmuh lai, Cu sui khuapi dawh le nuam ah cun.</p> <p><b>3. </b>Vai-lamtah hram kan phak pimi thlarau vialte, Kan hmuhmi tuufa vialte hna hi, Kan sui luchin dawhter tu cu an si te lai, Cu sui khuapi dawh le nuam ah cun.</p> <p><b>CHO: </b>Khika ni, a tla lo, Thinghnah zong a uai lo, Khi ka'h mithiang mi nih, An Khamhtu an hmuh lai, Cu sui khuapi dawh le nuam ah cun.</p>",
        "id": "440",
        "name": "SUI KHUALIPI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VANCUNG INN THA, DAWTNAK RAM CU</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Vancung inntha dawtnak ram cu, Mithiang mi hna inn a si, Annih sin kan um khawh nakhnga, Vawlei thil kha\r\n    hlaw cang tuah.</p>\r\n<p><b>CHO: </b>Vawlei ni kha a dongh tikah, A hnu-ah inn nuam ah, A thiangmi an um nak khua ah, Van ah kan i din lai.</p>\r\n<p><b>2. </b>Zungzal inn nuam chung um hna cu, Inn-chungkhat bantuk an si, Inntha chung i um awkah khan, Phun zakip kha\r\n    an sawm hna.</p>\r\n<p><b>CHO: </b>Vawlei ni kha a dongh tikah, A hnu-ah inn nuam ah, A thiangmi an um nak khua ah, Van ah kan i din lai.</p>\r\n<p><b>3. </b>A kan Khamhtu thihnak hmun le, Dawtnak bia kha thanter u, Hi rian-tuannak a dih hlan ah, A dawtnak bia kha\r\n    zum tuah.</p>\r\n<p><b>CHO: </b>Vawlei ni kha a dongh tikah, A hnu-ah inn nuam ah, A thiangmi an um nak khua ah, Van ah kan i din lai.</p>\r\n<p><b>4. </b>Pakhat hnu pakhat in an kal, Inn-chungkhar an tling ti lo, Sihmanh-sehlaw dawtmi hna he, Ton-thannak ni a\r\n    um lai.</p>\r\n<p><b>CHO: </b>Vawlei ni kha a dongh tikah, A hnu-ah inn nuam ah, A thiangmi an um nak khua ah, Van ah kan i din lai.</p>",
        "id": "441",
        "name": "VANCUNG INN THA, DAWTNAK RAM CU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NGAIHCHIATNAK A UM LO</h4> <p>Doh is A</p> <p><b>1. </b>Vancung khua ka ruahchan, Je-ho-va Pathian khua, A sui hmai niti'n ka hmuh lai, Lung-lawmhnak a tling lai.</p> <p><b>CHO: </b>Ngaih-chiatnak a um lo, ngaih-chiatnak a um lo, Dawtnak a tling, vancung sui ram, ngaih-chiatnak a um lo.</p> <p><b>2. </b>Vancung khua ka ruahchan, A kan Khamhbawi umnak, A ka dawtnak thang-thatnak hla, A zungzal an sa ko.</p> <p><b>CHO: </b>Ngaih-chiatnak a um lo, ngaih-chiatnak a um lo, Dawtnak a tling, vancung sui ram, ngaih-chiatnak a um lo.</p> <p><b>3. </b>Vancung khua ka ruahchan, Vancung mithiang mi nih, Puanrang aih in an um cio ko, Kannih zong kan um lai.</p> <p><b>CHO: </b>Ngaih-chiatnak a um lo, ngaih-chiatnak a um lo, Dawtnak a tling, vancung sui ram, ngaih-chiatnak a um lo.</p> <p><b>4. </b>Vancung khua ka ruah tawn, A tlung ciami kan hawi, Kan ton tikah thennak um lo, Zungzal kan i nuam lai.</p> <p><b>CHO: </b>Ngaih-chiatnak a um lo, ngaih-chiatnak a um lo, Dawtnak a tling, vancung sui ram, ngaih-chiatnak a um lo.</p>",
        "id": "442",
        "name": "NGAIHCHIATNAK A UM LO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NI A CEUNAK KHATTELEI AH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Ni a ceunak khatte-lei ah, Khua-dawmnak khatlei ah, Arfi ceunak pinlei ah khin, Ka umnak khua a si.</p>\r\n<p><b>CHO: </b>Khi khuatha cu (Khi khuatha cu) kut in ser lo, (kut in ser lo,) Umnak, keimah ca-ah) (kei nak Umnak\r\n    keimah caah), Zungzal vancung mi hla an sa, (Zungzal vancung mi hla an sa, hla an sa), Keimah umnak a si (umnak a\r\n    si, umnak a si).</p>\r\n<p><b>2. </b>Ka sifahnak khatte-lei ah Thin-phannak khatlei ah, Thlennak le caan khatte-lei ah, Remh cia ka inn a um.</p>\r\n<p><b>CHO: </b>Khi khuatha cu (Khi khuatha cu) kut in ser lo, (kut in ser lo,) Umnak, keimah ca-ah) (kei nak Umnak\r\n    keimah caah), Zungzal vancung mi hla an sa, (Zungzal vancung mi hla an sa, hla an sa), Keimah umnak a si (umnak a\r\n    si, umnak a si).</p>\r\n<p><b>3. </b>Thihnak rili khatte-lei ah, Khua-muihnak khatlei ah; Lawmhnak ka lungchung a khat i, A ceu khua kha ka\r\n    hmuh.</p>\r\n<p><b>CHO: </b>Khi khuatha cu (Khi khuatha cu) kut in ser lo, (kut in ser lo,) Umnak, keimah ca-ah) (kei nak Umnak\r\n    keimah caah), Zungzal vancung mi hla an sa, (Zungzal vancung mi hla an sa, hla an sa), Keimah umnak a si (umnak a\r\n    si, umnak a si).</p>\r\n<p><b>4. </b>Ka sualnak le temhnak vialte Lo ko seh, tiah ka ti, A zungzal umnak khuatha ah Remh cia ka inn a um.</p>\r\n<p><b>CHO: </b>Khi khuatha cu (Khi khuatha cu) kut in ser lo, (kut in ser lo,) Umnak, keimah ca-ah) (kei nak Umnak\r\n    keimah caah), Zungzal vancung mi hla an sa, (Zungzal vancung mi hla an sa, hla an sa), Keimah umnak a si (umnak a\r\n    si, umnak a si).</p>",
        "id": "443",
        "name": "NI A CEUNAK KHATTELEI AH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VEL IN A KA KHAMH</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Vawlei donghnak a phan te lai, Ka hngalhnak bang ka tuah kho lo, Ka thawhthan tikah ka lawm lai, Kan\r\n    Siangpahrang he ka um lai.</p>\r\n<p><b>CHO: </b>Hmaitonh in ka hmuh lai Vancung khua ah ka hmuh lai i, A vel in-khamhnak kha-fak pi-in ka aupi chin lai.</p>\r\n<p><b>2. </b>Vawlei umnak a rawk te lai, Zeitik a si lai ka hngal lo, Sihmanh-sehlaw a zungzal in, Vancung khua ah ka\r\n    um te lai.</p>\r\n<p><b>CHO: </b>Hmaitonh in ka hmuh lai Vancung khua ah ka hmuh lai i, A vel in-khamhnak kha-fak pi-in ka aupi chin lai.</p>\r\n<p><b>3. </b>Ni ceunak kha a kih tikah, Bawipa he kan i tong te lai, Bawipa nawl bang na tuah ahcun, An luhter lai,\r\n    dinhnak chungah.</p>\r\n<p><b>CHO: </b>Hmaitonh in ka hmuh lai Vancung khua ah ka hmuh lai i, A vel in-khamhnak kha-fak pi-in ka aupi chin lai.</p>",
        "id": "444",
        "name": "VEL IN A KA KHAMH(A/B)",
        "nameb": "1"
    },
    {
        "destext": "<h4 align=\"center\">ZAN UM LONAK</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Zan um ti lonak ramtha, Tungvang can khua-li-pi, A rawk ti lomi khuatha, Zan um lonak a si.</p>\r\n<p><b>CHO: </b>Mitthli (Mitthli vialte) vialte a hnawh lai, Phannak le (Phannak le) thihnak um lo, (thihnak um lo), Kum\r\n    cang relnak a um lo, (nak a um lo, a um lo) Zan um lonak ram ah.</p>\r\n<p><b>2. </b>Lungvar in tamhmi kutka, Khi khuadawh ah a um, Sui fang in tamhmi lampi, Khi khua dawh ah an um.</p>\r\n<p><b>CHO: </b>Mitthli (Mitthli vialte) vialte a hnawh lai, Phannak le (Phannak le) thihnak um lo, (thihnak um lo), Kum\r\n    cang relnak a um lo, (nak a um lo, a um lo) Zan um lonak ram ah.</p>\r\n<p><b>3. </b>Kutka cu khar an si lo, Khi khua-li-pi dawh ah, Nunnak tiva fim a luang, Zan um lonak ram ah.</p>\r\n<p><b>CHO: </b>Mitthli (Mitthli vialte) vialte a hnawh lai, Phannak le (Phannak le) thihnak um lo, (thihnak um lo), Kum\r\n    cang relnak a um lo, (nak a um lo, a um lo) Zan um lonak ram ah.</p>",
        "id": "445",
        "name": "ZAN UM LONAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RAU LOIN KHUA THA AH KAN KAL LAI</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Kan kal lioah lung-lawmhnak hla kha sa u si, Rau loin khuatha ah kan kal lai, Khua-muihnak a dih tikah\r\n    ceunak a um lai, Rau loin khuatha ah kan kal lai.</p>\r\n<p><b>CHO: </b>A nai dengmang cang, (A nai dengmang cang) a nai dengmang cang, (a nai dengmang cang), Thihnak (Thihnak)\r\n    tiva kan tan lai, Thlitu daih nak khuatha ah, kan i tong te lai, Rau loin khuatha ah kan kal lai.</p>\r\n<p><b>2. </b>Kal duhmi cu lamtha kha hmuhsak hna u si, Rau loin khuatha ah kan kal lai, Khrihfa kan unau kha dawtnak in\r\n    forh u sih, Rau loin khuatha ah kan kal lai.</p>\r\n<p><b>CHO: </b>A nai dengmang cang, (A nai dengmang cang) a nai dengmang cang, (a nai dengmang cang), Thihnak (Thihnak)\r\n    tiva kan tan lai, Thlitu daih nak khuatha ah, kan i tong te lai, Rau loin khuatha ah kan kal lai.</p>\r\n<p><b>3. </b>Hmailei khua ah dinhnak le hna-ngamnak a um, Rau loin khuatha ah kan kal lai, Khi khua chungah mitthli\r\n    tlaknak zeihmanh um lo, Rau loin khuatha ah kan kal lai.</p>\r\n<p><b>CHO: </b>A nai dengmang cang, (A nai dengmang cang) a nai dengmang cang, (a nai dengmang cang), Thihnak (Thihnak)\r\n    tiva kan tan lai, Thlitu daih nak khuatha ah, kan i tong te lai, Rau loin khuatha ah kan kal lai.</p>\r\n<p><b>4. </b>Hi vawleicung ah thennak kha um hmanhsehlaw, Vancung khua ah kan i tong than lai, Lung-lawmhnak in hla\r\n    thar kha kan sa ti te lai, Zungzal khuatha ah khin kan um lai.</p>\r\n<p><b>CHO: </b>A nai dengmang cang, (A nai dengmang cang) a nai dengmang cang, (a nai dengmang cang), Thihnak (Thihnak)\r\n    tiva kan tan lai, Thlitu daih nak khuatha ah, kan i tong te lai, Rau loin khuatha ah kan kal lai.</p>",
        "id": "446",
        "name": "RAU LOIN KHUA THA AH KAN KAL LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">CEUNAK RAM AH HIM IN</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Mithiang mi hna kalnak lam kan zul ti, Kan Pathian nih lam a kan hruai, Vancung khua lei lam panh in kan\r\n    kal i Deirel arfi kan cung a ceu.</p>\r\n<p><b>CHO: </b>Inn tha bik leiah kan kal lio, Lung-lawmhnak le nunnak co awkah; Kan phak tikah kan i lawm chin lai,\r\n    Ngaihchiat um ti lai lo.</p>\r\n<p><b>2. </b>Lam tha a zul mithiang vialte bang khan, Zion khua ah kan kal cio lai, Bawipa kan hmuh tikah kan lawm chin\r\n    lai, Zungzal amah he kan um lai.</p>\r\n<p><b>CHO: </b>Inn tha bik leiah kan kal lio, Lung-lawmhnak le nunnak co awkah; Kan phak tikah kan i lawm chin lai,\r\n    Ngaihchiat um ti lai lo.</p>\r\n<p><b>3. </b>Lam tha zulh awk kha kan ruah cio ahcun, Pakhat le khat kan i daw lai, Pathian he kannih kan um ti tikah,\r\n    Lunglawm in kan um zungzal lai.</p>\r\n<p><b>CHO: </b>Inn tha bik leiah kan kal lio, Lung-lawmhnak le nunnak co awkah; Kan phak tikah kan i lawm chin lai,\r\n    Ngaihchiat um ti lai lo.</p>\r\n<p><b>4. </b>Thihnak tiva tih-nungmi pawngah khan, Kannih kha dir hmanh u sih law, Kan Pathian he cun kan tan ti lai i;\r\n    A thang-thatnak hla kan sa lai.</p>\r\n<p><b>CHO: </b>Inn tha bik leiah kan kal lio, Lung-lawmhnak le nunnak co awkah; Kan phak tikah kan i lawm chin lai,\r\n    Ngaihchiat um ti lai lo.</p>",
        "id": "447",
        "name": "CEUNAK RAM AH HIM IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AA DAWH INNKA AN HUN TIKAH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Sual-muihnak chungah hin sau kan vak lai lo, Zungzal khuatha nifa kan naih, Ceunak Pathian khua dawh chung\r\n    kan luh tikah, Aa dawh innka khi an hun lai.</p>\r\n<p><b>CHO: </b>Aa dawh inn-ka khi an hun ah (hun lai) Aa dawh inn-ka khi an hun lai (hun lai) Kan Bawi kan hmuh tikah\r\n    kan lawmh a tling lai, Aa dawh inn-ka an hun tikah.</p>\r\n<p><b>2. </b>Dinhnak a tha khua khi phak ka duh ko cang, Innka hun caan a tlun tikah, Hna-hnawhnak le vawlei sualnak a\r\n    lo lai, Aa dawh inn-ka an hun tikah.</p>\r\n<p><b>CHO: </b>Aa dawh inn-ka khi an hun ah (hun lai) Aa dawh inn-ka khi an hun lai (hun lai) Kan Bawi kan hmuh tikah\r\n    kan lawmh a tling lai, Aa dawh inn-ka an hun tikah.</p>\r\n<p><b>3. </b>Zawtfah, ngaihchiat tahnak zong a lo dih lai, Aa dawh kutka an hun tikah, Thihnak thenmi vialte kan ton\r\n    dih hna lai, Aa dawh innka an hun tikah.</p>\r\n<p><b>CHO: </b>Aa dawh inn-ka khi an hun ah (hun lai) Aa dawh inn-ka khi an hun lai (hun lai) Kan Bawi kan hmuh tikah\r\n    kan lawmh a tling lai, Aa dawh inn-ka an hun tikah.</p>\r\n<p><b>4. </b>Aa dawhmi sunparnak in kan i thuam lai, A dawh kutka an hun tikah, A tha hla kha ralchan ah kan sa ti lai,\r\n    Tuufa thah cia kan thangthat lai.</p>\r\n<p><b>CHO: </b>Aa dawh inn-ka khi an hun ah (hun lai) Aa dawh inn-ka khi an hun lai (hun lai) Kan Bawi kan hmuh tikah\r\n    kan lawmh a tling lai, Aa dawh inn-ka an hun tikah.</p>",
        "id": "448",
        "name": "AA DAWH INNKA AN HUN TIKAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TU HNUAH KAN I TONG LAI</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Kan i tonnak tiva ral ah Tu hnuah tu hnu ah, Khua-muihnak kha a lo dih lai, Tu hnuah, tu hnuah; Raldohnak\r\n    kan tei tikah, Sifahnak a dih cang lai; Ni bang kan ceu zungzal lai, Tu hnuah, tu hnuah.</p>\r\n<p><b>2. </b>Sui tingtang tha kha kan tum lai, Tu hnuah tu hnuah; Kannih Khamhbawi kan thangthat lai, Tu hnuah, tu\r\n    hnuah; A rawk bal lo vancung ah, Zungzal lunglawmhnak hmun ah, Hla tha kan sa zungzal lai, Tu hnuah, tu hnuah.</p>\r\n<p><b>3. </b>Jesuh vancung kan hmuh tikah Tu hnuah tu hnuah; Rawk kho lo luchin kan hmuh lai, Tu hnuah tu hnuah; A bia\r\n    kha a tling cang lai, Vancung rian a tuanmi nih, Kannih zong nih kan tuan lai, Tu hnuah, tu hnuah.</p>",
        "id": "449",
        "name": "TU HNUAH KAN I TONG LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BEAULAH RAM</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Facang le mitsur he a khat, Keimah roconak khua ka phak, Khi khuachung cu zungzal a ceu, Zan muihnak zong\r\n    a um ti lo.</p>\r\n<p><b>CHO: </b>Maw Beaulah ram, Maw ram sung bik, Tlangcung par in ka dir tikah Kei ca a remh inn tha ka hmuh, Rili\r\n    khatte-lei kam ah khin, Ceunak ram kha keimah ka hmuh, Kei ca zungzal umnak a si.</p>\r\n<p><b>2. </b>Khamhbawi nih keimah he aa chok, Dawtnak in kannih kan i chawn A kut in lam a ka hruai i, Vancung\r\n    hawi-komhnak tha a si.</p>\r\n<p><b>CHO: </b>Maw Beaulah ram, Maw ram sung bik, Tlangcung par in ka dir tikah Kei ca a remh inn tha ka hmuh, Rili\r\n    khatte-lei kam ah khin, Ceunak ram kha keimah ka hmuh, Kei ca zungzal umnak a si.</p>\r\n<p><b>3. </b>Zungzal a hring thing umnak in, Rim hmuinak kha thli nih a hranh, Uai lo pangpar zungzal a kho, Nunnak\r\n    cerhti zungzal a luang.</p>\r\n<p><b>CHO: </b>Maw Beaulah ram, Maw ram sung bik, Tlangcung par in ka dir tikah Kei ca a remh inn tha ka hmuh, Rili\r\n    khatte-lei kam ah khin, Ceunak ram kha keimah ka hmuh, Kei ca zungzal umnak a si.</p>",
        "id": "450",
        "name": "BEAULAH RAM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HLA THAR SAKNAK</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Jesuh hmai ah mi tampi an i pum i A min thang-thatnak hla an sa, tingtang an tum.</p>\r\n<p><b>CHO: </b>Bawipa nih an dawt i sualnak an thlahpiak cang, A min thangtha zungzal seh, tiah an au cio ko.</p>\r\n<p><b>2. </b>Sualnak a ngeimi kha mi run hmai ka ah Puan rang aih in a min thang-thatnak hla an sa.</p>\r\n<p><b>CHO: </b>Bawipa nih an dawt i sualnak an thlahpiak cang, A min thangtha zungzal seh, tiah an au cio ko.</p>\r\n<p><b>3. </b>A hmemi kha a ngan bik ah a ser cang, A thi in a tawl cang, hla thar kha an sa cang.</p>\r\n<p><b>CHO: </b>Bawipa nih an dawt i sualnak an thlahpiak cang, A min thangtha zungzal seh, tiah an au cio ko.</p>\r\n<p><b>4. </b>Kan Bawipa a daw lo i a lei mi nih Sual thlahnak khamhnak bochan nak an hmu lai lo.</p>\r\n<p><b>CHO: </b>Bawipa nih an dawt i sualnak an thlahpiak cang, A min thangtha zungzal seh, tiah an au cio ko.</p>",
        "id": "451",
        "name": "HLA THAR SAKNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHBAWI NIH A KAN HRUAI LAI</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Sifahnak kha kaltak in, A zungzal vancung khua in Vansan harnak um hmanhseh, Khamhbawi nih a kan hruai\r\n    lai.</p>\r\n<p><b>CHO: </b>Zungzal van (Zungzal van inn khi) inn khi kannih (van inn khi kan naih), Kan Pa ram (Kan Pa ram\r\n    thluachuah) thlua-chuahnak hmun (ram thluachuahnak hmun), Zungzal mit (Zungzal mitthli tlak) thli tlak lonak\r\n    (mitthlitlak lonak) Vancung khuatha kan phak lai.</p>\r\n<p><b>2. </b>A thiangmi Tuufa umnak, Zion khua thar kha a lang, Amah thutnak hmun ah khin, Kan Khamhtu kha kan hmuh\r\n    lai.</p>\r\n<p><b>CHO: </b>Zungzal van (Zungzal van inn khi) inn khi kannih (van inn khi kan naih), Kan Pa ram (Kan Pa ram\r\n    thluachuah) thlua-chuahnak hmun (ram thluachuahnak hmun), Zungzal mit (Zungzal mitthli tlak) thli tlak lonak\r\n    (mitthlitlak lonak) Vancung khuatha kan phak lai.</p>\r\n<p><b>3. </b>Harnak kha kan lonh tikah, Vancung mi van khua chungah, Ton kan duh kan ngai Khamhtu, Lung-lawmhnak in kan\r\n    ton lai.</p>\r\n<p><b>CHO: </b>Zungzal van (Zungzal van inn khi) inn khi kannih (van inn khi kan naih), Kan Pa ram (Kan Pa ram\r\n    thluachuah) thlua-chuahnak hmun (ram thluachuahnak hmun), Zungzal mit (Zungzal mitthli tlak) thli tlak lonak\r\n    (mitthlitlak lonak) Vancung khuatha kan phak lai.</p>\r\n<p><b>4. </b>Kan ngai ti lo vawlei nun, Khamhbawi kha kan hmuh tikah, A sermi vancung khua thar, A sualmi kannih caah.</p>\r\n<p><b>CHO: </b>Zungzal van (Zungzal van inn khi) inn khi kannih (van inn khi kan naih), Kan Pa ram (Kan Pa ram\r\n    thluachuah) thlua-chuahnak hmun (ram thluachuahnak hmun), Zungzal mit (Zungzal mitthli tlak) thli tlak lonak\r\n    (mitthlitlak lonak) Vancung khuatha kan phak lai.</p>",
        "id": "452",
        "name": "KHAMHBAWI NIH A KAN HRUAI LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KUM AN LIAM IN A THLUM CHIN</h4> <p>Doh is Bb</p> <p><b>1. </b>Sualnak chung ka tlau lio i, A ka kawltu Bawipa, A sin a ka hruaithan tu ka Khamhbawi tuukhal tha, A vel le a dawtnak cu, Rili nakin a thuk, Van nakin a sang deuh i, Cucu ka hla siseh.</p> <p><b>CHO: </b>Kum an liam in a (Kum an liam in a) thlum chin (thlum chin ko), Kum an liam in a thlum chin (Kum an liam in a thlum chin), Jesuh dawtnak sung cu, a thuk in a ngan chin, Kum an liam in a thlum chin.</p> <p><b>2. </b>Hlanlio Judea ram ah khan, Rian a rak tuan lioah, A vel-ngeihnak hngalh duh ah mi tampi nih an zelh, Lungkuai mi a damter hna, Mitcaw khua a hmuhter, Atu zongah keimah hmanh, Dawt a ka duh ve ko.</p> <p><b>CHO: </b>Kum an liam in a (Kum an liam in a) thlum chin (thlum chin ko), Kum an liam in a thlum chin (Kum an liam in a thlum chin), Jesuh dawtnak sung cu, a thuk in a ngan chin, Kum an liam in a thlum chin.</p> <p><b>3. </b>Cu tluk in a kan dawt ca'h, Vai-lamtahnak a in, Phunzai lo tein thihnak tiang sifahnak a in, Cu cah amah thang-thatnak van le vawlei vialte Khat seh tiah tlanh ciami he a zungzal kan sa lai.</p> <p><b>CHO: </b>Kum an liam in a (Kum an liam in a) thlum chin (thlum chin ko), Kum an liam in a thlum chin (Kum an liam in a thlum chin), Jesuh dawtnak sung cu, a thuk in a ngan chin, Kum an liam in a thlum chin.</p>",
        "id": "453",
        "name": "KUM AN LIAM IN A THLUM CHIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KUM AA MER LENGMANGMI AH HIN PATHIAN</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Kum aa mer lengmang mi ah hin Pathian, Kan in bochan, Kan i ruahchan mi le tihmi chungah, Na kut kan hmuh,\r\n    Ni thar le zing thar hna an chuah sinin, Na zaang-fahnak, A thar in kan hmuh t han.</p>\r\n<p><b>2. </b>Maw kan Pathian nangmah na kut chungah, Kan caan a um, Zumhnak in Biakam mi Ram ah kan hruai, Lam kan\r\n    hmuhsak, Nangmah he cun, muihnak hi a ceu ko, Zumhnak muithlam, Hmuhnak ah canter ko.</p>\r\n<p><b>3. </b>Hmailei kum caan zong a uktu Pathian, Nang kan in zulh,Kan thawn lioah Bawipa kan kal tak hlah, Kan umpi\r\n    ko, Nifa kan nunnak changreu rung si law, Kan nunnak dih tik i kan inn si ko.</p>",
        "id": "454",
        "name": "KUM AA MER LENGMANGMI AH HIN PATHIAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NI KHAT HNU NI KHAT A THLUM CHIN</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Mi Khamhtu dawtnak kong tuanbia hlun cu, Nikhat hnu nikhat a thlum chin, Lunglawmh bia-kamnak van inn nuam\r\n    kong cu, Nikhat hnu nikhat a thlum chin.</p>\r\n<p><b>CHO: </b>Nitin lawm in, kan thangthat lai, Din loin lawmhnak hla kan sa lai (kan sa lai), A kan dawtnak kong hloi\r\n    nak hla, Nikhat hnu nikhat a thlum chin.</p>\r\n<p><b>2. </b>A hmunmi ceunak nih ni a tlanter, Nikhat hmu nikhat a ceu chin, Ngaihchiat hnemhnak biakam fino rual cu,\r\n    Nikhat hnu nikhat an ceu chin.</p>\r\n<p><b>CHO: </b>Nitin lawm in, kan thangthat lai, Din loin lawmhnak hla kan sa lai (kan sa lai), A kan dawtnak kong hloi\r\n    nak hla, Nikhat hnu nikhat a thlum chin.</p>\r\n<p><b>3. </b>Thlichia lakah ruah-channak petu cu, Nikhat hnu nikhat a thawng chin, Thih thiam lo nunnak kan i ngeihmi\r\n    cu, Nikhat hnu nikhat an thawng chin.</p>\r\n<p><b>CHO: </b>Nitin lawm in, kan thangthat lai, Din loin lawmhnak hla kan sa lai (kan sa lai), A kan dawtnak kong hloi\r\n    nak hla, Nikhat hnu nikhat a thlum chin.</p>\r\n<p><b>4. </b>Jesuh nih hna-ngamnak a kan pekmi, Nikhat hnu nikhat a thuk chin; Khrihfa mi nih kan i ruah-chanmi cu,\r\n    Nikhat hnu nikhat a sang chin.</p>\r\n<p><b>CHO: </b>Nitin lawm in, kan thangthat lai, Din loin lawmhnak hla kan sa lai (kan sa lai), A kan dawtnak kong hloi\r\n    nak hla, Nikhat hnu nikhat a thlum chin.</p>",
        "id": "455",
        "name": "NI KHAT HNU NI KHAT A THLUM CHIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KUM THAR DANG KHUA A DEI CANG</h4> <p>Doh is Eb</p> <p><b>1. </b>Kumthar dang khua a dei cang, Maw kan dawt Pa Pathian, Nangmah he tuan tinak kum, Run siter ko rih law, Thang-thatnak le than-chonak kum zongah run ser ko, Kan sin na um zungzal nak, Tu kum zong langhter ko.</p> <p><b>2. </b>Dawtnak kum thar a dei cang, Nun than dawtnak um seh, Na mithmai chungah lawmhnak, Ni bangin a tlang cang, Na dawt tang cung kumthar chung, Hngat-channak um ko seh, Lungdai le lung-lawmhnak in, Dinhnak kumthar dei seh.</p> <p><b>3. </b>Nangmah ca'h rian kan tuan lai, Na dawtnak a lang lai, Vancung rian tha ruahchan in, Kumthar chung kantuan lai, Kumthar dang khua a dei cang, Maw kan dawt Pa Pathian, Van le lei khua zakip ah, Kumthar nang ca'h siseh.</p>",
        "id": "456",
        "name": "KUM THAR DANG KHUA A DEI CANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NI LE THLA AN LANH LIOAH</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Lung rethei bawmh awk an tam ko, Ni le thla an lanh lioah, Thlarau tlau liomi an tam ko, Ni le thla an\r\n    lanh lioah, Van lam kan kal lioah hin, Kan i lawmh khawh cio ahcun, Thatnak kha kan tuah cio lai, Ni le thla an\r\n    lanh lioah.</p>\r\n<p><b>CHO: </b>Ni le thla (Ni le thla) an lan lio, (an lan lio) Ni le thla (Ni le thla) an lan lio, (an lan lio), Thil\r\n    tha kha tuah cio u si, (Thil tha kha tuah cio u) Ni le thla an lanh lio ah.</p>\r\n<p><b>2. </b>Ruam-kainak caan a si ti lo, Ni le thla an lanh lioah, Zing hmaipanh bang na hmai siseh, Ni le thla an\r\n    lanh lioah, Vawlei ah ngaihchiatnak le, Aihramnak kha a khat ko, A rilmi unau kha bawm, Ni le thla an lanh lioah.</p>\r\n<p><b>CHO: </b>Ni le thla (Ni le thla) an lan lio, (an lan lio) Ni le thla (Ni le thla) an lan lio, (an lan lio), Thil\r\n    tha kha tuah cio u si, (Thil tha kha tuah cio u) Ni le thla an lanh lio ah.</p>\r\n<p><b>3. </b>Vawlei cung dawtnak hri vialte, Ni le thla an lanh lioah, Pakhat hnu pakhat an cat lai, Ni le thla an lanh\r\n    lioah, Siseh ci tha kan vorh mi, Ceunak le muihnak zongah, A kho lai, kan i lawm lai, Ni le thla an lanh lioah.</p>\r\n<p><b>CHO: </b>Ni le thla (Ni le thla) an lan lio, (an lan lio) Ni le thla (Ni le thla) an lan lio, (an lan lio), Thil\r\n    tha kha tuah cio u si, (Thil tha kha tuah cio u) Ni le thla an lanh lio ah.</p>",
        "id": "457",
        "name": "NI LE THLA AN LANH LIOAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LUNGLAWMMI HNA RA TUAH U</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Lunglawm mi hna ra tuah u, Facang lo ah hla sa tuah, Buk chungah chiah awk caah, Facang kha an khawmh dih\r\n    cang, Kan duh vialte tlin awkah, A kan pek chin Pathian nih, Bawipa Biakinn chung lut tuah, Lung-lawmhnak hla sa\r\n    tuah u.</p>\r\n<p><b>2. </b>Lo zoh-khenhtu Pathian ta, Vawlei cung vialte a si, Belh le facang hmunkhat ah, An thang i an za ti cang,\r\n    A vui kha a hung chuak i, A fang kha a hung za cang, Rawl tha kan si khawh nak lai, Maw Bawipa, kan zaangfah tuah.</p>\r\n<p><b>3. </b>Kannih kha lak awk caah, Ka ra lai tiah bia na kam, Kannih kan theih cio ko ta, Leicung le ramlak vialte\r\n    Mei-inn na khangh dih hnuah, Buk chung facang chiah awkah, Vancung na mi vialte kha, Nangmah nih na fial hna lai.</p>\r\n<p><b>4. </b>Bawipa rung tum zau ko tuah, Vancung ummi vialte he, Vancung in na mi au hna, Rat awk ah fial hna, Bawipa,\r\n    A thiang a tha mi vialte, Lawmhnak hla kha sak awk ah, Nangmah sui biakinn chungah, An dihlak in pumhter hna.</p>",
        "id": "458",
        "name": "LUNGLAWMMI HNA RA TUAH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LO KAN THLO</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Lo vah le duah dih hnu in, Thlaici tha kan tuh tawn, Siseh law Pathian lawng nih, A khoh i a thanter, A\r\n    cawmtu ruah, ti, thli le, Ni zong kha a ser hna, A caan cu a zat tikah, A thei fang a cut ter.</p>\r\n<p><b>CHO: </b>Laksawng tha vialte hi Pathian pekmi an si, A kan dawt hringhran caah hin, Bawipa lawm u.</p>\r\n<p><b>2. </b>A hlat a nai thil vialte, A sertu cu a si, Arfi ceu le pangpar mui, Amah thawngin a si, Thlichia nih a bia\r\n    an ngaih, Van va rawl a pek hna, A fale cu khim lak in, Tam chin rawl a kan pek.</p>\r\n<p><b>CHO: </b>Laksawng tha vialte hi Pathian pekmi an si, A kan dawt hringhran caah hin, Bawipa lawm u.</p>\r\n<p><b>3. </b>Thiltha vialte caah hin, Maw Pathian, kan in lawmh, Kan nun dam, kan khimnak le, Tirawl kumvui caah, Na\r\n    dawt rulhnak caah hin, Pek awk zei kan ngei lo, Siseh law, na duhmi cu, Kan lungthin a si ko.</p>\r\n<p><b>CHO: </b>Laksawng tha vialte hi Pathian pekmi an si, A kan dawt hringhran caah hin, Bawipa lawm u.</p>",
        "id": "459",
        "name": "LO KAN THLO",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHNAK HLA</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>A kan Khamhtu a kan dawtnak, Khua-ruahhar nak ngaingai a si ko, Van in leiah a rung tum kha, Kannih kha a\r\n    kan dawt ca a si, a si, Kannih kha a kan dawt ca a si.</p>\r\n<p><b>CHO: </b>A si, a si, kan caah A si ko, kan ca, Kan Bawi a rung tum i zaang-fahnak um lo-in Vailam-tahnak cungah\r\n    an thah.</p>\r\n<p><b>2. </b>A thi chuahnak le a innak, Thihnak vialte a fak bik a in, Khuazei tal ah an chim cang maw, Sifah le\r\n    retheih a huahnak kha, nak kha, Sifah le retheih a huahnak kha.</p>\r\n<p><b>CHO: </b>A si, a si, kan caah A si ko, kan ca, Kan Bawi a rung tum i zaang-fahnak um lo-in Vailam-tahnak cungah\r\n    an thah.</p>\r\n<p><b>3. </b>Khi khua tha bik kong ka theih cang, Bawi Khrih a zummi nih an co lai, Sihmanhseh van khuathar ah khin,\r\n    Kei umnak tah a remh cang hnga maw, hnga maw? Kei umnak tah a remh cang hnga maw?</p>\r\n<p><b>CHO: </b>A si, a si, kan caah A si ko, kan ca, Kan Bawi a rung tum i zaang-fahnak um lo-in Vailam-tahnak cungah\r\n    an thah.</p>\r\n<p><b>4. </b>Bawipa kan halnak run ka ngai, Nangmah hlei in a tha hodah um? Na Thiang Thlarau in run ka chim, Van\r\n    inntha le ka Khamhtu Bawi kong, Bawi kong, Van inntha le ka Khamhtu Bawi kong.</p>\r\n<p><b>CHO: </b>A si, a si, kan caah A si ko, kan ca, Kan Bawi a rung tum i zaang-fahnak um lo-in Vailam-tahnak cungah\r\n    an thah.</p>",
        "id": "460",
        "name": "KHAMHNAK HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUMHNAK IN KHAMHNAK NAN HMUH</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Pathian nih zaangfah in, Khamhnak tling kha a ser, A vel-ngeihnak in a thim hna, Misual kha a khamh hna.</p>\r\n<p><b>CHO: </b>Zumhnak in khamhnak nan hmuh, Nan hmuh, (nan hmuh) na hmuh (nan hmuh) Nanmah rian-tuannak si lo-in\r\n    Nanmah rian-tuannak thawngin si hin lo-in, Rian-tuannak,Sisehlaw mi an ruam a kai hnga Pathian laksawng a si,\r\n    Sisehlaw mi an ruam a kai hnga, Pathian laksawng a si, Pathian laksawng a si, Pathian laksawng a si, Pathian\r\n    laksawng a si, Laksawng a si.</p>\r\n<p><b>2. </b>Pathian vel-ngeihnak cu, Jesuh Khrih in a lang, Vai-lamtah ningzah a huah i Zaangfahnak a langhter.</p>\r\n<p><b>CHO: </b>Zumhnak in khamhnak nan hmuh, Nan hmuh, (nan hmuh) na hmuh (nan hmuh) Nanmah rian-tuannak si lo-in\r\n    Nanmah rian-tuannak thawngin si hin lo-in, Rian-tuannak,Sisehlaw mi an ruam a kai hnga Pathian laksawng a si,\r\n    Sisehlaw mi an ruam a kai hnga, Pathian laksawng a si, Pathian laksawng a si, Pathian laksawng a si, Pathian\r\n    laksawng a si, Laksawng a si.</p>\r\n<p><b>3. </b>Bawi Jesuh thawngin, A zummi vialte nih Pathian Fapa tiah min saknak Bia tak in an hmuh lai.</p>\r\n<p><b>CHO: </b>Zumhnak in khamhnak nan hmuh, Nan hmuh, (nan hmuh) na hmuh (nan hmuh) Nanmah rian-tuannak si lo-in\r\n    Nanmah rian-tuannak thawngin si hin lo-in, Rian-tuannak,Sisehlaw mi an ruam a kai hnga Pathian laksawng a si,\r\n    Sisehlaw mi an ruam a kai hnga, Pathian laksawng a si, Pathian laksawng a si, Pathian laksawng a si, Pathian\r\n    laksawng a si, Laksawng a si.</p>",
        "id": "461",
        "name": "ZUMHNAK IN KHAMHNAK NAN HMUH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HALLELUJAH, MAW KA KHAMHTU</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Pathian Fa a rungtum ah, \"Ngaih-chiatnak tuarmi,\" an ti, Cucu khua-ruahhar a si, Hal-le-lu-jah, Maw ka\r\n    Khamhtu!</p>\r\n<p><b>2. </b>Ningzah le nihsawh tuar in, Kei ca sualphawt in a dir, Thi in ka sual a ngaihthiam, Hal-le-lu-jah, Maw ka\r\n    Khamhtu!</p>\r\n<p><b>3. </b>Pathian Tuufa thiang a si, Kannih cu misual kan si, Remnak a si kho hnga maw? Hal-le-lu-jah, Maw ka\r\n    Khamhtu!</p>\r\n<p><b>4. </b>Thah awkah Jesuh an tar, \"A dih cang,\" tiin a au, Van ah thangthat in a um, Hal-le-lu-jah, maw ka Khamhtu!</p>\r\n<p><b>5. </b>Kan Bawi sungbik rat tikah, Tlanhmi van in auh awkah, Hi hla kan sa than te lai, Hal-le-lu-jah, maw ka\r\n    Khamhtu!</p>",
        "id": "462",
        "name": "HALLELUJAH, MAW KA KHAMHTU",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RALKAP HLA</h4> <p>Doh is Bb</p> <p><b>1. </b>Nannih khamhnak hmumi tho u Hruaitu Jesuh zulmi hna, I hlau u, maw Pathian fa hna, Ral nih Zion phak hlan ah.</p> <p><b>CHO: </b>(Pathian thawngtha va chim tuah u), Pathian thawngtha va chim tuah u, (Pathian thawngtha va chim tuah u), Rili thlitu thawng bang in, (Rili thlitu thawng bangin), Kan sual tlantu Jesuh thawngin, (Kan sual tlantu Jesuh thawngin), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, Kan tei lai), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, in kan tei lai), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, lianhngannak in kan tei lai), Kan sual tlantu Jesuh thawng, Lianhngannak in kan tei lai.</p> <p><b>2. </b>Kan hmai kal ralthami hna kha, Hi hmun ah fek te'n an dir, Jesuh min in teitu hna nih, An puan rang kha an kan lek.</p> <p><b>CHO: </b>(Pathian thawngtha va chim tuah u), Pathian thawngtha va chim tuah u, (Pathian thawngtha va chim tuah u), Rili thlitu thawng bang in, (Rili thlitu thawng bangin), Kan sual tlantu Jesuh thawngin, (Kan sual tlantu Jesuh thawngin), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, Kan tei lai), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, in kan tei lai), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, lianhngannak in kan tei lai), Kan sual tlantu Jesuh thawng, Lianhngannak in kan tei lai.</p> <p><b>3. </b>Thihnak hmanh tih hin cio loin, Jesuh min hngat-channak in, Amah hruainak hmun kip ah khan, Amah kha kan zulh ko lai.</p> <p><b>CHO: </b>(Pathian thawngtha va chim tuah u), Pathian thawngtha va chim tuah u, (Pathian thawngtha va chim tuah u), Rili thlitu thawng bang in, (Rili thlitu thawng bangin), Kan sual tlantu Jesuh thawngin, (Kan sual tlantu Jesuh thawngin), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, Kan tei lai), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, in kan tei lai), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, lianhngannak in kan tei lai), Kan sual tlantu Jesuh thawng, Lianhngannak in kan tei lai.</p> <p><b>4. </b>A hmaika ah kan dir cio lai, A lianhngan-nak hngalh awkah, A thangthat in hla kan sa lai, Kan laksawng tha kan hmuh lai.</p> <p><b>CHO: </b>(Pathian thawngtha va chim tuah u), Pathian thawngtha va chim tuah u, (Pathian thawngtha va chim tuah u), Rili thlitu thawng bang in, (Rili thlitu thawng bangin), Kan sual tlantu Jesuh thawngin, (Kan sual tlantu Jesuh thawngin), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, Kan tei lai), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, in kan tei lai), Lianhngannak in kan tei lai, (Lianhngannak in kan tei lai, lianhngannak in kan tei lai), Kan sual tlantu Jesuh thawng, Lianhngannak in kan tei lai.</p>",
        "id": "463",
        "name": "RALKAP HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">VAILAM AH AN KHENH CHIH</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Keimah misual caah Bawi Jesuh a thi cang, Nuntlak lo ka thlarau khamh awkah, Vai-lamtah lam har kha,\r\n    Keimah ruangah a zulh, Ka sualnak vialte ngaihthiam awkah.</p>\r\n<p><b>CHO: </b>Ka sualnak vialte kha vailam ah an khenh chih, Zeitluk in dah sifahnak a in? Ngaihchiat phun zakip he\r\n    Jesuh Kal-va-ry ah Ka sual vialte a kalpi dih cang.</p>\r\n<p><b>2. </b>Dawt tlak lo kei cungah hin a thin a fual i Ka lungthin thur kha a ka tawl cang, Thangchia mualpho tel\r\n    loin, Keimah ka luat cang, Ka sual vailam ah an khenh chih cang.</p>\r\n<p><b>CHO: </b>Ka sualnak vialte kha vailam ah an khenh chih, Zeitluk in dah sifahnak a in? Ngaihchiat phun zakip he\r\n    Jesuh Kal-va-ry ah Ka sual vialte a kalpi dih cang.</p>\r\n<p><b>3. </b>Ka sualnak kha a ka lakpiak dih cang tiin, Ka lungthin chung le ka hmur-ka in. Lawmhnak hla he ka\r\n    Khamhbawi cu ka thangthat lai, Amah cu ka zulh zungzal ko lai.</p>\r\n<p><b>CHO: </b>Ka sualnak vialte kha vailam ah an khenh chih, Zeitluk in dah sifahnak a in? Ngaihchiat phun zakip he\r\n    Jesuh Kal-va-ry ah Ka sual vialte a kalpi dih cang.</p>",
        "id": "464",
        "name": "VAILAM AH AN KHENH CHIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A THIANG THITUMNAK</h4> <p>Doh is Ab</p> <p><b>1. </b>A thiang thit-umnak hmaizah pek in kan tuah, Kan Bawipa nih a chimtak cang, Vawlei thawh ka in Bawipa nih a ser cang, Nu le va pumkhat si awkah.</p> <p><b>CHO: </b>Maw dawtnak Bawipa, hi thit-umnak thiang cu, Fehter law thluachuah pe ko. An i dawtnak thukpi ah hram thla dingin, Thiang thlarau in lam run hruai hna.</p> <p><b>2. </b>Kheng khamtu um lo, a thiangmi thit-umnak, Khrihfa mi kan nun can a si, Bawipa dawtnak chungah thit-umnak hmun seh, Khrihfa chungkhar tha si dingin.</p> <p><b>CHO: </b>Maw dawtnak Bawipa, hi thit-umnak thiang cu, Fehter law thluachuah pe ko. An i dawtnak thukpi ah hram thla dingin, Thiang thlarau in lam run hruai hna.</p> <p><b>3. </b>Pathian komhmi cu mi nih `hen hna hlah u, Dawn-khantu thil vialte lo seh, Thleidan le nautat nak lungthin lo dih seh, Thluachuah vanni za um seh ti'n.</p> <p><b>CHO: </b>Maw dawtnak Bawipa, hi thit-umnak thiang cu, Fehter law thluachuah pe ko. An i dawtnak thukpi ah hram thla dingin, Thiang thlarau in lam run hruai hna.</p>",
        "id": "465",
        "name": "A THIANG THITUMNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MO PUAI HLA</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Maw kan Bawipa hi hmun thiang ah thitum biakam feh ter awkah kan ra, Kan cohlang law, samhri sih in, Nun\r\n    chung nguh in biakam fek kan tuah lai.</p>\r\n<p><b>CHO: </b>Na dawtnak hri in run kan tem law, hohmanh nih then khawh lomi kan siter, Na van thluachuah run kan pe\r\n    ko. Aa dawhmi inn-chungkhar si ve dingin.</p>\r\n<p><b>2. </b>Hi vawlei ah kan ton laimi zeizong kip ah kan i dawtnak hmun seh, Zawnruah dawtnak lungthin karh in, Dawt\r\n    tlak lomi daw khotu kan siter.</p>\r\n<p><b>CHO: </b>Na dawtnak hri in run kan tem law, hohmanh nih then khawh lomi kan siter, Na van thluachuah run kan pe\r\n    ko. Aa dawhmi inn-chungkhar si ve dingin.</p>\r\n<p><b>3. </b>Maw kan Bawipa na hmai ka ah thit-umnak cu hmaizahnak in kan tuah, Kan cohlang in, kan thianter ko, Vawlei\r\n    thawkka i na timh cia bang khan.</p>\r\n<p><b>CHO: </b>Na dawtnak hri in run kan tem law, hohmanh nih then khawh lomi kan siter, Na van thluachuah run kan pe\r\n    ko. Aa dawhmi inn-chungkhar si ve dingin.</p>",
        "id": "466",
        "name": "MO PUAI HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MAW PATHIAN, NANG VELNGEI BIK</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Maw Pathian, nang velngei bik, Dawtnak a tling bikmi, Na thlua-chuahnak a sung bik, An cungah tlunter law,\r\n    Na lianh-ngannak ruat tiin, Na thluachuah hmuhter hna, Thih tiang in um ti awkah, An bia-kamnak fehter.</p>\r\n<p><b>2. </b>Vawlei na um lioah khan, Kana khua na phan i, Thit-umnak na lawmhpi hna, Misur hang na karhter, A tu an i\r\n    thitnak hi, Lawmhpi law thluachuah pe, An i duhnak karhter law, Na min upat hna seh.</p>\r\n<p><b>3. </b>Nang an in bochan nakhnga, Maw Pathian bawm hna law, Ngaihchiat harnak an in ah, Nang nih umpi ve hna, An\r\n    nunnak ni nih liam in, Lei kaltak hna hmanhseh, Zungzal um ti awk caah, Na inn ah hruai ve hna.</p>",
        "id": "467",
        "name": "MAW PATHIAN, NANG VELNGEI BIK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN NIH THITUMNAK A SER</h4> <p>Doh is Bb</p> <p><b>1. </b>Pathian nih hlanpi in thit-umnak a ser, A Thiangmi inn chungkhar si awkah, Hmaizah le zumh awktlak in an um nakhnga, A thiang nunnak thar an ngeih nak lai.</p> <p><b>CHO: </b>Thanuam in lawmhpi cio hna u si, Kan hawikom dawt thitumnak puai hi, Atu kan lawmhpi nak hi vancung phan seh, Vawlei an nunnak a dongh hlan tiang.</p> <p><b>2. </b>Jesuh nih Khrihfabu a dawt hna caah, A ca'h a nunnak a pek bangin, Hi nupi thi pa zong nih daw zungzal seh, A thiangmi cawn-piaknak ngai hna seh.</p> <p><b>CHO: </b>Thanuam in lawmhpi cio hna u si, Kan hawikom dawt thitumnak puai hi, Atu kan lawmhpi nak hi vancung phan seh, Vawlei an nunnak a dongh hlan tiang.</p> <p><b>3. </b>Bawipa, an nih cu na kut ah kan in chiah, An cungah na thluachuah hmunhter tuah, Ngaihchiat le lunglawmhnak hrawm ti zungzal in, An thawnnak nangmah ca hmang hna seh.</p> <p><b>CHO: </b>Thanuam in lawmhpi cio hna u si, Kan hawikom dawt thitumnak puai hi, Atu kan lawmhpi nak hi vancung phan seh, Vawlei an nunnak a dongh hlan tiang.</p>",
        "id": "468",
        "name": "PATHIAN NIH THITUMNAK A SER (A/B)",
        "nameb": "1"
    },
    {
        "destext": "<h4 align=\"center\">NANGMAH THENG AN HERH</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Tu lio nungak leng le val, Kam ram ca zeidah na tuah cio, A mui mi ram, Zoh ah nan ngaih a chia lo maw?\r\n    mit-thli he, Nitin thlacam kan herh.</p>\r\n<p><b>CHO: </b>A dawh ve ko tung kan Lairam mui te zong hi, Zei hen a tu tiang Jesuh mui a len lo, Ho hen kan rinh kan\r\n    ram ca-ah Jesuh nih, Nangmah theng an herh.</p>\r\n<p><b>2. </b>Nang na tel lo a si le, A mui chin lai kanmah ruang ah, Maw u le nau, Tih a nung tuk tu lio kan nunnak\r\n    caan hi, Biatak thlarau kan herh.</p>\r\n<p><b>CHO: </b>A dawh ve ko tung kan Lairam mui te zong hi, Zei hen a tu tiang Jesuh mui a len lo, Ho hen kan rinh kan\r\n    ram ca-ah Jesuh nih, Nangmah theng an herh.</p>\r\n<p><b>3. </b>Ram thar ceuter tu dingah, Nang le kei nih tuanvo kan ngei, Na hngal cang maw? Ceu ve cang seh kan Lairam\r\n    hi Jesuh nih, Rian tha bik a kan fial.</p>\r\n<p><b>CHO: </b>A dawh ve ko tung kan Lairam mui te zong hi, Zei hen a tu tiang Jesuh mui a len lo, Ho hen kan rinh kan\r\n    ram ca-ah Jesuh nih, Nangmah theng an herh.</p>",
        "id": "469",
        "name": "NANGMAH THENG AN HERH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LAI MIPHUN HLA</h4> <p>Doh is G.</p> <p><b>1. </b>Hmun ko sehlaw chan kau kih hlan, Thawngtha lennak kan pupa ram, A hnuai thiam cel Cung Lairel nih, Kan humhak lai lungkam lo-in,</p> <p><b>CHO: </b>Zil thli, thiang lennak Lairam ah, Za-lonnak daw u ram mi nih, Tuanrel ti si law rualrem te'n Kan covo u ting nau zo lai.</p> <p><b>2. </b>Cungchin, Bawi thlua-chuah vanni za, Hoi hlan law kan van kau seh ti'n, Sersiam chin u, Lei lung kih hlan, Kutte zawngza teirial si law.</p> <p><b>CHO: </b>Zil thli, thiang lennak Lairam ah, Za-lonnak daw u ram mi nih, Tuanrel ti si law rualrem te'n Kan covo u ting nau zo lai.</p> <p><b>3. </b>Kan ram, kan phun le kan nunphung, Kan aan le ca sunsak len in, Miphun dang sin lang ve si law, Thiam hlei sang kan kai hnga dah ngai.</p> <p><b>CHO: </b>Zil thli, thiang lennak Lairam ah, Za-lonnak daw u ram mi nih, Tuanrel ti si law rualrem te'n Kan covo u ting nau zo lai.</p>",
        "id": "470",
        "name": "LAI MIPHUN HLA (A/B)",
        "nameb": "1"
    },
    {
        "destext": "<h4 align=\"center\">HLAN TUAHBIA DAWH</h4> <p>Doh is Eb</p> <p><b>1. </b>Khi hlan tuanbia ka rel caan ah ka ruah tawn, Jesuh vawlei a um lio kha, um lio kha, Ngakchia cu a sinah tuu bangin a kawh hna, Khi caan ah um ve ka duh ngaingai.</p> <p><b>CHO: </b>Ka lu cungah a kut kha rak chia ve in, Amah nih rak ka kup ve seh law, \"Ngakchia ka sinah ratter hna u,\" a ti lio, A hmaipanh dawh hmuh ka duh ngaingai.</p> <p><b>2. </b>A ke hram ah thlacam in ka biak ko lai, A dawtnak co awk ka hal lai, ka hal lai, Lungtak in Amah vawlei i ka kawl ahcun, Vancung ah khin ka hmuh ve theo lai.</p> <p><b>CHO: </b>Ka lu cungah a kut kha rak chia ve in, Amah nih rak ka kup ve seh law, \"Ngakchia ka sinah ratter hna u,\" a ti lio, A hmaipanh dawh hmuh ka duh ngaingai.</p> <p><b>3. </b>Siseh mi thong tampi a tlaumi hna nih, Van inn nuam kong an thei rih lo, thei rih lo, An ca i inn khan a um kha chimh ka duh hna, Jesuh nih rater an duh hna ti'n.</p> <p><b>CHO: </b>Ka lu cungah a kut kha rak chia ve in, Amah nih rak ka kup ve seh law, \"Ngakchia ka sinah ratter hna u,\" a ti lio, A hmaipanh dawh hmuh ka duh ngaingai.</p>",
        "id": "471",
        "name": "HLAN TUAHBIA DAWH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HNANGAMNAK TLING</h4>\r\n<p>Doh is A</p>\r\n<p><b>1. </b>Bia sunglawi hla aw dawh te bang lung-rethei mi sin a phan, lungder mi le thaba mi cu hnangam dinhnak a\r\n    pek hna.</p>\r\n<p><b>CHO: </b>Hna-ngamnak tling cu na pek lai, Nangmah an zummi cu, Nangmah kha an bochan ca, (an bochan ca) Nangmah\r\n    kha an bochan ca. (nangmah, nangmah kha an bochan ca, bochan ca)</p>\r\n<p><b>2. </b>Bia sunglawi nih a kan hnemh tawn, tihnung zan caan phanh tikah, Kan kalnak kha a ceuter, a dawtnak aw\r\n    thlum cu kan theih.</p>\r\n<p><b>CHO: </b>Hna-ngamnak tling cu na pek lai, Nangmah an zummi cu, Nangmah kha an bochan ca, (an bochan ca) Nangmah\r\n    kha an bochan ca. (nangmah, nangmah kha an bochan ca, bochan ca)</p>\r\n<p><b>3. </b>Bia sunglawi biakam thiang a si, Vancungmi ceunak hmun in, Thlarau nih lungchung ah a phuan, zandai\r\n    thlavang ceu tangah.</p>\r\n<p><b>CHO: </b>Hna-ngamnak tling cu na pek lai, Nangmah an zummi cu, Nangmah kha an bochan ca, (an bochan ca) Nangmah\r\n    kha an bochan ca. (nangmah, nangmah kha an bochan ca, bochan ca)</p>\r\n<p><b>4. </b>Bia sunglawi a kan cawisangtu, Vawlei rumnak in sung deuh Zungzal nunnak dong lo cerhti, Dong lo dawtnak\r\n    hram a si.</p>\r\n<p><b>CHO: </b>Hna-ngamnak tling cu na pek lai, Nangmah an zummi cu, Nangmah kha an bochan ca, (an bochan ca) Nangmah\r\n    kha an bochan ca. (nangmah, nangmah kha an bochan ca, bochan ca)</p>",
        "id": "472",
        "name": "HNANGAMNAK TLING",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ZUMH IN KAN KAL</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Zumh in kan kal, Zeitluk nuam dah! Par dawh an enhnak ah kan kal, Kan lam thluan ah, Rimhmui a zel, Nun\r\n    dongh lonak lei cu kan panh.</p>\r\n<p><b>CHO: </b>Zum in kan kal, Tuukhal tha he, A aunak aw nem cu kan theih, Kan kut tein a kan hruai i, Kan pawng a um\r\n    zungzal kan hngalh.</p>\r\n<p><b>2. </b>Zumh in kan kal, A bia bangin, Kan kalnak lam, a kan hngalhter, Khi lioah kan lam mui hmanhseh, Amah pawng\r\n    ah cun a kan hruai.</p>\r\n<p><b>CHO: </b>Zum in kan kal, Tuukhal tha he, A aunak aw nem cu kan theih, Kan kut tein a kan hruai i, Kan pawng a um\r\n    zungzal kan hngalh.</p>\r\n<p><b>3. </b>Zumh in kan kal, Thlua-chuahnak he, Amah sin ah cun kan i din, Tuukhal tha kan i bochan i, A dawtnak cu\r\n    kan i hrawm cio.</p>\r\n<p><b>CHO: </b>Zum in kan kal, Tuukhal tha he, A aunak aw nem cu kan theih, Kan kut tein a kan hruai i, Kan pawng a um\r\n    zungzal kan hngalh.</p>\r\n<p><b>4. </b>Zumh in kan kal, nunnak dongh tiang, Hawidawt hna he kan leng ti lai, Ceunak hmun ah, him in kan um,\r\n    Zumhnak cu mithmuh ah a tling.</p>\r\n<p><b>CHO: </b>Zum in kan kal, Tuukhal tha he, A aunak aw nem cu kan theih, Kan kut tein a kan hruai i, Kan pawng a um\r\n    zungzal kan hngalh.</p>",
        "id": "473",
        "name": "ZUMH IN KAN KAL",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KHAMHTU PAWNGAH RA TUAH</h4> <p>Doh is Eb</p> <p><b>1. </b>Khamhtu pawngah ra tuah, An dawtu le tlantu, Maw lungrethei ngaihchiami, Nun lio caan tih a nung, na thlarau tha a di, A sinah ra law i din; Khamhtu pawngah ra tuah, zeicah dah na ngan rih? Na lung-retheih nak a hngalh, A bia-kamnak zum law, A thawngtha cu cohlang, A sinah ra law i din.</p> <p><b>CHO: </b>Hnangam in, lungdai in, siarem in um, Jesuh lei cu hun hoih tuah, Hnangam in, lungdai in, siarem in um, Dawtnak tang ah an pom lai.</p> <p><b>2. </b>Khamhtu pawngah ra tuah, Nem tein nang an auh, Vancung na Pa sin naih tuah, A mit in nang an ven, Zangfahnak in an hlawm, Zeica'h ngaihchia in na um, Khamhtu pawngah ra tuah, Zum law va philh ti hlah, Harnak cu a kan lonhter, Zeithil paoh tlung hmanhseh, Nang an huhphenh ko lai, A sinah ra law i din.</p> <p><b>CHO: </b>Hnangam in, lungdai in, siarem in um, Jesuh lei cu hun hoih tuah, Hnangam in, lungdai in, siarem in um, Dawtnak tang ah an pom lai.</p> <p><b>3. </b>Khamhtu pawngah ra tuah, Vawlei nuamhnak zamtak, Jesuh nih na zawn an ruah, Zei thilhmanh tlung hna seh, An kaltak bal lai lo Thazang thar cu an pek lai, Khamhtu pawngah ra tuah, Atu an auh lengmang, Na inndawh lei panh in ra, Daihnak cu tiva bang, Zungzal in a luang hlan, A sinah ra law i din.</p> <p><b>CHO: </b>Hnangam in, lungdai in, siarem in um, Jesuh lei cu hun hoih tuah, Hnangam in, lungdai in, siarem in um, Dawtnak tang ah an pom lai.</p>",
        "id": "474",
        "name": "KHAMHTU PAWNGAH RA TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">MISUNG KHAMHBAWI LUHTER</h4> <p>Doh is Eb</p> <p><b>1. </b>Khamhtu innka hram a dir, Luhter tuah, luhter tuah, luhter tuah, Hlan zongah inn a kingh tawn, Luhter tuah, luhter tuah, luhter tuah.</p> <p><b>CHO: </b>Khamhtu cu innka hram ah a dir, An ngan ko rih tuan in an hngah cang, Na lung innka kau pi'n hung, Misung Khamhbawi luhter tuah, luhter tuah, luhter tuah.</p> <p><b>2. </b>Zumh awktlak hawitha a si, Luhter tuah, luhter tuah, luhter tuah, Zungzal in an kilven lai, Luhter tuah, luhter tuah, luhter tuah.</p> <p><b>CHO: </b>Khamhtu cu innka hram ah a dir, An ngan ko rih tuan in an hngah cang, Na lung innka kau pi'n hung, Misung Khamhbawi luhter tuah, luhter tuah, luhter tuah.</p> <p><b>3. </b>Innka kingh in umter hlah, Luhter tuah, luhter tuah, luhter tuah, A ra than ti sual lai lo, Luhter tuah, luhter tuah, luhter tuah.</p> <p><b>CHO: </b>Khamhtu cu innka hram ah a dir, An ngan ko rih tuan in an hngah cang, Na lung innka kau pi'n hung, Misung Khamhbawi luhter tuah, luhter tuah, luhter tuah.</p>",
        "id": "475",
        "name": "MISUNG KHAMHBAWI LUHTER",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LAWMHNAK DARKHING THAWNG A THANG LAI</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Na lung nih lawmhnak darkhing thawng a theih lai, Dinhnak na sin in a then bal ti lai lo, Kutka bi lei tu\r\n    panh law, Jesuh ca nifa nung tuah, Na lung ah lawmhnak darkhing thawng a thang lai</p>\r\n<p><b>CHO: </b>Lawmhnak darkhing na theih lai, (darkhing na theih lai), Lawmhnak darkhing na theih lai. Khuazei ka na\r\n    kal hmanh ah, Khamhtu min kha i lak law, Na lung ah lawmhnak darkhing thawng na theih lai.</p>\r\n<p><b>2. </b>A tlingmi Jesuh dawtnak cu na hngalh lai, Hi dawtnak cu na velchum ah a lang lai, Dawtnak bianem chim\r\n    zungzal, Vel he nifa riantuan tuah, Na lung ah lawmhnak darkhing thawng a thang lai.</p>\r\n<p><b>CHO: </b>Lawmhnak darkhing na theih lai, (darkhing na theih lai), Lawmhnak darkhing na theih lai. Khuazei ka na\r\n    kal hmanh ah, Khamhtu min kha i lak law, Na lung ah lawmhnak darkhing thawng na theih lai.</p>\r\n<p><b>3. </b>Na kalnk van lam ah harnak um hmanhseh, A vel cu tam chin in chin in na sin an pek lai, Mit hmuh lo a si\r\n    nain, Na sin a um an naih ko, Na lung ah lawmhnak darkhing thawng a thang lai.</p>\r\n<p><b>CHO: </b>Lawmhnak darkhing na theih lai, (darkhing na theih lai), Lawmhnak darkhing na theih lai. Khuazei ka na\r\n    kal hmanh ah, Khamhtu min kha i lak law, Na lung ah lawmhnak darkhing thawng na theih lai.</p>\r\n<p><b>4. </b>Na nunnak cu Jesuh kong chim in hmang tuah, A dinnak cu ngei law mi va phaw ve hna, Nunnak thiang na ngeih\r\n    ahcun, misual na bawmh khawh hna lai Na lung-lawmhnak darkhing thawng a thang lai.</p>\r\n<p><b>CHO: </b>Lawmhnak darkhing na theih lai, (darkhing na theih lai), Lawmhnak darkhing na theih lai. Khuazei ka na\r\n    kal hmanh ah, Khamhtu min kha i lak law, Na lung ah lawmhnak darkhing thawng na theih lai.</p>",
        "id": "476",
        "name": "LAWMHNAK DARKHING THAWNG A THANG LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RAM CEU DAWH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Ni khatkhat cu Pa-ra-dise ram tlangdawh lei cu kan hei cuan tawn, Ni khatkhat cu kan lung chungah, Pangpar\r\n    rimhmui bangin aa zel, Ni khatkhat cu ka lung chungah liam cia caan an hung chuak ve tawn, Ni khatkhat cu kan lung\r\n    chungah liamcia caan an hung chuak ve tawn, Dawtmi hna he zatial tlaih in, Ram ceu dawh ah kan leng ti lai, Ram ceu\r\n    dawh ah kan leng ti lai, Zatial tlaih in kan leng ti lai, Ram ceu dawh ah hmunkhat te ah, Ram ceu dawh ah, ram ceu\r\n    dawh ah.</p>\r\n<p><b>2. </b>Ni khatkhat cu kan hnathlam ah sual teinak hla a hung cuang tawn, Ni khatkhat cu kan lung chungah, Philh\r\n    khawh lomi a hung chuak tawn, Ni khatkhat cu hi thil vialte, dimhnak hmun ah kan hmuh te lai, Ni khatkhat cu hi\r\n    thil vialte, dinhnak hmun ah kan hmuh te lai, dinhnak hmun ah kan hmuh te lai, Maw hawi le hna hngak ko rih u, Khi\r\n    caan tha a phanh lai kan hngalh, Khi caan tha a phanh lai kan hngalh, Maw hawidawt hna hngak ko rih u, Khi caantha\r\n    a phanh lai kan hngalh, Ram ceu dawh ah, ram ceu dawh ah.</p>",
        "id": "477",
        "name": "RAM CEU DAWH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA LUNG A TLING TE LAI</h4> <p>Doh is C</p> <p><b>1. </b>Lei pumsa um ka thlarau, zeica'h lungtlin ni um lo? Zeica'h dah na khin hram lengmang? Zeicah dah na lung ka tlin lo.</p> <p><b>CHO: </b>Ka lung a tling te lai, (Ka lung a tling te lai) Ka lung a tling te lai, (Ka lung a tling te lai, Ka lung a tling te lai), Amah bang ka thawhthan tikah, (Amah bang ka thawh`han tikah,) Ka lung a tling te lai, (Ka lung a tling te lai,) Ka lung a tling te lai, (Ka lung a tling te lai, Ka lung a tling te lai,) Amah bang ka thawhthan tikah (Amah bang ka thawh`han tikah).</p> <p><b>2. </b>Lungthin chung um maw ka thlarau, Leicung ruam-kainak ruat in, Zeica'hdah na ka mawhchiat tawn? Zeicah na lung a tlin lo?</p> <p><b>CHO: </b>Ka lung a tling te lai, (Ka lung a tling te lai) Ka lung a tling te lai, (Ka lung a tling te lai, Ka lung a tling te lai), Amah bang ka thawhthan tikah, (Amah bang ka thawh`han tikah,) Ka lung a tling te lai, (Ka lung a tling te lai,) Ka lung a tling te lai, (Ka lung a tling te lai, Ka lung a tling te lai,) Amah bang ka thawhthan tikah (Amah bang ka thawh`han tikah).</p> <p><b>3. </b>Ka lung thumning maw ka thlarau, Vai-lamtah mi ka ruah ah, Lei saduhthah hlawttak in' Na Lung a tling hnga lo maw?</p> <p><b>CHO: </b>Ka lung a tling te lai, (Ka lung a tling te lai) Ka lung a tling te lai, (Ka lung a tling te lai, Ka lung a tling te lai), Amah bang ka thawhthan tikah, (Amah bang ka thawh`han tikah,) Ka lung a tling te lai, (Ka lung a tling te lai,) Ka lung a tling te lai, (Ka lung a tling te lai, Ka lung a tling te lai,) Amah bang ka thawhthan tikah (Amah bang ka thawh`han tikah).</p> <p><b>4. </b>Khinghram ko rih, Maw ka thlarau, Sual le hruh mawh chiatnak in, Jesuh vailam cu ka cohlan, Cun na lung a tling te lai.</p> <p><b>CHO: </b>Ka lung a tling te lai, (Ka lung a tling te lai) Ka lung a tling te lai, (Ka lung a tling te lai, Ka lung a tling te lai), Amah bang ka thawhthan tikah, (Amah bang ka thawh`han tikah,) Ka lung a tling te lai, (Ka lung a tling te lai,) Ka lung a tling te lai, (Ka lung a tling te lai, Ka lung a tling te lai,) Amah bang ka thawhthan tikah (Amah bang ka thawh`han tikah).</p>",
        "id": "478",
        "name": "KA LUNG A TLING TE LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LUNG BANG A FEK</h4> <p>Doh is Bb</p> <p><b>1. </b>Lung bang a fek, Rili pi kam lungpi bang, Tilet tho hmanh seh a khuh kho bal lo, Thlichia le tilet tho in awn hna hmanhseh, Phan awk a um lo fek chin in a dir.</p> <p><b>CHO: </b>Lung bang a fek, Zeihmanh nih a hrawk kho lo van tek tla in khuari tor hmanhsehlaw, Kan tlantu Jesuh cu kan zum lai lo maw? Zungzal kan i dornak lungpi a si.</p> <p><b>2. </b>Lung bang a fek, Thetse rawn chung lungpi bang, Nilin phengtu khuadawm bantuk a si, Khualtlawng lam-li dornak thlan hnem tu a si, Lam thluangthluan nai dem bang a huhphenh hna.</p> <p><b>CHO: </b>Lung bang a fek, Zeihmanh nih a hrawk kho lo van tek tla in khuari tor hmanhsehlaw, Kan tlantu Jesuh cu kan zum lai lo maw? Zungzal kan i dornak lungpi a si.</p> <p><b>3. </b>Lung bang a fek, Tisur nih kan kulh hmanh seh, Lung bang a fek, harnak tlung hmanh seh, A hmunmi lungpi cungah cun ka um cang, Jesuh mithiang bik kan zeizong a si.</p> <p><b>CHO: </b>Lung bang a fek, Zeihmanh nih a hrawk kho lo van tek tla in khuari tor hmanhsehlaw, Kan tlantu Jesuh cu kan zum lai lo maw? Zungzal kan i dornak lungpi a si.</p> <p><b>4. </b>Lung bang a fek, Vawlei cu rawk hmanhsehlaw, Lung bang a fek, Jordan ti lianh zongah, Lung bang a fek, A biakam bang kan i din, Rethei mi dornak Jesuh,' kan lungpi.</p> <p><b>CHO: </b>Lung bang a fek, Zeihmanh nih a hrawk kho lo van tek tla in khuari tor hmanhsehlaw, Kan tlantu Jesuh cu kan zum lai lo maw? Zungzal kan i dornak lungpi a si.</p>",
        "id": "479",
        "name": "LUNG BANG A FEK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">ARTLANG IN DIR</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Fing le tlang sang par in a thang, Thawngtha muko tum thawng cu, Ngai u, hla thiang sak thawng a thang,\r\n    Kan caah thawngtha a si.</p>\r\n<p><b>CHO: </b>Artlang in dir, raldo awkah, artlang in dir, raldo awkah, chuak u, (chuak u, chuak u,) muko thawng a\r\n    thang, (muko thawng ngai u), chuak u, chuak u, (chuak u, chuak u), Khrihfa ralkap hna, chuak u, (Khrihfa ralkap hna\r\n    chuak u.</p>\r\n<p><b>2. </b>Siangpahrang ralthuam i hruk u, Teinak puanlang cu lek u, Biatak le dinnak cu tanh u, Vanmi nih an kan\r\n    cuanh ko.</p>\r\n<p><b>CHO: </b>Artlang in dir, raldo awkah, artlang in dir, raldo awkah, chuak u, (chuak u, chuak u,) muko thawng a\r\n    thang, (muko thawng ngai u), chuak u, chuak u, (chuak u, chuak u), Khrihfa ralkap hna, chuak u, (Khrihfa ralkap hna\r\n    chuak u.</p>\r\n<p><b>3. </b>Nan ngun muko cu tum rih u, Ral donak aan sang chin seh, Zeizong Jesuh ca si dingin, Nunnak pek in kan tei\r\n    lai.</p>\r\n<p><b>CHO: </b>Artlang in dir, raldo awkah, artlang in dir, raldo awkah, chuak u, (chuak u, chuak u,) muko thawng a\r\n    thang, (muko thawng ngai u), chuak u, chuak u, (chuak u, chuak u), Khrihfa ralkap hna, chuak u, (Khrihfa ralkap hna\r\n    chuak u.</p>",
        "id": "480",
        "name": "ARTLANG IN DIR",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TIKAM DAWH</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Rili cung khualtlawn caan a dih, Kan inn dawh bik kan naih cang, Rili cung khualtlawn caan a dih, Kan inn\r\n    dawh ah kan phan lai.</p>\r\n<p><b>CHO: </b>Thlichia hrangmi a dai zau lai, lawng dinhnak nuam ah kan phan lai, Rili cung khualtlawn caan a dih in,\r\n    Kan inn dawh cu kan phan lai, Rili cung khualtlawn caan a dih in, Kan inn dawh cu kan phan lai.</p>\r\n<p><b>2. </b>Mi tampi cu him in an phan, Khi sui ti kam dawh ahcun, Mi tampi cu lamtim an phan, Siseh hmun tampi a um.</p>\r\n<p><b>CHO: </b>Thlichia hrangmi a dai zau lai, lawng dinhnak nuam ah kan phan lai, Rili cung khualtlawn caan a dih in,\r\n    Kan inn dawh cu kan phan lai, Rili cung khualtlawn caan a dih in, Kan inn dawh cu kan phan lai.</p>\r\n<p><b>3. </b>Thlizil hrang ah lawng hri samh hna, Kan lawng cu hmaiah kal seh, Lawng cung um lawmhnak hla an sa,\r\n    Tlanhnak tling hla dawh bik cu.</p>\r\n<p><b>CHO: </b>Thlichia hrangmi a dai zau lai, lawng dinhnak nuam ah kan phan lai, Rili cung khualtlawn caan a dih in,\r\n    Kan inn dawh cu kan phan lai, Rili cung khualtlawn caan a dih in, Kan inn dawh cu kan phan lai.</p>\r\n<p><b>4. </b>Him tein tikam ah kan hren, Harnak cu kan lonhg dih cang, Khuapi dawh ah kan leng hna lai, Zungzal hla kan\r\n    sa ti lai.</p>\r\n<p><b>CHO: </b>Thlichia hrangmi a dai zau lai, lawng dinhnak nuam ah kan phan lai, Rili cung khualtlawn caan a dih in,\r\n    Kan inn dawh cu kan phan lai, Rili cung khualtlawn caan a dih in, Kan inn dawh cu kan phan lai.</p>",
        "id": "481",
        "name": "TIKAM DAWH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DAWTNAK CHUNGAH UM</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Maw sung bik van fimnak nih leicung fimnak a lonh, Pathian dawtnak cu Jesuh ah tling tein a lang.</p>\r\n<p><b>CHO: </b>Hngalh in kan zumh, (Hngalh in kan zumh)2 lawm in kan hmuh, (Lawm in kan hmuh)2 Khuaruahhar, (Khuaruah\r\n    har bia), khuaruahhar bia, (khuaruahhar bia, khuaruahhar, khuaruahhar bia) Pathian dawtnak chung umnak cu (dawtnak\r\n    chung um, dawtnak chung um) Thisen thianhnak in kan hmuh (thianhnak in kan hmuh, in ka hmu).</p>\r\n<p><b>2. </b>Pathian nih a fimnak cu Baibal in a langhter, Pathian nih a thuhmi cu Fapa in a run phuan,</p>\r\n<p><b>CHO: </b>Hngalh in kan zumh, (Hngalh in kan zumh)2 lawm in kan hmuh, (Lawm in kan hmuh)2 Khuaruahhar, (Khuaruah\r\n    har bia), khuaruahhar bia, (khuaruahhar bia, khuaruahhar, khuaruahhar bia) Pathian dawtnak chung umnak cu (dawtnak\r\n    chung um, dawtnak chung um) Thisen thianhnak in kan hmuh (thianhnak in kan hmuh, in ka hmu).</p>\r\n<p><b>3. </b>Pathian a kan dawtnak cu zumhnak in kan hmuh cang, Kan sualnak a kan ngaihthiam Kal-va-ri tlang cung in,</p>\r\n<p><b>CHO: </b>Hngalh in kan zumh, (Hngalh in kan zumh)2 lawm in kan hmuh, (Lawm in kan hmuh)2 Khuaruahhar, (Khuaruah\r\n    har bia), khuaruahhar bia, (khuaruahhar bia, khuaruahhar, khuaruahhar bia) Pathian dawtnak chung umnak cu (dawtnak\r\n    chung um, dawtnak chung um) Thisen thianhnak in kan hmuh (thianhnak in kan hmuh, in ka hmu).</p>\r\n<p><b>4. </b>Thlarau kan chungah a um, Hngaltu tha bik a si, Pathian nih Khrih sinin langhter mi vel kong thanh u.</p>\r\n<p><b>CHO: </b>Hngalh in kan zumh, (Hngalh in kan zumh)2 lawm in kan hmuh, (Lawm in kan hmuh)2 Khuaruahhar, (Khuaruah\r\n    har bia), khuaruahhar bia, (khuaruahhar bia, khuaruahhar, khuaruahhar bia) Pathian dawtnak chung umnak cu (dawtnak\r\n    chung um, dawtnak chung um) Thisen thianhnak in kan hmuh (thianhnak in kan hmuh, in ka hmu).</p>",
        "id": "482",
        "name": "DAWTNAK CHUNGAH UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TLANH CIAMI HNA HLA</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Sunparnak ram tha a um, Vawlei nunnak pinlei ah, Khua-ruahhar tlanhnak tuanbia cu an hla dawh bik in an\r\n    hloi.</p>\r\n<p><b>CHO: </b>Donglo dawtnak le upatnak, (le u patnak) ruah khawh lo sunparnak cu (sunparnak), tlanhnak kong (A\r\n    tlanhnak kong) donglo lawmhnak cu (lo lawmhnak cu), tlanh ciami hna hla a si (hna hla a si.)</p>\r\n<p><b>2. </b>Lawmhnak hla hodah a sa lai, Zungzal hmunmi caan chungah, Ngaih-chiatnak a um ti lai lo, Mitthli vialte a\r\n    hul lai.</p>\r\n<p><b>CHO: </b>Donglo dawtnak le upatnak, (le u patnak) ruah khawh lo sunparnak cu (sunparnak), tlanhnak kong (A\r\n    tlanhnak kong) donglo lawmhnak cu (lo lawmhnak cu), tlanh ciami hna hla a si (hna hla a si.)</p>\r\n<p><b>3. </b>Pathian tlanhnak tuanbia hla dawh, Zungzal hodah a sa lai, Tihnung harnak in a luatmi, Sual teitu nih an\r\n    sak lai.</p>\r\n<p><b>CHO: </b>Donglo dawtnak le upatnak, (le u patnak) ruah khawh lo sunparnak cu (sunparnak), tlanhnak kong (A\r\n    tlanhnak kong) donglo lawmhnak cu (lo lawmhnak cu), tlanh ciami hna hla a si (hna hla a si.)</p>",
        "id": "483",
        "name": "TLANH CIAMI HNA HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA ZUM TUAH U</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>\"Ka zum tuah u, Khamh nan si lai,\" Ti authawng cu ngai u, Tlanhnak tling le sual luatnak cu, Khua zakip ah\r\n    thanh u.</p>\r\n<p><b>CHO: </b>\"Ka zum tuah u, Khamh nan si lai, Vawlei cung mi vialte, Nan Pathian cu kei lawng ka si, Ka zum tuah u,\r\n    Khamh nan si lai\"</p>\r\n<p><b>2. </b>\"Vai-lamtah cungah ka zoh u,\" Maw sual thilrit vialte, Nan sualnak cu kan chawn cang hna, Zum u law nan\r\n    luat lai.</p>\r\n<p><b>CHO: </b>\"Ka zum tuah u, Khamh nan si lai, Vawlei cung mi vialte, Nan Pathian cu kei lawng ka si, Ka zum tuah u,\r\n    Khamh nan si lai\"</p>\r\n<p><b>3. </b>\"Tho than nan Bawipa ka zoh u,\" Tukforh sualmui chung le. Satan kut chung in luat awkah, Ka vel in kan\r\n    khamh hna.</p>\r\n<p><b>CHO: </b>\"Ka zum tuah u, Khamh nan si lai, Vawlei cung mi vialte, Nan Pathian cu kei lawng ka si, Ka zum tuah u,\r\n    Khamh nan si lai\"</p>",
        "id": "484",
        "name": "KA ZUM TUAH U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">TIMH CIA IN NA UM MAW?</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Atu Jesuh nih an auh lai, hawidawt, A biaceih thutdan hmai ah, Na nunnak caan a dih cang lai kha na\r\n    hngalh, Na bia zeitin dah an ceih lai?</p>\r\n<p><b>CHO: </b>Timh cia in na um maw? (na um maw) Nihin Jesuh nih an auh lai. Timhcia in na um maw? I tim tuah, Amah\r\n    zumh awkah.</p>\r\n<p><b>2. </b>Atu Jesuh nih an auh lai, hawidawt, Zeitin dah na leh te hnga? Thanuam tein a bia na zul kho hnga maw? A\r\n    hmai hmuh na ngamh te hnga maw?</p>\r\n<p><b>CHO: </b>Timh cia in na um maw? (na um maw) Nihin Jesuh nih an auh lai. Timhcia in na um maw? I tim tuah, Amah\r\n    zumh awkah.</p>\r\n<p><b>3. </b>Na nunnak pek dingah na tim cang maw, Nihin Jesuh ra seh law, Sui luchin pek na si lai kha na hngal maw? A\r\n    rawk than kho ti lomi cu.</p>\r\n<p><b>CHO: </b>Timh cia in na um maw? (na um maw) Nihin Jesuh nih an auh lai. Timhcia in na um maw? I tim tuah, Amah\r\n    zumh awkah.</p>\r\n<p><b>4. </b>I tim tuah, i tim tuah, na hngal lai lo. Biaceihnak ni le caan cu, Zeirel loin um hlah, Na tlolh sual te\r\n    lai. Thih chin ram hell na phan sual lai.</p>\r\n<p><b>CHO: </b>Timh cia in na um maw? (na um maw) Nihin Jesuh nih an auh lai. Timhcia in na um maw? I tim tuah, Amah\r\n    zumh awkah.</p>",
        "id": "485",
        "name": "TIMH CIA IN NA UM MAW?",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">RO THA TANG SEH</h4>\r\n<p>Doh is Ab</p>\r\n<p><b>1. </b>Hlan lio kan pupa hna bangin lungkhat tein kan tuan hna lai, Zohchunh awk tlak ro tha tang seh, leile lung\r\n    hmunh chung dir ve seh, Kan Khrihfabu dirkamh u si, Zohchunh awktlak ro tha tang seh.</p>\r\n<p><b>CHO: </b>Kan Bawipa nih a kan cah tak pakhat le khat run i daw u, kan pupa hna nih an zulh bang, lungtak tein kan\r\n    zulh ve lai Kan nunnak hruaitu si seh, Bawi Khrih chungah pumkhat kan si, kan bia bangin hmun zungzal seh, Kan pupa\r\n    keneh kan zulh lai, Kan pupa bangin kan tuan lai, Kan ram chungah dawtnak karh seh.</p>\r\n<p><b>2. </b>Kan Bawipa rovuih bia bangin pakhat le khat kan i daw lai, Zohchunh awk tlak ro tha tang seh, tuuphaw aih\r\n    menmi si loin tuu lungthin tak in kan nung lai, Zohchunh awktlak, ro tha tang seh.</p>\r\n<p><b>CHO: </b>Kan Bawipa nih a kan cah tak pakhat le khat run i daw u, kan pupa hna nih an zulh bang, lungtak tein kan\r\n    zulh ve lai Kan nunnak hruaitu si seh, Bawi Khrih chungah pumkhat kan si, kan bia bangin hmun zungzal seh, Kan pupa\r\n    keneh kan zulh lai, Kan pupa bangin kan tuan lai, Kan ram chungah dawtnak karh seh.</p>\r\n<p><b>3. </b>Kan Bawipa lungput kan ngei lai, Toidor in mizawn kan ruat lai, Zohchunh awktlak ro tha tang seh, zerzau\r\n    le sentai um loin Tleng khat thu va bang kan zuang lai. Zohchunh awktlak, ro tha tang seh.</p>\r\n<p><b>CHO: </b>Kan Bawipa nih a kan cah tak pakhat le khat run i daw u, kan pupa hna nih an zulh bang, lungtak tein kan\r\n    zulh ve lai Kan nunnak hruaitu si seh, Bawi Khrih chungah pumkhat kan si, kan bia bangin hmun zungzal seh, Kan pupa\r\n    keneh kan zulh lai, Kan pupa bangin kan tuan lai, Kan ram chungah dawtnak karh seh.</p>",
        "id": "486",
        "name": "RO THA TANG SEH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LUNGKHAT TEIN TUAN U SI</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Kan pupa zumhnak a hmun thlah loin i tlaih u si, an nun ning, cu chim kan duh, Lungkhat tein an rak um,\r\n    Fel tein nun an i zuam, Bawipa bia bangin an i daw.</p>\r\n<p><b>CHO: </b>Sihmanhseh (Sihmanhseh tuchan) tu chan kan nunning zoh u, (kan nunning zoh u) Kan pupa nunning a leng ti\r\n    lo, Ruah than caan a cu remh than caan a phan lungkhat te-in tuan u si.</p>\r\n<p><b>2. </b>Kan pupa lungput a tha kan lungput si cio ko seh, an nun ning cu chim kan duh, Hak-kauh depdet an duh lo,\r\n    Zudin sa ei an rem lo, Nizarh ni tha tein an ulh.</p>\r\n<p><b>CHO: </b>Sihmanhseh (Sihmanhseh tuchan) tu chan kan nunning zoh u, (kan nunning zoh u) Kan pupa nunning a leng ti\r\n    lo, Ruah than caan a cu remh than caan a phan lungkhat te-in tuan u si.</p>\r\n<p><b>3. </b>Kan pupa lungthin a thiang, Lungthiangmi si cio u si, an nun ning cu chim kan duh, Porhlawt ruamkai an duh\r\n    lo, Mi nautat zong an hmang lo, Cawnpiaknak tha tein an zulh.</p>\r\n<p><b>CHO: </b>Sihmanhseh (Sihmanhseh tuchan) tu chan kan nunning zoh u, (kan nunning zoh u) Kan pupa nunning a leng ti\r\n    lo, Ruah than caan a cu remh than caan a phan lungkhat te-in tuan u si.</p>\r\n<p><b>4. </b>Hringtu pa upat u si, Pathian mithmai cuang an si. An nun ning cu chim kan duh, Lungthin thazang dihlak\r\n    in. Kan caah temhnak an in, Nunnak, fimnak an kan hmuhter.</p>\r\n<p><b>CHO: </b>Sihmanhseh (Sihmanhseh tuchan) tu chan kan nunning zoh u, (kan nunning zoh u) Kan pupa nunning a leng ti\r\n    lo, Ruah than caan a cu remh than caan a phan lungkhat te-in tuan u si.</p>",
        "id": "487",
        "name": "LUNGKHAT TEIN TUAN U SI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KA NU THLACAMNAK</h4>\r\n<p>Doh is Db</p>\r\n<p><b>1. </b>Liamcia caan ka vun nawl riangmang, Sunghno ka nu aw nem te kha, \"Maw ka fa-hniang, na tlunkal ah, Ka\r\n    thlacamnak hi philh hlah.\"</p>\r\n<p><b>CHO: </b>Dawtu nu nunnem ka ruah ah, Ka mitthlam ah a cuang zungzal, Ka hnathlam ah a aw a leng, A thlacamnak cu\r\n    ka hngalh than.</p>\r\n<p><b>2. </b>A aw nem te ka philh kho lo, Zungzal ka lung a ka lawmhter, Ka tlaunak Pathian nih a hngalh, Ka nu\r\n    thlacamnak ka ruat tawn.</p>\r\n<p><b>CHO: </b>Dawtu nu nunnem ka ruah ah, Ka mitthlam ah a cuang zungzal, Ka hnathlam ah a aw a leng, A thlacamnak cu\r\n    ka hngalh than.</p>\r\n<p><b>3. </b>Caan sau hmanhseh ka philh kho lo, A an thlum cu ka thei zungzal, Khukbil in thla a cam lio kha, Ka\r\n    mitthlam ah a cuang zungzal.</p>\r\n<p><b>CHO: </b>Dawtu nu nunnem ka ruah ah, Ka mitthlam ah a cuang zungzal, Ka hnathlam ah a aw a leng, A thlacamnak cu\r\n    ka hngalh than.</p>\r\n<p><b>4. </b>Philh ni um lo ka chan chungah, Khamhtu nih a ka thianternak, Ka sual vialte a ka ngaihthiam, Ka nu\r\n    thlacamnak a tlinter.</p>\r\n<p><b>CHO: </b>Dawtu nu nunnem ka ruah ah, Ka mitthlam ah a cuang zungzal, Ka hnathlam ah a aw a leng, A thlacamnak cu\r\n    ka hngalh than.</p>\r\n<p><b>C4: </b>Bawipa thangthat, vel khamhnak ca, Van ah hmaitonh in kan ton lai, Hmun khat ah kan i tong hna lai, Ka nu\r\n    thlacamnak a tling lai.</p>\r\n<p><b>CHO: </b>Dawtu nu nunnem ka ruah ah, Ka mitthlam ah a cuang zungzal, Ka hnathlam ah a aw a leng, A thlacamnak cu\r\n    ka hngalh than.</p>",
        "id": "488",
        "name": "KA NU THLACAMNAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NUPI THA</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Nupi tha cu hlawn nakin a sunglawi deuh, A va cu a si a fahter bal lai lo, A nun chung a va ca thatnak\r\n    lawng a tuah, bochan awk tlak nupi tha a si.</p>\r\n<p><b>CHO: </b>A fale nih khan thluachuahnak nu tiah an ti, A va zong nih a thang-thatnak lawng a chim \"Nupi tha tampi\r\n    an um si hmanh seh law, Nang tluk an um lo ka dawt,\" a ti, Iang hi hlen a hmang i dawh hi a ziam kho, Bawipa a\r\n    tihmi nu cu thangthat u, A kut theitlai ruangah khan thangthat u, A tuanmi ruangah upat pe u, pe.</p>\r\n<p><b>2. </b>Nupi tha hmuh cu a har bel a har ko, Fenh-aih a tah i tirawl a phorh hna, Dei hlan in a tho i innchungkhor\r\n    rian cu, Hlawngtling tein a tuanpi tawn hna.</p>\r\n<p><b>CHO: </b>A fale nih khan thluachuahnak nu tiah an ti, A va zong nih a thang-thatnak lawng a chim \"Nupi tha tampi\r\n    an um si hmanh seh law, Nang tluk an um lo ka dawt,\" a ti, Iang hi hlen a hmang i dawh hi a ziam kho, Bawipa a\r\n    tihmi nu cu thangthat u, A kut theitlai ruangah khan thangthat u, A tuanmi ruangah upat pe u, pe.</p>\r\n<p><b>3. </b>Zaangtlung in rian a tuan i a ngan a dam, Sifak retheimi hna sinah nun a siang, Fimnak in a ka a pau i a\r\n    hmurka ah zaangfah cawnpiaknak kha a um.</p>\r\n<p><b>CHO: </b>A fale nih khan thluachuahnak nu tiah an ti, A va zong nih a thang-thatnak lawng a chim \"Nupi tha tampi\r\n    an um si hmanh seh law, Nang tluk an um lo ka dawt,\" a ti, Iang hi hlen a hmang i dawh hi a ziam kho, Bawipa a\r\n    tihmi nu cu thangthat u, A kut theitlai ruangah khan thangthat u, A tuanmi ruangah upat pe u, pe.</p>",
        "id": "489",
        "name": "NUPI THA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BETHANY A TLAWNG</h4> <p>Doh is F</p> <p><b>1. </b>Kan Bawipa Be-tha-ny a tlawn lioah, Milung thin dawtnak in a khat, Kan Bawipa Be-tha-ny a tlawn lioah, Nunnak bia nih milung a hlauh.</p> <p><b>CHO: </b>Kan Bawipa Be-tha-ny a rak tlawn lio caan cu, Lung-lawmhnak caan sung a rak si, Innka kaupi'n hung u, atu lut seh, A dawtnak zungzal in a hmun, a dawtnak zungzal a hmun, A dawtnak zungzal a hmun, Innka kaupi'n hung u, Atu lut seh, A dawtnak zungzal in a hmun.</p> <p><b>2. </b>Kan Bawipa Be-tha-ny a tlawn lioah, Lunglawmh rawldanghnak puai an tuah, Kan Bawipa Be-tha-ny a tlawn lioah, A aw nih mithi a thawhter.</p> <p><b>CHO: </b>Kan Bawipa Be-tha-ny a rak tlawn lio caan cu, Lung-lawmhnak caan sung a rak si, Innka kaupi'n hung u, atu lut seh, A dawtnak zungzal in a hmun, a dawtnak zungzal a hmun, A dawtnak zungzal a hmun, Innka kaupi'n hung u, Atu lut seh, A dawtnak zungzal in a hmun.</p> <p><b>3. </b>Kan Bawipa Be-tha-ny a tlawn lioah, Mi thinlung ah daihnak a khat, Kan Bawipa Be-tha-ny a tlawn lioah, Zumhnak in hla dawh cu an sa.</p> <p><b>CHO: </b>Kan Bawipa Be-tha-ny a rak tlawn lio caan cu, Lung-lawmhnak caan sung a rak si, Innka kaupi'n hung u, atu lut seh, A dawtnak zungzal in a hmun, a dawtnak zungzal a hmun, A dawtnak zungzal a hmun, Innka kaupi'n hung u, Atu lut seh, A dawtnak zungzal in a hmun.</p> <p><b>4. </b>Kan Bawipa Be-tha-ny a tlawn lioah, Zumhnak fekbik cu a rak lang, Kan Bawipa Be-tha-ny a tlawn lioah, Sui luchin le vailam an ceu.</p> <p><b>CHO: </b>Kan Bawipa Be-tha-ny a rak tlawn lio caan cu, Lung-lawmhnak caan sung a rak si, Innka kaupi'n hung u, atu lut seh, A dawtnak zungzal in a hmun, a dawtnak zungzal a hmun, A dawtnak zungzal a hmun, Innka kaupi'n hung u, Atu lut seh, A dawtnak zungzal in a hmun.</p>",
        "id": "490",
        "name": "BETHANY A TLAWNG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">SUNGLAWI NGAI IN A RA</h4>\r\n<p>Doh is Bb</p>\r\n<p><b>1. </b>Bawipa a ra, sunglawi ngaiin, Ho-sa-na tiin phun kip an au, Maw nunnem Khamhtu na lam ah, Tum-hnah le puan\r\n    kha an phah hna.</p>\r\n<p><b>CHO: </b>Bawipa a ra sunglawi ngaiin, Lungnem te-in thih awk caah .</p>\r\n<p><b>2. </b>Bawipa a ra, sunglawi ngaiin, Van ralkap hna nih van in an cuanh, A thih lai kha an hngalh caah,\r\n    Ngaihchiat buin an run cuanh ko.</p>\r\n<p><b>CHO: </b>Bawipa a ra sunglawi ngaiin, Lungnem te-in thih awk caah .</p>\r\n<p><b>3. </b>Bawipa a ra, sunglawi ngaiin, Harnak caan tihnung a nai ko cang, Pa nih van sui thutdan cungin, Fapa\r\n    ngeihchun cu a run zoh.</p>\r\n<p><b>CHO: </b>Bawipa a ra sunglawi ngaiin, Lungnem te-in thih awk caah .</p>\r\n<p><b>4. </b>Bawipa a ra, Sunglawi ngaiin, Lung nem tein thih awk caah, Lungfak tein nan lukhun u, Pathian sunparnak a\r\n    langh hlan.</p>\r\n<p><b>CHO: </b>Bawipa a ra sunglawi ngaiin, Lungnem te-in thih awk caah .</p>",
        "id": "491",
        "name": "SUNGLAWI NGAI IN A RA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">DAM TEIN</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Kan chuahsemnak le a ram i dang hmanh seh, Bawi Khrih ah pumkhat te kan si, Bawipa dawtnak nih hmunkhat ah\r\n    a kan hruai, lungkhat in tuan rel ti kan si.</p>\r\n<p><b>CHO: </b>Maw tonnak caan tha liamser hin hlah law, ti zongah tlaih khawh si tung lo, Kan tian ko kun lai, Dam\r\n    tein, Mangtha u, Thlacam u, Tonthan um ko seh.</p>\r\n<p><b>2. </b>Nan kal ah siseh, nan tlun lei ah siseh, Bawipa nih in hup-pheng hna seh, Maw kan hawidawt hna, Then caan\r\n    cu riangmang cang, nan zum in kan rung uai len lai.</p>\r\n<p><b>CHO: </b>Maw tonnak caan tha liamser hin hlah law, ti zongah tlaih khawh si tung lo, Kan tian ko kun lai, Dam\r\n    tein, Mangtha u, Thlacam u, Tonthan um ko seh.</p>\r\n<p><b>3. </b>Vawlei ah thennak caan nih kan uk hmanh seh, Vanram ah thennak a um lo, Dam tein ti bia chim ti lonak ram\r\n    cu kan ruahchan nak ram nuam a si.</p>\r\n<p><b>CHO: </b>Maw tonnak caan tha liamser hin hlah law, ti zongah tlaih khawh si tung lo, Kan tian ko kun lai, Dam\r\n    tein, Mangtha u, Thlacam u, Tonthan um ko seh.</p>",
        "id": "492",
        "name": "DAM TEIN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA INN THIANG</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Bawipa nang ca run inn replo te kan sak, Nang he tonnak hmun thiang siseh, Moses na tonnak hmun bang khan\r\n    thianter ve, Hmai-zahnak in nang kan in pek.</p>\r\n<p><b>CHO: </b>Na sunparnak cu lang seh, Na mit-hmai ceu cu tlang seh, Misual santlai lo nunak kan pe ko, Bawipa cu a\r\n    inn thiang ah hmai-zahnak pe cio u si, Lunglawm in thangthat u si.</p>\r\n<p><b>2. </b>Kut in sakmi inn ah cun na um bal lo, Zumhnak in sakmi lawng na duh, Leng lang si lo, chunglei sining\r\n    lawng na duh, Zumhnak in na sin kan in pek,</p>\r\n<p><b>CHO: </b>Na sunparnak cu lang seh, Na mit-hmai ceu cu tlang seh, Misual santlai lo nunak kan pe ko, Bawipa cu a\r\n    inn thiang ah hmai-zahnak pe cio u si, Lunglawm in thangthat u si.</p>\r\n<p><b>3. </b>Lungthin chungah a hung chuakmi thazang cu, Dawtnak in na fehter caah, Na sunparnak thawngin hi inn cu kan\r\n    sak, Rung lut law a chungah um tuah.</p>\r\n<p><b>CHO: </b>Na sunparnak cu lang seh, Na mit-hmai ceu cu tlang seh, Misual santlai lo nunak kan pe ko, Bawipa cu a\r\n    inn thiang ah hmai-zahnak pe cio u si, Lunglawm in thangthat u si.</p>",
        "id": "493",
        "name": "BAWIPA INN THIANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">INN NUAM, INN THLUACHUAK</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>Bawi Khrih umnak inn cu inn nuam a si, Dawtnak, remnak zungzal in a leng, Hi innchungkhar thluachuah na\r\n    pekmi nih na min sunhlawinak a chuahpi tawn.</p>\r\n<p><b>CHO: </b>Bawi Khrih a umnak inn cu (nak inn cu) Inn nuam, inn thluachuak a si, Bawi Khrih muihmai a cung, (hmai a\r\n    cuang zungzal,) Bawi Khrih lungput a leng (Bawi Khrih lungput a leng) Khrihfa nunning fiang tein a lang. (nunning\r\n    fiang tein a lang).</p>\r\n<p><b>2. </b>Bawi Khrih ukmi inn cu inn nuam a si, Satan hlennak nih a hrawk kho lo, Khrihfabu caah hrih le hram a si i\r\n    zohchunh awk ca zongah a si.</p>\r\n<p><b>CHO: </b>Bawi Khrih a umnak inn cu (nak inn cu) Inn nuam, inn thluachuak a si, Bawi Khrih muihmai a cung, (hmai a\r\n    cuang zungzal,) Bawi Khrih lungput a leng (Bawi Khrih lungput a leng) Khrihfa nunning fiang tein a lang. (nunning\r\n    fiang tein a lang).</p>\r\n<p><b>3. </b>Bawi Khrih tihzahnak in a khatmi inn, cu inn nuam, inn thluachuak a si tawn, Khrihfami nih kan i tinh\r\n    ciomi cu inn nuam inn thluachuak sinak a si.</p>\r\n<p><b>CHO: </b>Bawi Khrih a umnak inn cu (nak inn cu) Inn nuam, inn thluachuak a si, Bawi Khrih muihmai a cung, (hmai a\r\n    cuang zungzal,) Bawi Khrih lungput a leng (Bawi Khrih lungput a leng) Khrihfa nunning fiang tein a lang. (nunning\r\n    fiang tein a lang).</p>",
        "id": "494",
        "name": "INN NUAM, INN THLUACHUAK",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN LENG TI LAI</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Chuk sau cho sang phei hrawl nan kal ah, Nan pheitan dit zei lo lai kan ti, Ba chialmal in thlan ti luang\r\n    hmanh seh, leng le val nih zai hla in kan hnawh, Dam in nan phan cang maw hawidawt hna, Zatial kutnem te i tlai u\r\n    si</p>\r\n<p><b>CHO: </b>Kan in don hna, Maw hawidawt hna, Nan cam chung cu kan i nuam lai, Kan leng ti lai, Lung um loin, Bawipa\r\n    dawtnak thladem tangah cun.</p>\r\n<p><b>2. </b>Bawipa dawtnak thawngin nan hung phan, Hmunkhat te ah thangthat ti u si, Ra u, Bawipa ramrian kan tuan\r\n    lai, nan cam chung cu zairel ti u si, A nuam hringhran caan sung hman ti lai, Bawipa pekmi ni le caan an si.</p>\r\n<p><b>CHO: </b>Kan in don hna, Maw hawidawt hna, Nan cam chung cu kan i nuam lai, Kan leng ti lai, Lung um loin, Bawipa\r\n    dawtnak thladem tangah cun.</p>\r\n<p><b>3. </b>Khrih dawtnak chungah pumkhat kan si, Nunnak changreu hlumkhat kan i hrawm, tlaih awk tha seh sia bang kan\r\n    hren hnga, Maw caan tha liam lai kan siang hin lo, Nuam saimai in phai ti len u si, Bawipa khamhnak Thawngtha bia\r\n    sung cu.</p>\r\n<p><b>CHO: </b>Kan in don hna, Maw hawidawt hna, Nan cam chung cu kan i nuam lai, Kan leng ti lai, Lung um loin, Bawipa\r\n    dawtnak thladem tangah cun.</p>",
        "id": "495",
        "name": "KAN LENG TI LAI",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PAR THA BOR HLUAN</h4>\r\n<p>Doh is E</p>\r\n<p><b>1. </b>Khoi ah hen na um, ngeihchun ka hnakruh, Partha bor dawh hluan, Atu ah lung awi tein kan hmuh cang,\r\n    Pumkhat si dingah.</p>\r\n<p><b>CHO: </b>A tu ah lunglawm tein tlun inn kan in awnh hna, Hmaipanh tein rung lut tuah u, Thluachuah vanni za he,\r\n    Rualchan cingla hawikom dawt hna, Kut zatial i tlai sih, Kan runinn replo tein kan in don hna, Khrihfa lungput\r\n    ziaza tha he thih hlan i daw dingin, Cung Pathian nih lam kan hruai ko seh.</p>\r\n<p><b>2. </b>Kut zatial tlaih in ka dawt nunnem he, Zungzal leng ti sih, Hlan lio Adam le Eve bang lung khat in, Kan\r\n    leng ti ve lai.</p>\r\n<p><b>CHO: </b>A tu ah lunglawm tein tlun inn kan in awnh hna, Hmaipanh tein rung lut tuah u, Thluachuah vanni za he,\r\n    Rualchan cingla hawikom dawt hna, Kut zatial i tlai sih, Kan runinn replo tein kan in don hna, Khrihfa lungput\r\n    ziaza tha he thih hlan i daw dingin, Cung Pathian nih lam kan hruai ko seh.</p>\r\n<p><b>3. </b>Pum hnih fonh i pumkhat chuak nang le kei, Thentu um loin, Bawipa nih thluachuah vanluh kan pe seh, Thla\r\n    za cam ti sih.</p>\r\n<p><b>CHO: </b>A tu ah lunglawm tein tlun inn kan in awnh hna, Hmaipanh tein rung lut tuah u, Thluachuah vanni za he,\r\n    Rualchan cingla hawikom dawt hna, Kut zatial i tlai sih, Kan runinn replo tein kan in don hna, Khrihfa lungput\r\n    ziaza tha he thih hlan i daw dingin, Cung Pathian nih lam kan hruai ko seh.</p>",
        "id": "496",
        "name": "PAR THA BOR HLUAN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">NGAKTAH LE KINGROH CU HRAM HNA</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>Nu lo cilio bang a vakvai mi, Nupa ngei lo semmawng te cu bochan awk ngei lo tap khiarmar in, Hei zoh ah\r\n    lungthin a kuaiter.</p>\r\n<p><b>CHO: </b>Hi bangin Bawipa nih bia a kan cah, \"Ngaktah kingroh cu ka hramh hna,\" Ngaktah kingroh a serhsat tu hna\r\n    cu ngaktah ka siter ve hna lai, Ngaktah kingroh na hramhnak cu, Vancung ah khonmi rochaw an si, Vancung ah rochaw\r\n    ngeih na duh ah cun, Ngaktah kingroh cu hram hna law.</p>\r\n<p><b>2. </b>Ngaktah khua awng tonglo kan ti tawn, Zeihen an chuahchan vawlei ah mizoh hawihngar lungthin fak len in,\r\n    Nunchan ngei lo maw an si hnga.</p>\r\n<p><b>CHO: </b>Hi bangin Bawipa nih bia a kan cah, \"Ngaktah kingroh cu ka hramh hna,\" Ngaktah kingroh a serhsat tu hna\r\n    cu ngaktah ka siter ve hna lai, Ngaktah kingroh na hramhnak cu, Vancung ah khonmi rochaw an si, Vancung ah rochaw\r\n    ngeih na duh ah cun, Ngaktah kingroh cu hram hna law.</p>\r\n<p><b>3. </b>Nung na ngaktah siter a fah cu, Hramh hriat loin maw hlawt an si, zei hngal lo semmawng ci-hai len in,\r\n    Chawva tluk lo ah maw an can.</p>\r\n<p><b>CHO: </b>Hi bangin Bawipa nih bia a kan cah, \"Ngaktah kingroh cu ka hramh hna,\" Ngaktah kingroh a serhsat tu hna\r\n    cu ngaktah ka siter ve hna lai, Ngaktah kingroh na hramhnak cu, Vancung ah khonmi rochaw an si, Vancung ah rochaw\r\n    ngeih na duh ah cun, Ngaktah kingroh cu hram hna law.</p>",
        "id": "497",
        "name": "NGAKTAH LE KINGROH CU HRAM HNA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">LAA FATE CIT IN</h4>\r\n<p>Doh is F</p>\r\n<p><b>1. </b>Bawipa le zultu hna cu Beth-fath khua an phak tikah, Zultu pahnih cu hmaiah a thlah hna, Cit bal lo laa\r\n    fate cu nan rak hruai lai, a ti hna, Profet nih rak chimhchung mi bia tlinnak ah a si.</p>\r\n<p><b>CHO: </b>Zion fanu cu va chim u, \"Na siangpahrang cu na sinah, Nunnem toidor in laa fate cit in a ra.\" Laa fate\r\n    cit in kan Bawipa Je-ru-sa-lem khuapi lei ah \"Ho-sa-na\" mi run au thawng he a va lut.</p>\r\n<p><b>2. </b>Khua-li-pi an luh lioah ngakchuan semmawng tiang an au, Laa fate le Bawipa puanpar an kai, Tum-hnah put in\r\n    an thangthat \"Ho-sa-na\" atu kan khamh, Mikhamhtu Bawi a sinak cu fiang tein a lang.</p>\r\n<p><b>CHO: </b>Zion fanu cu va chim u, \"Na siangpahrang cu na sinah, Nunnem toidor in laa fate cit in a ra.\" Laa fate\r\n    cit in kan Bawipa Je-ru-sa-lem khuapi lei ah \"Ho-sa-na\" mi run au thawng he a va lut.</p>\r\n<p><b>3. </b>A rauh hlanah kan Bawipa an rawinak caan a hung phan, Vailam ah khenh ko u tiah, an au than, Nihin ah kan\r\n    Bawi a si, Thaizing ah kan hlawt than tawn, Kan sining cu kanmah te nih ruat than cio u sih.</p>\r\n<p><b>CHO: </b>Zion fanu cu va chim u, \"Na siangpahrang cu na sinah, Nunnem toidor in laa fate cit in a ra.\" Laa fate\r\n    cit in kan Bawipa Je-ru-sa-lem khuapi lei ah \"Ho-sa-na\" mi run au thawng he a va lut.</p>",
        "id": "498",
        "name": "LAA FATE CIT IN",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">PAKHAT LE KHAT I DAW U</h4>\r\n<p>Doh is C</p>\r\n<p><b>1. </b>An rawi lai zan ah kan Bawipa, Uai riangmang in zultu runrual he, Zanriah an dum ti lioah thih a huah lai\r\n    nak kong a rovuih bia siaherh in a chimh hna</p>\r\n<p><b>CHO: </b>\"Kan dawt hna bangin khat le khat i daw u, Nawl biathar kan pek hna, (run i daw u) ka bia bang nan tuah\r\n    ah cun, a ka zultu nan si kha, a hmumi nih an hngalh lai a ti hna.</p>\r\n<p><b>2. </b>Changreu hlum khat cu a lak i, Thla a cam dih hnuah a cheu i, Nan ca-ah ka pum a si, Keimah philh lonak ca\r\n    ah run hmang u, a ti i a phawt hna.</p>\r\n<p><b>CHO: </b>\"Kan dawt hna bangin khat le khat i daw u, Nawl biathar kan pek hna, (run i daw u) ka bia bang nan tuah\r\n    ah cun, a ka zultu nan si kha, a hmumi nih an hngalh lai a ti hna.</p>\r\n<p><b>3. </b>Mitsur hang hrai cu a lak i, Thla a cam dih hnuah a phawt hna, Nan ca-ah ka thi a si, Mi tampi sual\r\n    ngaih-thiamnak hi bangin hmang tawn u, a ti hna.</p>\r\n<p><b>CHO: </b>\"Kan dawt hna bangin khat le khat i daw u, Nawl biathar kan pek hna, (run i daw u) ka bia bang nan tuah\r\n    ah cun, a ka zultu nan si kha, a hmumi nih an hngalh lai a ti hna.</p>",
        "id": "499",
        "name": "PAKHAT LE KHAT I DAW U",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLAITHAR LAWMHNAK THLUACHUAH</h4>\r\n<p>Doh is Db.</p>\r\n<p><b>1. </b>Fing le tlang sang, nelrawn, zo le chim hmunkip ah, Kan nunnak caah thlai thlak in kan tuan, Thei in a par\r\n    tertu, Zeizong sertu Bawipa sinah lawmhnak langter philh hin hlah u.</p>\r\n<p><b>CHO: </b>Lo le dum chung chuakmi kan thlaithar vialte cu Petu Bawipa hmaiah ah chuahpi cio u, Thlaithar lawmhnak\r\n    le thlaithar thluachuahnak Bawipa nih zungzal kan pe ko seh, Thlaithar lawmhnak le thluachuah chuahnak Bawipa nih,\r\n    zungzal kan pe ko seh, A thluachuahnak kan sinah um ko seh.</p>\r\n<p><b>2. </b>Tuanfak le retheimi kan hna a ngamtertu, Kan tawkzawn in thlua chuah a kan petu, Zeizong ngeitu Bawipa,\r\n    Khua-ruahhar dawtnak nih nifa kan herhmi cu a kan pek tawn.</p>\r\n<p><b>CHO: </b>Lo le dum chung chuakmi kan thlaithar vialte cu Petu Bawipa hmaiah ah chuahpi cio u, Thlaithar lawmhnak\r\n    le thlaithar thluachuahnak Bawipa nih zungzal kan pe ko seh, Thlaithar lawmhnak le thluachuah chuahnak Bawipa nih,\r\n    zungzal kan pe ko seh, A thluachuahnak kan sinah um ko seh.</p>\r\n<p><b>3. </b>Nitlang le van-rialruah kan herhmi khuati tha, A kan serpiaktu Bawipa thangthat u, Kum khat chung kan\r\n    thlawh tuan than laimi lo le dum cinthlak vialte thei in parter ko seh.</p>\r\n<p><b>CHO: </b>Lo le dum chung chuakmi kan thlaithar vialte cu Petu Bawipa hmaiah ah chuahpi cio u, Thlaithar lawmhnak\r\n    le thlaithar thluachuahnak Bawipa nih zungzal kan pe ko seh, Thlaithar lawmhnak le thluachuah chuahnak Bawipa nih,\r\n    zungzal kan pe ko seh, A thluachuahnak kan sinah um ko seh.</p>",
        "id": "500",
        "name": "THLAITHAR LAWMHNAK THLUACHUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KILVENG ZUNGZAL HNA</h4>\r\n<p>Doh is D</p>\r\n<p><b>1. </b>Cung chin kan biak Pathian samhri sihnak thawngin thih hlan leng ti dingin fonh nan si bangin, Khrihfa\r\n    inn-chungkhar tha, Kom hawi phai len awkin, Thluachuah cung vanni za hmu ko u.</p>\r\n<p><b>CHO: </b>Atu thit-umnak hi chan chung nguh in fek seh, Maw Bawipa na dawtnak in run tem hna! An i dawtnak thuk in\r\n    hram thla kho ve dingah, Na Thiang thlarau in kilveng zungzal hna.</p>\r\n<p><b>2. </b>Nunnak hawikom sung bik hngatchan tlak si u law hrin nu sorpa thlua chuah in pe ko hna seh, Nunnak lam har\r\n    chungah zumhtlak in i daw u, Bawipa dawtnak muihmel langhter u.</p>\r\n<p><b>CHO: </b>Atu thit-umnak hi chan chung nguh in fek seh, Maw Bawipa na dawtnak in run tem hna! An i dawtnak thuk in\r\n    hram thla kho ve dingah, Na Thiang thlarau in kilveng zungzal hna.</p>\r\n<p><b>3. </b>Hmaizah le zawnruahnak Khrihfa nuncan sung bik nannih innchungkhar ah leng ve zungzal seh, Leng le val\r\n    zohchunh awk hmailei lam-sialtu ah, Bawipa nih in daw zungzal hna seh.</p>\r\n<p><b>CHO: </b>Atu thit-umnak hi chan chung nguh in fek seh, Maw Bawipa na dawtnak in run tem hna! An i dawtnak thuk in\r\n    hram thla kho ve dingah, Na Thiang thlarau in kilveng zungzal hna.</p>",
        "id": "501",
        "name": "KILVENG ZUNGZAL HNA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">CACC HMUITINH</h4>\r\n<p>Doh is G</p>\r\n<p><b>1. </b>Bawi Khrih ee, Cawnpiak ning in hmunkhat, Tuanrel ti kho si law mi vial, nunnak duhdim ngei kho hna in,\r\n    Van pennak cu lei ah tlung hnga. Lam aw in: Bawi Khrih ee, Bawi Khrih ee, Cawnpiakning in hmunkhat, Bawi Khrih\r\n    tuanrel ee, ti kho si law mi vial ee, (nunnak ee, duhdim ngei kho dingin ee, Vanpen nak cu lei ah tlung hnga, Van\r\n    pen nak cu leiah tlung hnga, Vanpen aw, Vanpen aw ee, nak cu lei ah tlung hnga)2 ah tlung ee, ah tlung hnga ee,\r\n    Vanpen,</p>\r\n<p><b>2. </b>Khamhnak ee, Thawngtha bia aupi u, Laiholh, Laibia, Lai an le nunphung thanchonak rian sung khinh in, Ram\r\n    riantuan hramthawk ve si law. Lam aw in: Khamhnak ee, Khamhnak ee, Thawngthabia aupi u, Khamhnak Laiholh ee,\r\n    Laibia, Laica le nun ee, (phung than ee, chonak rian sung khinh in ee, Ramrian tuan hramthawk ve si law, Ramrian\r\n    tuan hramthawk ve si law, Ramrian aw, Ramrian aw ee, tuan hramthawk ve si law)2, ve si ee, ve si in ee, ram rian,</p>\r\n<p><b>3. </b>Bu kip ee, le mi kip he rualrem tein rian`uan `i kho dingin, hmunkhat lungrual in tang u si, Kan Lai\r\n    miphun tung kho dingin. (Bu kip ee, Bu kip ee, le mi kip he rualrem, Bu kip tein ee, rianuan ti kho dingin ee,\r\n    hmunkhat ee, lungrual in tang u si ee, Kan Lai miphun tung kho dingin, Kan Lai miphun tung kho dingin, Kan Lai aw,\r\n    Kan Lai aw ee, miphun tung kho dingin)2, kho ding ee, kho dingin ee, kan Lai,</p>\r\n<p><b>4. </b>Cung chin ee, Vanbawi thilser vial he rualrem tein i seng tlai law vawlei ah dinnak, felnak le, daihnak,\r\n    zalonnaknak leng ve hnga. Lam aw in: Cung chin ee, Cung chin ee, Van Bawi thil ser vial he, Cung chin realrem ee,\r\n    tein i sengtlai law ee, (Vawlei ee, ah dinnak felnak le ee, Daihnak zalonnak leng ve hnga, Daihnak, zalonnak leng\r\n    ve hnga, Daihnak aw, Daihnak aw ee, Zalonnak leng ve hnga)2, leng ve ee, leng ve hnga ee, daihnak.</p>",
        "id": "502",
        "name": "CACC HMUITINH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">CACC THLUACHUAHNAK HMU KO SEH</h4>\r\n<p>Doh is Eb</p>\r\n<p><b>1. </b>\"A hnuai hrim ve,\" nan ti cio lo maw, Lungrawn khua te hi, Cung chin Van Bawi hammi hmunhma si kaw,\r\n    Ti-khei rem leng dawh te nan khahchun cio lo maw, Hung cer ve lai, Chin Christian College dawh.</p>\r\n<p><b>CHO: </b>Leng le val nih sianghleirun sang hoi hna lai, Fimthiamnak ah cawisan kan si ve cang lai, Semchin\r\n    hrinhniang hna nih run phai awkin, Tuanbia sung cu hmun seh, Chan kau kih hlan hmun seh, Kan miphun sersiamnak\r\n    tuanbia sung cu.</p>\r\n<p><b>2. </b>Carson Bawinu, tahser lennak tuhmawng tang khuazung cu, Vairang ser mimtlau dawh ceu in lek cang, Aw le an\r\n    nih khuari vantek bang ri len cang, Ih hngilh zanmang manh lo khuadei ve cang.</p>\r\n<p><b>CHO: </b>Leng le val nih sianghleirun sang hoi hna lai, Fimthiamnak ah cawisan kan si ve cang lai, Semchin\r\n    hrinhniang hna nih run phai awkin, Tuanbia sung cu hmun seh, Chan kau kih hlan hmun seh, Kan miphun sersiamnak\r\n    tuanbia sung cu.</p>\r\n<p><b>3. </b>A hnakkar ah philh loin a kan tenhtu Bawipa cu, Kan miphun nih zungzal thangthat ko seh, I lawm len u,\r\n    seino leng le val ni len in, C A C C thluachuahnak hmu ko seh.</p>\r\n<p><b>CHO: </b>Leng le val nih sianghleirun sang hoi hna lai, Fimthiamnak ah cawisan kan si ve cang lai, Semchin\r\n    hrinhniang hna nih run phai awkin, Tuanbia sung cu hmun seh, Chan kau kih hlan hmun seh, Kan miphun sersiamnak\r\n    tuanbia sung cu.</p>",
        "id": "503",
        "name": "CACC THLUACHUAHNAK HMU KO SEH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAN THLACAMNAK NGAI TUAH</h4>\r\n<p>Doh is D</p>\r\n<p>Kannih thlacamnak kan ngaihpiak Bawipa, Nangmah hnangamnak cu kannih kan pe tuah. Amen.</p>",
        "id": "504",
        "name": "KAN THLACAMNAK NGAI TUAH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HRAMTHAWKNAK HLA</h4>\r\n<p>Doh is A</p>\r\n<p>Pa, Fapa le Thiang Thlarau cung ah thang-thatnak zungzal um ko seh, Hramthawk can ah a rak si bang, Zungzal in a si\r\n    ko lai, Dong hin loin, Amen, Amen.</p>",
        "id": "505",
        "name": "HRAMTHAWKNAK HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HRAMTHAWKNAK HLA</h4>\r\n<p>Doh is F</p>\r\n<p>Pa, Fapa le Thiang Thlarau cungah thang-thatnak zungzal um ko seh, Hramthawk can ah a rak si bang, Zungzal in a si\r\n    ko lai, Dong hin loin, Amen, Amen.</p>",
        "id": "506",
        "name": "HRAMTHAWKNAK HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">HRAMTHAWKNAK HLA</h4>\r\n<p>Doh is G</p>\r\n<p>Pa, Fapa le Thiang Thlarau cungah thanthat nak zungzal um ko seh, Hramthawk can ah a rak si bang, Zungzal in a si ko\r\n    lai, Dong hin loin, A-men.</p>",
        "id": "507",
        "name": "HRAMTHAWKNAK HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">C.E THLAHNAK HLA</h4>\r\n<p>Doh is C</p>\r\n<p>Bawipa daihnak, kannih sinah kan i then tikah kan pe tuah. THLACAMNAK: Kannih pakhat le pakhat kan i then tikah, Kan\r\n    umnak ka cio ah Pathian nih kan bawm ko seh. Amen.</p>",
        "id": "508",
        "name": "C,'E THLAHNAK HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">THLUACHUAH THANGTHATNAK HLA</h4>\r\n<p>Doh is G</p>\r\n<p>Thluachuah a kan petu Pathian, A Fa Jesuh le Thiang Thlarau, Vanrang toi le vangcung khuami, Mi zakip nih thangthat\r\n    u si. Amen!</p>",
        "id": "509",
        "name": "THLUACHUAH THANGTHATNAK HLA",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AMEN VOI THUM</h4>\r\n<p>Doh is Ab</p>\r\n<p>(Amen)3 (Amen)3</p>",
        "id": "510",
        "name": "AMEN VOI THUM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">AMEN VOI SARIH</h4>\r\n<p>Doh is A</p>\r\n<p>(Amen)7 (Amen)7</p>",
        "id": "511",
        "name": "AMEN VOI SARIH",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA A BIAKINN THIANG AH A UM</h4> <p>Doh is Db</p> <p>Bawipa a biakinn thiang ah a um, Bawipa a biakinn thiang ah a um vawlei dihlak dai te'n um, vawlei dihlak dai te'n um, a hmaiah dai zirziar in, um tuah, a hmaiah. Amen.</p>",
        "id": "512",
        "name": "BAWIPA A BIAKINN THIANG AH A UM",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">A HME RAM LAITLANG</h4>\n<p>Doh is Eb</p>\n<p><b>1. </b>A hme ram Laitlang, Tiva a tam pangpar a tam, Fing le tlang kip ah, An aw cio in vate an awn.</p>\n<p><b>CHO: </b>Lawmhnak in hla kan sa lai, mi vialte, Vanrang a tian a pau khua vialte, Maw Laitlang, keimah caah, Na\n    tha ngai ve ko maw, kan khua.</p>\n<p><b>2. </b>Temhnak tam hmanh seh, Kan lawmh cio kan lo kan hmuh tik, Anhring, fangvoi, fang, Thli nih a rak hranh,\n    thonglawi thawng.</p>\n<p><b>CHO: </b>Lawmhnak in hla kan sa lai, mi vialte, Vanrang a tian a pau khua vialte, Maw Laitlang, keimah caah, Na\n    tha ngai ve ko maw, kan khua.</p>\n<p><b>3. </b>A sang kan umnak, Zil nih leng hna, dai siarmar in, Caan sa, chuak hmanh seh, Lai ram len a nuam zungzal\n    ko,</p>\n<p><b>CHO: </b>Lawmhnak in hla kan sa lai, mi vialte, Vanrang a tian a pau khua vialte, Maw Laitlang, keimah caah, Na\n    tha ngai ve ko maw, kan khua.</p>\n<p><b>4. </b>Ram nuam tlawng hmanh ning, Maw chilchial te lang lai pei ti'n, Khoi maw Lai khua kha, Lungleng in ka ngai\n    riangmang tawn.</p>\n<p><b>CHO: </b>Lawmhnak in hla kan sa lai, mi vialte, Vanrang a tian a pau khua vialte, Maw Laitlang, keimah caah, Na\n    tha ngai ve ko maw, kan khua.</p>",
        "id": "513",
        "name": "A HME RAM LAITLANG",
        "nameb": "0"
    },
    {
        "destext": "<h4 align=\"center\">KAWLRAM HLA</h4>\n<p>Doh is G.</p>\n<p>Maw Kawlram zungzal hmun, Kan pipu ro si ca'h upat u si, Ram pumpi cu kan nun dongh tiang khamh u si, Kan ram kan\n    vawlei kanmah ta a si, Kan ram, vawlei, Lungnge tein kan ram ca, Tuan zungzal u si, Kan ram a si, Ram sungmi.</p>",
        "id": "514",
        "name": "KAWLRAM HLA",
        "nameb": "0"
    }
];

//--- Chawnghlang Relnak ---
const allReadings = [
    {
        "destext": "<h4 align=\"center\">KUM THAR</h4>\r\n<p>Ka dawt i ka ngaihmi ka unaule hna, Bawipa chung i nan nunnak ah cu bantuk cun fek tein dir ko u, nannih cu kaa\r\n    lawmhnak le ka suiluchin nan si, ka dawtle hna.</p>\r\n<p><b>Herhbau in um kha zeidah a lawh ti ka hngalh; cun a hlei a hluat in ngeih kha zeidah a lawh ti zong kha ka\r\n        hngalh. Cucaah khuazeika hmanh ah, zeitik caan paoh ah, ka paw a khim ah siseh, ka rawl a tam ah siseh, tam tuk\r\n        ka ngeih ah siseh, tlawm tuk ka ngeih ah siseh, lungsi hnangam tein um kha ka thiam cang.</b></p>\r\n<p>Tthawnnak a ka petu Khrih thawngin thil zei paoh ka tuah khawh ko hna.</p>\r\n<p><b>Bawipa chung i nan nunnak ah khan i lawm zungzal ko, ti kan duh hna. I lawm ko u, tiah ka nolh tthan rih ko lai.</b></p>\r\n<p>Zei thil kong hmanh ah lungrethei in um hlah u. Thla nan camnak ah Bawipa cu nan herhmi kha hal u law nan hal tikah\r\n    lunglawm tein hal zungzal u.</p>\r\n<p><b>Cun Pathian daihnak, minung hngalhnak a lonhtu nih cun, Khrih Jesuh chungah nan lungthin le nan ruahnak cu him\r\n        tein a chiah lai.</b></p>\r\n<p>Thil pakhat ka tuahmi cu hnulei thil kha philh i hmailei thil banh i zuam kha a si.</p>\r\n<p><b>Cucaah kawltung leiah cun laksawng hmuh awkah khan ka tli i cu laksawng cu Pathian nih Khrih Jesuh thawngin\r\n        cunglei nunnak i a kan kawh hi a si.</b></p>\r\n<p>A donghnak ah ka u le ka nau hna, nan lungthin kha a tthami le thangthat awk a tlakmi in khahter hna u; a taktak a\r\n    simi thil, a sunglawimi thil, aa dawhmi thil le upat awk a tlakmi thil khan khahter hna u.</p>\r\n<p><b>Keimah sinin nan hngalhmi le nan hmuhmi kha tuah i zuam hna u.</b></p>\r\n<p>Daihnak a kan petu Pathian nih cun an umpi hna lai.</p>",
        "id": "1",
        "name": "KUM THAR"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN KAN SINAH A UM</h4>\r\n<p>Ka Pa nih ka min in Bawmtu, Thiang Thlarau a run thlah laimi nih,</p>\r\n<p><b>Zeizong vialte kha an cawnpiak hna lai i kan chimhmi vialte hna kha nan lung an pemter hna lai.</b></p>\r\n<p>Daihnak kan chiahtak hna, keimah daihnak cu kan pek hna. Vawlei nih an pek hna bantukin kan pe hna lo.</p>\r\n<p><b>Lungrethei le vansang au in um hlah u; nan thin zong phang hlah u;</b></p>\r\n<p>Kan kaltak hna lai, sihmanhsehlaw nan sinah ka ra tthan lai ka ti pei nan theih ko kha. Nan ka dawt ahcun ka Pa sin\r\n    i ka kal lai hi nan i lawm lai.</p>\r\n<p><b>Thil a hung si taktak tikah nan zumh khawh nakhnga, mah hihi a hlankan in ka rak in chimhchung hna.</b></p>\r\n<p>Cucaah khuazakip ah va kal u law miphun vialte kha a ka zultu ah va ser hna u; Pa le Fapa le Thiang Thlarau min in\r\n    tipilnak va pe hna u law kan fialmi vialte hna hi an zulh nakhnga va cawnpiak hna u.</p>\r\n<p><b>Cun hihi philh hlah u, nan sinah a zungzal in caan dongh tiangin ka um lai.</b></p>\r\n<p>Ka Pa nawlbia kha ka ngaih i a dawtnak chungah ka um bantukte hin ka nawlbia nan ngaih ahcun ka dawtnak chungah hin\r\n    nan um ve lai.</p>\r\n<p><b>Ka lunglawmhnak kha nan chungah a um i nan i lawmhnak cu a tlin nakhnga, hi bia cu kan chimh hna.</b></p>\r\n<p>Nannih nih cun nan ka thim lo, keimah nih kan thim hna i a hmun ding thei kha tampi in va tlai tuah u, tiah kan fial\r\n    hna.</p>\r\n<p><b>Cucaah ka min in nan halmi paoh cu ka Pa nih an pek hna lai.</b></p>",
        "id": "2",
        "name": "PATHIAN KAN SINAH A UM"
    },
    {
        "destext": "<h4 align=\"center\">NGAIHCHIHNAK IN PATHIAN A BIAMI HNA</h4>\r\n<p>Mah le mah kha kan tha tiah aa ruat i midang vialte kha zei i a rel lomi hna sinah Jesuh nih hi tahchunhnak bia hi a\r\n    chim.</p>\r\n<p><b>Mi pahnih cu biakinn i thlacam awkah an hung kal; pakhat cu Farasimi a si i a dang cu ngunkhuai khawltu a si.</b></p>\r\n<p>Farasipa cu a dir i hi bantukin thla a cam: \" Maw Pathian, kei cu midang bantukin hak a kaumi, lih a chimmi, nu le\r\n    pa sualnak a tuahmi ka si lo caah nangmah cu kan lawmh; cun khi ngunkhuai khawltupa bantuk zong khi ka si lo caah\r\n    kan lawmh fawn. Zarh khat chungah voi hnih lengmang rawl ka ul i chawva ka hmuhmi vialte cheuhra cheukhat kan pek,\"\r\n    tiah a ti.</p>\r\n<p><b>Sihmanhsehlaw ngunkhuai kawltupa cu lamhlatpi ah a dir i vanlei hmanh zoh ngam loin a ttang aa cum i: \" Maw\r\n        Pathian, kei misual cungah hin zaangfahnak ngei ko,\" tiah a ti.</b></p>\r\n<p>Hihi kan chimh hna: \"Farasimipa kha si loin hi pa tu hi a sualnak ngaihthiam in inn ah a ttinmi cu a si. Zeicahtiah\r\n    amah le amah aa ngantermi cu tthumh an si lai i, mi tangah aa dormi cu mingan ah ser an si lai,\" tiah a ti.</p>\r\n<p><b>Sihmanhsehlaw Pathian a bia taktakmi nih cun thlarau le biatak in an biak caan kha a ra lio i hika hi a phan\r\n        cang. Hi bantukin a biami hna hi pa nih a duhmi cu an si.</b></p>\r\n<p>Pathian cu thlarau a si i a biatu nih cun thlarau le biatak in an biak awk a si.</p>\r\n<p><b>Hal u law an in pek hna lai, kawl u law nan hmuh lai, king u law innka an in hunpiak hna lai.</b></p>\r\n<p>Zeicahtiah a halmi paoh cu pek an si lai, a kawlmi paoh nih an hmuh lai i a kingtu paoh cu innka kha hunpiak an si\r\n    lai.</p>",
        "id": "3",
        "name": "NGAIHCHIHNAK IN PATHIAN A BIAMI HNA"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN INN</h4>\r\n<p>Jesuh cu biakinn ah khan a va lut i biakinn chung i chaw a rak zuarmi le a rak cawmi kha a tthawl dih hna; tangka\r\n    thlengtu pawl cabuai le laileng zuartu pawl tthutdan kha a leh dih hna i;</p>\r\n<p><b>Annih cu, cathiang chungah Pathian nih ka inn cu thlacamnak inn a si lai, a ti, tiah aa ttial; Sihmanhsehlaw\r\n        nannih nih cun mifir kua ah nan ser cang, tiah a ti hna.</b></p>\r\n<p>Jesuh cu a rak tlonlennak Nazareth khua ah khan a va kal i Sabbath ni ah cun hmasa i a rak tuah tawn bantuk khan\r\n    pumhnak inn ah a kal.</p>\r\n<p><b>Cathiang rel awkah khan a hung dir i Profet Isaiah cazual kha an pek.</b></p>\r\n<p>Cazual cu a vun samh i,</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Bawipa thlarau cu ka cungah a um. Sifakmi hna sin i thawngtha chim awkah chiti a ka thut i saltangmi hna sin i\r\n        luatnak thanh awkah a ka thlah. Mitcawmi hna sin i khua hmuh tthannak pek awk le hremmi hna luatter dingah a ka\r\n        thlah. Bawipa nih a mi hna a khamh hna lai ding kum cu va thanh awkah a ka thlah, tiah aa ttialnak hmun kha a\r\n        rel.</b></p>\r\n<p>Annih cu a tawh hna i, \"Hika Cathiang caang hi nannih nih ka rel tikah nan theih bantukin, nihin ah hin a tling\r\n    cang,\" tiah a ti.</p>\r\n<p><b>An lung a hmuh ngaingai hna i bia dawhdawh a chimmi nih khan an khuaruah a harter dih hna.</b></p>",
        "id": "4",
        "name": "PATHIAN INN"
    },
    {
        "destext": "<h4 align=\"center\">UNAU SINAK</h4> <p>Areopagas i aa pummi hna hmaiah cun Pawl cu a dir i, \"Athens khuami hna, nannih cu biaknak lei thil paohpaoh ah zuamnak lungthin a ngei ngaingaimi nan si kha ka hmuh. Zeicahtiah nan khua chung i kaa chawh i nan biaknak hmun kha ka zoh hna tikah biak ttheng pakhat cu a cungah, 'Hngalhlomi Pathian caah' tiin aa ttial kha ka hmuh.</p> <p><b>Cu nan biakmi cu, a hngalh cu hngal hmanh hlah u law, nan sin i kan thanhmi hna hi a si.</b></p> <p>Vawlei le a chung i a ummi thil vialte a sertu Pathian hi vancung le vawleicung Bawi a si i minung sermi biakinn chungah a ummi a si lo.</p> <p><b>Cu hlei ah Pathian cu minung kha nunnak le thaw le zeizong vialte a petu a si caah minung nih an tuahpiak khawhmi kha a herhmi pakhat hmanh a um lo.</b></p> <p>Minung pakhat chungin miphun vialte kha a ser hna i vawlei cungah hin khua a sakter hna. A hlankan in an caan le an umnak hmun kha a khiahpiak hna.</p> <p><b>Amah chungah khan nung, kan cawl kan cang i khua kan sa, an ti bantuk le, nan hlaphuahtu hna nih, 'Kanmah zong a tefa kan si ve,' an ti bantuk kha a si.</b></p> <p>Cucaah Judahmi le Jentailmi, sal le luatmi, nu le pa karah zeihmanh thleidannak a um ti lo. Khrih Jesuh he nan i pehtlaihnak thawngin pakhat nan si dih cang.</p> <p><b>Kannih nih Pathian kan dawt cu Pathian nih a kan dawt hmasa caah a si. Mi zeimaw nih, 'Pathian ka dawt,' a ti i a unau a huat ttung ahcun amah cu mi lihchim a si.</b></p> <p>Zeicahtiah a hmuhmi a unau hmanh a dawt khawh lo ahcun a hmuh lomi Pathian chinchin cu a daw kho lai lo.</p> <p><b>Cucaah Khrih nih a kan fialmi cu hihi a si: Pathian a dawmi nih cun nan unau kha nan dawt hrimhrim hna lai.</b></p>",
        "id": "5",
        "name": "UNAU SINAK"
    },
    {
        "destext": "<h4 align=\"center\">THLACAMNAK</h4>\r\n<p>Nannih cu thla nan cam tikah, nan innkhan chungah va lut uh law, innka vaa kharhkhumh hna uh law, cutincun hmuh\r\n    khawh lomi nan Pa sinah khan va cam uh. Cun a thli tein nan tuah mi a hmutu nan Pa nih khan Laksawng an pek hna\r\n    lai.</p>\r\n<p><b>Thla nan cam tikah, Pathian bia lomi hna nih sullam a ngei set lomi bia tampi an hman bantukin va hmang ve hlah\r\n        uh; Annih nih cun kan thlacam a sau ruangah hin Pathian nih a kan theihpiak deuh lai tiah an ruah. Annih bantuk\r\n        cun va tuah hlah u, zeicahtiah nan Pa nih cun nan hal hlan in nan herhmi cu a hngalh cia ko.</b></p>\r\n<p>Cucaah hi bantukin thla nan cam awk a si:</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Vancung khua i a um kan Pa,<br>\r\n        Na min updatnak um ko seh,<br>\r\n        Na Pennak tlung cang ko seh,<br>\r\n        Vancung bantukin leicung ah na duhnak tling cang ko seh,<br>\r\n        Pawcawmnak khim in nifa rawl kan pe ko sawh,<br>\r\n        Mi nih kan cung i an sual tikah kan ngaihthiam hna bangin,<br>\r\n        Kan sualnak kha kan ngaithiam ve tuah.<br>\r\n        Sual forhnak ah tel ve loin thatlonak vialte chungin kan khamh tuah,<br>\r\n        Pennak nawl le liangngannak le updatnak kha a zungzal na cungah um ko seh, Amen.</b></p>\r\n<p>Jesuh nih bia a chim dih cun vanlei kha a zoh i :</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Ka Pa, Caan kha a cu cang, Na Fapa nih sunparnak kan pek ve nakhnga , Na Fapa cu sunparnak ka pe ko.</b></p>\r\n<p>Na ka pekmi vialte hna cu zungzal nunnak ka pek hna nakhnga, mi vialte cung i nawlngeihnak cu na ka pek cang. Cun\r\n    Pathian taktak a simi nangmah hngalh le nangmah nih na thlahmi Jesuh Khrih hngalh hi zungzal nunnak cu asi.</p>",
        "id": "6",
        "name": "THLACAMNAK"
    },
    {
        "destext": "<h4 align=\"center\">PHUN LE RAM DAWTNAK</h4>\r\n<p>Nanmah le nanmah i hleng hlah u, ahohmanh nih Pathian cu an deh kho lo; mi nih an tuh bangin an zun ko lai.</p>\r\n<p><b>A pumsa duhnak lo ah a tuh ahcun, thihnak kha a zun lai; Thlarau lo ah a tuh ahcun, zungzal nunnak kha a hmuh\r\n        lai.</b></p>\r\n<p>Cucaah tthatnak tuah kha ba hlah u sih, kan ngol lo ahcun a theitlai kan zun caan kha a phan ve ko lai.</p>\r\n<p><b>Cucaah a caan kan ngeih fate, mi cungah tthatnak tuah kha i zuam u sih.</b></p>\r\n<p>A donghnak ah Bawipa he nan i pehtlaihnak thawng le a tthawnnak a nganmi thawngin nan thazang cu i tthawnter chin ko\r\n    u, Khuachia hlennak kha nan doh khawh nakhnga Pathian nih an pekmi hna ralthuam vialte kha i hruk u. Cun ni tthalo\r\n    kha a hung phanh tikah nan ral cu nan rak doh khawh lai i a donghnak tiangin nan i tuk hnu zongah nan dir hmun ah\r\n    khan fek tein nan dir kho lai.</p>\r\n<p><b>Cucaah timh cia tein dir u: nan taisawm caah baitak kha fek tein i sawmh u; nan ttang phaw caah dinnak kha i benh\r\n        u; nan kedan caah daihnak Thawngtha chim thathawhnak kha i danh u. Zumhnak kha phaw caah i ken zungzal u law cu\r\n        phaw cun Khuachia nih mei bantuk a simi thal in an kah hna tikah nan rak hmih khawh hna lai.</b></p>\r\n<p>Cun luchin caah khamhnak kha i chinh u law Thlarau nih an pekmi hna vainam caah Pathian bia kha i lak u. Hi vialte\r\n    hi thlacam bu in tuah u law Pathian kha bawmhnak hal u. (Thlarau nih an hruai hna ningin zeitik caan paoh ah\r\n    thlacam u. Hi caah timh cia tein um zungzal u law nan hnabei zei tik hmanh ah dong hlah u; Pathian mi hna caah\r\n    thlacam zungzal u.)</p>",
        "id": "7",
        "name": "PHUN LE RAM DAWTNAK"
    },
    {
        "destext": "<h4 align=\"center\">MINO</h4>\r\n<p>Ka fapa, Khrih Jesuh he kan i pehtlaihnak thawngin kan hmuhmi Pathian vel nih tthawnnak in pe ko seh.</p>\r\n<p><b>Tehte tampi hna theih ah ka chimmi bia kha i lak law midang a cawnpiak kho ve dingin na zumhmi hna kha va kenter\r\n        hna.</b></p>\r\n<p>Na kum a no ruangah ahohmnah nih in zawmhtaih hna hlah seh; sihmanhsehlaw na biachim, na holhrel ah siseh, na ziaza\r\n    ah siseh, dawtnak, zumhnak le thiannak na ngeihmi ah siseh, zumtu hna caah tahchunh awktlak va si tuah.</p>\r\n<p><b>A rian a zahpi lomi, Pathian biatak hmaan tein mi a cawnpiaktu saya bantukin Pathian hnatlaknak kha na hmuh khawh\r\n        nakhnga fakpi in i zuam.</b></p>\r\n<p>Jesuh cu khualtlawn ah aa thawh tthan i cu lioah cun mipa pakhat a hung tli, a hmaiah a khuk aa bil i, \"Saya,\r\n    nangmah cu mittha na si, zungzal nunnak hmuh awkah zeidah ka tuah lai,\" tiah a hal.</p>\r\n<p><b>Jesuh nih cun, \"Zeicahdah saya ttha na ka ti? Pathian dah ti lo cu ahohmanh a tthami an um ttung lo.</b></p>\r\n<p>Nawlbia kha na hngalh ko ttung hna; lai va nawng hlah, nupi cung le va cung in midang cungah sual hlah, fir hlah,\r\n    lih chim hlah, mi va hleng hna hlah, na nu le na pa upat hna,\" ti pei an si kha tiah a ti.</p>\r\n<p><b>Cu pa nih cun, \"Saya, hi nawlbia vialte cu ka ngakchiat lioin ka zulh dih ko cang hna,\" tiah a ti.</b></p>\r\n<p>Dawtnak lungthin he Jesuh nih dengteo in a vun zoh I</p>\r\n<p><b>\"Pakhat lawnglawng na bau, va kal law na ngiehmi thil vialte kha va zuar law tangka cu sifakmi kha va tthen hna,\r\n        cun vancung ah rothil na ngei lai; cun ra law ka zul,\" tiah a ti.</b></p>",
        "id": "8",
        "name": "MINO"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN RAM KAUHNAK</h4>\r\n<p>Jesuh nih cun a hun naih hna i, \"Vancung le vawleicung i a ummi nawlngeihnak vialte cu pek ka si cang.</p>\r\n<p><b>Cucaah khua zakip ah va kal u law miphun vialte kha a ka zultu ah va ser hna u, Pa le Fapa le Thiang Thlarua min\r\n        in tipilnak ve pe hna u.</b></p>\r\n<p>Kan fialmi vialte hna hi an zulh nakhnga va cawnpiak hna u. Cun hihi philh hlah u, nan sinah a zungzal in caan dongh\r\n    tiang ka um lai,\" tiah a ti hna.</p>\r\n<p><b>Hi tuurun chung i a um lomi, ka ta a simi tuu dang an um rih. Annih zong kha ka ratpi ve hrimhrim hna lai.</b></p>\r\n<p>Ka aw kha an ngaih i tuukhal pakhat tangah tuurun khat ah an cang lai.</p>\r\n<p><b>Annih cu a thawh hna i, \"Messiah nih cun sifahnak kha a in lai i ni thumnak ni ah thihnak in a tho tthan lai, cun\r\n        amah min in sual ngaihchihnak le sual ngaihthiamnak kong kha Jerusalem khua in i thawk in miphun vialte hna\r\n        sinah chim a si lai, tiah aa ttial,\" tiah a ti.</b></p>\r\n<p>Cun nannih cu hi thil vialte a hngaltu tehte nan si.</p>\r\n<p><b>Asinain Thiang Thlarua nan cung i a tlun tikah cun, tthawnnak in nan khat lai, Jerusalem khua le Judaram vialte\r\n        le Samariaram le vawleicung khuazakip ah ka tehte nan si lai, a ti.</b></p>\r\n<p>Jerusalem khua chungah khan an lut i an rak umnak khaan chungah khan an va kal; thlacam awkah a tu le atu a bu tein\r\n    an i pum;</p>\r\n<p><b>Amah cu an biak i an caan vialte cu Biakinn chungah khan Pathian thangthatnak caah an hmang.</b></p>",
        "id": "9",
        "name": "PATHIAN RAM KAUHNAK"
    },
    {
        "destext": "<h4 align=\"center\">TULFORHNAK</h4>\r\n<p>Cun Thlarau nih Jesuh cu Satan nih rak tukforh awkah ramlak ah a kalpi.</p>\r\n<p><b>Ni sawm li le zan sawm li rawl loin a um hnuah Jesuh cu a rawl a ttam ngaingai.</b></p>\r\n<p>Khuachia cu a sinah a ra i, \"Nangmah cu Pathian fapa na si ahcun hi lung hi changreu ah canter hna ngat,\" tiah a ti.</p>\r\n<p><b>Jesuh nih cun, \"Cathiang nih pei, minung hi rawl lawngin nunnak a si kho lo, sihmanhsehlaw Pathian Bia tu a\r\n        nunnak a si lai, a ti kha,\" tiah a ti.</b></p>\r\n<p>Khuachia nih cun Jesuh cu khua thiang ah khan a kalpi i biakinn parpahlek ah khan a chiah.</p>\r\n<p><b>Cun a thawh i, \"Nangmah cu Pathian Fapa na si ahcun vawlei ah khin vung zuang tuah, zeicahtiah Cathiang nih pei,\r\n        Pathian nih nangmah kong ah a vancung mi kha nawl a pek hna i annih nih an kut in an in cawi lai i na ke cu\r\n        lung ah naa khawng lai lo,\" a ti kha, tiah a ti.</b></p>\r\n<p>esuh nih a thawh i, \"Cathiang nih pei, Bawipa na Pathian cu hneksak hlah, a ti ve kha,\" tiah a leh.</p>\r\n<p><b>Cun Khuachia nih cun Jesuh cu tlang sang ngaingaimi pakhat ah a kaipi i vawleicung ram vialte le a sunparnak\r\n        vialte kha a hmuhsak i,</b></p>\r\n<p>Na khuk naa bil i na ka biak ahcun hi vialte hi kan pek dih lai, tiah a ti.</p>\r\n<p><b>Cun Jesuh nih, \"Satan, va kal cang; Cathiang nih pei, Bawipa na Pathian cu va bia law amah rian lawnglanwg kha va\r\n        ttuan a ti kha,\" tiah a ti.</b></p>",
        "id": "10",
        "name": "TULFORHNAK"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN PENNAK</h4>\r\n<p>Jesuh cu Galiliram ah khan khual a tlawng i Pathian sinin a rami Thawngtha kha a chimh hna. A caan kha a phan cang,\r\n    Pathian pennak cu a phan dengmang cang.</p>\r\n<p><b>\"Nan sualnak kha kaltak hna u law Thawngtha kha zum tuah u,\" tiah a ti hna.</b></p>\r\n<p>Jesuh nih tahchunhnak bia a dang pakhat a chimh than hna.</p>\r\n<p><b>\"Vancung pennak cu mipa nih aa lak i a lo ah a tuhmi antam ci bantuk a si.</b></p>\r\n<p>Thlaici vialte lakah a hme bik a si;</p>\r\n<p><b>Sihmanhsehlaw a tthan tikah anhringso kung vialte lakah a ngan bik a si. Thingkung ah a cang i a nge ah khan va\r\n        zong nih bu an ser,\" tiah a ti.</b></p>\r\n<p>Jesuh nih tahchunhnak bia a dang a chimh hna.</p>\r\n<p><b>\"Vancung pennak cu thilnu he aa lo. Cu thilnu cu nu pakhat nih aa lak i changvut rel khat ah khan a cawh i cu\r\n        changvut cu a ningpi in a thawhter,\" tiah a ti.</b></p>\r\n<p>Jesuh nih cun, \"Kei ka pennak cu hi vawlei ta hi a si lo; ka pennak cu hi vawlei ta hi rak si sehlaw cu, Judahmi nih\r\n    an ka thlaih khawh nakhnga lo a ka zultu hna hi heh tiah an cawlcang ve hnga. Kei ka pennak cu hi vawlei ta hi a si\r\n    lo,\" tiah a ti.</p>\r\n<p><b>Cucaah Pilat nih cun, \"Siangpahrang cu tah na si kun maw?\" tiah a hal.</b></p>\r\n<p>Jesuh nih, \"A si, na chim bangin Siangpahrang cu ka si.</p>\r\n<p><b>Hi vawlei ah ka chuahchan le ka ratchannak cu biatak kong chim awkah a si. Biatak kha a hna a phih kanh lomi paoh\r\n        nih cun ka bia kha an ngaih,\" tiah a ti.</b></p>",
        "id": "11",
        "name": "PATHIAN PENNAK"
    },
    {
        "destext": "<h4 align=\"center\">NUNNAK CHANGREU</h4> <p>Jesuh nih cun, \"Biatak kan chimh hna' Moses nih a rak in pekmi hna kha cu vancung changreu kha a si lo, vancung changreu taktak an petu hna cu ka Pa hi a si.</p> <p><b>Zeicahtiah Pathian pekmi changreu cu vancung in a run thlahmi hi a si i amah nih cun vawlei hi nunnak kha a pek,\" tiah a ti hna.</b></p> <p>Bawipa, cu changreu cu kan pe zungzal tuah, tiah an hal.</p> <p><b>Jesuh nih cun, \"Nunnak changreu cu keimah hi ka si. Ka sin i a rami cu ahohmanh an rawl a tam lai lo i keimah a ka zummi cu ahohmanh an ti a hal lai lo,\" a ti.</b></p> <p>\"A ka thlahtu nih tuah seH ti a ka duhmi cu, a ka pekmi vialte kha pakhat hmanh thlau loin ni hmanung bik ni ah nunnak i an dihlakin thawhter dih kha a si.</p> <p><b>Zeicahtiah Fapa kha a ka hmu i a ka zummi paoh cu ni hmanungbik ni ah nunnak i thawhter kha ka Pa duhmi cu a si,\" a ti.</b></p> <p>Vancung in a rung ttummi changreu cu keimah hi ka si.</p> <p><b>Hi changreu a eimi paoh cu zungzal in an nung lai. Ka pekmi hna changreu cu ka sa hi a si.</b></p> <p>Kei cu, nunnak kha an ngeih i duhdim tein an ngeih nakhnga caah ka ra.</p> <p><b>Pathian duhnak kha nan duhnak nganbik i a chiami cu lunglawmmi nan va si dah, Pathian nih nan duhnak kha a tlinter lai.</b></p>",
        "id": "12",
        "name": "NUNNAK CHANGREU"
    },
    {
        "destext": "<h4 align=\"center\">BOCHANNAK</h4>\r\n<p>Ka zawn nan ka ruahnak kha nan hun parter tthan caah Bawipa chungah hin kaa lawm hringhran.</p>\r\n<p><b>Ka zawnruah kha nan rak ngol, ka ti duhnak a si lo, langhternak caan nan rak ngeih lo ca lawnglawng ah khan a rak\r\n        si. Zeicahtiah ka ngeihmi paoh ah hin lungsi tein um kha ka thiam cang.</b></p>\r\n<p>Herhbau in um kha zeidah a lawh ti ka hngalh, cun a hleihluat in ngeih kha zeidah a lawh ti zong kha ka hngalh.\r\n    Cucaah khuazeika hmanh ah, zei tik caan paoh ah, ka paw a khim ah siseh, ka rawl a ttam ah siseh, tam tuk ka ngeih\r\n    ah siseh, tlawm tuk ka ngeih ah siseh, lungsi hnangam tein um kha ka thiam cang.</p>\r\n<p><b>Tthawnnak a ka petu Khrih thawngin thil zeipaoh ka tuah khawh ko hna.</b></p>\r\n<p>Rungrul le cirik nih an ei khawh i mifir nih an baoh khawh i an fir khawhnak vawlei ah hin nan chaw va khong hlah u.</p>\r\n<p><b>Rungrul le cirik nih an ei khawh i mifir nih an bauh i an fir khawh lonak, vancung tu ah khin nan chaw cu va\r\n        khong u. Zeicahtiah nan chaw a umnak ah nan lung zong a um ve lai.</b></p>\r\n<p>Cucaah khuazei in dah ka ei awk rawl cu ka hmuh lai, ka din awk cu ka hmuh lai, ka hnipuan cu ka hmuh lai, tiin\r\n    lungrethei in um hlah ngat u;</p>\r\n<p><b>Zeidang vialte nakin Pathian pennak le zeidah tuah hna seh ti a kan duh timi kha biapi deuh in ruat u law thil\r\n        dang vialte hna zong hi an pek tthiamthiam ko hna lai.</b></p>\r\n<p>Cucaah thaizing nih lungretheinak cu a za in aa ngeih ve ko lai.</p>\r\n<p><b>Ni khat nih a chuahpimi harnak cung i a dang chonh chih lengmang hi a herh lo.</b></p>",
        "id": "13",
        "name": "BOCHANNAK"
    },
    {
        "destext": "<h4 align=\"center\">TUMKAU CAWI ZARHPINI</h4>\r\n<p>A thaizing ah cun Lanhtak Puai ca i a rami mi tampi nih khan Jesuh cu Jerusalem khua ah a ra lai ti kha an theih.\r\n    Cucaah kuhchuk hnah kha an i put i amah don awkah khan an kal i;</p>\r\n<p><b>\"Pathian cu thangthat ko u. Bawipa min in a rami cu Pathian nih thluachuah pe ko seh. Pathian nih Israel\r\n        siangpahrang cu thluachuah pe ko seh,\" tiah an au.</b></p>\r\n<p>Jerusalem khua chungah an va luh tikah a khuapi in an i tuai i, \"Hi pa hi ahodah a si?\" tiah mi nih khan an rak hal\r\n    hna.</p>\r\n<p><b>\"Hi pa hi Galiliram Nazareth khuami profet Jesuh a si,\" tiah mi bupi nih khan an leh hna.</b></p>\r\n<p>Jesuh cu biakinn ah khan a va lut i biakinn chung i chaw a rak zuarmi le a rak cawmi kha a tthawl dih hna i; tangka\r\n    thlengtu pawl cabuai le laileng zuartu pawl tthutdan zong kha a leh dih hna.</p>\r\n<p><b>Annih cu, \"Cathiang chungah, Pathian nih ka inn cu thlacamnak inn a si lai a ti, tiah aa ttial. Sihmanhsehlaw\r\n        nannih nih cun mifir kua ah nan ser cang,\" tiah a ti hna.</b></p>\r\n<p>Puai caan lio i Pathian biak awkah Jerusalem i a hung kalmi hna lakah khan Grikmi tlawmpal an i tel ve. Galili peng\r\n    Bethasaida khuami Filip sinah khan an ra i, \"Bawipa, Jesuh hmuh kan duh,\" an ti.</p>\r\n<p><b>Jesuh nih cun, \"Mi fapa hi sunparnak nganpi pek ka si caan a phan cang. Biatak kan chimh hna, facang ci pakhat cu\r\n        vawlei ah tuh a si i a thih ta lo ahcun pakhat lawng a si peng ko. Athih ta lawngah facang mu tampi a chuahter\r\n        khawh. Aho paoh, a nunnak a dawmi nih cun a nunnak cu a thlau lai; hi vawlei cung i a nunnak a huami nih\r\n        zungzal nunnak ah cun aa chiah lai.</b></p>",
        "id": "14",
        "name": "TUMKAU CAWI ZARHPINI"
    },
    {
        "destext": "<h4 align=\"center\">THAWHTHAN NI</h4> <p>Sabbath ni cu aa lim cang i zarh khat cung ni hmasa bik ni khuadei kate ah khin Marimagdalin le a dang Mari kha thlan va zoh awkah cun an kal.</p> <p><b>Chikhatte ah khin li aa hnin i Bawipa vancungmi pakhat vancung in a rung ttum i thlankhar kha a thawn i a cungah cun a tthu.</b></p> <p>Vancungmi nih cun nu kha a thawh hna i, \"Nan thinphan hlah u, vailam tahnak thing i khenh chihmi Jesuh nan kawl ti kha ka hngalh.</p> <p><b>Amah cu hika ah hin a um ti lo, a chim bantukte khan a tho cang. Ra u law an chiahnak hmun hi ra zoh hmanh u.</b></p> <p>Cucaah khulrang in va kal u law a zultu hna kha, thihnak in thawhter a si cang i atu cu nan hmaiah Galiliram ah a rak kal chung cang, khi ka ah nan va hmuh lai, tiah va chim hna u. Cun kan chimhmi hna hi philh hlah u,\" tiah a ti hna.</p> <p><b>Cucaah i hnawnam ngaiin thlan khan an kir, an thin a phang pah an i lawm pah i a zultu hna va chimh awkah khan an le.</b></p> <p>Sihmanhsehlaw biatak cu hihi a si: 'Khrih cu thihnak in thawhter a si i cucu thihnak chung i aa hngilhmi hna zong kha thawhter an si ve lai,' tinak aamahkhan a si.</p> <p><b>Thihnak cu mi pakhat thawngin a tlun bantukin thawhtthannak zong cu mi pakhat thawngin a tlung ve.</b></p> <p>Adam he an i pehtlaihnak thawngin mi vialte cu an thih bantukin Khrih he an i pehtlaihnak thawngin mi vialte cu nunnak ah thawhter an si lai.</p> <p><b>\"Keimah hi thawhthannak le nunnak cu ka si. Keimah a ka zummi paoh cu a thih hmanh thi sehlaw a nung tthan lai. Cun ahohmanh a nung i keimah a ka zummi cu an thi bal lai lo,\" a ti.</b></p>",
        "id": "15",
        "name": "THAWHTHAN NI"
    },
    {
        "destext": "<h4 align=\"center\">BAWIPA NI</h4>\r\n<p>Sabbath ni ah cun Nawlbia bangin an i din. Sihmanhsehlaw zarh khat chung i ni hmasa bik, Zarhpini, zingkate ah nu\r\n    hna cu zihmui an timhmi kha i put in thlan ah khan an va kal.</p>\r\n<p><b>Thlankhar lung a rak i thawn kha an hmuh i cucaah an vung lut colh, sihmanhselaw Jesuh ruak kha an hmu lo.</b></p>\r\n<p>Cun Jesuh nih a thawh hna i, \"Nan va hrut thiam dah! Profet nih a chimmi zumh kha nan vaa harh hringhran dah!\r\n    Messiah nih hi thil vialte kha a sunparnak chung ia luh hlanah a in awk a herh a si lo maw?\" tiah a ti.</p>\r\n<p><b>Cun Jesuh nih, cathiang chungah, Moses cauk hna thawkin profet hna ttialmi cauk hna tiang, amah kong aa tialmi\r\n        vialte kha fiang tein a chimh hna.</b></p>\r\n<p>Bawipa Ni ah thlarau nih a ka tlak i ka hnulei in aw thawngpi pakhat kha ka theih, cu aw cu muko aw thawng bantuk a\r\n    si.</p>\r\n<p><b>Na hmuhmi kha ttial law na ttialmi cauk cu Khrihfabu pasarih kha kua hna, tiah a ti.</b></p>\r\n<p>Amah cu ka hmuh tikah mithi bantukin a ke hramah ka tlu.</p>\r\n<p><b>A orhlei kut in a vun ka tongh i, \"Na thinphang hlah, kei cu hmasa bik le hmanung bik kha ka si. Kei cu a nunmi\r\n        kha ka si. Ka rak thi, sihmanhsehlaw zohhmanh, zungzal in zungzal tiang ka nung cang. Thihnak cung le mithi\r\n        khua cungah nawl ka ngei, a ti. Cucaah na hmuhmi thil hna, atu i a um liomi thil hna le a um lai dingmi thil\r\n        hna kha, ttial hna,\" tiah a ka ti.</b></p>",
        "id": "16",
        "name": "BAWIPA NI"
    },
    {
        "destext": "<h4 align=\"center\">FELLOWSHIP WITH CHRIST</h4>\r\n<p>Nannih cu Khrih sinah nunnak ah thawhter nan si cang. Cucaah Pathian orhlei kam i Khrih nih a bawi tthutdan cung i a\r\n    thutnak vancung khua chung i a ummi thil tu kha nan lung in i seh chih hna u.</p>\r\n<p><b>Hi vawleicung thil hi si loin cunglei thil kong tu kha ruat hna u.</b></p>\r\n<p>Zeicahtiah nannih cu nan thi cang i nan nunnak cu Khrih he Pathian chungah aa thup.</p>\r\n<p><b>Mi zeihmanh hi Khrih he an i pehtlaih tikah cun mi thar a si, a nunning hlun kha a lo cang, nunning thar kha aa\r\n        thawk cang.</b></p>\r\n<p>Nan mihlun cu a hman tawnmi a ziaza he khan nan i phoih cang i mithar cu nan i hruk cang caah pakhat le pakhat i\r\n    hleng hlah u. Hi mithar hi a sertu Pathian nih amah mui lo chin lengmang in a tharchuah lengmangmi cu a si i cucu\r\n    amah hngalhnak kha tlamtling tein nan ngeih khawh nak caah a si.</p>\r\n<p><b>Cu a phichuak cu hihi a si: Jentailmi ti a um ti lo, Judahmi ti a um ti lo; cuarpartan ti a um ti lo, tan lomi ti\r\n        a um ti lo, mihrut, Sitianmi, miluat, sal, ti a um ti lo; zeizong vialte cu Khrih a si ko i zeizong vialte\r\n        chungah Khrih cu a um ko.</b></p>\r\n<p>Nannih cu Pathian mi nan si, amah nih an dawt hna i an thim hna. Cucaah mi zawnruahnak, zaangfahnak, toidornak,\r\n    nemnak le lung saunak kha nan i aih awk a si.</p>\r\n<p><b>Pakhat le pakhat lungsilonak nan i ngeih tikah pakhat le pakhat i ngaithiam u law i bawm u. Bawipa nih an\r\n        ngaihthiam hna bantukin pakhat le pakhat nan i ngaithiam lai.</b></p>\r\n<p>Cun hi thil vialte cungah hin dawtnak kha chap u law dawtnak cu zeizong vialte, i rem tthipthep tein a funtomtu cu a\r\n    si.</p>\r\n<p><b>Khrih nih an pekmi hna daihnak kha nan lung chung i biaceihtu ah ser u, zeicahtiah hi daihnak hmuh awkah hin\r\n        Pathian nih pumkhat chung i um awkah an kawh hna. Cun lunglawmhnak in khat u.</b></p>",
        "id": "17",
        "name": "FELLOWSHIP WITH CHRIST"
    },
    {
        "destext": "<h4 align=\"center\">ZULTU SINAK</h4>\r\n<p>Annih nih an kal lengmang lioah khan pakhatpa nih a thawh i, Bawipa, na kalnak paoh ah kan zulh lai, tiah a ti.</p>\r\n<p><b>Jesuh nih cun, \"Cenghngia nih kua an ngei i vate nih bu an ngei, sihmanhsehlaw Mi Fapa cu riahnak hmun hmanh a\r\n        ngei lo,\" tiah a ti.</b></p>\r\n<p>A dang pakhat cu a thawh i, \"ka zul,\" tiah a ti.</p>\r\n<p><b>Sihmanhsehlaw cu pa nih cun, \"Bawipa, ka pa kha va vui ta ning,\" tiah a ti.</b></p>\r\n<p>Jesuh nih cun a leh i, \"Mithi nih cun an mithi kha va vui ko hna seh. Nang tu cu va kal law Pathian pennak kong kha\r\n    va chim ko,\" tiah a ti.</p>\r\n<p><b>A dang pakhat nih a thawh ve i, \"Bawipa, kan zulh lai, sihmanhsehlaw ka chung le kha dam tein va ti ta hna ning,\"\r\n        tiah a ti</b></p>\r\n<p>Jesuh nih a leh i, \"Ahohmanh leithuan aa ot i hnulei a zohpeng ttungmi cu Pathian pennak caah santlaihnak a ngei\r\n    lo,\" tiah a ti.</p>\r\n<p><b>Ahohmanh a nu siseh, a pa siseh, keimah nakin a daw deuhmi cu ka mi si awk aa tlak lo; Ahohmanh a fapa siseh, a\r\n        fanu siseh, keimah nakin a daw deuhmi cu ka mi si awk aa tlak lo.</b></p>\r\n<p>Ahohmnh a vailamtahnak kha aa put i ka hnu in a ka zul lomi cu ka mi si awk aa tlak lo.</p>\r\n<p><b>Ahohmanh a nunnak humhak a duhmi nih cun a nunnak cu a sung lai i keimah ruangah a nunnak a sungmi nih cun a\r\n        nunnakcu a hmuh lai.</b></p>",
        "id": "18",
        "name": "ZULTU SINAK"
    },
    {
        "destext": "<h4 align=\"center\">LUNGTTHAWNNAK</h4>\r\n<p>Aho nih dah Khrih dawtnak he cun a kan tthen khawh lai? Harnak nih maw, temhinnak nih maw, hremnak nih maw, rawl\r\n    ttamnak nih maw, pamnak nih maw, thil tihnung nih maw, thihnak nih maw, zeital nih a kan tthen kho hnga maw?</p>\r\n<p><b>Zeihmanh nih a kan tthen kho lai lo, hi thil vialte hna chungah hin a kan dawtu thawngin kannih cu teitu hna\r\n        nakin teitu kan si deuh, Zeicahtiah a kan dawtnak he cun zeihmanh nih a kan tthen kho lo ti kha fiang tein a\r\n        kan hngalh:</b></p>\r\n<p>Thihnak nih siseh, nunnak nih siseh, vancung i a ummi vanmi nih si hna seh, uktu le tthawnnak nih si hna seh, a tu\r\n    caan nih siseh, hmailei caan nih siseh, a kan tthen kho lai lo.</p>\r\n<p><b>Kan Bawipa Khrih Jesuh thawngin kan ta a simi Pathian dawtnak he a kan tthen khotu ding cu sermi thil dihlak ah\r\n        hin zeihmanh a um lo.</b></p>\r\n<p>Nan lungput cu Khrih nih a rak ngeihmi lungput kha si seh.</p>\r\n<p><b>Pathian sinak kha a ngeih zungzalmi a si ko nain hranhram in Pathian tluk si awk kha cuh awkah a rel lo.</b></p>\r\n<p>Amah lungtho tein cu vialte cu a hlawt dih i sal sinak tu kha aa lak. Minung bantuk ah a cang i minung mui in a\r\n    lang.</p>\r\n<p><b>Mi toi ah aa dor i nawlngaihnak lam kha thih tiangin a zulh, vailam cung thihnak kha.</b></p>\r\n<p>Hi ruangah hin cunglei a sannak bik hmun ah khin Pathian nih a cawi i min vialte lak i amin cungnung bik kha a pek.</p>\r\n<p><b>Cucaah Jesuh min upatnak caah cun, vancung i a ummi vialte si hna seh, vawleitang vawlei i a ummi vialte hna nih\r\n        an khuk an i bil lai i Pathian kan pa sunparnak caah cun vawlei i a um mi vialte nih Jesuh cu Bawipa a si, an\r\n        ti lai.</b></p>",
        "id": "19",
        "name": "LUNGTTHAWNNAK"
    },
    {
        "destext": "<h4 align=\"center\">HRINGTU NU NI</h4>\r\n<p>A ni thumnak ni ah Biakinn chungah khan an va hmuh i cawnpiaktu Judahmi hna sinah khan a rak tthu i an bia kha a rak\r\n    ngai i bia a rak hal len ve ko hna.</p>\r\n<p><b>A bia a theimi paoh cu a fimning le a bialehning ah khan an khuaruah a har:</b></p>\r\n<p>An va hmuh tikah a nu le a pa zong cu an khuaruah a har ve. A nu nih cun a thawh i, \"Ka fa, zeicahdah hi bantukin na\r\n    kan tuah? Na pa le na nu nih awlokchong in pei kan i kawl cu,\" tiah a ti.</p>\r\n<p><b>Annih cu, \"Zeicadah nan ka kawl? Ka Pa inn ah ka um awk a si ti kha nan hngal lo maw?\" tiah a ti hna.</b></p>\r\n<p>Cutincun Jesuh cu an sinah Nazareth khua ah khan a kir i a nu le a pa kut tangah nawlngai tein a um. Hi thil vialte\r\n    hi a nu nih a lung chungah aa ken dih.</p>\r\n<p><b>Cun Jesuh cu pum lei in siseh, fimnak lei in siseh, a hung tthang i Pathian hmai le minung hmaiah mithmai ttha a\r\n        hmu.</b></p>\r\n<p>Jesuh vailam pawngte ah khan a nu le a nu nau Mari, Klopas nupi le Mari Magdalin kha an dir.</p>\r\n<p><b>Cuka i a nu le a dawtmi a zultu an dir ko kha a vun hmuh hna i a nu cu, \"Ka nu, khaka ah khan na fapa a um khah,\"\r\n        tiah a vun ti.</b></p>\r\n<p>A dawtmi a zultu zong cu, khaka ah khan na nu a um khah, tiah a vun ti ve.</p>\r\n<p><b>Cu caan thawk cun cu zultu nih cun Jesuh nu cu a inn ah a umter:</b></p>",
        "id": "20",
        "name": "HRINGTU NU NI"
    },
    {
        "destext": "<h4 align=\"center\">DAWTNAK</h4>\r\n<p>Minung holh a phunphun in ka hei holh kho ko hnga i vanmi holh hmanh ka hei thiam ko hnga, sihmanhsehlaw dawtnak ka\r\n    ngeih lo ahcun.</p>\r\n<p><b>Ka holh cu darkhuang hnachet thawng le sumsel tum thawng bantuk men a si ko.</b></p>\r\n<p>Phungchim thiamnak laksawng ka hei ngei ko hnga i hngalhnak phun tling ka hei ngei ko hna; biathuk vialte ka hei\r\n    hngalh dih ko hna hnga, cun tlang tthial khawhnak zumhnak zong ka hei ngei ko hnag; sihmanhsehlaw dawtnak ka ngei\r\n    lo ahcun</p>\r\n<p><b>Zeihmanh ka si lo.</b></p>\r\n<p>Ka ngeihmi thil vialte mi paam ka hei tthenh dih ko hna hnga, cun ka pum hmanh khangh awkah ka vaa pe ko hna;\r\n    sihmanhsehlaw dawtnak ka ngeih lo ahcun</p>\r\n<p><b>Ka caah tthathnemnak zeihmanh a um lo.</b></p>\r\n<p>Dawtnak cu thlachiat a ruat i mi cungah zaangfahnak a ngei. Dawtnak cu a nah a chuak lo, a lung a puam lo i aa\r\n    porhlaw lo.</p>\r\n<p><b>Dawtnak cu tlabulbal in khua a sa lo i amah zawn lawng aa ruat lo, a thin a tawi lo, palhnak kha aa cinken peng\r\n        lo.</b></p>\r\n<p>Dawtnak cu midang sualnak cungah khan diriam in a um lo; biatak tu ah khan aa lawm.</p>\r\n<p><b>Dawtnak cu a lung a dong bal lo, zumhnak a ngei, ruahchannak a ngei, a lung a sau i a thin a fual.</b></p>\r\n<p>Dawtnak cu dongh a thiam lo. Profet biachimnak cu um hmanhsehlaw cucu a dih lai, holhtheihlo a um maw? cucu a donh\r\n    lai. Hngalhnak kan ngeihmi zong a dih lai.</p>\r\n<p><b>A hmun zungzalmi thil pathum an um, cu hna cu zumhnak, ruahchannak, le dawtnak an si; cu hna lak i a ngan bik mi\r\n        cu dawtnak a si.</b></p>",
        "id": "21",
        "name": "DAWTNAK"
    },
    {
        "destext": "<h4 align=\"center\">A KAL CIAMI HNA PHILHLONAK</h4>\r\n<p>Ka u le ka nau hna, Pathian nih a kan zaangfahnak a nganmi ruangah hin, Pathian sinah a nung in pekchanhmi\r\n    raithawinak bantukin i pe tuah u; a rian ah aa pumpemi le cohlan awk a tlakmi si tuah u; cucu biaknak taktak\r\n    Pathian nan pek awk biaknak cu a si.</p>\r\n<p><b>Hi vawlei kalning hin kal ve lengmang ti hlah u; sihmanhsehlaw chunglei in Pathian nih nan lungthin kha a\r\n        dih-umnak in in thleng hna seh. Cu tikah a tthami le Pathian nih a lawmhmi thil le a tlingmi thil kha nan\r\n        hngalh khawh lai; cucu Pathian duhmi a si.</b></p>\r\n<p>Cu hnuah cun khua ka hun zoh i mibu nganpi, ahohmanh nih a rel in an rel cawk lomi kha ka hmuh. Annih cu phun kip,\r\n    ram kip, holh kip le hrin kip chungin a rami an si i:</p>\r\n<p><b>Bawi tthutdan hmai le Ttufa hmaiah cun puanrang aih in an dir i tuumhnah kha an i put.</b></p>\r\n<p>Fak piin an au i, kan khamhnak cu bawi tthutdan cungah a tthumi Pathian le Tuufa sinin a rami a si, an ti.</p>\r\n<p><b>Upa pakhat nih khan a ka hal i: \"Puanrang aa aihmi hna hi ahodah an si i khuazei in a rami dah an si,\" tiah a ka\r\n        ti.</b></p>\r\n<p>\"Ka hngal lo, Bawipa, nangmah nih na hngalh deuh lai,\" tiah ka leh. Cun a ka thawh i, hi mi hna hi hremnak nganpi a\r\n    ingmi kha an si, Tuufa thi chungah an puan kha an suk i an puan cu a vaar cang,</p>\r\n<p><b>Cucaah cun Pathian bawithutdan hmaiah an dir i chun zan in biakinn chungah a rian kha an ttuan. Bawi tthutdan\r\n        chung i a tthumi nih khan a umpi hna i a ven hna, tiah a ti.</b></p>",
        "id": "22",
        "name": "A KAL CIAMI HNA PHILHLONAK"
    },
    {
        "destext": "<h4 align=\"center\">NGAKCHIA HNA NI</h4>\r\n<p>Cu caan ah cun a zultu hna kha a sinah an ra i, \"Vancung Pennak ah ahodah a ngan bik?\" tiah an hal.</p>\r\n<p><b>Jesuh nih ngakchia pakhat a auh i an hmaiah a dirter i: \"Nannih cu nan i thlen i ngakchia bantuk ah nan i can lo\r\n        ahcun vancung pennak chungah nan lut bal lai lo. Vancung pengnak chung i a ngan bik cu mi toiah aa dor i\r\n        ngakchia bantuk ah aa cangmi cu a si.</b></p>\r\n<p>Cun ngakchia hi bantuk pakhatkhat kha ka min in nan conglawmh hna ah cun, keimah nan ka conglawmh a si.</p>\r\n<p><b>Sihmanhsehlaw hi ngakchia tete pakhatkhat hi keimah an ka zumhnak in a pialtertu hna cu, an hngawng ah facang\r\n        rialnak lungtum nganpi kha thlaih riangmang i rili chungah paih si hna sehlaw an caah a ttha deuh hnga,\" a ti.</b></p>\r\n<p>Mizeimaw nih ngakchia hna kha Jesuh sinah khan an ratpi hna i an cung i a kut chiah awk le thlacampiak hna awkah an\r\n    nawl, sihmanhsehlaw a zultu nih khan an rak sik hna.</p>\r\n<p><b>Jesuh nih cun aa thawh i, \"Ngakchia cu ka sinah ra ko hna seh, dawn hna hlah u, zeicahtiah vancung pennak cu hi\r\n        hna bantuk mi hna ta hi pei a si cu,\" tiah a ti.</b></p>\r\n<p>Cun an cungah a kut a chuan i an kal.</p>\r\n<p><b>Jesuh cu a hung tthan i thlarau in a tthawngmi a si; Pathian hmai le minung hmaiah mithmai ttha a hmu.</b></p>",
        "id": "23",
        "name": "NGAKCHIA HNA NI"
    },
    {
        "destext": "<h4 align=\"center\">PENTEKOS NI</h4>\r\n<p>Pentekos ni kha a phak tikah zumtu vialte cu hmunkhat ah an i pum.</p>\r\n<p><b>Chikkhatte ah khin van in aw pakhat a rung i a thawng cu thlitu fak piin a hrangmi thawng bantuk a si, an\r\n        tthutnak inn kha a khat dih.</b></p>\r\n<p>Cun meizik he aa lomi leite an hung chuah kha an hmuh hna i cuka i a ummi hna an dihlak cungah khan lei cu pakhat\r\n    cio in an i fu.</p>\r\n<p><b>Annih cu Thiang Thlarau in an khat i Thlarau nih chim khawhnak a pek hna bawntuk cio khan, holh dang in an holh.</b></p>\r\n<p>An lung a suk ngaingai hna i, hi tiin bia a chimmi hna hi Galilimi an si ko ttung. Zeitindah kan i chuahkehpimi holh\r\n    cio holh in kan dihlak in kan theih kun hna? an ti. Khi tikah Piter cu lamkaltu hleikhat hna he khan a hung dir i,\r\n    aw thawng ngaiin:</p>\r\n<p><b>Ka phunhawi Judahmi hna le Jerusalem khua ah a ummi vialte hna, hi tiin thil a hung ummi sullam hi zeidah a si\r\n        tiah kan chimh mi hna hi, tha tein ngai tuah u. Pathian nih Profet Joel kaa in a rak chimmi kong kha a si.</b></p>\r\n<p>Zeitindah a ti tiah: Ni hmanung bik ah cun mi vialte kha ka thlarau ka toih hna lai.</p>\r\n<p><b>Nan fapa hna le nan fanu hna nih bia an chim lai, nan tlangval hna nih langhnak an hmuh lai i nan tar hna nih\r\n        mang an manh lai.</b></p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Cu tikah Bawipa min a aumi paoh cu khamhnak an hmu lai, a ti.</b></p>",
        "id": "24",
        "name": "PENTEKOS NI"
    },
    {
        "destext": "<h4 align=\"center\">KHRIHFAMI PUMKHAT SINAK</h4>\r\n<p>Bawipa rian ttuan ruang i thong i a tlami keimah Paul nih, Pathian nih an auhnak hna he aa tlakmi nunning khan nung\r\n    u, tiah kan forh hna.</p>\r\n<p><b>Toidornak lungthin ngei u, lungnem le lungsau in um zungzal u. Pakhat le pakhat i bawm u law cutincun nan i\r\n        dawtnak kha langhter u.</b></p>\r\n<p>Pumkhat sinak, Thlarau nih an pekmi hna kha, ngeih peng awkah an funtu hna daihnak hri khan fek tein i ttem u.</p>\r\n<p><b>Pathian nih an kawh hna tikah ruahchannak pakhat a um a ti bantukte khan pum cu pakhat lawng a um i Thlarau\r\n        pakhat lawng a um.</b></p>\r\n<p>Bawipa pakhat lawng a um, zumhnak pakhat lawng a um, tipil innak pakhat lawng a um. Pathian cu pakhat lawng a si i\r\n    amah cu mi vialte Pa, zeizong vialte Bawi, zeizong vialte chungah rian a tuan i zeizong vialte chungah a ummi a si.</p>\r\n<p><b>Lungthli in i uamnak le thinhunnak le ingpuannak kha hlaw hna u. I hua ti hlah u, i vawlpam ti hlah u. Huatnak\r\n        lungthin ngei ti hlah u.</b></p>\r\n<p>Pathian nih Khrih thawngin an ngaithiam hna bantukin pakhat le pakhat i ngaithiam u.</p>\r\n<p><b>Nannih cu Pathian dawtmi fa nan si bantukin amah bantuk kha si i zuam u.</b></p>\r\n<p>Khrih nih a kan dawt i a nunnak kha kan caah a pek bantukin kan nih zong kan nunnak cu dawtnak nih a uk ve awk a si.\r\n    Khrih nih kan ca i a pekmi a nunnak cu Pathian duhmi raithawinak le pekchanhmi rimhmui cu a si.</p>\r\n<p><b>Ka u le ka nau hna, kan Bawipa Jesuh Khrih min in kan nawl hna, nan dihlak in pakhat le pakhat lungnge tein um\r\n        tuah u, i tthen hlah u. Lungthin khat, ruahnak khat in um u.</b></p>",
        "id": "25",
        "name": "KHRIHFAMI PUMKHAT SINAK"
    },
    {
        "destext": "<h4 align=\"center\">NUNNAK THAR</h4>\r\n<p>Mi zeihmanh, Khrih he an i pehtlaih tikah cun mi thar a si; a nunning hlun kha a lo cang, nunning thar kha aa thawk\r\n    cang.</p>\r\n<p><b>Keimah ah hin i peh u law kei zong nanmah he kaa peh ve ko lai. Mitsur nge nih a mahte in thei a tlai khawh lo i\r\n        a ruang ah aa peh lawng ah a tlai khawh bantukin nannih zong keimah chung i nan um lo ahcun nan tlai kho ve lai\r\n        lo.</b></p>\r\n<p>Mitsurruang cu keimah hi ka si i a nge cu nanmah hi nan si. A hohmanh ka chungah a um i kei zong a chungah ka um\r\n    ahucn amah cu thei tampi i tlai khomi cu a si, zeicahtiah keimah loin nan tuah khawhmi zeihmanh a um lo.</p>\r\n<p><b>Ka chungah a um lomi cu mitsur nge car bantukin leng ah hlonh an si ko. Cu bantuk nge cu an pumh hna i mei ah an\r\n        paih hna i cuka ah cun an khangh dih tawn hna.</b></p>\r\n<p>Ka chung i nan um i ka bia kha nan chungah a hmunh ahcun, nan duhmi paoh kha nan ka hal lai i nan hmuh ko lai.</p>\r\n<p><b>Nannih nih thei tampi nan tlai thawngin ka Pa sunparnak kha nan langhter i cuticun ka zultu i nan i canning cu a\r\n        si.</b></p>\r\n<p>Ka Pa nawlbia kha ka ngaih i a dawtnak chungah ka um bantukte hin ka nawlbia nan ngaih ahcun ka dawtnak chungah hin\r\n    nan um ve lai.</p>\r\n<p><b>Kei ka nawlbia cu hihi a si: Keimah nih kan dawt hna bantukte hin pakhat le pakhat i daw u ti hi a si.</b></p>",
        "id": "26",
        "name": "NUNNAK THAR"
    },
    {
        "destext": "<h4 align=\"center\">I SUMNAK</h4>\r\n<p>Zeitindah kan nuncan a si ti kha tha tein i zoh u. Mihrut bantukin um hlah u, mifim bantukin um u. Atu kan nikhua hi\r\n    caan chia a si caah caan tha nan hmuhmi paoh kha tha tein hman i zuam u.</p>\r\n<p><b>Mihrut si hlah u, Bawipa nih tuah hna seh ti an duhmi hna tu kha tuah i zuam u.</b></p>\r\n<p>Zu ri hlah u, zu cu nanmah rawktu lawnglawng a si ko; Thlarau tu khan khat deuh u. Ka chim duhmi cu hihi a si.\r\n    Thlarau nih nan nunning kha lamhruai sehlaw nan minung sinak duhning kha zul hlah u.</p>\r\n<p><b>Zeicahtiah kan minung sining nih a duhmi cu Thlarau nih a duhmi he khan aa ralchanh i Thlarau nih a duhmi cu kan\r\n        minung sining nih a duhmi he khan a ralchanh. Annih pahnih cu ral an si, cu a sullam cu, tuah na duhmi kha na\r\n        tuah kho lo, tinak a si.</b></p>\r\n<p>Sihmanhsehlaw Thlarau nih a chuahtermi hna cu dawtnak, lawmhnak daihnak, lungsaunak, zaangfahnak, tthatnak,\r\n    zumhawktlakmi sinak, toidornak le mah le mah i tei khawhnak te hna hi an si. Cu bantuk thil hna caah cun nawlbia\r\n    zeihmanh a herh lo.</p>\r\n<p><b>Cun Khrih Jesuh ta a simi nih cun a minung sinak kha tuah a duh tawnmi thil le a pumsa duhnak he khan a thah.</b></p>\r\n<p>Thlarau nih nunnak a kan pek cang caah kan nunnak zong hi amah nih a uk awk a si.</p>\r\n<p><b>Pathian biakinn nan si kha nan hngalh i Pathian Thlarau nan chung i a um zong kha nan hngalh. Cucaah ahohmanh nih\r\n        Pathian biakinn cu a hrawh ahcun amah cu Pathian nih a hrawh ve lai. Zeicahtiah Pathian biakinn cu a thiangmi a\r\n        si i nanmah hrimhrim hi cu biakinn cu nan si.</b></p>",
        "id": "27",
        "name": "I SUMNAK"
    },
    {
        "destext": "<h4 align=\"center\">KAN PUPA NI, LUATNAK NI</h4>\r\n<p>Pathian nih pahrang aka pekmi kha ka hman i inn sak a thiam ngaingaimi bantukin inn saknak ding a hram kha ka bunh,\r\n    cun a dang pakhat nih a cungah khan a run sak.</p>\r\n<p><b>Sihmanhsehlaw zeitindah kan sak ti kha ahohmanh kan i ralrin cio awk a si.</b></p>\r\n<p>Zeicatiah Pathian nih Khrih Jesuh lawnglawng cu a hram caah khan a chiah cang i hram dang zeihmanh a chiah awk ding\r\n    a um ti lo.</p>\r\n<p><b>Cu hram cung i saknak thilri caah a cheu nih sui maw ngun maw lungvar man sung maw an hman hna lai; cun a cheu\r\n        nih thing maw di maw capawl maw an hman hla lai.</b></p>\r\n<p>Cu an sak ciomi cu zeidah an lawh taktak ti kha Khrih Ni nih a langhter te hna lai. Zeicahtiah cu Ni mei nih cun an\r\n    rian tuan mi kha a hneksak cio hna lai i zeidah an lawh taktak ti cu mei nih cun a langhter lai.</p>\r\n<p><b>Innsaknak hram cungah pakhatpa nih inn a sak i cu a sakmi cu mei nih khan a hrawh khawh lo ahcun, cu pa nih cun\r\n        laksawng a hmuh lai. Asinain ahohmanh a sakmi inn cu a kangh dih ahcun, cu inn cu a sung ko lai; mei chungin\r\n        luat bantuk khi a si lai nain amah cu khamh a si ko lai.</b></p>\r\n<p>Pathian biakinn nan si kha nan hngalh i Pathian Thlarau nan chung i a um zong kha nan hngalh. Cucaah ka u le ka nau\r\n    hna, Pathian nih a kan zaangfahnak a nganmi ruangah hin Pathian sinah a nung in pekchanhmi raithawinak bantukin i\r\n    pe tuah u;</p>\r\n<p><b>Hi vawlei kalning hin kal ve lengmang ti hlah u, sihmanhsehlaw chunglei in Pathian nih nan lungthin kha a\r\n        dih-umnak in in thleng hna seh.</b></p>",
        "id": "28",
        "name": "KAN PUPA NI, LUATNAK NI"
    },
    {
        "destext": "<h4 align=\"center\">DINNAK</h4>\r\n<p>Jesuh cu a rak tlonlennak nazareth khua ah khan a kal i Sabbath ni ah cun hmasa i a rak tuah tawn bantuk khan\r\n    pumhnak inn ah a kal. Cathiang rel awkah khan a hung dir i Profet Isaiah cazual kha an pek. Cazual cu a vun samh i;</p>\r\n<p><b>Bawipa thlarau cu ka cungah a um; Sifakmi hna sin i thawngtha chim awkah chiti a ka thuh i saltaangmi hna sin i\r\n        luatnak thanh awkah a ka thlawh. Mitcawmi hna sin i khuahmuh tthannak pek awk le hremmi hna luatter dingah a ka\r\n        thlah; Bawipa nih a mi hna a khamh hna lai ding kum cu va thanh awkah a ka thlah, tiah aa ttialnak hmun kha a\r\n        rel.</b></p>\r\n<p>Jesuh nih cazual cu a zual tthan i a zohkhenhtu kha a pek tthan i a tthu. Pumhnak inn i a ummi vialte nih amah cu\r\n    tthep loin an zoh.</p>\r\n<p><b>Annih cu a thawh hna i: \"Hika cathiang caang hi nannih nih ka rel tikah nan thieh bantukin nihin ni ah hin a\r\n        tling cang,\" tiah a ti.</b></p>\r\n<p>An lung a hmuh ngaingai hna i bia dawhdawh a chimmi nih khan an khuaruah a harter dih hna.</p>\r\n<p><b>An i thawh i, \"Amah hi Josef fapa kha a si lo hlah i?\" an ti.</b></p>\r\n<p>Cun anih nih a thawh hna i, Profet cu amah cu chuahkehnak khua ah cun conglawmh a tong bal lo, a ti.</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Na ral cu a rawl a ttam ahcun rawl va pe, a ti a hal ahcun ti va pe; cu ti na tuahnak cun a lu cungah mei ttil\r\n        na chonh a si lai. Tthatlonak kha i teiter hlah u, tthatnak tu in tthatlonak kha tei i zuam u.</b></p>",
        "id": "29",
        "name": "DINNAK"
    },
    {
        "destext": "<h4 align=\"center\">KHRIHFABU</h4>\r\n<p>Jesuh nih a thawh hna i, \"Nannih tah, aho a si, nan ka ti dah?\" tiah a hal hna. Simon Piter nih a leh i, \"A nunmi\r\n    Pathian Fapa Messiah kha na si,\" tiah a ti.</p>\r\n<p><b>Jesuh nih cun, \"Johan fapa Simon, mi vanttha ngaingai na si. Zeicahtiah hi baitak cu minung sinin na hngalhmi a\r\n        si lo i vancung i aummi ka Pa nih an pekmi a si.</b></p>\r\n<p>Cucaah cun nang cu, lungtum Piter na si, kan ti. Cun hi lungpi cungah hin ka Khrihfabu hram cu ka bunh lai i cucu\r\n    thihnak hmanh nih a tei kho lai lo.</p>\r\n<p><b>Vancung pennak hunnak tawhfung cu kan pek lai i vawlei cung i na hrenhmi cu vancung zongah hrenh a si lai,\" tiah\r\n        a ti.</b></p>\r\n<p>Cun khua thiang, Jerusalem thar kha, Pathian sinin vancung in a rung ttum kha ka hmuh, va ngei lai ngaknu nih a va\r\n    ding ton awkah aa ttamh bantuk khin aa ttamh.</p>\r\n<p><b>Bawi tthutdan in aw thangpi pakhat ka theih i, Pathian umnak inn cu minung hna sinah a um cang. Anmah sinah cun a\r\n        um lai i annih cu a mi an si lai. Pathian hrimhrim cu an sinah a um lai i amah cu an Pathian a si lai.</b></p>\r\n<p>An mitthli vialte kha a hnawh dih hna lai. Thihnak a um ti lai lo, ngaihchiatnak le ttahnak le fahnak zong a um ti\r\n    lai lo. Thil hlun vialte cu an lo dih cang, tiah a ti.</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Thlarua le va ngei laimi ngaknu nih khan, \"Ra u,\" an ti. Hi bia a theimi paoh nih khan, \"Ra u,\" ti ve hna seh.\r\n        Ti a halmi paoh cu ra u, nunnak ti hi a duhmi paoh nih man loin i lak u.</b></p>",
        "id": "30",
        "name": "KHRIHFABU"
    },
    {
        "destext": "<h4 align=\"center\">CHUNGLEI THIANNAK</h4>\r\n<p>Michambau kan si ti aa hngalmi cu lunglawmmi nan va si dah, Vancung pennak cu nanmah ta a si.</p>\r\n<p><b>A tap a hrammi cu lunglawmmi nan va si dah, Vancung pennak cu nanmah ta a si.</b></p>\r\n<p>Nun a nemmi cu lunglawmmi nan va si dah, Pathian nih an kamhmi hna kha nan co lai.</p>\r\n<p><b>Pathian duhnak tuah kha nan duhnak ngan bik i a chiami cu lunglawmmi nan va si dah, Pathian nih nan duhnak cu a\r\n        tlinter lai.</b></p>\r\n<p>Midang cungah zaangfahnak a ngeimi cu lunglawmmi nan va si dah, Pathian nih an zaangfah hna lai.</p>\r\n<p><b>Lungthin a thiangmi cu lunglawmmi nan va si dah, Pathian kha nan hmuh lai.</b></p>\r\n<p>Mi le mi karah remnak a sertu cu lunglawmmi nan va si dah, Pathian nih, \"ka fa,\" tiah an ti hna lai.</p>\r\n<p><b>Pathian nih, tuah u, a timi tuah ruangah hremnak a ingmi cu lunglawmmi nan va si dah, Vancung pennak cu nanmah ta\r\n        a si.</b></p>\r\n<p>Nannih cu a ka zultu nan si ruangah mi nih an in nihsawh hna i an in hrem hna i lih a phunphun an in puh hna tikah,\r\n    nan caah lunglawmh awk a va si dah.</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Nan lung i lawm u law nan thanuam ko u, zeicahtiah vancung khua ah laksawng tampi chiahpiak nan si ko. Cu bantuk\r\n        cun pei nan hlan i a rak ummi profet hna kha an rak hrem hna cu, a ti.</b></p>",
        "id": "31",
        "name": "CHUNGLEI THIANNAK"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN I BOCHANNAK</h4>\r\n<p>Hi cawnpiaknak hi cawnpiak chin hna law nan zulh awk a si, ti hna. Na kum a no ruangah a hohmanh nih in zawmhtiah\r\n    hna hlah seh.</p>\r\n<p><b>Sihmanhsehlaw na biachim, na holhrel ah siseh, na ziaza ah siseh, dawtnak, zumhnak le thiannak na ngeihmi ah\r\n        siseh, zumtu hna caah tahchunh awk tlak va si ko.</b></p>\r\n<p>Mizapi kha, ka rat hlantiang cathiang kha rak relpiak lengmang hna, phung kha rak chim lengmang hna law rak cawnpiak\r\n    lengmang hna.</p>\r\n<p><b>Upa hna nih na cung i an kut an chuan tikah na hmuhmi thlarau laksawng kha hlothlau hlah.</b></p>\r\n<p>Na thannak kha mi vialte nih an hmuh nakhnga cu thil cu ralring te le teima tein tuah lengmang ko hna.</p>\r\n<p><b>Nangmah kha tha tein i ralring law na cawnpiaknak zong kha i ralring fawn.</b></p>\r\n<p>Cun nangmah naa khamh hleiah na bia a theimi kha na khamh khawh hna nakhnga hi thil hi ngol loin tuah lengmang ko\r\n    hna.</p>\r\n<p><b>Bawipa nih pakhat le pakhat nan i dawtnak le mi vialte nan dawt hna nak kha thanter sehlaw kanmah nih kan in dawt\r\n        hna tluk in nganter hram ko seh.</b></p>\r\n<p>Cutincun nan lung kha in thawnter hna sehlaw kan Bawipa Jesuh cu a mi vialte hna he a rat tikah Bawipa kan Pathian\r\n    hmaiah mitling le mithiang nan si lai.</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Daihnak a kan petu Pathian nih cun amah ta ah in ser hna sehlaw nan siningpi in, nan thlarau, nan nunnak le nan\r\n        pum he, kan Bawipa Jesuh rat ni ah cun palhnak um loin in chia hna seh.</b></p>",
        "id": "32",
        "name": "PATHIAN I BOCHANNAK"
    },
    {
        "destext": "<h4 align=\"center\">ZUNGZAL NUNNAK</h4>\r\n<p>Moses nih dar rul kha these rem lakah a tar bantuk khan Mi Fapa zong hi tar a si ve lai, cucaah cun amah a zummi\r\n    paoh cu an thi lai lo, zungzal nunnak an ngei lai.</p>\r\n<p><b>Cuticun Pathian nih vawlei hi a dawt hringhran caah a Fapa ngeihchunte kha a pek; cucaah amah a zummi paoh cu an\r\n        thi lai lo zungzal nunnak an ngei lai.</b></p>\r\n<p>Zeicatiah Pathian nih a Fapa cu vawlei cungah hin vawlei biaceihtu si awkah a run thlah tung lo, vawlei khamhtu si\r\n    awk tu ah pei a run thlah cu.</p>\r\n<p><b>Fapa kha a zummi paoh cu sual biaceihnak a ing lo, sihmanhsehlaw a zum lomi cu sualphawt a si ko cang; zeicahtiah\r\n        Pathian Fapa ngeihchun kha a zum lo.</b></p>\r\n<p>Jesuh nih Martha cu, na ta cu a tho than lai a ti.</p>\r\n<p><b>Martha nih cun: \"Asi, a tho than lai ti cu ka hngalh ko, sihmanhsehlaw ni hmanung bik thawhthannak ah pei a si ko\r\n        lai cu,\" tiah a leh.</b></p>\r\n<p>Jesuh nih Martha cu, \"Keimah hi thawhthannak le nunnak cu ka si. Keimah a ka zummi paoh cu a thih hmanh thi sehlaw a\r\n    nung than lai. Cun a hohmanh nung i keimah kha a ka zummi cu an thi bal lai lo. Hihi na zum maw?\" a ti.</p>\r\n<p><b>Marta nih, \"Asi, ka zumh Bawipa, nangmah cu Pathian Fapa Messiah, vawleicung i a rung ding cu na si ti kha ka\r\n        zumh,\" tiah a leh.</b></p>",
        "id": "33",
        "name": "ZUNGZAL NUNNAK"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN NGAIHNAK</h4>\r\n<p>Jesuh nih, \"Keimah hi lam le biatak le nunnak cu ka si, keimah sinin dah ti lo cun ahohmanh Pa sin an phan kho lai,\"\r\n    a ti.</p>\r\n<p><b>Filip nih, Bawipa, na Pa cu kan hmuhsak law cu vial cu kan herhmi a si ko, tiah a ti.</b></p>\r\n<p>Jesuh nih, \"Nan sinah saupi ka um ko cang, asinain nan ka hngal rih lo maw, Filip? Keimah a ka hmutu paoh nih cun ka\r\n    Pa kha a hmuh ve ko, cucaah zeicahdah na Pa cu kan hmuhsawk, na ka ti?</p>\r\n<p><b>Keimah cu ka Pa chungah ka um i ka Pa cu keimah chungah a um kha na zum lo maw, Filip? Nannih kan chimhmi hna bia\r\n        hi keimah chungin aa thawk tung lo, ka chung i a ummi ka Pa rian tuannak pei an si cu.</b></p>\r\n<p>Ka Pa chungah ka um i ka Pa cu ka chungah a um kha zum ko u. Cucu nan zumh khawh lo a si le hi thil ka tuahmi hna\r\n    ruang tal ah hin zum ko u.</p>\r\n<p><b>Biatak kan chimh hna: Keimah a ka zummi paoh nih ka tuahmi thil hi an tuah khawh ve lai, hi hna nakin a ngan\r\n        deuhmi hmanh an tuah khawh hna lai; zeicah ti ahcun, ka Pa sinah ka kal lai caah a si</b></p>\r\n<p>Pa sunparnak cu Fapa thawngin a langh khawh nakhnga ka min in nan halmi paoh cu kan tuahpiak hna lai. Zei paoh ka\r\n    min in nan ka hal ahcun ka tuah lai,\" tiah a ti.</p>\r\n<p><b>Nan ka dawt ahcun ka nawlbia kha nan zulh lai. Ka nawlbia kha a cohlang i a zulmi paoh cu a ka dawmi an si. A ka\r\n        dawmi cu ka Pa nih a dawt ve hna lai; kei zong nih ka dawt ve hna lai i an sinah kaa phuang lai, a ti.</b></p>",
        "id": "34",
        "name": "PATHIAN NGAIHNAK"
    },
    {
        "destext": "<h4 align=\"center\">HAWIKOMHNAK</h4>\r\n<p>\"Ka Pa nawlbia kha ka ngaih i a dawtnak chungah ka um bantukte in ka nawlbia nan ngaih ahcun kan dawtnak hna chungah\r\n    hin nan um ve lai.</p>\r\n<p><b>Ka lunglawmhnak kha nan chungah a um i nan i lawmhnak cu a tlin nakhnga, hi bia cu kan chimh hna.</b></p>\r\n<p>Kei ka nawlbia cu hihi a si: Keimah nih kan dawt hna bantukte hin pakhat le pakhat i daw u.</p>\r\n<p><b>Mi nih a hawile caah dawtnak ngan bik a ngeih khawhmi cu an ca i a nunnak pek hi a si.</b></p>\r\n<p>Nannih cu sin-um kan ti i hna lo, zeicahtiah sinum nih cun a bawipa tuahmi kha a hngal lo. Sihmanhsehlaw ka Pa sinin\r\n    ka theihmi vialte kha kan chimh dih hna caah, ka hawile, ti tu in kan ti cang hna.</p>\r\n<p><b>Nannih nih cun nan ka thim lo, keimah nih kan thim hna i a hmun ding thei kha tampi in va tlai tuah u, tiah kan\r\n        fial hna. Cucaah ka min in nan halmi paoh cu ka Pa nih an pek hna lai. Nawl kan pekmi hna cu, hihi a si: pakhat\r\n        le pakhat i daw u.</b></p>\r\n<p>Biatak kan chimh hna; sal cu a bawipa nakin a ngan deuh bal lo. Fialmi zong a fialtu nakin a ngan deuh bal lo. Mi\r\n    ngan si a duhmi cu nan sinum a si awk a si; bawi cem si a duhmi cu nan dihlak sal a si awk a si.</p>\r\n<p><b>Zeicahtiah Mi Fapa hmanh hi riantuanpiakmi si awkah ka rat tuang lo; midang raintuanpiaktu si awkah le mi tampi\r\n        tlanhnak ding ca i ka nunnak pek awkah pei ka rat cu,\" tiah a ti hna.</b></p>",
        "id": "35",
        "name": "HAWIKOMHNAK"
    },
    {
        "destext": "<h4 align=\"center\">RIANTUANTU HNA NI</h4>\r\n<p>\"Nannih nih, hi hnu thla li ah rawl tuan a cu lai, nan ti a si lo mei? Sihmanhsehlaw lo khi tha tein hei zoh hna\r\n    hmanh u, rawl cu an hmin dih cang i tuan an cu diam cang.</p>\r\n<p><b>Riantuantu nih a tuan man kha a hmuh lio cang i zungzal nunnak caah khan rawl kha a pumh lio hna; cucaah a tuhtu\r\n        le a zuntu kha an pahnih in hmunkhat ah an i lawm lai.</b></p>\r\n<p>Pakhat nih a tuh i pakhat nih a zun, timi bia cu a hmaan ngaingaimi bia a si.</p>\r\n<p><b>Nan tuannak a si lomi lo ah khan rawl tuan awkah kan thlah hna; cuka ahcun midang nih khan rian cu an rak tuan i\r\n        an rian tuanmi thawng cun nannih nih miaknak nan hmuh,\" tiah a ti.</b></p>\r\n<p>Nanmah hrimhrim nih kanmah bantukte khan nan tuah ve awk a si cu nan hngalh. Nan sin kan um ah khan kan tha a thu\r\n    lo.</p>\r\n<p><b>Ahohmanh nih alak in nan kan cawm lo. Kanmahte nih rian kan tuan; aho nan ca hmanh ah thilrit kan si nakhnga lo\r\n        chun zan in kan tuan.</b></p>\r\n<p>Mahti kan tuah kha nanmah zohchun dingah kan tuahmi a si.</p>\r\n<p><b>Nan sin kan um lio kan in chimhmi hna cu; Ahohmanh riantuan a duh lomi cu ei awk zeihmanh pe hna hlah u, ti a si.</b></p>\r\n<p>Chun a si chung cu, a ka thlahtu rian kha kan tuan zungzal awk a si; ahohmanh nih riantuan khawh lo caan, zan caan\r\n    kha a ra lio, a ti. Cucaah thatnak tuah kha ba hlah usih; kan ngol lo ahcun a theitlai kan zuun caan kha a phan te\r\n    ko lai.</p>",
        "id": "36",
        "name": "RIANTUANTU HNA NI"
    },
    {
        "destext": "<h4 align=\"center\">FIMNAK</h4>\r\n<p>Fimnak a baumi nan um ahcun, Pathian sinah thlacam sehlaw Pathian nih a pek ko lai; Pathian nih cun aho paoh kha\r\n    zaangfah ngai le siang ngaiin a pek ko hna.</p>\r\n<p><b>Asinain thla nan cam tikah lung awtawm lo tein nan zumh hrimhrim lai. Lung awtawm in a ummi cu thlichia nih a\r\n        choihmi tilet bantuk a si.</b></p>\r\n<p>Cu bantuk mi nih cun, ka halmi kha Pathian nih a ka pek lai tiah a ruah awk a si lo; lungawtawm in a ummi cu an i\r\n    tinhmi ah khan an kal ciahmah kho bal lo.</p>\r\n<p><b>Cucaah hi ka bia a thei i a zulmi cu, lung cungah a inn a sami mifim pa bantuk a si.</b></p>\r\n<p>Ruah a sur, ti a lian, thlitu nih fak piin a hranh; sihmanhsehlaw lung cung i sakmi a si caah khan a pur lo.</p>\r\n<p><b>Sihmanhsehlaw hi ka bia a thei i a zul lomi cu thetse cungah a inn a sami mihrutpa bantuk a si.</b></p>\r\n<p>Ruah a sur, ti a lian, thlitu nih fak piin a hranh i a pur, rawk cikcek in a tlu.</p>\r\n<p><b>Bawipa, Bawipa, a ka timi paoh nih vancung pennak chungah an lut dih lai tinak a si lo; sihmanhsehlaw vancung i a\r\n        ummi ka Pa nih tuah hna seh ti a duhmi a tuahmi lawnglawng kha an lut lai.</b></p>",
        "id": "37",
        "name": "FIMNAK"
    },
    {
        "destext": "<h4 align=\"center\">RUMNAK TAKTAK</h4>\r\n<p>Jesuh nih a zultu kha a zoh hna i, \"Mirum mi caah cun Pathian pennak chung luh hi a va har lai dah.</p>\r\n<p><b>Kalauk thim kaa chung luh hi mirum pa Pathian pennak chung luh ding nakin a fawi deuh,\" tiah a ti.</b></p>\r\n<p>Hi bia an theih tikah a zultu hna cu an khuaruah a har tuk hringhran i, \"Ahodah khamhnak cu a hmu kho kun lai?\" tiah\r\n    pakhat le pakhat kha an i hal.</p>\r\n<p><b>Jesuh nih cun dengteo in a zoh hna i: \"Hihi minung caah cun a si kho lo. Sihmanhsehlaw Pathian caah cun a si kho\r\n        ko; zeicahtiah Pathian nih a tuah khawh lomi zeihmanh a um lo,\" tiah a ti hna.</b></p>\r\n<p>Cun Jesuh nih a thawh hna i, \"A inn siseh, a lo siseh, a unau si hna seh, a farle si hna seh, a nu siseh, a pa\r\n    siseh, a fale si hna seh, keimah le thawngtha ruangah a kaltakmi nih cun,:</p>\r\n<p><b>Tam chinchin in a tu chan ahhin a hmuh hrimhrim lai. Inn siseh, lo siseh, unau si hna seh, far siseh, nu siseh,\r\n        fa siseh, a let zakhat in an hmuh lai; cun hremnak zong an hmuh lai.</b></p>\r\n<p>Rungrul le cirik nih an ei khawh lonak le mifir nih an bauh i an fir khawh lonak vancung tu ah nan chaw cu va khongh\r\n    u. Zeicahtiah nan chaw a umnak ah khan nan lung zong a um ve lai.</p>\r\n<p><b>Nan nih nih kan Bawipa Jesuh Khrih vel kha nan hngalh ko; a rum nain nanmah ruangah sifak ah a cang, cu ti a can\r\n        cu a sifahnak khan nannih kha rumter an duh hna caah a si.\"</b></p>",
        "id": "38",
        "name": "RUMNAK TAKTAK"
    },
    {
        "destext": "<h4 align=\"center\">HIMNAK TAKTAK</h4>\r\n<p>Rethei le thilritmi vialte hna ka sinah ra tuah u, dinhnak kha kan pek hna lai.</p>\r\n<p><b>Ka seihnam kha i bei u, kei cu nunnem le mitoidor ka si caah ka nawl hi i cawn ve u; cun dinhnak kha nan hmuh\r\n        lai. Ka seihnam cu a bei a nuam i ka thil zong a zaang, tiah a ti.</b></p>\r\n<p>Atu cu Khrih Jesuh he i pehtlai in a nungmi hna caah cun sualphawtnak a um ti lo.</p>\r\n<p><b>Zeicahtiah Khrih Jesuh he aa pehtlaimi nunnak a kan petu Thlarau phung nih cun sualnak le thihnak phung chung\r\n        khan a kan luatter cang.</b></p>\r\n<p>An minung sining nih tuah u, a ti hna ning paoh in a nungmi cu minung sining nih a duhmi nih khan an lungthin cu a\r\n    uk hna. Thlarau nih a chimh hna ningin a nungmi cu Thlarau nih a duhmi nih khan an lungthin cu a uk hna.</p>\r\n<p><b>Nan lungthin cu minung sining nih a uk ahcun, a phichuak cu thihnak a si; nan lungthin cu Thlarau nih a uk ahcun,\r\n        a phichuak cu nunnak le daihnak a si.</b></p>\r\n<p>Pathian Thlarau a ngei lomi cu Khrih ta an si lo.</p>\r\n<p><b>Sihmanhsehlaw Khrih cu nan chung i a nun ahcun sualnak ruangah nan pum cu thi hmanh hna sehlaw nannih cu Pathian\r\n        he nan i rem cang caah Thlarau cu nan caah nunnak a si.</b></p>",
        "id": "39",
        "name": "HIMNAK TAKTAK"
    },
    {
        "destext": "<h4 align=\"center\">KHRIHFA RIANTUANNAK</h4>\r\n<p>Bawipa min a aumi paoh cu khamh an si lai.</p>\r\n<p><b>Sihmanhsehlaw an zumh lo ahcun zeitindah a min cu an auh khawh lai? Cun bia kha an theih lo ahcun zeitindah an\r\n        zumh khawh lai\" Cun bia cu chimh an si lo ahcun zeitindah an theih khawh lai? Cun lamkaltu kha an thlah an\r\n        thlah hna lo ahcun zeitindah bia cu thanh a si khawh lai?</b></p>\r\n<p>Cathiang nih, Thawngtha a chimtu hna ke cu a vaa dawh dah, a ti bantuk khan a si taktak.</p>\r\n<p><b>Cucaah zumhnak cu bia theihnak thawng khan a um i bia cu Khrih kong chimnak thawng khan a um.</b></p>\r\n<p>Vailamtahnak i Khrih a thihnak kong hi a tlau lio lengmangmi hna caah cun pakpalawng bia a si ko, sihmanhsehlaw\r\n    khamh lio lengmangmi hna kannih caah cun Pathian hmual a si.</p>\r\n<p><b>Thawngtha hi ka zahpi lo; zeicahtiah a zummi vialte hna caah Pathian khamhnak hmual a si, Judahmi hna caah a si\r\n        hmasa i cun Jentailmi hna ca zongah a hung si.</b></p>\r\n<p>Cucu zeitindah a hung si ti ahcun, Thawngtha nih cun Pathian nih zeitindah minung kha Amah he aa remter hna ti kha a\r\n    langhter i Cathiang nih, zumhnak thawngin Pathian he aa remmi cu an nung lai, a ti bang khan, Pathian he i remnak\r\n    cu a hram in a dongh tiang zumhnak thawngin a si.</p>\r\n<p><b>Sihmanhsehlaw kannih cu vailamtahnak cung i thahmi Khrih kong kha kan chim i cu kong cu Judahmi hna caah cun\r\n        tluknak lung a si i Grikmi hna caah cun hruhnak bia a si. Pathian nih a kawhmi hna ca tu ah cun Judahmi an si\r\n        zongah, Jentailmi an si zongah, cu bia cu Khrih kha a si i Khrih cu Pathian hmual le Pathian fimnak kha a si.</b></p>",
        "id": "40",
        "name": "KHRIHFA RIANTUANNAK"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN CHAWKENGTU</h4>\r\n<p>Cucaah laksawng phun dangdang kan hmuh ciomi cu Pathian nih a kan pekmi vel kan hmuhning cio in hmang hna u sih.</p>\r\n<p><b>Pathian bia chim thiamnak a si ahcun zumhnak kan ngeihmi ning khan kan hman awk a si; midang ca riangtuan kha a\r\n        si ahcun cuticun kan tuan awk a si; cawnpiak kha a si ahcun kan cawnpiak hna awk a si.</b></p>\r\n<p>Midang thazang pek kha a si ahcun kan pek hna awk a si; kan ngeihmi thil midang hei hrawmh ve kha a si ahcun, siang\r\n    tein kan hrawm hna awk a si.</p>\r\n<p><b>Nawlngeihnak kha kan laksawng hmuhmi a si ahcun, fak piin rian kan tuan awk a si; midang zaangfah kha a si ahcun\r\n        lunglawm tein kan zaangfah hna awk a si.</b></p>\r\n<p>Hihi philh hlah u; thlaici tlawmte a tuhmi nih cun theipar thlawmte a zun tawn, tampi a tuhmi nih cun tampi a zun\r\n    tawn.</p>\r\n<p><b>Cucaah nanmah le nan lungthin nan i thleh ning cio in rak tho u, nan thawh tikah i ngaihchih bu le hnekchom in si\r\n        hlah seh, lunglawm tein a thomi kha Pathian nih a dawt hna.</b></p>\r\n<p>Kan i dawtnak hi lungthin taktak in a si awk a si.</p>\r\n<p><b>Cun zumtu hna cu, an bu ningte in, an ruahnak le an lungthinaa khat dih. Ahohmanh nih an thil kha, keimah ta, an\r\n        ti lo i an ngeihmi paoh kha an i hrawm dih. Lo a ngeimi nih si hna seh, inn a ngeimi nih si hna seh, an thilri\r\n        cu an zorh hna tikah a man tangka an hmuhmi cu lamkaltu hna sinah khan an rak put hna i tangka cu a herhmi paoh\r\n        kha an herhbaunak ning cio in an phawt hna.</b></p>",
        "id": "41",
        "name": "PATHIAN CHAWKENGTU"
    },
    {
        "destext": "<h4 align=\"center\">PAKHAT LE PAKHAT I DAWTNAK</h4>\r\n<p>A hramthawk tein nan rak theih lengmangmi bia cu hihi a si: pakhat le pakhat kan i daw lai, ti hi.</p>\r\n<p><b>Ka fale hna, dawtnak hi Pathian sinin a rami a si caah pakhat le pakhat i daw u sih. Pakhat le pakhat aa dawmi cu\r\n        Pathian fa an si i Pathian kha an hngalh.</b></p>\r\n<p>Pakhat le pakhat aa daw lomi nih cun Pathian kha an hngal lo, zeicahtiah Pathian cu dawtnak a si.</p>\r\n<p><b>Mi zeimaw nih, Pathian ka daw, a ti i a unau a huat tung ahcun amah cu milihchim a si.</b></p>\r\n<p>Zeicahtiah a hmuhmi a unau hmanh a dawt khawh lo ahcun a hmuh lomi Pathian chinchin cu a daw kho lai lo.</p>\r\n<p><b>Vawlei hi siseh, a chung thilri hi si hna seh, tlaihchan hna hlah u. Vawlei hi nan tlaihchan ahcun Pathian\r\n        dawtnak kha nan chungah a um kho lai lo.</b></p>\r\n<p>Cucaah vawleicung mi nih an in huat hna ahcun nan khuaruahhar hlah u,</p>\r\n<p><b>Thihnak kha kan kaltak cang i nunnak chungah kan lut cang ti kan hngalhnak cu pakhat le pakhat kan i dawt hna\r\n        caah hin a si. A unau a daw lomi hna paoh cu thihnak chungah khan a um ko rih.</b></p>\r\n<p>Mi nih a hawile caah dawtnak ngan bik a ngeih khawhmi cu an ca i a nunnak pek hi a si.</p>\r\n<p><b>Nawlbia thar kan pek hna: Pakhat le pakhat i daw u. Keimah nih kan dawt hna bantuk hin pakhat le pakhat nan i\r\n        dawt awk a s i. Pakhat le pakhat nan zawn nan i ruah ahcun mi vialte nih hi hna hi amah zultu kha an si tiah an\r\n        in hngalh hna lai, tiah a ti hna.</b></p>",
        "id": "42",
        "name": "PAKHAT LE PAKHAT I DAWTNAK"
    },
    {
        "destext": "<h4 align=\"center\">LAWMHNAK</h4>\r\n<p>Khua pakhat chungah hin a va lut i cuka ahcun thinghmui pahra an rak um i cu hna nih cun an rak ton.</p>\r\n<p><b>Lam hlat piin an dir i: Jesuh Bawipa kan zaangfah tuah, tiah an au.</b></p>\r\n<p>Jesuh nih cun a hmuh hna i, va kal u law, tlangbawi nih khan rak in zoh hna seh, tiah a ti hna.</p>\r\n<p><b>An kal pah ahcun lampi ah an thiang.</b></p>\r\n<p>An lak i pakhat cu, ka dam cang, ti a hngalh tikah khan a rak kir i Pathian kha fak piin a thangthat.</p>\r\n<p><b>Jesuh ke hram ah khan vawlei ah a bawk I Jesuh cu a lawmh.</b></p>\r\n<p>Cu pa cu Samaria mi a si Jesuh nih a thaw I:</p>\r\n<p><b>An pahra ningin an dam lo maw? Pakua tah, khuazei ah dah an si kun? Annih zong rak kir in Pathian kha an\r\n        thangthat kho ve lo maw? Hi ramdang mipa lawng hi maw a ra kho? tiah a ti.</b></p>\r\n<p>Cun Jesuh nih amah cu a thawh i: tho law kal tuah, Na zumhnak nih an damter cang, tiah ati.</p>\r\n<p><b>Hal u law pek nan si lai, kawl u law nan hmuh lai, king u law innka cu hunpiak nan si lai. Zeicatiah a halmi paoh\r\n        cu pek an si lai i a kawlmi paoh nih cun an hmuh lai i a kingtu paoh cu innka kha hunpiak an si lai. Hitlukin\r\n        nan tha lo ko na hin, nanmah hmanh nih nan fa le thil pek nan hngalh ah cun, vancung i a ummi nan Pa chinchin\r\n        nih cun zeitlukin dah thil tha cu, a hal mi kha a pek chinchin hna lai.</b></p>",
        "id": "43",
        "name": "LAWMHNAK"
    },
    {
        "destext": "<h4 align=\"center\">MITHIANG VIALTE HNA</h4>\r\n<p>Hi tluk in vanraang zat in a tammi tehte bu nih an kan kulh.</p>\r\n<p><b>Cucaah cun lam a kan dawntu til paohpaoh le kan tlaihchan pengmi sualnak vialte kha hlaw hna u sih law kan hmai i\r\n        chiahmi tlikzuamnak ah khan i zuam u sih.</b></p>\r\n<p>Pathian Thlarau nih a hruaimi hna cu Pathian fale an si.</p>\r\n<p><b>Pathian nih an pekmi hna Thlarau cu Pathian fa ah a kan sertu ding tu kha a si i amah nih cun Pathian kha, Ka Pa,\r\n        Ka Pa, tiah a kan auhter khawh. Cu ti kan aunak ahcun Pathian thlarau le kan thlarau cu hmunkhat ah an i fon i\r\n        Pathian fa kan si kha tehte an khan, fa kan si ahcun rocotu zong kan si colh.</b></p>\r\n<p>Cu hnu ahcun khua ka hun zoh i mibu nganpi, ahohmanh nih a rel in rel cawk lomi khi ka hmuh hna.</p>\r\n<p><b>Annih cu miphun kip, ram kip, holh kip, le hrin kip chungin a rami an si i bawi tthutdan hmaiah an dir i chun\r\n        zaan in biakinn chungah a rian kha an ttuan; Bawi tthutdan cung i a tthumi nih khan a umpi hna i a ven hna.</b></p>\r\n<p>Hi mi hna hi hremnak nganpi a ingmi kha an si; Tuufa thi chungah an puan kha a suk i an puan cu an vaar cang.</p>\r\n<p><b>Cucaah cun Pathian Bawi tthutdan hmaiah an dir i chun zaan in biakinn chungah a rian kha an ttuan; Bawi tthutdan\r\n        cung i a tthumi nih khan a umpi hna i a ven hna,</b></p>\r\n<p>Annnih cu an ti a haal in an rawl a ttam ti lai lo:</p>\r\n<p><b>Zeicahiah Bawi tthutdan laifang i a ummi Tuufa kha an tuukhal a si lai i cerh tiput kamah a kalpi hna lai; cun\r\n        Pathian nih an mitthli vialte kha a hnawhpiak dih hna lai.</b></p>",
        "id": "44",
        "name": "MITHIANG VIALTE HNA"
    },
    {
        "destext": "<h4 align=\"center\">DAIHNAK</h4>\r\n<p>Cun phungbia cawnpiaktu saya pakhat ara i amah kha foih a hung zalh; aa thawh i, Saya, zungzal nunnak co awkah\r\n    zeidah ka tuah lai? tiah a ti.</p>\r\n<p><b>Jesuh nih a leh i, Cathiang nih zeitindah a chim? tiah a ti.</b></p>\r\n<p>Mipa nihcun, Bawipa na Pathian cu na lungthin dihlak le na nunnak dihlak le na thazaang dihlak le na ruahnak dihlak\r\n    in na dawt lai i na innpa zong kha nangmah naa dawt tlukin na dawt lai, tiah a ti.</p>\r\n<p><b>Mit caah mit ve, ha caah ha ve tiin an rak ti tawn kha nan theih. Sihmanhsehlaw kei nihcun, nan cung i tthatlonak\r\n        a tuahtu hna kha lehrul hna hlah u, kaan ti hna.</b></p>\r\n<p>Nan orhlei bel ah an in bengh hna ahcun khattelei zong kha i chit rih u.</p>\r\n<p><b>Nan hawi kha va daw han u law nan ral kha va hua hna u, tiah an ti tawn kha nan theih. Sihmanhsehlaw kei nihcun,\r\n        hi tihin kaan ti hna; nan raal kha va daw hna u law an hremtuhna kha thla va campiak hna u.</b></p>\r\n<p>Cuticun vancung khua i a ummi nan Pa fale cu nan si lai.</p>\r\n<p><b>Jesuh nih anih cu, \"Na naam cu a kawng ah sawh tthan ko; zeicahtiah hriamnam a lami cu hriamnam in an thi lai.\r\n        Ahohmanh nih zulh na kan duh ahcun nanmah le nanmah nan i philh i nan vailamtahnak nan i put i nan ka zulh a\r\n        herh.</b></p>\r\n<p>Mi nih hin vawlei pumpi hi co hmanhsehlaw a nunnak a sungh ttung ahcun zeital a miak hnga maw?</p>\r\n<p><b>Mah himnak lawng a ruatmi cu a nunnak kha a sung lai, sihmanhsehlaw keimah ruangah a nunnak a sungmi cu khamhnak\r\n        kha a hmu lai.</b></p>",
        "id": "45",
        "name": "DAIHNAK"
    },
    {
        "destext": "<h4 align=\"center\">HALLELUJAH</h4>\r\n<p>A zungzal in i lawm u, a zungzal in thlcam u, zei bantuk thil na ton hmanh ah lunglawm in um uh; Khrih Jesuh chung i\r\n    nan nun ning ah hin hitihin nung hna seh tiah Pathian nih an duh hna.</p>\r\n<p><b>Hla dawh in pakhat le pakhat i chawn u, Bawipa cu hla le aw dawh in nan lung taktakin thangthat u. Kan Bawipa\r\n        Jesuh Khrih min in zeizong kip caah Pathian cu lawm u.</b></p>\r\n<p>Nangmah kongah Pathian kha kan lawmh zungzal i thla kan cam fate nanmah kha kan in campiak zungzal hna.</p>\r\n<p><b>Nan zumhnak cu rian tuannak ah nan langhter ning le dawtnak nan ngeihmi nih fak piin rian aan tuan ter hna ning\r\n        le kan Bawipa Jesuh Khrih chung i ruahchannak nan ngeimi a fehning kha Pathian kan Pa hmaiah kan philh lo.</b></p>\r\n<p>Kan Bawipa Jeush Khrih thawngin teinak a kan petu Pathian cu thangthat si ko seh.</p>\r\n<p><b>Khrih nih an pekmi hna daihnak kha nan lung chung i biaceitu ah ser u. Cun lunglawmhnak in khat u.</b></p>\r\n<p>Khrih bia cu nan lung chungah a fimnak he khan tam piin um she. Fimnak in pakhat le pakhat i chim u law i cawnpiak\r\n    u. Thangthatnak hla, Pathian biaknak hla le hla thiang kha sa hna u. Pathian kha lawmhnak in hla in thangthat u.</p>\r\n<p><b>Pathian kan Pa cu Khrih thawngin nan lawmh caah nan tuahmi thil si hna seh, nan chimmi bia si hna seh, Bawipa\r\n        Jesuh min in si dih ko hna seh.</b></p>",
        "id": "46",
        "name": "HALLELUJAH"
    },
    {
        "destext": "<h4 align=\"center\">RAMCHUNG I PATHIAN RIANTUANNAK</h4>\r\n<p>Phungbia cawnpiaktu sayapa nih cun thiam hun i coh kha a duh i, \"Ahodah ka innpa cu a si ?\" tiah Jesuh kha a hal,</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Jesuh nih cun a leh i, \"Voi khat cu mipa pakhat kha Jerusalem in Jerikho khua leiah a vung kal, Cu a vung kal\r\n        lioah cun damia nih an rak tlaih i a puan an phoih i an tuk i thilo nung lo in an kaltak. Cu lioah cun\r\n        tlangbawi pakhat hi cuka lei lam ah cun a vung kal ngel cel; mipa cu a hei hmuh tikah lam khattelei kam cun a\r\n        hrial. Cu bantuk thiamthiam in Levimi pakhat zong cuka ah cun a va kal ve, mipa cu a hei kal hnawh i a hei\r\n        bihtak i khattelei kam cun a kaltak ve. Sihmanhsehlaw Samaria mi pa pakhat cuka lei lam i a khual a tlawngmi\r\n        cu, cu pa umnak kha a vaphan; amah kha a hmuh tikah a zaang a fak ngai ngai. A hei fuh i a hma ah cun chiti le\r\n        mitsurhang kha a thuh hna i a men hna; cun mipa cu a satil cungah khan a chuan i khualriahnak inn pakhat ah a\r\n        kal pi cuka ah cun a zohkhenh. A thaizing ah ngun tangka phar hnih aa chuah i riahnak innhngaktupa cu a pek i,\r\n        A mah hi tha tein rak zohkhenh law a mah caah na liauheumi vialte cu ka ra kirthan tikah kan pek than lai,\" a\r\n        ti.</b></p>\r\n<p>\"Hi mi pathum hna lakah hin aho hi dah damiah nih an tlaih mipa innpa kha asi tiah na ruah?\" tah a ti.</p>\r\n<p><b>\"Amah a zaangfahtu kha,\" tiah a leh.</b></p>\r\n<p>Jesuh nih ,\"Va kal law , cu bantuk cun va tuah ve,\" tiah a ti.</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Bawipa na Pathian cu na lungthin dihlak, na nunnak dihlak na thazang dihlak le na ruahnak dihlak in na dawt lai\r\n        i na inn pa zong kha nangmah naa dawt tluk in na dawt lai.</b></p>",
        "id": "47",
        "name": "RAMCHUNG I PATHIAN RIANTUANNAK"
    },
    {
        "destext": "<h4 align=\"center\">PATHIAN BIA</h4>\r\n<p>Pathian hmai le mi vialte, a nungmi he a thimi he bia a ceihtu ding Khrih Jesush Hmaiah, fak piin kan nawl; cun a\r\n    rat lainak le a pennak in kan nawl fawn; phung kha chim hna.</p>\r\n<p><b>A caan a rem zong ah a rem lo zongah chim hna; al a hreh ahcun al hna, chimhrin a herh ahcun chimhring hna, a\r\n        nawl in nawl a hreh ahcun nawl hna law lungsau thin fual in cawnpiak hna.</b></p>\r\n<p>Cawnpiaknak a hmaanmi kha mi nih an ngaih duh lo i anmah duhnak tu kha an zulh i anmah theih duhmi chimtu dingah\r\n    cawnpiaktu an lak hna lai caan kha a phan lai. Biatak kha an kaltak lai i minung tuanbia tu kha ngaih an duh deuh\r\n    lai.</p>\r\n<p><b>Sihhmanhsehlaw nang cu zeitik caan paoh ah daite le khualu khuataw khak tein um ko; harnak kha in i zuam,\r\n        Thawngtha karhter kha fak piin i zuam law Pathian nih a kan khawhchan rian vial te kha tuan ko.</b></p>\r\n<p>Cathiang hi a dihlakin Pathian thawchuahhnawhmi a si i biatak cawnpiaknak caah le palhnak cawnpiaknak alnak caah le\r\n    palhmi remhnak caah le ding tein nunnak ding cawnpiaknak caah a thahnemmi asi.</p>\r\n<p><b>Cucaah Pathian riantuantu a simi cu zeizong vialte ah tlamtlingmi a si awk le thiltha phun zakip tuah khawh awkah\r\n        thilthuam tling tein a ngeimi a si aw asi.</b></p>\r\n<p>Tlik zuamnak ah khan ka tha a dih-umnak in ka chuah cang; a dongh tiang khitkhet in ka tli cang, zumhnak kha fek\r\n    tein kaa tlaih zungzal.</p>\r\n<p><b>Atu cu teinak laksawng nih khan a ka hngah ko cang; cu laksawng cu ka Bawipa, dinnak Bawi nih, cu Ni i a ka pek\r\n        laimi dinnak suiluchin cu asi. Keimah lawng cu a ka pekmi kha si lai lo, amah a langh lainak dawtnak in a hngah\r\n        tu vialte zong kha a pek ve hna lai.</b></p>",
        "id": "48",
        "name": "PATHIAN BIA"
    },
    {
        "destext": "<h4 align=\"center\">BAWI JESUH HRINNAK</h4>\r\n<p>Elizabeth pumlawnglo in a um thla ruknak ah, Pathian nih Vancungmi Gabriel cu Galiliram khua pakhat Nazareth timi ah\r\n    cun a thlah. Siangpahrang David hrinsor a simipa Josef an timi he kan i thi lai tiah bia aa kammi ngaknu kha bia na\r\n    va chim lai tiah a fial. Cu ngaknu cu a min ah Mari asi.</p>\r\n<p><b>Vancungmi kha a sinah cun a ra i, \"Na cungah daihnak um ko seh; Bawipa cu na sin ah a umi thluachuahnak tampi in\r\n        an pek,\" tiah a ti.</b></p>\r\n<p>\"Mari, na thinphang hlah, zeicahtiah Pathian nih nangmah cu vel an ngeih, Nau na pawi lai i fapa na hrin lai i a min\r\n    ah Jesuh na sak lai. Amah cu mi lianngan asi lai i Cung Nung Bik Pathian Fapa tiah khawh asi lai. Amah a hringsortu\r\n    Siangpahrang David bawithutdan kha Pathian nih amah cu a pek i a pennak cu zeitikhmanh ah a dong lai lo,\" tiah a\r\n    ti.</p>\r\n<p><b>Mari nih aa thawhi, \"Thanh tuah ka lungthin, Bawipa lianngannak cu lawm tuah, ka nunak, Bawipa na khamhtu cung\r\n        ah. A salnu hi hi tluk minauta ka si nain a ka philh lo. Nihin thawk in hmailei ah cun mi vialtenih, thluachuak\r\n        nu an ka ti lai.\"</b></p>\r\n<p>Bawipa, a thawng mi Pathian nih ka cungah khuaruahhar tuk in rian a tuan.</p>\r\n<p><b>Amah a tihmi vialte kha chan khat hnu chan khat in a zaangfah hna a thawngmi a ban kha a samh i mi ruamkai hna\r\n        kha an khuakkhanmi he a thek dih hna, Siangpahrang thawngthawng kha an bawithutdan cungin a thumh hna i,</b></p>\r\n<p>Mi nauta kha a cawi hna,</p>\r\n<p><i><b>Aa ruangin:</b></i><br>\r\n    <b>Kan pupa hna sinah a sermi a biakamnak kha a zulh hna; a sal Isarael kha bawmh awkah a ra i Abraham le a tefa\r\n        vialte hna sinah zungzal in zaangfahnak langhter ding kha a philh lo.</b></p>",
        "id": "49",
        "name": "BAWI JESUH HRINNAK"
    },
    {
        "destext": "<h4 align=\"center\">KHRISMAS</h4> <p>Jesuh cu, Jedearam Bethlehnem khua ah, Herod siangpahrang bawi asi lio ah khan a chuak.</p> <p><b>A chuah tlawmpal ah cun arfi zohthiammi hna kha nichuahlei in Jerusalem khua ah khan an ra i, \"Judah siangpahrang a si lai dingmi ngakchia a chuakmi cu khuazei ah dah a um? A arfi nichuahlei in a chuak kha kan hmuh i amah biak awkah cun kan ra,\" tiah an ti.</b></p> <p>Cu bia cu Siangpahrang Herod nih a theih tikah a awlok a chong ngaingai i cu bantuk cun Jerusalem khuami vialte hna zong kha an si ve. Tlangbawi upa vialte hna le Phungbia cawnpiaktu saya hna kha a pumh hna i, \"Khuazei ah dah Messiah cu a chuah lai\" tiah a hal hna.</p> <p><b>Annih nih, \"Judearam Bethlehem khua ah,\" tiah an leh. Cun Profet nih a rak tialmi cu hihi asi: 'Judearam ummi Bethlehem khua, nangmah cu Judahram khuapi hna lakah a hme bik na si naisai lo; Zeicatiah nangmah chun hin hruaitu pakhat, ka mi Israelmi hna tuukhal asi ding mi cu, a chuak lai,\" ati.</b></p> <p>Inn Chungah khan an vung lut i ngakchia kha a nu Mari sinah cun an vung hmuh. An khuk an i bil i an biak. Cun an zal chung khan laksawng an i chuah i an pek; cun an laksawng cu sui le Frankinsen zihmui le Mura zihhmui an si.</p> <p><i><b>Aa ruangin:</b></i><br> <b>Bawipa, Israel Pathian cu thangthat u si, a mi hna bawmh awkah a ra cang i a luatter cang hna. Kan Caah a thawngmi khamhtu kha a chuahter cang.</b></p>",
        "id": "50",
        "name": "KHRISMAS"
    },
    {
        "destext": "<h4 align=\"center\">VAWLEICUNG KHAMHTU</h4>\r\n<p>\"Bawipa, a thawngmi Pathian nih ka cung ah khuaruahhar tuk in rian a tuan.A Min cu a thiang.</p>\r\n<p><b>A min ah Jesuh na sak lai,zeicahtiah a mi hna kha an sualnak chung in a khamh hna lai.</b></p>\r\n<p>Moses nih dar rul kha thetse ram ah a tar bantuk khan, Mi Fapa zong hi tar a si ve lai.</p>\r\n<p><b>Cucaah amah a zummi poah nih zungzal nunnak an ngei lai. Zeicahtiah cun Pathian nih a Fapa cu vawleicung ah hin\r\n        biaceihtu si awkah a run thlah tung lo, Vawlei khamhtu si awkah pei a run thlah cu.</b></p>\r\n<p>Cutincun Pathin nih vawilei hi a dawt hringhran caah a Fapa ngeihchunte kha a pek; cucaah amah a zummi paoh cu an\r\n    thi lai lo, Zungzal nunnak an ngei lai.</p>\r\n<p><b>Mifir cu fir duh le thah duh le hrawh duh lawng ah an ra. Kei cu nunnak kha duhdim tein an ngeih nakhnga caah ka\r\n        ra. Mi Fapa cu a tlaumi kawl awk le khamh awkah a ra.</b></p>\r\n<p>Cun an lungthin kha a hnun pemh hna i Cathiang sullam kha an hun hngalh. Annih cu a thawh hna i, \"Messiah nih cun\r\n    sifahnak kha a in lai i nithumnak ni ah thihnak in a tho than lai,\" tiah a ti.</p>\r\n<p><b>Cun a mah min in sual ngaihchihnak le sual ngaihthiamnak kong kha Jerusalem Khua in i thawk in miphun vialte hna\r\n        sinah chim asi lai, tiah aa tial,\" tiah a ti hna.</b></p>",
        "id": "51",
        "name": "VAWLEICUNG KHAMHTU"
    }
];

console.log(`Hymns data loaded. Total hymns: ${allHymns.length}`);
// --- Global Variables ---
let SQL;
let loadedVersions = {}; // Stores Bible versions
let activeVersions = { primary: null, secondary: null };
let activeDbs = { primary: null, secondary: null }; // Stores active Bible DB instances

let inAppBackAction = null; 

let currentReaderContext = { data: [], title: '', activeId: null };
let currentReaderFontSizeRem = 1.0;
const READER_FONT_SIZE_KEY = 'contentReaderAppFontSize';

let selectionTimeout = null;

let loadedCommentaries = {}; // Stores commentary versions
let activeCommentary = null; // Name of active commentary
let activeCommentaryDb = null; // Active commentary DB instance

let currentBook = null;
let currentChapter = null;
let currentVerse = null; // Current verse in focus for notes/bookmarks
let currentViewMode = 'single';

let oldTestamentBookRange = { start: null, end: null };
let newTestamentBookRange = { start: null, end: null };

let currentCommentaryList = [];
let currentCommentaryIndex = 0;

let selectedVerses = new Set();
let lastClickedVerseId = null;
let savedSelection = null;     // <<< ADD THIS DECLARATION
let savedSelectedText = ''; 

let activeHighlightListener = null;

const THEME_STORAGE_KEY = 'bibleReaderAppTheme';
const themeSelect = document.getElementById('themeSelect');

const LAST_READ_KEY = 'bibleReaderLastRead';
const LOADED_VERSIONS_STORAGE_KEY = 'bibleReaderLoadedVersions';
const LOADED_COMMENTARIES_STORAGE_KEY = 'bibleReaderLoadedCommentaries';

let isScrollingProgrammatically = false;

// IndexedDB Constants (Updated Version for new stores)
const DB_NAME = 'BibleReaderDB';
const DB_VERSION = 2; // INCREMENTED VERSION FOR NEW OBJECT STORES
const OBJECT_STORE_NAME = 'bibleVersions';
const COMMENTARY_STORE_NAME = 'commentaryVersions';
const HIGHLIGHTS_STORE_NAME = 'highlights'; // NEW
const NOTES_STORE_NAME = 'notes'; // NEW
const BOOKMARKS_STORE_NAME = 'bookmarks'; // NEW

const FONT_SIZE_STORAGE_KEY = 'bibleReaderAppFontSize';
const DEFAULT_FONT_SIZE_REM = 1.0; // This is your baseline (100%)
const FONT_SIZE_STEP_REM = 0.1;
const MIN_FONT_SIZE_REM = 0.7;  // 70%
const MAX_FONT_SIZE_REM = 2.0;  // 200%
let currentAppFontSizeRem = DEFAULT_FONT_SIZE_REM; 

let dbPromise; // Will hold the IndexedDB database promise instance

const PREDEFINED_RESOURCES = [
    {
        name: "WEB", // This will be the 'versionName' used in the app
        type: "bible",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/WEB.SQLite3", // Replace with the actual URL
        description: "World English Bible" // Optional
    },
    {
        name: "CHIN", // This will be the 'versionName' used in the app
        type: "bible",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/CHIN.SQLite3", // Replace with the actual URL
        description: "Hakha Baibal" // Optional
    },
    {
        name: "NASB",
        type: "bible",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/NASB%2795.SQLite3",
        description: "New American Standard Bible"
    },
    {
        name: "Sermon-c", // Sermon Commentary
        type: "commentary",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/Sermon-c.commentaries.SQLite3",
        description: "Sermon Commentary"
    },
    {
        name: "MHC", // Matthew Henry's Concise Commentary
        type: "commentary",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/MHC-c.commentaries.SQLite3",
        description: "Matthew Henry Concise Commentary"
    },
    {
        name: "EASY'18", 
        type: "commentary",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/EASY%2718.commentaries.SQLite3",
        description: "EASY'18 Commentary"
    },
    {
        name: "Sermon-c", // Matthew Henry's Concise Commentary
        type: "commentary",
        url: "https://raw.githubusercontent.com/salaiaahu/baibalca/main/Sermon-c.commentaries.SQLite3",
        description: "Sermon Commentary"
    }
    // Add more Bibles and Commentaries as needed
];

const PRELOADED_RESOURCES_MANAGER = {
    key: 'bibleReaderAppPreloaded', // localStorage key to track preloaded resources
    // Increment this version if you change the PREDEFINED_RESOURCES list
    // to force a re-check and potential re-load/addition of new items.
    batchVersion: 'preload_v1.0.1', 
    
    getPreloadedStatus: function() {
        try {
            const status = JSON.parse(localStorage.getItem(this.key));
            if (status && status.batchVersion === this.batchVersion) {
                return status.loadedNames || {}; // Return dictionary of loaded names { "KJV": true, "MHCC": true }
            }
        } catch (e) { console.error("Error reading preloaded status:", e); }
        // If no status, or batch version mismatch, return empty to force processing
        return {}; 
    },

    markAsLoaded: function(resourceName, currentStatus) {
        currentStatus[resourceName] = true;
        try {
            localStorage.setItem(this.key, JSON.stringify({
                batchVersion: this.batchVersion,
                loadedNames: currentStatus
            }));
        } catch (e) { console.error("Error saving preloaded status:", e); }
    }
};


// --- DOM Elements ---
//--- Hymns ---
const slideMenuHymnsBtn = document.getElementById('slideMenuHymnsBtn');
const slideMenuReadingsBtn = document.getElementById('slideMenuReadingsBtn');
const contentReaderPanel = document.getElementById('content-reader-panel');
const readerBackToBibleBtn = document.getElementById('reader-back-to-bible-btn');
const readerHamburgerMenuBtn = document.getElementById('readerHamburgerMenuBtn');
const readerSearchBox = document.getElementById('reader-search-box');
const readerContentArea = document.getElementById('reader-content-area');
const readerListTitle = document.getElementById('reader-list-title');
const readerItemNavGroup = document.getElementById('reader-item-nav-group');
const readerBackToListBtn = document.getElementById('reader-back-to-list-btn');
const prevItemBtn = document.getElementById('prev-item-btn');
const nextItemBtn = document.getElementById('next-item-btn');
const itemTitleDisplay = document.getElementById('item-title-display');
const decreaseReaderFontBtn = document.getElementById('decrease-reader-font-btn');
const increaseReaderFontBtn = document.getElementById('increase-reader-font-btn');
//---- end of hymns ---
const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn');
const slideMenu = document.getElementById('slideMenu');
const slideMenuOverlay = document.getElementById('slideMenuOverlay');
const closeSlideMenuBtn = document.getElementById('closeSlideMenuBtn');

const slideMenuManageBiblesBtn = document.getElementById('slideMenuManageBiblesBtn');
const slideMenuManageCommentariesBtn = document.getElementById('slideMenuManageCommentariesBtn');
const slideMenuMyDataBtn = document.getElementById('slideMenuMyDataBtn');
const slideMenuThemeBtn = document.getElementById('slideMenuThemeBtn'); 
// Top Bar
const primaryVersionIndicator = document.getElementById('primaryVersionIndicator');
const secondaryVersionIndicator = document.getElementById('secondaryVersionIndicator');

const primaryVersionSelect = document.getElementById('primaryVersionSelect');
const secondaryVersionSelect = document.getElementById('secondaryVersionSelect');
const commentarySelect = document.getElementById('commentarySelect');
const prevChapterBtn = document.getElementById('prevChapterBtn');
const nextChapterBtn = document.getElementById('nextChapterBtn');
const currentChapterDisplay = document.getElementById('currentChapterDisplay');
const toggleViewBtn = document.getElementById('toggleViewBtn');
const popupShowSecondaryToggle = document.getElementById('popupShowSecondaryToggle');
const toggleSearchBtn = document.getElementById('toggleSearchBtn');
const toggleFileUploadBtn = document.getElementById('toggleFileUploadBtn');
const toggleCommentaryUploadBtn = document.getElementById('toggleCommentaryUploadBtn');
const toggleUserDataBtn = document.getElementById('toggleUserDataBtn');
const decreaseFontSizeBtn = document.getElementById('decreaseFontSizeBtn');
const increaseFontSizeBtn = document.getElementById('increaseFontSizeBtn');
const currentFontSizeDisplay = document.getElementById('currentFontSizeDisplay');
// Main Content Areas / Panels
const sidebar = document.getElementById('sidebar');
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
const bookList = document.getElementById('bookList');

const uploadPanel = document.getElementById('upload-panel');
const bibleFileInput = document.getElementById('bibleFile');
const versionNameInput = document.getElementById('versionNameInput');
const addVersionBtn = document.getElementById('addVersionBtn');
const loadedVersionsList = document.getElementById('loadedVersionsList');
const closeUploadPanelBtn = document.getElementById('closeUploadPanelBtn');
const statusMessage = document.getElementById('statusMessage');

const commentaryUploadPanel = document.getElementById('commentary-upload-panel');
const commentaryFile = document.getElementById('commentaryFile');
const commentaryNameInput = document.getElementById('commentaryNameInput');
const addCommentaryBtn = document.getElementById('addCommentaryBtn');
const commentaryStatusMessage = document.getElementById('commentaryStatusMessage');
const loadedCommentariesList = document.getElementById('loadedCommentariesList');
const closeCommentaryUploadBtn = document.getElementById('closeCommentaryUploadBtn');

const searchPanel = document.getElementById('search-panel');
const searchQueryInput = document.getElementById('searchQueryInput');
const searchScopeSelect = document.getElementById('searchScopeSelect');
const matchTypeSelect = document.getElementById('matchTypeSelect');
const performSearchBtn = document.getElementById('performSearchBtn');
const searchStatusMessage = document.getElementById('searchStatusMessage');
const searchResultsList = document.getElementById('searchResultsList');
const closeSearchPanelBtn = document.getElementById('closeSearchPanelBtn');

const userDataPanel = document.getElementById('user-data-panel');
const userDataTabButtons = userDataPanel.querySelectorAll('.tab-button');
const highlightsTab = document.getElementById('highlights-tab');
const notesTab = document.getElementById('notes-tab');
const bookmarksTab = document.getElementById('bookmarks-tab');
const highlightsList = document.getElementById('highlightsList');
const notesList = document.getElementById('notesList');
const bookmarksList = document.getElementById('bookmarksList');
const bookmarkCategorySelect = document.getElementById('bookmarkCategorySelect');
const bookmarkCategoriesDatalist = document.getElementById('bookmarkCategoriesDatalist');
const closeUserDataPanelBtn = document.getElementById('closeUserDataPanelBtn');

const bookChapterVerseSelector = document.getElementById('bookChapterVerseSelector');
const chapterGrid = document.getElementById('chapterGrid');
const chapterGridTitle = document.getElementById('chapterGridTitle');
const verseGrid = document.getElementById('verseGrid');
const verseGridTitle = document.getElementById('verseGridTitle');
const backToChaptersBtn = document.getElementById('backToChaptersBtn');
const backToVersesBtn = document.getElementById('backToVersesBtn');

const bibleContentView = document.getElementById('bibleContentView');
const parallelContainer = bibleContentView.querySelector('.parallel-container');
const primaryChapterTitle = document.getElementById('primaryChapterTitle');
const secondaryChapterTitle = document.getElementById('secondaryChapterTitle'); // Corrected ID usage.
const primaryBibleContent = document.getElementById('primaryBibleContent');
const secondaryBibleContent = document.getElementById('secondaryBibleContent');

// Modals
const introModal = document.getElementById('introModal');
const introModalTitle = document.getElementById('introModalTitle');
const introModalText = document.getElementById('introModalText');
const closeModalButton = introModal.querySelector('.close-button');

const commentaryModal = document.getElementById('commentaryModal');
const commentaryModalTitle = document.getElementById('commentaryModalTitle');
const commentaryModalText = document.getElementById('commentaryModalText');
const closeCommentaryModalButton = commentaryModal.querySelector('.close-button');

const noteModal = document.getElementById('noteModal');
const noteModalTitle = document.getElementById('noteModalTitle');
let currentNoteVerseRef = null; // { versionName, bookNumber, chapter, verse }
const noteTextarea = document.getElementById('noteTextarea');
const saveNoteBtn = document.getElementById('saveNoteBtn');
const deleteNoteBtn = document.getElementById('deleteNoteBtn');
const cancelNoteBtn = document.getElementById('cancelNoteBtn');
const closeNoteModalButton = noteModal.querySelector('.close-button');

const bookmarkModal = document.getElementById('bookmarkModal');
const bookmarkModalTitle = document.getElementById('bookmarkModalTitle');
let currentBookmarkVerseRef = null; // { versionName, bookNumber, chapter, verse }
const bookmarkCategoryInput = document.getElementById('bookmarkCategoryInput');
const saveBookmarkBtn = document.getElementById('saveBookmarkBtn');
const deleteBookmarkBtn = document.getElementById('deleteBookmarkBtn');
const cancelBookmarkBtn = document = document.getElementById('cancelBookmarkBtn');
const closeBookmarkModalButton = bookmarkModal.querySelector('.close-button');

const bookGridView = document.getElementById('bookGridView');
const otBookGrid = document.getElementById('otBookGrid');
const ntBookGrid = document.getElementById('ntBookGrid');
const closeNavigatorBtn = document.getElementById('closeNavigatorBtn'); // General close

const chapterGridView = document.getElementById('chapterGridView');
const backToBookGridBtn = document.getElementById('backToBookGridBtn');
const closeNavigatorBtnChapterView = document.getElementById('closeNavigatorBtnChapterView');


const verseGridView = document.getElementById('verseGridView');
const backToChapterGridBtn = document.getElementById('backToChapterGridBtn'); // Was backToChaptersBtn
const closeNavigatorBtnVerseView = document.getElementById('closeNavigatorBtnVerseView');

const bibleVersionPopupBtn = document.getElementById('bibleVersionPopupBtn');
const bibleVersionSelectModal = document.getElementById('bibleVersionSelectModal');
const popupPrimaryVersionSelect = document.getElementById('popupPrimaryVersionSelect');
const popupSecondaryVersionSelect = document.getElementById('popupSecondaryVersionSelect');
const currentPopupPrimaryVersion = document.getElementById('currentPopupPrimaryVersion');
const currentPopupSecondaryVersion = document.getElementById('currentPopupSecondaryVersion');
// const applyBibleVersionsBtn = document.getElementById('applyBibleVersionsBtn'); // If you use an apply button

const commentaryPopupBtn = document.getElementById('commentaryPopupBtn');
const commentarySelectModal = document.getElementById('commentarySelectModal');
const popupCommentaryList = document.getElementById('popupCommentaryList');

const themePopupBtn = document.getElementById('themePopupBtn');
const themeSelectModal = document.getElementById('themeSelectModal');
const popupThemeList = document.getElementById('popupThemeList');

// Highlight Picker
const highlightPicker = document.getElementById('highlightPicker');
let currentHighlightVerseElement = null; // The <p> element for highlighting
let currentHighlightVerseRef = null; // { versionName, bookNumber, chapter, verse }

let latestSelection = null;
let latestSelectedText = '';


// -------- NEW FUNCTIONS ---------
// --- START: ADD THIS ENTIRE BLOCK OF HYMN FUNCTIONS ---

// Function to display the list of all hymns
function showReaderPage(context) { // context is { data: [...], title: "..." }
    currentReaderContext = { ...context, activeId: null };
    showPanel(contentReaderPanel);
    displayContentList();
}

function displayContentList(filteredData = null) {
    const dataToDisplay = filteredData || currentReaderContext.data;

    // Show the main list title and hide the item navigation
    if (readerListTitle) {
        readerListTitle.textContent = currentReaderContext.title;
        readerListTitle.classList.remove('hidden');
    }
    if (readerItemNavGroup) readerItemNavGroup.classList.add('hidden');
    
    currentReaderContext.activeId = null;
    readerContentArea.innerHTML = '';

    const listContainer = document.createElement('div');
    listContainer.className = 'hymn-list';

    dataToDisplay.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'hymn-list-item';
        itemEl.textContent = `${item.id}. ${item.name}`;
        itemEl.dataset.itemId = item.id;
        itemEl.addEventListener('click', () => displayItemContent(item.id));
        listContainer.appendChild(itemEl);
    });

    readerContentArea.appendChild(listContainer);
}

function displayItemContent(itemId) {
    const item = currentReaderContext.data.find(i => i.id === itemId);
    if (!item) return;

    // Hide the main list title and show the item navigation
    if (readerListTitle) readerListTitle.classList.add('hidden');
    if (readerItemNavGroup) readerItemNavGroup.classList.remove('hidden');
    
    currentReaderContext.activeId = parseInt(itemId);
    readerContentArea.innerHTML = `<div class="hymn-content">${item.destext}</div>`;
    itemTitleDisplay.textContent = item.name;
    
    prevItemBtn.disabled = currentReaderContext.activeId <= 1;
    nextItemBtn.disabled = currentReaderContext.activeId >= currentReaderContext.data.length;
    
    readerContentArea.scrollTop = 0;
}

function applyReaderFontSize(sizeRem) {
    currentReaderFontSizeRem = Math.max(0.7, Math.min(2.0, sizeRem));
    readerContentArea.style.fontSize = `${currentReaderFontSizeRem}rem`;
    localStorage.setItem(READER_FONT_SIZE_KEY, currentReaderFontSizeRem.toString());
}

function loadSavedReaderFontSize() {
    const savedSize = localStorage.getItem(READER_FONT_SIZE_KEY);
    applyReaderFontSize(savedSize ? parseFloat(savedSize) : 1.0);
}

function setupContentReaderListeners() {
    const closeMenu = () => {
        if (slideMenu) slideMenu.classList.add('hidden');
        if (slideMenuOverlay) slideMenuOverlay.classList.add('hidden');
    };

    slideMenuHymnsBtn.addEventListener('click', () => {
        showReaderPage({ data: allHymns, title: 'Hymn List' });
        closeMenu();
    });

    slideMenuReadingsBtn.addEventListener('click', () => {
        showReaderPage({ data: allReadings, title: 'Chawnghlang Relnak' });
        closeMenu();
    });

    readerHamburgerMenuBtn.addEventListener('click', () => {
        slideMenu.classList.remove('hidden');
        slideMenuOverlay.classList.remove('hidden');
    });
    
    readerBackToBibleBtn.addEventListener('click', () => {
        if (currentBook && currentChapter) {
            showPanel(bibleContentView);
        } else {
            openBookNavigator();
        }
    });

    readerBackToListBtn.addEventListener('click', () => displayContentList());
    
    prevItemBtn.addEventListener('click', () => {
        if (currentReaderContext.activeId > 1) {
            displayItemContent(String(currentReaderContext.activeId - 1));
        }
    });

    nextItemBtn.addEventListener('click', () => {
        if (currentReaderContext.activeId < currentReaderContext.data.length) {
            displayItemContent(String(currentReaderContext.activeId + 1));
        }
    });
    
    readerSearchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if(searchTerm.length > 0) {
            const filtered = currentReaderContext.data.filter(item => 
                item.name.toLowerCase().includes(searchTerm) || 
                item.id.toString() === searchTerm
            );
            displayContentList(filtered);
        } else {
            displayContentList();
        }
    });

    decreaseReaderFontBtn.addEventListener('click', () => applyReaderFontSize(currentReaderFontSizeRem - 0.1));
    increaseReaderFontBtn.addEventListener('click', () => applyReaderFontSize(currentReaderFontSizeRem + 0.1));
    
    loadSavedReaderFontSize();
}
// --- END: HYMN FUNCTIONS BLOCK ---

function updateActiveVersionNameDisplays() {
    const primaryDisplay = document.getElementById('activePrimaryVersionNameDisplay');
    const secondaryDisplay = document.getElementById('activeSecondaryVersionNameDisplay');

    if (primaryDisplay) {
        if (activeVersions.primary) {
            primaryDisplay.textContent = activeVersions.primary;
            primaryDisplay.style.display = 'inline';
        } else {
            primaryDisplay.textContent = '';
            primaryDisplay.style.display = 'none';
        }
    }

    if (secondaryDisplay) {
        // Only show secondary version name if in PARALLEL view AND a secondary version is active
        if (currentViewMode === 'parallel' && activeVersions.secondary) {
            secondaryDisplay.textContent = activeVersions.secondary;
            secondaryDisplay.style.display = 'inline';
        } else {
            secondaryDisplay.textContent = '';
            secondaryDisplay.style.display = 'none';
        }
    }
}

// --------- Selection

function restorePartialHighlightsDOM(verseEl, highlightsForVerse) {
    if (!verseEl || !highlightsForVerse || highlightsForVerse.length === 0) {
        return;
    }

    // Sort by length, longest first, to handle nested cases correctly (e.g., "his son" before "son").
    highlightsForVerse.sort((a, b) => (b.text || '').length - (a.text || '').length);

    for (const highlight of highlightsForVerse) {
        const textToFind = highlight.text;
        const color = highlight.color;
        if (!textToFind || !color) continue;

        // Use a TreeWalker to find all text nodes. We re-walk for each highlight
        // to ensure we're working with an up-to-date DOM after previous modifications.
        const walker = document.createTreeWalker(verseEl, NodeFilter.SHOW_TEXT, null, false);
        const textNodesToProcess = [];
        let currentNode;
        while (currentNode = walker.nextNode()) {
            // Do not search within text nodes that are already part of a highlight or other special span.
            if (!currentNode.parentElement.closest('.partial-highlight, .commentary-link, .partial-note-anchor')) {
                textNodesToProcess.push(currentNode);
            }
        }

        for (const textNode of textNodesToProcess) {
            const matchIndex = textNode.nodeValue.indexOf(textToFind);
            if (matchIndex !== -1) {
                try {
                    const range = document.createRange();
                    range.setStart(textNode, matchIndex);
                    range.setEnd(textNode, matchIndex + textToFind.length);

                    const highlightSpan = document.createElement('span');
                    highlightSpan.className = `partial-highlight highlight-${color}`;
                    
                    // surroundContents is a robust way to wrap the text, automatically handling node splitting.
                    range.surroundContents(highlightSpan);
                    
                    // Once found and wrapped, break from the inner loop to process the next highlight object.
                    break; 
                } catch (e) {
                    console.error(`Failed to apply partial highlight for text "${textToFind}"`, e);
                }
            }
        }
    }
}

// New function to process selection
function processTextSelection() {
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) {
        if (latestSelection || latestSelectedText) {
            latestSelection = null;
            latestSelectedText = '';
        }
        return;
    }

    const range = selection.getRangeAt(0);
    if (range.collapsed) {
        if (latestSelection || latestSelectedText) {
            latestSelection = null;
            latestSelectedText = '';
        }
        return;
    }

    const selectedText = selection.toString().trim();
    let verseElement = null;
    const commonAncestor = range.commonAncestorContainer;

    if (commonAncestor) {
        verseElement = commonAncestor.nodeType === Node.TEXT_NODE ?
            commonAncestor.parentElement.closest('.verse-paragraph') :
            commonAncestor.closest('.verse-paragraph');
    }

    if (selectedText && verseElement) {
        const startContainerVerse = range.startContainer.nodeType === Node.TEXT_NODE ? range.startContainer.parentElement.closest('.verse-paragraph') : range.startContainer.closest('.verse-paragraph');
        const endContainerVerse = range.endContainer.nodeType === Node.TEXT_NODE ? range.endContainer.parentElement.closest('.verse-paragraph') : range.endContainer.closest('.verse-paragraph');

        if (startContainerVerse === verseElement && endContainerVerse === verseElement) {
            latestSelection = range.cloneRange();
            latestSelectedText = selectedText;
            console.log(`[Selection Processed] Text: "${latestSelectedText}" in verse ${verseElement.dataset.verse} of ${verseElement.dataset.versionName}`);
        } else {
            latestSelection = null;
            latestSelectedText = '';
        }
    } else {
        latestSelection = null;
        latestSelectedText = '';
    }
}

// Debounced handler for selection
function handleSelectionChange() {
    clearTimeout(selectionTimeout);
    selectionTimeout = setTimeout(() => {
        // Check if the active element is an input or textarea; if so, user might be selecting text *inside* an input
        // For now, let's assume selections for highlights/notes are primarily from verse content.
        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
            // User might be selecting text within an input field, not for highlighting verses.
            // We might not want to update latestSelectedText in this case, or handle it differently.
            // For simplicity now, we'll still process it, but this is an area for refinement.
            // console.log("Selection change while input/textarea is active.");
        }
        processTextSelection();
    }, 100); // Debounce for 100ms
}

///////--------- sliding menu
function setupSlideMenuListeners() {
    if (hamburgerMenuBtn && slideMenu && slideMenuOverlay) {
        hamburgerMenuBtn.addEventListener('click', () => {
            console.log("Hamburger menu button clicked");
            slideMenu.classList.remove('hidden'); // Or .add('open') if using that for animation
            slideMenuOverlay.classList.remove('hidden');
        });

        const closeMenu = () => {
            slideMenu.classList.add('hidden'); // Or .remove('open')
            slideMenuOverlay.classList.add('hidden');
        };

        if (closeSlideMenuBtn) {
            closeSlideMenuBtn.addEventListener('click', closeMenu);
        }
        slideMenuOverlay.addEventListener('click', closeMenu);

        // Listeners for items within the slide menu
        if (slideMenuManageBiblesBtn && uploadPanel) {
            slideMenuManageBiblesBtn.addEventListener('click', () => {
                console.log("Manage Bibles from slide menu clicked");
                showPanel(uploadPanel);
                closeMenu();
            });
        }
        if (slideMenuManageCommentariesBtn && commentaryUploadPanel) {
            slideMenuManageCommentariesBtn.addEventListener('click', () => {
                console.log("Manage Commentaries from slide menu clicked");
                showPanel(commentaryUploadPanel);
                closeMenu();
            });
        }
        if (slideMenuMyDataBtn && userDataPanel) {
            slideMenuMyDataBtn.addEventListener('click', () => {
                console.log("My Data from slide menu clicked");
                showPanel(userDataPanel);
                updateUserDataPanel('highlights'); // Default to highlights tab
                closeMenu();
            });
        }
    if (slideMenuThemeBtn && themeSelectModal) {
        slideMenuThemeBtn.addEventListener('click', () => {
            console.log("EVENT: Change Theme from slide menu CLICKED.");
            
            const closeMenu = () => { // Helper to ensure slide menu closes
                if(slideMenu) slideMenu.classList.add('hidden');
                if(slideMenuOverlay) slideMenuOverlay.classList.add('hidden');
            };
            closeMenu(); 
            
            // Now, open the theme selection modal
            // The modal needs to be populated with the currently selected theme
            if (typeof populateThemeModal === "function") {
                populateThemeModal();
            } else {
                console.error("populateThemeModal function not found!");
            }
            themeSelectModal.classList.remove('hidden');
        });
        console.log("DEBUG: Event listener for slideMenuThemeBtn ATTACHED.");
    } else {
        console.error("ERROR: slideMenuThemeBtn or themeSelectModal not found.");
    }
}
}

//------------------------

function processUserTextSelection(eventContext) { // eventContext can be the event or null
    const selection = window.getSelection();

    // If no selection object or no range selected, clear our tracked state
    if (!selection || selection.rangeCount === 0) {
        if (latestSelection || latestSelectedText) {
            latestSelection = null;
            latestSelectedText = '';
        }
        return;
    }

    const range = selection.getRangeAt(0);

    // If the selection is collapsed (it's a click, not a drag), clear our tracked state
    if (range.collapsed) {
        // Only clear if the click wasn't on an interactive element that might *use* the selection later
        // The initial check in the event listeners handles this for popups.
        // This case is for clicks on general document area that collapse selection.
        if (latestSelection || latestSelectedText) {
            latestSelection = null;
            latestSelectedText = '';
        }
        return;
    }

    const selectedText = selection.toString().trim();

    let verseElement = null;
    const commonAncestor = range.commonAncestorContainer;
    if (commonAncestor) {
        verseElement = commonAncestor.nodeType === Node.TEXT_NODE ?
            commonAncestor.parentElement.closest('.verse-paragraph') :
            commonAncestor.closest('.verse-paragraph');
    }

    if (selectedText && verseElement) {
        const startContainerVerse = range.startContainer.nodeType === Node.TEXT_NODE ?
                                   range.startContainer.parentElement.closest('.verse-paragraph') :
                                   range.startContainer.closest('.verse-paragraph');
        const endContainerVerse = range.endContainer.nodeType === Node.TEXT_NODE ?
                                 range.endContainer.parentElement.closest('.verse-paragraph') :
                                 range.endContainer.closest('.verse-paragraph');

        if (startContainerVerse === verseElement && endContainerVerse === verseElement) {
            latestSelection = range.cloneRange();
            latestSelectedText = selectedText;
            console.log(`[UserSelection] Text selected: "${latestSelectedText}" in verse ${verseElement.dataset.verse} (Version: ${verseElement.dataset.versionName})`);
        } else {
            latestSelection = null;
            latestSelectedText = '';
        }
    } else {
        latestSelection = null;
        latestSelectedText = '';
    }
}

//-----------Back key control 
function setupMobileBackButtonHandler() {
    console.log("Setting up mobile back button (popstate) listener.");

    // Push an initial state so we can intercept the first back press
    // If the current URL doesn't have a hash, or to ensure our state is on top
    if (window.location.hash !== "#appActive") {
        history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
    }


    window.addEventListener('popstate', function(event) {
        console.log("POPSTATE event fired. Current state:", event.state, "Current hash:", window.location.hash);

        // If a specific back action was queued, execute it
        if (typeof inAppBackAction === 'function') {
            console.log("Executing queued inAppBackAction.");
            inAppBackAction();
            inAppBackAction = null; // Clear it after execution
            // Push a state again to "consume" this back press and stay in the app
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
            return;
        }

        // --- Default back button behavior if no specific action was queued ---
        // Check for open modals or specific UI states in reverse order of opening
        // Selection Modals (Theme, Commentary, Bible Versions)
        if (themeSelectModal && !themeSelectModal.classList.contains('hidden')) {
            console.log("Back button: Closing theme select modal.");
            themeSelectModal.classList.add('hidden');
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        } else if (commentarySelectModal && !commentarySelectModal.classList.contains('hidden')) {
            console.log("Back button: Closing commentary select modal.");
            commentarySelectModal.classList.add('hidden');
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        } else if (bibleVersionSelectModal && !bibleVersionSelectModal.classList.contains('hidden')) {
            console.log("Back button: Closing bible version select modal.");
            bibleVersionSelectModal.classList.add('hidden');
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        }
        // Note, Bookmark, Highlight Pickers, etc.
        else if (noteModal && !noteModal.classList.contains('hidden')) {
            console.log("Back button: Closing note modal via cancelNote.");
            cancelNote(); // Assumes cancelNote hides the modal
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        } else if (bookmarkModal && !bookmarkModal.classList.contains('hidden')) {
            console.log("Back button: Closing bookmark modal via cancelBookmark.");
            cancelBookmark();
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        } else if (highlightPicker && !highlightPicker.classList.contains('hidden')) {
            console.log("Back button: Closing highlightPicker.");
            hideHighlightPicker();
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        } else if (highlightColorPicker && !highlightColorPicker.classList.contains('hidden')) {
            console.log("Back button: Closing highlightColorPicker.");
            highlightColorPicker.classList.add('hidden');
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        }
        // Slide Menu
        else if (slideMenu && !slideMenu.classList.contains('hidden')) {
            console.log("Back button: Closing slide menu.");
            slideMenu.classList.add('hidden');
            slideMenuOverlay.classList.add('hidden');
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        }
        // Book/Chapter/Verse Navigator Panel
        else if (bookChapterVerseSelector && !bookChapterVerseSelector.classList.contains('hidden')) {
            console.log("Back button: Navigator panel is open.");
            if (verseGridView && !verseGridView.classList.contains('hidden')) {
                console.log("Back button: In verse grid, going to chapter grid.");
                if (backToChapterGridBtn) backToChapterGridBtn.click(); // Simulate back button click
            } else if (chapterGridView && !chapterGridView.classList.contains('hidden')) {
                console.log("Back button: In chapter grid, going to book grid.");
                if (backToBookGridBtn) backToBookGridBtn.click();
            } else if (bookGridView && !bookGridView.classList.contains('hidden')) {
                console.log("Back button: In book grid, closing navigator panel.");
                if (closeNavigatorBtn) closeNavigatorBtn.click();
            }
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive"); // Consume back press
        }
        // Other panels like Upload, Search, UserData
        else if (uploadPanel && !uploadPanel.classList.contains('hidden')) {
            console.log("Back button: Closing upload panel.");
            if (closeUploadPanelBtn) closeUploadPanelBtn.click(); // Or showPanel(bibleContentView);
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        } else if (searchPanel && !searchPanel.classList.contains('hidden')) {
            console.log("Back button: Closing search panel.");
            if (closeSearchPanelBtn) closeSearchPanelBtn.click();
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        } else if (commentaryUploadPanel && !commentaryUploadPanel.classList.contains('hidden')) {
            console.log("Back button: Closing commentary upload panel.");
            if (closeCommentaryUploadBtn) closeCommentaryUploadBtn.click();
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        } else if (userDataPanel && !userDataPanel.classList.contains('hidden')) {
            console.log("Back button: Closing user data panel.");
            if (closeUserDataPanelBtn) closeUserDataPanelBtn.click();
            history.pushState({appState: 'activeRoot'}, "App Active", "#appActive");
        }
        // If nothing else was open, this is the "root" of the app view
        else if (window.location.hash === "#appActive" && event.state && event.state.appState === 'activeRoot') {
            // We are at what we consider the app's "base" after a back press.
            // To prevent exiting on the next back press, we can push another state.
            // Or, here you could implement a "Press back again to exit" toast.
            console.log("Back button: At app root state. Pushing state again to prevent exit on next back, or allow exit.");
            // For now, let's allow default (which might be exit or previous page in browser history)
            // If you want to strictly control exit, you'd need a more complex state machine or counter.
            // To try and "stay in app" one more level:
            // history.pushState({appState: 'reallyExit?'}, "Confirm Exit", "#confirmExit");
            // Or simply do nothing and let the browser go back further in its history / close.
        } else {
            console.log("Back button: No specific in-app action for current state. Default browser back may occur.");
        }
    });
}

// --------- preload helper ----------//
async function fetchFileFromUrl(url) {
    console.log("Attempting to fetch from URL:", url);
    const response = await fetch(url, { mode: 'cors' }); // mode: 'cors' is default but good to be explicit

    if (!response.ok) {
        // Try to get more specific error info if possible
        let errorDetails = `HTTP error! Status: ${response.status}`;
        if (response.status === 0) { // Often indicates a CORS issue or network failure
            errorDetails += " (This might be a CORS issue or network connectivity problem. Ensure the server allows cross-origin requests.)";
        } else {
             errorDetails += ` ${response.statusText}`;
        }
        throw new Error(errorDetails);
    }
    console.log("Successfully fetched. Converting to ArrayBuffer...");
    return await response.arrayBuffer();
}

async function processPredefinedResources() {
    console.log("Checking for predefined resources to load...");
    if (statusMessage) statusMessage.textContent = "Setting up initial resources (may take a moment on first load)...";

    const preloadedStatus = PRELOADED_RESOURCES_MANAGER.getPreloadedStatus();
    let newResourcesWereProcessed = false;

    for (const resource of PREDEFINED_RESOURCES) {
        if (preloadedStatus[resource.name]) {
            console.log(`Resource "${resource.name}" (${resource.type}) previously marked as preloaded for this batch. Skipping download attempt.`);
            // Ensure it's actually in our in-memory lists if it was preloaded
            if (resource.type === "bible" && !loadedVersions[resource.name]) {
                 console.warn(`Preloaded Bible "${resource.name}" not in loadedVersions. May need to re-verify from IndexedDB.`);
                 // The main loadSavedVersionsMetadata should ideally pick it up if it's in IndexedDB
            } else if (resource.type === "commentary" && !loadedCommentaries[resource.name]) {
                 console.warn(`Preloaded Commentary "${resource.name}" not in loadedCommentaries.`);
            }
            continue;
        }

        // Also check if it's already present from a manual load in a previous session
        if ((resource.type === "bible" && loadedVersions[resource.name]) ||
            (resource.type === "commentary" && loadedCommentaries[resource.name])) {
            console.log(`Resource "${resource.name}" (${resource.type}) already present in loaded collections. Marking as preloaded.`);
            PRELOADED_RESOURCES_MANAGER.markAsLoaded(resource.name, preloadedStatus);
            newResourcesWereProcessed = true; // To trigger UI updates if needed
            continue;
        }

        console.log(`Attempting to preload ${resource.type}: "${resource.name}" from ${resource.url}`);
        if (statusMessage) statusMessage.textContent = `Downloading predefined ${resource.type}: ${resource.name}...`;

        try {
            const arrayBuffer = await fetchFileFromUrl(resource.url); // Your existing function
            const uint8Array = new Uint8Array(arrayBuffer);

            if (resource.type === "bible") {
                const tempDbInstance = new SQL.Database(uint8Array);
                const bookData = [];
                const stmt = tempDbInstance.prepare("SELECT book_number, long_name, short_name FROM books ORDER BY book_number ASC;");
                while(stmt.step()) { bookData.push(stmt.getAsObject()); }
                stmt.free();
                tempDbInstance.close();

                if (bookData.length === 0) throw new Error(`No book data found in predefined Bible: ${resource.name}`);

                await putIndexedDB(OBJECT_STORE_NAME, { versionName: resource.name, fileData: uint8Array, books: bookData });
                loadedVersions[resource.name] = { fileData: uint8Array, db: null, books: bookData };
                console.log(`Predefined Bible "${resource.name}" added successfully.`);
            } else if (resource.type === "commentary") {
                let commentaryBookMetadata = {};
                try {
                    const tempDbInstance = new SQL.Database(uint8Array);
                    const stmt = tempDbInstance.prepare("SELECT book_number, long_name, short_name FROM books ORDER BY book_number ASC;");
                    while(stmt.step()) { const row = stmt.getAsObject(); commentaryBookMetadata[row.book_number] = { long_name: row.long_name, short_name: row.short_name }; }
                    stmt.free();
                    tempDbInstance.close();
                } catch (e) { console.warn(`Could not read book metadata from predefined commentary "${resource.name}".`, e); }

                await putIndexedDB(COMMENTARY_STORE_NAME, { versionName: resource.name, fileData: uint8Array, metadata: { books: commentaryBookMetadata } });
                loadedCommentaries[resource.name] = { fileData: uint8Array, db: null, metadata: { books: commentaryBookMetadata } };
                console.log(`Predefined commentary "${resource.name}" added successfully.`);
            }
            
            PRELOADED_RESOURCES_MANAGER.markAsLoaded(resource.name, preloadedStatus);
            newResourcesWereProcessed = true;

        } catch (err) {
            console.error(`Failed to preload resource "${resource.name}" from ${resource.url}:`, err);
            if (statusMessage) { // Show error to user for this specific resource
                statusMessage.textContent = `Failed to load predefined ${resource.type} "${resource.name}". Check console.`;
                statusMessage.classList.add('error');
                // Keep the message for a few seconds
                await new Promise(resolve => setTimeout(resolve, 4000)); 
                statusMessage.classList.remove('error');
            }
        }
    }

    if (newResourcesWereProcessed) {
        // These save the *keys* of all loaded versions/commentaries (including newly preloaded ones)
        // to localStorage for faster initial determination next app load.
        await saveLoadedVersionsMetadata(); 
        await saveLoadedCommentariesMetadata();
        
        // These refresh the UI lists in the "Manage..." panels
        updateLoadedVersionsList();    
        updateLoadedCommentariesList();
        
        // The popup select lists will be repopulated when they are next opened via their respective populate...Modal functions.
        // Or, if you want to update them now if they happen to be open (less likely during initial load):
        // if (bibleVersionSelectModal && !bibleVersionSelectModal.classList.contains('hidden')) populateBibleVersionModal();
        // if (commentarySelectModal && !commentarySelectModal.classList.contains('hidden')) populateCommentaryModal();
    }
    if (statusMessage) statusMessage.textContent = "Initial resources setup complete.";
    console.log("Finished processing predefined resources.");
}

////////////////////////////

function applyFontSize(sizeRem) {
    // Clamp the value between min and max
    currentAppFontSizeRem = Math.max(MIN_FONT_SIZE_REM, Math.min(MAX_FONT_SIZE_REM, sizeRem));
    
    document.documentElement.style.setProperty('--bible-text-font-size', `${currentAppFontSizeRem}rem`);
    
    if (currentFontSizeDisplay) {
        // Display as percentage relative to the default
        currentFontSizeDisplay.textContent = `${Math.round((currentAppFontSizeRem / DEFAULT_FONT_SIZE_REM) * 100)}%`;
    }
    
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, currentAppFontSizeRem.toString());
    console.log(`Font size applied: ${currentAppFontSizeRem}rem`);

    // Disable buttons if at min/max
    if (decreaseFontSizeBtn) {
        decreaseFontSizeBtn.disabled = currentAppFontSizeRem <= MIN_FONT_SIZE_REM;
    }
    if (increaseFontSizeBtn) {
        increaseFontSizeBtn.disabled = currentAppFontSizeRem >= MAX_FONT_SIZE_REM;
    }
}

function loadSavedFontSize() {
    const savedSize = localStorage.getItem(FONT_SIZE_STORAGE_KEY);
    if (savedSize) {
        applyFontSize(parseFloat(savedSize));
    } else {
        applyFontSize(DEFAULT_FONT_SIZE_REM); // Apply default if nothing is saved
    }
}

// NEW function to manage views within the navigator panel
function closeAllSelectionModals() {
    bibleVersionSelectModal.classList.add('hidden');
    commentarySelectModal.classList.add('hidden');
    themeSelectModal.classList.add('hidden');
}

function applyTheme(themeName) {
    console.log("Applying theme:", themeName);
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-sepia'); // Remove all known

    // Add the new theme class if it's not the default (light)
    // Assuming 'light' theme is achieved by having no specific theme class,
    // relying on the :root variables. Or you can add a 'theme-light' class too.
    if (themeName === 'dark') {
        document.body.classList.add('theme-dark');
    } else if (themeName === 'sepia') {
        document.body.classList.add('theme-sepia');
    }
    // If you have a .theme-light class that sets the :root variables:
    // else if (themeName === 'light') {
    //     document.body.classList.add('theme-light');
    // }


    localStorage.setItem(THEME_STORAGE_KEY, themeName);
    if (themeSelect) { // Update the dropdown to reflect the current theme
        themeSelect.value = themeName;
    }
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
        console.log("Loading saved theme:", savedTheme);
        applyTheme(savedTheme);
    } else {
        console.log("No saved theme found, applying default (light).");
        applyTheme('light'); // Default theme
    }
}

function setupThemeControls() { // Or add this content to setupNavigationListeners
    loadSavedTheme(); // Load and apply theme on startup

    if (themeSelect) {
        themeSelect.addEventListener('change', (event) => {
            applyTheme(event.target.value);
        });
    } else {
        console.error("Theme select dropdown not found.");
    }
}

function populateBibleVersionModal() {
    if (!popupPrimaryVersionSelect || !popupSecondaryVersionSelect) {
        console.error("populateBibleVersionModal: Popup select elements not found.");
        return;
    }
    
    const versions = Object.keys(loadedVersions);
    
    // Populate Primary Select
    popupPrimaryVersionSelect.innerHTML = '<option value="">-- Select Primary --</option>';
    versions.forEach(versionName => {
        const option = document.createElement('option');
        option.value = versionName;
        option.textContent = versionName;
        if (activeVersions.primary === versionName) {
            option.selected = true;
        }
        popupPrimaryVersionSelect.appendChild(option);
    });
    if (currentPopupPrimaryVersion) { // Check if element exists
        currentPopupPrimaryVersion.textContent = activeVersions.primary ? `(${activeVersions.primary})` : '';
    }

    // Populate Secondary Select
    popupSecondaryVersionSelect.innerHTML = '<option value="">-- Select Secondary (None) --</option>';
    versions.forEach(versionName => {
        const option = document.createElement('option');
        option.value = versionName;
        option.textContent = versionName;
        if (activeVersions.secondary === versionName) {
            option.selected = true;
        }
        popupSecondaryVersionSelect.appendChild(option);
    });
	    if (popupShowSecondaryToggle) {
        popupShowSecondaryToggle.checked = (currentViewMode === 'parallel');
    }
    if (currentPopupSecondaryVersion) { // Check if element exists
        currentPopupSecondaryVersion.textContent = activeVersions.secondary ? `(${activeVersions.secondary})` : '(None)';
    }

    // Update visual indicators on the main bible icon button
    if (primaryVersionIndicator) { // Check if the element variable is valid
        primaryVersionIndicator.style.display = activeVersions.primary ? 'inline-flex' : 'none';
    } else {
        console.warn("primaryVersionIndicator DOM element not found.");
    }

    if (secondaryVersionIndicator) { // Check if the element variable is valid
        secondaryVersionIndicator.style.display = activeVersions.secondary ? 'inline-flex' : 'none';
    } else {
        console.warn("secondaryVersionIndicator DOM element not found.");
    }
    console.log("LOG: populateBibleVersionModal() finished.");
}

function populateCommentaryModal() {
    if (!popupCommentaryList || !commentarySelectModal) return; // Add check for modal
    popupCommentaryList.innerHTML = ''; 

    // "None" option
    const noneButton = document.createElement('button');
    noneButton.classList.add('popup-list-item'); // Use common class
    noneButton.textContent = "-- None --";
    noneButton.dataset.value = ""; // Empty value for "None"
    if (!activeCommentary) {
        noneButton.classList.add('selected-item');
    }
    noneButton.addEventListener('click', async () => {
        await setActiveCommentary(""); // Set active commentary to none
        // populateCommentaryModal(); // Re-populate to update selection (optional if closing immediately)
        commentarySelectModal.classList.add('hidden'); // Auto-close
    });
    popupCommentaryList.appendChild(noneButton);

    // Loaded commentaries
    const commentaries = Object.keys(loadedCommentaries);
    commentaries.forEach(commentaryName => {
        const button = document.createElement('button');
        button.classList.add('popup-list-item');
        button.textContent = commentaryName;
        button.dataset.value = commentaryName;
        if (activeCommentary === commentaryName) {
            button.classList.add('selected-item');
        }
        button.addEventListener('click', async () => {
            await setActiveCommentary(commentaryName);
            // populateCommentaryModal(); // Re-populate to update selection (optional if closing immediately)
            commentarySelectModal.classList.add('hidden'); // Auto-close
        });
        popupCommentaryList.appendChild(button);
    });
    console.log("Commentary modal populated.");
}

function populateThemeModal() {
    if (!popupThemeList) return;
    const currentTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    popupThemeList.querySelectorAll('.theme-option-button').forEach(button => {
        if (button.dataset.value === currentTheme) {
            button.classList.add('selected-item');
        } else {
            button.classList.remove('selected-item');
        }
    });
}
function setupNavigationListeners() {
    console.log("LOG: setupNavigationListeners() called.");

    // Listener for the main chapter display at the top to open the book navigator
    if (currentChapterDisplay) {
        currentChapterDisplay.addEventListener('click', () => {
            console.log("EVENT: #currentChapterDisplay CLICKED.");
            openBookNavigator(); // This function will show the book grid
        });
    } else {
        console.error("ERROR: currentChapterDisplay element not found in setupNavigationListeners.");
    }

    // General function to close the main navigator and decide what to show next
    const closeAndExitNavigator = () => {
        if (bookChapterVerseSelector) {
            bookChapterVerseSelector.classList.add('hidden');
        }
        // If a book and chapter are selected, show the Bible content view
        if (currentBook && currentChapter && currentChapter !== 'introduction') {
            showPanel(bibleContentView);
        } else if (currentBook && currentChapter === 'introduction') {
            // If it's an introduction, bibleContentView should already be shown by loadChapterContent
            // If not, ensure it is.
             showPanel(bibleContentView);
        }
        else {
            // Fallback if no specific content is ready (e.g., show upload panel or a default welcome)
            // Adjust this to your preferred default panel if no Bible content is active
            if (Object.keys(loadedVersions).length > 0 && activeVersions.primary) {
                // If versions are loaded but no chapter, maybe show an empty bibleContentView or prompt.
                // For now, let's assume bibleContentView handles a "no chapter selected" state gracefully
                // or we default to the book selection if they close without going to a chapter.
                // If they close navigator from book view, and no chapter was ever loaded, bibleContentView might be empty.
                // Consider what the best default state is. If bibleContentView is empty, maybe go to uploadPanel.
                if (primaryBibleContent.innerHTML.trim() === '' || primaryBibleContent.firstChild?.classList?.contains('placeholder')) {
                     // If primary content is empty or just a placeholder, and versions exist,
                     // perhaps keep bookChapterVerseSelector open or go to upload if no versions.
                     // For now, this logic means if you close from book view without selecting anything,
                     // and bibleContentView was previously empty, it will show that empty view.
                     showPanel(bibleContentView); // Or choose a more appropriate default
                } else {
                    showPanel(bibleContentView);
                }

            } else {
                showPanel(uploadPanel);
            }
        }
        console.log("LOG: Navigator closed.");
    };

    // Listeners for the "Close Navigator" buttons
    if (closeNavigatorBtn) {
        closeNavigatorBtn.addEventListener('click', closeAndExitNavigator);
    } else {
        console.error("ERROR: closeNavigatorBtn element not found.");
    }
    if (closeNavigatorBtnChapterView) {
        closeNavigatorBtnChapterView.addEventListener('click', closeAndExitNavigator);
    } else {
        console.error("ERROR: closeNavigatorBtnChapterView element not found.");
    }
    if (closeNavigatorBtnVerseView) {
        closeNavigatorBtnVerseView.addEventListener('click', closeAndExitNavigator);
    } else {
        console.error("ERROR: closeNavigatorBtnVerseView element not found.");
    }

    // Listener for "Back to Books" button (from Chapter Grid View)
    if (backToBookGridBtn) {
        backToBookGridBtn.addEventListener('click', () => {
            console.log("EVENT: backToBookGridBtn CLICKED.");
            showNavigatorView(bookGridView); // Show the book selection grid
			openBookNavigator();
        });
    } else {
        console.error("ERROR: backToBookGridBtn element not found.");
    }

    // Listener for "Back to Chapters" button (from Verse Grid View)
    // This was likely your existing backToChaptersBtn, ensure ID matches
    if (backToChapterGridBtn) { // Assuming you renamed backToChaptersBtn to backToChapterGridBtn in HTML for clarity
        backToChapterGridBtn.addEventListener('click', () => {
            console.log("EVENT: backToChapterGridBtn CLICKED.");
            if (currentBook) { // currentBook should be set if we are in verse grid
                // populateChapterGrid(currentBook); // Optionally re-populate, or assume it's still fine
                showNavigatorView(chapterGridView); // Show the chapter grid view
            } else {
                // Fallback if currentBook is somehow lost
                console.warn("WARN: currentBook not set when going back to chapter grid. Showing book grid instead.");
                showNavigatorView(bookGridView);
            }
        });
    } else {
        console.error("ERROR: backToChapterGridBtn (or your equivalent backToChaptersBtn) element not found.");
    }
    console.log("LOG: setupNavigationListeners() finished attaching listeners.");
}

function setupPopupTriggersAndModals() {
console.log("LOG: setupPopupTriggersAndModals() called.");
    // Helper to close all these specific selection modals
    const closeAllPopups = () => {
        if (bibleVersionSelectModal) bibleVersionSelectModal.classList.add('hidden');
        if (commentarySelectModal) commentarySelectModal.classList.add('hidden');
        if (themeSelectModal) themeSelectModal.classList.add('hidden');
    };

    // Generic close buttons for these modals (the '×' button)
    document.querySelectorAll('.selection-modal .close-selection-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalToClose = btn.closest('.selection-modal');
            if (modalToClose) {
                modalToClose.classList.add('hidden');
            }
        });
    });
    console.log("DEBUG: bibleVersionPopupBtn element is:", bibleVersionPopupBtn); // Check if element exists
    console.log("DEBUG: bibleVersionSelectModal element is:", bibleVersionSelectModal); // Check if modal element exists

    // --- Bible Version Selection Modal ---
    if (bibleVersionPopupBtn && bibleVersionSelectModal && popupPrimaryVersionSelect && popupSecondaryVersionSelect) {
        bibleVersionPopupBtn.addEventListener('click', () => {
console.log("EVENT: #bibleVersionPopupBtn CLICKED.");
            closeAllPopups(); // Close any other open selection popups
console.log("LOG: After closeAllPopups()");
            populateBibleVersionModal(); // Populate with current selections and options
console.log("LOG: After populateBibleVersionModal()"); 
            bibleVersionSelectModal.classList.remove('hidden');
            console.log("LOG: bibleVersionSelectModal 'hidden' class removed. Current classes:", bibleVersionSelectModal.classList.toString()); // LOG 4
            console.log("LOG: bibleVersionSelectModal computed display style:", window.getComputedStyle(bibleVersionSelectModal).display); // LOG 5
  
        });

        popupPrimaryVersionSelect.addEventListener('change', async (e) => {
            console.log("Primary version selected in popup:", e.target.value);
            await setActiveVersion('primary', e.target.value);
            populateBibleVersionModal(); // Update current version display in modal & main icon
            bibleVersionSelectModal.classList.add('hidden'); // Auto-close
        });

        popupSecondaryVersionSelect.addEventListener('change', async (e) => {
            console.log("Secondary version selected in popup:", e.target.value);
            await setActiveVersion('secondary', e.target.value);
            populateBibleVersionModal(); // Update current version display in modal & main icon
            bibleVersionSelectModal.classList.add('hidden'); // Auto-close
        });
    } else {
        console.error("Bible version popup trigger or modal elements not found.");
    }
    if (popupShowSecondaryToggle) {
        popupShowSecondaryToggle.addEventListener('change', (e) => {
            const newMode = e.target.checked ? 'parallel' : 'single';
            setViewMode(newMode);
            // Optionally close the modal after toggling, or leave it open
            // bibleVersionSelectModal.classList.add('hidden');
        });
    }
    // --- Commentary Selection Modal ---
    if (commentaryPopupBtn && commentarySelectModal && popupCommentaryList) {
        commentaryPopupBtn.addEventListener('click', () => {
            closeAllPopups();
            populateCommentaryModal(); // Populates the list and sets up internal click listeners
            commentarySelectModal.classList.remove('hidden');
        });
        // Note: The click listeners for individual commentary buttons inside populateCommentaryModal
        // should already handle setActiveCommentary and then closing the modal.
        // We'll ensure that logic is in populateCommentaryModal.
    } else {
        console.error("Commentary popup trigger or modal elements not found.");
    }

    // --- Theme Selection Modal ---
    if (popupThemeList) {
        // Use event delegation on the parent list for simplicity and efficiency
        popupThemeList.addEventListener('click', (event) => {
            const themeButton = event.target.closest('.theme-option-button');
            if (!themeButton) return; // Click was not on a theme button

            const themeValue = themeButton.dataset.value;
            console.log("THEME POPUP: Theme button clicked:", themeValue);

            applyTheme(themeValue);           // Applies the theme
            populateThemeModal();           // Updates which button is marked 'selected'
            themeSelectModal.classList.add('hidden'); // Auto-close the modal
        });
        console.log("DEBUG: Event listener for theme options in popup ATTACHED.");
    } else {
        console.error("ERROR: popupThemeList element not found.");
    }
}

function showNavigatorView(viewToShow) {
	 console.log("LOG: showNavigatorView - Showing:", viewToShow ? viewToShow.id : 'null');
    [bookGridView, chapterGridView, verseGridView].forEach(view => {
        if (view === viewToShow) {
            view.classList.remove('hidden');
        } else {
            view.classList.add('hidden');
        }
    });
    // Always ensure the main navigator panel is visible when one of its views is shown
    if (viewToShow) {
        showPanel(bookChapterVerseSelector);
    }
}

// NEW function to populate the book grid
async function populateBookGrid() {
    console.log("LOG: populateBookGrid() called.");
    otBookGrid.innerHTML = ''; 
    ntBookGrid.innerHTML = '';

    if (!activeVersions.primary || !loadedVersions[activeVersions.primary] || !loadedVersions[activeVersions.primary].books) {
        console.warn("LOG: populateBookGrid - Primary version/books not loaded. Cannot populate.");
        otBookGrid.innerHTML = '<li>Primary version or its book list not loaded.</li>';
        return;
    }

    console.log("LOG: populateBookGrid - OT Range:", oldTestamentBookRange, "NT Range:", newTestamentBookRange);
    const books = loadedVersions[activeVersions.primary].books;
    let otBooksCount = 0;
    let ntBooksCount = 0;

    books.forEach(book => {
        // console.log(`LOG: populateBookGrid - Processing book: ${book.short_name} (ID: ${book.book_number})`);
        const bookItem = document.createElement('div');
        bookItem.classList.add('grid-item'); // Ensure your .grid-item CSS is applied
        bookItem.textContent = book.short_name;
        bookItem.title = book.long_name;
        bookItem.dataset.bookNumber = book.book_number;

        bookItem.addEventListener('click', () => {
            currentBook = book; 
            console.log("LOG: Book clicked in grid:", currentBook.long_name);
            currentChapter = null; 
            currentVerse = null;
            populateChapterGrid(book); 
            showNavigatorView(chapterGridView);
        });

        // Check ranges carefully
        let addedToOt = false;
        if (oldTestamentBookRange.start !== null && oldTestamentBookRange.end !== null &&
            book.book_number >= oldTestamentBookRange.start && book.book_number <= oldTestamentBookRange.end) {
            otBookGrid.appendChild(bookItem);
            otBooksCount++;
            addedToOt = true;
        }
        // Use 'else if' if books cannot be in both, or 'if' if they could (e.g. for apocrypha in some lists)
        // Assuming distinct OT/NT for now.
        if (!addedToOt && newTestamentBookRange.start !== null && newTestamentBookRange.end !== null &&
            book.book_number >= newTestamentBookRange.start && book.book_number <= newTestamentBookRange.end) {
            ntBookGrid.appendChild(bookItem);
            ntBooksCount++;
        } else if (!addedToOt) { 
            // Fallback for books not fitting strictly, or if ranges are weird.
            // This might happen if your book_numbers are not typical 1-66.
             console.warn(`LOG: populateBookGrid - Book ${book.short_name} (ID: ${book.book_number}) did not fit OT range (${oldTestamentBookRange.start}-${oldTestamentBookRange.end}) or NT range (${newTestamentBookRange.start}-${newTestamentBookRange.end}). Appending to NT as fallback or check ranges.`);
             ntBookGrid.appendChild(bookItem); // Or handle differently
        }
    });
    console.log(`LOG: populateBookGrid - Populated ${otBooksCount} OT books and ${ntBooksCount} NT books.`);
    if (books.length > 0 && otBooksCount === 0 && ntBooksCount === 0) {
        console.error("LOG: populateBookGrid - No books were added to OT or NT grids, despite having books. Check OT/NT range logic and book_number values!");
    }
}

// NEW function to show the book selection panel (triggered by clicking #currentChapterDisplay)
function openBookNavigator() {
    console.log("LOG: openBookNavigator() called."); // Log 2: Function entered

    if (!activeVersions.primary || !loadedVersions[activeVersions.primary]) {
        console.warn("LOG: openBookNavigator - No primary version active or loaded. Alerting.");
        alert("Please load and select a primary Bible version first.");
        showPanel(uploadPanel); // Or your default panel for loading versions
        return;
    }
    console.log("LOG: openBookNavigator - Primary version seems active. Proceeding...");

    // Ensure OT/NT ranges are determined. This might be better placed in setActiveVersion
    // but let's ensure it runs if needed for populateBookGrid.
    if ((!oldTestamentBookRange.end || !newTestamentBookRange.start) && activeDbs.primary) {
        console.log("LOG: openBookNavigator - OT/NT ranges not set or incomplete, calling determineOtNtRanges.");
        determineOtNtRanges(activeDbs.primary); // Ensure this doesn't error out
    } else {
        console.log("LOG: openBookNavigator - OT/NT ranges appear to be set:", oldTestamentBookRange, newTestamentBookRange);
    }


    console.log("LOG: openBookNavigator - Calling populateBookGrid().");
    populateBookGrid(); // This populates the OT/NT book lists in the bookGridView

    console.log("LOG: openBookNavigator - Calling showNavigatorView(bookGridView).");
    showNavigatorView(bookGridView); // This should make bookGridView visible within its parent

    console.log("LOG: openBookNavigator - Calling showPanel(bookChapterVerseSelector).");
    showPanel(bookChapterVerseSelector); // This ensures the main #bookChapterVerseSelector panel is visible

    console.log("LOG: openBookNavigator() finished.");
}


// MODIFIED: populateChapterGrid (was showChaptersGrid, now focuses on populating)
async function populateChapterGrid(book) { // Takes book object
    console.log("Populating chapter grid for book:", book.long_name);
    chapterGridTitle.textContent = `${book.long_name}`; // Use the main title element for the chapter grid view
    // const chaptersContainer = document.getElementById('chaptersContainer'); // If you have a specific inner container
    chapterGrid.innerHTML = ''; // Clear previous chapters

    if (!activeDbs.primary || !book) {
        chapterGrid.innerHTML = '<p>No book selected or database not loaded.</p>';
        return;
    }

    const primaryDb = activeDbs.primary;
    try {
        // Handle Introduction "Chapter"
        const introStmt = primaryDb.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
        introStmt.bind([book.book_number]);
        if (introStmt.step() && introStmt.getAsObject().introduction) { // Check if introduction actually exists
            const introItem = document.createElement('div');
            introItem.classList.add('grid-item');
            introItem.innerHTML = `<span class="chapter-number">Intro</span>`; // No verse count for intro
            introItem.title = `Introduction to ${book.long_name}`;
            introItem.addEventListener('click', () => {
                currentChapter = 'introduction';
                currentVerse = null;
                saveLastReadPosition();
                loadChapterContent(book.book_number, 'introduction');
                showPanel(bibleContentView); // Go to reader view
                bookChapterVerseSelector.classList.add('hidden'); // Hide navigator
            });
            chapterGrid.appendChild(introItem);
        }
        introStmt.free();

        // Get all distinct chapters for the book
        const chaptersStmt = primaryDb.prepare("SELECT DISTINCT chapter FROM verses WHERE book_number = ? ORDER BY chapter ASC;");
        chaptersStmt.bind([book.book_number]);
        const chapterPromises = [];

        while (chaptersStmt.step()) {
            const chapterRow = chaptersStmt.getAsObject();
            const chapterNumber = chapterRow.chapter;

            // Create a promise to get verse count for this chapter
            const verseCountPromise = new Promise(async (resolve) => {
                let verseCount = 0;
                try {
                    const countStmt = primaryDb.prepare("SELECT COUNT(DISTINCT verse) as verse_count FROM verses WHERE book_number = ? AND chapter = ?;");
                    countStmt.bind([book.book_number, chapterNumber]);
                    if (countStmt.step()) {
                        verseCount = countStmt.getAsObject().verse_count;
                    }
                    countStmt.free();
                } catch (e) { console.error(`Error counting verses for ${book.short_name} ${chapterNumber}: ${e}`); }
                resolve({ chapterNumber, verseCount });
            });
            chapterPromises.push(verseCountPromise);
        }
        chaptersStmt.free();

        const chapterDataWithCounts = await Promise.all(chapterPromises);

        chapterDataWithCounts.forEach(({ chapterNumber, verseCount }) => {
            const chapterItem = document.createElement('div');
            chapterItem.classList.add('grid-item');
            chapterItem.innerHTML = `<span class="chapter-number">${chapterNumber}</span><span class="verse-count">${verseCount} </span>`;
            chapterItem.dataset.chapter = chapterNumber;

            chapterItem.addEventListener('click', () => {
                currentChapter = chapterNumber; // Set global currentChapter
                currentVerse = null; // Reset verse when a chapter is selected
                saveLastReadPosition();
                populateVerseGrid(book, chapterNumber); // New function
                showNavigatorView(verseGridView);
            });
            chapterGrid.appendChild(chapterItem);
        });
        console.log("Chapter grid populated for", book.long_name);

    } catch (err) {
        statusMessage.textContent = `Error loading chapters: ${err.message}`;
        statusMessage.classList.add('error');
        console.error('Error populating chapters:', err);
        chapterGrid.innerHTML = `<p class="error">Error loading chapters.</p>`;
    }
}






// --- Helper Functions (All helper/utility functions defined first) ---

function insertPartialNoteIndicatorDOM(verseEl, partialNote) {
    if (!verseEl || !partialNote || !partialNote.selectedText || typeof partialNote.selectedText !== 'string' || partialNote.selectedText.trim() === '') {
        return false; // Nothing to do
    }

    const textToFind = partialNote.selectedText;
    let replaced = false;

    // Use a TreeWalker to iterate over text nodes only
    const walker = document.createTreeWalker(verseEl, NodeFilter.SHOW_TEXT, null, false);
    let node;
    const nodesToProcess = []; // Collect nodes to avoid issues while modifying live list
    while (node = walker.nextNode()) {
        nodesToProcess.push(node);
    }

    for (const textNode of nodesToProcess) {
        if (replaced && !textToFind.includes(textNode.nodeValue)) { // Simple optimization if we only want to replace first
            // If you want to replace ALL occurrences, remove this 'replaced &&' check
            // but be aware that DOM manipulation in a loop needs care.
            // For now, let's target the first clear match.
        }

        let matchIndex = textNode.nodeValue.indexOf(textToFind);
        if (matchIndex !== -1) {
            // Found the text within this text node
            const parent = textNode.parentNode;
            if (!parent || parent.closest('.partial-note-anchor')) { // Avoid re-wrapping inside an existing anchor
                continue;
            }

            // Create the icon
            const icon = document.createElement('i');
            icon.className = 'fas fa-map-pin verse-indicator partial-note-icon'; // New distinct icon
            icon.dataset.noteId = partialNote.id;
            icon.title = `Note on: "${partialNote.selectedText.substring(0, 20)}..."`;

            // Create a wrapper span for the text and the icon to make them clickable together
            const anchorSpan = document.createElement('span');
            anchorSpan.className = 'partial-note-anchor';
            anchorSpan.dataset.noteId = partialNote.id;
            anchorSpan.title = `Note on: "${partialNote.selectedText.substring(0, 20)}..."`;

            // Split the text node
            const textBefore = textNode.nodeValue.substring(0, matchIndex);
            const matchedText = textNode.nodeValue.substring(matchIndex, matchIndex + textToFind.length);
            const textAfter = textNode.nodeValue.substring(matchIndex + textToFind.length);

            // Reconstruct: textBefore -> anchorSpan(matchedText + icon) -> textAfter
            if (textBefore) {
                parent.insertBefore(document.createTextNode(textBefore), textNode);
            }

            anchorSpan.appendChild(document.createTextNode(matchedText)); // Add the matched text to the anchor
            anchorSpan.appendChild(icon); // Add the icon to the anchor
            parent.insertBefore(anchorSpan, textNode);

            if (textAfter) {
                parent.insertBefore(document.createTextNode(textAfter), textNode);
            }

            parent.removeChild(textNode); // Remove the original combined text node
            
            replaced = true; // Mark that we've made a replacement
            console.log(`PARTIAL NOTES DOM: Inserted indicator for note ID ${partialNote.id} next to text "${textToFind}"`);
            
            // For simplicity, this replaces the first occurrence found.
            // Replacing all occurrences robustly with DOM manipulation is more complex
            // as node lists change. If 'g' flag behavior is critical, this needs expansion.
            break; // Process only the first match for this note in this verse for now
        }
    }
    return replaced;
}

function getPopupRef() {
  const popup = document.getElementById('verseActionPopup');
  return {
    versionName: popup.dataset.versionName,
    bookNumber: parseInt(popup.dataset.bookNumber),
    chapter: parseInt(popup.dataset.chapter),
    verse: parseInt(popup.dataset.verse)
  };
}

function openAppDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('BibleReaderDB', 2);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}


function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function syncScroll(scrollingElement, targetElement) {
    if (isScrollingProgrammatically) {
        return;
    }
    isScrollingProgrammatically = true;
    targetElement.scrollTop = scrollingElement.scrollTop;
    clearTimeout(scrollingElement._scrollTimeout);
    scrollingElement._scrollTimeout = setTimeout(() => {
        isScrollingProgrammatically = false;
    }, 50);
}

function showPanel(panelToShow) {
    const appContainer = document.getElementById('app-container');
    const allPanels = document.querySelectorAll('.panel'); // Get all panels

    // Add or remove the 'reader-active' class from the main app container
    if (panelToShow === contentReaderPanel) {
        appContainer.classList.add('reader-active');
    } else {
        appContainer.classList.remove('reader-active');
    }

    allPanels.forEach(panel => {
        if (panel === panelToShow) {
            panel.classList.remove('hidden');
        } else {
            panel.classList.add('hidden');
        }
    });
}

function updateViewModeDisplay() {
    if (!parallelContainer) {
        console.warn("updateViewModeDisplay: parallelContainer DOM element not found.");
        return;
    }

    if (currentViewMode === 'single') {
        parallelContainer.classList.add('single-view');
        console.log("View mode set to single.");
    } else { // Parallel view
        parallelContainer.classList.remove('single-view');
        console.log("View mode set to parallel.");
    }

    // Also update the state of our new checkbox inside the popup
    if (popupShowSecondaryToggle) {
        popupShowSecondaryToggle.checked = (currentViewMode === 'parallel');
    }
}

async function setViewMode(newMode) { // newMode will be 'single' or 'parallel'
    if (newMode === currentViewMode) return; // No change needed

    console.log("setViewMode called. New mode:", newMode);
    currentViewMode = newMode;

    saveLastReadPosition(); 
    updateViewModeDisplay(); // Updates the UI class and checkbox state
    
    if (currentBook && currentChapter) {
        // Reload content to apply view mode (e.g., show/hide secondary column)
        await loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
    }
}

function determineOtNtRanges(dbInstance) {
    try {
        const allBooks = loadedVersions[activeVersions.primary].books;
        
        let otEndBookNumber = null;
        let ntStartBookNumber = null;

        const malachi = allBooks.find(b => b.long_name.toLowerCase() === 'malachi' || b.short_name.toLowerCase() === 'mal');
        const matthew = allBooks.find(b => b.long_name.toLowerCase() === 'matthew' || b.short_name.toLowerCase() === 'matt');

        if (malachi) otEndBookNumber = malachi.book_number;
        if (matthew) ntStartBookNumber = matthew.book_number;

        if (!otEndBookNumber && allBooks.length > 39) {
            otEndBookNumber = allBooks[38].book_number;
        }
        if (!ntStartBookNumber && allBooks.length > 40) {
            ntStartBookNumber = allBooks[39].book_number;
        }
        
        const minBookNumber = allBooks.length > 0 ? allBooks[0].book_number : 1;
        const maxBookNumber = allBooks.length > 0 ? allBooks[allBooks.length - 1].book_number : 66;

        oldTestamentBookRange = { 
            start: minBookNumber, 
            end: otEndBookNumber || maxBookNumber 
        };
        newTestamentBookRange = { 
            start: ntStartBookNumber || minBookNumber,
            end: maxBookNumber 
        };

        console.log("OT Range:", oldTestamentBookRange);
        console.log("NT Range:", newTestamentBookRange);

    } catch (err) {
        console.error("Could not determine OT/NT book ranges:", err);
        oldTestamentBookRange = { start: 1, end: 66 };
        newTestamentBookRange = { start: 1, end: 66 };
    }
}

function getNextBook(currentBookNumber) {
    if (!activeVersions.primary || !loadedVersions[activeVersions.primary] || !loadedVersions[activeVersions.primary].books) {
        return null;
    }
    const books = loadedVersions[activeVersions.primary].books;
    const currentIndex = books.findIndex(b => b.book_number === currentBookNumber);
    if (currentIndex !== -1 && currentIndex < books.length - 1) {
        return books[currentIndex + 1];
    }
    return null;
}

function getPreviousBook(currentBookNumber) {
    if (!activeVersions.primary || !loadedVersions[activeVersions.primary] || !loadedVersions[activeVersions.primary].books) {
        return null;
    }
    const books = loadedVersions[activeVersions.primary].books;
    const currentIndex = books.findIndex(b => b.book_number === currentBookNumber);
    if (currentIndex > 0) {
        return books[currentIndex - 1];
    }
    return null;
}

function uint8ArrayToBase64ViaFileReader(uint8Array) {
    return new Promise((resolve, reject) => {
        const blob = new Blob([uint8Array], { type: 'application/octet-stream' });
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// --- IndexedDB Management Functions (Generic CRUD for any store) ---
document.addEventListener('mouseup', (event) => {
    // If the mouseup event originates from within one of our known interactive UI elements
    // (popups, pickers), we should not clear the selection, as the user might be
    // interacting with those elements based on a prior text selection.
    // Let their specific handlers manage selection clearing if needed.
    if (event.target.closest('#verseActionPopup') ||
        event.target.closest('#highlightColorPicker') ||
        event.target.closest('#highlightPicker') ||
        event.target.closest('.selection-modal') || // For new theme/version/commentary popups
        event.target.closest('#noteModal') ||       // For the note modal itself
        event.target.closest('#bookmarkModal')) {   // For the bookmark modal
        // console.log("MouseUp event inside an interactive UI element, not clearing global text selection here.");
        return;
    }

    const selection = window.getSelection();

    // If no selection object or no range selected, clear our tracked state
    if (!selection || selection.rangeCount === 0) {
        if (latestSelection || latestSelectedText) { // Clear only if they had values
            // console.log("[MouseUp] No selection range, clearing tracked selection.");
            latestSelection = null;
            latestSelectedText = '';
        }
        return;
    }

    const range = selection.getRangeAt(0);

    // If the selection is collapsed (it's a click, not a drag), clear our tracked state
    if (range.collapsed) {
        if (latestSelection || latestSelectedText) { // Clear only if they had values
            // console.log("[MouseUp] Collapsed selection (click), clearing tracked selection.");
            latestSelection = null;
            latestSelectedText = '';
        }
        return;
    }

    const selectedText = selection.toString().trim();

    // Try to determine if the selection is meaningfully within a verse paragraph
    let verseElement = null;
    const commonAncestor = range.commonAncestorContainer;
    if (commonAncestor) {
        // Navigate up to find the closest verse paragraph from the selection's common ancestor
        verseElement = commonAncestor.nodeType === Node.TEXT_NODE ?
            commonAncestor.parentElement.closest('.verse-paragraph') :
            commonAncestor.closest('.verse-paragraph');
    }

    // Only save the selection if actual text was selected AND it's clearly within a verse paragraph
    if (selectedText && verseElement) {
        // Further check: ensure both start and end of the selection are within the same verseElement.
        // This helps prevent capturing selections that span across multiple <p> tags or outside verses.
        const startContainerVerse = range.startContainer.nodeType === Node.TEXT_NODE ?
                                   range.startContainer.parentElement.closest('.verse-paragraph') :
                                   range.startContainer.closest('.verse-paragraph');
        const endContainerVerse = range.endContainer.nodeType === Node.TEXT_NODE ?
                                 range.endContainer.parentElement.closest('.verse-paragraph') :
                                 range.endContainer.closest('.verse-paragraph');

        if (startContainerVerse === verseElement && endContainerVerse === verseElement) {
            latestSelection = range.cloneRange(); // Store the Range object
            latestSelectedText = selectedText;    // Store the selected text string
            console.log(`[MouseUp] Text selected: "${latestSelectedText}" in verse ${verseElement.dataset.verse} of ${verseElement.dataset.versionName}`);
        } else {
            // Selection spans elements or its boundaries are not clearly within this single verse.
            // console.log("[MouseUp] Selection spans elements or invalid verse context, clearing tracked selection.");
            latestSelection = null;
            latestSelectedText = '';
        }
    } else {
        // No text selected after trim, or selection not anchored within a verse context.
        // console.log("[MouseUp] No trimmed text or not in verse context, clearing tracked selection.");
        latestSelection = null;
        latestSelectedText = '';
    }
});

function openIndexedDB() {
    return new Promise((resolve, reject) => {
        if (dbPromise && dbPromise.readyState === 'open') {
            resolve(dbPromise);
            return;
        }
        
        const request = indexedDB.open(DB_NAME, DB_VERSION);

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const oldVersion = event.oldVersion;
    console.log(`DB onupgradeneeded: Upgrading from version ${oldVersion} to ${db.version}.`);

    // Object stores for Bible and Commentary files
    if (oldVersion < 1 || !db.objectStoreNames.contains(OBJECT_STORE_NAME)) { // OBJECT_STORE_NAME = 'bibleVersions'
        console.log("DB onupgradeneeded: Creating/ensuring 'bibleVersions' store.");
        db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'versionName' });
    }
    if (oldVersion < 1 || !db.objectStoreNames.contains(COMMENTARY_STORE_NAME)) { // COMMENTARY_STORE_NAME = 'commentaryVersions'
        console.log("DB onupgradeneeded: Creating/ensuring 'commentaryVersions' store.");
        db.createObjectStore(COMMENTARY_STORE_NAME, { keyPath: 'versionName' });
    }

    // User data stores (Highlights, Notes, Bookmarks) - assume these are new for DB_VERSION = 2
    // If event.oldVersion is 0, it's a new DB, create everything.
    // If event.oldVersion is 1, it's an upgrade from v1 to v2, so create these new stores.
    if (oldVersion < 2) {
        console.log("DB onupgradeneeded: Version < 2 detected, creating user data stores and indexes.");
        if (!db.objectStoreNames.contains(HIGHLIGHTS_STORE_NAME)) {
            console.log("DB onupgradeneeded: Creating highlights store with 'byVerse' index.");
            const highlightsStore = db.createObjectStore(HIGHLIGHTS_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            highlightsStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
        } else { // Store exists, ensure index exists if upgrading from a version that might not have it
            const transaction = event.target.transaction; // Get transaction from event
            const highlightsStore = transaction.objectStore(HIGHLIGHTS_STORE_NAME);
            if (!highlightsStore.indexNames.contains('byVerse')) {
                console.log("DB onupgradeneeded: 'highlights' store exists, creating missing 'byVerse' index.");
                highlightsStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
            }
        }

        if (!db.objectStoreNames.contains(NOTES_STORE_NAME)) {
            console.log("DB onupgradeneeded: Creating notes store with 'byVerse' index.");
            const notesStore = db.createObjectStore(NOTES_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            notesStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
        } else {
            const transaction = event.target.transaction;
            const notesStore = transaction.objectStore(NOTES_STORE_NAME);
            if (!notesStore.indexNames.contains('byVerse')) {
                console.log("DB onupgradeneeded: 'notes' store exists, creating missing 'byVerse' index.");
                notesStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
            }
        }

        if (!db.objectStoreNames.contains(BOOKMARKS_STORE_NAME)) {
            console.log("DB onupgradeneeded: Creating bookmarks store with 'byVerse' and 'byCategory' indexes.");
            const bookmarksStore = db.createObjectStore(BOOKMARKS_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            bookmarksStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
            bookmarksStore.createIndex('byCategory', 'category', { unique: false });
        } else {
            const transaction = event.target.transaction;
            const bookmarksStore = transaction.objectStore(BOOKMARKS_STORE_NAME);
            if (!bookmarksStore.indexNames.contains('byVerse')) {
                console.log("DB onupgradeneeded: 'bookmarks' store exists, creating missing 'byVerse' index.");
                bookmarksStore.createIndex('byVerse', ['versionName', 'bookNumber', 'chapter', 'verse'], { unique: false });
            }
            if (!bookmarksStore.indexNames.contains('byCategory')) {
                console.log("DB onupgradeneeded: 'bookmarks' store exists, creating missing 'byCategory' index.");
                bookmarksStore.createIndex('byCategory', 'category', { unique: false });
            }
        }
    }
    console.log("DB onupgradeneeded: Schema setup process completed for version", db.version);
};

        request.onsuccess = (event) => {
            dbPromise = event.target.result;
            console.log('IndexedDB opened successfully:', dbPromise);
            resolve(dbPromise);
        };

        request.onerror = (event) => {
            console.error('IndexedDB error:', event.target.errorCode, event.target.error);
            reject(event.target.error);
        };
    });
}

// Generic put (create/update) into any IndexedDB store
async function putIndexedDB(storeName, data) { // Data object must contain keyPath (e.g., versionName or id)
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.put(data);

        request.onsuccess = () => {
            console.log(`IndexedDB (${storeName}): Saved data for key "${data.versionName || data.id}".`);
            resolve(request.result); // For auto-incremented keys, this is the new ID
        };

        request.onerror = (event) => {
            console.error(`IndexedDB (${storeName}): Error saving data for key "${data.versionName || data.id}":`, event.target.error);
            reject(event.target.error);
        };
    });
}

// Generic get from any IndexedDB store by keyPath
async function getIndexedDB(storeName, key) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.get(key);

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = (event) => {
            console.error(`IndexedDB (${storeName}): Error retrieving key "${key}":`, event.target.error);
            reject(event.target.error);
        };
    });
}

// Generic delete from any IndexedDB store by keyPath
async function deleteIndexedDB(storeName, key) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.delete(key);

        request.onsuccess = () => {
            console.log(`IndexedDB (${storeName}): Deleted key "${key}".`);
            resolve();
        };

        request.onerror = (event) => {
            console.error(`IndexedDB (${storeName}): Error deleting key "${key}":`, event.target.error);
            reject(event.target.error);
        };
    });
}

// Generic get all from any IndexedDB store (e.g., for listing)
async function getAllIndexedDB(storeName, indexName = null, query = null) {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction.objectStore(storeName);
        let req;
        if (indexName && query) {
            const index = store.index(indexName);
            req = index.getAll(query);
        } else {
            req = store.getAll();
        }

        req.onsuccess = () => resolve(req.result);
        req.onerror = (event) => {
            console.error(`IndexedDB (${storeName}): Error getting all data:`, event.target.error);
            reject(event.target.error);
        };
    });
}


// --- Persistence Functions ---

function saveLastReadPosition() {
    const position = {
        book: currentBook,
        chapter: currentChapter,
        verse: currentVerse,
        activeVersions: activeVersions,
        activeCommentary: activeCommentary,
        viewMode: currentViewMode
    };
    try {
        localStorage.setItem(LAST_READ_KEY, JSON.stringify(position));
    } catch (e) {
        console.error("Error saving last read position to localStorage:", e);
    }
}

async function saveLoadedVersionsMetadata() {
    try {
        const versionNamesInDB = Object.keys(loadedVersions);
        localStorage.setItem(LOADED_VERSIONS_STORAGE_KEY, JSON.stringify(versionNamesInDB));
    } catch (e) {
        console.error("Error saving loaded versions metadata (to localStorage):", e);
        statusMessage.textContent = 'Warning: Could not save Bible version list to local storage. They may not persist across sessions.';
        statusMessage.classList.add('error');
    }
}

async function saveLoadedCommentariesMetadata() {
    try {
        const commentaryNamesInDB = Object.keys(loadedCommentaries);
        localStorage.setItem(LOADED_COMMENTARIES_STORAGE_KEY, JSON.stringify(commentaryNamesInDB));
    } catch (e) {
        console.error("Error saving loaded commentaries metadata (to localStorage):", e);
        commentaryStatusMessage.textContent = 'Warning: Could not save Commentary list to local storage. They may not persist across sessions.';
        commentaryStatusMessage.classList.add('error');
    }
}

async function loadSavedVersionsMetadata() {
    try {
        await openIndexedDB();

        const storedVersionNames = localStorage.getItem(LOADED_VERSIONS_STORAGE_KEY);
        if (storedVersionNames) {
            const versionNames = JSON.parse(storedVersionNames);
            
            const promises = versionNames.map(async (versionName) => {
                const data = await getIndexedDB(OBJECT_STORE_NAME, versionName);
                if (data && data.fileData && data.books) {
                    loadedVersions[versionName] = {
                        fileData: data.fileData,
                        db: null,
                        books: data.books
                    };
                } else {
                    console.warn(`IndexedDB: Bible data for ${versionName} incomplete or not found, skipping.`);
                }
            });
            await Promise.all(promises);

            updateLoadedVersionsList();
            //updateVersionSelects();
            statusMessage.textContent = `Loaded ${Object.keys(loadedVersions).length} saved Bible versions metadata.`;
        } else {
            console.log("No saved Bible versions metadata in localStorage.");
        }
    } catch (e) {
        console.error("Error loading saved Bible versions metadata (from localStorage/IndexedDB):", e);
        localStorage.removeItem(LOADED_VERSIONS_STORAGE_KEY);
        statusMessage.textContent = 'Error loading saved Bibles. List cleared.';
        statusMessage.classList.add('error');
    }
}

async function loadSavedCommentariesMetadata() {
    try {
        await openIndexedDB();

        const storedCommentaryNames = localStorage.getItem(LOADED_COMMENTARIES_STORAGE_KEY);
        if (storedCommentaryNames) {
            const commentaryNames = JSON.parse(storedCommentaryNames);
            
            const promises = commentaryNames.map(async (commentaryName) => {
                const data = await getIndexedDB(COMMENTARY_STORE_NAME, commentaryName);
                if (data && data.fileData && data.metadata) {
                    loadedCommentaries[commentaryName] = {
                        fileData: data.fileData,
                        db: null,
                        metadata: data.metadata
                    };
                } else {
                    console.warn(`IndexedDB: Commentary data for ${commentaryName} incomplete or not found, skipping.`);
                }
            });
            await Promise.all(promises);

            updateLoadedCommentariesList();
//updateCommentarySelects();
            commentaryStatusMessage.textContent = `Loaded ${Object.keys(loadedCommentaries).length} saved Commentaries.`;
        } else {
            console.log("No saved Commentaries metadata in localStorage.");
        }
    } catch (e) {
        console.error("Error loading saved Commentaries metadata (from localStorage/IndexedDB):", e);
        localStorage.removeItem(LOADED_COMMENTARIES_STORAGE_KEY);
        commentaryStatusMessage.textContent = 'Error loading saved Commentaries. List cleared.';
        commentaryStatusMessage.classList.add('error');
    }
}


// --- Bible Version Management Functions ---

async function addBibleVersion() {
    console.log("AddVersionBtn clicked: addBibleVersion function started."); // New log
    const fileInput = document.getElementById('bibleFile');
    const file = fileInput.files[0];
    const versionName = versionNameInput.value.trim();

    console.log("AddVersionBtn: File selected:", file ? file.name : "No file", "Version name input:", versionName); // New log

    if (!file) {
        statusMessage.textContent = 'Please select a file.';
        statusMessage.classList.add('error');
        console.log("AddVersionBtn: No file selected. Exiting."); // New log
        return;
    }
    if (!versionName) {
        statusMessage.textContent = 'Please enter a version name.';
        statusMessage.classList.add('error');
        return;
    }
    if (loadedVersions[versionName]) {
        statusMessage.textContent = `Version "${versionName}" already loaded.`;
        statusMessage.classList.add('error');
        return;
    }

    statusMessage.textContent = `Adding ${versionName}... This might take a moment.`;
    statusMessage.classList.remove('error');

    try {
        const arrayBuffer = await readFileAsync(file);
        const uint8Array = new Uint8Array(arrayBuffer);
        const dbInstance = new SQL.Database(uint8Array);

        const bookData = [];
        const stmt = dbInstance.prepare("SELECT book_number, long_name, short_name FROM books ORDER BY book_number ASC;");
        while(stmt.step()) {
            bookData.push(stmt.getAsObject());
        }
        stmt.free();
        dbInstance.close();

        await putIndexedDB(OBJECT_STORE_NAME, { versionName: versionName, fileData: uint8Array, books: bookData });

        loadedVersions[versionName] = {
            fileData: uint8Array,
            db: null,
            books: bookData
        };

        if (activeVersions.primary) {
            determineOtNtRanges(activeDbs.primary);
        }

        await saveLoadedVersionsMetadata();
        updateLoadedVersionsList();
        //updateVersionSelects();
        if (bibleVersionSelectModal && !bibleVersionSelectModal.classList.contains('hidden')) {
            populateBibleVersionModal();
        }
        statusMessage.textContent = `Version "${versionName}" added and loaded!`;
        versionNameInput.value = '';
        bibleFileInput.value = '';

        if (!activeVersions.primary) {

            await setActiveVersion('primary', versionName);
        } else if (!activeVersions.secondary) {

            await setActiveVersion('secondary', versionName);
        }

    } catch (err) {
        console.error("Error adding version:", err);
        statusMessage.textContent = `Error adding version: ${err.message}`;
        if (err.name === 'QuotaExceededError') {
            statusMessage.textContent = 'Error: Bible file too large for browser storage quota. Please try a smaller file.';
        } else if (err.name === 'ConstraintError') {
            statusMessage.textContent = `Error: Version "${versionName}" already exists in storage. Please choose a different name.`;
        }
        statusMessage.classList.add('error');
        delete loadedVersions[versionName];
        deleteIndexedDB(OBJECT_STORE_NAME, versionName).catch(e => console.error("Failed to cleanup IDB entry:", e));
        updateLoadedVersionsList();
        if (typeof populateBibleVersionModal === "function") {
             populateBibleVersionModal();
        }
    }
}

function removeBibleVersion(versionName) {
    if (confirm(`Are you sure you want to remove "${versionName}"?`)) {
        deleteIndexedDB(OBJECT_STORE_NAME, versionName)
            .then(() => console.log(`Deleted ${versionName} from IndexedDB.`))
            .catch(err => {
                console.error(`Error deleting ${versionName} from IndexedDB:`, err);
                statusMessage.textContent = `Warning: Could not fully delete ${versionName} from storage. Error: ${err.message}`;
                statusMessage.classList.add('error');
            });

        delete loadedVersions[versionName];
        if (activeVersions.primary === versionName) activeVersions.primary = null;
        if (activeVersions.secondary === versionName) activeVersions.secondary = null;

        updateLoadedVersionsList();
        //updateVersionSelects();
        saveLastReadPosition();
        saveLoadedVersionsMetadata();


        if (!activeVersions.primary) {
            activeDbs.primary = null;
            currentBook = null;
            currentChapter = null;
            currentVerse = null;
            saveLastReadPosition();
            oldTestamentBookRange = { start: null, end: null };
            newTestamentBookRange = { start: null, end: null };

            if (Object.keys(loadedVersions).length > 0) {
                 primaryVersionSelect.value = Object.keys(loadedVersions)[0];
                 setActiveVersion('primary', primaryVersionSelect.value);
            } else {
                 showPanel(uploadPanel);
                 statusMessage.textContent = 'No primary Bible version loaded. Please add one.';
                 primaryBibleContent.innerHTML = '';
                 secondaryBibleContent.innerHTML = '';
                 primaryChapterTitle.textContent = '';
                 secondaryChapterTitle.textContent = '';
                 currentChapterDisplay.textContent = '';
                 sidebar.classList.add('hidden');
            }
        }
        if (!activeVersions.secondary) {
            activeDbs.secondary = null;
            secondaryBibleContent.innerHTML = '';
            secondaryChapterTitle.textContent = '';
        }

        if (activeVersions.primary && currentBook && currentChapter) {
            loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
        }
    }
}

async function setActiveVersion(type, versionName) {
    if (activeVersions[type] === versionName) return;

    activeVersions[type] = versionName;
    if (versionName && loadedVersions[versionName]) {
        if (!loadedVersions[versionName].db) {
            statusMessage.textContent = `Loading ${versionName} from storage...`;
            try {
                const dataFromDB = await getIndexedDB(OBJECT_STORE_NAME, versionName);
                if (dataFromDB && dataFromDB.fileData) {
                    loadedVersions[versionName].fileData = dataFromDB.fileData;
                    loadedVersions[versionName].db = new SQL.Database(dataFromDB.fileData);
                    loadedVersions[versionName].books = dataFromDB.books;
                    statusMessage.textContent = `${versionName} loaded from storage.`;
                } else {
                    throw new Error(`File data for ${versionName} not found in storage.`);
                }
            } catch (err) {
                console.error(`Error loading ${versionName} from storage:`, err);
                statusMessage.textContent = `Error: Could not load data for version "${versionName}". It might be corrupted or missing.`;
                statusMessage.classList.add('error');
                activeVersions[type] = null;
                if (type === 'primary') {
                    primaryVersionSelect.value = '';
                    showPanel(uploadPanel);
                } else {
                    secondaryVersionSelect.value = '';
                }
                return;
            }
        }
        activeDbs[type] = loadedVersions[versionName].db;
    } else {
        activeDbs[type] = null;
    }
determineOtNtRanges(activeDbs.primary); 
    if (type === 'primary' && activeVersions.secondary === versionName) {
        secondaryVersionSelect.value = '';
        activeVersions.secondary = null;
        activeDbs.secondary = null;
        secondaryBibleContent.innerHTML = '';
        secondaryChapterTitle.textContent = '';
        statusMessage.textContent = 'Secondary version cannot be the same as primary. Cleared secondary.';
    } else if (type === 'secondary' && activeVersions.primary === versionName) {
        secondaryVersionSelect.value = '';
        activeVersions.secondary = null;
        activeDbs.secondary = null;
        secondaryBibleContent.innerHTML = '';
        secondaryChapterTitle.textContent = '';
        statusMessage.textContent = 'Secondary version cannot be the same as primary. Cleared secondary.';
    }


    if (type === 'primary' && activeVersions.primary) {
        determineOtNtRanges(activeDbs.primary);
        showBooksList();
        if (currentBook && currentChapter) {
            loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
        } else {
            const primaryBooks = loadedVersions[activeVersions.primary].books;
            if (primaryBooks.length > 0) {
                currentBook = primaryBooks[0];
                currentChapter = 1;
                currentVerse = null;
                showChaptersGrid(currentBook);
            } else {
                showPanel(bookChapterVerseSelector);
            }
        }
    } else if (type === 'secondary' && activeVersions.secondary && currentBook && currentChapter) {
        loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
    } else if (!activeVersions.primary) {
        showPanel(uploadPanel);
        statusMessage.textContent = 'Please select a primary Bible version.';
        primaryBibleContent.innerHTML = '';
        secondaryBibleContent.innerHTML = '';
        primaryChapterTitle.textContent = '';
        secondaryChapterTitle.textContent = '';
        currentChapterDisplay.textContent = '';
        sidebar.classList.add('hidden');
    }
updateActiveVersionNameDisplays();
    saveLastReadPosition();
}

function updateVersionSelects() {
    const versions = Object.keys(loadedVersions);
    const createOptions = (selectElement) => {
        selectElement.innerHTML = '<option value="">-- Select --</option>';
        versions.forEach(versionName => {
            const option = document.createElement('option');
            option.value = versionName;
            option.textContent = versionName;
            selectElement.appendChild(option);
        });
    };

    createOptions(primaryVersionSelect);
    createOptions(secondaryVersionSelect);

    if (activeVersions.primary) primaryVersionSelect.value = activeVersions.primary;
    if (activeVersions.secondary) secondaryVersionSelect.value = activeVersions.secondary;
}

function updateLoadedVersionsList() {
    loadedVersionsList.innerHTML = ''; // Clear previous items
    if (Object.keys(loadedVersions).length === 0) {
        loadedVersionsList.innerHTML = '<p class="placeholder" style="text-align:center; width:100%; padding: 20px 0;">No Bible versions loaded yet.</p>';
        return;
    }
    for (const versionName in loadedVersions) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('grid-list-item'); // Class for individual item styling

        const icon = document.createElement('i');
        icon.className = 'fas fa-book-bible item-icon'; // Font Awesome Bible icon

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('item-name');
        nameSpan.textContent = versionName;
        nameSpan.title = versionName; // Show full name on hover if it's truncated

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-item-btn');
        removeBtn.title = `Remove ${versionName}`;
        removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Font Awesome trash icon

        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent any parent click listeners if itemDiv becomes clickable
            removeBibleVersion(versionName);
        });

        itemDiv.appendChild(icon);
        itemDiv.appendChild(nameSpan);
        itemDiv.appendChild(removeBtn);
        loadedVersionsList.appendChild(itemDiv);
    }
}

// --- Commentary Management Functions ---

async function addCommentary() {
    console.log("FUNCTION CALL: addCommentary() started.");
    const fileInput = document.getElementById('commentaryFile'); // Ensure this ID matches your HTML
    const nameInput = document.getElementById('commentaryNameInput'); // Ensure this ID matches

    if (!fileInput || !nameInput) {
        console.error("addCommentary: commentaryFile or commentaryNameInput element not found!");
        if (commentaryStatusMessage) { // Check if commentaryStatusMessage exists
            commentaryStatusMessage.textContent = 'Error: UI elements missing for adding commentary.';
            commentaryStatusMessage.classList.add('error');
        }
        return;
    }

    const file = fileInput.files[0];
    const commentaryName = nameInput.value.trim();

    console.log("addCommentary: File selected:", file ? file.name : "No file", "Commentary name:", `'${commentaryName}'`);

    if (!file) {
        commentaryStatusMessage.textContent = 'Please select a commentary file.';
        commentaryStatusMessage.classList.add('error');
        return;
    }
    if (!commentaryName) {
        commentaryStatusMessage.textContent = 'Please enter a commentary name.';
        commentaryStatusMessage.classList.add('error');
        return;
    }
    if (loadedCommentaries[commentaryName]) {
        commentaryStatusMessage.textContent = `Commentary "${commentaryName}" already loaded.`;
        commentaryStatusMessage.classList.add('error');
        return;
    }

    commentaryStatusMessage.textContent = `Adding ${commentaryName}... This might take a moment.`;
    commentaryStatusMessage.classList.remove('error');

    try {
        const arrayBuffer = await readFileAsync(file);
        const uint8Array = new Uint8Array(arrayBuffer);
        const dbInstance = new SQL.Database(uint8Array); // Temporary instance to read metadata

        let commentaryBookMetadata = {};
        try {
            // Attempt to read book metadata if the commentary DB has a 'books' table
            const stmt = dbInstance.prepare("SELECT book_number, long_name, short_name FROM books ORDER BY book_number ASC;");
            while(stmt.step()) {
                const row = stmt.getAsObject();
                commentaryBookMetadata[row.book_number] = { long_name: row.long_name, short_name: row.short_name };
            }
            stmt.free();
        } catch (e) {
            console.warn("Commentary DB does not have a 'books' table or structure is different. Metadata might be limited.", e);
            commentaryBookMetadata = {}; // Default to empty if not found or error
        }
        dbInstance.close(); // Close the temporary DB instance

        // Store the raw file data and metadata
        await putIndexedDB(COMMENTARY_STORE_NAME, { 
            versionName: commentaryName, // Using 'versionName' as keyPath like Bibles
            fileData: uint8Array, 
            metadata: { books: commentaryBookMetadata } 
        });

        loadedCommentaries[commentaryName] = {
            fileData: uint8Array, // Keep raw data to initialize DB when made active
            db: null,             // DB instance will be created by setActiveCommentary
            metadata: { books: commentaryBookMetadata }
        };

        await saveLoadedCommentariesMetadata(); // Update list in localStorage
        updateLoadedCommentariesList();         // Refresh the grid display in the "Manage Commentaries" panel

        // DO NOT CALL updateCommentarySelects(); - It's for the old top-bar select

        commentaryStatusMessage.textContent = `Commentary "${commentaryName}" added and loaded!`;
        nameInput.value = '';      // Clear the name input field
        fileInput.value = '';      // Clear the file input field

        // If no commentary is currently active, set the new one as active.
        if (!activeCommentary) {
            // DO NOT DO: commentarySelect.value = commentaryName; // Old select is gone
            await setActiveCommentary(commentaryName); // This is the correct way
        }

        // If the new commentary selection popup is currently open, refresh its content
        if (commentarySelectModal && !commentarySelectModal.classList.contains('hidden')) {
            populateCommentaryModal();
        }

    } catch (err) {
        console.error("Error adding commentary:", err);
        commentaryStatusMessage.textContent = `Error adding commentary: ${err.message}`;
        if (err.name === 'QuotaExceededError') {
            commentaryStatusMessage.textContent = 'Error: Commentary file too large for browser storage quota.';
        } else if (err.name === 'ConstraintError') { // This might occur if versionName is not unique for the store keyPath
            commentaryStatusMessage.textContent = `Error: Commentary "${commentaryName}" already exists in storage or key conflict.`;
        }
        commentaryStatusMessage.classList.add('error');

        delete loadedCommentaries[commentaryName]; // Clean up in-memory object
        // Attempt to clean up IndexedDB entry if save failed partway or constraint error
        deleteIndexedDB(COMMENTARY_STORE_NAME, commentaryName).catch(e => console.warn("Cleanup: Failed to delete potentially partial commentary from IDB:", e));

        updateLoadedCommentariesList(); // Refresh the list in the panel
        // Refresh popup list if open
        if (commentarySelectModal && !commentarySelectModal.classList.contains('hidden')) {
            populateCommentaryModal();
        }
    }
}

function removeCommentary(commentaryName) {
    if (confirm(`Are you sure you want to remove "${commentaryName}"?`)) {
        deleteIndexedDB(COMMENTARY_STORE_NAME, commentaryName)
            .then(() => console.log(`Deleted ${commentaryName} from IndexedDB.`))
            .catch(err => {
                console.error(`Error deleting ${commentaryName} from IndexedDB:`, err);
                commentaryStatusMessage.textContent = `Warning: Could not fully delete ${commentaryName} from storage. Error: ${err.message}`;
                commentaryStatusMessage.classList.add('error');
            });

        delete loadedCommentaries[commentaryName];
        if (activeCommentary === commentaryName) activeCommentary = null;

        updateLoadedCommentariesList();
        //updateCommentarySelects();
        saveLastReadPosition();
        saveLoadedCommentariesMetadata();

        if (!activeCommentary && currentBook && currentChapter) {
             loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
        }
    }
}

async function setActiveCommentary(commentaryName) {
    if (activeCommentary === commentaryName) {
        // If clicking the already active commentary, perhaps deselect it (set to no commentary)
        // Or if commentaryName is "" or null, then deselect.
        if (!commentaryName) { 
            console.log("Setting active commentary to None.");
        } else {
            console.log("Commentary already active:", commentaryName);
            return; // No change needed if already active and not deselecting
        }
    }

    activeCommentary = commentaryName || null; // Set to null if empty string passed
    activeCommentaryDb = null; // Reset DB instance first

    if (activeCommentary && loadedCommentaries[activeCommentary]) {
        const commentaryData = loadedCommentaries[activeCommentary];
        if (!commentaryData.db) { // If DB not yet initialized for this session
            if (commentaryStatusMessage) commentaryStatusMessage.textContent = `Loading ${activeCommentary} from storage...`;
            try {
                // fileData should have been loaded by loadSavedCommentariesMetadata or addCommentary
                if (commentaryData.fileData) {
                    commentaryData.db = new SQL.Database(commentaryData.fileData);
                    if (commentaryStatusMessage) commentaryStatusMessage.textContent = `${activeCommentary} loaded.`;
                } else {
                    // Attempt to re-fetch from IndexedDB if fileData is missing in memory
                    const dataFromDB = await getIndexedDB(COMMENTARY_STORE_NAME, activeCommentary);
                    if (dataFromDB && dataFromDB.fileData) {
                        commentaryData.fileData = dataFromDB.fileData;
                        commentaryData.db = new SQL.Database(dataFromDB.fileData);
                        if (!commentaryData.metadata && dataFromDB.metadata) { // Also restore metadata if missing
                             commentaryData.metadata = dataFromDB.metadata;
                        }
                        if (commentaryStatusMessage) commentaryStatusMessage.textContent = `${activeCommentary} loaded from storage.`;
                    } else {
                         throw new Error(`File data for ${activeCommentary} not found in memory or storage.`);
                    }
                }
            } catch (err) {
                console.error(`Error initializing DB for commentary ${activeCommentary}:`, err);
                if (commentaryStatusMessage) {
                    commentaryStatusMessage.textContent = `Error: Could not load DB for commentary "${activeCommentary}".`;
                    commentaryStatusMessage.classList.add('error');
                }
                activeCommentary = null; // Failed to load, so no active commentary
                // No old commentarySelect.value = ''; to worry about
                return; // Exit
            }
        }
        activeCommentaryDb = commentaryData.db;
    }

    // DO NOT DO: if (commentarySelect) commentarySelect.value = activeCommentary || ''; // Old top-bar select is gone
    // The new UI (popup) will reflect the activeCommentary when populateCommentaryModal() is called.

    saveLastReadPosition(); // Save the new active commentary choice
    // Reload content to show/hide commentary links
    if (currentBook && currentChapter) {
        loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
    }
    console.log("Active commentary set to:", activeCommentary);
}

function updateCommentarySelects() {
	const allOption = document.createElement('option');
allOption.value = '__all__';
allOption.textContent = 'All';
commentarySelect.appendChild(allOption);
document.getElementById('multiCommentaryToggle').addEventListener('change', (e) => {
  const useAll = e.target.checked;

  if (currentBook && currentChapter) {
    loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
  }
});
    const commentaries = Object.keys(loadedCommentaries);
    commentarySelect.innerHTML = '<option value="">-- Select Commentary --</option>';
    commentaries.forEach(commentaryName => {
        const option = document.createElement('option');
        option.value = commentaryName;
        option.textContent = commentaryName;
        commentarySelect.appendChild(option);
    });
    if (activeCommentary) commentarySelect.value = activeCommentary;
}

function updateLoadedCommentariesList() {
    loadedCommentariesList.innerHTML = ''; // Clear previous items
    if (Object.keys(loadedCommentaries).length === 0) {
        loadedCommentariesList.innerHTML = '<p class="placeholder" style="text-align:center; width:100%; padding: 20px 0;">No commentaries loaded yet.</p>';
        return;
    }
    for (const commentaryName in loadedCommentaries) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('grid-list-item');

        const icon = document.createElement('i');
        icon.className = 'fas fa-comments item-icon'; // Font Awesome comments icon for commentaries

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('item-name');
        nameSpan.textContent = commentaryName;
        nameSpan.title = commentaryName;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-item-btn');
        removeBtn.title = `Remove ${commentaryName}`;
        removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeCommentary(commentaryName);
        });

        itemDiv.appendChild(icon);
        itemDiv.appendChild(nameSpan);
        itemDiv.appendChild(removeBtn);
        loadedCommentariesList.appendChild(itemDiv);
    }
}


// --- Navigation Grids Functions ---

function showBooksList() {
    bookList.innerHTML = '<ul></ul>';
    const ul = bookList.querySelector('ul');

    if (!activeVersions.primary || !loadedVersions[activeVersions.primary] || !loadedVersions[activeVersions.primary].books) {
        ul.innerHTML = '<li>No primary version loaded.</li>';
        return;
    }

    loadedVersions[activeVersions.primary].books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.short_name;
        li.title = book.long_name;
        if (currentBook && currentBook.book_number === book.book_number) {
            li.classList.add('selected');
        }
        li.addEventListener('click', () => {
            const prevSelected = bookList.querySelector('li.selected');
            if (prevSelected) prevSelected.classList.remove('selected');
            li.classList.add('selected');

            currentBook = book;
            currentChapter = null;
            currentVerse = null;
            saveLastReadPosition();
            showChaptersGrid(currentBook);
        });
        ul.appendChild(li);
    });
}

async function showChaptersGrid(book) {
    showPanel(bookChapterVerseSelector);
    if (bookGridView) bookGridView.classList.add('hidden');
    if (chapterGridView) chapterGridView.classList.remove('hidden'); 
    if (verseGridView) verseGridView.classList.add('hidden');

    if (!chapterGridTitle || !chapterGrid) {
        console.error("showChaptersGrid: chapterGridTitle or chapterGrid element not found!");
        return;
    }

    chapterGridTitle.textContent = book.long_name; // Set the title
    chapterGrid.innerHTML = ''; // Clear #chapterGrid directly, as it's the new container

    if (!activeDbs.primary || !book) {
        chapterGrid.innerHTML = '<p class="placeholder">No book selected or primary database not loaded.</p>'; // Set placeholder in #chapterGrid
        return;
    }

    const primaryDb = activeDbs.primary;
    try {
        // Handle Introduction "Chapter"
        const introStmt = primaryDb.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
        introStmt.bind([book.book_number]);
        if (introStmt.step() && introStmt.getAsObject().introduction) {
            const introItem = document.createElement('div');
            introItem.classList.add('grid-item'); // Use new professional styling class
            introItem.innerHTML = `<span class="chapter-number">Intro</span>`;
            introItem.title = `Introduction to ${book.long_name}`;
            introItem.addEventListener('click', () => {
                currentChapter = 'introduction';
                currentVerse = null;
                saveLastReadPosition();
                loadChapterContent(book.book_number, 'introduction');
                showPanel(bibleContentView);
                if (bookChapterVerseSelector) bookChapterVerseSelector.classList.add('hidden');
            });
            chapterGrid.appendChild(introItem);
        }
        introStmt.free();

        // Get all distinct chapters for the book
        const chaptersStmt = primaryDb.prepare("SELECT DISTINCT chapter FROM verses WHERE book_number = ? ORDER BY chapter ASC;");
        chaptersStmt.bind([book.book_number]);
        const chapterPromises = [];

        while (chaptersStmt.step()) {
            const chapterRow = chaptersStmt.getAsObject();
            const chapterNumber = chapterRow.chapter;

            const verseCountPromise = new Promise(async (resolve) => {
                let verseCount = 0;
                try {
                    const countStmt = primaryDb.prepare("SELECT COUNT(DISTINCT verse) as verse_count FROM verses WHERE book_number = ? AND chapter = ?;");
                    countStmt.bind([book.book_number, chapterNumber]);
                    if (countStmt.step()) {
                        verseCount = countStmt.getAsObject().verse_count;
                    }
                    countStmt.free();
                } catch (e) { console.error(`Error counting verses for ${book.short_name} ${chapterNumber}: ${e}`); }
                resolve({ chapterNumber, verseCount });
            });
            chapterPromises.push(verseCountPromise);
        }
        chaptersStmt.free();

        const chapterDataWithCounts = await Promise.all(chapterPromises);

        chapterDataWithCounts.forEach(({ chapterNumber, verseCount }) => {
            const chapterItem = document.createElement('div');
            chapterItem.classList.add('grid-item'); // Use new professional styling class
            // Add new structure for chapter number and verse count
            chapterItem.innerHTML = `<span class="chapter-number">${chapterNumber}</span><span class="verse-count">${verseCount} </span>`;
            chapterItem.dataset.chapter = chapterNumber;

            chapterItem.addEventListener('click', () => {
                currentChapter = chapterNumber;
                currentVerse = null;
                saveLastReadPosition();
                // When a chapter is clicked, show the verse grid view
                if (typeof populateVerseGrid === "function") { // Check if new function exists
                    populateVerseGrid(book, currentChapter);
                    showNavigatorView(verseGridView); // Show the verse grid view
                } else {
                    console.error("populateVerseGrid function not found.");
                    // Fallback or load content directly if verse grid is not part of this old flow
                    loadChapterContent(book.book_number, currentChapter);
                }
            });
            chapterGrid.appendChild(chapterItem); // Append directly to #chapterGrid
        });
        console.log("showChaptersGrid: Chapters populated for", book.long_name);

    } catch (err) {
        statusMessage.textContent = `Error loading chapters in showChaptersGrid: ${err.message}`;
        statusMessage.classList.add('error');
        console.error('Error populating chapters in showChaptersGrid:', err);
        if (chapterGrid) chapterGrid.innerHTML = `<p class="error">Error loading chapters.</p>`;
    }
}

async function populateVerseGrid(book, chapter) { // Takes book object, chapter number
    console.log("Populating verse grid for:", book.long_name, chapter);
    verseGridTitle.textContent = `${book.long_name} Chapter ${chapter}`;
    // const versesContainer = document.getElementById('versesContainer'); // If you have specific inner container
    verseGrid.innerHTML = ''; // Clear previous verses

    if (!activeDbs.primary || !book || !chapter) {
        verseGrid.innerHTML = '<p>No chapter selected or database not loaded.</p>';
        return;
    }

    try {
        const primaryDb = activeDbs.primary;
        const stmt = primaryDb.prepare("SELECT DISTINCT verse FROM verses WHERE book_number = ? AND chapter = ? ORDER BY verse ASC;");
        stmt.bind([book.book_number, chapter]);

        while (stmt.step()) {
            const row = stmt.getAsObject();
            if (row.verse < 1 || row.verse !== Math.floor(row.verse)) { // Skip non-integer or <1 verses if any
                continue;
            }

            const verseItem = document.createElement('div');
            verseItem.classList.add('grid-item');
            verseItem.textContent = row.verse;
            verseItem.dataset.verse = row.verse;

            verseItem.addEventListener('click', () => {
                currentVerse = row.verse; // Set global currentVerse
                saveLastReadPosition();
                loadChapterContent(book.book_number, chapter, currentVerse);
                showPanel(bibleContentView); // Switch to reader view
                bookChapterVerseSelector.classList.add('hidden'); // Hide navigator
            });
            verseGrid.appendChild(verseItem);
        }
        stmt.free();
        console.log("Verse grid populated for", book.long_name, chapter);
    } catch (err) {
        statusMessage.textContent = `Error loading verses: ${err.message}`;
        statusMessage.classList.add('error');
        console.error('Error populating verses:', err);
        verseGrid.innerHTML = `<p class="error">Error loading verses.</p>`;
    }
}



// --- Chapter Navigation Functions ---
async function navigateChapter(direction) {
    if (!currentBook || !currentChapter || !activeDbs.primary) {
        statusMessage.textContent = 'Please select a book and chapter first.';
        statusMessage.classList.add('error');
        return;
    }

    const primaryDb = activeDbs.primary;
    try {
        const stmt = primaryDb.prepare("SELECT DISTINCT chapter FROM verses WHERE book_number = ? ORDER BY chapter ASC;");
        stmt.bind([currentBook.book_number]);
        const chapters = [];
        while (stmt.step()) {
            chapters.push(stmt.getAsObject().chapter);
        }
        stmt.free();

        let nextChapterToLoad = null;

        if (direction === 1) { // Next
            if (currentChapter === 'introduction') {
                nextChapterToLoad = 1;
            } else {
                const currentIndex = chapters.indexOf(currentChapter);
                if (currentIndex !== -1 && currentIndex < chapters.length - 1) {
                    nextChapterToLoad = chapters[currentIndex + 1];
                } else {
                    const nextBook = getNextBook(currentBook.book_number);
                    if (nextBook) {
                        currentBook = nextBook;
                        nextChapterToLoad = 1;
                        statusMessage.textContent = `Navigating to ${currentBook.long_name} Chapter 1.`;
                        showBooksList();
                    } else {
                        statusMessage.textContent = 'You are at the last chapter of the last book!';
                        statusMessage.classList.remove('error');
                        return;
                    }
                }
            }
        } else { // Previous
            if (currentChapter === 1) {
                const introStmt = primaryDb.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
                introStmt.bind([currentBook.book_number]);
                if (introStmt.step()) {
                    nextChapterToLoad = 'introduction';
                    statusMessage.textContent = `Navigating to Introduction of ${currentBook.long_name}.`;
                } else {
                    const prevBook = getPreviousBook(currentBook.book_number);
                    if (prevBook) {
                        currentBook = prevBook;
                        const prevBookChaptersStmt = primaryDb.prepare("SELECT MAX(chapter) AS last_chapter FROM verses WHERE book_number = ?;");
                        prevBookChaptersStmt.bind([prevBook.book_number]);
                        if (prevBookChaptersStmt.step()) {
                            nextChapterToLoad = prevBookChaptersStmt.getAsObject().last_chapter;
                        } else {
                            nextChapterToLoad = 1;
                        }
                        prevBookChaptersStmt.free();
                        statusMessage.textContent = `Navigating to ${currentBook.long_name} Chapter ${nextChapterToLoad}.`;
                        showBooksList();
                    } else {
                        statusMessage.textContent = 'You are at the first chapter of the first book!';
                        statusMessage.classList.remove('error');
                        return;
                    }
                }
                introStmt.free();
            } else if (currentChapter === 'introduction') {
                statusMessage.textContent = 'You are at the introduction, cannot go back further.';
                statusMessage.classList.remove('error');
                return;
            } else {
                const currentIndex = chapters.indexOf(currentChapter);
                if (currentIndex > 0) {
                    nextChapterToLoad = chapters[currentIndex - 1];
                } else {
                    statusMessage.textContent = 'You are at the first chapter of this book!';
                    statusMessage.classList.remove('error');
                    return;
                }
            }
        }

        if (nextChapterToLoad !== null) {
            currentChapter = nextChapterToLoad;
            currentVerse = null;
            saveLastReadPosition();
            loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
        }

    } catch (err) {
        statusMessage.textContent = `Navigation error: ${err.message}`;
        statusMessage.classList.add('error');
        console.error('Navigation error:', err);
    }
}


// --- Content Loading Functions ---
// loadVersionContent is a helper for loadChapterContent
async function loadVersionContent(versionType) {
    const dbInstance = activeDbs[versionType];
    const contentDiv = versionType === 'primary' ? primaryBibleContent : secondaryBibleContent;
    const chapterTitleEl = versionType === 'primary' ? primaryChapterTitle : secondaryChapterTitle;
    const processingVersionName = activeVersions[versionType];

    // Ensure currentBook and currentChapter (global state) are valid
    if (!currentBook || currentChapter === null || currentChapter === undefined) {
        if (contentDiv) contentDiv.innerHTML = '<p class="placeholder">Book or chapter not selected.</p>';
        if (chapterTitleEl) chapterTitleEl.textContent = processingVersionName || (versionType === 'primary' ? 'Primary Version' : 'Secondary Version');
        return;
    }

    const processingBookNumber = currentBook.book_number;
    const processingChapterString = currentChapter; // This is defined early and reliably
    const selectedVerseToScrollTo = currentVerse;

    if (!dbInstance) {
        if (contentDiv) contentDiv.innerHTML = `<p class="placeholder">Bible version '${processingVersionName || versionType}' not loaded.</p>`;
        if (chapterTitleEl) chapterTitleEl.textContent = `No ${processingVersionName || versionType} version selected`;
        return;
    }

    // Define bookDisplayNameForDisplay early for use in titles and error messages
    let bookDisplayNameForDisplay = `Book ${processingBookNumber}`;
    const bookMeta = loadedVersions[processingVersionName]?.books.find(b => b.book_number === processingBookNumber);
    if (bookMeta) {
        bookDisplayNameForDisplay = bookMeta.short_name;
    }

    // Define chapterDisplayString early as well, derived from processingChapterString
    let chapterDisplayString = processingChapterString === 'introduction' ? 'Introduction' : processingChapterString.toString();


    try {
        let contentHtml = '';
        // Construct the main title for the column based on view mode
    let columnTitleText = ""; 
    // NEW: Determine if the title element for this column should be visible
    let isTitleVisible = false;

    if (processingVersionName) { // Only proceed if there's a version for this column
        if (currentViewMode === 'single') {
            // In single view, only the primary column is shown,
            // and we want to HIDE its title.
            if (versionType === 'primary') {
                isTitleVisible = false; // Primary title hidden in single view
                columnTitleText = ''; // No text needed if hidden
            }
            // Secondary column is hidden by CSS in single view, so its title state here is less critical
        } else { // Parallel view
            if (versionType === 'primary') {
                // Primary column title is also hidden in parallel view (as per previous request)
                isTitleVisible = false;
                columnTitleText = '';
            } else { // Secondary column in parallel view
                // ONLY the secondary column title is visible in parallel view
                isTitleVisible = true;
                columnTitleText = `${processingVersionName}: ${bookDisplayNameForDisplay} ${chapterDisplayString}`;
            }
        }
    } else { // No version for this column
         isTitleVisible = false;
         columnTitleText = ''; // Or 'No version selected' if it were to be shown
    }

    // Apply visibility and text content
    if (chapterTitleEl) {
        if (isTitleVisible) {
            chapterTitleEl.classList.remove('hidden');
            chapterTitleEl.textContent = '';
        } else {
            chapterTitleEl.classList.add('hidden');
            chapterTitleEl.textContent = ''; // Clear text if hidden
        }
    }
        
        let allHighlightsInChapter = [];
        let notesInChapter = [];
        let bookmarksInChapter = [];
        let numericChapterForQuery;

        if (processingChapterString === 'introduction') {
            const introStmt = dbInstance.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
            introStmt.bind([processingBookNumber]);
            if (introStmt.step()) {
                contentHtml += `<div class="introduction-text">${introStmt.getAsObject().introduction}</div>`;
            } else {
                contentHtml += `<p class="placeholder">No introduction found for this book in ${processingVersionName}.</p>`;
            }
            introStmt.free();
        } else {
            numericChapterForQuery = parseInt(processingChapterString);
            if (isNaN(numericChapterForQuery)) {
                throw new Error(`Invalid chapter specified (was NaN): ${processingChapterString}`);
            }

            const verseStmt = dbInstance.prepare("SELECT verse, text FROM verses WHERE book_number = ? AND chapter = ? ORDER BY verse ASC;");
            verseStmt.bind([processingBookNumber, numericChapterForQuery]);
            const verses = [];
            while (verseStmt.step()) { verses.push(verseStmt.getAsObject()); }
            verseStmt.free();
            console.log(`loadVersionContent: Fetched ${verses.length} verses for ${processingVersionName} Ch ${numericChapterForQuery}.`);

            const storyStmt = dbInstance.prepare("SELECT verse, title FROM stories WHERE book_number = ? AND chapter = ? ORDER BY verse ASC, order_if_several ASC;");
            storyStmt.bind([processingBookNumber, numericChapterForQuery]);
            const subheadings = [];
            while (storyStmt.step()) { subheadings.push(storyStmt.getAsObject()); }
            storyStmt.free();

            const rangeQuery = IDBKeyRange.bound(
                [processingVersionName, processingBookNumber, numericChapterForQuery, 0],
                [processingVersionName, processingBookNumber, numericChapterForQuery, Infinity]
            );

            [allHighlightsInChapter, notesInChapter, bookmarksInChapter] = await Promise.all([
                getAllIndexedDB(HIGHLIGHTS_STORE_NAME, 'byVerse', rangeQuery),
                getAllIndexedDB(NOTES_STORE_NAME, 'byVerse', rangeQuery),
                getAllIndexedDB(BOOKMARKS_STORE_NAME, 'byVerse', rangeQuery)
            ]);
            
            const wholeVerseHighlights = allHighlightsInChapter.filter(h => !h.text);
            const wholeVerseHighlightsMap = new Map(wholeVerseHighlights.map(h => [h.verse, h]));
            
            const wholeVerseNotes = notesInChapter.filter(n => !n.selectedText);
            const wholeVerseNotesMap = new Map(wholeVerseNotes.map(n => [n.verse, n])); 
            
            const bookmarksMap = new Map(bookmarksInChapter.map(b => [b.verse, b]));

            let contentItems = [];
            let currentSubheadingIndex = 0;
            while (currentSubheadingIndex < subheadings.length && subheadings[currentSubheadingIndex].verse < 1) {
                contentItems.push({ type: 'subheading', text: subheadings[currentSubheadingIndex].title });
                currentSubheadingIndex++;
            }
            verses.forEach(verse => {
                while (currentSubheadingIndex < subheadings.length && subheadings[currentSubheadingIndex].verse <= verse.verse) {
                    contentItems.push({ type: 'subheading', text: subheadings[currentSubheadingIndex].title });
                    currentSubheadingIndex++;
                }
                contentItems.push({ type: 'verse', verse_number: verse.verse, text: verse.text });
            });
            while (currentSubheadingIndex < subheadings.length) {
                contentItems.push({ type: 'subheading', text: subheadings[currentSubheadingIndex].title });
                currentSubheadingIndex++;
            }

            for (const item of contentItems) {
                if (item.type === 'subheading') {
                    contentHtml += `<h4 class="subheading">${item.text}</h4>`;
                } else { 
                    const { verse_number, text: verseText } = item;
                    const selectedClass = selectedVerseToScrollTo === verse_number ? 'selected-verse' : '';
                    const wholeVerseHighlightClass = wholeVerseHighlightsMap.has(verse_number) ? `highlight-${wholeVerseHighlightsMap.get(verse_number).color}` : '';
                    
                    let commentaryLinksHtml = '';
                    const multiMode = document.getElementById('multiCommentaryToggle')?.checked;
                    const currentBookForCommentary = processingBookNumber;
                    const currentChapterForCommentary = numericChapterForQuery;

if (multiMode) {
    for (const commentaryName in loadedCommentaries) {
        const commDb = loadedCommentaries[commentaryName]?.db;
        if (!commDb) continue;
        try {
            // Querying for a specific verse
            const stmt = commDb.prepare(
                "SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;"
            );
            // Bind with the correctly scoped variables for the current verse
            stmt.bind([currentBookForCommentary, currentChapterForCommentary, verse_number]);
            if (stmt.step() && stmt.getAsObject().count > 0) {
                commentaryLinksHtml += `<span class="commentary-link" data-book-number="${currentBookForCommentary}" data-chapter="${currentChapterForCommentary}" data-verse="${verse_number}" data-commentary-name="${commentaryName}" title="View ${commentaryName} commentary">(${commentaryName.substring(0,3)})</span> `;
            }
            stmt.free();
        } catch (err) { console.warn(`Multi-commentary DB error for ${commentaryName} (B:${currentBookForCommentary} C:${currentChapterForCommentary} V:${verse_number})`, err); }
    }
} else if (activeCommentaryDb && activeCommentary) {
    try {
        const stmt = activeCommentaryDb.prepare(
            "SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;"
        );
        stmt.bind([currentBookForCommentary, currentChapterForCommentary, verse_number]);
        if (stmt.step() && stmt.getAsObject().count > 0) {
            commentaryLinksHtml = `<span class="commentary-link" data-book-number="${currentBookForCommentary}" data-chapter="${currentChapterForCommentary}" data-verse="${verse_number}" data-commentary-name="${activeCommentary}" title="View ${activeCommentary} on this verse">(${activeCommentary.substring(0,3)})</span> `;
        }
        stmt.free();
    } catch (err) { console.warn(`Single commentary DB issue for "${activeCommentary}" (B:${currentBookForCommentary} C:${currentChapterForCommentary} V:${verse_number})`, err); }
}

                    let indicatorIcons = '';
                    const hasAnyPartialNoteForThisVerse = notesInChapter.some(n => 
                        n.verse === verse_number && n.selectedText && 
                        n.versionName === processingVersionName &&
                        n.bookNumber === processingBookNumber &&
                        n.chapter === numericChapterForQuery
                    );

                    if (wholeVerseNotesMap.has(verse_number) && !hasAnyPartialNoteForThisVerse) { 
                        indicatorIcons += `<i class="fas fa-sticky-note verse-indicator note-indicator" data-book-number="${processingBookNumber}" data-chapter="${numericChapterForQuery}" data-verse="${verse_number}" data-version-name="${processingVersionName}" title="Verse Note exists"></i>`;
                    }
                    if (bookmarksMap.has(verse_number)) {
                        indicatorIcons += `<i class="fas fa-bookmark verse-indicator bookmark-indicator" data-book-number="${processingBookNumber}" data-chapter="${numericChapterForQuery}" data-verse="${verse_number}" data-version-name="${processingVersionName}" title="Bookmarked"></i>`;
                    }

                    contentHtml += `<p id="${versionType}-verse-${verse_number}"
                        class="verse-paragraph ${selectedClass} ${wholeVerseHighlightClass}"
                        data-book-number="${processingBookNumber}"
                        data-chapter="${numericChapterForQuery}"
                        data-verse="${verse_number}"
                        data-version-name="${processingVersionName}">
                        <span class="verse-number">${verse_number}.</span>
                        ${verseText} ${commentaryLinksHtml}${indicatorIcons}
                    </p>`;
                }
            }
        } 

        if (contentDiv) contentDiv.innerHTML = contentHtml.trim() === '' ? `<p class="placeholder">No content found for this chapter.</p>` : contentHtml;
        
        console.log(`loadVersionContent: Base HTML set for ${versionType}. Ready to layer partials.`);
        
		// Restore Partial Highlights
        if (processingChapterString !== 'introduction' && allHighlightsInChapter && allHighlightsInChapter.length > 0) {
            const partialHighlights = allHighlightsInChapter.filter(h => h.text && h.text.trim() !== '');
            if (partialHighlights.length > 0) {
                const highlightsByVerse = new Map();
                partialHighlights.forEach(h => {
                    if (!highlightsByVerse.has(h.verse)) {
                        highlightsByVerse.set(h.verse, []);
                    }
                    highlightsByVerse.get(h.verse).push(h);
                });

                highlightsByVerse.forEach((highlightsForVerse, verseNumber) => {
                    const verseEl = contentDiv.querySelector(`#${versionType}-verse-${verseNumber}`);
                    if (verseEl) {
                        restorePartialHighlightsDOM(verseEl, highlightsForVerse);
                    }
                });
            }
        }

        if (processingChapterString !== 'introduction' && allHighlightsInChapter && Array.isArray(allHighlightsInChapter)) {
            const numericCh_hl = parseInt(processingChapterString);
            try {
                // ... (Partial Highlight Restoration Logic using processingVersionName, processingBookNumber, numericCh_hl) ...
            } catch (err) { console.error(`Error restoring partial highlights for ${versionType} (${processingVersionName}), Ch ${processingChapterString}:`, err); }
        } else { console.log("PARTIAL HIGHLIGHTS: Skipped or no highlights to process."); }

        if (processingChapterString !== 'introduction' && notesInChapter && Array.isArray(notesInChapter)) {
            const numericCh_notes = parseInt(processingChapterString);
            console.log(`PARTIAL NOTES: Attempting to render DOM indicators. Chapter: ${numericCh_notes}. notesInChapter count: ${notesInChapter?.length}`);
            try {
                const partialNotesToDisplay = notesInChapter.filter(n =>
                    n.selectedText && typeof n.selectedText === 'string' && n.selectedText.trim() !== '' &&
                    n.versionName === processingVersionName &&
                    n.bookNumber === processingBookNumber &&
                    n.chapter === numericCh_notes
                );
                console.log(`PARTIAL NOTES: Found ${partialNotesToDisplay.length} partial notes to process for DOM insertion.`);
                if (partialNotesToDisplay.length > 0) {
                    for (const note of partialNotesToDisplay) {
                        const verseEl = contentDiv.querySelector(
                            `p#${versionType}-verse-${note.verse}[data-book-number="${note.bookNumber}"][data-chapter="${note.chapter}"][data-version-name="${note.versionName}"]`
                        );

                if (verseEl) {
                    insertPartialNoteIndicatorDOM(verseEl, note);
                } else {
                    console.warn(`PARTIAL NOTES: verseEl NOT found for note ID ${note.id} (Verse ${note.verse}) during DOM insertion.`);
                }
            }
        }
    } catch (err) {
        console.error(`Error in PARTIAL NOTE DOM insertion block for ${versionType} (${processingVersionName}), Ch ${processingChapterString}:`, err);
        statusMessage.textContent = `Error rendering note indicators: ${err.message}`;
        statusMessage.classList.add('error');
    }
} else {
    console.log(`PARTIAL NOTES: Skipped DOM insertion or no notesInChapter. Intro: ${processingChapterString === 'introduction'}, notesInChapter valid: ${notesInChapter && Array.isArray(notesInChapter)}`);
}

    } catch (err) {
        // Use variables guaranteed to be defined at this scope for error logging
        console.error(`Critical error in loadVersionContent for ${processingVersionName || 'Unknown Version'} ${bookDisplayNameForDisplay || `Book ${processingBookNumber}`}:${processingChapterString}:`, err);
        if(contentDiv) contentDiv.innerHTML = `<p class="placeholder error">An error occurred loading content. Details: ${err.message}</p>`;
        if(chapterTitleEl) chapterTitleEl.textContent = `${processingVersionName || 'Version'} (Error)`;
    }
    console.log(`loadVersionContent END for ${versionType}`);
}


async function loadChapterContent(bookNumber, chapterOrSpecial, selectedVerse = null) {
    showPanel(bibleContentView);

    currentChapterDisplay.textContent = `${currentBook.short_name} ${chapterOrSpecial === 'introduction' ? 'Intro' : chapterOrSpecial}`;

    primaryBibleContent.innerHTML = '<p class="placeholder">Loading primary content...</p>';
    secondaryBibleContent.innerHTML = '<p class="placeholder">Loading secondary content...</p>';
    primaryChapterTitle.textContent = '';
    secondaryChapterTitle.textContent = '';

    const loadPromises = [loadVersionContent('primary')];
    if (currentViewMode === 'parallel') {
        loadPromises.push(loadVersionContent('secondary'));
    }

    await Promise.all(loadPromises);

    if (selectedVerse !== null) {
        requestAnimationFrame(() => {
            const targetVerseElement = document.getElementById(`primary-verse-${selectedVerse}`);
            if (targetVerseElement) {
                primaryBibleContent.scrollTop = targetVerseElement.offsetTop - (primaryBibleContent.offsetHeight / 3);
            }
        });
    }

    // Add event listener for Introduction links after content is loaded
    primaryBibleContent.querySelectorAll('.introduction-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const bookNum = parseInt(event.target.dataset.bookNumber);
            const version = event.target.dataset.version;
            const bookLongName = event.target.dataset.bookLongName;
            showIntroductionPopup(bookNum, version, bookLongName);
        });
    });

	primaryBibleContent.querySelectorAll('.generate-image-indicator').forEach(icon => {
    icon.addEventListener('click', async (event) => {
        event.stopPropagation();
        const { bookNumber, chapter, verse, versionName } = event.currentTarget.dataset;
        await generateVerseImage({ bookNumber: +bookNumber, chapter: +chapter, verse: +verse, versionName });
		});
	});
    // NEW: Add event listener for Commentary links after content is loaded
    primaryBibleContent.querySelectorAll('.commentary-link').forEach(link => {
const newLink = link.cloneNode(true);
link.parentNode.replaceChild(newLink, link);
        newLink.addEventListener('click', (event) => {
            event.preventDefault();
			event.stopPropagation();
            const bookNum = parseInt(event.target.dataset.bookNumber);
            const chapterNum = parseInt(event.target.dataset.chapter);
            const verseNum = parseInt(event.target.dataset.verse);
            const commentaryName = event.target.dataset.commentaryName;
            showCommentaryPopup(bookNum, chapterNum, verseNum, commentaryName);
        });
    });

    // NEW: Add event listener for verse clicks (for highlight/note/bookmark actions)
    // Using a delegated event listener on the parent container
    const primaryContentDiv = primaryBibleContent; // Assuming primary is where actions happen
    primaryContentDiv.removeEventListener('click', handleVerseClick); // Remove previous to avoid duplicates
    primaryContentDiv.addEventListener('click', handleVerseClick);

    // NEW: Add event listeners for note/bookmark indicators (re-attach after content reload)
    primaryBibleContent.querySelectorAll('.note-indicator').forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent verse click handler
            const { bookNumber, chapter, verse, versionName } = event.currentTarget.dataset;
            showNoteModal({ bookNumber: parseInt(bookNumber), chapter: parseInt(chapter), verse: parseInt(verse), versionName });
        });
    });

    primaryBibleContent.querySelectorAll('.bookmark-indicator').forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent verse click handler
            const { bookNumber, chapter, verse, versionName } = event.currentTarget.dataset;
            showBookmarkModal({ bookNumber: parseInt(bookNumber), chapter: parseInt(chapter), verse: parseInt(verse), versionName });
        });
    });
	
	primaryBibleContent.querySelectorAll('.share-indicator').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent verse click handler
        const { bookNumber, chapter, verse, versionName } = event.currentTarget.dataset;
        shareVerse({ bookNumber: parseInt(bookNumber), chapter: parseInt(chapter), verse: parseInt(verse), versionName });
    });
});

	primaryBibleContent.querySelectorAll('.commentary-link').forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			const { bookNumber, chapter, verse, commentaryName } = event.target.dataset;
			showCommentaryPopup(+bookNumber, +chapter, +verse, commentaryName);
		});
	});
	
	primaryBibleContent.addEventListener('click', (e) => {
		const verse = e.target.closest('.verse-paragraph');
		if (!verse) return;

		const dataset = verse.dataset;
		const ref = {
			versionName: dataset.versionName,
			bookNumber: +dataset.bookNumber,
			chapter: +dataset.chapter,
			verse: +dataset.verse
		};

		if (e.target.classList.contains('note-indicator')) {
			showNoteModal(ref);
		} else if (e.target.classList.contains('bookmark-indicator')) {
			showBookmarkModal(ref);
		} else if (e.target.classList.contains('share-indicator')) {
			shareVerse(ref);
		} else if (e.target.classList.contains('highlight-indicator')) {
			showHighlightPicker(verse);
		}
	});


    statusMessage.textContent = `${currentBook.long_name} ${chapterOrSpecial === 'introduction' ? 'Introduction' : 'Chapter ' + chapterOrSpecial} loaded.`;
}

// NEW: Handle Verse Clicks (for selecting for highlight/note/bookmark)
function handleVerseClick(event) {
    const verseEl = event.target.closest('.verse-paragraph');
    if (!verseEl) return;

    const verseId = `${verseEl.dataset.bookNumber}-${verseEl.dataset.chapter}-${verseEl.dataset.verse}`;

    const isCtrl = event.ctrlKey || event.metaKey;
    const isShift = event.shiftKey;

    if (isCtrl) {
        if (selectedVerses.has(verseId)) {
            selectedVerses.delete(verseId);
            verseEl.classList.remove('selected-verse');
        } else {
            selectedVerses.add(verseId);
            verseEl.classList.add('selected-verse');
        }
        lastClickedVerseId = verseId;
    } else if (isShift && lastClickedVerseId) {
        const allVerses = [...document.querySelectorAll('.verse-paragraph')];
        const startIndex = allVerses.findIndex(v => getVerseId(v) === lastClickedVerseId);
        const endIndex = allVerses.findIndex(v => getVerseId(v) === verseId);
        const [from, to] = [startIndex, endIndex].sort((a, b) => a - b);

        for (let i = from; i <= to; i++) {
            const el = allVerses[i];
            const id = getVerseId(el);
            selectedVerses.add(id);
            el.classList.add('selected-verse');
        }
    } else {
        // Clear all previous
        document.querySelectorAll('.verse-paragraph.selected-verse').forEach(el => el.classList.remove('selected-verse'));
        selectedVerses.clear();

        selectedVerses.add(verseId);
        verseEl.classList.add('selected-verse');
        lastClickedVerseId = verseId;
    }

    // Position popup to the last clicked
    showVersePopup(verseEl);
}

function getVerseId(el) {
    return `${el.dataset.bookNumber}-${el.dataset.chapter}-${el.dataset.verse}`;
}



// NEW: Show/Hide Highlight Picker
function showHighlightPicker(verseElement) {
    console.log("WHOLE VERSE DEBUG: showHighlightPicker CALLED with verseElement:", verseElement);
    if (!verseElement) {
        console.error("showHighlightPicker called with null/undefined verseElement!");
        return;
    }
    // const highlightPicker = document.getElementById('highlightPicker'); // Assuming global or fetched
    const rect = verseElement.getBoundingClientRect();
    highlightPicker.style.top = `${rect.top + window.scrollY - highlightPicker.offsetHeight - 5}px`;
    highlightPicker.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (highlightPicker.offsetWidth / 2)}px`;
    
    highlightPicker.classList.remove('hidden');
    console.log("WHOLE VERSE DEBUG: highlightPicker classList after remove 'hidden':", highlightPicker.classList.toString());
    console.log("WHOLE VERSE DEBUG: highlightPicker offsetParent (to check visibility):", highlightPicker.offsetParent);

    currentHighlightVerseElement = verseElement; // Set global
    currentHighlightVerseRef = {           // Set global
        versionName: verseElement.dataset.versionName,
        bookNumber: parseInt(verseElement.dataset.bookNumber),
        chapter: parseInt(verseElement.dataset.chapter),
        verse: parseInt(verseElement.dataset.verse)
    };
    console.log("WHOLE VERSE DEBUG: currentHighlightVerseRef SET TO:", JSON.stringify(currentHighlightVerseRef));
    console.log("WHOLE VERSE DEBUG: currentHighlightVerseElement SET TO:", currentHighlightVerseElement);
}

function hideHighlightPicker() {
    // const highlightPicker = document.getElementById('highlightPicker'); // Assuming global or fetched
    if (highlightPicker && !highlightPicker.classList.contains("hidden")) {
        highlightPicker.classList.add('hidden');
        console.log("Highlight picker hidden.");
    }
    // Always clear these globals when the picker responsible for them is hidden
    currentHighlightVerseElement = null;
    currentHighlightVerseRef = null;

    // General cleanup of selection state, as any highlight action via this picker is now concluded or cancelled
    window.getSelection()?.removeAllRanges();
    latestSelection = null;
    latestSelectedText = '';
}

// --- Highlight Management ---
async function applyHighlight(color) {
    console.log("WHOLE VERSE DEBUG: applyHighlight CALLED. Color:", color, "Ref from global:", JSON.stringify(currentHighlightVerseRef));
    console.log("WHOLE VERSE DEBUG: applyHighlight - currentHighlightVerseElement value AT FUNCTION ENTRY:", currentHighlightVerseElement);

    // Use local constants to capture the state at the beginning of this specific function call
    // This prevents issues if globals are changed by other async operations or untimely event handlers.
    const elementToWorkOn = currentHighlightVerseElement;
    const refForThisAction = currentHighlightVerseRef;

    if (!refForThisAction || !elementToWorkOn) {
        console.error("WHOLE VERSE DEBUG: applyHighlight - EXITING because refForThisAction or elementToWorkOn is falsy. Ref:", refForThisAction, "Element:", elementToWorkOn);
        statusMessage.textContent = 'No verse selected for highlighting or element reference is missing.';
        statusMessage.classList.add('error');
        if (highlightPicker && !highlightPicker.classList.contains("hidden")) {
            hideHighlightPicker(); // This will nullify the globals
        }
        return;
    }

    console.log("WHOLE VERSE DEBUG: applyHighlight - Passed initial check. Element to work on is:", elementToWorkOn);

    try {
        console.log("WHOLE VERSE DEBUG: applyHighlight - About to remove classes from:", elementToWorkOn);
        elementToWorkOn.classList.remove('highlight-yellow', 'highlight-green', 'highlight-blue', 'highlight-purple', 'highlight-pink', 'highlight-orange');
    } catch (e) {
        console.error("WHOLE VERSE DEBUG: applyHighlight - ERROR during classList.remove. Element was:", elementToWorkOn, "Error:", e);
        statusMessage.textContent = 'Error modifying verse style.';
        statusMessage.classList.add('error');
        hideHighlightPicker(); // Hide picker on error
        return;
    }

    const { versionName, bookNumber, chapter, verse } = refForThisAction;
    const bookMeta = loadedVersions[versionName]?.books.find(b => b.book_number === bookNumber);
    const bookShortNameForStatus = bookMeta?.short_name || `Book ${bookNumber}`;


    try {
        const allVerseHighlights = await getAllIndexedDB(HIGHLIGHTS_STORE_NAME, 'byVerse', IDBKeyRange.only([versionName, bookNumber, chapter, verse]));
        const existingHighlight = allVerseHighlights.find(h => !h.text); // Find existing WHOLE verse highlight

        if (color === 'clear') {
            if (existingHighlight) {
                console.log("WHOLE VERSE DEBUG: applyHighlight - Clearing existing whole verse highlight ID:", existingHighlight.id);
                await deleteIndexedDB(HIGHLIGHTS_STORE_NAME, existingHighlight.id);
                statusMessage.textContent = `Highlight cleared for ${bookShortNameForStatus} ${chapter}:${verse}.`;
            } else {
                statusMessage.textContent = `No whole-verse highlight to clear for ${bookShortNameForStatus} ${chapter}:${verse}.`;
            }
        } else {
            console.log("WHOLE VERSE DEBUG: applyHighlight - About to add class:", `highlight-${color}`, "to element:", elementToWorkOn);
            elementToWorkOn.classList.add(`highlight-${color}`);
            
            const newHighlightData = { // This is a WHOLE verse highlight, so NO 'text' property
                versionName,
                bookNumber,
                chapter,
                verse,
                color,
                timestamp: Date.now()
            };

            if (existingHighlight) {
                newHighlightData.id = existingHighlight.id; // Preserve ID for update
                console.log("WHOLE VERSE DEBUG: applyHighlight - Updating existing whole verse highlight ID:", existingHighlight.id, "with data:", JSON.stringify(newHighlightData));
            } else {
                console.log("WHOLE VERSE DEBUG: applyHighlight - Adding new whole verse highlight with data:", JSON.stringify(newHighlightData));
            }
            await putIndexedDB(HIGHLIGHTS_STORE_NAME, newHighlightData);
            statusMessage.textContent = `Highlight ${existingHighlight ? 'updated' : 'added'} for ${bookShortNameForStatus} ${chapter}:${verse}.`;
        }
    } catch (dbError) {
        console.error("WHOLE VERSE DEBUG: applyHighlight - Database error:", dbError);
        statusMessage.textContent = 'Database error saving highlight.';
        statusMessage.classList.add('error');
    }

    hideHighlightPicker(); // This will nullify the global currentHighlightVerseElement and currentHighlightVerseRef
    updateUserDataPanel('highlights');
    if (currentBook && currentChapter) { // currentBook and currentChapter are global navigation state
        // Reload content using the details from refForThisAction to ensure context is correct
        loadChapterContent(refForThisAction.bookNumber, refForThisAction.chapter, refForThisAction.verse);
    }
}

// --- Note Management ---
// Modify existing showNoteModal
async function showNoteModal(verseRef, initialSelectedText = null) {
    console.log("showNoteModal called with verseRef:", verseRef, "and initialSelectedText:", initialSelectedText);
    currentNoteVerseRef = verseRef; // For save/delete context

    let noteModalTitleText = `${loadedVersions[verseRef.versionName]?.books.find(b => b.book_number === verseRef.bookNumber)?.short_name || `Book ${verseRef.bookNumber}`} ${verseRef.chapter}:${verseRef.verse} (${verseRef.versionName})`;
    let existingNoteToLoad = null;
    let isContextForPartialNote = !!initialSelectedText;
    let textToWhichThisNoteApplies = initialSelectedText;

    if (isContextForPartialNote) {
        noteModalTitleText = `Note for text: "${initialSelectedText.substring(0, 30)}${initialSelectedText.length > 30 ? '...' : ''}" (in ${noteModalTitleText})`;
        const notesForVerse = await getAllIndexedDB(NOTES_STORE_NAME, 'byVerse', IDBKeyRange.only([verseRef.versionName, verseRef.bookNumber, verseRef.chapter, verseRef.verse]));
        existingNoteToLoad = notesForVerse.find(n => n.selectedText === initialSelectedText);
        console.log("showNoteModal: Mode: New/Existing PARTIAL. Text:", initialSelectedText, "Found existing:", existingNoteToLoad);
    } else {
        const notesForVerse = await getAllIndexedDB(NOTES_STORE_NAME, 'byVerse', IDBKeyRange.only([verseRef.versionName, verseRef.bookNumber, verseRef.chapter, verseRef.verse]));
        existingNoteToLoad = notesForVerse.find(n => !n.selectedText);
        console.log("showNoteModal: Mode: New/Existing WHOLE verse. Found existing:", existingNoteToLoad);
    }

    noteModalTitle.textContent = noteModalTitleText;
    noteTextarea.value = ''; // Clear previous
    noteTextarea.dataset.id = '';
    noteTextarea.dataset.selectedText = textToWhichThisNoteApplies || '';

    noteTextarea.disabled = false;   // Explicitly enable
    noteTextarea.readOnly = false; // Explicitly make writable
    console.log("showNoteModal: Textarea attributes set: disabled=false, readOnly=false");

    deleteNoteBtn.classList.add('hidden');

    if (existingNoteToLoad) {
        noteTextarea.value = existingNoteToLoad.noteText;
        noteTextarea.dataset.id = existingNoteToLoad.id;
        noteTextarea.dataset.selectedText = existingNoteToLoad.selectedText || '';
        textToWhichThisNoteApplies = existingNoteToLoad.selectedText;
        if (existingNoteToLoad.selectedText && !initialSelectedText) {
            const originalVerseContextTitle = `${loadedVersions[verseRef.versionName]?.books.find(b => b.book_number === verseRef.bookNumber)?.short_name || `Book ${verseRef.bookNumber}`} ${verseRef.chapter}:${verseRef.verse} (${verseRef.versionName})`;
            noteModalTitle.textContent = `Note for text: "${existingNoteToLoad.selectedText.substring(0, 30)}${existingNoteToLoad.selectedText.length > 30 ? '...' : ''}" (in ${originalVerseContextTitle})`;
        }
        deleteNoteBtn.classList.remove('hidden');
    }
    
    noteModal.classList.remove('hidden');
history.pushState({modal: 'note'}, "Note", "#noteOpen"); 
    
    // Try to ensure other potential overlays are hidden
    if (highlightPicker && !highlightPicker.classList.contains('hidden')) {
        highlightPicker.classList.add('hidden');
    }
    if (highlightColorPicker && !highlightColorPicker.classList.contains('hidden')) {
        highlightColorPicker.classList.add('hidden');
    }
    if (verseActionPopup && !verseActionPopup.classList.contains('hidden')) {
        verseActionPopup.classList.add('hidden');
    }

    noteTextarea.focus(); // Attempt to focus
    setTimeout(() => { // Check focus after a brief moment
        if (document.activeElement === noteTextarea) {
            console.log("showNoteModal: noteTextarea IS FOCUSED after timeout.");
        } else {
            console.warn("showNoteModal: noteTextarea FAILED TO RETAIN focus. Active element is:", document.activeElement);
        }
    }, 100); // Increased timeout slightly

    latestSelection = null;
    latestSelectedText = '';
}

// When opening an existing partial note (e.g., from a list or clicking an indicator):
// You'll need a function like this:
async function openExistingNoteById(noteId) {
    console.log("openExistingNoteById called for ID:", noteId);
    const note = await getIndexedDB(NOTES_STORE_NAME, noteId);
    if (note) {
        currentNoteVerseRef = { // Set global context for save/delete
            versionName: note.versionName,
            bookNumber: note.bookNumber,
            chapter: note.chapter,
            verse: note.verse
        };

        let titleBase = `${loadedVersions[note.versionName]?.books.find(b=>b.book_number === note.bookNumber)?.short_name || `Book ${note.bookNumber}`} ${note.chapter}:${note.verse} (${note.versionName})`;
        if (note.selectedText) {
            noteModalTitle.textContent = `Note for text: "${note.selectedText.substring(0, 30)}${note.selectedText.length > 30 ? '...' : ''}" (in ${titleBase})`;
        } else {
            noteModalTitle.textContent = `Note for ${titleBase}`;
        }

        noteTextarea.value = note.noteText;
        noteTextarea.dataset.id = note.id;
        noteTextarea.dataset.selectedText = note.selectedText || ''; // Crucial for saveNote to know context

        noteTextarea.disabled = false;
        noteTextarea.readOnly = false;
        deleteNoteBtn.classList.remove('hidden');

        noteModal.classList.remove('hidden');
        noteTextarea.focus();
        setTimeout(() => {
            if (document.activeElement === noteTextarea) {
                console.log("openExistingNoteById: noteTextarea successfully focused.");
            } else {
                console.warn("openExistingNoteById: noteTextarea FAILED to focus. Active element is:", document.activeElement);
            }
        }, 10);

        // Clear any lingering global selection as we are opening an existing note
        latestSelection = null;
        latestSelectedText = '';
    } else {
        console.error("Could not find note with ID:", noteId);
        statusMessage.textContent = "Error: Could not load the selected note.";
        statusMessage.classList.add('error');
    }
}

// Modify existing saveNote
async function saveNote() {
    if (!currentNoteVerseRef || !noteTextarea.value.trim()) {
        statusMessage.textContent = 'Note cannot be empty.';
        statusMessage.classList.add('error');
        return;
    }
    // currentNoteVerseRef holds {versionName, bookNumber, chapter, verse}
    const { versionName, bookNumber, chapter, verse } = currentNoteVerseRef;
    const noteText = noteTextarea.value.trim();
    const noteId = noteTextarea.dataset.id ? parseInt(noteTextarea.dataset.id) : null;
    const selectedTextForNote = noteTextarea.dataset.selectedText || null; // Retrieve from modal context
    console.log("SAVENOTE: Retrieved noteTextarea.dataset.selectedText:", noteTextarea.dataset.selectedText);
    console.log("SAVENOTE: selectedTextForNote that will be saved to DB:", selectedTextForNote);

    let noteData = {
        versionName,
        bookNumber,
        chapter,
        verse,
        noteText,
        selectedText: selectedTextForNote, // Save null if it's a whole verse note
        timestamp: Date.now()
    };
    console.log("SAVENOTE: Full noteData object being saved:", JSON.stringify(noteData, null, 2));

    try {
        let action = "added";
        if (noteId) { // Update existing note
            noteData.id = noteId;
            await putIndexedDB(NOTES_STORE_NAME, noteData);
            action = "updated";
        } else { // Add new note
            const savedId = await putIndexedDB(NOTES_STORE_NAME, noteData); // ID will be auto-generated
            noteData.id = savedId; // For logging
        }
        console.log(`Note ${action}:`, noteData);
        statusMessage.textContent = `Note ${action} for ${loadedVersions[versionName]?.books.find(b=>b.book_number === bookNumber)?.short_name || 'Book'} ${chapter}:${verse}${selectedTextForNote ? ' (on selection)' : ''}.`;
        
        noteModal.classList.add('hidden');
 if (location.hash === "#noteOpen") history.back(); 
        loadChapterContent(bookNumber, chapter, verse); // Reload chapter to update indicators
        updateUserDataPanel('notes'); // Refresh notes list
    } catch (e) {
        console.error('Error saving note:', e);
        statusMessage.textContent = 'Error saving note.';
        statusMessage.classList.add('error');
    }
}

async function deleteNote() {
    if (!currentNoteVerseRef || !confirm('Are you sure you want to delete this note?')) {
        return;
    }
    const noteId = noteTextarea.dataset.id; // Get ID to delete
    if (!noteId) {
        statusMessage.textContent = 'No note to delete.';
        statusMessage.classList.add('error');
        return;
    }
    const { bookNumber, chapter } = currentNoteVerseRef; // Needed for reloading chapter

    try {
        await deleteIndexedDB(NOTES_STORE_NAME, parseInt(noteId)); // Delete by ID
        statusMessage.textContent = `Note deleted for ${currentBook.short_name} ${chapter}:${currentNoteVerseRef.verse}.`;
        noteModal.classList.add('hidden'); // Hide modal
 if (location.hash === "#noteOpen") history.back(); 
        loadChapterContent(bookNumber, chapter); // Reload chapter to update indicator
        updateUserDataPanel('notes'); // Refresh notes list
    } catch (e) {
        console.error('Error deleting note:', e);
        statusMessage.textContent = 'Error deleting note.';
        statusMessage.classList.add('error');
    }
}

function cancelNote() {
    noteModal.classList.add('hidden');
 if (location.hash === "#noteOpen") history.back(); 
}


// --- Bookmark Management ---
async function showBookmarkModal(verseRef) {
    currentBookmarkVerseRef = verseRef; // Store verse reference
    bookmarkModalTitle.textContent = `Bookmark for ${currentBook.short_name} ${verseRef.chapter}:${verseRef.verse} (${verseRef.versionName})`;
    bookmarkCategoryInput.value = ''; // Clear category input
    bookmarkCategoryInput.dataset.id = ''; // Clear ID for new bookmark
    deleteBookmarkBtn.classList.add('hidden'); // Hide delete by default

    await populateBookmarkCategoriesDatalist(); // Populate existing categories for datalist

    // Load existing bookmark
    const existingBookmark = (await getAllIndexedDB(BOOKMARKS_STORE_NAME, 'byVerse', IDBKeyRange.only([verseRef.versionName, verseRef.bookNumber, verseRef.chapter, verseRef.verse])))[0];
    if (existingBookmark) {
        bookmarkCategoryInput.value = existingBookmark.category;
        bookmarkCategoryInput.dataset.id = existingBookmark.id; // Store existing ID
        deleteBookmarkBtn.classList.remove('hidden'); // Show delete button
    }
    bookmarkModal.classList.remove('hidden'); // Show modal
    bookmarkCategoryInput.focus(); // Focus on input
}

async function populateBookmarkCategoriesDatalist() {
    const categories = new Set();
    const allBookmarks = await getAllIndexedDB(BOOKMARKS_STORE_NAME);
    allBookmarks.forEach(b => categories.add(b.category));

    bookmarkCategoriesDatalist.innerHTML = '';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        bookmarkCategoriesDatalist.appendChild(option);
    });
}

async function saveBookmark() {
    if (!currentBookmarkVerseRef || !bookmarkCategoryInput.value.trim()) {
        statusMessage.textContent = 'Category cannot be empty.';
        statusMessage.classList.add('error');
        return;
    }
    const { versionName, bookNumber, chapter, verse } = currentBookmarkVerseRef;
    const category = bookmarkCategoryInput.value.trim();
    const bookmarkId = bookmarkCategoryInput.dataset.id;

    let bookmarkData = { versionName, bookNumber, chapter, verse, category, timestamp: Date.now() };

    try {
        if (bookmarkId) { // Update existing
            bookmarkData.id = parseInt(bookmarkId);
            await putIndexedDB(BOOKMARKS_STORE_NAME, bookmarkData);
            statusMessage.textContent = `Bookmark updated for ${currentBook.short_name} ${chapter}:${verse}.`;
        } else { // Add new
            await putIndexedDB(BOOKMARKS_STORE_NAME, bookmarkData);
            statusMessage.textContent = `Bookmark added for ${currentBook.short_name} ${chapter}:${verse}.`;
        }
        bookmarkModal.classList.add('hidden');
        loadChapterContent(bookNumber, chapter); // Reload chapter to update indicator
        updateUserDataPanel('bookmarks'); // Refresh bookmarks list
    } catch (e) {
        console.error('Error saving bookmark:', e);
        statusMessage.textContent = 'Error saving bookmark.';
        statusMessage.classList.add('error');
    }
}

async function deleteBookmark() {
    if (!currentBookmarkVerseRef || !confirm('Are you sure you want to delete this bookmark?')) {
        return;
    }
    const bookmarkId = bookmarkCategoryInput.dataset.id;
    if (!bookmarkId) {
        statusMessage.textContent = 'No bookmark to delete.';
        statusMessage.classList.add('error');
        return;
    }
    const { bookNumber, chapter } = currentBookmarkVerseRef;

    try {
        await deleteIndexedDB(BOOKMARKS_STORE_NAME, parseInt(bookmarkId));
        statusMessage.textContent = `Bookmark deleted for ${currentBook.short_name} ${chapter}:${currentBookmarkVerseRef.verse}.`;
        bookmarkModal.classList.add('hidden');
        loadChapterContent(bookNumber, chapter); // Reload chapter to update indicator
        updateUserDataPanel('bookmarks'); // Refresh bookmarks list
    } catch (e) {
        console.error('Error deleting bookmark:', e);
        statusMessage.textContent = 'Error deleting bookmark.';
        statusMessage.classList.add('error');
    }
}

function cancelBookmark() {
    bookmarkModal.classList.add('hidden');
}


// --- User Data Panel Management (Listing Highlights, Notes, Bookmarks) ---
async function updateUserDataPanel(activeTab = 'highlights') {
    // Hide all tab contents
    highlightsTab.classList.add('hidden');
    notesTab.classList.add('hidden');
    bookmarksTab.classList.add('hidden');

    // Remove 'active' class from all tab buttons
    userDataTabButtons.forEach(btn => btn.classList.remove('active'));

    // Display chosen tab and set active button
    if (activeTab === 'highlights') {
        highlightsTab.classList.remove('hidden');
        userDataTabButtons[0].classList.add('active');
        await populateHighlightsList();
    } else if (activeTab === 'notes') {
        notesTab.classList.remove('hidden');
        userDataTabButtons[1].classList.add('active');
        await populateNotesList();
    } else if (activeTab === 'bookmarks') {
        bookmarksTab.classList.remove('hidden');
        userDataTabButtons[2].classList.add('active');
        await populateBookmarkCategoriesSelect(); // Populate categories first
        await populateBookmarksList();
    }
}

function createVerseCardDOM({
    bookName, chapter, verse, text, versionName, theme, footer,
    font, align, logoDataUrl, bgImageUrl, textSize, textColor
}) {
        const bgStyles = { // Predefined theme backgrounds
        sunset: 'linear-gradient(135deg, #fceabb, #f8b500)',
        midnight: 'linear-gradient(135deg, #232526, #414345)', // Dark gradient
        aqua: 'linear-gradient(135deg, #00c6ff, #0072ff)',
        custom: 'linear-gradient(135deg, #ffffff, #dddddd)' // Default for 'custom' or if theme not found
    };
    const textColors = { // Corresponding text colors for predefined themes
        sunset: '#333333',
        midnight: '#ffffff', // Light text for dark background
        aqua: '#ffffff',     // Light text for aqua background
        custom: '#333333'    // Default text for custom
    };

    const fontSizes = { small: '16px', medium: '20px', large: '26px' }; // Use absolute px for canvas consistency
    const lineHeights = { small: '1.5', medium: '1.6', large: '1.7' };

    const container = document.createElement('div');
    // This ID is for the temporary element used by html2canvas, not for final display
    container.id = 'tempVerseCardForCanvas'; 

    // Style for rendering. This element will be appended to body, rendered, then removed.
    // Its size here dictates the canvas size. Let's aim for a good default render size.
    // For responsiveness, the *canvas image* will be scaled by CSS in the preview container.
    container.style.width = '600px'; // Render at a decent resolution
    container.style.padding = '40px';
    container.style.background = bgImageUrl ? `url(${bgImageUrl}) center/cover no-repeat` : (bgStyles[theme] || bgStyles.sunset);
    container.style.color = textColor || (theme === 'midnight' ? '#ffffff' : '#333333'); // Adjust default text for theme
    container.style.borderRadius = '15px'; // Slightly less
    container.style.fontFamily = font || '"Georgia", serif';
    container.style.textAlign = align || 'center';
    container.style.boxSizing = 'border-box';
    // These styles are for the *source* of the canvas image
    // The actual displayed canvas inside #verseImagePreviewContainer will be responsive via CSS

    // To ensure it's rendered off-screen but with correct dimensions for html2canvas:
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';


    container.innerHTML = `
        <h2 style="margin-top:0; margin-bottom: 25px; font-size: ${parseFloat(fontSizes[textSize]) * 1.3}px; line-height: 1.3; color: inherit;">${bookName} ${chapter}:${verse}</h2>
        <p style="font-size: ${fontSizes[textSize]}; line-height: ${lineHeights[textSize]}; margin-bottom: 25px; color: inherit; white-space: pre-wrap;">"${text}"</p>
        <p style="font-style: italic; font-size: ${parseFloat(fontSizes[textSize]) * 0.8}px; color: inherit; opacity: 0.9;">${versionName}</p>
        ${logoDataUrl ? `<img src="${logoDataUrl}" style="max-height: 50px; max-width: 150px; margin: 20px auto; display: block;">` : ''}
        <p style="font-size: ${parseFloat(fontSizes[textSize]) * 0.7}px; margin-top: 30px; color: inherit; opacity: 0.8;">${footer || ''}</p>
    `;
    return container;
}



let lastVerseCardData = null;

async function generateVerseImage(verseRef) {
    const db = activeDbs.primary;
    const book = loadedVersions[verseRef.versionName]?.books.find(b => b.book_number === verseRef.bookNumber);
    const bookName = book?.long_name || `Book ${verseRef.bookNumber}`;
    let verseText = '';

    try {
        const stmt = db.prepare("SELECT text FROM verses WHERE book_number = ? AND chapter = ? AND verse = ?;");
        stmt.bind([verseRef.bookNumber, verseRef.chapter, verseRef.verse]);
        if (stmt.step()) {
            verseText = stmt.getAsObject().text;
        }
        stmt.free();
    } catch (err) {
        alert("Failed to load verse text.");
        return;
    }

    // Save the verse data to be reused
    lastVerseCardData = {
        bookName,
        chapter: verseRef.chapter,
        verse: verseRef.verse,
        text: verseText,
        versionName: verseRef.versionName
    };

    // Generate initial preview
    await updateVerseImagePreview();
    document.getElementById('verseImageModal').classList.remove('hidden');
}

async function updateVerseImagePreview() {
    if (!lastVerseCardData) return;

    const theme = document.getElementById('verseCardTheme')?.value || 'sunset';
    const footer = document.getElementById('verseCardFooter')?.value?.trim() || 'Shared from Parallel Bible App';
    const font = document.getElementById('verseCardFont')?.value || 'Georgia';
    const align = document.getElementById('verseCardAlign')?.value || 'center';

	const textSize = document.getElementById('verseCardTextSize')?.value || 'medium';
	const textColor = document.getElementById('verseCardTextColor')?.value || '#333333';

    const logoFile = document.getElementById('verseCardLogo')?.files[0];
    const bgFile = document.getElementById('verseCardBgImage')?.files[0];

    const logoDataUrl = logoFile ? await readFileAsDataURL(logoFile) : null;
    const bgImageUrl = bgFile ? await readFileAsDataURL(bgFile) : null;
    const customTextColor = document.getElementById('verseCardTextColor')?.value;

    const cardEl = createVerseCardDOM({
        ...lastVerseCardData,
        theme, footer, font, align, logoDataUrl, bgImageUrl,
		textSize, textColor,
        bgImageUrl: bgFile ? await readFileAsDataURL(bgFile) : null, // Custom background image
        textColor: (theme === 'custom' || bgFile || logoFile) ? customTextColor : null // Use custom text color if theme is custom OR if custom bg/logo is used 
    });

    document.body.appendChild(cardEl);
    const canvas = await html2canvas(cardEl, { backgroundColor: null });
    document.body.removeChild(cardEl);

    lastGeneratedCanvas = canvas;

    const previewContainer = document.getElementById('verseImagePreviewContainer');
    previewContainer.innerHTML = '';
    previewContainer.appendChild(canvas);
}


async function populateHighlightsList() {
    highlightsList.innerHTML = '<p class="placeholder">Loading highlights...</p>';
    try {
        const allHighlights = await getAllIndexedDB(HIGHLIGHTS_STORE_NAME);
        if (!allHighlights || allHighlights.length === 0) {
            highlightsList.innerHTML = '<p class="placeholder">No highlights added yet.</p>';
            return;
        }
        highlightsList.innerHTML = '';

        // Sort highlights, handling potentially undefined properties gracefully
        allHighlights.sort((a, b) => {
            // Provide default empty strings for versionNames if they are undefined
            const aVersionName = a.versionName || '';
            const bVersionName = b.versionName || '';

            if (aVersionName !== bVersionName) {
                return aVersionName.localeCompare(bVersionName);
            }

            // Provide default 0 for numeric fields if they are undefined or not numbers
            const aBookNumber = (typeof a.bookNumber === 'number' && !isNaN(a.bookNumber)) ? a.bookNumber : 0;
            const bBookNumber = (typeof b.bookNumber === 'number' && !isNaN(b.bookNumber)) ? b.bookNumber : 0;
            if (aBookNumber !== bBookNumber) {
                return aBookNumber - bBookNumber;
            }

            const aChapter = (typeof a.chapter === 'number' && !isNaN(a.chapter)) ? a.chapter : 0;
            const bChapter = (typeof b.chapter === 'number' && !isNaN(b.chapter)) ? b.chapter : 0;
            if (aChapter !== bChapter) {
                return aChapter - bChapter;
            }

            const aVerse = (typeof a.verse === 'number' && !isNaN(a.verse)) ? a.verse : 0;
            const bVerse = (typeof b.verse === 'number' && !isNaN(b.verse)) ? b.verse : 0;
            return aVerse - bVerse;
        });

        allHighlights.forEach(h => {
            const li = document.createElement('li');
            
            let bookShortName = `Book ${h.bookNumber || 'N/A'}`;
            // Check if h.versionName is defined before trying to access loadedVersions[h.versionName]
            if (h.versionName && loadedVersions[h.versionName] && loadedVersions[h.versionName].books) {
                const bookInfo = loadedVersions[h.versionName].books.find(b => b.book_number === h.bookNumber);
                if (bookInfo) {
                    bookShortName = bookInfo.short_name;
                }
            }
            
            const displayVersion = h.versionName || 'Unknown Version';
            const displayChapter = h.chapter !== undefined ? h.chapter : 'N/A';
            const displayVerse = h.verse !== undefined ? h.verse : 'N/A';
            const displayColor = h.color || 'default'; // Use 'default' if color is missing

            li.innerHTML = `<span>${displayVersion}: ${bookShortName} ${displayChapter}:${displayVerse}</span>
                            <span class="color-swatch ${displayColor}" style="background-color: ${displayColor === 'default' ? 'grey' : displayColor}; width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span>`;
            
            // Safely set dataset attributes
            if (h.versionName) li.dataset.versionName = h.versionName;
            if (h.bookNumber !== undefined) li.dataset.bookNumber = h.bookNumber;
            if (h.chapter !== undefined) li.dataset.chapter = h.chapter;
            if (h.verse !== undefined) li.dataset.verse = h.verse;
            
            li.addEventListener('click', () => {
                // Ensure all necessary data is present before navigating
                if (li.dataset.versionName && li.dataset.bookNumber && li.dataset.chapter && li.dataset.verse) {
                    navigateToUserItem(li.dataset);
                } else {
                    console.warn("Cannot navigate to highlight, missing data:", h);
                    statusMessage.textContent = "Cannot navigate to this highlight, data is incomplete.";
                    statusMessage.classList.add('error');
                }
            });
            highlightsList.appendChild(li);
        });
    } catch (e) {
        console.error("Error populating highlights list:", e);
        highlightsList.innerHTML = '<p class="placeholder error">Error loading highlights.</p>';
    }
}

async function populateNotesList() {
    notesList.innerHTML = '<p class="placeholder">Loading notes...</p>';
    try {
        const allNotes = await getAllIndexedDB(NOTES_STORE_NAME);
        if (allNotes.length === 0) {
            notesList.innerHTML = '<p class="placeholder">No notes added yet.</p>';
            return;
        }
        notesList.innerHTML = '';
        allNotes.sort((a, b) => b.timestamp - a.timestamp); // Sort by most recent first

        allNotes.forEach(n => {
            const li = document.createElement('li');
            const notePreview = n.noteText.length > 50 ? n.noteText.substring(0, 50) + '...' : n.noteText;
            li.innerHTML = `<span>${n.versionName}: ${loadedVersions[n.versionName]?.books.find(b => b.book_number === n.bookNumber)?.short_name || `Book ${n.bookNumber}`} ${n.chapter}:${n.verse}</span>
                            <span class="meta">${notePreview}</span>`;
            li.dataset.versionName = n.versionName;
            li.dataset.bookNumber = n.bookNumber;
            li.dataset.chapter = n.chapter;
            li.dataset.verse = n.verse;
            li.addEventListener('click', () => {
                navigateToUserItem(li.dataset);
                showNoteModal(li.dataset); // Also open modal for editing
            });
            notesList.appendChild(li);
        });
    } catch (e) {
        console.error("Error populating notes list:", e);
        notesList.innerHTML = '<p class="placeholder error">Error loading notes.</p>';
    }
}

async function populateBookmarkCategoriesSelect() {
    const categories = new Set();
    const allBookmarks = await getAllIndexedDB(BOOKMARKS_STORE_NAME);
    allBookmarks.forEach(b => categories.add(b.category));

    bookmarkCategorySelect.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        bookmarkCategorySelect.appendChild(option);
    });
}

async function populateBookmarksList() {
    bookmarksList.innerHTML = '<p class="placeholder">Loading bookmarks...</p>';
    try {
        const selectedCategory = bookmarkCategorySelect.value;
        let bookmarksToDisplay;

        if (selectedCategory === 'all') {
            bookmarksToDisplay = await getAllIndexedDB(BOOKMARKS_STORE_NAME);
        } else {
            bookmarksToDisplay = await getAllIndexedDB(BOOKMARKS_STORE_NAME, 'byCategory', selectedCategory);
        }

        if (bookmarksToDisplay.length === 0) {
            bookmarksList.innerHTML = '<p class="placeholder">No bookmarks added yet for this category.</p>';
            return;
        }
        bookmarksList.innerHTML = '';
        bookmarksToDisplay.sort((a, b) => { // Sort by most recent first
            if (a.category !== b.category) return a.category.localeCompare(b.category);
            if (a.versionName !== b.versionName) return a.versionName.localeCompare(b.versionName);
            if (a.bookNumber !== b.bookNumber) return a.bookNumber - b.bookNumber;
            if (a.chapter !== b.chapter) return a.chapter - b.chapter;
            return a.verse - b.verse;
        });

        bookmarksToDisplay.forEach(b => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${b.versionName}: ${loadedVersions[b.versionName]?.books.find(b => b.book_number === b.bookNumber)?.short_name || `Book ${b.bookNumber}`} ${b.chapter}:${b.verse}</span>
                            <span class="category-tag">${b.category}</span>`;
            li.dataset.versionName = b.versionName;
            li.dataset.bookNumber = b.bookNumber;
            li.dataset.chapter = b.chapter;
            li.dataset.verse = b.verse;
            li.addEventListener('click', () => navigateToUserItem(li.dataset));
            bookmarksList.appendChild(li);
        });
    } catch (e) {
        console.error("Error populating bookmarks list:", e);
        bookmarksList.innerHTML = '<p class="placeholder error">Error loading bookmarks.</p>';
    }
}

async function navigateToUserItem(itemRef) {
    // Set active versions if necessary
    if (activeVersions.primary !== itemRef.versionName) {
        primaryVersionSelect.value = itemRef.versionName;
        await setActiveVersion('primary', itemRef.versionName);
    }
    // Set current navigation
    currentBook = loadedVersions[itemRef.versionName].books.find(b => b.book_number === parseInt(itemRef.bookNumber));
    currentChapter = parseInt(itemRef.chapter);
    currentVerse = parseInt(itemRef.verse);
    saveLastReadPosition();
    // Load content and scroll to verse
    await loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
    showPanel(bibleContentView); // Ensure content view is shown
}

// --- Sharing Functionality ---
async function shareVerse(verseRef) {
    if (!verseRef || !activeDbs.primary || !currentBook) {
        console.warn('No verse selected to share.');
        return;
    }

    try {
        const stmt = activeDbs.primary.prepare(
            "SELECT text FROM verses WHERE book_number = ? AND chapter = ? AND verse = ?;"
        );
        stmt.bind([verseRef.bookNumber, verseRef.chapter, verseRef.verse]);
        let verseText = stmt.step() ? stmt.getAsObject().text : '';
        stmt.free();

        const fullText = `${currentBook.long_name} ${verseRef.chapter}:${verseRef.verse} (${verseRef.versionName}): ${verseText}`;
        console.log('Prepared verse text:', fullText);

        if (navigator.share) {
            console.log('Using navigator.share...');
            await navigator.share({
                title: 'Bible Verse',
                text: fullText,
                url: window.location.href
            });
            alert('Verse shared via native share!');
        } else if (navigator.clipboard?.writeText) {
            console.log('Using navigator.clipboard...');
            await navigator.clipboard.writeText(fullText);
            alert('Verse copied to clipboard!');
        } else {
            console.log('Using fallback copy method...');
            const textarea = document.createElement('textarea');
            textarea.value = fullText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Verse copied using fallback.');
        }
    } catch (err) {
        console.error('Error sharing verse:', err);
        alert('Failed to share verse: ' + err.message);
    }
}

// --- Introduction Modal Function ---
async function showIntroductionPopup(bookNumber, versionName, bookLongName) {
    introModalTitle.textContent = `Introduction to ${bookLongName} (${versionName})`;
    introModalText.innerHTML = '<p class="placeholder">Loading introduction...</p>';
    introModal.classList.remove('hidden');

    const dbInstance = loadedVersions[versionName]?.db;
    if (!dbInstance) {
        introModalText.innerHTML = '<p class="placeholder error">Error: Database not loaded for this version.</p>';
        return;
    }

    try {
        const stmt = dbInstance.prepare("SELECT introduction FROM introductions WHERE book_number = ?;");
        stmt.bind([bookNumber]);
        if (stmt.step()) {
            const row = stmt.getAsObject();
            introModalText.innerHTML = row.introduction;
        } else {
            introModalText.innerHTML = '<p class="placeholder">No introduction found for this book in this version.</p>';
        }
        stmt.free();
    } catch (err) {
        introModalText.innerHTML = `<p class="placeholder error">Error loading introduction: ${err.message}</p>`;
        console.error('Error loading introduction for popup:', err);
    }
}

// --- NEW: Commentary Modal Function ---
async function showCommentaryPopup(bookNumber, chapterNumber, verseNumber, activeName = null) {
    const modal = document.getElementById('commentaryModal');
    const title = document.getElementById('commentaryModalTitle');
    const text = document.getElementById('commentaryModalText');
    const nav = document.getElementById('commentaryModalNav');

    modal.classList.remove('hidden');
    title.textContent = `Loading...`;
    text.innerHTML = '';

    const book = currentBook || { long_name: `Book ${bookNumber}` };
    const verseLabel = `${book.long_name} ${chapterNumber}:${verseNumber}`;

    // 1. Get all loaded commentaries with content for this verse
    const availableCommentaries = [];
    for (const name in loadedCommentaries) {
        const db = loadedCommentaries[name]?.db;
        if (!db) continue;
        const stmt = db.prepare("SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;");
        stmt.bind([bookNumber, chapterNumber, verseNumber]);
        if (stmt.step() && stmt.getAsObject().count > 0) {
            availableCommentaries.push(name);
        }
        stmt.free();
    }

    if (availableCommentaries.length === 0) {
        title.textContent = `No commentaries found for ${verseLabel}`;
        text.innerHTML = '';
        nav.classList.add('hidden');
        return;
    }

    // Save current state
    const commentaryTabsHtml = availableCommentaries.map(name => 
        `<button class="commentary-tab" data-name="${name}">${name}</button>`
    ).join('');

    const tabNav = document.createElement('div');
    tabNav.innerHTML = `<div class="commentary-tabs">${commentaryTabsHtml}</div>`;
    title.innerHTML = `${verseLabel}`;
    title.appendChild(tabNav);

    const tabsContainer = title.querySelector('.commentary-tabs');
    const tabButtons = tabsContainer.querySelectorAll('.commentary-tab');
    const selectedName = activeName || availableCommentaries[0];

    function activateTab(name) {
        tabButtons.forEach(btn => {
            if (btn.dataset.name === name) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        const db = loadedCommentaries[name]?.db;
        if (!db) {
            text.innerHTML = '<p class="placeholder error">Missing commentary DB.</p>';
            return;
        }

        try {
            const stmt = db.prepare("SELECT text FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;");
            stmt.bind([bookNumber, chapterNumber, verseNumber]);
            if (stmt.step()) {
                text.innerHTML = stmt.getAsObject().text;
            } else {
                text.innerHTML = '<p class="placeholder">No text found.</p>';
            }
            stmt.free();
        } catch (err) {
            console.error('Commentary load error:', err);
            text.innerHTML = `<p class="placeholder error">Error: ${err.message}</p>`;
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.dataset.name));
    });

    activateTab(selectedName);

    // Prev/Next button logic
    const prevBtn = document.getElementById('prevCommentaryBtn');
    const nextBtn = document.getElementById('nextCommentaryBtn');

    function getPreviousVerseWithCommentary() {
        for (let i = verseNumber - 1; i >= 1; i--) {
            for (const name of availableCommentaries) {
                const db = loadedCommentaries[name]?.db;
                const stmt = db.prepare("SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;");
                stmt.bind([bookNumber, chapterNumber, i]);
                if (stmt.step() && stmt.getAsObject().count > 0) {
                    stmt.free();
                    return i;
                }
                stmt.free();
            }
        }
        return null;
    }

    function getNextVerseWithCommentary() {
        for (let i = verseNumber + 1; i <= 150; i++) { // assume 150 max per chapter
            for (const name of availableCommentaries) {
                const db = loadedCommentaries[name]?.db;
                const stmt = db.prepare("SELECT COUNT(*) AS count FROM commentaries WHERE book_number = ? AND chapter_number_from = ? AND verse_number_from = ?;");
                stmt.bind([bookNumber, chapterNumber, i]);
                if (stmt.step() && stmt.getAsObject().count > 0) {
                    stmt.free();
                    return i;
                }
                stmt.free();
            }
        }
        return null;
    }

    prevBtn.onclick = () => {
        const prev = getPreviousVerseWithCommentary();
        if (prev !== null) {
            showCommentaryPopup(bookNumber, chapterNumber, prev);
        }
    };
    nextBtn.onclick = () => {
        const next = getNextVerseWithCommentary();
        if (next !== null) {
            showCommentaryPopup(bookNumber, chapterNumber, next);
        }
    };
}


function showVersePopup(targetVerseEl) {
    const popup = document.getElementById('verseActionPopup');
    popup.classList.remove('hidden');

    const rect = targetVerseEl.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
    popup.style.left = `${rect.left + window.scrollX + rect.width - popup.offsetWidth}px`;

    // Store dataset on popup for use in click handlers
popup.dataset.bookNumber = bookNumber;
popup.dataset.chapter = chapter;
popup.dataset.verse = verseNumber;
popup.dataset.versionName = versionName;
}


// Ensure this function is correctly defined in your script.js
function showVersePopup(verseEl) {
    if (!verseEl) {
        console.error("showVersePopup called with no verseEl");
        return;
    }
    console.log("showVersePopup CALLED for element:", verseEl.id);

    const bookNumber = verseEl.dataset.bookNumber;
    const chapter = verseEl.dataset.chapter;
    const verse = verseEl.dataset.verse;
    const versionName = verseEl.dataset.versionName;

    const popup = document.getElementById('verseActionPopup');
    if (!popup) {
        console.error("verseActionPopup element not found!");
        return;
    }

    popup.dataset.bookNumber = bookNumber;
    popup.dataset.chapter = chapter;
    popup.dataset.verse = verse;
    popup.dataset.versionName = versionName;

    // Capture and store relevant selected text on the popup itself
    let relevantSelectedTextForPopup = null;
    if (latestSelection && latestSelectedText) { // Check global latestSelection/Text
        const commonAncestor = latestSelection.commonAncestorContainer;
        const anchorVerseOfSelection = commonAncestor?.nodeType === Node.TEXT_NODE ?
                                       commonAncestor.parentElement?.closest('.verse-paragraph') :
                                       commonAncestor?.closest('.verse-paragraph');
        
        // Crucial check: Is the current global selection actually *within* the verseEl that was clicked?
        if (anchorVerseOfSelection === verseEl) {
            relevantSelectedTextForPopup = latestSelectedText;
            console.log(`showVersePopup: Valid selection found within this verseEl ("${verseEl.id}"). Text: "${relevantSelectedTextForPopup}"`);
        } else {
            console.log(`showVersePopup: latestSelectedText ("${latestSelectedText}") exists, but it's not for the currently clicked verseEl ("${verseEl.id}"). Anchor verse was:`, anchorVerseOfSelection);
        }
    } else {
        console.log("showVersePopup: No global latestSelection or latestSelectedText found.");
    }
    popup.dataset.currentSelectedText = relevantSelectedTextForPopup || ''; // Store it or empty string
    console.log("showVersePopup: Set popup.dataset.currentSelectedText to:", `'${popup.dataset.currentSelectedText}'`);

    // Position and show popup panel
    const rect = verseEl.getBoundingClientRect();
    let popupTop = rect.bottom + window.scrollY + 8;
    let popupLeft = rect.left + window.scrollX;

    // Adjust if popup goes off-screen
    const popupWidth = popup.offsetWidth; // Ensure popup is not hidden to get offsetWidth
    const popupHeight = popup.offsetHeight;

    if (popupLeft + popupWidth > window.innerWidth) {
        popupLeft = window.innerWidth - popupWidth - 10;
    }
    if (popupTop + popupHeight > (window.innerHeight + window.scrollY)) { // Compare with scroll height
        popupTop = rect.top + window.scrollY - popupHeight - 8;
    }
    if (popupLeft < 0) popupLeft = 10;
    if (popupTop < window.scrollY) popupTop = window.scrollY + 10; // Prevent from going above viewport top

    popup.style.top = `${popupTop}px`;
    popup.style.left = `${popupLeft}px`;
    popup.classList.remove('hidden');

    // Close other pickers that might interfere
    if (highlightPicker && !highlightPicker.classList.contains('hidden')) {
        hideHighlightPicker();
    }
    if (highlightColorPicker && !highlightColorPicker.classList.contains('hidden')) {
        highlightColorPicker.classList.add('hidden');
        // Don't clear latestSelection here, as we might need it if user immediately clicks note/highlight icon
    }
}


// --- Search Feature Functions ---
async function performSearch() {
    const query = searchQueryInput.value.trim();
    const scope = searchScopeSelect.value;
    const matchType = matchTypeSelect.value;
    searchResultsList.innerHTML = ''; // Clear previous results
    searchStatusMessage.textContent = '';

    if (!activeDbs.primary) {
        searchStatusMessage.textContent = 'Please load a primary Bible version first.';
        searchStatusMessage.classList.add('error');
        return;
    }

    if (!query) {
        searchStatusMessage.textContent = 'Please enter a search query.';
        searchStatusMessage.classList.add('error');
        return;
    }

    searchStatusMessage.textContent = 'Searching...';
    searchStatusMessage.classList.remove('error');
    performSearchBtn.disabled = true; // Disable button during search

    try {
        const primaryDb = activeDbs.primary;
        let sqlQuery = `SELECT b.long_name, v.book_number, v.chapter, v.verse, v.text FROM verses v JOIN books b ON v.book_number = b.book_number WHERE `;
        const params = [];
        const words = query.split(/\s+/).filter(word => word.length > 0);
        let conditions = [];

        if (words.length === 0) {
            searchStatusMessage.textContent = 'Please enter valid words to search.';
            searchStatusMessage.classList.add('error');
            return;
        }

        if (matchType === 'sentence') {
            conditions.push(`v.text LIKE ?`);
            params.push(`%${query}%`); // Search for the whole query as a single phrase
        } else { // 'words' (Match All Words)
            words.forEach(word => {
                conditions.push(`v.text LIKE ?`);
                params.push(`%${word}%`);
            });
        }
        sqlQuery += `(${conditions.join(' AND ')})`;

        if (scope === 'currentBook') {
            if (!currentBook) {
                searchStatusMessage.textContent = 'Please select a book to search within.';
                searchStatusMessage.classList.add('error');
                return;
            }
            sqlQuery += ` AND v.book_number = ?`;
            params.push(currentBook.book_number);
        } else if (scope === 'oldTestament') {
            if (!oldTestamentBookRange.start || !oldTestamentBookRange.end) { /* ... error handling ... */ return; }
            sqlQuery += ` AND v.book_number BETWEEN ? AND ?`;
            params.push(oldTestamentBookRange.start, oldTestamentBookRange.end);
        } else if (scope === 'newTestament') {
            if (!newTestamentBookRange.start || !newTestamentBookRange.end) { /* ... error handling ... */ return; }
            sqlQuery += ` AND v.book_number BETWEEN ? AND ?`;
            params.push(newTestamentBookRange.start, newTestamentBookRange.end);
        }

        // --- REMOVED THE LIMIT 200 ---
        sqlQuery += ` ORDER BY v.book_number ASC, v.chapter ASC, v.verse ASC;`;

        const stmt = primaryDb.prepare(sqlQuery);
        stmt.bind(params);

        let resultsFound = 0;
        const fragment = document.createDocumentFragment(); // Use fragment for better performance

        while (stmt.step()) {
            const row = stmt.getAsObject();
            resultsFound++;
            
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.dataset.bookNumber = row.book_number;
            resultItem.dataset.chapter = row.chapter;
            resultItem.dataset.verse = row.verse;
            // No need for bookLongName in dataset if we don't use it in the click handler

            let highlightedText = row.text;
            const searchTerms = (matchType === 'sentence') ? [query] : words;
            searchTerms.forEach(term => {
                const regex = new RegExp(escapeRegExp(term), 'gi'); // Global and case-insensitive
                highlightedText = highlightedText.replace(regex, '<em>$&</em>');
            });

            // --- USE NEW HTML STRUCTURE FOR THE RESULT CARD ---
            resultItem.innerHTML = `
                <span class="result-reference">${row.long_name} ${row.chapter}:${row.verse}</span>
                <span class="result-text">${highlightedText}</span>
            `;

            resultItem.addEventListener('click', () => {
                currentBook = loadedVersions[activeVersions.primary].books.find(b => b.book_number === row.book_number);
                currentChapter = row.chapter;
                currentVerse = row.verse;
                saveLastReadPosition();
                loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
            });
            fragment.appendChild(resultItem);
        }
        stmt.free();

        searchResultsList.appendChild(fragment); // Append all results at once

        searchStatusMessage.textContent = `Found ${resultsFound} result(s).`;
        if (resultsFound === 0) {
            searchResultsList.innerHTML = `<p class="placeholder">No results found for "${query}".</p>`;
        }

    } catch (err) {
        searchStatusMessage.textContent = `Search error: ${err.message}`;
        searchStatusMessage.classList.add('error');
        console.error('Search error:', err);
    } finally {
        performSearchBtn.disabled = false; // Re-enable button after search
    }
}

function setupGlobalSelectionListener() {
    const interactiveSelector = [
        '#verseActionPopup',
        '#highlightColorPicker',
        '#highlightPicker',
        '.selection-modal', // Covers new theme/version/commentary popups
        '#noteModal',
        '#bookmarkModal',
        'button', // General buttons
        'select', // General selects
        'input[type="text"]', // Text inputs
        'textarea' // Textareas
    ].join(', '); // Comma-separated selector string

    function handleSelectionEvent(event) {
        // If the event target (where mouseup/touchend occurred) is an interactive UI element,
        // do not process text selection, as the user is likely interacting with that UI.
        if (event.target.closest(interactiveSelector)) {
            // console.log("Selection event on interactive UI element, deferring to element's handlers.");
            return;
        }

        clearTimeout(selectionTimeout);
        selectionTimeout = setTimeout(() => {
            processUserTextSelection();
        }, 50); // Debounce slightly (50-100ms is usually good)
    }

    document.addEventListener('mouseup', handleSelectionEvent);
    document.addEventListener('touchend', handleSelectionEvent); // Add listener for touch devices

    console.log("Global text selection listeners (mouseup, touchend) attached.");
}
// ARE DEFINED IN THE GLOBAL SCOPE OF SCRIPT.JS (i.e., outside initializeApp)

async function initializeApp() {
    console.log('DEBUG: initializeApp() function started execution.');
	loadSavedFontSize();
	    if (decreaseFontSizeBtn) {
        decreaseFontSizeBtn.addEventListener('click', () => {
            applyFontSize(currentAppFontSizeRem - FONT_SIZE_STEP_REM);
        });
    } else {
        console.error("decreaseFontSizeBtn not found");
    }

    if (increaseFontSizeBtn) {
        increaseFontSizeBtn.addEventListener('click', () => {
            applyFontSize(currentAppFontSizeRem + FONT_SIZE_STEP_REM);
        });
    } else {
        console.error("increaseFontSizeBtn not found");
    }
    try {
        statusMessage.textContent = 'Initializing SQL.js...';
        SQL = await window.initSqlJs({ locateFile: file => `/${file}` });
        console.log('DEBUG: SQL.js initialized.');
        statusMessage.textContent = 'SQL.js initialized.';
        
        if (addVersionBtn) addVersionBtn.disabled = false;

        // Load theme first so the UI reflects it early
        loadSavedTheme(); // This function should call applyTheme defined globally

        console.log('DEBUG: Before calling loadSavedVersionsMetadata() & loadSavedCommentariesMetadata().');
        await loadSavedVersionsMetadata();
        await loadSavedCommentariesMetadata();
        console.log('DEBUG: loadSavedVersionsMetadata() & loadSavedCommentariesMetadata() completed.');

        await processPredefinedResources(); 
        updateViewModeDisplay(); // Set initial view mode display
		updateActiveVersionNameDisplays();
        // Load last read position or set defaults
        const lastReadString = localStorage.getItem(LAST_READ_KEY);
        let successfullyLoadedLastReadOrSetDefault = false;

        if (lastReadString) {
            const lastRead = JSON.parse(lastReadString);
            console.log("DEBUG: Restoring from lastRead data:", lastRead);

            if (lastRead.viewMode) {
                currentViewMode = lastRead.viewMode;
                updateViewModeDisplay();
            }

            if (lastRead.activeVersions && lastRead.activeVersions.primary && loadedVersions[lastRead.activeVersions.primary]) {
                await setActiveVersion('primary', lastRead.activeVersions.primary);
                if (lastRead.activeVersions.secondary && loadedVersions[lastRead.activeVersions.secondary] && lastRead.activeVersions.primary !== lastRead.activeVersions.secondary) {
                    await setActiveVersion('secondary', lastRead.activeVersions.secondary);
                } else {
                    activeVersions.secondary = null; activeDbs.secondary = null;
                }
            } else if (Object.keys(loadedVersions).length > 0) {
                await setActiveVersion('primary', Object.keys(loadedVersions)[0]);
            }

            if (lastRead.activeCommentary && loadedCommentaries[lastRead.activeCommentary]) {
                await setActiveCommentary(lastRead.activeCommentary);
            }

            if (activeVersions.primary && lastRead.book && loadedVersions[activeVersions.primary]?.books.find(b => b.book_number === lastRead.book.book_number)) {
                currentBook = loadedVersions[activeVersions.primary].books.find(b => b.book_number === lastRead.book.book_number);
                currentChapter = lastRead.chapter;
                currentVerse = lastRead.verse;
                if (currentChapterDisplay && currentBook && currentChapter) {
                    currentChapterDisplay.textContent = `${currentBook.short_name} ${currentChapter === 'introduction' ? 'Intro' : currentChapter}`;
                }
                await loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
                successfullyLoadedLastReadOrSetDefault = true;
            }
        }

        if (!successfullyLoadedLastReadOrSetDefault) {
            console.log("DEBUG: No valid last read data, or initial setup. Setting defaults if versions exist.");
            const versionKeys = Object.keys(loadedVersions);
            if (versionKeys.length > 0) {
                if (!activeVersions.primary) {
                    await setActiveVersion('primary', versionKeys[0]); // This will call determineOtNtRanges
                }
                if (activeVersions.primary && loadedVersions[activeVersions.primary]?.books?.length > 0) {
                    if (!currentBook) { // If currentBook wasn't set by lastRead or setActiveVersion's internal logic
                        currentBook = loadedVersions[activeVersions.primary].books[0];
                    }
                    if (!currentChapter) { // If currentChapter wasn't set
                         // Check if book object has a 'chapters' count property, or query DB for first chapter
                        const bookDataForChapter = loadedVersions[activeVersions.primary]?.books.find(b => b.book_number === currentBook.book_number);
                        currentChapter = bookDataForChapter?.chapters > 0 ? 1 : 'introduction';
                    }
                    currentVerse = null; // Default to no specific verse

                    if (currentChapterDisplay && currentBook && currentChapter) {
                        currentChapterDisplay.textContent = `${currentBook.short_name} ${currentChapter === 'introduction' ? 'Intro' : currentChapter}`;
                    }
                    // Decide whether to load content or show navigator
                    // If we have a book and chapter, load it. Otherwise, user starts via navigator.
                    if (currentBook && currentChapter) {
                         await loadChapterContent(currentBook.book_number, currentChapter, currentVerse);
                    } else if (currentBook) { // Only book is known, let user pick chapter
                        if(currentChapterDisplay) currentChapterDisplay.textContent = `${currentBook.short_name}`;
                        openBookNavigator(); // Open the navigator to select chapter
                    } else { // No book known
                        openBookNavigator();
                    }
                } else { // No books for the loaded primary version
                    showPanel(uploadPanel);
                    if(currentChapterDisplay) currentChapterDisplay.textContent = 'No Books';
                }
            } else { // No versions loaded at all
                showPanel(uploadPanel);
                if(currentChapterDisplay) currentChapterDisplay.textContent = 'No Version';
            }
        }
        
        // ----- Setup UI Listeners -----
        // These functions should be defined globally
        setupNavigationListeners();     // For book/chapter/verse navigator panel (triggered by currentChapterDisplay click & its internal back/close buttons)
        setupPopupTriggersAndModals();  // For Bible version, commentary, theme popups (opening them and handling selections)
		setupSlideMenuListeners();
		setupMobileBackButtonHandler();
		setupGlobalSelectionListener();
		updateActiveVersionNameDisplays();
		updateViewModeDisplay();
		setupContentReaderListeners();



        // ----- Other Global Event Listeners that were in your initializeApp -----
	if (addVersionBtn) {
    addVersionBtn.addEventListener('click', () => {
        console.log("EVENT: addVersionBtn CLICKED. Calling addBibleVersion...");
        addBibleVersion();
    });
    console.log("DEBUG: Event listener for addVersionBtn ATTACHED. Button disabled state:", addVersionBtn.disabled);
} else {
    console.error("ERROR: addVersionBtn element not found during initializeApp.");
}

if (addCommentaryBtn) {
    addCommentaryBtn.addEventListener('click', () => {
        console.log("EVENT: addCommentaryBtn CLICKED. Calling addCommentary...");
        addCommentary();
    });
    console.log("DEBUG: Event listener for addCommentaryBtn ATTACHED. Button disabled state:", addCommentaryBtn.disabled);
} else {
    console.error("ERROR: addCommentaryBtn element not found during initializeApp.");
}
	
if (closeCommentaryModalButton) { // Check if the button element was found
    closeCommentaryModalButton.addEventListener('click', () => {
        console.log("EVENT: closeCommentaryModalButton CLICKED."); // For debugging
        if (commentaryModal) { // Check if modal element exists
            commentaryModal.classList.add('hidden');
        } else {
            console.error("ERROR: commentaryModal element is null when trying to hide it.");
        }
    });
    console.log("DEBUG: Click listener ATTACHED to closeCommentaryModalButton.");
} else {
    console.error("ERROR: closeCommentaryModalButton element not found. Listener NOT attached.");
}

// Listener for clicking on the modal backdrop (outside .modal-content) to close
if (commentaryModal) { // Check if modal element exists
    window.addEventListener('click', (event) => {
        if (event.target === commentaryModal) { // Check if the click was directly on the modal backdrop
            console.log("EVENT: Click on commentaryModal backdrop detected."); // For debugging
            commentaryModal.classList.add('hidden');
        }
    });
    console.log("DEBUG: Window click listener for commentaryModal backdrop ATTACHED.");
} else {
    console.error("ERROR: commentaryModal element not found. Window click listener for backdrop NOT attached.");
}
	
    if (toggleFileUploadBtn) {
        toggleFileUploadBtn.addEventListener('click', () => {
            console.log("Toggle File Upload Panel button CLICKED."); // Add log
            showPanel(uploadPanel);
        });
    }
    if (closeUploadPanelBtn) {
        closeUploadPanelBtn.addEventListener('click', () => {
            // Decide what to show: if content is loaded, show bibleContentView, else show navigator or upload
            if (currentBook && currentChapter) showPanel(bibleContentView); 
            else if (Object.keys(loadedVersions).length > 0) openBookNavigator(); // If versions loaded, open book nav
            else showPanel(uploadPanel); // Fallback
        });
    }

    // ADD THIS BACK FOR COMMENTARY PANEL
    if (toggleCommentaryUploadBtn) {
        toggleCommentaryUploadBtn.addEventListener('click', () => {
            console.log("Toggle Commentary Upload Panel button CLICKED."); // Add log
            showPanel(commentaryUploadPanel);
        });
    } else {
        console.error("ERROR: toggleCommentaryUploadBtn element not found in initializeApp.");
    }

    if (closeCommentaryUploadBtn) {
        closeCommentaryUploadBtn.addEventListener('click', () => {
            if (currentBook && currentChapter) showPanel(bibleContentView);
            else if (Object.keys(loadedVersions).length > 0) openBookNavigator();
            else showPanel(uploadPanel);
        });
    }
        const verseActionPopup = document.getElementById('verseActionPopup'); // Defined again for clarity in this scope

        // Search Panel Listeners
        if (toggleSearchBtn) { // Your toggleSearchBtn listener with focus logic should be here
            toggleSearchBtn.addEventListener('click', () => {
                const searchPanelIsCurrentlyHidden = searchPanel.classList.contains('hidden');
                showPanel(searchPanel);
                if (searchPanelIsCurrentlyHidden && !searchPanel.classList.contains('hidden')) {
                    if (searchQueryInput) {
                        searchQueryInput.disabled = false; searchQueryInput.readOnly = false;
                        searchQueryInput.focus();
                        setTimeout(() => console.log(`toggleSearchBtn: searchQueryInput focus success: ${document.activeElement === searchQueryInput}`), 100);
                    }
                }
            });
        }
        if (performSearchBtn) performSearchBtn.addEventListener('click', performSearch);
        if (closeSearchPanelBtn) closeSearchPanelBtn.addEventListener('click', () => {
             if (currentBook && currentChapter) showPanel(bibleContentView); else openBookNavigator();
        });

        // User Data Panel Listeners
        if (toggleUserDataBtn) toggleUserDataBtn.addEventListener('click', () => {
            showPanel(userDataPanel);
            updateUserDataPanel('highlights'); 
        });
        if (closeUserDataPanelBtn) closeUserDataPanelBtn.addEventListener('click', () => {
             if (currentBook && currentChapter) showPanel(bibleContentView); else openBookNavigator();
        });
        if (userDataTabButtons) {
            userDataTabButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    userDataTabButtons.forEach(btn => btn.classList.remove('active'));
                    event.currentTarget.classList.add('active');
                    updateUserDataPanel(event.currentTarget.dataset.tab);
                });
            });
        }
        if (bookmarkCategorySelect) bookmarkCategorySelect.addEventListener('change', () => populateBookmarksList());

        // Highlight Picker (for WHOLE verse highlights) - Swatch Clicks
        if (highlightPicker) {
            highlightPicker.querySelectorAll('.color-swatch').forEach(swatch => {
                const newSwatch = swatch.cloneNode(true); // Ensure fresh listeners
                swatch.parentNode.replaceChild(newSwatch, swatch);
                newSwatch.addEventListener('click', () => {
                    const color = newSwatch.dataset.color;
                    if (color) applyHighlight(color); // applyHighlight is global
                });
            });
        }
        
  
if (verseActionPopup) {
    console.log("DEBUG: Setting up listeners for verseActionPopup icons.");

    // Highlighter Icon
    const highlighterIcon = verseActionPopup.querySelector('.fa-highlighter');
    if (highlighterIcon) {
        // Mousedown to prevent focus stealing (already in your script)
        highlighterIcon.addEventListener('mousedown', (e) => e.preventDefault());

        if (typeof handleHighlightIconClick === "function") { // Check if you defined it separately
             highlighterIcon.addEventListener('click', handleHighlightIconClick);
        } else {
             console.warn("handleHighlightIconClick function for highlighter not found, complex listener might be missing from here.");
             // If your complex highlight logic is directly here as an anonymous function from previous steps, that's fine.
        }

    } else { console.error("Highlighter icon not found in verseActionPopup."); }

    // Note Icon
    const noteIcon = verseActionPopup.querySelector('.fa-sticky-note');
if (noteIcon) {
    noteIcon.addEventListener('click', () => {
        console.log("EVENT: Note icon in verseActionPopup CLICKED.");
        const verseRef = getPopupRef(); // Reads from verseActionPopup.dataset (book, chapter, verse, version)
        
        // Get the selected text that was stored on the popup's dataset by showVersePopup
        const textForPartialNote = verseActionPopup.dataset.currentSelectedText || null;

        if (textForPartialNote && textForPartialNote.trim() !== '') { // Ensure it's not just empty string
            console.log("Note icon click: Using textForPartialNote from popup dataset:", `'${textForPartialNote}'`);
        } else {
            console.log("Note icon click: No valid currentSelectedText on popup dataset. Proceeding as whole verse note.");
        }
        
        showNoteModal(verseRef, textForPartialNote ? textForPartialNote.trim() : null); // Pass trimmed or null
        
        // Clear the temporary dataset attribute and globals after use for this action
        verseActionPopup.dataset.currentSelectedText = '';
        latestSelection = null;
        latestSelectedText = '';
        verseActionPopup.classList.add('hidden'); // Hide popup after initiating action
    });
} else {
    console.error("Note icon (.fa-sticky-note) not found in verseActionPopup.");
}

const verseActionPopupHighlightIcon = verseActionPopup.querySelector('.fa-highlighter');

if (verseActionPopupHighlightIcon) {
    // Prevent mousedown on icon from stealing focus from potential text selection
    verseActionPopupHighlightIcon.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });

    verseActionPopupHighlightIcon.addEventListener('click', async (iconClickEvent) => {
        console.log("EVENT: Highlighter icon in verseActionPopup CLICKED.");
        iconClickEvent.stopPropagation(); // Prevent window click listeners from firing immediately

        const verseRefFromPopup = getPopupRef(); // Assumes getPopupRef uses verseActionPopup.dataset
        console.log("HIGHLIGHT ICON CLICK: verseRefFromPopup is:", JSON.stringify(verseRefFromPopup));

        const verseElement = primaryBibleContent.querySelector(
            `.verse-paragraph[data-version-name="${verseRefFromPopup.versionName}"][data-book-number="${verseRefFromPopup.bookNumber}"][data-chapter="${verseRefFromPopup.chapter}"][data-verse="${verseRefFromPopup.verse}"]`
        );
        console.log("HIGHLIGHT ICON CLICK: verseElement found:", verseElement);

        if (!verseElement) {
            console.error("Highlight action: Verse element not found for ", verseRefFromPopup);
            alert("Could not find the verse element to highlight.");
            verseActionPopup.classList.add('hidden'); // Hide popup if error
            return;
        }

        // Crucially, use the text stored on the popup by showVersePopup for deciding partial action.
        // The global latestSelection (Range object) is still needed for DOM manipulation if it's a new partial highlight.
        const textForPartialAction = verseActionPopup.dataset.currentSelectedText || null;
        // Capture global latestSelection at this point, as it's needed for new partial highlights.
        const rangeForPartialAction = latestSelection;

        console.log("HIGHLIGHT ICON CLICK: Text from popup dataset for partial action:", `'${textForPartialAction}'`);
        console.log("HIGHLIGHT ICON CLICK: Global latestSelection (Range) for DOM ops:", rangeForPartialAction);

        let proceedWithPartialHighlightAction = false;
        if (textForPartialAction && textForPartialAction.trim() !== '') {
            // We have text, check if we also have a valid Range object if we intend to add a new highlight
            // If we are clearing an existing one, textForPartialAction is enough to identify it.
            proceedWithPartialHighlightAction = true;
        }
        console.log("HIGHLIGHT ICON CLICK: Determined proceedWithPartialHighlightAction:", proceedWithPartialHighlightAction);

        if (proceedWithPartialHighlightAction) {
            // --- PARTIAL TEXT ACTION (HIGHLIGHT OR CLEAR EXISTING) ---
            console.log("PARTIAL FLOW: Action for text:", textForPartialAction);

            const existingPartialHighlights = await getAllIndexedDB(HIGHLIGHTS_STORE_NAME, 'byVerse', IDBKeyRange.only([verseRefFromPopup.versionName, verseRefFromPopup.bookNumber, verseRefFromPopup.chapter, verseRefFromPopup.verse]));
            const matchingExistingPartial = existingPartialHighlights.find(h => h.text === textForPartialAction.trim()); // Ensure using trimmed text for matching

            if (matchingExistingPartial) {
                verseActionPopup.classList.add('hidden'); // Hide before confirm
                if (confirm(`This text ("${matchingExistingPartial.text.substring(0,30)}...") is highlighted in ${matchingExistingPartial.color}.\nDo you want to clear this specific highlight?`)) {
                    try {
                        await deleteIndexedDB(HIGHLIGHTS_STORE_NAME, matchingExistingPartial.id);
                        statusMessage.textContent = 'Partial highlight cleared.';
                        console.log("PARTIAL FLOW: Cleared existing partial highlight ID:", matchingExistingPartial.id);
                        if (currentBook && currentChapter) {
                            loadChapterContent(currentBook.book_number, currentChapter, verseRefFromPopup.verse);
                        }
                        updateUserDataPanel('highlights');
                    } catch (err) {
                        console.error("PARTIAL FLOW: Error clearing existing partial highlight:", err);
                        statusMessage.textContent = 'Error clearing highlight.';
                        statusMessage.classList.add('error');
                    }
                }
                // Reset selection state after action (clear or cancel)
                window.getSelection()?.removeAllRanges();
                latestSelection = null;
                latestSelectedText = '';
                verseActionPopup.dataset.currentSelectedText = '';
                return; // Action complete
            } else {
                // No existing exact match, proceed to ADD new partial highlight
                // For this, we absolutely need the Range object (rangeForPartialAction)
                if (!rangeForPartialAction || !textForPartialAction || rangeForPartialAction.toString().trim() !== textForPartialAction.trim()) {
                    console.warn("PARTIAL FLOW: Mismatch or missing Range object for new partial highlight. Text from dataset:", textForPartialAction, "Current selection text:", rangeForPartialAction?.toString().trim());
                    alert("Selection mismatch or no valid selection range found for new partial highlight. Please re-select the text.");
                    verseActionPopup.classList.add('hidden');
                    verseActionPopup.dataset.currentSelectedText = '';
                    latestSelection = null; latestSelectedText = ''; // Clear globals
                    return;
                }

                console.log("PARTIAL FLOW: No exact existing partial highlight. Proceeding to ADD new for text:", textForPartialAction);
                const popupRect = verseActionPopup.getBoundingClientRect();
                highlightColorPicker.style.top = `${popupRect.bottom + window.scrollY + 5}px`;
                highlightColorPicker.style.left = `${popupRect.left + window.scrollX}px`;
                highlightColorPicker.classList.remove('hidden');
                verseActionPopup.classList.add('hidden');

                document.querySelectorAll('#highlightColorPicker .color-option').forEach(option => {
                    const newOption = option.cloneNode(true);
                    option.parentNode.replaceChild(newOption, option);
                    newOption.addEventListener('click', async (colorOptionClickEvent) => {
                        colorOptionClickEvent.stopPropagation(); // Prevent this click from closing things via window listener
                        const color = newOption.dataset.color;
                        console.log("PARTIAL FLOW: 1. New partial highlight color PICKED:", color);

                        // Use the captured rangeForPartialAction and textForPartialAction
                        if (!color || !rangeForPartialAction || !textForPartialAction) {
                            alert("Internal error: Highlight color or selection data missing.");
                            highlightColorPicker.classList.add('hidden');
                            window.getSelection()?.removeAllRanges();
                            latestSelection = null; latestSelectedText = '';
                            verseActionPopup.dataset.currentSelectedText = '';
                            return;
                        }

                        const span = document.createElement('span');
                        span.className = `partial-highlight highlight-${color}`;
                        span.textContent = textForPartialAction; // Use the captured text
                        console.log("PARTIAL FLOW: 2. Span class set to:", span.className);

                        try {
                            rangeForPartialAction.deleteContents(); // Use the captured Range
                            rangeForPartialAction.insertNode(span);
                        } catch (e) {
                            console.error('PARTIAL FLOW: DOM insert error:', e);
                            alert('Error applying highlight to text.');
                            highlightColorPicker.classList.add('hidden');
                            window.getSelection()?.removeAllRanges();
                            latestSelection = null; latestSelectedText = '';
                            verseActionPopup.dataset.currentSelectedText = '';
                            return;
                        }

                        const highlightEntry = {
                            versionName: verseRefFromPopup.versionName,
                            bookNumber: verseRefFromPopup.bookNumber,
                            chapter: verseRefFromPopup.chapter,
                            verse: verseRefFromPopup.verse,
                            text: textForPartialAction, // Save the captured text
                            color: color,
                            timestamp: Date.now()
                        };
                        console.log("PARTIAL FLOW: 3. Saving NEW partial highlight entry:", JSON.stringify(highlightEntry, null, 2));
                        try {
                            const savedId = await putIndexedDB(HIGHLIGHTS_STORE_NAME, highlightEntry);
                            console.log(`PARTIAL FLOW: Saved NEW partial highlight (ID: ${savedId})`);
                            statusMessage.textContent = `Partial highlight added.`;
                            if (currentBook && currentChapter) {
                                loadChapterContent(currentBook.book_number, currentChapter, verseRefFromPopup.verse);
                            }
                            updateUserDataPanel('highlights');
                        } catch (err) {
                            console.error('PARTIAL FLOW: Error saving NEW partial highlight to DB:', err);
                            statusMessage.textContent = 'Error saving partial highlight.';
                            statusMessage.classList.add('error');
                        }
                        highlightColorPicker.classList.add('hidden');
                        window.getSelection()?.removeAllRanges();
                        latestSelection = null; latestSelectedText = '';
                        verseActionPopup.dataset.currentSelectedText = '';
                    });
                });
            }
            // iconClickEvent.stopPropagation(); // Already done at the top of handler

        } else {
            // --- WHOLE VERSE HIGHLIGHTING ---
            console.log("WHOLE VERSE FLOW: Proceeding for verseRef:", JSON.stringify(verseRefFromPopup));
            window.getSelection()?.removeAllRanges(); // Clear any residual selection
            latestSelection = null;
            latestSelectedText = '';
            verseActionPopup.dataset.currentSelectedText = ''; // Ensure this is clear

            showHighlightPicker(verseElement); // This shows the whole verse picker
            verseActionPopup.classList.add('hidden');
            // iconClickEvent.stopPropagation(); // Already done at the top
        }
    });
} else {
    console.error("ERROR: Highlighter icon (.fa-highlighter) not found in verseActionPopup during setup.");
}
    // Bookmark Icon
    const bookmarkIcon = verseActionPopup.querySelector('.fa-bookmark');
    if (bookmarkIcon) {
        bookmarkIcon.addEventListener('click', () => {
            console.log("EVENT: Bookmark icon in verseActionPopup CLICKED.");
            const ref = getPopupRef();
            showBookmarkModal(ref);
        });
    } else { console.error("Bookmark icon not found in verseActionPopup."); }

    // Share Icon
    const shareIcon = verseActionPopup.querySelector('.fa-share-alt');
    if (shareIcon) {
        shareIcon.addEventListener('click', () => {
            console.log("EVENT: Share icon in verseActionPopup CLICKED.");
            const ref = getPopupRef();
            shareVerse(ref);
        });
    } else { console.error("Share icon not found in verseActionPopup."); }

    // Image/Verse Card Icon
    const imageIcon = verseActionPopup.querySelector('.fa-image');
    if (imageIcon) {
        imageIcon.addEventListener('click', () => {
            console.log("EVENT: Image icon in verseActionPopup CLICKED.");
            const ref = getPopupRef();
            generateVerseImage(ref);
        });
    } else { console.error("Image icon not found in verseActionPopup."); }

} else {
    console.error("ERROR: verseActionPopup element not found during initializeApp.");
}

if (prevChapterBtn) {
    prevChapterBtn.addEventListener('click', () => {
        console.log("EVENT: prevChapterBtn CLICKED. Calling navigateChapter(-1).");
        navigateChapter(-1);
    });
    console.log("DEBUG: Event listener for prevChapterBtn ATTACHED.");
} else {
    console.error("ERROR: prevChapterBtn element not found during initializeApp.");
}

if (nextChapterBtn) {
    nextChapterBtn.addEventListener('click', () => {
        console.log("EVENT: nextChapterBtn CLICKED. Calling navigateChapter(1).");
        navigateChapter(1);
    });
    console.log("DEBUG: Event listener for nextChapterBtn ATTACHED.");
} else {
    console.error("ERROR: nextChapterBtn element not found during initializeApp.");

}
        // Note Modal Buttons
        if (saveNoteBtn) saveNoteBtn.addEventListener('click', saveNote);
        if (deleteNoteBtn) deleteNoteBtn.addEventListener('click', deleteNote);
        if (cancelNoteBtn) cancelNoteBtn.addEventListener('click', cancelNote);
        if (closeNoteModalButton) closeNoteModalButton.addEventListener('click', cancelNote);

        // Bookmark Modal Buttons
        if (saveBookmarkBtn) saveBookmarkBtn.addEventListener('click', saveBookmark);
        if (deleteBookmarkBtn) deleteBookmarkBtn.addEventListener('click', deleteBookmark);
        if (cancelBookmarkBtn) cancelBookmarkBtn.addEventListener('click', cancelBookmark);
        if (closeBookmarkModalButton) closeBookmarkModalButton.addEventListener('click', cancelBookmark);

        // Global Click Listeners for closing modals/pickers
        window.addEventListener('click', (event) => {
            if (introModal && event.target == introModal) introModal.classList.add('hidden');
            if (commentaryModal && event.target == commentaryModal) commentaryModal.classList.add('hidden');
            if (noteModal && event.target == noteModal) cancelNote();
            if (bookmarkModal && event.target == bookmarkModal) cancelBookmark();
            
            const verseActionPopupInstance = document.getElementById('verseActionPopup'); // Re-fetch or use global

            // Hide highlightPicker
            if (highlightPicker && !highlightPicker.classList.contains('hidden') &&
                !highlightPicker.contains(event.target) &&
                !event.target.closest('.verse-paragraph') &&
                !(verseActionPopupInstance && verseActionPopupInstance.querySelector('.fa-highlighter')?.contains(event.target))) {
                hideHighlightPicker();
            }
            // Hide highlightColorPicker
            if (highlightColorPicker && !highlightColorPicker.classList.contains('hidden') &&
                !highlightColorPicker.contains(event.target) &&
                !(verseActionPopupInstance && verseActionPopupInstance.querySelector('.fa-highlighter')?.contains(event.target))) {
                 highlightColorPicker.classList.add('hidden');
            }
            // Hide verseActionPopup
            if (verseActionPopupInstance && !verseActionPopupInstance.classList.contains('hidden') &&
                !verseActionPopupInstance.contains(event.target) &&
                !event.target.closest('.verse-paragraph')) {
                verseActionPopupInstance.classList.add('hidden');
            }
        });

        // Mouseup listener for latestSelection/latestSelectedText (ensure this is the one, defined globally)


        // Verse Card Image Modal listeners
        const closeVerseImgModal = document.getElementById('closeVerseImageModal');
        if (closeVerseImgModal) closeVerseImgModal.addEventListener('click', () => document.getElementById('verseImageModal').classList.add('hidden'));
        // ... add other listeners for download/copy image, theme changes for card ...
        const verseCardInputs = ['verseCardTheme', 'verseCardFooter', 'verseCardFont', 'verseCardAlign', 'verseCardLogo', 'verseCardBgImage', 'verseCardTextSize', 'verseCardTextColor'];
        verseCardInputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const eventType = (el.tagName === 'INPUT' && el.type === 'text') || el.tagName === 'TEXTAREA' ? 'input' : 'change';
                el.addEventListener(eventType, updateVerseImagePreview);
            }
        });
		
        const downloadVerseImgBtn = document.getElementById('downloadVerseImageBtn');
        if(downloadVerseImgBtn) downloadVerseImgBtn.addEventListener('click', ()/*: void*/ => { 
					if (!lastGeneratedCanvas) return;
			const link = document.createElement('a');
			link.download = `verse-card.png`;
			link.href = lastGeneratedCanvas.toDataURL('image/png');
			link.click();
		});
		
        const copyVerseImgBtn = document.getElementById('copyVerseImageBtn');
        if(copyVerseImgBtn) copyVerseImgBtn.addEventListener('click', async () => {
						if (!lastGeneratedCanvas) return;
			try {
				const blob = await new Promise(resolve => lastGeneratedCanvas.toBlob(resolve));
				await navigator.clipboard.write([
					new ClipboardItem({ 'image/png': blob })
				]);
				alert('Image copied to clipboard!');
			} catch (e) {
				console.error('Clipboard error:', e);
				alert('Failed to copy image. Try downloading instead.');
			}
		});


        // Scroll Sync
        if (primaryBibleContent && secondaryBibleContent) {
            primaryBibleContent.addEventListener('scroll', () => syncScroll(primaryBibleContent, secondaryBibleContent));
            secondaryBibleContent.addEventListener('scroll', () => syncScroll(secondaryBibleContent, primaryBibleContent));
        }
        
        console.log('DEBUG: initializeApp() all event listeners configured.');

    } catch (err) {
        console.error('FATAL ERROR: initializeApp() caught a major error!', err);
        statusMessage.textContent = `CRITICAL ERROR: Initialization failed: ${err.message}`;
        statusMessage.classList.add('error');
        if (addVersionBtn) addVersionBtn.disabled = true;
        console.log('DEBUG: addVersionBtn.disabled set in catch block:', addVersionBtn ? addVersionBtn.disabled : 'N/A (addVersionBtn not found)');
    }
}

console.log('DEBUG: Script file loaded. Calling initializeApp().');
initializeApp();


