# Specifying General and Common Measurement Settings

Module: WCDMA NodeB Measurements
Source: 12cafcd11953438b.htm

## 原始指令文档说明
WCDMA NodeB Measurements
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
// Define signal routing, perform RF and analyzer settings for a band,
// WCDMA downlink signal with a carrier frequency of 1962 MHz, a peak 
// power of 7 dBm, allowing for a 5 dB user margin.
// Alternatively configure the same frequency via channel.
// *****************************************************************************
ROUTe:WCDMa:MEAS:NB:SCENario:SALone RF1C, RX1
CONFigure:WCDMa:MEAS:NB:RFSettings:EATTenuation 2
CONFigure:WCDMa:MEAS:NB:BAND OB2
CONFigure:WCDMa:MEAS:NB:RFSettings:FREQuency 1962E+6
CONFigure:WCDMa:MEAS:NB:RFSettings:ENPower 7
CONFigure:WCDMa:MEAS:NB:RFSettings:UMARgin 5
CONFigure:WCDMa:MEAS:NB:RFSettings:FREQuency 9810 CH
Top