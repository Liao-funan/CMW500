# CONFigureWLANMEASiISIGnalMODFilter

Module: WLAN Measurements
Source: 01936895957a4264.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:WLAN:MEAS<i>:ISIGnal:MODFilter
CONFigure:WLAN:MEAS<i>:ISIGnal:MODFilter 
<ModulationFilter>
This command allows you to limit the evaluation to bursts of a particular modulation type. If the received burst has a different modulation the reliability "Wrong Modulation" will be displayed.
Parameters:
<ModulationFilter>
For OFDM: ALL | BPSK | QPSK | QAM16 | QAM64 | QAM256 | QAM1024
For DSSS: ALL | DBPSk | DQPSk | CCK5_5 | CCK11
*RST:
ALL
Firmware/Software: 
V3.5.10, V3.7.30: added QAM256, QAM1024
Options: 
R&S CMW-KS650
Manual operation: 
See 
"Modulation Filter"
Top