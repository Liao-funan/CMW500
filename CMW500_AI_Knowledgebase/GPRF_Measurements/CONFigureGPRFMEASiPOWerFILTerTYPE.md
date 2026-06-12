# CONFigureGPRFMEASiPOWerFILTerTYPE

Module: GPRF Measurements
Source: 29129738190b48a1.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Measurement Control Parameters
 > 
CONFigure:GPRF:MEAS<i>:POWer:FILTer:TYPE
CONFigure:GPRF:MEAS<i>:POWer:FILTer:TYPE 
<FilterType>
Selects the IF filter type.
Parameters:
<FilterType>
BANDpass |
 
 GAUSs |
 
 WCDMa |
 
 CDMA |
 
 TDSCdma
BANDpass:
 Bandpass filter with selectable bandwidth
GAUSs:
 Filter of Gaussian shape with selectable bandwidth
WCDMA:
 3.84 MHz RRC filter with a roll-off = 0.22 for WCDMA TX tests
CDMA:
 1.2288 MHz-wide channel filter for CDMA 2000 TX tests
TDSCdma:
 1.28 MHz RRC filter with a roll-off = 0.22 for TD-SCDMA TX tests
*RST:
GAUS
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Filter"
Top