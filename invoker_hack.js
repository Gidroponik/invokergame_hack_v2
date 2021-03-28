// Gamemode (write "Combo"/"Hattrick", "Random", "Survival")
this['GameMode'] = "Combo";

// U result
var result = 100000000;

// Params
this['time'] = ['startTime', 'stopTime', 'toSeconds'];
this['time']['startTime'] = (new Date().getTime());
this['time']['stopTime'] = this['time']['startTime']+30000;
this['StatKeysPressed'] = result*10;
this['StatSpellsInvoked'] = result*2;
this['time']['toSeconds'] = 1000030;


var _0x32edxd = generate(result);

// Generate Links
var url = '/a/GxkMpQdZr65Tv3pQlC3568T/6d2DbxlSFSSQrReeTb/gZ53bBpwZgpE.GepZhSeYc.GGQRft6M.gzZ.bCx.aShX?a=1&b=' + this['GameMode'] + '&c=' + result + '&d=' + 
this['time']['startTime'] + '&e=' + this['time']['stopTime'] + '&f=' + this['StatKeysPressed'] + '&g=' + this['StatSpellsInvoked'] + '&h=' + (this['time']['toSeconds'] * 1000) + _0x32edxd;
var url2 = '/a/ajax.ashx?m=getscoreboard&mode=' + this['GameMode'];


$.get(url);
$.get(url2);


// Hash genetartor
 function generate (_0x32edxe) {
     var _0x32edxf = 'MZTA' + (result + 27) + 'QPOR';
     _0x32edxf = _0x32edxf['replace'](/0/g, 'D');
     _0x32edxf = _0x32edxf['replace'](/1/g, 'F');
     _0x32edxf = _0x32edxf['replace'](/2/g, 'G');
     _0x32edxf = _0x32edxf['replace'](/3/g, 'H');
     _0x32edxf = _0x32edxf['replace'](/4/g, 'J');
     _0x32edxf = _0x32edxf['replace'](/5/g, 'K');
     _0x32edxf = _0x32edxf['replace'](/6/g, 'L');
     _0x32edxf = _0x32edxf['replace'](/7/g, 'Z');
     _0x32edxf = _0x32edxf['replace'](/8/g, 'X');
     _0x32edxf = _0x32edxf['replace'](/9/g, 'C');
     _0x32edxf = _0x32edxf['replace'](/\./g, 'V');
     var _0x32edx10 = '';
     for (var _0x32edx11 = 0; _0x32edx11 < _0x32edxf['length']; _0x32edx11++) {
         _0x32edx10 += '&H' + _0x32edx11 + '=' + _0x32edxf[_0x32edx11]
     };
     return _0x32edx10
 };
