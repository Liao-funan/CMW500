# CONFigureBLUetoothMEASiMEValuationLIMitSACP

Module: Bluetooth Measurements
Source: 3aa6fc5cd58a4092.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Limit Settings
 > 
Limits (Spectrum)
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:SACP
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:SACP 
<PTxLimit>, <ExcPTxLimit>, <NoOfExLimit>, <PTxEnable>, <NoOfExcEnable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LRANge:SACP 
<PTxLimit>, <ExcPTxLimit>, <NoOfExLimit>, <PTxEnable>, <NoOfExcEnable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy:LE2M:SACP 
<PTxLimit>, <ExcPTxLimit>, <NoOfExLimit>, <PTxEnable>, <NoOfExcEnable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:LENergy[:LE1M]:SACP 
<PTxLimit>, <ExcPTxLimit>, <NoOfExLimit>, <PTxEnable>, <NoOfExcEnable>
These commands define and enable the "Spectrum ACP" limits for BR (
...:LIMit:SACP
), LE 1M PHY ( 
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
), respectively.
Parameters:
<PTxLimit>
Power limit for 1 MHz channels f
TX
±
 2 MHz
Range: 
-80 dBm  to  -10 dBm
*RST:
-20 dBm
<ExcPTxLimit>
Power limit for 1 MHz channels f
TX
±
3 MHz, f
TX
±
4 MHz, ...
Range: 
-80 dBm  to  -10 dBm
*RST:
-40 dBm for BR, -30 dBm for LE
<NoOfExLimit>
Maximum number of tolerable exceptions, i.e. 1 MHz channels f
TX
±
3 MHz, f
TX
±
4 MHz, ... whose power is above 
ExcPTxLimit
, but below 
PTxLimit
Range: 
0  to  16
*RST:
3
<PTxEnable>
OFF |
 
 ON
Disables | enables the 
PTxLimit
 limit for 1 MHz channels f
TX
±
 2 MHz
*RST:
ON
<NoOfExcEnable>
OFF |
 
 ON
Disables | enables the 
ExcPTxLimit
 limit for 1 MHz channels f
TX
±
3 MHz, f
TX
±
4 MHz, ... with 
NoOfExLimit
 tolerable exceptions (per statistic cycle).
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V1.0.15.20
V2.1.20: added command for LE
V3.5.70: added commands for LE2M and LRANge
Options: 
R&S CMW-KM610 for BR and EDR
R&S CMW-KM611 for LE
Plus R&S CMW-KM721 for LE2M and LRANge
Manual operation: 
See 
"ACP (BR, LE)"
Top