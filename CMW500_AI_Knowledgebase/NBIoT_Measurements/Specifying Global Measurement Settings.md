# Specifying Global Measurement Settings

Module: NBIoT Measurements
Source: ac94355991bd4964.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Programming
 > 
Using the List Mode
 > 
Specifying Global Measurement Settings
Specifying Global Measurement Settings
// *****************************************************************************
// Reset
// *****************************************************************************
SYSTem:RESet 'NB-IoT Meas1'; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Define signal routing and external attenuation.
// *****************************************************************************
ROUTe:NIOT:MEAS:SCENario:SALone RF1C, RX1
CONFigure:NIOT:MEAS:RFSettings:EATTenuation 2
// *****************************************************************************
// Specify required UE signal settings not configurable per segment:
// subcarrier spacing, physical cell ID, delta sequence shift value.
// *****************************************************************************
CONFigure:NIOT:MEAS:MEValuation:SCSPacing S15K
CONFigure:NIOT:MEAS:MEValuation:PLCid 10
CONFigure:NIOT:MEAS:MEValuation:DSS 5
Top