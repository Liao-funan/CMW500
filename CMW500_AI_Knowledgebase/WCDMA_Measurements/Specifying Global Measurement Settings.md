# Specifying Global Measurement Settings

Module: WCDMA Measurements
Source: 6171721e8c974f17.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Programming
 > 
Using WCDMA List Mode
 > 
Specifying Global Measurement Settings
Specifying Global Measurement Settings
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Define signal routing and external attenuation
// (Note: The general RF frequency and expected power settings are 
// not used in list mode)
// *****************************************************************************
ROUTe:WCDMa:MEAS:SCENario:SALone RF1C, RX1
CONFigure:WCDMa:MEAS:RFSettings:EATTenuation 2
Top