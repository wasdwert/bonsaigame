var state = {
    AnzahlGeld: 0,
    AnzahlErdnüsse: 0,
    AnzahlErdnussbäume: 0,
    AnzahlErdnussplantagen: 0,
    GeldproKlick: 0.1,
    GeldproSekunde: 0,
    ErdnussproKlick: 1,
    ErdnussbaumproKlick: 1,
    ErdnussplantageproKlick: 1,
    ErdnüsseproSekunde: 0,
    ErdnussbäumeproSekunde: 0,
    PreisErdnüsse: 1,
    PreisErdnussbäume: 10,
    PreisErdnussplantagen: 10,
    PreisGeldDoppel: 12.5,
    PreisErdnussDoppel: 50.0,
    PreisErdnussbaumDoppel: 200.0,
    PreisErdnussplantageDoppel: 800.0,
    PreisAutoSell: 25,
    PreisOffline: 2,
    PreisBessererPreis: 100,
    PreisZeitFormen: 25000,
    PreisRushUpgrade: 25000,
    PreisGeduldUpgrade: 5000,
    PreisBessereQualitätBonsai: 10000,
    PreisCBonsai: 2000,
    PreisUBonsai: 5000,
    PreisSBonsai: 20000,
    PreisLBonsai: 100000,
    GeldAutoSell: 0.1,
    Random: 0,
    output: 0,
    BonsaiGrowth: 0,
    BonsaiGrowing: 0,
    ZeitFormen: 300,
    AnzahlCBonsais: 0,
    AnzahlUBonsais: 0,
    AnzahlSBonsais: 0,
    AnzahlLBonsais: 0,
    AnzahlMBonsais: 0,
    RushCycle: 1,
    RushCycles: 0,
    GeduldCycle: 1,
    GeduldCycles: 0,
    RushUpgrade: 0,
    GeduldUpgrade: 0,
    QualitätUpgrade: 0,
    CBonBase: 62.0,
    UBonBase: 26.0,
    SBonBase: 10.0,
    LBonBase: 2.0,
    MBonBase: 0.0,
    CBonShow: 62.0,
    UBonShow: 26.0,
    SBonShow: 10.0,
    LBonShow: 2.0,
    MBonShow: 0.0,
    UBonRandomBase: 0.620,
    SBonRandomBase: 0.880,
    LBonRandomBase: 0.980,
    MBonRandomBase: 1.000,
    UBonRandom: 0.620,
    SBonRandom: 0.880,
    LBonRandom: 0.980,
    MBonRandom: 1.000,
    zeitjetzt: 0,
    zeitsave: 0,
    zeitautosave: 0,
    zeitsincesave: 0,
    zeittillautosave: 0,
    zeitstart: 0,
    zeitwin: 0,
    zeitstamp: 0,
    Geldwhileaway: 0,
    Erdnüssewhileaway: 0,
    Erdnussbäumewhileaway: 0,
    Bonsaiwhileaway: 0,
    PreisGeldDoppelShow: 0,  
    ErdnüsseShow: 0,
    PreisErdnussDoppelShow: 0,
    ErdnussbäumeShow: 0,
    PreisErdnussbaumDoppelShow: 0,
    ErdnussplantagenShow: 0,
    PreisErdnussplantageDoppelShow: 0,
    Erdnusshandel100Show: 0,
    Erdnusshandel200Show: 0,
    Erdnusshandel1000Show: 0,
    UpgradesShow: 0,
    AutoSellShow: 0,
    OfflineShow: 0,
    BonsaiShow: 0,
    BonsaiverkaufenShow: 0,
    CBonsaiverkaufenShow: 0,
    UBonsaiverkaufenShow: 0,
    SBonsaiverkaufenShow: 0,
    LBonsaiverkaufenShow: 0,
    GeduldUpgrade1: 1,
    GeduldUpgrade2: 1,
    GeduldUpgrade3: 1,
    GeduldUpgrade4: 1,
    GeduldUpgrade5: 1,
    GeduldUpgrade6: 1,
    GeduldUpgrade7: 1,
    GeduldUpgrade8: 1,
    GeduldUpgrade9: 1,
    GeduldUpgrade10: 1,
    randomfloating: 0,
    randomrest: 0,
    Offline: 0,
    StepShow: 1,
    percenteins: 1.0,
    percenteinsevent: 0,
    percentzwei: 2.0,
    percentzweievent: 0,
    percentvier: 4.0,
    percentvierevent: 0,
    PreisGeldExtra: 12.5,
    geldevent: 0,
}

function save() {
    state.zeitsave = Date.now();
    localStorage.setItem('state', JSON.stringify(state));
    document.getElementById("ZeitAutosave").innerText ="Saved";
    state.zeitstamp +=1;
    gtag('event', 'Save');
}

function reset() {
    gtag('event', 'Reset');
    localStorage.clear(); //LocalStorage cleared
    document.location.reload(true)
}

