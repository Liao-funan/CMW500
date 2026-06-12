# Specifying Global Measurement Settings

Module: LTE Measurements
Source: 2d872d865d274a0f.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Programming
 > 
Using LTE List Mode
 > 
Specifying Global Measurement Settings
Specifying Global Measurement Settings
// *****************************************************************************
// Reset
// *****************************************************************************
SYSTem:RESet 'LTE Meas1'; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Define signal routing, external attenuation and carrier aggregation.
// *****************************************************************************
ROUTe:LTE:MEAS:SCENario:SALone RF1C, RX1
CONFigure:LTE:MEAS:RFSettings:EATTenuation 2
CONFigure:LTE:MEAS:CAGGregation:MODE INTRaband 
// *****************************************************************************
// Specify required UE signal settings not configurable per segment:
// signal contains PUCCH with format 1a, physical layer cell ID 5,
// delta sequence shift value 10
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:PFORmat F1A
CONFigure:LTE:MEAS:MEValuation:CC:PLCid 5
CONFigure:LTE:MEAS:MEValuation:DSSPusch 10
Top