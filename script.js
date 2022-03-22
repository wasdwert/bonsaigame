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
    PreisAutoSellEP: 1,
    PreisBessererPreis: 100,
    PreisZeitFormen: 10000,
    PreisRushUpgrade: 10000,
    PreisGeduldUpgrade: 25000,
    PreisBessereQualitätBonsai: 25000,
    PreisCBonsai: 2000,
    PreisUBonsai: 5000,
    PreisSBonsai: 20000,
    PreisLBonsai: 100000,
    GeldAutoSell: 1,
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
    GeldAutoSell: 0.1,
    ErdnussPreisAll: 0.1,
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
}

var statebase = {
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
    PreisAutoSellEP: 1,
    PreisBessererPreis: 100,
    PreisZeitFormen: 10000,
    PreisRushUpgrade: 10000,
    PreisGeduldUpgrade: 25000,
    PreisBessereQualitätBonsai: 25000,
    PreisCBonsai: 2000,
    PreisUBonsai: 5000,
    PreisSBonsai: 20000,
    PreisLBonsai: 100000,
    GeldAutoSell: 1,
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
    GeldAutoSell: 0.1,
    ErdnussPreisAll: 0.1,
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
}

function save() {
    localStorage.setItem('state', JSON.stringify(state));
    document.getElementById("Storage").innerText ="Started";
}

function reset() {
    localStorage.setItem('state', JSON.stringify(statebase)); //Save Base Values into local Storage
    document.location.reload(true)
}

window.onload = function () {
    state = JSON.parse(localStorage.getItem('state'));
    document.getElementById("Storage").innerText ='gestartet';
}

setInterval(function() {
    localStorage.setItem('state', JSON.stringify(state));
    document.getElementById("Storage").innerText ="Autosaved";
}, 30000)

setInterval(function() {
    if (state.AnzahlErdnussbäume>=0.5) {
        state.ErdnüsseproSekunde = prettifyzwei(Math.trunc(state.AnzahlErdnussbäume+0.001)/20);
        document.getElementById("ErdnüssepS").innerText =state.ErdnüsseproSekunde.toFixed(2);
    }
    else {
        state.ErdnüsseproSekunde =0;
        document.getElementById("ErdnüssepS").innerText =state.ErdnüsseproSekunde.toFixed(2);
    }
    if (state.AnzahlErdnussplantagen>=0.5) {
        state.ErdnussbäumeproSekunde = prettifyzwei(Math.trunc(state.AnzahlErdnussplantagen+0.001)/100);
        document.getElementById("ErdnussbäumepS").innerText =state.ErdnussbäumeproSekunde.toFixed(2);
    }
    else {
        state.ErdnussbäumeproSekunde =0;
        document.getElementById("ErdnussbäumepS").innerText =state.ErdnussbäumeproSekunde.toFixed(2);
    }
    if (state.BonsaiGrowing==1) {
        document.getElementById("ZeitBonsaiheranziehen").innerText =Zeit(state.BonsaiGrowth);
    }
    state.Random =Math.random() //Random number between 0 and 1
    document.getElementById("Random").innerText = state.Random;
}, 100)

