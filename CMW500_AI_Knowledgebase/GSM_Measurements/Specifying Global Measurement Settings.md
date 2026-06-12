# Specifying Global Measurement Settings

Module: GSM Measurements
Source: 31c4c87cfdbc4815.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
GSM List Mode
 > 
Specifying Global Measurement Settings
Specifying Global Measurement Settings
// *************************************************************************
// System-Reset
// *************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *************************************************************************
// Define signal routing and external attenuation
// (Note: The general RF frequency and expected power settings are
// not used in list mode)
// *************************************************************************
ROUTe:GSM:MEAS:SCENario:SALone RF1C, RX1
CONFigure:GSM:MEAS:RFSettings:EATTenuation 2
// *************************************************************************
// Define PCL mode.
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:PCLMode PCL
Top