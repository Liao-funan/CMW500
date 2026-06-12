# Specifying General Measurement Settings

Module: GSM Measurements
Source: 64fa30f18e294489.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
General Examples
 > 
Specifying General Measurement Settings
Specifying General Measurement Settings
// *************************************************************************
// System-Reset
// *************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *************************************************************************
// Check signal routing options, perform RF and analyzer settings
// for a GSM900 uplink signal (channel 1) with a
// nominal power of 20 dBm, GMSK/8PSK modulation and
// frequency offset 1 kHz
// *************************************************************************
ROUTe:GSM:MEAS:SCENario:CSPath 'GSM Sig1'
ROUTe:GSM:MEAS:SCENario:MAProtocol
ROUTe:GSM:MEAS:SCENario?
ROUTe:GSM:MEAS?
ROUTe:GSM:MEAS:SCENario:SALone RF1C, RX1
CONFigure:GSM:MEAS:RFSettings:EATTenuation 2
CONFigure:GSM:MEAS:RFSettings:ENPower 20
CONFigure:GSM:MEAS:RFSettings:UMARgin 5
CONFigure:GSM:MEAS:RFSettings:FREQuency 890.2E+6
CONFigure:GSM:MEAS:RFSettings:FOFFset 1000
// *************************************************************************
// Redefine the frequency entering frequency band and channel number.
// *************************************************************************
CONFigure:GSM:MEAS:BAND G04
CONFigure:GSM:MEAS:CHANnel 300
Top