setInterval(function() { //1 Sekunde Intervallfunktion für Erdnüsse pro Sekunde
    state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.GeldproSekunde);
    document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
    state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse+state.ErdnüsseproSekunde);
    document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toFixed(2);
    state.AnzahlErdnussbäume =prettifyzwei(state.AnzahlErdnussbäume+state.ErdnussbäumeproSekunde);
    document.getElementById("Erdnussbäume").innerText =state.AnzahlErdnussbäume.toFixed(2);
    if (state.BonsaiGrowing==1) {
        state.BonsaiGrowth -= 1;
        document.getElementById("ZeitBonsaiheranziehen").innerText =Zeit(state.BonsaiGrowth);
        if (state.BonsaiGrowth==0) {
            if (state.Random>=prettifydrei(state.MBonRandom)) {
                state.AnzahlMBonsais +=1;
                document.getElementById("MBonsais").innerText =state.AnzahlMBonsais;
            }
            else if (state.Random>=prettifydrei(state.LBonRandom)) {
                state.AnzahlLBonsais +=1;
                document.getElementById("LBonsais").innerText =state.AnzahlLBonsais;
            }
            else if (state.Random>=prettifydrei(state.SBonRandom)) {
                state.AnzahlSBonsais +=1;
                document.getElementById("SBonsais").innerText =state.AnzahlSBonsais;
            }
            else if (state.Random>=prettifydrei(state.UBonRandom)) {
                state.AnzahlUBonsais +=1;
                document.getElementById("UBonsais").innerText =state.AnzahlUBonsais;
            }
            else {
                state.AnzahlCBonsais +=1;
                document.getElementById("CBonsais").innerText =state.AnzahlCBonsais;
            }  
            state.BonsaiGrowing=0
            document.getElementById("ZeitBonsaiheranziehen").innerText ="-";
            document.getElementById("Bonsaiheranziehen").innerText ="nicht aktiv";
            document.getElementById("RushCycleText").innerText ="- 1 Sekunde";
            state.RushCycle =1;
            document.getElementById("RushCycle").innerText =state.RushCycle; //Delete later
            state.RushCycles =0;
            document.getElementById("RushCycles").innerText =state.RushCycles; //Delete later
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
        }
    }
}, 1000)

function Zeit(input) {
    var min=Math.floor(input/60);
    var sec=input-(min*60);
    if (sec<10) {sec="0"+sec};
    return min+":"+sec;
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
    document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
}

function Erdnusskaufen() {
    if (state.AnzahlGeld>=state.PreisErdnüsse) {
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisErdnüsse);
        document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
        state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse+state.ErdnussproKlick);
        document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toFixed(2);
        state.PreisErdnüsse=prettifyzwei(state.PreisErdnüsse*1.01);
        document.getElementById("KostenErdnuss").innerText =state.PreisErdnüsse
    } 
}

function Erdnussbaumpflanzen() {
    if (state.AnzahlErdnüsse>=state.PreisErdnussbäume) {
        state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-state.PreisErdnussbäume);
        document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toFixed(2);
        state.AnzahlErdnussbäume =prettifyzwei(state.AnzahlErdnussbäume+state.ErdnussbaumproKlick);
        document.getElementById("Erdnussbäume").innerText =state.AnzahlErdnussbäume.toFixed(2);
        state.PreisErdnussbäume=prettify(state.PreisErdnussbäume*1.05);
        document.getElementById("KostenErdnussbaum").innerText =prettify(state.PreisErdnussbäume)
    } 
}

function Erdnussplantageanbauen() {
    if (state.AnzahlErdnussbäume>=state.PreisErdnussplantagen) {
        state.AnzahlErdnussbäume =prettifyzwei(state.AnzahlErdnussbäume-state.PreisErdnussplantagen);
        document.getElementById("Erdnussbäume").innerText =state.AnzahlErdnussbäume.toFixed(2);
        state.AnzahlErdnussplantagen +=state.ErdnussplantageproKlick;
        document.getElementById("Erdnussplantagen").innerText = state.AnzahlErdnussplantagen;
        state.PreisErdnussplantagen =prettify(state.PreisErdnussplantagen*1.1);
        document.getElementById("KostenErdnussplantage").innerText =prettify(state.PreisErdnussplantagen)
    } 
}

function Erdnussverkaufenall() {
    if (state.AnzahlErdnüsse>=1) {
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+(Math.floor(state.AnzahlErdnüsse)*state.ErdnussPreisAll));
        document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
        state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-Math.floor(state.AnzahlErdnüsse));
        document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toFixed(2);
    } 
}

function Erdnussverkaufenx100() {
    if (state.AnzahlErdnüsse>=100) {
        state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-100);
        document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toFixed(2);
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+20);
        document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
    } 
}

function Erdnussverkaufenx200() {
    if (state.AnzahlErdnüsse>=200) {
        state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-200);
        document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toFixed(2);
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+50);
        document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
    } 
}

