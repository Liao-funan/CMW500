# Specifying Required Settings

Module: NBIoT Measurements
Source: 1a352f329607471c.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Specifying Required Settings
Specifying Required Settings
// *****************************************************************************
// Specify required UE signal settings:
// subcarrier spacing, NPUSCH format, resource allocation, physical cell ID,
// delta sequence shift value, modulation scheme.
// *****************************************************************************
CONFigure:NIOT:MEAS:MEValuation:SCSPacing S15K
CONFigure:NIOT:MEAS:MEValuation:NPFormat F1
CONFigure:NIOT:MEAS:MEValuation:SUBCarrier 3, 6
CONFigure:NIOT:MEAS:MEValuation:NRUNits NRU04
CONFigure:NIOT:MEAS:MEValuation:NREPetitions NR2
CONFigure:NIOT:MEAS:MEValuation:PLCid 10
CONFigure:NIOT:MEAS:MEValuation:DSS 5
CONFigure:NIOT:MEAS:MEValuation:MODulation:MSCHeme QPSK
Top