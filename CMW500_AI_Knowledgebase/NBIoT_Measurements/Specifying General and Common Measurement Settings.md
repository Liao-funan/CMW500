# Specifying General and Common Measurement Settings

Module: NBIoT Measurements
Source: f4a9af054f5643db.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
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
// Define signal routing and perform RF and analyzer settings:
// Center frequency 1850 MHz, frequency offset 1 kHz, peak power -2 dBm,
// no user margin and 1 dB mixer level offset.
// *****************************************************************************
ROUTe:NIOT:MEAS:SCENario:SALone RF1C, RX1
CONFigure:NIOT:MEAS:RFSettings:EATTenuation 2
CONFigure:NIOT:MEAS:BAND OB2
CONFigure:NIOT:MEAS:RFSettings:FREQuency 1850E+6
CONFigure:NIOT:MEAS:RFSettings:FOFFset 1000
CONFigure:NIOT:MEAS:RFSettings:ENPower -2
CONFigure:NIOT:MEAS:RFSettings:UMARgin 0
CONFigure:NIOT:MEAS:RFSettings:MLOFfset 1
Top