function Erdnussverkaufenx1000() {
    if (state.AnzahlErdnüsse>=1000) {
        state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-1000);
        document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toFixed(2);
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+300);
        document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
    } 
}

function GeldDoppel() {
    if (state.AnzahlGeld>=state.PreisGeldDoppel) {
        state.GeldproKlick = prettify(state.GeldproKlick*2);
        document.getElementById("KlickGeld").innerText =state.GeldproKlick.toFixed(1);
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisGeldDoppel);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toFixed(2);
        state.PreisGeldDoppel = state.PreisGeldDoppel*4;
        document.getElementById("PreisGeldDoppel").innerText =prettify(state.PreisGeldDoppel);
    }
}

function ErdnussDoppel() {
    if (state.AnzahlGeld>=state.PreisErdnussDoppel) {
        state.ErdnussproKlick = state.ErdnussproKlick*2;
        document.getElementById("KlickErdnuss").innerText =state.ErdnussproKlick;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisErdnussDoppel);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toFixed(2);
        state.PreisErdnussDoppel = state.PreisErdnussDoppel*4;
        document.getElementById("PreisErdnussDoppel").innerText =state.PreisErdnussDoppel;
    }
}

function ErdnussbaumDoppel() {
    if (state.AnzahlGeld>=state.PreisErdnussbaumDoppel) {
        state.ErdnussbaumproKlick = state.ErdnussbaumproKlick*2;
        document.getElementById("KlickErdnussbaum").innerText =state.ErdnussbaumproKlick;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisErdnussbaumDoppel);
        document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
        state.PreisErdnussbaumDoppel = state.PreisErdnussbaumDoppel*4;
        document.getElementById("PreisErdnussbaumDoppel").innerText =state.PreisErdnussbaumDoppel;
    }
}

function ErdnussplantageDoppel() {
    if (state.AnzahlGeld>=state.PreisErdnussplantageDoppel) {
        state.ErdnussplantageproKlick = state.ErdnussplantageproKlick*2;
        document.getElementById("KlickErdnussplantage").innerText =state.ErdnussplantageproKlick;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisErdnussplantageDoppel);
        document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
        state.PreisErdnussplantageDoppel = state.PreisErdnussplantageDoppel*4;
        document.getElementById("PreisErdnussplantageDoppel").innerText =state.PreisErdnussplantageDoppel;
    }
}

function WenigerZeitFormen() {
    if (state.AnzahlGeld>=state.PreisZeitFormen) {
        if (state.ZeitFormen>150) {
            state.ZeitFormen = Math.floor(state.ZeitFormen-15);
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisZeitFormen);
            document.getElementById("Geld").innerText = state.AnzahlGeld.toFixed(2);
            state.PreisZeitFormen = Math.floor(state.PreisZeitFormen*2);
            document.getElementById("PreisWenigerZeitFormen").innerText =state.PreisZeitFormen;
            document.getElementById("WenigerZeit").innerText =Zeit(state.ZeitFormen-15);
            if (state.ZeitFormen==150) {
                document.getElementById("WenigerZeit").innerText =Zeit(state.ZeitFormen);
                document.getElementById("WenigerZeitMax").innerText ="Max. Upgrade erreicht";
            }
        }
    }
}

function BessererPreis() {
    if (state.AnzahlErdnüsse>=state.PreisBessererPreis) {
        if (state.ErdnussPreisAll<0.3) {
            state.ErdnussPreisAll =prettifyzwei(state.ErdnussPreisAll+0.01);
            document.getElementById("ErdnussPreis").innerText =state.ErdnussPreisAll.toFixed(2);
            state.AnzahlErdnüsse =prettifyzwei(state.AnzahlErdnüsse-state.PreisBessererPreis);
            document.getElementById("Erdnüsse").innerText =state.AnzahlErdnüsse.toFixed(2);
            state.PreisBessererPreis = state.PreisBessererPreis*2;
            document.getElementById("PreisBessererPreis").innerText =state.PreisBessererPreis;
            if (state.ErdnussPreisAll>=0.3) {
                document.getElementById("PreisBessererPreisMax").innerText ="Max. Upgrade erreicht";
            }
        }
    }
}

