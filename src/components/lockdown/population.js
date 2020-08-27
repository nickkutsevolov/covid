function population () {
    const data =
[{"alpha2Code":"AF","population":27657145},{"alpha2Code":"AX","population":28875},{"alpha2Code":"AL","population":2886026},{"alpha2Code":"DZ","population":40400000},{"alpha2Code":"AS","population":57100},{"alpha2Code":"AD","population":78014},{"alpha2Code":"AO","population":25868000},{"alpha2Code":"AI","population":13452},{"alpha2Code":"AQ","population":1000},{"alpha2Code":"AG","population":86295},{"alpha2Code":"AR","population":43590400},{"alpha2Code":"AM","population":2994400},{"alpha2Code":"AW","population":107394},{"alpha2Code":"AU","population":24117360},{"alpha2Code":"AT","population":8725931},{"alpha2Code":"AZ","population":9730500},{"alpha2Code":"BS","population":378040},{"alpha2Code":"BH","population":1404900},{"alpha2Code":"BD","population":161006790},{"alpha2Code":"BB","population":285000},{"alpha2Code":"BY","population":9498700},{"alpha2Code":"BE","population":11319511},{"alpha2Code":"BZ","population":370300},{"alpha2Code":"BJ","population":10653654},{"alpha2Code":"BM","population":61954},{"alpha2Code":"BT","population":775620},{"alpha2Code":"BO","population":10985059},{"alpha2Code":"BQ","population":17408},{"alpha2Code":"BA","population":3531159},{"alpha2Code":"BW","population":2141206},{"alpha2Code":"BV","population":0},{"alpha2Code":"BR","population":206135893},{"alpha2Code":"IO","population":3000},{"alpha2Code":"UM","population":300},{"alpha2Code":"VG","population":28514},{"alpha2Code":"VI","population":114743},{"alpha2Code":"BN","population":411900},{"alpha2Code":"BG","population":7153784},{"alpha2Code":"BF","population":19034397},{"alpha2Code":"BI","population":10114505},{"alpha2Code":"KH","population":15626444},{"alpha2Code":"CM","population":22709892},{"alpha2Code":"CA","population":36155487},{"alpha2Code":"CV","population":531239},{"alpha2Code":"KY","population":58238},{"alpha2Code":"CF","population":4998000},{"alpha2Code":"TD","population":14497000},{"alpha2Code":"CL","population":18191900},{"alpha2Code":"CN","population":1377422166},{"alpha2Code":"CX","population":2072},{"alpha2Code":"CC","population":550},{"alpha2Code":"CO","population":48759958},{"alpha2Code":"KM","population":806153},{"alpha2Code":"CG","population":4741000},{"alpha2Code":"CD","population":85026000},{"alpha2Code":"CK","population":18100},{"alpha2Code":"CR","population":4890379},{"alpha2Code":"HR","population":4190669},{"alpha2Code":"CU","population":11239004},{"alpha2Code":"CW","population":154843},{"alpha2Code":"CY","population":847000},{"alpha2Code":"CZ","population":10558524},{"alpha2Code":"DK","population":5717014},{"alpha2Code":"DJ","population":900000},{"alpha2Code":"DM","population":71293},{"alpha2Code":"DO","population":10075045},{"alpha2Code":"EC","population":16545799},{"alpha2Code":"EG","population":91290000},{"alpha2Code":"SV","population":6520675},{"alpha2Code":"GQ","population":1222442},{"alpha2Code":"ER","population":5352000},{"alpha2Code":"EE","population":1315944},{"alpha2Code":"ET","population":92206005},{"alpha2Code":"FK","population":2563},{"alpha2Code":"FO","population":49376},{"alpha2Code":"FJ","population":867000},{"alpha2Code":"FI","population":5491817},{"alpha2Code":"FR","population":66710000},{"alpha2Code":"GF","population":254541},{"alpha2Code":"PF","population":271800},{"alpha2Code":"TF","population":140},{"alpha2Code":"GA","population":1802278},{"alpha2Code":"GM","population":1882450},{"alpha2Code":"GE","population":3720400},{"alpha2Code":"DE","population":81770900},{"alpha2Code":"GH","population":27670174},{"alpha2Code":"GI","population":33140},{"alpha2Code":"GR","population":10858018},{"alpha2Code":"GL","population":55847},{"alpha2Code":"GD","population":103328},{"alpha2Code":"GP","population":400132},{"alpha2Code":"GU","population":184200},{"alpha2Code":"GT","population":16176133},{"alpha2Code":"GG","population":62999},{"alpha2Code":"GN","population":12947000},{"alpha2Code":"GW","population":1547777},{"alpha2Code":"GY","population":746900},{"alpha2Code":"HT","population":11078033},{"alpha2Code":"HM","population":0},{"alpha2Code":"VA","population":451},{"alpha2Code":"HN","population":8576532},{"alpha2Code":"HK","population":7324300},{"alpha2Code":"HU","population":9823000},{"alpha2Code":"IS","population":334300},{"alpha2Code":"IN","population":1295210000},{"alpha2Code":"ID","population":258705000},{"alpha2Code":"CI","population":22671331},{"alpha2Code":"IR","population":79369900},{"alpha2Code":"IQ","population":37883543},{"alpha2Code":"IE","population":6378000},{"alpha2Code":"IM","population":84497},{"alpha2Code":"IL","population":8527400},{"alpha2Code":"IT","population":60665551},{"alpha2Code":"JM","population":2723246},{"alpha2Code":"JP","population":126960000},{"alpha2Code":"JE","population":100800},{"alpha2Code":"JO","population":9531712},{"alpha2Code":"KZ","population":17753200},{"alpha2Code":"KE","population":47251000},{"alpha2Code":"KI","population":113400},{"alpha2Code":"KW","population":4183658},{"alpha2Code":"KG","population":6047800},{"alpha2Code":"LA","population":6492400},{"alpha2Code":"LV","population":1961600},{"alpha2Code":"LB","population":5988000},{"alpha2Code":"LS","population":1894194},{"alpha2Code":"LR","population":4615000},{"alpha2Code":"LY","population":6385000},{"alpha2Code":"LI","population":37623},{"alpha2Code":"LT","population":2872294},{"alpha2Code":"LU","population":576200},{"alpha2Code":"MO","population":649100},{"alpha2Code":"MK","population":2058539},{"alpha2Code":"MG","population":22434363},{"alpha2Code":"MW","population":16832910},{"alpha2Code":"MY","population":31405416},{"alpha2Code":"MV","population":344023},{"alpha2Code":"ML","population":18135000},{"alpha2Code":"MT","population":425384},{"alpha2Code":"MH","population":54880},{"alpha2Code":"MQ","population":378243},{"alpha2Code":"MR","population":3718678},{"alpha2Code":"MU","population":1262879},{"alpha2Code":"YT","population":226915},{"alpha2Code":"MX","population":122273473},{"alpha2Code":"FM","population":102800},{"alpha2Code":"MD","population":3553100},{"alpha2Code":"MC","population":38400},{"alpha2Code":"MN","population":3093100},{"alpha2Code":"ME","population":621810},{"alpha2Code":"MS","population":4922},{"alpha2Code":"MA","population":33337529},{"alpha2Code":"MZ","population":26423700},{"alpha2Code":"MM","population":51419420},{"alpha2Code":"NA","population":2324388},{"alpha2Code":"NR","population":10084},{"alpha2Code":"NP","population":28431500},{"alpha2Code":"NL","population":17019800},{"alpha2Code":"NC","population":268767},{"alpha2Code":"NZ","population":4697854},{"alpha2Code":"NI","population":6262703},{"alpha2Code":"NE","population":20715000},{"alpha2Code":"NG","population":186988000},{"alpha2Code":"NU","population":1470},{"alpha2Code":"NF","population":2302},{"alpha2Code":"KP","population":25281000},{"alpha2Code":"MP","population":56940},{"alpha2Code":"NO","population":5223256},{"alpha2Code":"OM","population":4420133},{"alpha2Code":"PK","population":194125062},{"alpha2Code":"PW","population":17950},{"alpha2Code":"PS","population":4682467},{"alpha2Code":"PA","population":3814672},{"alpha2Code":"PG","population":8083700},{"alpha2Code":"PY","population":6854536},{"alpha2Code":"PE","population":31488700},{"alpha2Code":"PH","population":103279800},{"alpha2Code":"PN","population":56},{"alpha2Code":"PL","population":38437239},{"alpha2Code":"PT","population":10374822},{"alpha2Code":"PR","population":3474182},{"alpha2Code":"QA","population":2587564},{"alpha2Code":"XK","population":1733842},{"alpha2Code":"RE","population":840974},{"alpha2Code":"RO","population":19861408},{"alpha2Code":"RU","population":146599183},{"alpha2Code":"RW","population":11553188},{"alpha2Code":"BL","population":9417},{"alpha2Code":"SH","population":4255},{"alpha2Code":"KN","population":46204},{"alpha2Code":"LC","population":186000},{"alpha2Code":"MF","population":36979},{"alpha2Code":"PM","population":6069},{"alpha2Code":"VC","population":109991},{"alpha2Code":"WS","population":194899},{"alpha2Code":"SM","population":33005},{"alpha2Code":"ST","population":187356},{"alpha2Code":"SA","population":32248200},{"alpha2Code":"SN","population":14799859},{"alpha2Code":"RS","population":7076372},{"alpha2Code":"SC","population":91400},{"alpha2Code":"SL","population":7075641},{"alpha2Code":"SG","population":5535000},{"alpha2Code":"SX","population":38247},{"alpha2Code":"SK","population":5426252},{"alpha2Code":"SI","population":2064188},{"alpha2Code":"SB","population":642000},{"alpha2Code":"SO","population":11079000},{"alpha2Code":"ZA","population":55653654},{"alpha2Code":"GS","population":30},{"alpha2Code":"KR","population":50801405},{"alpha2Code":"SS","population":12131000},{"alpha2Code":"ES","population":46438422},{"alpha2Code":"LK","population":20966000},{"alpha2Code":"SD","population":39598700},{"alpha2Code":"SR","population":541638},{"alpha2Code":"SJ","population":2562},{"alpha2Code":"SZ","population":1132657},{"alpha2Code":"SE","population":9894888},{"alpha2Code":"CH","population":8341600},{"alpha2Code":"SY","population":18564000},{"alpha2Code":"TW","population":23503349},{"alpha2Code":"TJ","population":8593600},{"alpha2Code":"TZ","population":55155000},{"alpha2Code":"TH","population":65327652},{"alpha2Code":"TL","population":1167242},{"alpha2Code":"TG","population":7143000},{"alpha2Code":"TK","population":1411},{"alpha2Code":"TO","population":103252},{"alpha2Code":"TT","population":1349667},{"alpha2Code":"TN","population":11154400},{"alpha2Code":"TR","population":78741053},{"alpha2Code":"TM","population":4751120},{"alpha2Code":"TC","population":31458},{"alpha2Code":"TV","population":10640},{"alpha2Code":"UG","population":33860700},{"alpha2Code":"UA","population":42692393},{"alpha2Code":"AE","population":9856000},{"alpha2Code":"GB","population":65110000},{"alpha2Code":"US","population":323947000},{"alpha2Code":"UY","population":3480222},{"alpha2Code":"UZ","population":31576400},{"alpha2Code":"VU","population":277500},{"alpha2Code":"VE","population":31028700},{"alpha2Code":"VN","population":92700000},{"alpha2Code":"WF","population":11750},{"alpha2Code":"EH","population":510713},{"alpha2Code":"YE","population":27478000},{"alpha2Code":"ZM","population":15933883},{"alpha2Code":"ZW","population":14240168}]
return data;
}

export default population;