window.onload = function () {
    if (localStorage.getItem('state') == null) {
        gtag('event', 'New');
        document.getElementById("ZeitAutosave").innerText ='New';
        state.zeitstamp +=1;
        state.zeitsave = Date.now();
        state.zeitautosave = Date.now();
        state.zeitstart = Date.now();
     }
    else {
        gtag('event', 'Load');
        state = JSON.parse(localStorage.getItem('state'));
        document.getElementById("ZeitAutosave").innerText ='Loaded';
        state.zeitstamp +=1;
        state.zeitjetzt = Date.now();
        state.zeitautosave = Date.now();
        state.zeitsincesave = Math.floor(state.zeitjetzt/1000) - Math.floor(state.zeitsave/1000);
        document.getElementById("ZeitlastSave").innerText =state.zeitsincesave; //Disable later
        if (state.ErdnüsseproSekunde>0) {
            state.Erdnüssewhileaway =prettifyzwei(state.ErdnüsseproSekunde*state.Offline*state.zeitsincesave);
            state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse+state.Erdnüssewhileaway);
        }
        if (state.ErdnussbäumeproSekunde>0) {
            state.Erdnussbäumewhileaway =prettifyzwei(state.ErdnussbäumeproSekunde*state.Offline*state.zeitsincesave);
            state.AnzahlErdnussbäume =prettifyzwei(state.AnzahlErdnussbäume+state.Erdnussbäumewhileaway);
        }
        if (state.GeldproSekunde>0) {
            state.Geldwhileaway =prettifyzwei(state.GeldproSekunde*state.Offline*state.zeitsincesave);
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.Geldwhileaway);
        }   
        if (state.BonsaiGrowing==1) {
            if (state.BonsaiGrowth<state.zeitsincesave) {
                state.Bonsaiwhileaway =1;
                state.BonsaiGrowth =0;
                if (state.Random>=prettifydrei(state.MBonRandom)) {
                    state.AnzahlMBonsais +=1;
                    gtag('event', 'Grown: Mythical bonsai');
                }
                else if (state.Random>=prettifydrei(state.LBonRandom)) {
                    state.AnzahlLBonsais +=1;
                    gtag('event', 'Grown: Legendary bonsai');
                }
                else if (state.Random>=prettifydrei(state.SBonRandom)) {
                    state.AnzahlSBonsais +=1;
                    gtag('event', 'Grown: Special bonsai');
                }
                else if (state.Random>=prettifydrei(state.UBonRandom)) {
                    state.AnzahlUBonsais +=1;
                    gtag('event', 'Grown: Uncommon bonsai');
                }
                else {
                    state.AnzahlCBonsais +=1;
                    gtag('event', 'Grown: Common bonsai');
                }  
                state.BonsaiGrowing=0
                state.RushCycle =1;
                state.RushCycles =0;
                state.GeduldCycle =1;
                state.GeduldCycles =0;
                state.CBonShow =state.CBonBase;
                state.UBonShow =state.UBonBase;
                state.SBonShow =state.SBonBase;
                state.LBonShow =state.LBonBase;
                state.MBonShow =state.MBonBase;
                state.UBonRandom =state.UBonRandomBase;
                state.SBonRandom =state.SBonRandomBase;
                state.LBonRandom =state.LBonRandomBase;
                state.MBonRandom =state.MBonRandomBase;
                if (state.AnzahlMBonsais>=1) {
                    state.zeitjetzt = Date.now();
                    state.zeitwin = Math.floor(state.zeitjetzt/1000) - Math.floor(state.zeitstart/1000);
                    alert("A mythical bonsai, you won the game!\nIt took you "+ HighscoreZeit(state.zeitwin) +" seconds.\nTry playing again and beating your time!");
                }
            }
            else {
                state.BonsaiGrowth -=state.zeitsincesave;
            }
        } 
        document.getElementById("ErdnüssepS").innerText =state.ErdnüsseproSekunde.toLocaleString('en', {minimumFractionDigits: 2});
        document.getElementById("ErdnussbäumepS").innerText =state.ErdnussbäumeproSekunde.toLocaleString('en', {minimumFractionDigits: 2});
        document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
        document.getElementById("Erdnussbäume").innerText =state.AnzahlErdnussbäume.toLocaleString('en', {minimumFractionDigits: 2});
        document.getElementById("Erdnussplantagen").innerText = state.AnzahlErdnussplantagen;
        document.getElementById("MBonsais").innerText =state.AnzahlMBonsais;
        document.getElementById("LBonsais").innerText =state.AnzahlLBonsais;
        document.getElementById("SBonsais").innerText =state.AnzahlSBonsais;
        document.getElementById("UBonsais").innerText =state.AnzahlUBonsais;
        document.getElementById("CBonsais").innerText =state.AnzahlCBonsais;
        document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
        document.getElementById("RushCycles").innerText =state.RushCycles; //Delete later
        document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
        document.getElementById("GeduldCycles").innerText =state.GeduldCycles; //Delete later
        document.getElementById("CBon").innerText =state.CBonShow;
        document.getElementById("UBon").innerText =state.UBonShow;
        document.getElementById("SBon").innerText =state.SBonShow;
        document.getElementById("LBon").innerText =state.LBonShow;
        document.getElementById("MBon").innerText =state.MBonShow;
        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
        document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
        document.getElementById("UBonRandomBase").innerText =state.UBonRandomBase; //Delete later
        document.getElementById("SBonRandomBase").innerText =state.SBonRandomBase; //Delete later
        document.getElementById("LBonRandomBase").innerText =state.LBonRandomBase; //Delete later
        document.getElementById("MBonRandomBase").innerText =state.MBonRandomBase; //Delete later
        document.getElementById("KostenErdnuss").innerText =state.PreisErdnüsse
        document.getElementById("KostenErdnussbaum").innerText =prettify(state.PreisErdnussbäume)
        document.getElementById("KostenErdnussplantage").innerText =prettify(state.PreisErdnussplantagen)
        document.getElementById("KlickGeld").innerText =state.GeldproKlick.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("PreisGeldDoppel").innerText =state.PreisGeldDoppel.toLocaleString('en');
        document.getElementById("KlickErdnuss").innerText =state.ErdnussproKlick;
        document.getElementById("PreisErdnussDoppel").innerText =state.PreisErdnussDoppel.toLocaleString('en');
        document.getElementById("KlickErdnussbaum").innerText =state.ErdnussbaumproKlick;
        document.getElementById("PreisErdnussbaumDoppel").innerText =state.PreisErdnussbaumDoppel.toLocaleString('en');
        document.getElementById("KlickErdnussplantage").innerText =state.ErdnussplantageproKlick;
        document.getElementById("PreisErdnussplantageDoppel").innerText =state.PreisErdnussplantageDoppel.toLocaleString('en');
        document.getElementById("PreisWenigerZeitFormen").innerText =state.PreisZeitFormen.toLocaleString('en');
        document.getElementById("WenigerZeit").innerText =Zeit(state.ZeitFormen-15);
        if (state.ZeitFormen==150) {
            document.getElementById("WenigerZeit").innerText =Zeit(state.ZeitFormen);
            document.getElementById("WenigerZeitMax").innerText ="Max. upgrade reached";
        }
        document.getElementById("Percent1").innerText =state.percenteins.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("Percent2").innerText =state.percentzwei.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("Percent4").innerText =state.percentvier.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("PreisBessererPreis").innerText =state.PreisBessererPreis.toLocaleString('en');
        if (state.percenteins>=3) {
            document.getElementById("PreisBessererPreisMax").innerText ="Max. upgrade reached";
        }
        document.getElementById("GeldproSekunde").innerText =state.GeldproSekunde.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("PreisAutoSell").innerText =state.PreisAutoSell.toLocaleString('en');
        document.getElementById("AutoSellErdnuss").innerText =prettify(state.GeldproSekunde+state.GeldAutoSell).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("PreisOffline").innerText =state.PreisOffline;
        if (state.Offline>=1) {
            document.getElementById("OfflineMax").innerText ="Max. upgrade reached";
            document.getElementById("OfflineProzent").innerText =state.Offline*100;
        }
        else {
            document.getElementById("OfflineProzent").innerText =(state.Offline*100)+10;
        }
        document.getElementById("PreisRushUpgrade").innerText =state.PreisRushUpgrade.toLocaleString('en');
        if (state.RushUpgrade>=10) {
            document.getElementById("RushUpgradeMax").innerText ="Max. upgrade reached";
        }
        document.getElementById("PreisGeduldUpgrade").innerText =state.PreisGeduldUpgrade.toLocaleString('en');
        if (state.GeduldUpgrade>=30) {
                document.getElementById("GeduldUpgradeMax").innerText ="Max. upgrade reached";
        }
        document.getElementById("PreisBessereQualitätBonsai").innerText =state.PreisBessereQualitätBonsai.toLocaleString('en');
        if (state.QualitätUpgrade>=30) {
            document.getElementById("BessereQualitätMax").innerText ="Max. upgrade reached";
        }
        if (state.BonsaiGrowing==1) {
        document.getElementById("ZeitBonsaiheranziehen").innerText =Zeit(state.BonsaiGrowth);
        document.getElementById("Bonsaiheranziehen").innerText ="Active";
        }
        document.getElementById("CBonsais").innerText = state.AnzahlCBonsais;
        document.getElementById("PreisCBonsai").innerText = state.PreisCBonsai.toLocaleString('en');
        document.getElementById("UBonsais").innerText = state.AnzahlUBonsais;
        document.getElementById("PreisUBonsai").innerText = state.PreisUBonsai.toLocaleString('en');
        document.getElementById("SBonsais").innerText = state.AnzahlSBonsais;
        document.getElementById("PreisSBonsai").innerText = state.PreisSBonsai.toLocaleString('en');
        document.getElementById("LBonsais").innerText = state.AnzahlLBonsais;
        document.getElementById("PreisLBonsai").innerText = state.PreisLBonsai.toLocaleString('en');
        if (state.RushCycles>9.5) {
            document.getElementById("RushCycleText").innerText ="Maximum reached";
        }
        if (state.GeduldCycles>9.5) {
            document.getElementById("GeduldCycleText").innerText ="Maximum reached";
        }
        $(document).ready(function(){
            if(state.PreisGeldDoppelShow==1){
                $('.PreisGeldDoppel').show();
                if(state.AutoSellShow==0){
                    $('.Placeholder').show();
                }
            }
            if(state.ErdnüsseShow==1){
                $('.Erdnüsse').show();
            }
            if(state.PreisErdnussDoppelShow==1){
                $('.PreisErdnussDoppel').show();
            }
            if(state.ErdnussbäumeShow==1){
                $('.Erdnussbäume').show();
            }
            if(state.PreisErdnussbaumDoppelShow==1){
                $('.PreisErdnussbaumDoppel').show();
            }
            if(state.ErdnussplantagenShow==1){
                $('.Erdnussplantagen').show();
            }
            if(state.PreisErdnussplantageDoppelShow==1){
                $('.PreisErdnussplantageDoppel').show();
            }
            if(state.Erdnusshandel100Show==1){
                $('.Erdnusshandel100').show();
            }
            if(state.Erdnusshandel200Show==1){
                $('.Erdnusshandel200').show();
            }
            if(state.Erdnusshandel1000Show==1){
                $('.Erdnusshandel1000').show();
            }
            if(state.UpgradesShow==1){
                $('.Upgrades').show();
            }
            if(state.AutoSellShow==1){
                $('.AutoSell').show();
                $('.Placeholder').hide();
            }
            if(state.OfflineShow==1){
                $('.Offline').show();
            }
            if(state.BonsaiShow==1){
                $('.Bonsai').show();
            }
            if(state.BonsaiverkaufenShow==1){
                $('.Bonsaiverkaufen').show();
            }
            if(state.CBonsaiverkaufenShow==1){
                $('.CBonsaiverkaufen').show();
            }
            if(state.UBonsaiverkaufenShow==1){
                $('.UBonsaiverkaufen').show();
            }
            if(state.SBonsaiverkaufenShow==1){
                $('.SBonsaiverkaufen').show();
            }
            if(state.LBonsaiverkaufenShow==1){
                $('.LBonsaiverkaufen').show();
            }
        });
        if (state.Geldwhileaway>0) {
            if (state.Erdnüssewhileaway>0) {
                if (state.Erdnussbäumewhileaway>0) {
                    if (state.Bonsaiwhileaway>0) {
                        alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Geldwhileaway +" money while being away.\nYou have earned "+ state.Erdnüssewhileaway +" peanuts while being away.\nYou have earned "+ state.Erdnussbäumewhileaway +" peanut bushes while being away.\nA bonsai grew!");  
                    }
                    else {
                        alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Geldwhileaway +" money while being away.\nYou have earned "+ state.Erdnüssewhileaway +" peanuts while being away.\nYou have earned "+ state.Erdnussbäumewhileaway +" peanut bushes while being away.");
                    }
                }
                else {
                    if (state.Bonsaiwhileaway>0) {
                        alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Geldwhileaway +" money while being away.\nYou have earned "+ state.Erdnüssewhileaway +" peanuts while being away.\nA bonsai grew!");  
                    }
                    else {
                        alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Geldwhileaway +" money while being away.\nYou have earned "+ state.Erdnüssewhileaway +" peanuts while being away.\n");
                    }
                }
            }
            else {
                if (state.Bonsaiwhileaway>0) {
                    alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Geldwhileaway +" money while being away.\nA bonsai grew!");  
                }
                else {
                    alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Geldwhileaway +" money while being away.\n");
                }
            }
        }
        else if (state.Erdnüssewhileaway>0) {
            if (state.Erdnussbäumewhileaway>0) {
                if (state.Bonsaiwhileaway>0) {
                    alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Erdnüssewhileaway +" peanuts while being away.\nYou have earned "+ state.Erdnussbäumewhileaway +" peanut bushes while being away.\nA bonsai grew!");  
                }
                else {
                    alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Erdnüssewhileaway +" peanuts while being away.\nYou have earned "+ state.Erdnussbäumewhileaway +" peanut bushes while being away.");
                }
            }
            else {
                if (state.Bonsaiwhileaway>0) {
                    alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Erdnüssewhileaway +" peanuts while being away.\nA bonsai grew! ");  
                }
                else {
                    alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Erdnüssewhileaway +" peanuts while being away.\n");
                }
            }
        }
        else if (state.Erdnussbäumewhileaway>0) {
            if (state.Bonsaiwhileaway>0) {
                alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Erdnussbäumewhileaway +" peanut bushes while being away.\nA bonsai grew!");  
            }
            else {
                alert("You have been "+ state.zeitsincesave +" seconds away.\nYou have earned "+ state.Erdnussbäumewhileaway +" peanut bushes while being away.");
            }
        }
        else {
            if (state.Bonsaiwhileaway>0) {
                alert("You have been "+ state.zeitsincesave +" seconds away.\nA bonsai grew!");  
            }
            else {
                alert("You have been "+ state.zeitsincesave +" seconds away.");
            }
        }
        state.Geldwhileaway =0;
        state.Erdnüssewhileaway =0;
        state.Erdnussbäumewhileaway =0;
        state.Bonsaiwhileaway =0;  
    }
}