function AutoSell() {
    if (state.AnzahlErdnussplantagen>=state.PreisAutoSellEP & state.AnzahlErdnussbäume>=state.PreisAutoSell) {
        state.GeldproSekunde =prettify(state.GeldproSekunde+state.GeldAutoSell);
        document.getElementById("GeldproSekunde").innerText =state.GeldproSekunde.toFixed(1);
        state.AnzahlErdnussplantagen -=state.PreisAutoSellEP;
        document.getElementById("Erdnussplantagen").innerText = state.AnzahlErdnussplantagen;
        state.AnzahlErdnussbäume =prettifyzwei(state.AnzahlErdnussbäume-state.PreisAutoSell);
        document.getElementById("Erdnussbäume").innerText = state.AnzahlErdnussbäume.toFixed(2);
        state.PreisAutoSell = state.PreisAutoSell*2;
        if (state.PreisAutoSellEP==1) {
            state.PreisAutoSellEP +=1;
        }
        else {
        state.PreisAutoSellEP = state.PreisAutoSellEP+2;
        }
        document.getElementById("PreisAutoSell").innerText =state.PreisAutoSell;
        document.getElementById("PreisAutoSellEP").innerText =state.PreisAutoSellEP;
        if (state.GeldproSekunde>=0.2) {
            state.GeldAutoSell =prettify(state.GeldAutoSell*2);
        }
        document.getElementById("AutoSellErdnuss").innerText =prettify(state.GeldproSekunde+state.GeldAutoSell).toFixed(1);
    }
}

function BonsaiRushUpgrade() {
    if (state.AnzahlGeld>=state.PreisRushUpgrade) {
        if (state.RushUpgrade<10) {
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisRushUpgrade);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
            state.PreisRushUpgrade =state.PreisRushUpgrade*2;
            document.getElementById("PreisRushUpgrade").innerText =state.PreisRushUpgrade;
            state.RushUpgrade =Math.floor(state.RushUpgrade+1);
            if (state.RushUpgrade>=10) {
                document.getElementById("RushUpgradeMax").innerText ="Max. Upgrade erreicht";
            }
        }
    }
}

function BonsaiGeduldUpgrade() {
    if (state.AnzahlGeld>=state.PreisGeduldUpgrade) {
        if (state.GeduldUpgrade<10) {
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisGeduldUpgrade);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
            state.PreisGeduldUpgrade =state.PreisGeduldUpgrade*2;
            document.getElementById("PreisGeduldUpgrade").innerText =state.PreisGeduldUpgrade;
            state.GeduldUpgrade =Math.floor(state.GeduldUpgrade+1);
            if (state.GeduldUpgrade>=10) {
                document.getElementById("GeduldUpgradeMax").innerText ="Max. Upgrade erreicht";
            }
        }
    }
}

