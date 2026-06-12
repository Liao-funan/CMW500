# Specifying Required Settings

Module: LTE eNodeB Measurements
Source: 7c4d5f8b050e4b30.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Programming
 > 
Specifying Required Settings
Specifying Required Settings
// *****************************************************************************
// Specify required eNodeB signal settings:
// E-UTRA test model, UL-DL configuration, special subframe configuration,
// channel bandwidth, physical cell ID, 
// number of used antennas, antenna connections, SYNCH antenna.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:ETEStmodel ETM12
CONFigure:LTE:MEAS:ENB:MEValuation:ULDL 3
CONFigure:LTE:MEAS:ENB:MEValuation:SSUBframe 8
CONFigure:LTE:MEAS:ENB:MEValuation:CBANdwidth B014
CONFigure:LTE:MEAS:ENB:MEValuation:PLCid 2
CONFigure:LTE:MEAS:ENB:MEValuation:MIMO TA2
CONFigure:LTE:MEAS:ENB:MEValuation:TASelection:INPut1 A1
CONFigure:LTE:MEAS:ENB:MEValuation:TASelection:INPut2 A2
CONFigure:LTE:MEAS:ENB:MEValuation:TASYnch A1
Top