setInterval(function Autosave() {
    state.zeitsave = Date.now();
    localStorage.setItem('state', JSON.stringify(state));
    state.zeitstamp +=1;
    state.zeitautosave = new Date
    document.getElementById("ZeitAutosave").innerText ="Autosaved";
    gtag('event', 'Autosave');
}, 30000)

setInterval(function() {
    if (state.AnzahlErdnussbäume>=0.5) {
        state.ErdnüsseproSekunde = prettifyzwei(Math.trunc(state.AnzahlErdnussbäume+0.001)/100);
        document.getElementById("ErdnüssepS").innerText =state.ErdnüsseproSekunde.toLocaleString('en', {minimumFractionDigits: 2});
    }
    else {
        state.ErdnüsseproSekunde =0;
        document.getElementById("ErdnüssepS").innerText =state.ErdnüsseproSekunde.toLocaleString('en', {minimumFractionDigits: 2});
    }
    if (state.AnzahlErdnussplantagen>=0.5) {
        state.ErdnussbäumeproSekunde = prettifyzwei(Math.trunc(state.AnzahlErdnussplantagen+0.001)/100);
        document.getElementById("ErdnussbäumepS").innerText =state.ErdnussbäumeproSekunde.toLocaleString('en', {minimumFractionDigits: 2});
    }
    else {
        state.ErdnussbäumeproSekunde =0;
        document.getElementById("ErdnussbäumepS").innerText =state.ErdnussbäumeproSekunde.toLocaleString('en', {minimumFractionDigits: 2});
    }
    if (state.BonsaiGrowing==1) {
        document.getElementById("ZeitBonsaiheranziehen").innerText =Zeit(state.BonsaiGrowth);
    }
    state.Random =Math.random() //Random number between 0 and 1
    document.getElementById("Random").innerText = state.Random;
}, 100)

setInterval(function() { //1 Sekunde Intervallfunktion für Erdnüsse pro Sekunde
    state.zeitjetzt = Date.now();
    state.zeittillautosave = Math.floor(state.zeitjetzt/1000) - Math.floor(state.zeitautosave/1000);
    if (state.zeitstamp>=1) {
        state.zeitstamp +=1;
        if (state.zeitstamp>=2.9) {
            state.zeitstamp =0;
        }
    }
    else {
        document.getElementById("ZeitAutosave").innerText ="Time since autosave: "+state.zeittillautosave+" seconds";
    }
    document.getElementById("ZeitlastSave").innerText =state.zeitsincesave; //Disable later
    state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.GeldproSekunde);
    document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
    state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse+state.ErdnüsseproSekunde);
    document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
    state.AnzahlErdnussbäume =prettifyzwei(state.AnzahlErdnussbäume+state.ErdnussbäumeproSekunde);
    document.getElementById("Erdnussbäume").innerText =state.AnzahlErdnussbäume.toLocaleString('en', {minimumFractionDigits: 2});
    if (state.BonsaiGrowing==1) {
        state.BonsaiGrowth -= 1;
        document.getElementById("ZeitBonsaiheranziehen").innerText =Zeit(state.BonsaiGrowth);
        if (state.BonsaiGrowth==0) {
            if (state.Random>=prettifydrei(state.MBonRandom)) {
                state.AnzahlMBonsais +=1;
                gtag('event', 'Grown: Mythical bonsai');
                document.getElementById("MBonsais").innerText =state.AnzahlMBonsais;
            }
            else if (state.Random>=prettifydrei(state.LBonRandom)) {
                state.AnzahlLBonsais +=1;
                gtag('event', 'Grown: Legendary bonsai');
                document.getElementById("LBonsais").innerText =state.AnzahlLBonsais;
            }
            else if (state.Random>=prettifydrei(state.SBonRandom)) {
                state.AnzahlSBonsais +=1;
                gtag('event', 'Grown: Special bonsai');
                document.getElementById("SBonsais").innerText =state.AnzahlSBonsais;
            }
            else if (state.Random>=prettifydrei(state.UBonRandom)) {
                state.AnzahlUBonsais +=1;
                gtag('event', 'Grown: Uncommon bonsai');
                document.getElementById("UBonsais").innerText =state.AnzahlUBonsais;
            }
            else {
                state.AnzahlCBonsais +=1;
                gtag('event', 'Grown: Common bonsai');
                document.getElementById("CBonsais").innerText =state.AnzahlCBonsais;
            }  
            state.BonsaiGrowing=0
            document.getElementById("ZeitBonsaiheranziehen").innerText ="-";
            document.getElementById("Bonsaiheranziehen").innerText ="Not active";
            document.getElementById("RushCycleText").innerText ="- 1 Second";
            document.getElementById("GeduldCycleText").innerText ="+ 5 Seconds";
            state.RushCycle =1;
            document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
            state.RushCycles =0;
            document.getElementById("RushCycles").innerText =state.RushCycles; //Delete later
            state.GeduldCycle =1;
            document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
            state.GeduldCycles =0;
            document.getElementById("GeduldCycles").innerText =state.GeduldCycles; //Delete later
            state.CBonShow =state.CBonBase;
            document.getElementById("CBon").innerText =state.CBonShow;
            state.UBonShow =state.UBonBase;
            document.getElementById("UBon").innerText =state.UBonShow;
            state.SBonShow =state.SBonBase;
            document.getElementById("SBon").innerText =state.SBonShow;
            state.LBonShow =state.LBonBase;
            document.getElementById("LBon").innerText =state.LBonShow;
            state.MBonShow =state.MBonBase;
            document.getElementById("MBon").innerText =state.MBonShow;
            state.UBonRandom =state.UBonRandomBase;
            state.SBonRandom =state.SBonRandomBase;
            state.LBonRandom =state.LBonRandomBase;
            state.MBonRandom =state.MBonRandomBase;
            document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
            document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
            if (state.AnzahlMBonsais>=1) {
                state.zeitjetzt = Date.now();
                state.zeitwin = Math.floor(state.zeitjetzt/1000) - Math.floor(state.zeitstart/1000);
                alert("A mythical bonsai, you won the game!\nIt took you "+ HighscoreZeit(state.zeitwin) +" seconds.\nTry playing again and beating your time!");
            }
        }
    }
}, 1000)

function Zeit(input) {
    var min=Math.floor(input/60);
    var sec=input-(min*60);
    if (sec<10) {sec="0"+sec};
    return min+":"+sec;
}

function HighscoreZeit (input) {
    var day=Math.floor(input/60/60/24)
    var hrs=Math.floor((input/60/60)-(day*24))
    var min=Math.floor((input/60)-(day*24*60+hrs*60));
    var sec=input-(day*24*60*60+hrs*60*60+min*60);
    gtag('event', 'Win in: '+day+' days and '+hrs+' hours');
    return day+" days, "+hrs+" hours, "+min+" minutes and "+sec;
}

function prettify(input) { //Um eine Dezimalstelle anzuzeigen
    var output= Math.round(input * 10) / 10;
    return output;
}

function prettifyzwei(input) { //Um zwei Dezimalstellen anzuzeigen
    var output= Math.round(input * 100) / 100;
    return output;
}

function prettifydrei(input) { //Um drei Dezimalstellen anzuzeigen
    var output= Math.round(input * 1000) / 1000;
    return output;
}

function PluseinGeld() { //Kommentar
    state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.GeldproKlick);
    document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
    state.geldevent +=1;
    if (state.geldevent==10) {
        gtag('event', 'Clicked: Money (10x)');  
        state.geldevent =0;
    }
}

function Erdnusskaufen() {
    if (state.AnzahlGeld>=state.PreisErdnüsse) {
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisErdnüsse);
        document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse+state.ErdnussproKlick);
        document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
        state.PreisErdnüsse=prettifyzwei(state.PreisErdnüsse*1.01);
        document.getElementById("KostenErdnuss").innerText =state.PreisErdnüsse;
        gtag('event', 'Clicked: Peanuts');  
    } 
}

function Erdnussbaumpflanzen() {
    if (state.AnzahlErdnüsse>=state.PreisErdnussbäume) {
        state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-state.PreisErdnussbäume);
        document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
        state.AnzahlErdnussbäume =prettifyzwei(state.AnzahlErdnussbäume+state.ErdnussbaumproKlick);
        document.getElementById("Erdnussbäume").innerText =state.AnzahlErdnussbäume.toLocaleString('en', {minimumFractionDigits: 2});
        state.PreisErdnussbäume=prettify(state.PreisErdnussbäume*1.05);
        document.getElementById("KostenErdnussbaum").innerText =prettify(state.PreisErdnussbäume);
        gtag('event', 'Clicked: Peanut bushes'); 
    } 
}

