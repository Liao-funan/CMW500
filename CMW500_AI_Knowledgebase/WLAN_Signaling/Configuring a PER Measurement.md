# Configuring a PER Measurement

Module: WLAN Signaling
Source: f90d6f8c5c924bf1.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
PER Measurements
 > 
Configuring a PER Measurement
Configuring a PER Measurement
// *****************************************************************************
// Configure the generated signal and the PER limit.
// *****************************************************************************
CONFigure:WLAN:SIGN:PER:FDEF HTG, BW20, MCS6
CONFigure:WLAN:SIGN:PER:DPATtern PN5
CONFigure:WLAN:SIGN:PER:PACKets 200
CONFigure:WLAN:SIGN:PER:DINTerval 25
CONFigure:WLAN:SIGN:PER:PAYLoad:SIZE 90
CONFigure:WLAN:SIGN:PER:LIMit 50
/// *****************************************************************************
// Configure data frame rate control for PER: set RU allocation subfield,
// query RU allocations.
// Configure payload: map user 1 and dummy users to RU. Set MCS and coding
// type for corresponding users. Set TID for PER.
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:DFDef ENABle, HES, BW20, MCS10, GI08, X1, PE4
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:ALSField A200 CHA1
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:BLALlocation?
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:RUALlocation USR1,CHA1,RU1
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:RUALlocation DMY1,CHA1,RU2
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:RUALlocation DMY2,CHA1,RU3
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:USER1:ALLocation CHA1,RU1
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:USER1:MCS MCS5
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:USER1:CTYPe BCC
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:DUMMy1:MCS MCS10
CONFigure:WLAN:SIGN:PER:DFRame:HEMU:DUMMy2:MCS MCS10
CONFigure:WLAN:SIGN:PER:TIDentifier TID6
Top