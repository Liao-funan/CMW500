# CONFigureLTESIGNiRFSettingsALLBWCHannel

Module: LTE Signaling
Source: bf4386e7890f4b4c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:LTE:SIGN<i>:RFSettings:ALL:BWCHannel
CONFigure:LTE:SIGN<i>:RFSettings:ALL:BWCHannel 
<BandPCC>, <DLChannelPCC>, <BandwithPCC>[, <BandSCC1>, <DLChannelSCC1>, <BandwithSCC1>[, <BandSCC2>, <DLChannelSCC2>, <BandwithSCC2>[, <BandSCC3>, <DLChannelSCC3>, <BandwithSCC3>[, <BandSCC4>, <DLChannelSCC4>, <BandwithSCC4>]]]]
Selects the operating band, the downlink channel number and the cell bandwidth for the PCC and optionally for the SCCs.
A query returns only the component carriers that are supported by the current scenario.
Parameters:
<BandPCC>
FDD: UDEFined |
 
 OB1 |
 
 ... |
 
 OB28 |
 
 OB30 |
 
 OB31 |
 
 OB65 |
 
 OB66 |
 
 OB68 |
 
 OB70 |
 
 OB71
TDD: UDEFined | OB33 | ... | OB45 | OB46 | OB48 | OB250
Selects the PCC operating band
*RST:
OB1 (OB33 for TDD)
<DLChannelPCC>
PCC DL channel number
Range: 
depends on operating band
<BandwithPCC>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
PCC cell bandwidth
B014:
 1.4 MHz
B030:
 3 MHz
B050:
 5 MHz
B100:
 10 MHz
B150:
 15 MHz
B200:
 20 MHz
*RST:
B100
<BandSCC1>
FDD: UDEFined |
 
 OB1 |
 
 ... |
 
 OB32 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB252 |
 
 OB255
TDD: UDEFined | OB33 | ... | OB45 | OB46 | OB48 | OB250
SCC1 operating band
*RST:
OB1 (OB33 for TDD)
<DLChannelSCC1>
SCC1 DL channel number
Range: 
depends on operating band
<BandwithSCC1>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
SCC1 cell bandwidth
*RST:
B100
<BandSCC2>
FDD: UDEFined |
 
 OB1 |
 
 ... |
 
 OB32 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB252 |
 
 OB255
TDD: UDEFined | OB33 | ... | OB45 | OB46 | OB48 | OB250
SCC2 operating band
*RST:
OB1 (OB33 for TDD)
<DLChannelSCC2>
SCC2 DL channel number
Range: 
depends on operating band
<BandwithSCC2>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
SCC2 cell bandwidth
*RST:
B100
<BandSCC3>
FDD: UDEFined |
 
 OB1 |
 
 ... |
 
 OB32 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB252 |
 
 OB255
TDD: UDEFined | OB33 | ... | OB45 | OB46 | OB48 | OB250
SCC3 operating band
*RST:
OB1 (OB33 for TDD)
<DLChannelSCC3>
SCC3 DL channel number
Range: 
depends on operating band
<BandwithSCC3>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
SCC3 cell bandwidth
*RST:
B100
<BandSCC4>
FDD: UDEFined |
 
 OB1 |
 
 ... |
 
 OB32 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB252 |
 
 OB255
TDD: UDEFined | OB33 | ... | OB45 | OB46 | OB48 | OB250
SCC4 operating band
*RST:
OB1 (OB33 for TDD)
<DLChannelSCC4>
SCC4 DL channel number
Range: 
depends on operating band
<BandwithSCC4>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
SCC4 cell bandwidth
*RST:
B100
Firmware/Software: 
V3.2.80, some bands added in later versions
V3.5.10: added SCC2/3, V3.7.10: added SCC4
Options: 
R&S CMW-KS525 for UDEFined, OB250, OB252, OB255
R&S CMW-KS514 for OB46
Manual operation: 
See 
"Operating Band, Channel, Frequency"
Top