# CONFigureWCDMaSIGNiCELLRESelectionQUALity

Module: WCDMA Signaling
Source: 9f52a579b98f4543.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Cell Reselection Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:RESelection:QUALity
CONFigure:WCDMa:SIGN<i>:CELL:RESelection:QUALity 
<Qqualmin>, <Qrxlevmin>[, <QrxlevminEUTRA>[, <Qhyst1s>[, <Qhyst2s>]]]
Defines the power levels required for cell reselection. They are transmitted to the UE in the system information.
Parameters:
<Qqualmin>
Minimum required quality level in the reselection target cell.
Range: 
-24 dB  to  0 dB
*RST:
-24 dB
Default unit: 
dB
<Qrxlevmin>
Minimum RX level at a UE antenna required for reselection to the UMTS cell
Range: 
-115 dBm  to  -25 dBm
*RST:
-115 dBm
Default unit: 
dBm
<QrxlevminEUTRA>
Minimum RX level at a UE antenna required for access to the LTE cell
Range: 
-140 dBm  to  -44 dBm
Increment: 
2 dB
*RST:
-140 dBm
Default unit: 
dBm
<Qhyst1s>
Hysteresis used for GSM, TDD and for FDD cells in case the quality measure for reselection is set to CPICH RSCP
Range: 
0 dB  to  40 dB
Increment: 
2 dB
*RST:
4 dB
Default unit: 
dB
<Qhyst2s>
Hysteresis used for FDD cells if the quality measure for reselection is set to CPICH Ec/No
Range: 
0 dB  to  40 dB
Increment: 
2 dB
*RST:
4 dB
Default unit: 
dB
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V2.1.30
V3.2.70: added <QrxlevminEUTRA>
V3.2.80: added <Qhyst1s>, <Qhyst2s>
Options: 
R&S CMW-KS410
Manual operation: 
See 
"Q qualmin"
Top