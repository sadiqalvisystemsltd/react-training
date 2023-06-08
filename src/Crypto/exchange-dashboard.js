import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadCoinsData } from "../redux/actions/crypto-actions";
import TextField from '@material-ui/core/TextField';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
// import { response } from "express";


function CryptoExchangeViewer() {
    const coinsData = useSelector((state) => state.crypto.coinsData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const coinsJson = {"rates": {
        "611": 0.389165,
        "ABC": 59.99,
        "ACP": 0.014931,
        "ACT": 0.00107,
        "ACT*": 0.017178,
        "ADA": 0.380878,
        "ADCN": 0.00013,
        "ADL": 0.01515,
        "ADX": 0.1677,
        "ADZ": 0.0023,
        "AE": 0.05215,
        "AGI": 0.02,
        "AIB": 0.005626,
        "AIDOC": 0.00001463284357,
        "AION": 0.00081,
        "AIR": 0.00775,
        "ALT": 0.565615,
        "AMB": 0.012301,
        "AMM": 0.005929,
        "ANT": 2.226,
        "APC": 0.0017,
        "APPC": 0.001511,
        "ARC": 0.0169,
        "ARCT": 0.00061,
        "ARDR": 0.074616,
        "ARK": 0.421895,
        "ARN": 0.001227,
        "ASAFE2": 0.4,
        "AST": 0.123608,
        "ATB": 0.017,
        "ATM": 1.93725,
        "AURS": 0.352867,
        "AVT": 1.04,
        "BAR": 3.25,
        "BASH": 0.0056,
        "BAT": 0.216124,
        "BAY": 0.0644,
        "BBP": 0.0005,
        "BCD": 0.1303,
        "BCH": 115.257225,
        "BCN": 0.000273,
        "BCPT": 0.001217,
        "BEE": 0.000001,
        "BIO": 0.0008,
        "BLC": 0.072132,
        "BLOCK": 0.18,
        "BLU": 0.00054,
        "BLZ": 0.0671,
        "BMC": 0.00193,
        "BNB": 305.663315,
        "BNT": 0.412077,
        "BOST": 0.048,
        "BQ": 0.00007775,
        "BQX": 2.720931,
        "BRD": 0.020294,
        "BRIT": 0.03,
        "BT1": 0,
        "BT2": 0,
        "BTC": 27126.82692,
        "BTCA": 0.00036,
        "BTCS": 0.01201,
        "BTCZ": 0.00008114331,
        "BTG": 12.433064,
        "BTLC": 9,
        "BTM": 0.078282,
        "BTM*": 0.122609,
        "BTQ": 0.01,
        "BTS": 0.009938,
        "BTX": 0.27,
        "BURST": 0.017348,
        "CALC": 0.0006,
        "CAS": 0.007,
        "CAT": 0.060408,
        "CCRB": 0.08888,
        "CDT": 0.025909,
        "CESC": 0.0037,
        "CHAT": 0.00007168,
        "CJ": 0.000898,
        "CL": 0.028,
        "CLD": 0.02,
        "CLOAK": 10,
        "CMT*": 0.03954,
        "CND": 0.001761,
        "CNX": 1.996594,
        "CPC": 0.0005,
        "CRAVE": 0.4,
        "CRC": 0.08475,
        "CRE": 1.316485,
        "CRW": 0.02202,
        "CTO": 0.005,
        "CTR": 0.001199,
        "CVC": 0.084774,
        "DAS": 0.937816,
        "DASH": 42.973136,
        "DAT": 0.00004327643200000001,
        "DATA": 0,
        "DBC": 0.00362,
        "DBET": 0.027656,
        "DCN": 0.000002192,
        "DCR": 15.547,
        "DCT": 0.006221,
        "DEEP": 0.001,
        "DENT": 0.000872,
        "DGB": 0.00803,
        "DGD": 219.975284,
        "DIM": 0.000094957,
        "DIME": 0.00003,
        "DMD": 0.58782,
        "DNT": 0.03005,
        "DOGE": 0.072752,
        "DRGN": 0.00655,
        "DRZ": 3,
        "DSH": 252.13175,
        "DTA": 0.00002245,
        "EC": 50,
        "EDG": 0.00793,
        "EDO": 0.61442,
        "EDR": 0.00023,
        "EKO": 0.00005680031700000001,
        "ELA": 1.529,
        "ELF": 0.301002,
        "EMC": 0.003543,
        "EMGO": 0.43382,
        "ENG": 0.002975,
        "ENJ": 0.329166,
        "EOS": 0.922025,
        "ERT": 0.2054,
        "ETC": 18.227785,
        "ETH": 1898.275889,
        "ETN": 0.002117,
        "ETP": 0.017332,
        "ETT": 2.9,
        "EVR": 0.104931,
        "EVX": 0.014,
        "FCT": 0.05175,
        "FLP": 0.0058,
        "FOTA": 0.0122,
        "FRST": 0.78001,
        "FUEL": 22.06,
        "FUN": 0.005084,
        "FUNC": 0.00061,
        "FUTC": 0.004,
        "GAME": 0.035384,
        "GAS": 2.797857,
        "GBYTE": 11.314082,
        "GMX": 56.48,
        "GNO": 108.75,
        "GNT": 1e-8,
        "GNX": 0.001907,
        "GRC": 0.0067,
        "GRS": 10,
        "GRWI": 10000,
        "GTC": 1.3761,
        "GTO": 0.023802,
        "GUP": 0.459892,
        "GVT": 0.025927,
        "GXS": 1.260392,
        "HAC": 0.013524,
        "HNC": 0,
        "HSR": 11.197562,
        "HST": 0.0027,
        "HVN": 0.03529,
        "ICN": 0.1452,
        "ICOS": 17,
        "ICX": 0.237465,
        "IGNIS": 0.0047,
        "ILC": 0.098703,
        "INK": 0.00053,
        "INS": 0.167155,
        "INSN": 0.0473,
        "INT": 0.002975,
        "IOP": 15.455555,
        "IOST": 0.009341,
        "ITC": 0.000124,
        "KCS": 7.8,
        "KICK": 0.000324,
        "KIN": 0.000007345,
        "KLC": 0.000703,
        "KMD": 0.275539,
        "KNC": 0.606333,
        "KRB": 6,
        "LA": 0.03714,
        "LEND": 1.220395,
        "LEO": 2.811172,
        "LINDA": 0.000271,
        "LINK": 6.432415,
        "LOC": 0.520093,
        "LOG": 0.060174,
        "LRC": 0.2735,
        "LSK": 0.814887,
        "LTC": 95.326671,
        "LUN": 0.024073,
        "LUX": 0.00000209,
        "MAID": 0.133914,
        "MANA": 0.484785,
        "MCAP": 0.005398,
        "MCO": 2.33,
        "MDA": 0.0515,
        "MDS": 0.00012,
        "MIOTA": 0.20215,
        "MKR": 672.822333,
        "MLN": 18.56,
        "MNX": 0.028649,
        "MOD": 0.242237,
        "MOIN": 0.033073,
        "MONA": 0.389217,
        "MTL": 1.095,
        "MTN*": 0.009575,
        "MTX": 0.000621,
        "NAS": 0.01199,
        "NAV": 0.043276,
        "NBT": 0.00283,
        "NDC": 0.008989,
        "NEBL": 0.123624,
        "NEO": 10.493549,
        "NEU": 0.024194,
        "NEWB": 0.002604,
        "NGC": 0.070055,
        "NKC": 0.045779,
        "NLC2": 0.599935,
        "NMC": 5.867998,
        "NMR": 14.392667,
        "NULS": 0.2363,
        "NVC": 10,
        "NXT": 0.002389,
        "OAX": 0.2399,
        "OBITS": 0.015,
        "OC": 0.000481,
        "OCN": 0.00003013,
        "ODN": 0.5,
        "OK": 0.00541,
        "OMG": 0.775448,
        "OMNI": 1.3306,
        "ORE": 0,
        "ORME": 1.235715,
        "OST": 0.000456,
        "OTN": 0,
        "OTX": 0.023,
        "OXY": 0.014,
        "PART": 3.951477,
        "PAY": 0.01064,
        "PBT": 25.926976,
        "PCS": 0.019961,
        "PIVX": 0.233959,
        "PIZZA": 0.001,
        "PLBT": 20,
        "PLR": 0.006494,
        "POE": 0.000016228662,
        "POLY": 0.1322,
        "POSW": 0.48712,
        "POWR": 0.1548,
        "PPC": 0.420001,
        "PPT": 0.044357,
        "PPY": 5.45,
        "PRC": 0.00003,
        "PRES": 0.219998,
        "PRG": 1.020047,
        "PRL": 0.061361,
        "PRO": 0.3391,
        "PURA": 0.25,
        "PUT": 0,
        "QASH": 0.04175,
        "QAU": 0,
        "QSP": 0.01256,
        "QTUM": 2.674755,
        "QUN": 0.008318,
        "R": 0.010525,
        "RBIES": 1,
        "RCN": 0.001617,
        "RDD": 0.000081,
        "RDN": 0,
        "RDN*": 0.324446,
        "REBL": 0.000811,
        "REE": 0.00001,
        "REP": 27.91408,
        "REQ": 0.0876,
        "REV": 0.000283,
        "RGC": 0.001,
        "RHOC": 0.178417,
        "RIYA": 0.090025,
        "RKC": 5,
        "RLC": 1.474,
        "RPX": 0.061017,
        "RUFF": 0.000158,
        "SALT": 0.768708,
        "SAN": 0.016635,
        "SBC": 7,
        "SC": 0.003212,
        "SENT": 0.000659,
        "SHIFT": 0,
        "SIB": 5.177,
        "SMART": 0.000239,
        "SMLY": 0.00006,
        "SMT*": 0.011226,
        "SNC": 0.030883,
        "SNGLS": 0.000402,
        "SNM": 0.378939,
        "SNT": 0.023461,
        "SPK": 0.0084,
        "SRN": 0.001623,
        "STEEM": 0.184595,
        "STK": 0.307261,
        "STORJ": 0.306488,
        "STRAT": 0.345148,
        "STU": 0.00019,
        "STX": 0.6121,
        "SUB": 0.00033,
        "SUR": 0.01,
        "SWFTC": 0.0007,
        "SYS": 0.1306,
        "TAAS": 10,
        "TESLA": 0.019139,
        "THC": 0.002245,
        "THETA": 0.838039,
        "THS": 0.00171,
        "TIO": 0.085,
        "TKN": 0,
        "TKY": 0.000171,
        "TNB": 0.0003,
        "TNT": 0.0044,
        "TOA": 0.002397,
        "TRC": 6.2,
        "TRIG": 0.535546,
        "TRST": 0.04799,
        "TRUMP": 0.055,
        "TRX": 0.081611,
        "UBQ": 0.022991,
        "UNO": 13.4,
        "UNRC": 0.00006,
        "UQC": 8,
        "USDT": 1.007763,
        "UTK": 0.09043,
        "UTT": 0.009029,
        "VEE": 0.001623,
        "VEN": 3.767141,
        "VERI": 23.736235,
        "VIA": 0.037055,
        "VIB": 0.061156,
        "VIBE": 0.001501,
        "VOISE": 0.00018,
        "VOX": 0.125351,
        "VRS": 0.1375,
        "VTC": 0.088446,
        "VUC": 0.000099,
        "WABI": 0.0014,
        "WAVES": 1.736552,
        "WAX": 0.05313,
        "WC": 0.045,
        "WGR": 2267206202.849958,
        "WINGS": 0.001082,
        "WLK": 0.0058,
        "WOP": 0.046453,
        "WPR": 0.04073,
        "WRC": 0.027048,
        "WTC": 0.1849,
        "XAUR": 0.10301,
        "XBP": 0.0027,
        "XBY": 0.2889,
        "XCP": 4.868599,
        "XCXT": 0.095658,
        "XDN": 0.0000276415,
        "XEM": 0.033394,
        "XGB": 0.0015,
        "XHI": 0.001325,
        "XID": 0.010924,
        "XLM": 0.091954,
        "XMR": 148.62112,
        "XNC": 0.00018,
        "XRB": 24.262564,
        "XRP": 0.523374,
        "XTO": 0.324858,
        "XTZ": 0.922035,
        "XUC": 0.00107,
        "XVG": 0.002003,
        "XZC": 4.96985,
        "YEE": 0.000002,
        "YOC": 0.00012,
        "YOYOW": 0.002164,
        "ZBC": 0.01323,
        "ZCL": 1.331807,
        "ZEC": 32.328747,
        "ZEN": 8.029455,
        "ZIL": 0.023627,
        "ZNY": 0.02,
        "ZRX": 0.222039,
        "ZSC": 0.00005877
    }
    }
    const CRYPTO_EXCHANGE_API_KEY = "1bf70744b751e186ab7ef0b900c498e8"
    const CRYPTO_EXCHANGE_URL = `http://api.coinlayer.com/live
    ?access_key=${CRYPTO_EXCHANGE_API_KEY}`;
    
    React.useEffect(() => {
        let headers = new Headers({
            "Accept"       : "application/json",
            "Content-Type" : "application/json",
            "User-Agent"   : "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
        });
        //Fetch throwing CORS error.. Since CORs should be handled at server side, therefore using hard-coded data
        fetch(CRYPTO_EXCHANGE_URL).then(response => {
            if(response.status == 200) {
                console.log("Response", response);
            }
        }).then(data => {
            
            if(!data) {
                let userOwnedCoins = [];
                let rates = coinsJson["rates"];
                if(coinsData.length <= 0) {
                    for (const [key, value] of Object.entries(rates)) {
                        let amount = Math.floor(Math.random() * 100) + 1;
                        let dataDict = {"id": key, "cryptoCoin": key, "amount": amount, "liveRate": value}
                        userOwnedCoins.push(dataDict);
                    }
                    dispatch(loadCoinsData(userOwnedCoins));
                }
            }
            console.log("Coins Data: ", data);
        }).catch(exception => {
            console.log("Exception", exception); 
            let userOwnedCoins = [];
            let rates = coinsJson["rates"];
            if(coinsData.length <= 0) {
                for (const [key, value] of Object.entries(rates)) {
                    let amount = Math.floor(Math.random() * 100) + 1;
                    let dataDict = {"id": key, "cryptoCoin": key, "amount": amount, "liveRate": value}
                    userOwnedCoins.push(dataDict);
                }
                dispatch(loadCoinsData(userOwnedCoins));
            }
        });
        
        
    }, []);

    const onTransferClick =  (coinName) => {
        navigate(`/transfer-coins?coin_name=${coinName}`);
    }
    const customStyles = {
        content: {
          top: '30%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    
    const columns = [
        { field: 'cryptoCoins', headerName: 'CryptoCoin', width: 130, valueGetter: (params) =>
                                                            `${params.row.cryptoCoin || ''}`,},
        { field: 'amount', headerName: 'Current Amount', width: 130, valueGetter: (params) =>
        `${params.row.amount }`,},
        { field: 'liveRate', headerName: 'LiveRate', width: 130, valueGetter: (params) =>
                                            `${params.row.liveRate || ''}`,},
        { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => { return (
                                                                                        <>
                                                                                       
                                                                                        <Button onClick={() => {
                                                                                            onTransferClick(params.row.id);
                                                                                        }}>Transfer</Button>
                                                                                        </>
                                                                                    ) }},
      ];
      
    return (
        <div>
            <h2>Coins Info</h2>
                <div style={{ height: 400, width: '60%', marginLeft:"auto", marginRight:"auto", marginTop: '5%' }}>
                <DataGrid
                    rows={coinsData}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                />
                </div>
        </div>
    );
};

export default CryptoExchangeViewer;