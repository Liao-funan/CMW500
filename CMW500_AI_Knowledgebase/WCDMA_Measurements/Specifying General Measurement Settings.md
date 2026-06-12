# Specifying General Measurement Settings

Module: WCDMA Measurements
Source: c419eaf0d6664b11.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Specifying General Measurement Settings
Specifying General Measurement Settings
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Define signal routing, perform RF and analyzer settings
// for a WCDMA uplink signal (operating band I, channel no. 9815,
// corresponding to a carrier frequency of 1963 MHz) with a
// peak power of 7 dBm, allowing for a 5 dB user margin
// *****************************************************************************
ROUTe:WCDMa:MEAS:SCENario:SALone RF1C, RX1
CONFigure:WCDMA:MEAS:RFSettings:EATTenuation 2
CONFigure:WCDMA:MEAS:RFSettings:ENPower 7
CONFigure:WCDMA:MEAS:RFSettings:UMARgin 5
CONFigure:WCDMA:MEAS:RFSettings:FREQuency 1963E+6
 
// *****************************************************************************
// Alternatively set the frequency indirectly via band and channel.
// Query the carrier separation during dual carrier measurement.
// *****************************************************************************
CONFigure:WCDMa:MEAS:BAND OB3
CONFigure:WCDMa:MEAS:RFSettings:FREQuency 1162 CH
CONFigure:WCDMa:MEAS:RFSettings:DCARrier:SEParation?
Top