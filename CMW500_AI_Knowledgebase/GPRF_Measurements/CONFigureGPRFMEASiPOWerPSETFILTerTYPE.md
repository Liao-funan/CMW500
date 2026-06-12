# CONFigureGPRFMEASiPOWerPSETFILTerTYPE

Module: GPRF Measurements
Source: 3bcff08f6254450f.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Parameter Set List Settings
 > 
CONFigure:GPRF:MEAS<i>:POWer:PSET:FILTer:TYPE
CONFigure:GPRF:MEAS<i>:POWer:PSET:FILTer:TYPE 
<Index>, <Filter>
CONFigure:GPRF:MEAS<i>:POWer:PSET:FILTer:TYPE? 
<Index>
Selects the IF filter type for a particular parameter set <index>.
Parameters:
<Filter>
BANDpass |
 
 GAUSs |
 
 WCDMa |
 
 CDMA |
 
 TDSCdma
BANDpass:
 bandpass filter with selectable bandwidth
GAUSs:
 filter of Gaussian shape with selectable bandwidth
WCDMA:
 3.84 MHz RRC filter with a roll-off = 0.22 for WCDMA TX tests
CDMA:
 1.2288 MHz-wide channel filter for CDMA 2000 TX tests
TDSCdma:
 1.28 MHz RRC filter with a roll-off = 0.22 for TD-SCDMA TX tests
*RST:
GAUS
Parameters for setting and query: 
<Index>
Number of the parameter set in the list
Range: 
0 to 31
*RST:
n/a
Example: 
See 
"Performing an I/Q Data Measurement"
Firmware/Software: 
V2.1.25
Manual operation: 
See 
"Edit Parameter Set"
Top