function Erdnussplantageanbauen() {
    if (state.AnzahlErdnussbäume>=state.PreisErdnussplantagen) {
        state.AnzahlErdnussbäume =prettifyzwei(state.AnzahlErdnussbäume-state.PreisErdnussplantagen);
        document.getElementById("Erdnussbäume").innerText =state.AnzahlErdnussbäume.toLocaleString('en', {minimumFractionDigits: 2});
        state.AnzahlErdnussplantagen +=state.ErdnussplantageproKlick;
        document.getElementById("Erdnussplantagen").innerText = state.AnzahlErdnussplantagen;
        state.PreisErdnussplantagen =prettify(state.PreisErdnussplantagen*1.1);
        document.getElementById("KostenErdnussplantage").innerText =prettify(state.PreisErdnussplantagen);
        gtag('event', 'Clicked: Peanut plantations'); 
    } 
}

function Erdnussverkaufenx100() {
    if (state.AnzahlErdnüsse>=10) {
        var verkaufen =Math.floor((state.AnzahlErdnüsse/100)*state.percenteins);
        if (verkaufen>10) {
            state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-verkaufen);
            document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+(verkaufen*0.4));
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
            state.percenteinsevent +=1;
            if (state.percenteinsevent==10) {
            gtag('event', 'Sold: '+state.percenteins+'% Peanuts (10x)');  
            state.percenteinsevent =0;
            }
        }
        else {
            state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-10);
            document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+4);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        }
    } 
}

function Erdnussverkaufenx200() {
    if (state.AnzahlErdnüsse>=25) {
        var verkaufen =Math.floor((state.AnzahlErdnüsse/100)*state.percentzwei);
        if (verkaufen>25) {
            state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-verkaufen);
            document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+(verkaufen*0.3));
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
            state.percentzweievent +=1;
            if (state.percentzweievent==10) {
            gtag('event', 'Sold: '+state.percentzwei+'% Peanuts (10x)');  
            state.percentzweievent =0;    
            }
        }
        else {
            state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-25);
            document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+7.5);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        }
    } 
}

function Erdnussverkaufenx1000() {
    if (state.AnzahlErdnüsse>100) {
        var verkaufen =Math.floor((state.AnzahlErdnüsse/100)*state.percentvier);
        if (verkaufen>=100) {
            state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-verkaufen);
            document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+(verkaufen*0.25));
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
            state.percentvierevent +=1;
            if (state.percentvierevent==10) {
            gtag('event', 'Sold: '+state.percentvier+'% Peanuts (10x)');  
            state.percentvierevent =0;
            }
        }
        else {
            state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-100);
            document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+25);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        }
    } 
}

function MehrProzent() {
    if (state.AnzahlErdnüsse>=state.PreisBessererPreis) { 
        if (state.percenteins<3) {
            state.percenteins =prettify(state.percenteins+0.1);
            state.percentzwei =prettify(state.percentzwei+0.2);
            state.percentvier =prettify(state.percentvier+0.3);
            document.getElementById("Percent1").innerText =state.percenteins.toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("Percent2").innerText =state.percentzwei.toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("Percent4").innerText =state.percentvier.toLocaleString('en', {minimumFractionDigits: 1});
            state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-state.PreisBessererPreis);
            document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toLocaleString('en', {minimumFractionDigits: 2});
            state.PreisBessererPreis = state.PreisBessererPreis*2;
            document.getElementById("PreisBessererPreis").innerText =state.PreisBessererPreis.toLocaleString('en');
            gtag('event', 'Upgrade: Higher Percentage');
            if (state.percenteins>=3) {
                document.getElementById("PreisBessererPreisMax").innerText ="Max. upgrade reached";
                gtag('event', 'Upgrade: Higher Percentage - Maximum');
            }
        }
    }
}

function AutoSell() {
    if (state.AnzahlErdnussbäume>=state.PreisAutoSell) {
        state.GeldproSekunde =prettify(state.GeldproSekunde+state.GeldAutoSell);
        document.getElementById("GeldproSekunde").innerText =state.GeldproSekunde.toLocaleString('en', {minimumFractionDigits: 1});
        state.AnzahlErdnussbäume =prettifyzwei(state.AnzahlErdnussbäume-state.PreisAutoSell);
        document.getElementById("Erdnussbäume").innerText = state.AnzahlErdnussbäume.toLocaleString('en', {minimumFractionDigits: 2});
        state.PreisAutoSell = state.PreisAutoSell*2;
        document.getElementById("PreisAutoSell").innerText =state.PreisAutoSell.toLocaleString('en');
        gtag('event', 'Auto Sell');
        if (state.GeldproSekunde>=0.2) {
            state.GeldAutoSell =prettify(state.GeldAutoSell*2);
        }
        document.getElementById("AutoSellErdnuss").innerText =prettify(state.GeldproSekunde+state.GeldAutoSell).toLocaleString('en', {minimumFractionDigits: 1});
    }
}

function GeldDoppel() {
    if (state.AnzahlGeld>=state.PreisGeldDoppel) {
        state.GeldproKlick = prettify(state.GeldproKlick*2);
        document.getElementById("KlickGeld").innerText =state.GeldproKlick.toLocaleString('en', {minimumFractionDigits: 1});
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisGeldDoppel);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        state.PreisGeldExtra =prettify(state.PreisGeldExtra*2);
        state.PreisGeldDoppel =prettify(state.PreisGeldDoppel*2+state.PreisGeldExtra);
        document.getElementById("PreisGeldDoppel").innerText =state.PreisGeldDoppel.toLocaleString('en');
        gtag('event', 'Doubled: Money');
    }
}

function ErdnussDoppel() {
    if (state.AnzahlGeld>=state.PreisErdnussDoppel) {
        state.ErdnussproKlick = state.ErdnussproKlick*2;
        document.getElementById("KlickErdnuss").innerText =state.ErdnussproKlick;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisErdnussDoppel);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        state.PreisErdnussDoppel = state.PreisErdnussDoppel*3;
        document.getElementById("PreisErdnussDoppel").innerText =state.PreisErdnussDoppel.toLocaleString('en');
        gtag('event', 'Doubled: Peanuts');
    }
}

function ErdnussbaumDoppel() {
    if (state.AnzahlGeld>=state.PreisErdnussbaumDoppel) {
        state.ErdnussbaumproKlick = state.ErdnussbaumproKlick*2;
        document.getElementById("KlickErdnussbaum").innerText =state.ErdnussbaumproKlick;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisErdnussbaumDoppel);
        document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        state.PreisErdnussbaumDoppel = state.PreisErdnussbaumDoppel*4;
        document.getElementById("PreisErdnussbaumDoppel").innerText =state.PreisErdnussbaumDoppel.toLocaleString('en');
        gtag('event', 'Doubled: Bushes');
    }
}

function ErdnussplantageDoppel() {
    if (state.AnzahlGeld>=state.PreisErdnussplantageDoppel) {
        state.ErdnussplantageproKlick = state.ErdnussplantageproKlick*2;
        document.getElementById("KlickErdnussplantage").innerText =state.ErdnussplantageproKlick;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisErdnussplantageDoppel);
        document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        state.PreisErdnussplantageDoppel = state.PreisErdnussplantageDoppel*5;
        document.getElementById("PreisErdnussplantageDoppel").innerText =state.PreisErdnussplantageDoppel.toLocaleString('en');
        gtag('event', 'Doubled: Plantations');
    }
}

function WenigerZeitFormen() {
    if (state.AnzahlGeld>=state.PreisZeitFormen) {
        if (state.ZeitFormen>150) {
            state.ZeitFormen = Math.floor(state.ZeitFormen-15);
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisZeitFormen);
            document.getElementById("Geld").innerText = state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
            state.PreisZeitFormen = Math.floor(state.PreisZeitFormen*2);
            document.getElementById("PreisWenigerZeitFormen").innerText =state.PreisZeitFormen.toLocaleString('en');
            document.getElementById("WenigerZeit").innerText =Zeit(state.ZeitFormen-15);
            gtag('event', 'Upgrade: Quicker growing');
            if (state.ZeitFormen==150) {
                document.getElementById("WenigerZeit").innerText =Zeit(state.ZeitFormen);
                document.getElementById("WenigerZeitMax").innerText ="Max. upgrade reached";
                gtag('event', 'Upgrade: Quicker growing - Maximum');
            }
        }
    }
}

function Offline() {
    if (state.AnzahlErdnussplantagen>=state.PreisOffline) {
        if (state.Offline<1) {
            state.Offline =prettify(state.Offline+0.1);
            state.AnzahlErdnussplantagen =state.AnzahlErdnussplantagen-state.PreisOffline;
            document.getElementById("Erdnussplantagen").innerText = state.AnzahlErdnussplantagen;
            state.PreisOffline = (state.PreisOffline*2)+6;
            document.getElementById("PreisOffline").innerText =state.PreisOffline;
            gtag('event', 'Upgrade: Offline gaining');
            if (state.Offline>=1) {
                document.getElementById("OfflineMax").innerText ="Max. upgrade reached";
                document.getElementById("OfflineProzent").innerText =state.Offline*100;
                gtag('event', 'Upgrade: Offline gaining - Maximum');
            }
            else {
            document.getElementById("OfflineProzent").innerText =(state.Offline*100)+10;
            }
        }
    } 
}

