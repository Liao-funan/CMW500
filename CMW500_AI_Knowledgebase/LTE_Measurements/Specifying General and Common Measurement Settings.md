# Specifying General and Common Measurement Settings

Module: LTE Measurements
Source: 745e26a0bb9845b8.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Specifying General and Common Measurement Settings
Specifying General and Common Measurement Settings
// *****************************************************************************
// Initial system-reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Set duplex mode TDD and query the resulting frame structure type (T2).
// *****************************************************************************
CONFigure:LTE:MEAS:DMODe TDD
CONFigure:LTE:MEAS:FSTRucture?
// *****************************************************************************
// Define signal routing and perform RF and analyzer settings:
// CC1 center frequency 1850 MHz, frequency offset 1 kHz, peak power 7 dBm,
// 5 dB user margin and 1 dB mixer level offset.
// Specify CC1 channel bandwidth 1.4 MHz.
// *****************************************************************************
ROUTe:LTE:MEAS:SCENario:SALone RF1C, RX1
CONFigure:LTE:MEAS:RFSettings:EATTenuation 2
CONFigure:LTE:MEAS:RFSettings:CC1:FREQuency 1850E+6
CONFigure:LTE:MEAS:RFSettings:FOFFset 1000
CONFigure:LTE:MEAS:RFSettings:ENPower 7
CONFigure:LTE:MEAS:RFSettings:UMARgin 5
CONFigure:LTE:MEAS:RFSettings:MLOFfset 1
CONFigure:LTE:MEAS:CC1:CBANdwidth B014
// *****************************************************************************
// Disable eMTC. Enable carrier aggregation.
// Define the CC2 channel bandwidth. Adjust and query the CC2 frequency.
// Query information about the resulting aggregated bandwidth.
// Select the CC1 for single-carrier measurements.
// *****************************************************************************
CONFigure:LTE:MEAS:EMTC:ENABle OFF
CONFigure:LTE:MEAS:CAGGregation:MODE INTRaband
CONFigure:LTE:MEAS:CC2:CBANdwidth B014
CONFigure:LTE:MEAS:CAGGregation:ACSPacing
CONFigure:LTE:MEAS:RFSettings:CC2:FREQuency?
CONFigure:LTE:MEAS:CAGGregation:FREQuency:AGGRegated:LOW?
CONFigure:LTE:MEAS:CAGGregation:FREQuency:AGGRegated:CENTer?
CONFigure:LTE:MEAS:CAGGregation:FREQuency:AGGRegated:HIGH?
CONFigure:LTE:MEAS:CAGGregation:CBANdwidth:AGGRegated?
CONFigure:LTE:MEAS:CAGGregation:MCARrier:ENHanced CC1
Top