function BessereQualitätBonsai() {
    if (state.AnzahlGeld>=state.PreisBessereQualitätBonsai) {
        if (state.QualitätUpgrade<10) {
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-state.PreisBessereQualitätBonsai);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
            state.CBonBase =prettify(state.CBonBase-1.2);
            state.CBonShow =prettify(state.CBonShow-1.2);
            document.getElementById("CBon").innerText =state.CBonShow;
            state.UBonBase =prettify(state.UBonBase+0.6);
            state.UBonShow =prettify(state.UBonShow+0.6);
            state.UBonRandomBase =prettifydrei(state.UBonRandomBase-0.012);
            state.UBonRandom =prettifydrei(state.UBonRandom-0.012);
            document.getElementById("UBon").innerText =state.UBonShow;
            document.getElementById("UBonRandomBase").innerText =state.UBonRandomBase; //Delete later
            document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
            state.SBonBase =prettify(state.SBonBase+0.3);
            state.SBonShow =prettify(state.SBonShow+0.3);
            state.SBonRandomBase =prettifydrei(state.SBonRandomBase-0.06);
            state.SBonRandom =prettifydrei(state.SBonRandom-0.06);
            document.getElementById("SBon").innerText =state.SBonShow;
            document.getElementById("SBonRandomBase").innerText =state.SBonRandomBase; //Delete later
            document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
            state.LBonBase =prettify(state.LBonBase+0.2);
            state.LBonShow =prettify(state.LBonShow+0.2);
            state.LBonRandomBase =prettifydrei(state.LBonRandomBase-0.003);
            state.LBonRandom =prettifydrei(state.LBonRandom-0.003);
            document.getElementById("LBon").innerText =state.LBonShow;
            document.getElementById("LBonRandomBase").innerText =state.LBonRandomBase; //Delete later
            document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
            state.MBonBase =prettify(state.MBonBase+0.1);
            state.MBonShow =prettify(state.MBonShow+0.1);
            state.MBonRandomBase =prettifydrei(state.MBonRandomBase-0.001);
            state.MBonRandom =prettifydrei(state.MBonRandom-0.001);
            document.getElementById("MBon").innerText =state.MBonShow;
            document.getElementById("MBonRandomBase").innerText =state.MBonRandomBase; //Delete later
            document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
            }
        state.PreisBessereQualitätBonsai =state.PreisBessereQualitätBonsai*2;
        document.getElementById("PreisBessereQualitätBonsai").innerText =state.PreisBessereQualitätBonsai;
        state.QualitätUpgrade =Math.floor(state.QualitätUpgrade+1);
        if (state.QualitätUpgrade>=10) {
            document.getElementById("BessereQualitätMax").innerText ="Max. Upgrade erreicht";
        }
    }
}
                                                                                                           
