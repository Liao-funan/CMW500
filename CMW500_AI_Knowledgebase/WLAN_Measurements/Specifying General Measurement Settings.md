# Specifying General Measurement Settings

Module: WLAN Measurements
Source: 578344625e4a4d9a.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Specifying General Measurement Settings
Specifying General Measurement Settings
// *****************************************************************************
// Initial system-reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
 
// *****************************************************************************
// Define signal routing, perform RF and analyzer settings for a WLAN
// signal with a carrier frequency of 2422 MHz, a peak power of 17 dBm,
// no user margin and 1 dB mixer level offset.
// *****************************************************************************
ROUTe:WLAN:MEAS:SCENario:SALone RF1C, RX1
CONFigure:WLAN:MEAS:RFSettings:EATTenuation 2
CONFigure:WLAN:MEAS:RFSettings:FREQuency:BAND B24Ghz
CONFigure:WLAN:MEAS:RFSettings:FREQuency 2422E+6
CONFigure:WLAN:MEAS:RFSettings:ENPower 17
CONFigure:WLAN:MEAS:RFSettings:UMARgin 0
CONFigure:WLAN:MEAS:RFSettings:MLOFfset 1
 
// *****************************************************************************
// Define input signal settings for IEEE 802.11n:
// Select standard, receive mode, burst type, bandwidth and I/Q swap.
// *****************************************************************************
CONFigure:WLAN:MEAS:ISIGnal:STANdard HTOFdm
CONFigure:WLAN:MEAS:ISIGnal:RMODe SISO
CONFigure:WLAN:MEAS:ISIGnal:BTYPe MIXed
CONFigure:WLAN:MEAS:ISIGnal:BWIDth BW20
CONFigure:WLAN:MEAS:ISIGnal:IQSWap OFF
// *****************************************************************************
// Alternatively define input signal settings for IEEE 802.11ac: Set standard,
// receive mode, evaluation length, bandwidth and channel distance.
// *****************************************************************************
CONFigure:WLAN:MEAS:ISIGnal:STANdard VHTofdm
CONFigure:WLAN:MEAS:ISIGnal:RMODe SMIMo
CONFigure:WLAN:MEAS:ISIGnal:OFDM:ELENgth 1377
CONFigure:WLAN:MEAS:ISIGnal:BWIDth BW88mhz
CONFigure:WLAN:MEASISIGnal:CDIStance 80
Top