function BonsaiRushUpgrade() {
    if (state.AnzahlGeld>=state.PreisRushUpgrade) {
        if (state.RushUpgrade<10) {
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisRushUpgrade);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
            state.PreisRushUpgrade =state.PreisRushUpgrade*2;
            document.getElementById("PreisRushUpgrade").innerText =state.PreisRushUpgrade.toLocaleString('en');
            state.RushUpgrade =Math.floor(state.RushUpgrade+1);
            gtag('event', 'Upgrade: Rushing');
            if (state.RushUpgrade>=10) {
                document.getElementById("RushUpgradeMax").innerText ="Max. upgrade reached";
                gtag('event', 'Upgrade: Rushing - Maximum');
            }
        }
    }
}

function BonsaiGeduldUpgrade() {
    if (state.AnzahlGeld>=state.PreisGeduldUpgrade) {
        if (state.GeduldUpgrade<30) {
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisGeduldUpgrade);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
            state.PreisGeduldUpgrade =state.PreisGeduldUpgrade*2;
            document.getElementById("PreisGeduldUpgrade").innerText =state.PreisGeduldUpgrade.toLocaleString('en');
            state.GeduldUpgrade =state.GeduldUpgrade+1;
            if (state.GeduldUpgrade==1 || state.GeduldUpgrade==11 || state.GeduldUpgrade==21) {
                state.GeduldUpgrade1 +=1;
            }
            if (state.GeduldUpgrade==2 || state.GeduldUpgrade==12 || state.GeduldUpgrade==22) {
                state.GeduldUpgrade2 +=1;
            }
            if (state.GeduldUpgrade==3 || state.GeduldUpgrade==13 || state.GeduldUpgrade==23) {
                state.GeduldUpgrade3 +=1;
            }
            if (state.GeduldUpgrade==4 || state.GeduldUpgrade==14 || state.GeduldUpgrade==24) {
                state.GeduldUpgrade4 +=1;
            }
            if (state.GeduldUpgrade==5 || state.GeduldUpgrade==15 || state.GeduldUpgrade==25) {
                state.GeduldUpgrade5 +=1;
            }
            if (state.GeduldUpgrade==6 || state.GeduldUpgrade==16 || state.GeduldUpgrade==26) {
                state.GeduldUpgrade6 +=1;
            }
            if (state.GeduldUpgrade==7 || state.GeduldUpgrade==17 || state.GeduldUpgrade==27) {
                state.GeduldUpgrade7 +=1;
            }
            if (state.GeduldUpgrade==8 || state.GeduldUpgrade==18 || state.GeduldUpgrade==28) {
                state.GeduldUpgrade8 +=1;
            }
            if (state.GeduldUpgrade==9 || state.GeduldUpgrade==19 || state.GeduldUpgrade==29) {
                state.GeduldUpgrade9 +=1;
            }
            if (state.GeduldUpgrade==10 || state.GeduldUpgrade==20 || state.GeduldUpgrade==30) {
                state.GeduldUpgrade10 +=1;
            }
            gtag('event', 'Upgrade: Patience');
            if (state.GeduldUpgrade>=30) {
                document.getElementById("GeduldUpgradeMax").innerText ="Max. upgrade reached";
                gtag('event', 'Upgrade: Patience - Maximum');
            }
        }
    }
}

function BessereQualitätBonsai() {
    if (state.AnzahlGeld>=state.PreisBessereQualitätBonsai) {
        if (state.QualitätUpgrade<30) {
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisBessereQualitätBonsai);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
            if (state.UBonRandomBase>=0.024 & state.UBonRandom>=0.024) {
                state.CBonBase =prettify(state.CBonBase-2.4);
                state.CBonShow =prettify(state.CBonShow-2.4);
                document.getElementById("CBon").innerText =state.CBonShow;
                state.UBonBase =prettify(state.UBonBase+1.2);
                state.UBonShow =prettify(state.UBonShow+1.2);
                state.UBonRandomBase =prettifydrei(state.UBonRandomBase-0.024);
                state.UBonRandom =prettifydrei(state.UBonRandom-0.024);
                document.getElementById("UBon").innerText =state.UBonShow;
                document.getElementById("UBonRandomBase").innerText =state.UBonRandomBase; //Delete later
                document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                state.SBonBase =prettify(state.SBonBase+0.6);
                state.SBonShow =prettify(state.SBonShow+0.6);
                state.SBonRandomBase =prettifydrei(state.SBonRandomBase-0.012);
                state.SBonRandom =prettifydrei(state.SBonRandom-0.012);
                document.getElementById("SBon").innerText =state.SBonShow;
                document.getElementById("SBonRandomBase").innerText =state.SBonRandomBase; //Delete later
                document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                state.LBonBase =prettify(state.LBonBase+0.4);
                state.LBonShow =prettify(state.LBonShow+0.4);
                state.LBonRandomBase =prettifydrei(state.LBonRandomBase-0.006);
                state.LBonRandom =prettifydrei(state.LBonRandom-0.006);
                document.getElementById("LBon").innerText =state.LBonShow;
                document.getElementById("LBonRandomBase").innerText =state.LBonRandomBase; //Delete later
                document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                state.MBonBase =prettify(state.MBonBase+0.2);
                state.MBonShow =prettify(state.MBonShow+0.2);
                state.MBonRandomBase =prettifydrei(state.MBonRandomBase-0.002);
                state.MBonRandom =prettifydrei(state.MBonRandom-0.002);
                document.getElementById("MBon").innerText =state.MBonShow;
                document.getElementById("MBonRandomBase").innerText =state.MBonRandomBase; //Delete later
                document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
                }
            else if (state.UBonRandomBase>0.024 & state.UBonRandom>=0) {
                state.CBonBase =prettify(state.CBonBase-2.4);
                state.CBonShow =prettify(state.CBonShow-state.CBonShow);
                document.getElementById("CBon").innerText =state.CBonShow;
                state.UBonBase =prettify(state.UBonBase+1.2);
                state.UBonShow =prettify(state.UBonShow+(1.2+((state.UBonRandom-0.024)*100)));
                state.UBonRandomBase =prettifydrei(state.UBonRandomBase-0.024);
                state.UBonRandom =prettifydrei(state.UBonRandom-state.UBonRandom);
                document.getElementById("UBon").innerText =state.UBonShow;
                document.getElementById("UBonRandomBase").innerText =state.UBonRandomBase; //Delete later
                document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                state.SBonBase =prettify(state.SBonBase+0.6);
                state.SBonShow =prettify(state.SBonShow+0.6);
                state.SBonRandomBase =prettifydrei(state.SBonRandomBase-0.012);
                state.SBonRandom =prettifydrei(state.SBonRandom-0.012);
                document.getElementById("SBon").innerText =state.SBonShow;
                document.getElementById("SBonRandomBase").innerText =state.SBonRandomBase; //Delete later
                document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                state.LBonBase =prettify(state.LBonBase+0.4);
                state.LBonShow =prettify(state.LBonShow+0.4);
                state.LBonRandomBase =prettifydrei(state.LBonRandomBase-0.006);
                state.LBonRandom =prettifydrei(state.LBonRandom-0.006);
                document.getElementById("LBon").innerText =state.LBonShow;
                document.getElementById("LBonRandomBase").innerText =state.LBonRandomBase; //Delete later
                document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                state.MBonBase =prettify(state.MBonBase+0.2);
                state.MBonShow =prettify(state.MBonShow+0.2);
                state.MBonRandomBase =prettifydrei(state.MBonRandomBase-0.002);
                state.MBonRandom =prettifydrei(state.MBonRandom-0.002);
                document.getElementById("MBon").innerText =state.MBonShow;
                document.getElementById("MBonRandomBase").innerText =state.MBonRandomBase; //Delete later
                document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
            }
            else {
                state.CBonBase =prettify(state.CBonBase-state.CBonBase);
                state.CBonShow =prettify(state.CBonShow-state.CBonShow);
                document.getElementById("CBon").innerText =state.CBonShow;
                state.UBonBase =prettify(state.UBonBase+(1.2+((state.UBonRandomBase-0.024)*100)));
                state.UBonShow =prettify(state.UBonShow+(1.2+((state.UBonRandom-0.024)*100)));
                state.UBonRandomBase =prettifydrei(state.UBonRandomBase-state.UBonRandomBase);
                state.UBonRandom =prettifydrei(state.UBonRandom-state.UBonRandom);
                document.getElementById("UBon").innerText =state.UBonShow;
                document.getElementById("UBonRandomBase").innerText =state.UBonRandomBase; //Delete later
                document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                state.SBonBase =prettify(state.SBonBase+0.6);
                state.SBonShow =prettify(state.SBonShow+0.6);
                state.SBonRandomBase =prettifydrei(state.SBonRandomBase-0.012);
                state.SBonRandom =prettifydrei(state.SBonRandom-0.012);
                document.getElementById("SBon").innerText =state.SBonShow;
                document.getElementById("SBonRandomBase").innerText =state.SBonRandomBase; //Delete later
                document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                state.LBonBase =prettify(state.LBonBase+0.4);
                state.LBonShow =prettify(state.LBonShow+0.4);
                state.LBonRandomBase =prettifydrei(state.LBonRandomBase-0.006);
                state.LBonRandom =prettifydrei(state.LBonRandom-0.006);
                document.getElementById("LBon").innerText =state.LBonShow;
                document.getElementById("LBonRandomBase").innerText =state.LBonRandomBase; //Delete later
                document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                state.MBonBase =prettify(state.MBonBase+0.2);
                state.MBonShow =prettify(state.MBonShow+0.2);
                state.MBonRandomBase =prettifydrei(state.MBonRandomBase-0.002);
                state.MBonRandom =prettifydrei(state.MBonRandom-0.002);
                document.getElementById("MBon").innerText =state.MBonShow;
                document.getElementById("MBonRandomBase").innerText =state.MBonRandomBase; //Delete later
                document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
            }
        }
        state.PreisBessereQualitätBonsai =state.PreisBessereQualitätBonsai*2;
        document.getElementById("PreisBessereQualitätBonsai").innerText =state.PreisBessereQualitätBonsai.toLocaleString('en');
        state.QualitätUpgrade =Math.floor(state.QualitätUpgrade+1);
        gtag('event', 'Upgrade: Quality');
        if (state.QualitätUpgrade>=30) {
            document.getElementById("BessereQualitätMax").innerText ="Max. upgrade reached";
            gtag('event', 'Upgrade: Quality - Maximum');
        }
    }
}
                                                                                                           
