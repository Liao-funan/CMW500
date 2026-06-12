# Specifying Measurement Settings

Module: WCDMA Measurements
Source: bda924f377574100.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Out-Of-Sync Handling Measurement
 > 
Programming
 > 
Specifying Measurement Settings
Specifying Measurement Settings
The following sections provide programming examples for the WCDMA out-of-sync handling measurement, using the combined signal path scenario. The WCDMA signaling application is used to control the UE and to trigger the measurement.
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Activate the combined signal path scenario and select instance 1 of the
// signaling application as master.
// *****************************************************************************
ROUTe:WCDMa:MEAS:SCENario:CSPath 'WCDMA Sig1'
// *****************************************************************************
// Use the commands of the signaling application to define the signal routing.
// Set T313 and N313.
// *****************************************************************************
ROUTe:WCDMa:SIGN:SCENario:DCHSpa RF1C,RX1,RF1C,RX1,RF1C,TX1,RF1C,TX1
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:RXLStrategy AF
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:LSEQuence -22,-28,-24,-18
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:LSEQuence:STATe?
CONFigure:WCDMa:SIGN:CELL:TOUT:T313 15
CONFigure:WCDMa:SIGN:CELL:TOUT:N313 N200
Top