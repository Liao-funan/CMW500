# Specifying General and Common Measurement Settings

Module: WCDMA Measurements
Source: 7d2424a6cd014d9e.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Programming
 > 
Specifying General and Common Measurement Settings
Specifying General and Common Measurement Settings
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Define signal routing, perform RF and analyzer settings for a WCDMA uplink
// signal with a carrier frequency of 1963 MHz and a peak power of 24 dBm.
// *****************************************************************************
ROUTe:WCDMa:MEAS:SCENario:SALone RF1C, RX1
CONFigure:WCDMA:MEAS:RFSettings:EATTenuation 2
CONFigure:WCDMA:MEAS:RFSettings:ENPower 24
CONFigure:WCDMA:MEAS:RFSettings:UMARgin 0
CONFigure:WCDMA:MEAS:RFSettings:FREQuency 1963E+6
Top