function Bonsaikaufen () {
    if (state.AnzahlGeld>=1000) {
        if (state.BonsaiGrowing==0) {
            state.AnzahlGeld =prettifyzwei(state.AnzahlGeld-1000);
            document.getElementById("Geld").innerText =state.AnzahlGeld.toFixed(2);
            state.BonsaiGrowth =state.ZeitFormen;
            document.getElementById("ZeitBonsaiheranziehen").innerText =Zeit(state.BonsaiGrowth);
            state.BonsaiGrowing += 1;
            document.getElementById("Bonsaiheranziehen").innerText ="aktiv";
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
                    document.getElementById("RushCycleText").innerText ="Maximum erreicht";
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
                if (state.GeduldUpgrade>=1) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.UBonShow =prettify(state.UBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.UBonShow =prettify(state.UBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<3) {
                state.GeduldCycle +=1;       
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=3) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.UBonShow =prettify(state.UBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.UBonShow =prettify(state.UBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<4) {
                state.GeduldCycle +=1;       
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=5) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.SBonShow =prettify(state.SBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.SBonShow =prettify(state.SBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<5) {
                state.GeduldCycle +=1; 
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=2) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.UBonShow =prettify(state.UBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.UBonShow =prettify(state.UBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<6) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=4) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.UBonShow =prettify(state.UBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.UBonShow =prettify(state.UBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<7) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=6) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.SBonShow =prettify(state.SBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.SBonShow =prettify(state.SBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<8) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=8) {
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.002);
                    state.LBonRandom =prettifydrei(state.LBonRandom-0.002);
                    state.UBonShow =prettify(state.UBonShow-0.2);
                    state.LBonShow =prettify(state.LBonShow+0.2);
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("UBon").innerText =state.UBonShow;
                    document.getElementById("LBon").innerText =state.LBonShow;
                }
                else {
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.001);
                    state.LBonRandom =prettifydrei(state.LBonRandom-0.001);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    state.LBonShow =prettify(state.LBonShow+0.1);
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("UBon").innerText =state.UBonShow;
                    document.getElementById("LBon").innerText =state.LBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<9) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=1) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.UBonShow =prettify(state.UBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.UBonShow =prettify(state.UBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<10) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=3) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.UBonShow =prettify(state.UBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.UBonShow =prettify(state.UBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<11) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=5) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.SBonShow =prettify(state.SBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.SBonShow =prettify(state.SBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =CBonShow;
                    document.getElementById("SBon").innerText =SBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<12) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=2) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.UBonShow =prettify(state.UBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.UBonShow =prettify(state.UBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<13) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=4) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.UBonShow =prettify(state.UBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.UBonShow =prettify(state.UBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("UBon").innerText =state.UBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<14) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=7) {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.002);
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.002);
                    state.CBonShow =prettify(state.CBonShow-0.2);
                    state.SBonShow =prettify(state.SBonShow+0.2);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                else {
                    state.UBonRandom =prettifydrei(state.UBonRandom-0.001);
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.001);
                    state.CBonShow =prettify(state.CBonShow-0.1);
                    state.SBonShow =prettify(state.SBonShow+0.1);
                    document.getElementById("UBonRandom").innerText =state.UBonRandom; //Delete later
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("CBon").innerText =state.CBonShow;
                    document.getElementById("SBon").innerText =state.SBonShow;
                }
                state.BonsaiGrowth +=5;
                document.getElementById("ZeitBonsaiherzanziehen").innerText =Zeit(state.BonsaiGrowth);
            }
            else if (state.GeduldCycle<15) {
                state.GeduldCycle +=1;
                document.getElementById("GeduldCycle").innerText =state.GeduldCycle; //Delete later
                if (state.GeduldUpgrade>=9) {
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.002);
                    state.LBonRandom =prettifydrei(state.LBonRandom-0.002);
                    state.UBonShow =prettify(state.UBonShow-0.2);
                    state.LBonShow =prettify(state.LBonShow+0.2);
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("UBon").innerText =state.UBonShow;
                    document.getElementById("LBon").innerText =state.LBonShow;
                }
                else {
                    state.SBonRandom =prettifydrei(state.SBonRandom-0.001);
                    state.LBonRandom =prettifydrei(state.LBonRandom-0.001);
                    state.UBonShow =prettify(state.UBonShow-0.1);
                    state.LBonShow =prettify(state.LBonShow+0.1);
                    document.getElementById("SBonRandom").innerText =state.SBonRandom; //Delete later
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("UBon").innerText =state.UBonShow;
                    document.getElementById("LBon").innerText =state.LBonShow;
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
                    document.getElementById("GeduldCycleText").innerText ="Maximum erreicht";
                }
                if (state.GeduldUpgrade>=10) {
                    state.LBonRandom =prettifydrei(state.LBonRandom-0.002);
                    state.MBonRandom =prettifydrei(state.MBonRandom-0.002);
                    state.SBonShow =prettify(state.SBonShow-0.2);
                    state.MBonShow =prettify(state.MBonShow+0.2);
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
                    document.getElementById("SBon").innerText =state.SBonShow;
                    document.getElementById("MBon").innerText =state.MBonShow;
                }
                else {
                    state.LBonRandom =prettifydrei(state.LBonRandom-0.001);
                    state.MBonRandom =prettifydrei(state.MBonRandom-0.001);
                    state.SBonShow =prettify(state.SBonShow-0.1);
                    state.MBonShow =prettify(state.MBonShow+0.1);
                    document.getElementById("LBonRandom").innerText =state.LBonRandom; //Delete later
                    document.getElementById("MBonRandom").innerText =state.MBonRandom; //Delete later
                    document.getElementById("SBon").innerText =state.SBonShow;
                    document.getElementById("MBon").innerText =state.MBonShow;
                }
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
        document.getElementById("Geld").innerText = state.AnzahlGeld.toFixed(2);
        if (state.PreisCBonsai>1200) {
            state.PreisCBonsai -=50;
            document.getElementById("PreisCBonsai").innerText = state.PreisCBonsai.toFixed(2)
        }
    }
}

