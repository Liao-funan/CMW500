# CONFigureBLUetoothMEASiMEValuationSACPLENergyLE2MMEASurementMODE

Module: Bluetooth Measurements
Source: b98a9cf586f441f4.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:SACP:LENergy:LE2M:MEASurement:MODE
CONFigure:BLUetooth:MEAS<i>:MEValuation:SACP:LENergy:LE2M:MEASurement:MODE 
<Meas Mode>
CONFigure:BLUetooth:MEAS<i>:MEValuation:SACP:LENergy[:LE1M]:MEASurement:MODE 
<Meas Mode>
Specifies the channel range for ACP measurements. Can be selected to cover either the full LE frequency band (forty 2 MHz channels) or only the adjacency of the current LE channel (ten 2 MHz channels).
The commands for LE 1M PHY (
...:LE1M...
) and LE 2M PHY (
...:LE2M...
) are available.
Note:
 Although LE channels are 2 MHz wide, the channel width in ACP measurements is always 1 MHz ("half-channel").
Parameters:
<Meas Mode>
CH40 |
 
 CH10
CH10
: Covers the current and its 10 adjacent 2 MHz LE channels (5 to the left, 5 to the right). The R&S
 
CMW measures the 1 MHz channels centered at f
TX
 – 10 MHz, ..., f
TX
 + 10 MHz.
CH40
: Covers all 40 LE channels. The R&S
 
CMW measures the 81 half-channels centered at 2401 MHz, 2402 MHz, ..., 2481 MHz.
*RST:
CH10
Example: 
See 
"Spectrum Measurements"
Firmware/Software: 
V2.1.20
V3.5.70: added commands for LE2M
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M
Manual operation: 
See 
"ACP Measurement Mode"
Top