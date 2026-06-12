# Specifying General and Common Measurement Settings

Module: LTE eNodeB Measurements
Source: b7acaacf94e148bf.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Programming
 > 
Specifying General and Common Measurement Settings
Specifying General and Common Measurement Settings
// *****************************************************************************
// Initial system-reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Activate the "Two RF In" scenario and define the signal routing.
// Perform RF and analyzer settings for an LTE downlink
// signal with a carrier frequency of 1910 MHz, a peak power of 7 dBm,
// allowing for a 5 dB user margin and 1 dB mixer level offset.
// *****************************************************************************
ROUTe:LTE:MEAS:ENB:SCENario:TRI RF1C, RX1, RF2C, RX1
CONFigure:LTE:MEAS:ENB:RFSettings:EATTenuation 2
CONFigure:LTE:MEAS:ENB:RFSettings:FREQuency 1910E+6
CONFigure:LTE:MEAS:ENB:RFSettings:ENPower 7
CONFigure:LTE:MEAS:ENB:RFSettings:UMARgin 5
CONFigure:LTE:MEAS:ENB:RFSettings:MLOFfset 1
// *****************************************************************************
// Set duplex mode TDD.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:DMODe TDD
Top