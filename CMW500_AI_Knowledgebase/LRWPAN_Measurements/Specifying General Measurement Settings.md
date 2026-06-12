# Specifying General Measurement Settings

Module: LRWPAN Measurements
Source: 4a17e6155a8f4b5d.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Programming
 > 
Specifying General Measurement Settings
Specifying General Measurement Settings
// *************************************************************************
// System-Reset
// *************************************************************************
*RST;*OPC?
*CLS; *OPC?
 
// *******************************************************************************
// Define a measurement timeout of 1 s.
// Define signal routing, configure RF and analyzer settings for a LR-WPAN
// signal with a nominal power of 0 dBm and operating frequency 2450 MHz.
// *******************************************************************************
CONFigure:WPAN:MEAS:MEValuation:TOUT 1
ROUTe:WPAN:MEAS:SCENario:SALone RF1C,RX1
CONFigure:WPAN:MEAS:RFSettings:EATTenuation 2
CONFigure:WPAN:MEAS:RFSettings:ENPower 0
CONFigure:WPAN:MEAS:RFSettings:UMARgin 3
CONFigure:WPAN:MEAS:RFSettings:FREQuency 2450E+6
WAITKEY >Signal routing and analyzer settings completed, press "OK" to continue<
Top