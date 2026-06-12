# CONFigureWLANMEASiMEValuationLIMitUTEPower

Module: WLAN Measurements
Source: 28828b27e4244e13.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Limits: 802.11ax
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:UTEPower
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:UTEPower 
<UTEPower>
Sets the type of limits to be applied for the unused tone error of HE TB PPDU.
Parameters:
<UTEPower>
HIGH |
 
 LOW
HIGH
: used limits are according to the transmit power larger than the maximum power of MCS
 
7
LOW
: used limits are according to the transmit power less than or equal to the maximum power of MCS
 
7
Example: 
See 
"Specifying Modulation Limits (OFDM)"
Firmware/Software: 
V3.7.30
Options: 
R&S CMW-KM657
Top