function Bonsaikaufen () {
    if (state.AnzahlGeld>=1000) {
        if (state.BonsaiGrowing==0) {
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-1000);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
            state.BonsaiGrowth =state.ZeitFormen;
            document.getElementById("ZeitBonsaiheranziehen").innerText =Zeit(state.BonsaiGrowth);
            state.BonsaiGrowing += 1;
            document.getElementById("Bonsaiheranziehen").innerText ="Active";
        }
    }
}

function BonsaiRush () {
    if (state.BonsaiGrowing==1) {
        if (state.BonsaiGrowth<=1) {
        }
        else{
        if (state.RushCycles<9.5) {
            if (state.RushCycle<2) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=1) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<3) {
                state.RushCycle +=1;       
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=3) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<4) {
                state.RushCycle +=1;       
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=5) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.SBonShow =prettify(state.SBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<5) {
                state.RushCycle +=1; 
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=2) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<6) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=4) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<7) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=6) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.SBonShow =prettify(state.SBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<8) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=8) {
                }
                else {
                    if (state.LBonRandom<=0.9999) {
                        state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                        state.LBonRandom =prettifydrei(state.LBonRandom+0.001);
                        state.UBonShow =prettify(state.UBonShow+0.1);
                        state.LBonShow =prettify(state.LBonShow-0.1);
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                        state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                        state.CBonShow =prettify(state.CBonShow+0.1);
                        state.SBonShow =prettify(state.SBonShow-0.1);
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("UBon").innerText =state.UBonShow;
                    document.getElementById("LBon").innerText =state.LBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<9) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=1) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<10) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=3) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<11) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=5) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.SBonShow =prettify(state.SBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<12) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=2) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<13) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=4) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<14) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=7) {
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                    state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                    state.CBonShow =prettify(state.CBonShow+0.1);
                    state.SBonShow =prettify(state.SBonShow-0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<15) {
                state.RushCycle +=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                if (state.RushUpgrade>=9) {
                }
                else {
                    if (state.LBonRandom<=0.9999) {
                        state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                        state.LBonRandom =prettifydrei(state.LBonRandom+0.001);
                        state.UBonShow =prettify(state.UBonShow+0.1);
                        state.LBonShow =prettify(state.LBonShow-0.1);
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                        state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                        state.CBonShow =prettify(state.CBonShow+0.1);
                        state.SBonShow =prettify(state.SBonShow-0.1);  
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("UBon").innerText =state.UBonShow;
                    document.getElementById("LBon").innerText =state.LBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.RushCycle<16) {
                state.RushCycle=1;
                document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
                state.RushCycles +=1;
                document.getElementById("RushCycles").innerText =state.RushCycles; //Delete later
                if (state.RushCycles>9.5) {
                    document.getElementById("RushCycleText").innerText ="Maximum reached";
                }
                if (state.RushUpgrade>=10) {
                }
                else {
                    if (state.MBonRandom<=0.9999) {
                        state.LBonRandom =prettifydrei(state.LBonRandom+0.001);
                        state.MBonRandom =prettifydrei(state.MBonRandom+0.001);
                        state.SBonShow =prettify(state.SBonShow+0.1);
                        state.MBonShow =prettify(state.MBonShow-0.1);
                    }
                    else {
                        if (state.LBonRandom<=0.9999) {
                            state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                            state.LBonRandom =prettifydrei(state.LBonRandom+0.001);
                            state.UBonShow =prettify(state.UBonShow+0.1);
                            state.LBonShow =prettify(state.LBonShow-0.1);
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.UBonRandom =prettifydrei(state.UBonRandom+0.001);
                            state.SBonRandom =prettifydrei(state.SBonRandom+0.001);
                            state.CBonShow =prettify(state.CBonShow+0.1);
                            state.SBonShow =prettify(state.SBonShow-0.1);  
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                            document.getElementById("CBon").innerText =state.CBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
                    document.getElementById("SBon").innerText =state.SBonShow;
                    document.getElementById("MBon").innerText =state.MBonShow;
                }
                state.BonsaiGrowth -=1;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
        }
        }
    }
}

function BonsaiGeduld () {
    if (state.BonsaiGrowing==1) {
        if (state.GeduldCycles<9.5) {
            if (state.GeduldCycle<2) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade1));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade1));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade1));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade1) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade1)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade1)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade1));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade1));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade1));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade1) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade1)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade1)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.UBonShow =prettify(state.UBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade1));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade1));
                        state.UBonShow =prettify(state.UBonShow+(0.1*state.GeduldUpgrade1));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<3) {
                state.GeduldCycle +=1;       
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade3));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade3));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade3));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade3) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade3)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade3)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade3));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade3));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade3));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade3) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade3)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade3)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.UBonShow =prettify(state.UBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade3));
                    state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade3));
                    state.UBonShow =prettify(state.UBonShow+(0.1*state.GeduldUpgrade3));
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<4) {
                state.GeduldCycle +=1;       
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade5));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade5));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade5));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade5) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade5)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade5)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade5));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade5));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade5));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade5) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade5)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade5)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade5));
                        state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade5));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade5));
                        state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade5));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<5) {
                state.GeduldCycle +=1; 
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade2));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade2));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade2));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade2) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade2)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade2)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade2));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade2));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade2));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade2) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade2)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade2)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.UBonShow =prettify(state.UBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade2));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade2));
                        state.UBonShow =prettify(state.UBonShow+(0.1*state.GeduldUpgrade2));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<6) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade4));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade4));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade4));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade4) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade4)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade4)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade4));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade4));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade4));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade4) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade4)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade4)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.UBonShow =prettify(state.UBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade4));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade4));
                        state.UBonShow =prettify(state.UBonShow+(0.1*state.GeduldUpgrade4));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<7) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade6));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade6));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade6));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade6) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade6)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade6)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade6));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade6));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade6));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade6) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade6)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade6)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade6));
                        state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade6));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade6));
                        state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade6));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<8) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.SBonRandom<=0) {
                    state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade8));
                    state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade8));
                    state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade8));
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("SBon").innerText =state.SBonShow;
                    document.getElementById("LBon").innerText =state.LBonShow;
                }
                else {
                    if (state.SBonRandom<0.001*state.GeduldUpgrade8) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade8)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade8)-state.randomfloating);
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                        state.LBonRandom =prettifydrei(state.LBonRandom-state.randomrest);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                        state.LBonShow =prettify(state.LBonShow+prettify(state.randomrest*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    
                        state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                        state.SBonShow =prettify(state.SBonShow-prettify(state.randomrest*100));
                        state.LBonShow =prettify(state.LBonShow+prettify(state.randomrest*100));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade8));
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade8));
                        state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade8));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade8));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<9) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade1));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade1));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade1));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade1) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade1)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade1)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade1));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade1));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade1));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade1) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade1)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade1)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.UBonShow =prettify(state.UBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade1));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade1));
                        state.UBonShow =prettify(state.UBonShow+(0.1*state.GeduldUpgrade1));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<10) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade3));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade3));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade3));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade3) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade3)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade3)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade3));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade3));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade3));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade3) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade3)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade3)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.UBonShow =prettify(state.UBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade3));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade3));
                        state.UBonShow =prettify(state.UBonShow+(0.1*state.GeduldUpgrade3));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<11) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade5));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade5));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade5));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade5) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade5)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade5)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade5));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade5));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade5));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade5) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade5)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade5)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade5));
                        state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade5));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade5));
                        state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade5));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<12) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade2));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade2));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade2));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade2) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade2)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade2)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade2));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade2));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade2));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade2) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade2)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade2)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.UBonShow =prettify(state.UBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade2));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade2));
                        state.UBonShow =prettify(state.UBonShow+(0.1*state.GeduldUpgrade2));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<13) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade4));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade4));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade4));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade4) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade4)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade4)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade4));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade4));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade4));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade4) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade4)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade4)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.UBonShow =prettify(state.UBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade4));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade4));
                        state.UBonShow =prettify(state.UBonShow+(0.1*state.GeduldUpgrade4));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("UBon").innerText =state.UBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<14) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.UBonRandom<=0) {
                    if (state.SBonRandom<=0) {
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade7));
                        state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade7));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade7));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        if (state.SBonRandom<0.001*state.GeduldUpgrade7) {
                            state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade7)-state.UBonRandom);
                            state.randomrest =prettifydrei((0.001*state.GeduldUpgrade7)-state.randomfloating);
                            
                            state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                            state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                            state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                            
                            state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                            state.SBonShow =prettify(state.SBonShow-prettify(state.randomfloating*100));
                            state.LBonShow =prettify(state.LBonShow+prettify(state.randomfloating*100));
                            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                            document.getElementById("SBon").innerText =state.SBonShow;
                            document.getElementById("LBon").innerText =state.LBonShow;
                        }
                        else {
                            state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade7));
                            state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade7));
                            state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade7));
                            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                            document.getElementById("UBon").innerText =state.UBonShow;
                            document.getElementById("SBon").innerText =state.SBonShow;
                        }
                    }
                }
                else {
                    if (state.UBonRandom<0.001*state.GeduldUpgrade7) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade7)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade7)-state.randomfloating);
                        
                        state.UBonRandom =prettifydrei(state.UBonRandom-state.randomrest);
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                        state.CBonShow =prettify(state.CBonShow-prettify(state.randomrest*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomrest*100));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomfloating);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomfloating*100));
                        state.SBonShow =prettify(state.SBonShow+prettify(state.randomfloating*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                    else {
                        state.UBonRandom =prettifydrei(state.UBonRandom-(0.001*state.GeduldUpgrade7));
                        state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade7));
                        state.CBonShow =prettify(state.CBonShow-(0.1*state.GeduldUpgrade7));
                        state.SBonShow =prettify(state.SBonShow+(0.1*state.GeduldUpgrade7));
                        document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("CBon").innerText =state.CBonShow;
                        document.getElementById("SBon").innerText =state.SBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<15) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.SBonRandom<=0) {
                    state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade9));
                    state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade9));
                    state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade9));
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("SBon").innerText =state.SBonShow;
                    document.getElementById("LBon").innerText =state.LBonShow;
                }
                else {
                    if (state.SBonRandom<0.001*state.GeduldUpgrade9) {
                        state.randomfloating =prettifydrei((0.001*state.GeduldUpgrade9)-state.UBonRandom);
                        state.randomrest =prettifydrei((0.001*state.GeduldUpgrade9)-state.randomfloating);
                        
                        state.SBonRandom =prettifydrei(state.SBonRandom-state.randomrest);
                        state.LBonRandom =prettifydrei(state.LBonRandom-state.randomrest);
                        state.UBonShow =prettify(state.UBonShow-prettify(state.randomrest*100));
                        state.LBonShow =prettify(state.LBonShow+prettify(state.randomrest*100));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    
                        state.LBonRandom =prettifydrei(state.LBonRandom-state.randomfloating);
                        state.SBonShow =prettify(state.SBonShow-prettify(state.randomrest*100));
                        state.LBonShow =prettify(state.LBonShow+prettify(state.randomrest*100));
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("SBon").innerText =state.SBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                    else {
                        state.SBonRandom =prettifydrei(state.SBonRandom-(0.001*state.GeduldUpgrade9));
                        state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade9));
                        state.UBonShow =prettify(state.UBonShow-(0.1*state.GeduldUpgrade9));
                        state.LBonShow =prettify(state.LBonShow+(0.1*state.GeduldUpgrade9));
                        document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                        document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                        document.getElementById("UBon").innerText =state.UBonShow;
                        document.getElementById("LBon").innerText =state.LBonShow;
                    }
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<16) {
                state.GeduldCycle=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                state.GeduldCycles +=1;
                document.getElementById("GeduldCycles").innerText =state.GeduldCycles; //Delete later
                if (state.GeduldCycles>9.5) {
                    document.getElementById("GeduldCycleText").innerText ="Maximum reached";
                }
                state.LBonRandom =prettifydrei(state.LBonRandom-(0.001*state.GeduldUpgrade10));
                state.MBonRandom =prettifydrei(state.MBonRandom-(0.001*state.GeduldUpgrade10));
                state.SBonShow =prettify(state.SBonShow-(0.1*state.GeduldUpgrade10));
                state.MBonShow =prettify(state.MBonShow+(0.1*state.GeduldUpgrade10));
                document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
                document.getElementById("SBon").innerText =state.SBonShow;
                document.getElementById("MBon").innerText =state.MBonShow;
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);             
            }
        }
    }
}

