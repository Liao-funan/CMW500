# Configuring Channel Frequencies

Module: WLAN Signaling
Source: 9117fed6dc544ff5.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
Configuring Channel Frequencies
Configuring Channel Frequencies
20-MHz channel
// *****************************************************************************
// Select the channel bandwidth.
// *****************************************************************************
CONFigure:WLAN:SIGN:RFSettings:OCWidth BW20
// *****************************************************************************
// Select the channel and query the channel center frequency.
// Configure the frequency offset.
// *****************************************************************************
CONFigure:WLAN:SIGN:RFSettings:CHANnel 10
CONFigure:WLAN:SIGN:RFSettings:FREQuency?
CONFigure:WLAN:SIGN:RFSettings:FOFFset 0
40-MHz channel
// *****************************************************************************
// Select the channel bandwidth.
// *****************************************************************************
CONFigure:WLAN:SIGN:RFSettings:OCWidth BW40
// *****************************************************************************
// Select the 40-MHz channel and query its center frequency.
// Configure the frequency offset.
// *****************************************************************************
CONFigure:WLAN:SIGN:RFSettings:CHANnel 10
CONFigure:WLAN:SIGN:RFSettings:FREQuency?
CONFigure:WLAN:SIGN:RFSettings:FOFFset 0
// *****************************************************************************
// Configure which of the two 20-MHz channels is the primary channel.
// Query the center frequency and channel number of the primary 20-MHz channel.
// *****************************************************************************
CONFigure:WLAN:SIGN:RFSettings:NPINdex 1
CONFigure:WLAN:SIGN:RFSettings:NPFRequency?
CONFigure:WLAN:SIGN:RFSettings:NPCHannel?
Top