# Specifying Required Settings

Module: LTE Measurements
Source: 10eb633bec184175.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Specifying Required Settings
Specifying Required Settings
// *****************************************************************************
// Specify required UE signal settings: UL/DL configuration 1,
// special subframe configuration 1, extended cyclic prefix,
// contains PUCCH with format 1a, physical layer cell IDs 5 and 10,
// delta sequence shift value 10, no group hopping.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:ULDL 1
CONFigure:LTE:MEAS:MEValuation:SSUBframe 1
CONFigure:LTE:MEAS:MEValuation:CPRefix EXTended
CONFigure:LTE:MEAS:MEValuation:PFORmat F1A
CONFigure:LTE:MEAS:MEValuation:CC1:PLCid 5
CONFigure:LTE:MEAS:MEValuation:CC2:PLCid 10
CONFigure:LTE:MEAS:MEValuation:DSSPusch 10
CONFigure:LTE:MEAS:MEValuation:GHOPping OFF
Top