# CONFigureGPRFMEASiPOWerPSETFILTerTYPEALL

Module: GPRF Measurements
Source: 5f2d47d8cc4c49eb.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Parameter Set List Settings
 > 
CONFigure:GPRF:MEAS<i>:POWer:PSET:FILTer:TYPE:ALL
CONFigure:GPRF:MEAS<i>:POWer:PSET:FILTer:TYPE:ALL 
<Filter>...
Selects the IF filter type for all parameter sets.
Parameters:
<Filter>
BANDpass |
 
 GAUSs |
 
 WCDMa |
 
 CDMA |
 
 TDSCdma
Comma-separated list of 32 values, for parameter set no. 0 to 31
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
"Performing an I/Q Data Measurement"
Firmware/Software: 
V2.1.25
Manual operation: 
See 
"Edit Parameter Set"
Top