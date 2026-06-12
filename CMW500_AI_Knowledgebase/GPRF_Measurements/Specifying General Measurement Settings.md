# Specifying General Measurement Settings

Module: GPRF Measurements
Source: 9898892150a54f50.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
I/Q Recorder Measurement
 > 
Specifying General Measurement Settings
Specifying General Measurement Settings
// *************************************************************************
// System-Reset
// *************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *************************************************************************
// Define signal routing, perform RF and analyzer settings
// for a 20 dBm RF signal
// *************************************************************************
ROUTe:GPRF:MEAS:SCENario:SALone RF1C, RX1
CONFigure:GPRF:MEAS:RFSettings:EATTenuation 2
CONFigure:GPRF:MEAS:RFSettings:ENPower 20
CONFigure:GPRF:MEAS:RFSettings:UMARgin 5
CONFigure:GPRF:MEAS:RFSettings:FREQuency 890.2E+6
Top