function CBonsaiverkaufen () {
    if (state.AnzahlCBonsais>=1) {
        state.AnzahlCBonsais -=1;
        document.getElementById("CBonsais").innerText = state.AnzahlCBonsais;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.PreisCBonsai);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        gtag('event', 'Sold: Common bonsai');
        if (state.PreisCBonsai>1200) {
            state.PreisCBonsai -=25;
            document.getElementById("PreisCBonsai").innerText = state.PreisCBonsai.toLocaleString('en')
        }
    }
}

function UBonsaiverkaufen () {
    if (state.AnzahlUBonsais>=1) {
        state.AnzahlUBonsais -=1;
        document.getElementById("UBonsais").innerText =state.AnzahlUBonsais;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.PreisUBonsai);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        gtag('event', 'Sold: Uncommon bonsai');
        if (state.PreisUBonsai>1500) {
            state.PreisUBonsai -=140;
            document.getElementById("PreisUBonsai").innerText = state.PreisUBonsai.toLocaleString('en')
        }
    }
}

function SBonsaiverkaufen () {
    if (state.AnzahlSBonsais>=1) {
        state.AnzahlSBonsais -=1;
        document.getElementById("SBonsais").innerText =state.AnzahlSBonsais;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.PreisSBonsai);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        gtag('event', 'Sold: Special bonsai');
        if (state.PreisSBonsai>3000) {
            state.PreisSBonsai -=850;
            document.getElementById("PreisSBonsai").innerText = state.PreisSBonsai.toLocaleString('en')
        }
    }
}

function LBonsaiverkaufen () {
    if (state.AnzahlLBonsais>=1) {
        state.AnzahlLBonsais -=1;
        document.getElementById("LBonsais").innerText =state.AnzahlLBonsais;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.PreisLBonsai);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toLocaleString('en', {minimumFractionDigits: 2});
        gtag('event', 'Sold: Legendary bonsai');
        if (state.PreisLBonsai>10000) {
            state.PreisLBonsai -=5000;
            document.getElementById("PreisLBonsai").innerText = state.PreisLBonsai.toLocaleString('en')
        }
    }
}