function UBonsaiverkaufen () {
    if (state.AnzahlUBonsais>=1) {
        state.AnzahlUBonsais -=1;
        document.getElementById("UBonsais").innerText =state.AnzahlUBonsais;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.PreisUBonsai);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toFixed(2);
        if (state.PreisUBonsai>1500) {
            state.PreisUBonsai =prettifyzwei(state.PreisUBonsai-218.75);
            document.getElementById("PreisUBonsai").innerText = state.PreisUBonsai.toFixed(2)
        }
    }
}

function SBonsaiverkaufen () {
    if (state.AnzahlSBonsais>=1) {
        state.AnzahlSBonsais -=1;
        document.getElementById("SBonsais").innerText =state.AnzahlSBonsais;
        AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.PreisSBonsai);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toFixed(2);
        if (state.PreisSBonsai>3000) {
            state.PreisSBonsai =prettify(state.PreisSBonsai-1062,5);
            document.getElementById("PreisSBonsai").innerText = state.PreisSBonsai.toFixed(2)
        }
    }
}

function LBonsaiverkaufen () {
    if (state.AnzahlLBonsais>=1) {
        state.AnzahlLBonsais -=1;
        document.getElementById("LBonsais").innerText =state.AnzahlLBonsais;
        state.AnzahlGeld =prettifyzwei(state.AnzahlGeld+state.PreisLBonsai);
        document.getElementById("Geld").innerText = state.AnzahlGeld.toFixed(2);
        if (state.PreisLBonsai>10000) {
            state.PreisLBonsai -=5625;
            document.getElementById("PreisLBonsai").innerText = state.PreisLBonsai.toFixed(2)
        }
    }
}

setInterval(function() { //0,1 Sekunde Intervallfunktion für Random Percantage Number
    $(document).ready(function(){
        if(state.AnzahlGeld>=12.5){
            $('.PreisGeldDoppel').show();
        }
        if(state.AnzahlGeld>=1){
            $('.Erdnüsse').show();
        }
        if(state.AnzahlGeld>=50){
            $('.PreisErdnussDoppel').show();
        }
        if(state.AnzahlErdnüsse>=10){
            $('.Erdnussbäume').show();
        }
        if(state.AnzahlGeld>=200 & state.AnzahlErdnüsse>=10){
            $('.PreisErdnussbaumDoppel').show();
        }
        if(state.AnzahlErdnussbäume>=10){
            $('.Erdnussplantagen').show();
        }
        if(state.AnzahlGeld>=800 & state.AnzahlErdnussbäume>=10){
            $('.PreisErdnussplantageDoppel').show();
        }
        if(state.AnzahlErdnüsse>=10){
            $('.Erdnusshandel').show();
        }
        if(state.AnzahlErdnüsse>=100){
            $('.Erdnusshandel100').show();
        }
        if(state.AnzahlErdnüsse>=200){
            $('.Erdnusshandel200').show();
        }
        if(state.AnzahlErdnüsse>=1000){
            $('.Erdnusshandel1000').show();
        }
        if(state.AnzahlErdnussbäume>=25 & state.AnzahlErdnussplantagen>=1 || state.AnzahlGeld>=1000 || state.AnzahlErdnüsse>=100){
            $('.Upgrades').show();
        }
        if(state.AnzahlErdnussbäume>=25 & state.AnzahlErdnussplantagen>=1){
            $('.AutoSell').show();
        }
        if(state.AnzahlErdnüsse>=100){
            $('.BessererPreis').show();
        }
        if(state.AnzahlGeld>=1000){
            $('.Bonsai').show();
        }
        if(state.AnzahlCBonsais>=1 || state.AnzahlUBonsais>=1 || state.AnzahlSBonsais>=1 || state.AnzahlLBonsais>=1){
            $('.Bonsaihandel').show();
        }
        if(state.AnzahlCBonsais>=1){
            $('.CBonsaiverkaufen').show();
        }
        if(state.AnzahlUBonsais>=1){
            $('.UBonsaiverkaufen').show();
        }
        if(state.AnzahlSBonsais>=1){
            $('.SBonsaiverkaufen').show();
        }
        if(state.AnzahlLBonsais>=1){
            $('.LBonsaiverkaufen').show();
        }
    });
}, 100)