setInterval(function() { //0,1 Sekunde Intervallfunktion für Random Percantage Number
    $(document).ready(function(){
        if(state.AnzahlGeld>=12.5){
            $('.PreisGeldDoppel').show();
            state.PreisGeldDoppelShow =1;
            if(state.AutoSellShow==0){
                $('.Placeholder').show();
            }
        }
        if(state.AnzahlGeld>=1){
            $('.Erdnüsse').show();
            state.ErdnüsseShow =1;
        }
        if(state.AnzahlGeld>=50){
            $('.PreisErdnussDoppel').show();
            state.PreisErdnussDoppelShow =1;
        }
        if(state.AnzahlErdnüsse>=10){
            $('.Erdnussbäume').show();
            state.ErdnussbäumeShow =1;
        }
        if(state.AnzahlGeld>=200 & state.ErdnussbäumeShow==1){
            $('.PreisErdnussbaumDoppel').show();
            state.PreisErdnussbaumDoppelShow =1;
        }
        if(state.AnzahlErdnussbäume>=10){
            $('.Erdnussplantagen').show();
            state.ErdnussplantagenShow =1;
        }
        if(state.AnzahlGeld>=800 & state.ErdnussplantagenShow==1){
            $('.PreisErdnussplantageDoppel').show();
            state.PreisErdnussplantageDoppelShow =1;
        }
        if(state.AnzahlErdnüsse>=10){
            $('.Erdnusshandel100').show();
            state.Erdnusshandel100Show =1;
        }
        if(state.AnzahlErdnüsse>=25){
            $('.Erdnusshandel200').show();
            state.Erdnusshandel200Show =1;
        }
        if(state.AnzahlErdnüsse>=100){
            $('.Erdnusshandel1000').show();
            state.Erdnusshandel1000Show =1;
        }
        if(state.AnzahlGeld>=1000 || state.AnzahlErdnussplantagen>=1){
            $('.Upgrades').show();
            state.UpgradesShow= 1;
        }
        if(state.AnzahlErdnussbäume>=25){
            $('.AutoSell').show();
            $('.Placeholder').hide();
            state.AutoSellShow =1;
        }
        if (state.AnzahlErdnussplantagen>=1) {
            $('.Offline').show();
            state.OfflineShow =1;
        }
        if(state.AnzahlGeld>=1000){
            $('.Bonsai').show();
            state.BonsaiShow =1;
        }
        if(state.AnzahlCBonsais>=1 || state.AnzahlUBonsais>=1 || state.AnzahlSBonsais>=1 || state.AnzahlLBonsais>=1){
            $('.Bonsaiverkaufen').show();
            state.BonsaiverkaufenShow =1;
        }
        if(state.AnzahlCBonsais>=1){
            $('.CBonsaiverkaufen').show();
            state.CBonsaiverkaufenShow =1;
        }
        if(state.AnzahlUBonsais>=1){
            $('.UBonsaiverkaufen').show();
            state.UBonsaiverkaufenShow =1;
        }
        if(state.AnzahlSBonsais>=1){
            $('.SBonsaiverkaufen').show();
            state.SBonsaiverkaufenShow =1;
        }
        if(state.AnzahlLBonsais>=1){
            $('.LBonsaiverkaufen').show();
            state.LBonsaiverkaufenShow =1;
        }
        if(state.AnzahlCBonsais>=1 || state.AnzahlUBonsais>=1 || state.AnzahlSBonsais>=1 || state.AnzahlLBonsais>=1 || state.StepShow==6){
            $('.Step6').show();
            $('.Step5').hide();
            $('.Step4').hide();
            $('.Step3').hide();
            $('.Step2').hide();
            $('.Step1').hide();
            state.StepShow =6;
        }
        else if(state.AnzahlErdnussplantagen>=1 || state.StepShow==5){
            $('.Step5').show();
            $('.Step4').hide();
            $('.Step3').hide();
            $('.Step2').hide();
            $('.Step1').hide();
            state.StepShow =5;
        }
        else if(state.AnzahlErdnussbäume>=10 || state.StepShow==4){
            $('.Step4').show();
            $('.Step3').hide();
            $('.Step2').hide();
            $('.Step1').hide();
            state.StepShow =4;
        }
        else if(state.AnzahlErdnüsse>=10 || state.StepShow==3){
            $('.Step3').show();
            $('.Step2').hide();
            $('.Step1').hide();
            state.StepShow =3;
        }
        else if(state.AnzahlGeld>=1 || state.StepShow==2){
            $('.Step2').show();
            $('.Step1').hide();
            state.StepShow =2;
        }
        if (state.AnzahlGeld>=state.PreisErdnüsse){
            var Button=document.getElementById('ButtonErdnüsse');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonErdnüsse").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonErdnüsse');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonErdnüsse").style.background = "#e7e7e7";
        }
        if (state.AnzahlErdnüsse>=state.PreisErdnussbäume){
            var Button=document.getElementById('ButtonErdnussbäume');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonErdnussbäume").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonErdnussbäume');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonErdnussbäume").style.background = "#e7e7e7";
        }
        if (state.AnzahlErdnussbäume>=state.PreisErdnussplantagen){
            var Button=document.getElementById('ButtonErdnussplantagen');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonErdnussplantagen").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonErdnussplantagen');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonErdnussplantagen").style.background = "#e7e7e7";
        }
        if (state.AnzahlGeld>=1000 & state.BonsaiGrowing==0){
            var Button=document.getElementById('ButtonBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonBonsai").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonBonsai").style.background = "#e7e7e7";
        }
        if (state.AnzahlGeld>=state.PreisGeldDoppel){
            var Button=document.getElementById('ButtonGeldDoppel');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonGeldDoppel").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonGeldDoppel');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonGeldDoppel").style.background = "#e7e7e7";
        }
        if (state.AnzahlGeld>=state.PreisErdnussDoppel){
            var Button=document.getElementById('ButtonErdnussDoppel');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonErdnussDoppel").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonErdnussDoppel');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonErdnussDoppel").style.background = "#e7e7e7";
        }
        if (state.AnzahlGeld>=state.PreisErdnussbaumDoppel){
            var Button=document.getElementById('ButtonErdnussbaumDoppel');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonErdnussbaumDoppel").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonErdnussbaumDoppel');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonErdnussbaumDoppel").style.background = "#e7e7e7";
        }
        if (state.AnzahlGeld>=state.PreisErdnussplantageDoppel){
            var Button=document.getElementById('ButtonErdnussplantageDoppel');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonErdnussplantageDoppel").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonErdnussplantageDoppel');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonErdnussplantageDoppel").style.background = "#e7e7e7";
        }
        if (state.AnzahlCBonsais>=1){
            var Button=document.getElementById('ButtonCBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonCBonsai").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonCBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonCBonsai").style.background = "#e7e7e7";
        }
        if (state.AnzahlUBonsais>=1){
            var Button=document.getElementById('ButtonUBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonUBonsai").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonUBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonUBonsai").style.background = "#e7e7e7";
        }
        if (state.AnzahlSBonsais>=1){
            var Button=document.getElementById('ButtonSBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonSBonsai").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonSBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonSBonsai").style.background = "#e7e7e7";
        }
        if (state.AnzahlLBonsais>=1){
            var Button=document.getElementById('ButtonLBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonLBonsai").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonLBonsai');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonLBonsai").style.background = "#e7e7e7";
        }
        if (state.BonsaiGrowing==1) {
            if (state.BonsaiGrowth<=1) {
                var Button=document.getElementById('ButtonRush');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonRush").style.background = "#e7e7e7";
            }
            else if (state.RushCycles<9.5) {
                var Button=document.getElementById('ButtonRush');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Green');
                document.getElementById("ButtonRush").style.background = "#A6D5FA";
            }
            else {
                var Button=document.getElementById('ButtonRush');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonRush").style.background = "#e7e7e7";
            }
        }
        if (state.BonsaiGrowing==1) {
            if (state.BonsaiGrowth<=1) {
                var Button=document.getElementById('ButtonGeduld');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonGeduld").style.background = "#e7e7e7";
            }
            else if (state.GeduldCycles<9.5) {
                var Button=document.getElementById('ButtonGeduld');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Green');
                document.getElementById("ButtonGeduld").style.background = "#A6D5FA";
            }
            else {
                var Button=document.getElementById('ButtonGeduld');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonGeduld").style.background = "#e7e7e7";
            }
        }
        if (state.AnzahlErdnüsse>=10){
            var Button=document.getElementById('ButtonVerkauf50');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonVerkauf50").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonVerkauf50');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonVerkauf50").style.background = "#e7e7e7";
        }
        if (state.AnzahlErdnüsse>=25){
            var Button=document.getElementById('ButtonVerkauf100');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonVerkauf100").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonVerkauf100');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonVerkauf100").style.background = "#e7e7e7";
        }
        if (state.AnzahlErdnüsse>=100){
            var Button=document.getElementById('ButtonVerkauf200');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonVerkauf200").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonVerkauf200');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonVerkauf200").style.background = "#e7e7e7";
        }
        if (state.AnzahlErdnüsse>=state.PreisBessererPreis){
            if (state.percenteins>=3) {
                var Button=document.getElementById('ButtonMehrProzent');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonMehrProzent").style.background = "#e7e7e7";
            }
            else {
                var Button=document.getElementById('ButtonMehrProzent');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Green');
                document.getElementById("ButtonMehrProzent").style.background = "#A6D5FA";
            }
        }
        else {
            var Button=document.getElementById('ButtonMehrProzent');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonMehrProzent").style.background = "#e7e7e7";
        }
        if (state.AnzahlErdnussbäume>=state.PreisAutoSell){
            var Button=document.getElementById('ButtonAutoSell');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Green');
            document.getElementById("ButtonAutoSell").style.background = "#A6D5FA";
        }
        else {
            var Button=document.getElementById('ButtonAutoSell');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonAutoSell").style.background = "#e7e7e7";
        }
        if (state.AnzahlErdnussplantagen>=state.PreisOffline){
            if (state.Offline>=1) {
                var Button=document.getElementById('ButtonOffline');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonOffline").style.background = "#e7e7e7";
            }
            else {    
                var Button=document.getElementById('ButtonOffline');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Green');
                document.getElementById("ButtonOffline").style.background = "#A6D5FA";
            }
        }
        else {
            var Button=document.getElementById('ButtonOffline');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonOffline").style.background = "#e7e7e7";
        }
        if (state.AnzahlGeld>=state.PreisGeduldUpgrade){
            if (state.GeduldUpgrade>=30) {
                var Button=document.getElementById('ButtonGeduldUp');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonGeduldUp").style.background = "#e7e7e7"
            }
            else {
                var Button=document.getElementById('ButtonGeduldUp');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Green');
                document.getElementById("ButtonGeduldUp").style.background = "#A6D5FA";
            }
        }
        else {
            var Button=document.getElementById('ButtonGeduldUp');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonGeduldUp").style.background = "#e7e7e7";
        }
        if (state.AnzahlGeld>=state.PreisBessereQualitätBonsai){
            if (state.QualitätUpgrade>=30) {
                var Button=document.getElementById('ButtonQualität');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonQualität").style.background = "#e7e7e7";
            }
            else {
                var Button=document.getElementById('ButtonQualität');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Green');
                document.getElementById("ButtonQualität").style.background = "#A6D5FA";
            }
        }
        else {
            var Button=document.getElementById('ButtonQualität');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonQualität").style.background = "#e7e7e7";
        }
        if (state.AnzahlGeld>=state.PreisZeitFormen){
            if (state.ZeitFormen==150) {
                var Button=document.getElementById('ButtonWenigerZeit');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonWenigerZeit").style.background = "#e7e7e7";
            }
            else {
                var Button=document.getElementById('ButtonWenigerZeit');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Green');
                document.getElementById("ButtonWenigerZeit").style.background = "#A6D5FA";
            }
        }
        else {
            var Button=document.getElementById('ButtonWenigerZeit');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonWenigerZeit").style.background = "#e7e7e7";
        }
        if (state.AnzahlGeld>=state.PreisRushUpgrade){
            if (state.RushUpgrade>=10) {
                var Button=document.getElementById('ButtonRushUp');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Grey');
                document.getElementById("ButtonRushUp").style.background = "#e7e7e7";
            }
            else {
                var Button=document.getElementById('ButtonRushUp');
                /* Clear all previous hover classes */
                Button.classList.remove('Grey','Green');
                /* Set the desired hover class */
                Button.classList.add('Green');
                document.getElementById("ButtonRushUp").style.background = "#A6D5FA";
            }
        }
        else {
            var Button=document.getElementById('ButtonRushUp');
            /* Clear all previous hover classes */
            Button.classList.remove('Grey','Green');
            /* Set the desired hover class */
            Button.classList.add('Grey');
            document.getElementById("ButtonRushUp").style.background = "#e7e7e7";
        }
    });
}, 100)
